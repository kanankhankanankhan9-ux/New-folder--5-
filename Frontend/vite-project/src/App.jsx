import React from 'react'
import Signup from './Pages/Signup'
import Login from './Pages/Login'
import { Route, Routes } from 'react-router-dom'
import Dashboard from './Pages/Dashboard'

const App = () => {
  return (
   <Routes>
    <Route path='/' element={<Signup/>} />
    <Route path='/Login' element={<Login/>} />
    <Route path='/Dashboard' element={<Dashboard />} />
   </Routes>
  )
}

export default App