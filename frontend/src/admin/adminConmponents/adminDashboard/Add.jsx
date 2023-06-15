/* eslint-disable no-useless-escape */
/* eslint-disable no-unused-vars */
import React, { useEffect, useState } from 'react'
import { Link, useNavigate } from 'react-router-dom'
import axios from 'axios'
import LoginError from '../../../components/login/LoginError'
import {useDispatch,useSelector} from "react-redux"
import { add } from '../../../actions/userActions'

function Add() {

  const [name,setName] = useState('')
  const [email,setEmail] = useState('')
  const [phone,setPhone] = useState('')
  const [password,setPassword] = useState('')
  const [message,setMessage] = useState('')
  const navigate = useNavigate()
  

  const dispatch =useDispatch();
  const userAdd = useSelector(state => state.userAdd)
  const {error,userinfo} = userAdd;


  const handleAddUser = async(e)=>{
    e.preventDefault()
    if(password !== confirm){
      setMessage("Password does not match!")
    }
    const regex = /[^\s@]+@[^\s@]+\.[^\s@]+/;
    if (!regex.test(email)){
      setMessage('Invalid Email!')
    }
    const phoneRegex = /^[\+]?[(]?[0-9]{3}[)]?[-\s\.]?[0-9]{3}[-\s\.]?[0-9]{4,6}$/im;
    if(!phoneRegex.test(phone)){
      setMessage('Invalid Phone No!')
    }
    if(!name && !email && !phone && !password && !confirm){
      setMessage('All fields are required!')
    }
    if(!error){
      dispatch(add(name,email,phone,password))
      navigate('/admin')
      
    }
  }


  return (
    <div className='bg-white grid h-screen place-items-center'>
      {error && <LoginError>{error}</LoginError>}

          <div className='mx-auto h-auto border bg-green-300 w-96'>
            <div className='ml-80 mt-4'>
              <Link to="/"> X </Link>
            </div>
            <div className='p-10'>
              <form onSubmit={handleAddUser}>
                <div>
                    <h4 className='text-xl pb-4'>Add new User</h4>
                </div>
                <div className='my-4'>
                    <input className='py-2 border w-60 shadow rounded px-4 outline-none' type="text" name='name' value={name} onChange={(e)=>setName(e.target.value)} placeholder='Name..' />
                </div>
                <div className='my-4'>
                    <input className='py-2 border w-60 shadow rounded px-4 outline-none' type="email" name='email' value={email} onChange={(e)=>setEmail(e.target.value)} placeholder='Email..' />
                </div>
                <div className='my-4'>
                    <input className='py-2 border w-60 shadow rounded px-4 outline-none' type="tel" name='phone' value={phone} onChange={(e)=>setPhone(e.target.value)} placeholder='Phone no..' />
                </div>
                <div className='my-4'>
                    <input className='py-2 border w-60 shadow rounded px-4 outline-none' type="password" name='password' value={password} onChange={(e)=>setPassword(e.target.value)} placeholder='Password..' />
                </div>
                <div className='my-4'>
                    <button className='border px-4 py-1 text-md outline-none' type='submit'>Submit</button>
                </div>
                </form>
                
            </div>
          </div>

    </div>
  )
}

export default Add
