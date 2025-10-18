import { createClient } from '@supabase/supabase-js'

const supabaseUrl = 'https://ikzfoxcxfymfoqxztsmn.supabase.co'
const supabaseKey = "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6ImlremZveGN4ZnltZm9xeHp0c21uIiwicm9sZSI6ImFub24iLCJpYXQiOjE3NjA3MTkxMzIsImV4cCI6MjA3NjI5NTEzMn0.4UEBhdVxHtUU2at97a9KCsQ21hPm1CR2xSAT4XEx1_8"
export const supabase = createClient(supabaseUrl, supabaseKey);

console.log(supabase)