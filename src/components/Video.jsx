
import React from 'react'
import VideoOne from '../assets/video/selfintro.mp4'

function Video() {
     return (
          <div className='h-min-screen rounded-lg my-4'>
               <video type="video/webm" autoplay="autoplay" playsinline="" muted="muted" loop="loop" className="object-cover rounded-xl">
                    <source src={VideoOne} type="video/mp4" />
               </video>
          </div>
     )
}

export default Video
