import React from "react";
import { createClient } from "@supabase/supabase-js";

const url = 'https://upalzegnwdofjolnznpq.supabase.co';
const key = 'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6InVwYWx6ZWdud2RvZmpvbG56bnBxIiwicm9sZSI6InNlcnZpY2Vfcm9sZSIsImlhdCI6MTcwMDAzODY0NSwiZXhwIjoyMDE1NjE0NjQ1fQ.Tkc0V4RTC-pwpYdE1lIM08hhX7UC6Cm0Yc0s0LJC3Js';

const supabase = createClient(url, key);
