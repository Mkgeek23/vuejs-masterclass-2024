import { createClient } from '@supabase/supabase-js'

// Create a single supabase client for interacting with your database
export const supabase = createClient(
  'https://jbglmdvilkkblhfhwefs.supabase.co',
  'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6ImpiZ2xtZHZpbGtrYmxoZmh3ZWZzIiwicm9sZSI6ImFub24iLCJpYXQiOjE3NDE3NjcxMTMsImV4cCI6MjA1NzM0MzExM30.YKDpV9xIG6U4sAoSfGBZGlXemStBmL-8X8hsbJYmVIc',
)
