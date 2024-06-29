import React from 'react'
import { Route, Routes } from 'react-router-dom'
import LoginPage from './Components/auth/Login/LoginPage'
import SignUpPage from './Components/auth/SignUp/SignUpPage'

const App = () => {
  return (
    <>
      <Routes>
        <Route path='/login' element={<LoginPage />} />
        <Route path='/signup' element={<SignUpPage />} />
      </Routes>
    </>
  )
}

export default App
