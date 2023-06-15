/* eslint-disable no-unused-vars */
import React, { useState } from 'react'
import {useSelector} from "react-redux"
import { useNavigate } from 'react-router-dom';

function Profile() {
  const userLogin = useSelector((state) => state.userLogin)
    const {userinfo} = userLogin;
    const [image,setImage]=useState("https://icon-library.com/images/anonymous-avatar-icon/anonymous-avatar-icon-25.jpg")
    const navigate = useNavigate()

    // const handleProfile = () =>{
    //   console.log(image)
    // }

    const handleProfile = async (data) => {
      // try{
       const formdata=new FormData()
       console.log(data,"njaaan");
       formdata.append("image", data);
       console.log(formdata);
      //  const response = await axios.profileUpload(formdata);
      //  console.log(response,"IMAGEURL");
      //   if(response.success){
      //    setProfilePic(response.data);
      //    toast.success("profile picture uploaded");
      //   }else{
      //    throw new Error('profile picture upload failed !!');
      //   }
      // }catch(err){
      //  toast.error(err.message);
      // }
  
    }

  return (
    <div className='bg-white grid h-screen place-items-center'>
      <div className='border border-yellow-300 bg-white py-10 px-10 w-96'>
        
        <div className='mb-5 flex text-center'>
            <h4 className='text-xl '>Your Profile.</h4>
        </div>
        <div className='flex items-center'>
            <div className='w-32 h-32 border mb-4 shadow rounded-full mx-auto'>
              <img className='w-32 h-32 border mb-4 shadow rounded-full' src={image} alt="" />
            </div>
        </div>
        <form >
            <div className='items-center m-3 px-4'><input type="file" name='image' onChange={(e)=>{handleProfile(e.target.files[0])}} /><button className='border m-2 mx-12 px-4 py-1 text-md text-yellow-200 outline-none bg-black'>submit</button></div>
        </form>
        <div className='w-68 border bg-yellow-200 shadow rounded px-4 py-2 mb-2'>
            <p>{userinfo.name}</p>
        </div>
        <div className='w-68 border bg-yellow-200 shadow rounded px-4 py-2 mb-2'>
            <p>{userinfo.email}</p>
        </div>
        <div className='w-68 border bg-yellow-200 shadow rounded px-4 py-2 mb-2'>
            <p>{userinfo.phone}</p>
        </div>
        {/* <div><button className='border px-4 py-1 text-md text-yellow-200 outline-none bg-black' >Edit Profile</button></div> */}
      </div>
    </div>
  )
}

export default Profile
