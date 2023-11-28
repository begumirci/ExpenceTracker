import React from 'react'
import './login.css';
import { useRef } from 'react';
import Button from '../../Design/Button';
import Header from '../Header/Header';
import { Link } from 'react-router-dom';
import PasswordInput, { EmailInput, Logout, Signin, User } from '../../Design/Input';

export default function Login() {
   const myForm = useRef();
   function handleForm(e){
    e.preventDefault();
     const formData = new FormData(myForm.current);
     const user = Object.fromEntries(formData);
     Signin(user);
     User();
   }
  
   function close(){
    Logout();
   }
    
  return (
      <>
      <Header title={'Login'} />
      <div className='container'>
        <form className='login-form' ref={myForm} onSubmit={handleForm}>
            <EmailInput />
            <PasswordInput />
            <Button title={'Login'} />
            <Link to='/forgot-password'><p className='forgot-password'>Forgot Password?</p></Link>
            <p className='have-account'>Don’t have an account yet? <Link to="/signup">Sign Up</Link></p>
        </form>
        <button onClick={close}>Çık</button>
      </div>
      </>
  )
}
