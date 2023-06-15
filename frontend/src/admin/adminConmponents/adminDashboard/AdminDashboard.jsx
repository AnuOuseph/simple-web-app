/* eslint-disable react/no-unknown-property */
/* eslint-disable no-unused-vars */
import React,{useEffect, useState} from 'react'
import axios from 'axios'
import { useNavigate } from 'react-router-dom'
import {useDispatch,useSelector} from "react-redux"
import { deleteUser,getUser } from '../../../actions/userActions'
function AdminDashboard() {
  const [user,setUser] = useState([])
  const navigate = useNavigate()

  // const fetch = async()=>{
  //   const {data} = await axios.get('http://localhost:5000/api/admin/dashboard')
  //   console.log("iwidygy",data)
  //   setUser(data)
  // }

  const handleEdit = (userData)=>{
    console.log(userData)
    navigate('/admin/edit-user',{ state: { data: userData } })
  }
  const handleAddUser = ()=>{
    navigate('/admin/add-user')
  }

  const dispatch =useDispatch();
  const userDelete = useSelector(state => state.userDelete)
  const {error,userDetails} = userDelete;
  const userGet = useSelector(state => state.userGet)
  const {users} = userGet;
 

  useEffect(()=>{
    let token = localStorage.getItem('admininfo')
    if(token){
      navigate('/admin')
    }else{
      navigate('/admin/login')
    }
  },[navigate])

  useEffect(()=>{
    dispatch(getUser())
    
   },[dispatch,navigate])

  const handleDelete = (user)=>{
    dispatch(deleteUser(user._id))
  }
    
  const columns = ['UserId', 'Name', 'Email', 'Phone','Option'];

  return (
    <div className='flex flex-col overflow-x-hidden p-20 justify-center h-screen'>
      <div className='flex m-10'>
        {/* <div className='border w-64 h-10 text-md m-3 bg-gray-100'>
            <input type="text" placeholder='Search..' className='h-8 p-3 outline-none bg-gray-100 ' />
            <button className='p-2'><ion-icon name="search"></ion-icon></button> 
        </div> */}
        <div className='right-0 m-3'>
            <button className='w-28 bg-yellow-300 h-10' onClick={handleAddUser}>Add User</button>
        </div>
      </div>  
      <div className='overflow-x-auto sm:-mx-6 lg:-mx-8'>
        <div className='inline-block min-w-full py-2 sm:px-6 lg:px-8'>
          <div className='overflow-hidden'>
            <table className='min-w-full border text-center text-sm font-light dark:border-neutral-500 '>
              <thead className='border-b font-medium dark:border-neutral-500'>
                <tr>
                  {columns.map((column) => (
                    <th key={column} scope='col' className='border-r bg-neutral-800 text-white px-6 py-4 dark:border-neutral-500'>
                      {column}
                    </th>
                  ))}
                </tr>
              </thead>
              <tbody>
                {users?.map((row) => (
                  <tr key={row._id} className='border-b dark:border-neutral-500 '>
                    <td className='whitespace-nowrap border-r px-6 py-4 font-medium dark:border-neutral-500'>{row._id}</td>
                    <td className='whitespace-nowrap border-r px-6 py-4 dark:border-neutral-500'>{row.name}</td>
                    <td className='whitespace-nowrap border-r px-6 py-4 dark:border-neutral-500'>{row.email}</td>
                    <td className='whitespace-nowrap border-r px-6 py-4 dark:border-neutral-500'>{row.phone}</td>
                    <td className='whitespace-nowrap border-r px-6 py-4 dark:border-neutral-500'> 
                    <button className='border w-8  m-2 bg-yellow-200' onClick={()=>{handleEdit(row)}}>Edit</button>
                    <button className='border w-14 bg-red-200' 
                            // data-te-toggle="modal"
                            // data-te-target="#exampleModalCenter"
                            onClick={()=>{handleDelete(row)}}>Delete</button></td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </div>
      </div>

      <div 
          data-te-modal-init
          className="fixed left-0 top-0 z-[1055] hidden h-full w-full overflow-y-auto overflow-x-hidden outline-none"
          id="exampleModalCenter"
          // eslint-disable-next-line react/no-unknown-property
          tabindex="-1"
          aria-labelledby="exampleModalCenterTitle"
          aria-modal="true"
          role="dialog">
          <div
            data-te-modal-dialog-ref
            className="pointer-events-none relative flex min-h-[calc(100%-1rem)] w-auto translate-y-[-50px] items-center opacity-0 transition-all duration-300 ease-in-out min-[576px]:mx-auto min-[576px]:mt-7 min-[576px]:min-h-[calc(100%-3.5rem)] min-[576px]:max-w-[500px]">
            <div
              className="pointer-events-auto relative flex w-full flex-col rounded-md border-none bg-white bg-clip-padding text-current shadow-lg outline-none dark:bg-neutral-600">
              <div
                className="flex flex-shrink-0 items-center justify-between rounded-t-md border-b-2 border-neutral-100 border-opacity-100 p-4 dark:border-opacity-50">
                
                <h5
                  className="text-xl font-medium leading-normal text-neutral-800 dark:text-neutral-200"
                  id="exampleModalScrollableLabel">
                  Modal title
                </h5>
               
                <button
                  type="button"
                  className="box-content rounded-none border-none hover:no-underline hover:opacity-75 focus:opacity-100 focus:shadow-none focus:outline-none"
                  data-te-modal-dismiss
                  aria-label="Close">
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    fill="none"
                    viewBox="0 0 24 24"
                    stroke-width="1.5"
                    stroke="currentColor"
                    className="h-6 w-6">
                    <path
                      stroke-linecap="round"
                      stroke-linejoin="round"
                      d="M6 18L18 6M6 6l12 12" />
                  </svg>
                </button>
              </div>

            
              <div className="relative p-4">
                <p>This is a vertically centered modal.</p>
              </div>

             
              <div
                className="flex flex-shrink-0 flex-wrap items-center justify-end rounded-b-md border-t-2 border-neutral-100 border-opacity-100 p-4 dark:border-opacity-50">
                <button
                  type="button"
                  className="inline-block rounded bg-primary-100 px-6 pb-2 pt-2.5 text-xs font-medium uppercase leading-normal text-primary-700 transition duration-150 ease-in-out hover:bg-primary-accent-100 focus:bg-primary-accent-100 focus:outline-none focus:ring-0 active:bg-primary-accent-200"
                  data-te-modal-dismiss
                  data-te-ripple-init
                  data-te-ripple-color="light">
                  Close
                </button>
                <button
                  type="button"
                  className="ml-1 inline-block rounded bg-primary px-6 pb-2 pt-2.5 text-xs font-medium uppercase leading-normal text-white shadow-[0_4px_9px_-4px_#3b71ca] transition duration-150 ease-in-out hover:bg-primary-600 hover:shadow-[0_8px_9px_-4px_rgba(59,113,202,0.3),0_4px_18px_0_rgba(59,113,202,0.2)] focus:bg-primary-600 focus:shadow-[0_8px_9px_-4px_rgba(59,113,202,0.3),0_4px_18px_0_rgba(59,113,202,0.2)] focus:outline-none focus:ring-0 active:bg-primary-700 active:shadow-[0_8px_9px_-4px_rgba(59,113,202,0.3),0_4px_18px_0_rgba(59,113,202,0.2)] dark:shadow-[0_4px_9px_-4px_rgba(59,113,202,0.5)] dark:hover:shadow-[0_8px_9px_-4px_rgba(59,113,202,0.2),0_4px_18px_0_rgba(59,113,202,0.1)] dark:focus:shadow-[0_8px_9px_-4px_rgba(59,113,202,0.2),0_4px_18px_0_rgba(59,113,202,0.1)] dark:active:shadow-[0_8px_9px_-4px_rgba(59,113,202,0.2),0_4px_18px_0_rgba(59,113,202,0.1)]"
                  data-te-ripple-init
                  data-te-ripple-color="light">
                  Save changes
                </button>
              </div>
            </div>
          </div>
        </div>




    </div>
  )
}

export default AdminDashboard
