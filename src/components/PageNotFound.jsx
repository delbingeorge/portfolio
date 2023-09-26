import React from 'react'
import { Link } from 'react-router-dom'

function PageNotFound() {
     return (
          <div className='bg-error-page bg-cover space-y-5 text-dark-mode-primary min-h-screen flex items-center justify-center flex-col font-mono-space'>
               <div className='flex items-center justify-center flex-col space-y-2 lg:space-y-0'>
                    <h1 className='text-4xl font-bold'>Landed safely</h1>
                    <h2 className='text-xl lg:text-3xl'>But landed on a wrong page!</h2>
               </div>
               <Link className='text-2xl' to='/'>Go Home</Link>
          </div>
     )
}

export default PageNotFound
