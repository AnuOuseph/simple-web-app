/* eslint-disable react/prop-types */
/* eslint-disable no-unused-vars */
import React from 'react'

function LoginError({children}) {
  return (
    <div className="mb-0 inline-flex  items-center rounded-lg bg-red-100 px-6 py-5 text-base text-red-700" role="alert">
        <span className="mr-2">
            <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor" className="h-5 w-5">
            <path fillRule="evenodd" d="M12 2.25c-5.385 0-9.75 4.365-9.75 9.75s4.365 9.75 9.75 9.75 9.75-4.365 9.75-9.75S17.385 2.25 12 2.25zm-1.72 6.97a.75.75 0 10-1.06 1.06L10.94 12l-1.72 1.72a.75.75 0 101.06 1.06L12 13.06l1.72 1.72a.75.75 0 101.06-1.06L13.06 12l1.72-1.72a.75.75 0 10-1.06-1.06L12 10.94l-1.72-1.72z" clipRule="evenodd" />
            </svg>
        </span>
        <span>{children}</span>
    </div>
  )
}

export default LoginError

