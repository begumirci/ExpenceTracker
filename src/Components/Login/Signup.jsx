import React from 'react'
import './login.css';
import Button from '../../Design/Button';
import google from './login-img/google.svg';
import Header from '../Header/Header';
import { Link } from 'react-router-dom';
import PasswordInput, { EmailInput, NameInput } from '../../Design/Input';
import { Register } from '../../Design/Input';




export default function SignUp() {

  function handleFormSign(e){
    e.preventDefault();
    const formData = new FormData(e.target);
    const user = Object.fromEntries(formData);
    
    Register(user);
  }
    
  return (
    <>
    <Header title={'Sign Up'} />
    <div className='container'>
      <form className='login-form' onSubmit={handleFormSign}>
          <NameInput />
          <EmailInput/>
          <PasswordInput/>
          <div className='check-flex'>
              <input type="checkbox" name='check' />
              <p>By signing up, you agree to the <span>Terms of Service and Privacy Policy</span></p>
          </div>
          <Button title={'Sign Up'} />
          <p className='or-with'>Or with</p>
          <button className='btn-flex'>
            <img src={google} alt="" />
            <span>Sign Up with Google</span>
          </button>
          <p className='have-account'>Already have an account? <a href="#">Login</a></p>
      </form>
          </div>
      </>
  )
}
