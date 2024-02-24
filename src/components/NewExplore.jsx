import React from 'react'
import { useMode } from '../ModeProvider';
import imgOne from '../assets/images/imgthree.jpg'
import imgOneO from '../assets/helloworld/jnk/IMG_20230722_225144.jpg'
import imgOneT from '../assets/helloworld/jnk/IMG_20230722_225144-min.jpg'
import Video from '../assets/helloworld/jnk/VID_20230710_115204.mp4'
import VideoOne from '../assets/helloworld/jnk/VID_20230710_115204.mp4'
import { Link as ScrollLink } from 'react-scroll';

function NewExplore() {
     const { mode } = useMode();

     return (
          <div className='font-mono-space'>
               <div className='min-h-screen bg-exploreImg bg-cover relative'>
                    <div className='leading-[4.5rem] text-white absolute bottom-12 left-20'>
                         <h1 className='text-[6rem] font-bold'>#HelloWorld!</h1>
                         <h2 className='text-[2rem] font-medium'>Some beautiful moments of my life.</h2>
                    </div>
               </div>

               <div className='mx-8 lg:mx-20  py-12'>
                    <div>
                         <h1 className='text-4xl font-semibold py-2'></h1>
                         <div className='grid grid-cols-3 w-full'>
                              <ScrollLink activeClass="active"
                                   to="jammu-kashmir"
                                   spy={true}
                                   smooth={true}
                                   offset={50}
                                   duration={500}
                                   className='p-4 group hover:bg-black/10 duration-500 rounded-xl cursor-pointer'>
                                   <img className='w-full h-60 group-hover:scale-[1.02] duration-500 rounded-xl mb-3' src={imgOne} alt="" />
                                   <div className='leading-5'>
                                        <h1 className='text-3xl font-semibold'>The Heaven on Earth!</h1>
                                        <h2 className='text-2xl font-medium'>Jammu & Kashmir</h2>
                                   </div>
                              </ScrollLink>
                         </div>
                         <h1 name='jammu-kashmir'></h1>
                         <div className='my-6'>
                              <div className='mb-4 leading-9'>
                                   <h1 className='text-[3rem] font-bold'>Jammu & Kashmir</h1>
                                   <h2 className='text-[1.5rem]'>June 15, 2023</h2>
                              </div>
                              <div className='flex space-x-3 overflow-hidden'>
                                   <div className='space-y-3 w-1/4'>
                                        <img id="img1" src={imgOneO} alt="" className="object-cover" />
                                        <video type="video/webm" autoplay="autoplay" playsinline="" muted="muted" loop="loop" className="h-[40%] object-cover">
                                             <source src={Video} type="video/mp4" />
                                        </video>
                                        <img id="img1" src={imgOneO} alt="" className="object-cover" />
                                   </div>
                                   <div className='space-y-3 w-1/4'>
                                        <img id="img1" src={imgOneO} alt="" className="object-cover" />
                                        <video type="video/webm" autoplay="autoplay" playsinline="" muted="muted" loop="loop" className="h-full object-cover">
                                             <source src={VideoOne} type="video/mp4" />
                                        </video>
                                   </div>
                                   <div className='space-y-3 w-1/4'>
                                        <img id="img1" src={imgOneO} alt="" className="object-cover" />
                                        <video type="video/webm" autoplay="autoplay" playsinline="" muted="muted" loop="loop" className="h-[40%] object-cover">
                                             <source src={Video} type="video/mp4" />
                                        </video>
                                        <img id="img1" src={imgOneO} alt="" className="object-cover" />
                                   </div>
                                   <div className='space-y-3 w-1/4'>
                                        <img id="img1" src={imgOneO} alt="" className="object-cover" />
                                        <video type="video/webm" autoplay="autoplay" playsinline="" muted="muted" loop="loop" className="h-full object-cover">
                                             <source src={VideoOne} type="video/mp4" />
                                        </video>
                                   </div>
                              </div>
                         </div>
                    </div>
               </div>
          </div >
     )
}

export default NewExplore


