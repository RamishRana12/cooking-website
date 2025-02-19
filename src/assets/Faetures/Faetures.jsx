import React from 'react'
import FeaturesComponents from '../components/FeaturesComponents'

function Faetures() {
  return (
    <div className=' flex flex-col justify-center items-center w-[100%] '>
      <div className='  mt-24 w-[80%] flex-wrap'>
        <p className='text-center text-orange-500 '>F E A T U R E S</p>
        <h1 className='text-center text-[50px] font-bold max-sm:text-[30px]'>Get a many of intresting <br/> features</h1>
      </div>
      <div className='mt-[100px] w-[80%] sm:w-[100%] md:w-[80%] '>
        <FeaturesComponents/>
      </div>
    </div>
    
  )
}

export default Faetures
