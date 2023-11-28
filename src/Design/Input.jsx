import React, { useEffect, useState } from 'react'
import eye from './eye.svg';
import { createClient } from "@supabase/supabase-js";
import Button from './Button';

const url = 'https://upalzegnwdofjolnznpq.supabase.co';
const key = 'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6InVwYWx6ZWdud2RvZmpvbG56bnBxIiwicm9sZSI6InNlcnZpY2Vfcm9sZSIsImlhdCI6MTcwMDAzODY0NSwiZXhwIjoyMDE1NjE0NjQ1fQ.Tkc0V4RTC-pwpYdE1lIM08hhX7UC6Cm0Yc0s0LJC3Js';

const supabase = createClient(url, key);

export async function Register(user){
    const { data, error } = await supabase.auth.signUp({
        email: user.email,
        password: user.password,
        options: {
            data:{
                name:user.name
            }
        }
    })

}

export function User(){
    
        supabase.auth.onAuthStateChange((event, session) => {
            console.log(session?.user);
            setVisible(true);
        }) 
}


export async function Signin(user){
    const { data, error } = await supabase.auth.signInWithPassword({
        email: user.email,
        password: user.password,
    })
}

export async function Logout(){
    const { error } = await supabase.auth.signOut();
}

export default function PasswordInput() {
    const [showPassword, setShowPassword] = useState(false);
    function handlePassword() {
        if (showPassword == false) {
            setShowPassword(true);
        }
        if (showPassword == true) {
            setShowPassword(false)
        }
    }
    return (
        <div className='relative'>
            <input type={showPassword ? 'text' : 'password'} name='password' placeholder='Password' />
            <img className='eye' src={eye} alt="" onClick={handlePassword} />
        </div>
    )
}

export function EmailInput(){
    return(
        <input type="email" name='email' placeholder='Email' />
    )
}

export function NameInput(){
    return(
        <input type="text" name='name' placeholder='Name' />
    )
    
}