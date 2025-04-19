import { createClient } from '@supabase/supabase-js';


const URL = 'https://rmmqfmbbgkqjvamnnfcc.supabase.co';


const API_KEY = 'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6InJtbXFmbWJiZ2txanZhbW5uZmNjIiwicm9sZSI6ImFub24iLCJpYXQiOjE3NDQ0ODEwNzEsImV4cCI6MjA2MDA1NzA3MX0.6atNsrjvC-MmbNVG8OMf-Sfa-zuZaa4PPyho0UkIQuc';

export const supabase = createClient(URL, API_KEY);
