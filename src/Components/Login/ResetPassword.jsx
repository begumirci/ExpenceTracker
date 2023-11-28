import React from 'react'
import Header from '../Header/Header'
import Button from '../../Design/Button'
import './login.css';

export default function ResetPassword() {
  return (
    <>
    <Header title={'Reset Password'} />
    <div className='container'>
        <form className='login-form'>
            <input type="password" placeholder='New Password' />
            <input type="password" placeholder='Retype new password' />
        </form>
        <Button title={'Continue'} />
    </div>
    </>
  )
}
