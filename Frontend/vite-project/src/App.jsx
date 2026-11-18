import React from 'react'
import Signup from './Pages/Signup'
import Login from './Pages/Login'
import { Navigate, Route, Routes } from 'react-router-dom'

import Layout from './Component/Layout'
import Product from './Pages/Product'
import Categories from './Pages/Categories'

const App = () => {
  return (
   <Routes>
    <Route path='/' element={<Signup/>} />
    <Route path='/Login' element={<Login/>} />
    

    <Route element={<Layout/>}>
<Route path="/" element={<Navigate to="/products" />} />
<Route path='/Product' element={<Product/>} />
    <Route path='/Categories' element={<Categories/>} />
    

    </Route>
   </Routes>
  )
}

export default App