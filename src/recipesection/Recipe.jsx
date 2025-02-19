import React from 'react'
import Slider from '../assets/components/Slider'
import {motion} from "framer-motion";
function Recipe() {
  return (
    <>
    <div className='flex  justify-center items-center w-[100%] mt-[300px]'>
        <div className='flex justify-center  items-center w-[80%]  rounded-lg '>
      <div className='max-sm:hidden'>
        <motion.img 
          initial={{ opacity: 0,  }}
          whileInView={{ opacity: 1,  }}
          transition={{ duration: 1,delay: 2}}
          viewport={{once:true}} src="https://themewagon.github.io/chefs-kitchen-nextjs-free/images/cook/cook.png" alt="" />
      </div>
      <div className='w-[60%] max-sm:w-full '>
        <motion.div
          initial={{ opacity: 0, x: 70 }}
          whileInView={{ opacity: 1, x: 0 }}
          transition={{ delay:0.3 }}
          viewport={{once:true}}
           className='flex  ' >
        <p className='text-center mr-3 text-lg text-orange-500 max-sm:ml-32'> c o o k </p>
        <p className='mr-3 text-lg text-orange-500 max-sm:text-center'>with</p>
        <p className='text-lg text-orange-500 max-sm:'>us</p>
        </motion.div >
         <motion.h1  initial={{ opacity: 0, x: 70 }}
          whileInView={{ opacity: 1, x: 0 }}
          transition={{ delay:0.8}}
          viewport={{once:true}}
           className='font-bold text-[50px] max-sm:text-[35px] max-sm:text-center '>cooking together with <br />the expert</motion.h1>
         <motion.p
          initial={{ opacity: 0, x: 70 }}
          whileInView={{ opacity: 1, x: 0 }}
          transition={{ delay:1}}
          viewport={{once:true}}
           className='text-xl text-gray-500 max-sm:text-sm max-sm:mt-5'>Lorem ipsum dolor sit amet consectetur adipisicing elit. Illum vel amet magnam inventore maxime suscipit, maiores nulla doloremque aperiam, accusamus veniam quidem autem aut at. Eaque fugiat est ut a
         Illum vel amet magnam inventore maxime suscipit, maiores nulla doloremque aperiam, accusamus veniam quidem autem aut at. Eaque fugiat est ut a Illum vel amet magnam inventore maxime suscipit, maiores nulla doloremque aperiam, accusamus veniam quidem autem aut at. Eaque fugiat est ut a.</motion.p>
         <motion.div 
          initial={{ opacity: 0, x: 70 }}
          whileInView={{ opacity: 1, x: 0 }}
          transition={{ delay:1.2}}
          viewport={{once:true}}
          className='mt-[30px]'>
            <p className='max-sm:text-sm'>
            Lorem, ipsum dolor sit amet consectetur adipisicing elit. Accusantium, nequeLorem, ipsum dolor sit amet consectetur adipisicing elit. Accusantium, nequeLorem, ipsum dolor sit amet consectetur adipisicing elit. Accusantium, neque!</p>
            <button type="button" className="btn btn-outline-danger mt-6 rounded-full w-[100px] h-[50px]">cook</button>
         </motion.div>
      </div>
      
      </div>
    </div>
    <div className='w-full  flex justify-end relative  border-orange-500 '>
        <div className='-top-[100px] absolute max-sm:-top-[-70px] max-sm:m-auto   max-sm:w-full max-sm:flex max-sm:justify-center max-sm:items-center'>
        <motion.img 
         initial={{opacity:1, x:0 }}
         whileInView={{opacity:1,rotateY:200 }}
         transition={{ delay:2,duration:1}}
         viewport={{once:true}}
        src="https://themewagon.github.io/chefs-kitchen-nextjs-free/images/cook/burger.png" alt=""
        className='max-sm:w-[350px] '
      />
        </div>
        <div className=' w-full relative mt-[200px] max-sm:mt-[430px] '>
          <motion.p 
          initial={{ opacity:0 }}
          whileInView={{ opacity:1 }}
          transition={{ delay:3}}
          viewport={{once:true}} 
          className='text-center text-orange-500 mt-[100px] '>E X P E R T<span className='ml-3'>C H E F S</span></motion.p>
          <motion.h1 
             initial={{ opacity:0 }}
             whileInView={{ opacity:1 }}
             transition={{ delay:3}}
             viewport={{once:true}} 
          className='text-[40px] text-center font-bold'>let's  meet the expert</motion.h1>
          <div className='w-[100%] mt-[100px]'>
<Slider/>
        </div>
        </div>
        
        
    </div>
    </>
    
  )
}

export default Recipe
