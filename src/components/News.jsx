import { faArrowRight, faClose } from '@fortawesome/free-solid-svg-icons'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import React, { useState } from 'react'

function News() {

  const [status, setStatus] = useState(true);

  return (

    <>

      {
        (status == true) ? (
          <div div className={`min-h-[7vh] bg-[rgb(122,95,255)] text-white flex items-center justify-around sticky top-0 z-10  ${(status == true) ? ("animation") : ("")}`}>
            <h1 className='text-md font-inter tracking-wider space-x-3'>
              Check out {" "}
              <a href="#" className=''>
                Qikfixer App <FontAwesomeIcon icon={faArrowRight} />
              </a>
            </h1 >
            <button onClick={() => { setStatus(false) }}><FontAwesomeIcon className='text-xl' icon={faClose} /></button>
          </div>) : ("")

      }
    </>
  )
}

export default News
