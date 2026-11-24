# Project Tracker Neon Auth and cloud sync

The Project Tracker uses Neon Auth for login and Neon PostgreSQL's Data API for workspace storage. It runs entirely on GitHub Pages and does not use Supabase or a server-side API. The Calorie Tracker keeps its existing Supabase setup and its separate workflow injection.

The Auth and Data API URLs are public endpoint addresses, not credentials. The Neon SDK obtains a short-lived authenticated token and sends it with each database request. PostgreSQL grants and row-level security restrict each user to their own workspace. Never put a Neon database connection string or password in this static site.

## 1. Enable Neon Auth and the Data API

In Neon Console, open the project and branch for Project Tracker. Enable Managed Neon Auth and the Data API, then copy both URLs. The Auth URL usually ends in `/dbname/auth`; the Data API URL usually ends in `/dbname/rest/v1`.

Add your exact GitHub Pages origin to Neon Auth's trusted domains, for example `https://praneshas19901.github.io`. If you use a repository path, the origin is still the host only (no `/repository-name`). Configure email/password sign-up and email verification as desired.

Managed Neon Auth is available on AWS-region projects and cannot be enabled when IP Allow or Private Networking is active. Supabase accounts and password hashes do not transfer to Neon Auth; tracker users must register a Neon Auth account. This does not affect Calorie Tracker's Supabase accounts.

## 2. Create the workspace table and ownership policy

Run [`db/project-workspaces.sql`](../db/project-workspaces.sql) in the Neon SQL Editor after enabling the Data API and Neon Auth. The script creates one JSON workspace per Auth user, grants the authenticated role the required table access, and applies forced row-level security using `auth.user_id()` from the signed-in request's JWT.

The page does not filter by a browser-supplied owner ID when reading. The database policy decides which rows are visible. Writes set the workspace user ID from the Auth session, and the RLS `WITH CHECK` condition independently verifies it against the request JWT.

## 3. Add GitHub Actions secrets

In the repository, open **Settings → Secrets and variables → Actions → New repository secret** and add:

| Secret | Value |
| --- | --- |
| `NEON_AUTH_URL` | The Auth URL copied from Neon Console. |
| `NEON_DATA_API_URL` | The Data API URL copied from Neon Console. |

The GitHub Pages workflow injects these values only into `project-tracker.html`. Its separate `SUPABASE_URL` and `SUPABASE_ANON_KEY` secrets are used only for `calorietracker-v2.html`. No Vercel deployment or `NEON_DATABASE_URL` secret is needed.

After adding both secrets, run **Actions → Deploy to GitHub Pages → Run workflow**, or push a change to `main`. The workflow publishes the static app with the two endpoint URLs.

## Sync behavior

- Neon is the source of truth after sign-in. An existing Neon workspace replaces this device's cached and linked-file contents.
- If the account has no cloud workspace, the current local projects seed Neon at first sign-in.
- Every later edit is written to Neon first. IndexedDB and a linked `projects.json` file mirror only confirmed cloud writes.
- If Neon is unavailable, the app reports the failure and does not update the local JSON mirror.
- Each account has one JSON workspace. Concurrent edits from multiple devices use last-write-wins behavior; there is no field-level merge.
