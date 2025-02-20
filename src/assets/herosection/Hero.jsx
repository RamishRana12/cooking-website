import React from "react";
import image from "../imageshero/bannerimage.png";
import {motion} from "framer-motion";

function Hero() {
  return (
    <div className="flex justify-center items-center w-full p-4">
      <div className="grid grid-cols-1 md:grid-cols-2 gap-8 items-center  text-center md:text-left">
        
        {/* Text Section */}
        <div>
          <motion.h1
            initial={{ opacity: 0, y: 50 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 1,delay: 3.5 }}
            className="text-[60px] md:text-[50px] max-sm:text-[40px] font-mono font-bold leading-tight"
          >
            Cook anything! <br /> with the experts
          </motion.h1>
          
          <motion.p
            initial={{ opacity: 0, y: 50 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 1, delay: 3.8}}
            className="mt-6 mb-8 text-lg md:text-[18px] max-sm:text-[15px] font-thin"
          >
            Lorem ipsum dolor sit amet consectetur adipisicing. <br />
            Non, illo? consectetur adipisicing. Non, illo?
          </motion.p>

          <div className="flex justify-center md:justify-start  sm:flex-col sm:space-x-0 sm:space-y-4">
            <motion.button
              initial={{ opacity: 0, y: 50 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 1, delay: 4 }}
              type="button"
              className="border border-orange-500 text-orange-500 px-6 py-3 rounded-full hover:bg-orange-500 hover:text-white transition hidden sm:inline-block"
            >
              Learn More
            </motion.button>

            <motion.button
              initial={{ opacity: 0, y: 50 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 1, delay: 4.4 }}
              type="button"
              className="border border-red-500 text-red-500 px-6 py-3  rounded-full hover:bg-red-500 hover:text-white transition"
            >
              Get Started
            </motion.button>
          </div>
        </div>

        {/* Image Section */}
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 1, delay: 5}}
          className="flex justify-center"
        >
          <img
            src={image}
            alt="Cooking"
            className="w-full max-w-[700px] h-auto object-cover rounded-lg "
          />
        </motion.div>
      </div>
    </div>
  );
}

export default Hero;

