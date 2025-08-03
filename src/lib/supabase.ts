import { createClient } from "@supabase/supabase-js";

const supabaseUrl = "https://qdqwnodowkudmadhtgcb.supabase.co";
const supabaseKey =
  "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6InFkcXdub2Rvd2t1ZG1hZGh0Z2NiIiwicm9sZSI6ImFub24iLCJpYXQiOjE3NTQwODc0NzksImV4cCI6MjA2OTY2MzQ3OX0.rss09Mm_pjLH9JnmxnkzrZurYyGGir4IYamu8YtBmA8";

export const supabase = createClient(supabaseUrl, supabaseKey);
