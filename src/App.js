import React from 'react'
import Login from './routes/Login'
import  Register from './routes/Register'
import { BrowserRouter as Router , Routes,Route } from 'react-router-dom'
import ForgotPassword from './routes/ForGotPassword'
import ResetPassword from './routes/ResetPasword'
import './App.css'
function App() {
  return (
    <>
     <Router>
      <Routes>
        <Route path='/' element={<Login/>}/>
        <Route path='/Signup' element={<Register/>}/>
        <Route path='/ForgotPassword' element={<ForgotPassword/>}/>
        <Route path='/ResetPassword' element={<ResetPassword/>}/>
      </Routes>
     </Router>
    </>
  )
}

export default App