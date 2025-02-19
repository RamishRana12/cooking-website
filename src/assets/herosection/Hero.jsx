import React from "react";
import image from "../imageshero/bannerimage.png";
import {motion} from "framer-motion";

function Hero() {
  return (
    <div className="flex justify-center items-center w-full p-4 mt-16 ">
      <div className="flex  justify-between items-center mt-5 w-[80%] max-lg:w-[90%] max-sm:flex-col max-sm:w-[100%] ">
        {/* Text Section */}
        <div className="max-w-lg text-center max-md:text-left">
          <motion.h1 
          initial={{ opacity: 0, y: 2000 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1 }}

          className="text-[60px] max-lg:text-[50px] max-sm:text-[50px] max-md:text-[40px] font-bold leading-tight">
            Cook anything <br /> with the experts
          </motion.h1>
          <motion.p
          initial={{ opacity: 0, y: 2000 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1,delay: 0.5 }}
          className="mt-6 mb-8 text-[20px] max-md:text-[18px]">
            Lorem ipsum dolor sit amet consectetur adipisicing  <br />
            Non, illo? consectetur adipisicing elit. Non, illo?
          </motion.p>
          <div className="flex justify-center items-center space-x-4 max-md:flex-col max-md:space-x-0 max-md:space-y-4">
            <motion.button
            initial={{ opacity: 0, y: 2000 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 1,delay: 1 }}
              type="button"
              className="btn btn-outline-danger rounded-full w-[200px] h-[60px] max-sm:hidden"
            >
              Learn More
            </motion.button>
            <motion.button
              initial={{ opacity: 0, y: 2000 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 1,delay: 1.5 }}
              type="button"
              className="btn btn-outline-danger rounded-full w-[200px] h-[60px]"
            >
              Get Started
            </motion.button>
          </div>
        </div>

        {/* Image Section */}
        <div className="flex justify-center mt-6 max-md:w-full">
          <motion.img
            initial={{ opacity: 0,  }}
            animate={{ opacity: 1,  }}
            transition={{ duration: 1,delay: 2.5 }}
            src={image}
            alt="Cooking"
            className="h-[600px] w-[700px] max-lg:h-[500px] max-sm:w-[500px]  max-md:h-[400px] max-md:w-[100%] object-cover"
          />
        </div>
      </div>
    </div>
  );
}

export default Hero;

