import React from "react";
import {motion} from "framer-motion";

function Subscriber() {
  return (
    <div className="w-[100%] flex justify-center items-center mt-[150px] ">
      <div className="w-[80%] flex justify-between items-center bg-orange-300 rounded-full max-sm:flex-col relative  ">
        <div className="p-36   ">
          <motion.h1 
          initial={{  opacity:0 }}
          whileInView={{ opacity:1 }}
          transition={{duration:1,delay:3}}
          viewport={{once:true}}
          className="text-white">NEWSLETTER</motion.h1>
          <motion.h1 
          initial={{  opacity:0 }}
          whileInView={{ opacity:1 }}
          transition={{duration:1,delay:3}}
          viewport={{once:true}}
          className="text-[50px] font-bold font-mono text-white  mb-5 max-sm:text-[40px]">
            Subscribe our <br />
            newsletter
          </motion.h1>
          <motion.input
         initial={{  opacity:0 }}
         whileInView={{ opacity:1 }}
         transition={{duration:1,delay:3}}
         viewport={{once:true}}
            type="text"
            placeholder="Enter your email"
            className="w-[500px] h-[80px] rounded-full border-none outline-none px-2 max-sm:w-[300px] max-sm:h-[50px] "

          />
        </div>
        <div className="relative max-sm:absolute max-sm:top-[360px] ">
          <motion.img
          initial={{  opacity:0 }}
          whileInView={{ opacity:1,rotate:360 }}
          transition={{duration:2,delay:1}}
          viewport={{once:true}}
            src="https://themewagon.github.io/chefs-kitchen-nextjs-free/images/Newsletter/soup.svg"
            alt=""
            className="max-sm:w-[300px] max-sm:h-[300px]"
          />
          <div >
            <motion.img
                  initial={{  opacity:0 }}
                  whileInView={{ opacity:1 }}
                  transition={{duration:1,delay:3}}
                  viewport={{once:true}}
              src="https://themewagon.github.io/chefs-kitchen-nextjs-free/images/Newsletter/onion.svg"
              className="absolute bottom-1 max-sm:hidden"
              alt=""
            />
          </div>
        </div>
      </div>
    </div>
  );
}

export default Subscriber;
