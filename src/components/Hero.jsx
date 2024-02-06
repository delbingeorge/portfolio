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
               <div className={`py-6 md:py-8 rounded-2xl pl-4 md:pl-8 w-full lg:w-[74%] flex flex-col items-start justify-between ${mode == "light" ? 'bg-light-mode-secondary' : 'bg-dark-mode-secondary'}`}>
                    <div className='pb-28 md:pb-0'>
                         <h1 className='font-mono-space font-bold text-3xl lg:text-5xl pb-4'>Hello, I'm  Delbin George,<br /> a UI/UX Designer who <br /> loves to code!</h1>
                         <h2 className='font-inter font-medium tracking-wider text-xl'>Talented front-end developer with strong UI/UX skills.</h2>
                    </div>
                    <div className='flex items-center space-x-5 md:space-x-7'>
                         <Link to="resume"
                              className={`py-2 md:py-3 px-5 md:px-6 font-inter tracking-wider rounded-lg hover:cursor-pointer text-[15px] lg:text-     ${(mode == 'light') ? ('bg-dark-mode-primary text-light-mode-primary') : ('bg-light-mode-primary text-dark-mode-primary')}`}>
                              View Resume
                         </Link>
                         <a href="https://www.linkedin.com/in/delbingeorge/">
                              <FontAwesomeIcon className='text-[1.91rem] md:text-[2rem] hover:cursor-pointer' icon={faLinkedin} />
                         </a>
                         {/* <a href="https://www.x.com/dellbingeorge/">
                              <FontAwesomeIcon className='text-[1.91rem] md:text-[2rem] hover:cursor-pointer' icon={faTwitter} />
                         </a> */}
                         <a href="https://www.github.com/delbingeorge/">
                              <FontAwesomeIcon className='text-[1.91rem] md:text-[2rem] hover:cursor-pointer' icon={faGithub} />
                         </a>
                    </div>
               </div>
               <div className='w-full md:w-[25%]'>
                    {/* <img alt='Delbin George' className='rounded-xl grayscale hover:grayscale-0 duration-300' width="640" height="360" src={DelbinGeorge} /> */}
                    <img alt='Delbin George' width="640" height="360" src={DelbinGeorge} />
               </div>
          </div>
     )
}

export default Hero
