/* eslint-disable no-unused-vars */
import React, { useState } from 'react'
import { useLocation,useNavigate } from 'react-router-dom'; 
import {useDispatch,useSelector} from "react-redux"
import { edit } from '../../../actions/userActions'


function Edit() {
  const location = useLocation();
  const {_id,name,email,phone} = location.state.data;
  const [nameEdit,setNameEdit] = useState(name)
  const [emailEdit,setEmailEdit] = useState(email)
  const [phoneEdit,setPhoneEdit] = useState(phone)
  const navigate = useNavigate()


  const dispatch =useDispatch();
  const userAdd = useSelector(state => state.userAdd)
  const {error,userinfo} = userAdd;

  const handleEdit = (e) =>{
    e.preventDefault()
    dispatch(edit(_id,nameEdit,emailEdit,phoneEdit))
    navigate('/admin')
  }

  return (
    <div className='bg-white grid h-screen place-items-center'>
      <div className='border border-green-300 bg-white py-10 px-10 w-auto'>
        
        <div className='mb-5 flex text-center'>
            <h4 className='text-xl '>Edit User.</h4>
        </div>
        <form onSubmit={handleEdit}>
        <div className='w-68 border bg-green-200 shadow rounded px-4 py-2 mb-2'>
            <label htmlFor="" className='text-gray-600'>Name: </label>
            <input className='bg-green-200 w-68 outline-none' type="text"  value={nameEdit} name='name' id='name' onChange={(e)=>setNameEdit(e.target.value)} />
        </div>
        <div className='w-68 border bg-green-200 shadow rounded px-4 py-2 mb-2'>
            <label htmlFor="" className='text-gray-600'>Email: </label>
           <input className='bg-green-200 w-72 outline-none' type="email"  value={emailEdit} name='email' id='email' onChange={(e)=>setEmailEdit(e.target.value)} />
        </div>
        <div className='w-68 border bg-green-200 shadow rounded px-4 py-2 mb-2'>
            <label htmlFor="" className='text-gray-600'>Phone: </label>
            <input className='bg-green-200 w-68 outline-none' type="tel"  value={phoneEdit} name='phone' id='phone' onChange={(e)=>setPhoneEdit(e.target.value)} />
        </div>
        <input className='bg-green-200 w-68' type="text" hidden value={_id}  />
        {/* <div className='w-68 border bg-green-200 shadow rounded px-4 py-2 mb-2'>
            <label htmlFor="" className='text-gray-600'>Profile: </label>
            <input className='bg-green-200 w-68' type="file"  />
        </div> */}
        <div><button className='border px-4 py-1 text-md text-green-200 outline-none bg-black' type='submit'>submit</button></div>
        </form>
      </div>
    </div>
  )
}

export default Edit
