/*
# Create leads table for contact form submissions

1. New Tables
- `leads`
  - `id` (uuid, primary key, auto-generated)
  - `name` (text, not null) — submitter's full name
  - `business` (text, nullable) — optional business name
  - `email` (text, not null) — submitter's email address
  - `phone` (text, not null) — submitter's phone number
  - `service` (text, nullable) — requested service (dropdown selection)
  - `message` (text, not null) — project details / inquiry text
  - `industry` (text, nullable) — which industry landing page the lead came from (null for homepage)
  - `status` (text, default 'new') — lead status for pipeline tracking
  - `created_at` (timestamptz, default now()) — submission timestamp

2. Security
- Enable RLS on `leads`.
- INSERT policy for anon + authenticated (public contact form, no sign-in needed).
- No SELECT/UPDATE/DELETE policies — leads are write-only from the frontend.
  Admin access to read/manage leads is done via the Supabase dashboard or
  service-role key, not the anon-key frontend.

3. Important Notes
- This is a single-tenant, no-auth app (no sign-in screen), so policies
  use `TO anon, authenticated` for INSERT only.
- The frontend never reads leads — it only inserts new rows.
- An index on `created_at` supports dashboard sorting by most recent.
*/

CREATE TABLE IF NOT EXISTS leads (
  id uuid PRIMARY KEY DEFAULT gen_random_uuid(),
  name text NOT NULL,
  business text,
  email text NOT NULL,
  phone text NOT NULL,
  service text,
  message text NOT NULL,
  industry text,
  status text NOT NULL DEFAULT 'new',
  created_at timestamptz DEFAULT now()
);

ALTER TABLE leads ENABLE ROW LEVEL SECURITY;

-- Allow anyone (anon + authenticated) to insert leads from the contact forms
DROP POLICY IF EXISTS "anon_insert_leads" ON leads;
CREATE POLICY "anon_insert_leads"
ON leads FOR INSERT
TO anon, authenticated WITH CHECK (true);

-- Create index for dashboard sorting by most recent
CREATE INDEX IF NOT EXISTS leads_created_at_idx ON leads (created_at DESC);
