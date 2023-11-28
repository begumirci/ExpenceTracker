import React from 'react'
import Header from '../Header/Header'
import Button from '../../Design/Button'
import { Link } from 'react-router-dom'
import './login.css';
import { EmailInput } from '../../Design/Input';

export default function ForgotPassword() {
  return (
    <>
          <Header title={'Forgot Password'} />
          <div className='container'>
            <div className='forgot'>
                Don’t worry.
                Enter your email and we’ll send you a link to reset your password.
            </div>
             <EmailInput />
             <Link to='/reset-password'><Button title={'Continue'} /></Link>
             
          </div>
    
    </>
  )
}
