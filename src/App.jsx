import React from 'react'
import './App.css'
import SignupSucces from './Components/Setup/SignupSucces'
import Login from './Components/Login/Login'
import { Outlet } from 'react-router-dom'
import LauncScreen from './Components/Onboarding/LauncScreen'



function App() {
  

  return (
    <>
     <LauncScreen />
    </>
  )
}

export default App
