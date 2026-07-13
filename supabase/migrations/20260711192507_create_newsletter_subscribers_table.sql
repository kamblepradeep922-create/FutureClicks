/*
# Create newsletter_subscribers table

1. New Tables
- `newsletter_subscribers`
  - `id` (uuid, primary key, auto-generated)
  - `email` (text, unique, not null) — subscriber's email address
  - `source` (text, nullable) — where the subscription came from (e.g. 'footer')
  - `status` (text, default 'active') — subscription status
  - `created_at` (timestamptz, default now()) — when they subscribed

2. Security
- Enable RLS on `newsletter_subscribers`.
- INSERT policy for anon + authenticated (public newsletter signup, no sign-in needed).
- No SELECT/UPDATE/DELETE from the frontend — admin reads/manages subscribers
  via the Supabase dashboard or service-role key.

3. Important Notes
- Single-tenant, no-auth app — policies use `TO anon, authenticated`.
- The `email` column has a UNIQUE constraint so duplicate subscriptions
  are rejected automatically (the form handles this gracefully).
- An index on `created_at` supports dashboard sorting.
*/

CREATE TABLE IF NOT EXISTS newsletter_subscribers (
  id uuid PRIMARY KEY DEFAULT gen_random_uuid(),
  email text UNIQUE NOT NULL,
  source text,
  status text NOT NULL DEFAULT 'active',
  created_at timestamptz DEFAULT now()
);

ALTER TABLE newsletter_subscribers ENABLE ROW LEVEL SECURITY;

-- Allow anyone to subscribe (insert their email)
DROP POLICY IF EXISTS "anon_insert_subscribers" ON newsletter_subscribers;
CREATE POLICY "anon_insert_subscribers"
ON newsletter_subscribers FOR INSERT
TO anon, authenticated WITH CHECK (true);

-- Index for dashboard sorting by most recent
CREATE INDEX IF NOT EXISTS subscribers_created_at_idx ON newsletter_subscribers (created_at DESC);
