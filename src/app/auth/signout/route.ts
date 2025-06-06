// app/auth/signout/route.ts
import { createServerClient } from '@/lib/supabase'
import { redirect } from 'next/navigation'

export async function POST() {
  const supabase = createServerClient()
  await supabase.auth.signOut()
  redirect('/')
}