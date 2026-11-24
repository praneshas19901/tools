# Project Tracker cloud sync setup

The tracker keeps its existing IndexedDB and optional `projects.json` file saves. When a user signs in, it also synchronizes that user's workspace with Neon. Supabase Auth supplies the account/session; a server-side Vercel function verifies the access token before it accesses Neon. The browser never receives the Neon connection string.

## 1. Prepare Neon

Create or select a Neon PostgreSQL database, then run [`db/project-workspaces.sql`](../db/project-workspaces.sql) in the Neon SQL Editor. It creates one JSON workspace per Supabase Auth user and enables forced row-level security. API requests set the row policy identity from the server-verified Supabase user ID.

Use a dedicated Neon database role for the API when possible. It must not have `BYPASSRLS`; `FORCE ROW LEVEL SECURITY` makes the policy apply to the table owner as well. Grant the role `USAGE` on `public` and `SELECT`, `INSERT`, and `UPDATE` on `public.project_workspaces`.

## 2. Deploy the API

Import this repository into Vercel (or deploy it as a separate Vercel project). The function is [`api/projects.js`](../api/projects.js), served at `/api/projects`. Set these Vercel environment variables for every deployment environment:

| Variable | Value |
| --- | --- |
| `NEON_DATABASE_URL` | Neon connection string for the dedicated API role; keep it server-side. This is separate from all Supabase settings. |
| `SUPABASE_URL` | Supabase project URL used for tracker sign-in. |
| `SUPABASE_ANON_KEY` | Supabase anon/publishable key used to verify bearer sessions. |

The Supabase URL/key must belong to the same Auth project used by the tracker. Configure email/password sign-in and the allowed redirect/site URLs in Supabase Auth. The tracker registers users and signs them in; if email confirmation is enabled, users verify their address before signing in.

## 3. Configure GitHub Pages

Add these repository or environment secrets for the existing GitHub Pages workflow:

| Secret | Value |
| --- | --- |
| `SUPABASE_URL` | Same Supabase project URL. |
| `SUPABASE_ANON_KEY` | Same public anon/publishable key. |
| `PROJECT_API_URL` | Full API URL, for example `https://your-vercel-app.vercel.app/api/projects`. |

The workflow keeps the Calorie Tracker's existing Supabase-only injection separate from the Project Tracker settings. It embeds the Supabase public settings and API URL in `project-tracker.html`. Never put `NEON_DATABASE_URL` in a GitHub Pages secret or HTML.

## Sync behavior

- Unsigned-in use continues to save locally and to the linked `projects.json` file.
- The API derives the owner ID from a verified Supabase access token. It ignores client-supplied owner IDs, and the Neon table has forced row-level security.
- Neon is the source of truth after sign-in. If a cloud workspace exists, it replaces this device's cached and linked-file contents.
- If there is no cloud workspace yet, the current local projects seed Neon automatically at first sign-in.
- Every later edit is sent to Neon first. IndexedDB and the linked JSON file update only after Neon confirms the write. If Neon is unavailable, the app reports the failure and leaves the local mirror unchanged.
- Each user's workspace is a single JSON document. Concurrent edits from multiple devices use last-write-wins behavior; there is no field-level merge.
- Other apps can use the same server-side `NEON_DATABASE_URL`, with their own API routes and app-specific tables/policies. This `/api/projects` route only accesses `project_workspaces`.
