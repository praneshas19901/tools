-- One private JSON workspace per authenticated Neon Auth user.
-- Run once against the Neon database before deploying the API.
create table if not exists public.project_workspaces (
    user_id uuid primary key,
    projects jsonb not null default '[]'::jsonb check (jsonb_typeof(projects) = 'array'),
    updated_at timestamptz not null default now()
);

alter table public.project_workspaces enable row level security;
alter table public.project_workspaces force row level security;

drop policy if exists project_workspace_owner_policy on public.project_workspaces;
create policy project_workspace_owner_policy
    on public.project_workspaces
    for all
    using (user_id::text = current_setting('app.user_id', true))
    with check (user_id::text = current_setting('app.user_id', true));
