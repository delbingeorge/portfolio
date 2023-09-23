import React from 'react'

function Footer() {
     return (
          <footer className='flex justify-center items-center py-8'>
               <h1 className='font-mono-space text-xl md:text-2xl text-center font-bold text-[#c4c4c4]' >
                    <span className='text-[#9a9a9a]'>
                         Connect me via mail
                    </span>
                    {" "}
                    <a href='mailto:imdelbingeorge@gmail.com'>
                         @imdelbingeorge@gmail.com
                    </a>
               </h1>
          </footer>
     )
}

export default Footer
