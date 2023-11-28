import './design.css';
import React from 'react'

export function Button2(){
  return (
    <button className='btn2'>Login</button>
  )
}

export default function Button({title}) {
  return (
    <button className='btn'>{title}</button>
  )
}
