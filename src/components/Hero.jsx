import React from 'react'
import { useMode } from '../ModeProvider'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faGithub, faLinkedin, faTwitter } from '@fortawesome/free-brands-svg-icons'
import DelbinGeorge from '../assets/images/DelbinGeorge.webp'
import { Link } from 'react-router-dom';


function Hero() {
     const { mode } = useMode()
     return (
          <div className={`flex lg:flex-row space-y-4 lg:space-y-0 flex-col md:justify-between ${(mode == "light") ? (' bg-light-mode-primary text-dark-mode-primary') : ('bg-dark-mode-primary text-light-mode-primary')}`}>
               <div className={`py-6 md:py-8 rounded-3xl pl-4 md:pl-8 w-full lg:w-[74%] flex flex-col items-start justify-between ${mode == "light" ? 'bg-light-mode-secondary' : 'bg-dark-mode-secondary'}`}>
                    <div className='pb-28 md:pb-0'>
                         <h1 className='font-mono-space font-bold text-4xl md:text-5xl pb-6'>Hello, Delbin George,<br /> a UI/UX Designer who <br /> loves to code!</h1>
                         <h2 className='font-inter font-medium tracking-wider text-xl'>Talented front-end developer with strong <br /> UI/UX skills.</h2>
                    </div>
                    <div className='flex items-center space-x-5 md:space-x-7'>
                         <Link to="resume"
                              className={`py-2 md:py-3 px-5 md:px-6 font-inter rounded-lg hover:cursor-pointer text-[10px] lg:text-lg ${(mode == 'light') ? ('bg-dark-mode-primary text-light-mode-primary') : ('bg-light-mode-primary text-dark-mode-primary')}`}>
                              View Resume
                         </Link>
                         <FontAwesomeIcon className='text-2xl md:text-4xl hover:cursor-pointer' icon={faLinkedin} />
                         <FontAwesomeIcon className='text-2xl md:text-4xl hover:cursor-pointer' icon={faTwitter} />
                         <FontAwesomeIcon className='text-2xl md:text-4xl hover:cursor-pointer' icon={faGithub} />
                    </div>
               </div>
               <div className='w-full md:w-[25%]'>
                    <img alt='Delbin George' width="640" height="360" src={DelbinGeorge} />
               </div>
          </div>
     )
}

export default Hero
