import { supabase } from '@/lib/supabaseClient'
import type { LoginForm, RegisterForm } from '@/types/authForm'

export const register = async (formData: RegisterForm) => {
  const { data, error } = await supabase.auth.signUp({
    email: formData.email,
    password: formData.password,
  })

  if (error) {
    console.log(error)
    return false
  }

  if (data.user) {
    const { error } = await supabase.from('profiles').insert({
      id: data.user.id,
      username: formData.username,
      full_name: formData.firstname + ' ' + formData.lastname,
    })
    if (error) console.log('PROFILES ERROR', error)
  }
  return true
}
export const login = async (formData: LoginForm) => {
  const { error } = await supabase.auth.signInWithPassword({
    email: formData.email,
    password: formData.password,
  })

  if (error) return console.log(error)
  return true
}
