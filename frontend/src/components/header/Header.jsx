/* eslint-disable no-unused-vars */
import React, { useState } from 'react'
import { Link , useNavigate} from 'react-router-dom'
import {useDispatch,useSelector} from 'react-redux'
import { logout } from '../../actions/userActions'

function Header() {
    const [state,setState] = useState(false)
    const navigate = useNavigate()
    const data= JSON.parse(localStorage.getItem('userinfo'));
    console.log('here',data)
    const dispatch = useDispatch()

    const userLogin = useSelector((state) => state.userLogin)
    const {userinfo} = userLogin;

    const logoutHandler = ()=>{
        dispatch(logout())
        navigate('/')
    }
  return (
    <div className='w-full fixed top-0 left-0 bg-yellow-300'>
        <div className='py-4 md:flex items-center justify-between'>
        <div className='pl-12 items-center text-3xl'>
           <Link to="/"> Yoho.</Link>
        </div>
        <div onClick={()=>setState(!state)} className='text-3xl absolute right-8 top-6 cursor-pointer md:hidden'>
            <ion-icon name={state? 'close':'menu'}></ion-icon>
        </div>
        <ul className={`md:flex pr-20 bg-yellow-300 absolute md:pb-0 pb-8 md:static md:z-auto z-[-1] w-full md:w-auto md:pl-0 pl-12 transition-all duartion-800 ease-in ${state ? 'top-18 opacity:100 ':'top-[-490px]'}`}>
            <li className='md:ml-8 md:my-0 my-7 text-xl text-gray-800 hover:text-gray-500'>
                <Link to="/">Home</Link>
            </li>
            {data?
            <li className='md:ml-8 md:my-0 my-7 text-xl text-gray-800 hover:text-gray-500'>
                <Link to="/profile">{userinfo.name}</Link>
            </li>
            : "" }
            {data?
            <li className='md:ml-8 md:my-0 my-7 text-xl text-gray-800 hover:text-gray-500' onClick={
                logoutHandler
            }>
                Logout
            </li> :
            <li className='md:ml-8 md:my-0 my-7 text-xl text-gray-800 hover:text-gray-500' onClick={()=>{
                navigate('/login')
            }}>
                Login
            </li> }
        </ul>
        </div>
    
    </div>
  )
}

export default Header
