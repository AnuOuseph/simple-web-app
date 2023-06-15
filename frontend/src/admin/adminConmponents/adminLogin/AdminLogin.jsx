/* eslint-disable no-unused-vars */
import React, { useState } from 'react'
import { Link, useNavigate } from 'react-router-dom'
import axios from 'axios'


function AdminLogin() {
  const [adminEmail,setAdminEmail] = useState('')
  const [adminPassword,setAdminPassword] = useState('')
  const [error,setError] = useState(false)
  const [loading,setLoading] = useState(false)
  const navigate = useNavigate()
  
  const handleSubmit = async(e)=>{
    e.preventDefault();
    try {
      const config = {
        headers: {
          "Content-type":"application/json"
        }
      }
      console.log("jhsgdyufwueu");
      const {data} = await axios.post("http://localhost:5000/api/admin/login", {adminEmail,adminPassword}, config)
      localStorage.setItem("admininfo",JSON.stringify(data))
      navigate('/admin')
      setError("")
      console.log(data);
      console.log("nooooooooooooooo");

    } catch (error) {
      setError("Invalid Email or Password")
      console.log(error.message)
    }
    
  }
  return (
    <>
    <div className='bg-white grid h-screen place-items-center'>
      <div className='items-center justify-center mx-auto h-auto border shadow bg-gradient-to-br from-green-300 to-black bg-gradient-to-br" w-96'>
        <div className='p-10'>
          <form onSubmit={handleSubmit}>
            <div>
            <h1 className="text-xl font-bold top-right">AdminPanel.</h1>
            </div>
            <div>
              <p className='py-2'>Please enter your credentials.</p>
            </div>
            <div className='my-4'>
                <input className='py-2 border w-60 shadow rounded px-4 outline-none' type="email" name="adminEmail" value={adminEmail} onChange={(e)=>setAdminEmail(e.target.value)} placeholder='Email..' />
            </div>
            <div className='my-4'>
                <input className='py-2 border w-60 shadow rounded px-4 outline-none' type="password" name='adminPassword' value={adminPassword} onChange={(e)=>setAdminPassword(e.target.value)} placeholder='Password..' />
            </div>
            <div className='my-4'>
                <button className='border rounded px-4 py-1 text-md outline-none text-white' type='submit'>Login</button>
            </div>
          </form>
        </div>
      </div>
    </div>
    </>
  )
}

export default AdminLogin
