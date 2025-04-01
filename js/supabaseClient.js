import {createClient} from 'https://cdn.jsdelivr.net/npm/@supabase/supabase-js/+esm'

const SUPABASE_URL = 'https://oytmvgfxzawvwiabripq.supabase.co';
const SUPABASE_KEY = 'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6Im95dG12Z2Z4emF3dndpYWJyaXBxIiwicm9sZSI6ImFub24iLCJpYXQiOjE3NDMzNjkyMDksImV4cCI6MjA1ODk0NTIwOX0.XoGQUiLJ2NsnopX7Fhx7qgxbdClOO_cPG6_p0I_cHso';

const supabase = createClient(SUPABASE_URL, SUPABASE_KEY);