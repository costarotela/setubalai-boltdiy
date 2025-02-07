import { createClient } from '@supabase/supabase-js'

const supabaseUrl = 'https://pfebiivuiwvyozmuznbm.supabase.co'
const supabaseKey = 'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6InBmZWJpaXZ1aXd2eW96bXV6bmJtIiwicm9sZSI6InNlcnZpY2Vfcm9sZSIsImlhdCI6MTczNzMxNzc3NywiZXhwIjoyMDUyODkzNzc3fQ.1RcvtipIKdtBha33lK6rF6jK8KKC4bt8MZvudsnlmRQ'

export const supabase = createClient(supabaseUrl, supabaseKey)
