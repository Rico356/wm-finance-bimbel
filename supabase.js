import { createClient } from 'https://cdn.jsdelivr.net/npm/@supabase/supabase-js/+esm'

const supabaseUrl = "https://xexsxbuehvqgdwfialsb.supabase.co"
const supabaseKey = "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6InhleHN4YnVlaHZxZ2R3ZmlhbHNiIiwicm9sZSI6ImFub24iLCJpYXQiOjE3NzA5NzYxMzksImV4cCI6MjA4NjU1MjEzOX0.Lf4o4ZCuf-sE-cJCaKnIkrbz2MnK96J0khRkik9_Zb8"

export const supabase = createClient(supabaseUrl, supabaseKey)
