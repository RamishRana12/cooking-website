import React from 'react'
import FeaturesComponents from '../components/FeaturesComponents'
import { motion } from 'framer-motion'

function Faetures() {
  return (
    <div className=' flex flex-col justify-center items-center w-[100%] '>
      <motion.div
      className='mt-[00px] w-[100%] flex-wrap'
      >
        <p className='text-center text-orange-500 '>F E A T U R E S</p>
        <h1 className='text-center text-[50px] font-bold max-sm:text-[30px]'>Get a many of intresting <br/> features</h1>
      </motion.div>
      <div className='mt-[70px] max-sm:mt-[30px] w-[100%] sm:w-[100%] md:w-[100%] '>
        <FeaturesComponents/>
      </div>
    </div>
    
  )
}

export default Faetures
