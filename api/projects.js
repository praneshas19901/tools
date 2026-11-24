import { neon } from '@neondatabase/serverless';
import { createRemoteJWKSet, jwtVerify } from 'jose';

const MAX_PROJECTS_BYTES = 2 * 1024 * 1024;
const jwksUrl = process.env.NEON_AUTH_JWKS_URL;
const jwks = jwksUrl ? createRemoteJWKSet(new URL(jwksUrl)) : null;

function send(res, status, body) {
  res.status(status).json(body);
}

export default async function handler(req, res) {
  res.setHeader('Access-Control-Allow-Origin', '*');
  res.setHeader('Access-Control-Allow-Methods', 'GET, PUT, OPTIONS');
  res.setHeader('Access-Control-Allow-Headers', 'Authorization, Content-Type');
  res.setHeader('Cache-Control', 'no-store');

  if (req.method === 'OPTIONS') return res.status(204).end();
  if (!['GET', 'PUT'].includes(req.method)) return send(res, 405, { error: 'Method not allowed.' });

  const databaseUrl = process.env.NEON_DATABASE_URL;
  const neonAuthBaseUrl = process.env.NEON_AUTH_BASE_URL;
  if (!databaseUrl || !neonAuthBaseUrl || !jwks) {
    return send(res, 503, { error: 'Project sync API is not configured.' });
  }

  const authorization = req.headers.authorization || '';
  const match = authorization.match(/^Bearer\s+(.+)$/i);
  if (!match) return send(res, 401, { error: 'Sign in is required.' });

  let userId;
  try {
    const issuer = new URL(neonAuthBaseUrl).origin;
    const { payload } = await jwtVerify(match[1], jwks, { issuer });
    userId = payload.sub;
  } catch {
    return send(res, 401, { error: 'Your Neon Auth session is invalid or expired. Please sign in again.' });
  }
  if (typeof userId !== 'string') return send(res, 401, { error: 'Sign in is required.' });

  const sql = neon(databaseUrl);
  try {
    // RLS reads this transaction-local identity. It comes only from a verified Neon Auth JWT,
    // never from a client-supplied user id.
    if (req.method === 'GET') {
      const results = await sql.transaction([
        sql`select set_config('app.user_id', ${userId}, true)`,
        sql`select projects from project_workspaces where user_id = ${userId}::uuid`
      ]);
      const row = results[1][0];
      return send(res, 200, { exists: Boolean(row), projects: row?.projects ?? [] });
    }

    const projects = req.body?.projects;
    if (!Array.isArray(projects)) return send(res, 400, { error: 'projects must be a JSON array.' });
    if (Buffer.byteLength(JSON.stringify(projects), 'utf8') > MAX_PROJECTS_BYTES) {
      return send(res, 413, { error: 'Project data exceeds the 2 MB sync limit.' });
    }

    await sql.transaction([
      sql`select set_config('app.user_id', ${userId}, true)`,
      sql`insert into project_workspaces (user_id, projects, updated_at)
          values (${userId}::uuid, ${JSON.stringify(projects)}::jsonb, now())
          on conflict (user_id) do update
          set projects = excluded.projects, updated_at = now()`
    ]);
    return send(res, 200, { saved: true });
  } catch (error) {
    console.error('Project sync database error:', error);
    return send(res, 500, { error: 'Could not sync projects right now.' });
  }
}
