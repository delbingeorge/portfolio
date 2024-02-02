import React from 'react'
import { motion } from "framer-motion"

function Loading() {
     return (
          <div className='min-h-screen bg-white flex items-center justify-center'>
               <motion.img
                    animate={{ y: -50 }}
                    transition={{ delay: 0.1 }}
                    src="src/assets/loading-assets/1.png" alt="Loading Image" className='w-[23rem]' />
          </div>
     )    
}

export default Loading
