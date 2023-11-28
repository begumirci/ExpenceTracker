import React from 'react'
import './setup.css';
import Button from '../../Design/Button';
import { Link } from 'react-router-dom';

export default function SetupBegin() {
  return (
   <>
   <div className='container'>
    <div className='setup-begin'>
        <h2>Let’s setup your account!</h2>
        <h5>Account can be your bank, credit card or your wallet.</h5>
    </div>
    <Link to='/set-new-account'><Button title={'Let’s go'} /></Link>
   </div>
   </>
  )
}
