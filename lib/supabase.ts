import { createClient } from "@supabase/supabase-js";
import { config } from "./config";

const supabaseUrl = config.env.supabase.supabaseUrl;
const supabaseKey = config.env.supabase.supabaseKey;

export const supabase = createClient(supabaseUrl, supabaseKey);