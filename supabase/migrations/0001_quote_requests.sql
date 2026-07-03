-- Offerten-Anfragen für individuelle Boxen
create table if not exists public.quote_requests (
  id             uuid primary key default gen_random_uuid(),
  created_at     timestamptz not null default now(),
  company        text not null,
  name           text not null,
  email          text not null,
  phone          text,
  quantity       text not null,
  budget         text not null,
  wishes         text,
  timing         text not null,
  has_addresses  boolean not null default false,
  client_ip      text,
  email_sent     boolean not null default false
);

-- RLS an: kein öffentlicher Zugriff. Die Edge Function nutzt den service_role
-- Key und umgeht RLS. Bewusst KEINE anon/public Policy -> anon kann weder
-- lesen noch schreiben.
alter table public.quote_requests enable row level security;

create index if not exists quote_requests_created_at_idx
  on public.quote_requests (created_at desc);
