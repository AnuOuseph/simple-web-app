/* eslint-disable no-unused-vars */
import React, { useState, } from 'react'
import { Link,useNavigate  } from 'react-router-dom'


function AdminHeader() {
    const [state,setState] = useState(false)
    const navigate =useNavigate()
  return (
    <div className='w-full fixed top-0 left-0 bg-green-300'>
        <div className='py-5 md:flex items-center justify-between'>
        <div className='pl-12 items-center text-xl'>
           <Link to="/"> AdminPanel.</Link>
        </div>
        <div onClick={()=>setState(!state)} className='text-3xl absolute right-8 top-6 cursor-pointer md:hidden'>
            <ion-icon name={state? 'close':'menu'}></ion-icon>
        </div>
        <ul className={`md:flex pr-20 bg-green-300 absolute md:pb-0 pb-8 md:static md:z-auto z-[-1] w-full md:w-auto md:pl-0 pl-12 transition-all duartion-800 ease-in ${state ? 'top-18 opacity:100 ':'top-[-490px]'}`}>
            <li className='md:ml-8 md:my-0 my-7 text-md text-gray-800 hover:text-gray-500'>
                <Link to="/admin">Home</Link>
            </li>

            <li className='md:ml-8 md:my-0 my-7 text-md text-gray-800 hover:text-gray-500'>
                <Link to="/admin/users">Users</Link>
            </li>
            <li className='md:ml-8 md:my-0 my-7 text-md text-gray-800 hover:text-gray-500' onClick={()=>{
                localStorage.removeItem('admininfo')
                navigate('/admin/login')
            }}>
                {/* <Link to="/admin/login">Logout</Link> */}
                logout
            </li>
        </ul>
        </div>
    
    </div>
  )
}

export default AdminHeader
