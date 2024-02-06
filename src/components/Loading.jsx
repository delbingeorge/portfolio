import React from 'react'
import { motion } from "framer-motion"
import LoadingImage from '../assets/loading-assets/1.png'

function Loading() {
     return (
          <div className='min-h-screen bg-white flex items-center justify-center'>
               <motion.img
                    animate={{ y: -50 }}
                    transition={{ delay: 0.1 }}
                    src={LoadingImage} alt="Loading Image" className='w-[23rem]' />
          </div>
     )
}

export default Loading
