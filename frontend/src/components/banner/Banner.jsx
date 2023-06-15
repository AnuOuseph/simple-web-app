/* eslint-disable no-unused-vars */
import React, { useEffect, useState } from 'react'
import axios from "axios"

function Banner() {

    const fetch = async()=>{
      const {data} = await axios.get('http://localhost:5000/api/notes')
      console.log("iwidygy",data)
    }

    useEffect(()=>{
      fetch()
    },[])


  return (
    <div className='d-flex grid h-screen place-items-center'>
      <div className="flex h-full items-center justify-center">
        <div className="px-6 text-center text-black md:px-12">
          <h1 className="mb-6 text-5xl font-bold">Dashboard</h1>
          <button type="button" className="inline-block rounded border-2 border-yellow-300 text-yellow-300 border-neutral-50 px-6 pb-[6px] pt-2 text-xs font-medium uppercase leading-normal text-neutral-50 transition duration-150 ease-in-out hover:border-neutral-100 hover:bg-neutral-500 hover:bg-opacity-10 hover:text-neutral-100 focus:border-neutral-100 focus:text-neutral-100 focus:outline-none focus:ring-0 active:border-neutral-200 active:text-neutral-200 dark:hover:bg-neutral-100 dark:hover:bg-opacity-10"> Get started </button>
        </div>
      </div>
    </div>
  // <div className="mt-20 relative overflow-hidden bg-cover bg-no-repeat" style={{ backgroundPosition: "50%", backgroundImage: "url('https://tecdn.b-cdn.net/img/new/slides/146.webp')", height: "633px" }}>
  //   <div className="absolute bottom-0 left-0 right-0  h-full w-full overflow-hidden bg-fixed" style={{ backgroundColor: "rgba(0, 0, 0, 0.75)" }}>
      // <div className="flex h-full items-center justify-center">
      //   <div className="px-6 text-center text-white md:px-12">
      //     <h1 className="mb-6 text-5xl font-bold">Dashboard</h1>
      //     <button type="button" className="inline-block rounded border-2 border-neutral-50 px-6 pb-[6px] pt-2 text-xs font-medium uppercase leading-normal text-neutral-50 transition duration-150 ease-in-out hover:border-neutral-100 hover:bg-neutral-500 hover:bg-opacity-10 hover:text-neutral-100 focus:border-neutral-100 focus:text-neutral-100 focus:outline-none focus:ring-0 active:border-neutral-200 active:text-neutral-200 dark:hover:bg-neutral-100 dark:hover:bg-opacity-10" data-te-ripple-init data-te-ripple-color="light"> Get started </button>
      //   </div>
      // </div>
  //   </div>
  // </div>

  )
}

export default Banner
