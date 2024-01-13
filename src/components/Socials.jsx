import React from 'react'
import { faBehance, faGithub, faLinkedin, faSpotify, faTwitch, faTwitter, faYoutube } from '@fortawesome/free-brands-svg-icons';
import { useMode } from '../ModeProvider';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';

function Skills() {
     const { mode, toggleMode } = useMode()
     return (
          <div className={`${(mode == "light") ? ('bg-light-mode-primary text-dark-mode-primary') : ('bg-dark-mode-primary text-light-mode-primary')}`}>
               <h1 className={`text-2xl md:text-3xl font-bold font-mono-space w-full my-3 py-5 rounded-xl  text-center ${(mode == 'light') ? (' bg-light-mode-secondary') : ('bg-dark-mode-secondary')}`}>connect with me</h1>
               <div className='grid grid-cols-3 md:grid-cols-5 grid-rows-2 gap-4'>
                    <a href='https://github.com/delbingeorge' className={`skill-card col-span-2 md:col-span-3 space-x-4 ${mode == "light" ? 'bg-light-mode-secondary ' : 'bg-dark-mode-secondary'}`} aria-label="Github">
                         <FontAwesomeIcon className='text-5xl' icon={faGithub} />
                         <h1 className='text-2xl font-mono-space'>view my #repos</h1>
                    </a>
                    {/* <div className={`skill-card group ${mode == "light" ? 'bg-light-mode-secondary hover:bg-dark-mode-secondary' : 'bg-dark-mode-secondary hover:bg-dark-mode-secondary'}`}> */}
                    <a href='https://www.linkedin.com/in/delbingeorge/' aria-label="Linkedin" className={`skill-card group ${mode == "light" ? 'bg-light-mode-secondary' : 'bg-dark-mode-secondary'}`}>
                         <FontAwesomeIcon className='text-5xl' icon={faLinkedin} />
                    </a>
                    {/* <a href="https://twitter.com/dellbingeorge" aria-label="Twitter" className={`skill-card ${mode == "light" ? 'bg-light-mode-secondary' : 'bg-dark-mode-secondary'}`}>
                         <FontAwesomeIcon className='text-5xl' icon={faTwitter} />
                    </a> */}
                    <a href='https://www.youtube.com/channel/UC6Yh4k2AQ_qV68rteyQh1Xw' aria-label="Youtube" className={`skill-card ${mode == "light" ? 'bg-light-mode-secondary' : 'bg-dark-mode-secondary'}`}>
                         <FontAwesomeIcon className='text-5xl' icon={faYoutube} />
                    </a>
                    <a href='https://www.twitch.tv/heycosmiic/' aria-label="Twitch" className={`skill-card ${mode == "light" ? 'bg-light-mode-secondary' : 'bg-dark-mode-secondary'}`}>
                         <FontAwesomeIcon className='text-5xl' icon={faTwitch} />
                    </a>
                    <a href='https://open.spotify.com/playlist/4dyPOCaSSczdrmQwTKwxJ5?si=a24a1985dc7e4007' aria-label="Spotify" className={`skill-card ${mode == "light" ? 'bg-light-mode-secondary' : 'bg-dark-mode-secondary'}`}>
                         <FontAwesomeIcon className='text-5xl' icon={faSpotify} />
                    </a>
                    {/* <a href='https://open.spotify.com/playlist/6jCLmPfJk8fyaZrWvZZFg1?si=81109058f7544892' aria-label="Spotify" className={`skill-card ${mode == "light" ? 'bg-light-mode-secondary' : 'bg-dark-mode-secondary'}`}>
                         <FontAwesomeIcon className='text-5xl' icon={faSpotify} />
                    </a> */}
                    <a href='https://www.behance.net/delbingeorge' aria-label="Behance" className={`skill-card col-span-2 space-x-4 ${mode == "light" ? 'bg-light-mode-secondary' : 'bg-dark-mode-secondary'}`}>
                         <FontAwesomeIcon className='text-5xl' icon={faBehance} />
                         <h1 className='text-2xl font-mono-space'>view my behance</h1>
                    </a>
               </div>
          </div>
     )
}

export default Skills
