import React from 'react'
import Header from '../Header/Header'
import './setup.css'
import Button from '../../Design/Button'
import { useState, useEffect } from 'react'

export default function SetNewAccount() {
    const [color, setColor] = useState(false)
    useEffect(() => {
       setColor(true);
    }, []);
  return (
    <>
    <div className='purple-side'>
      <Header title={'Add new account'} color={color} />
      <div className='container'>
        <h1 className='balance'>Balance</h1>
        <h1 className='price'>$00.0</h1>
      </div>
    </div>
    <div className='white-side'>
        <div className='container'>
            <form className='login-form'>
                <input type="text" name='name' placeholder='Name' />
                <input type="text"  />
            </form>   
            <Button title={'Continue'} />
        </div>
    </div>

    </>
  )
}
