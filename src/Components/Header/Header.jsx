import React from 'react'
import arrow from './arrow.svg';
import arrowhite from './arrow left.svg';
import '../../index.css'
import { useNavigate } from 'react-router-dom';

export default function Header({title, color}) {
  const navigate = useNavigate();
  return (
    <div className='header'>
      {
        color ? <img src={arrowhite} alt="" onClick={() => navigate(-1)} /> :
         <img src={arrow} alt="" onClick={() => navigate(-1)} />
      }
         
          <h1 className={color ? 'header-h2' : 'header-h1'}>{title}</h1>
          <div className='kare'></div>
    </div>
  )
}
