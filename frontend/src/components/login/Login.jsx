/* eslint-disable no-unused-vars */
import React, { useState } from 'react'
import { Link, useNavigate } from 'react-router-dom'
import {useDispatch,useSelector} from "react-redux";
import LoginError from './LoginError'
import {login} from '../../actions/userActions'
import { useEffect,useRef } from 'react';

function Login() {
  const [email,setEmail] = useState('')
  const [password,setPassword] = useState('')
  // const [error,setError] = useState('')
  // const [loading,setLoading] = useState(false)
  const navigate = useNavigate()
  const dispatch = useDispatch()

  const userLogin = useSelector((state)=> state.userLogin)
  const { error,userinfo} = userLogin
  const inputRef = useRef('null')

  useEffect(()=>{
    inputRef.current.focus();
    if(userinfo){
      navigate('/')
    }
  },[navigate,userinfo])

  const handleSubmit = async(e)=>{
    e.preventDefault();
    dispatch(login(email,password))
    // try {
    //   const config = {
    //     headers: {
    //       "Content-type":"application/json"
    //     }
    //   }
    //   console.log("jhsgdyufwueu");
    //   const {data} = await axios.post("http://localhost:5000/api/users/login", {email,password}, config)
    //   localStorage.setItem("userinfo",JSON.stringify(data))
    //   navigate('/')
    //   setError("")
    //   console.log(data);
    //   console.log("nooooooooooooooo");

    // } catch (error) {
    //   setError("Invalid Email or Password")
    //   console.log(error.message)
    // }
  }
  return (
    <div className='bg-white grid h-screen place-items-center'>
      {error && <LoginError>{error}</LoginError>}
      <div className='items-center justify-center mx-auto h-auto border shadow bg-yellow-300 w-96'>
        <div className='ml-80 mt-4'>
          <Link to="/"> X </Link>
        </div>
        <div className='p-10'>
          <form onSubmit={handleSubmit}>
            <div>
            <h1 className="text-xl font-bold top-right">Welcome back.</h1>
            </div>
            <div>
              <p className='py-2'>Please enter your details.</p>
            </div>
            <div className='my-4'>
                <input className='py-2 border w-60 shadow rounded px-4 outline-none' type="email" name="email" value={email} ref={inputRef} onChange={(e)=>setEmail(e.target.value)} placeholder='Email..' />
            </div>
            <div className='my-4'>
                <input className='py-2 border w-60 shadow rounded px-4 outline-none' type="password" name='password' value={password} onChange={(e)=>setPassword(e.target.value)} placeholder='Password..' />
            </div>
            <div className='my-4'>
                <button className='border px-4 py-1 text-md outline-none' type='submit'>Login</button>
            </div>
            <div>
              <h6 className='py-1'> Create Account ? <span className='text-Blue-100 cursor-pointer px-2 underline'> <Link to="/signup"> Signup</Link> </span> </h6>
            </div>
          </form>
        </div>
      </div>
    </div>
  )
}

export default Login
