import React from "react";
import {motion} from "framer-motion";

function Subscriber() {
  return (
    <div className="w-full flex justify-center items-center mt-36  px-4 ">
    <div className="w-[80%] max-sm:w-[80%] flex justify-between max-sm:h-[500px] max-sm:flex-col max-sm:justify-center items-center bg-orange-300 rounded-full p-28">
      
      {/* Text & Input Section */}
      <div className="flex flex-col p-10  max-sm:p-0 max-sm:mb-3 max-sm:mt-10">
        
        <motion.h1
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          transition={{ duration: 1, delay: 1 }}
          viewport={{ once: true }}
          className="text-white text-lg max-sm:font-bold max-sm:mb-3 max-sm:text-center "
        >
          NEWS LETTER
        </motion.h1>

        <motion.h1
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          transition={{ duration: 1, delay: 1 }}
          viewport={{ once: true }}
          className="text-[50px] max-sm:text-md max-sm:font-thin font-bold  text-white mb-5 max-sm:text-[30px]"
        >
          Subscribe to our <br /> newsletter
        </motion.h1>

        <motion.input
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          transition={{ duration: 1, delay: 1 }}
          viewport={{ once: true }}
          type="text"
          placeholder="Enter your email"
          className="w-[400px] max-sm:w-[250px] h-16  rounded-full border-none outline-none px-6 text-lg shadow-md"
        />
      </div>

      {/* Image Section */}
      <div className="relative  max-sm:w-[200px]">
        <motion.img
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1, rotate: 360 }}
          transition={{ duration: 2, delay: 2 }}
          viewport={{ once: true }}
          src="https://themewagon.github.io/chefs-kitchen-nextjs-free/images/Newsletter/soup.svg"
          alt="Newsletter Soup"
          className=" h-[400px] max-sm:h-[150px] w-[500px] max-sm:w-[250px]"
        />
      </div>
    </div>
  </div>
  );
}

export default Subscriber;
