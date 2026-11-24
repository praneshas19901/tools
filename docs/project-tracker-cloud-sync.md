# Project Tracker Neon Auth and cloud sync

The Project Tracker uses Neon Auth for login and Neon PostgreSQL for workspaces. It does not use Supabase. The Calorie Tracker keeps its existing Supabase setup and its own workflow injection. The browser receives only the public Neon Auth URL and the API URL; the Neon database connection string stays on the server.

## 1. Enable Neon Auth

In the Neon Console, enable Managed Better Auth on the database branch used by the tracker, then copy the branch's Auth URL. Add the GitHub Pages site origin to Neon Auth's trusted domains. Configure email/password sign-up and email verification as desired.

Managed Neon Auth is available on AWS-region projects and cannot be enabled when IP Allow or Private Networking is active. Confirm those requirements for the Neon project before relying on cloud login.

Supabase accounts and password hashes do not transfer to Neon Auth. Tracker users must register a Neon Auth account. If a Project Tracker workspace was already created under a Supabase user ID, its `user_id` must be migrated to the new Neon Auth user ID before that account can see it. The Calorie Tracker's Supabase users and database are unaffected.

## 2. Prepare Neon PostgreSQL

Run [`db/project-workspaces.sql`](../db/project-workspaces.sql) in the Neon SQL Editor. It creates one JSON workspace per Neon Auth user and enables forced row-level security. The API verifies the Neon JWT signature and issuer, then uses the verified `sub` as the owner ID in both its query and the row policy.

Use a dedicated Neon database role for the API when possible. It must not have `BYPASSRLS`; `FORCE ROW LEVEL SECURITY` makes the policy apply to the table owner as well. Grant the role `USAGE` on `public` and `SELECT`, `INSERT`, and `UPDATE` on `public.project_workspaces`.

## 3. Deploy the API

Deploy this repository as a Vercel project (or deploy the API directory as its own project). The handler is [`api/projects.js`](../api/projects.js), served at `/api/projects`. Set these Vercel environment variables:

| Variable | Value |
| --- | --- |
| `NEON_DATABASE_URL` | Neon connection string for the dedicated API role; server-side only. |
| `NEON_AUTH_BASE_URL` | The branch's Neon Auth URL. |
| `NEON_AUTH_JWKS_URL` | The Neon Auth JWKS URL, normally `{NEON_AUTH_BASE_URL}/.well-known/jwks.json`. |

The same server-side `NEON_DATABASE_URL` can be used by other apps' server APIs. Each app should use its own API routes, tables, and access policies. This endpoint only accesses `project_workspaces`.

## 4. Configure GitHub Pages

Add these repository or environment secrets for the Pages workflow:

| Secret | Value |
| --- | --- |
| `NEON_AUTH_URL` | The public Neon Auth URL for the tracker branch. |
| `NEON_PROJECT_API_URL` | Full API URL, for example `https://your-vercel-app.vercel.app/api/projects`. |

The workflow injects these Neon-specific values only into `project-tracker.html`. The separate existing Supabase injection still targets only `calorietracker-v2.html`. Do not put `NEON_DATABASE_URL` in GitHub Pages secrets or HTML.

The page loads the pinned `@neondatabase/auth` browser SDK from esm.sh. Neon Auth signs users in, the SDK supplies short-lived JWTs, and the server verifies those JWTs against Neon Auth's JWKS before accessing the database.

## Sync behavior

- Neon is the source of truth after sign-in. An existing Neon workspace replaces this device's cached and linked-file contents.
- If there is no cloud workspace yet, the current local projects seed Neon automatically at first sign-in.
- Every later edit is sent to Neon first. IndexedDB and the linked JSON file update only after Neon confirms the write. If Neon is unavailable, the app reports the failure and leaves the local mirror unchanged.
- Each user's workspace is a single JSON document. Concurrent edits from multiple devices use last-write-wins behavior; there is no field-level merge.
