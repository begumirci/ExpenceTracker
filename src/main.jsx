import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App.jsx'
import './index.css'

import Login from './Components/Login/Login.jsx'
import SignUp from './Components/Login/Signup.jsx'
import Onboarding from './Components/Onboarding'
import { RouterProvider, createBrowserRouter } from 'react-router-dom'
import ForgotPassword from './Components/Login/ForgotPassword.jsx'
import ResetPassword from './Components/Login/ResetPassword.jsx'
import SetupBegin from './Components/Setup/SetupBegin.jsx'
import SetNewAccount from './Components/Setup/SetNewAccount.jsx'


const router = createBrowserRouter([
  {
    path:'/',
    element:<App />,
    children:[
      {
        index:true,
        element:<Onboarding />
      },
      {
        path:'/login',
        element:<Login />
      },
      {
        path:'/signup',
        element:<SignUp />
      },
      {
        path:'/forgot-password',
        element:<ForgotPassword />
      },
      {
        path:'/reset-password',
        element:<ResetPassword />
      },
      {
        path:'/setup-account',
        element:<SetupBegin />
      },
      {
        path:'/set-new-account',
        element:<SetNewAccount />
      }
    ]
  }
])

ReactDOM.createRoot(document.getElementById('root')).render(
 <RouterProvider router={router} />
)
