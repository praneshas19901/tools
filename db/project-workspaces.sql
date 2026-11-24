-- One private JSON workspace per authenticated Neon Auth user.
-- Run once in the Neon SQL Editor after enabling Neon Auth and the Data API.
do $$
begin
    if to_regprocedure('auth.user_id()') is null then
        raise exception 'Neon Data API auth helpers are missing. Enable the Data API for this exact branch and database, configured to use Neon Auth, then rerun this script.';
    end if;
end
$$;

create table if not exists public.project_workspaces (
    user_id text primary key default (auth.user_id()),
    projects jsonb not null default '[]'::jsonb check (jsonb_typeof(projects) = 'array'),
    updated_at timestamptz not null default now()
);

-- Remove the prior policy before changing the earlier UUID-based column type.
drop policy if exists project_workspace_owner_policy on public.project_workspaces;

-- Convert the earlier UUID-based schema if it was already created.
alter table public.project_workspaces
    alter column user_id type text using user_id::text;
alter table public.project_workspaces
    alter column user_id set default (auth.user_id());

alter table public.project_workspaces enable row level security;
alter table public.project_workspaces force row level security;

create policy project_workspace_owner_policy
    on public.project_workspaces
    for all
    to authenticated
    using ((select auth.user_id()) = user_id)
    with check ((select auth.user_id()) = user_id);

grant usage on schema public to authenticated;
grant select, insert, update on public.project_workspaces to authenticated;
