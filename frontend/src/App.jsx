/* eslint-disable no-unused-vars */

import './App.css'
import { BrowserRouter, Routes, Route } from 'react-router-dom'
import Home from './pages/Home'
import Login from './pages/Login'
import Signup from './pages/Signup'
import Profile from './pages/Profile'
import AdminHome from './admin/adminPages/AdminDashboard'
import AdminLoginPage from './admin/adminPages/AdminLogin'
import EditPage from './admin/adminPages/EditPage'
import AddPage from './admin/adminPages/AddPage'


function App() {

  return (
    <>
    <BrowserRouter>
      <Routes>
        <Route path='/' element={<Home/>} />
      </Routes>
      <Routes>
        <Route path='/login' element={<Login/>} />
      </Routes>
      <Routes>
        <Route path='/signup' element={<Signup/>} />
      </Routes>
      <Routes>
        <Route path='/profile' element={<Profile/>} />
      </Routes>
      <Routes>
        <Route path='/admin' element={<AdminHome/>} />
      </Routes>
      <Routes>
        <Route path='/admin/login' element={<AdminLoginPage/>} />
      </Routes>
      <Routes>
        <Route path='/admin/edit-user' element={<EditPage/>} />
      </Routes>
      <Routes>
        <Route path='/admin/add-user' element={<AddPage/>} />
      </Routes>
    </BrowserRouter>
    </>
  )
}

export default App
