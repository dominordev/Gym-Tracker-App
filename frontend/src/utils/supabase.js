import { createClient } from "@supabase/supabase-js";

const supabaseUrl = "https://xrornjnoqpukkiatqtmh.supabase.co";

const supabaseKey = "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6Inhyb3Juam5vcXB1a2tpYXRxdG1oIiwicm9sZSI6ImFub24iLCJpYXQiOjE3ODQ1MDgxOTAsImV4cCI6MjEwMDA4NDE5MH0.P7x8frJLaXkIv5_mXPxNIT-COcka9ByzDP1rRY3XXoA";

export const supabase = createClient(
    supabaseUrl,
    supabaseKey,
    {
        auth: {
            persistSession: true,
            autoRefreshToken: true,
            detectSessionInUrl: true,
        },
    }
);