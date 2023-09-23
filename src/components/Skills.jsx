import React from 'react'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faBootstrap, faCss3, faFigma, faGitAlt, faGithub, faHtml5, faJs, faJsSquare, faReact } from '@fortawesome/free-brands-svg-icons';
import { useMode } from '../ModeProvider';


function Skills() {
     const { mode, toggleMode } = useMode()
     return (
          <div className={`${(mode == "light") ? ('bg-light-mode-primary text-dark-mode-primary') : ('bg-dark-mode-primary text-light-mode-primary')}`}>
               <h1 className={`text-2xl md:text-3xl font-bold font-mono-space w-full my-3 py-5 rounded-xl text-center ${(mode == 'light') ? ('bg-light-mode-secondary') : ('bg-dark-mode-secondary')}`}>tools & gears i use</h1>
               <div className='grid grid-cols-3 md:grid-cols-5 grid-rows-2 gap-4'>
                    <div className={`skill-card ${mode == "light" ? 'bg-light-mode-secondary ' : 'bg-dark-mode-secondary '}`}>
                         <FontAwesomeIcon className='text-5xl' icon={faHtml5} />
                    </div>
                    <div className={`skill-card ${mode == "light" ? 'bg-light-mode-secondary ' : 'bg-dark-mode-secondary '}`}>
                         <FontAwesomeIcon className='text-5xl' icon={faCss3} />
                    </div>
                    <div className={`skill-card ${mode == "light" ? 'bg-light-mode-secondary ' : 'bg-dark-mode-secondary '}`}>
                         <FontAwesomeIcon className='text-5xl' icon={faJsSquare} />
                    </div>
                    <div className={`skill-card ${mode == "light" ? 'bg-light-mode-secondary ' : 'bg-dark-mode-secondary '}`}>
                         <svg width="65" height="40" viewBox="0 0 76 46" fill="none" xmlns="http://www.w3.org/2000/svg">
                              <path fillRule="evenodd" clipRule="evenodd" d="M37.7387 0.744873C27.6873 0.744873 21.4085 5.73852 18.8947 15.7296C22.6635 10.7359 27.0617 8.86285 32.0855 10.1103C34.9535 10.8226 37.0038 12.8917 39.2688 15.1793C42.966 18.9067 47.2436 23.2219 56.5826 23.2219C66.634 23.2219 72.9128 18.2283 75.4266 8.23723C71.6578 13.2309 67.2634 15.104 62.2358 13.8565C59.3678 13.1442 57.3175 11.0751 55.0487 8.78747C51.3553 5.05637 47.0815 0.744873 37.7387 0.744873ZM18.8947 23.2219C8.84337 23.2219 2.56456 28.2156 0.0507812 38.2066C3.81957 33.2092 8.21775 31.3399 13.2415 32.5874C16.1096 33.2997 18.1598 35.3687 20.4286 37.6564C24.122 41.3837 28.3996 45.699 37.7424 45.699C47.7938 45.699 54.0726 40.7054 56.5864 30.7143C52.8176 35.7079 48.4194 37.581 43.3956 36.3336C40.5276 35.6213 38.4774 33.5522 36.2123 31.2645C32.5114 27.5372 28.2338 23.2219 18.8947 23.2219Z" fill={`${(mode == "light") ? ('#2a2a2a') : ('#c5c5c5')}`} />
                         </svg>
                    </div>
                    <div className={`skill-card ${mode == "light" ? 'bg-light-mode-secondary ' : 'bg-dark-mode-secondary '}`}>
                         <FontAwesomeIcon className='text-5xl' icon={faBootstrap} />
                    </div>
                    <div className={`skill-card ${mode == "light" ? 'bg-light-mode-secondary ' : 'bg-dark-mode-secondary '}`}>
                         <FontAwesomeIcon className='text-5xl' icon={faReact} />
                    </div>
                    <div className={`skill-card ${mode == "light" ? 'bg-light-mode-secondary ' : 'bg-dark-mode-secondary '}`}>
                         <FontAwesomeIcon className='text-5xl' icon={faGitAlt} />
                    </div>
                    <div className={`skill-card ${mode == "light" ? 'bg-light-mode-secondary ' : 'bg-dark-mode-secondary '}`}>
                         <FontAwesomeIcon className='text-5xl' icon={faGithub} />
                    </div>
                    <div className={`skill-card ${mode == "light" ? 'bg-light-mode-secondary ' : 'bg-dark-mode-secondary '}`}>
                         <FontAwesomeIcon className='text-5xl' icon={faFigma} />
                    </div>
                    <div className={`skill-card ${mode == "light" ? 'bg-light-mode-secondary ' : 'bg-dark-mode-secondary '}`}>
                         <svg width="56" height="38" viewBox="0 0 56 38" fill="none" xmlns="http://www.w3.org/2000/svg">
                              <path d="M30.0361 3.30434L20.1095 19.5719L30.6724 36.8561C30.7184 36.9077 30.7535 36.9681 30.7753 37.0336C30.7972 37.0992 30.8055 37.1685 30.7996 37.2374C30.6724 37.3645 30.5451 37.2374 30.4178 37.2374H22.9093C22.273 37.2374 22.0184 37.2374 21.7639 36.8561L19.6004 32.7892C18.9641 31.3912 18.2005 30.1203 17.437 28.5952C16.6734 27.0702 15.7825 25.7993 15.0189 24.4013L12.7282 28.5952C11.9646 29.9932 11.201 31.3912 10.5647 32.7892L8.27396 36.9832C8.19919 37.1155 8.08656 37.2224 7.95051 37.2903C7.81447 37.3583 7.66121 37.3841 7.51038 37.3645H0.256349C0.129086 37.3645 0.00182182 37.3645 0.00182182 37.2374C-0.00402692 37.1685 0.00424186 37.0992 0.0261231 37.0336C0.0480043 36.9681 0.0830383 36.9077 0.129085 36.8561L10.3102 20.0802L0.383613 3.30434V2.92307H8.52849L8.91028 3.30434C9.5466 4.70233 10.1829 6.10032 10.9465 7.49831C11.7101 8.8963 12.4737 10.2943 13.3645 11.6923C14.2554 13.0903 14.8917 14.4883 15.528 15.8862H15.6553C16.2916 14.3612 17.0552 12.9632 17.6915 11.5652L19.9822 7.49831C20.7458 6.10032 21.5094 4.70233 22.1457 3.30434L22.4002 3.05016H29.7815L30.1633 3.30434V3.55852L30.0361 3.30434ZM50.271 37.4915C52.0926 37.135 53.8807 36.6248 55.6161 35.9665C55.7383 35.9137 55.8408 35.8241 55.9093 35.7101C55.9778 35.5961 56.0088 35.4635 55.9979 35.331C55.9979 34.8227 55.8706 34.1872 55.8706 33.4247C55.8706 32.6621 55.7433 32.1538 55.7433 31.5183V0.25418C55.7433 0.2208 55.7367 0.187747 55.724 0.156909C55.7112 0.12607 55.6924 0.0980502 55.6688 0.0744474C55.6451 0.0508446 55.6171 0.0321213 55.5862 0.0193475C55.5553 0.00657381 55.5222 0 55.4888 0H48.7438C48.6166 0 48.4893 0.127089 48.4893 0.381269V10.8026H46.7076C43.8328 10.726 40.9859 11.3821 38.4355 12.709C36.2844 13.9232 34.4863 15.6751 33.2177 17.7926C31.9464 19.8961 31.3265 22.3281 31.436 24.7825C31.3146 27.3993 31.932 29.9975 33.2177 32.2809C34.4526 34.1096 36.1705 35.5612 38.1809 36.4748C40.3746 37.4876 42.7637 38.0082 45.1804 37.9999C46.8879 37.9629 48.59 37.793 50.271 37.4915ZM47.2167 31.5183H45.944C44.9855 31.5458 44.0318 31.3726 43.1442 31.01C42.3071 30.8244 41.5499 30.3796 40.9807 29.7391C40.306 29.1512 39.7823 28.4103 39.4536 27.5785C39.0348 26.4856 38.8611 25.3143 38.9445 24.1471C38.8411 22.6776 39.1968 21.2122 39.9626 19.9531C40.6712 18.9201 41.6359 18.0881 42.7624 17.5384C43.896 16.931 45.1669 16.6247 46.4531 16.6488H48.4893V31.3912L47.2167 31.5183Z" fill={`${(mode == "light") ? ('#2a2a2a') : ('#c5c5c5')}`} />
                         </svg>
                    </div>
               </div>
          </div>
     )
}

export default Skills
