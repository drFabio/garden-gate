import { useState } from 'react'
import { supabase } from '../../utils/supabaseClient'


/**
 * Abstraxt login flow 
 */
export const useLogin = () => {
    const [loading, setLoading] = useState<boolean>(false)
    const handleLogin = async (email: string) => {
        console.log(`Trying to login with ${email}`)
        try {
            setLoading(true)
            const { error } = await supabase.auth.signInWithOtp({ email })
            if (error) throw error
            alert('Check your email for the login link!')
        } catch (error: any) {
            alert(error.error_description || error.message)
        } finally {
            setLoading(false)
        }
    }
    return { loading, handleLogin, }
}