import React from 'react'
import { useMode } from '../ModeProvider'

function Footer() {
     const { mode } = useMode()
     return (
          <footer className='flex justify-center items-center py-8'>
               <h1 className='font-mono-space text-xl md:text-2xl text-center font-bold'>
                    <span className={`${mode == "light" ? "'text-[#535353]" : "'text-[#535353]"}`}>
                         Connect me via mail
                    </span>
                    {" "}
                    <a className={`${mode == "light" ? "'text-[#535353]" : "'text-[#535353]"}`} href='mailto:imdelbingeorge@gmail.com'>
                         @imdelbingeorge@gmail.com
                    </a>
               </h1>
          </footer>
     )
}

export default Footer
