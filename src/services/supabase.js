import { createClient } from "@supabase/supabase-js";

export const supabaseUrl = "https://lpbepsjgeshtxqkizmtt.supabase.co";
const supabaseKey =
  "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6ImxwYmVwc2pnZXNodHhxa2l6bXR0Iiwicm9sZSI6ImFub24iLCJpYXQiOjE3MDE0MjMxNzQsImV4cCI6MjAxNjk5OTE3NH0.aUsu2Gw0RozJZtco1iXapt4S7GSwC-ikokYbSH4jX0U";
const supabase = createClient(supabaseUrl, supabaseKey);

export default supabase;
