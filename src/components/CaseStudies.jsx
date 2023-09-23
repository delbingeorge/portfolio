import React from 'react'
import eatablesImage from '../assets/images/eatablesImage.webp'
import extratimeMore from '../assets/images/extratimeMore.webp'
import qikfixerMore from '../assets/images/qikfixerMore.webp'
import { useMode } from '../ModeProvider'
import { Link } from 'react-router-dom'

function CaseStudies() {
     const { mode } = useMode()
     return (
          <div className={`${(mode == "light") ? ('bg-light-mode-primary text-dark-mode-primary') : ('bg-dark-mode-primary text-light-mode-primary')}`}>
               <h1 className={`text-2xl md:text-3xl font-bold font-mono-space w-full my-3 py-5 rounded-xl text-center ${(mode == 'light') ? ('bg-light-mode-secondary') : ('bg-dark-mode-secondary')}`}>case studies</h1>
               <div className='grid grid-cols-1 md:grid-cols-2 gap-3 '>
                    <Link to='/case-study/eatables-0' onClick={() => scrollToTop()} className={`group flex items-center justify-center hover:bg-eatables card py-8 ${(mode == "light") ? ('bg-light-mode-secondary text-dark-mode-secondary') : ('bg-dark-mode-secondary text-light-mode-primary')}`}>
                         <div className='flex items-center justify-center flex-col pb-4 text-center'>
                              <h1 className='font-mono-space font-bold tracking-wider text-3xl md:text-4xl'>Eatables</h1>
                              <h2 className='font-mono-space font-medium tracking-wider text-lg md:text-xl '>Food discovery & Review App</h2>
                         </div>
                         <div className='w-[15rem] md:w-[12rem] lg:w-[20rem]'>
                              <img className='duration-300  group-hover:scale-[1.02]' alt="Eatables: Food Discovery & Review Platform" src={eatablesImage} width="640" height="360" />
                         </div>
                    </Link>
                    <Link to="/case-study/qikfixer-1" onClick={() => scrollToTop()} className={`group flex items-center justify-center hover:bg-qikfixer card py-8 ${(mode == "light") ? (' bg-light-mode-secondary text-dark-mode-secondary') : ('bg-dark-mode-secondary text-light-mode-primary')}`}>
                         <div className='group flex items-center justify-center flex-col pb-4 text-center'>
                              <h1 className='font-mono-space font-bold tracking-wider text-3xl md:text-4xl'>Qikfixer App</h1>
                              <h2 className='font-mono-space font-medium tracking-wider text-lg md:text-xl '>Repairmen Finder Platform</h2>
                         </div>
                         <div className='w-[15rem] md:w-[12rem] lg:w-[20rem]'>
                              <img className='duration-300  group-hover:scale-[1.02]' alt='Qikfixer: Servicemen finder app' src={qikfixerMore} width="640" height="360" />
                         </div>
                    </Link>
                    <Link to="/case-study/extratime-2" onClick={() => scrollToTop()} className={`group flex items-center justify-center hover:bg-extratime card py-8 ${(mode == "light") ? ('bg-light-mode-secondary text-dark-mode-secondary') : ('bg-dark-mode-secondary text-light-mode-primary')}`}>
                         <div className='flex items-center justify-center flex-col pb-4 text-center'>
                              <h1 className='font-mono-space font-bold tracking-wider text-3xl md:text-4xl'>Extratime</h1>
                              <h2 className='font-mono-space font-medium tracking-wider text-lg md:text-xl '>Sports Turf Booking App</h2>
                         </div>
                         <div className='w-[15rem] md:w-[12rem] lg:w-[20rem]'>
                              <img className='duration-300  group-hover:scale-[1.02]' alt='Extratime: Turf Booking App' src={extratimeMore} width="640" height="360" />
                         </div>
                    </Link>
                    <Link to='more-projects' onClick={() => scrollToTop()} className={`group hover:bg-read-more duration-300  group-hover:scale-[1.02]  card py-8 ${(mode == "light") ? (' bg-light-mode-secondary text-dark-mode-secondary flex items-center justify-center') : (' bg-dark-mode-secondary text-light-mode-primary flex items-center justify-center')}`}>
                         <h1 className='font-mono-space font-bold tracking-wider text-2xl text-center py-36 md:py-0'>Find More <br />
                              Case Studies <br />
                              & Projects
                         </h1>
                    </Link>
               </div>
          </div>
     )
}

export default CaseStudies
