import React from "react";
import {motion} from "framer-motion";

function Footer() {
  return (
    <motion.div
    initial={{  opacity: 0 }}
          whileInView={{  opacity: 1 }}
          transition={{ duration: 1 }}
          viewport={{ once: true }}
    className="bg-gray-100 py-10 mt-[100px] max-sm:mt-[200px] ">
    <footer className="text-black  w-full ">
      <div className="w-full px-16 max-sm:px-6  grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-10">
        {/* Brand Section */}
        <div className=" flex flex-col items-center max-sm:items-start">
          <motion.h3   
          initial={{  x: 20 }}
          whileInView={{  x: 0 }}
          transition={{ duration: 1 }}
          viewport={{ once: true }}
           className="text-2xl font-bold flex items-center gap-2">
            <i className="fa-solid fa-cookie-bite text-orange-500 text-[30px] "></i>
            Cooking Heaven
          </motion.h3>
          <motion.p
          initial={{  x: 20 }}
          whileInView={{  x: 0 }}
          transition={{ duration: 1 }}
          viewport={{ once: true }}
           className="mt-4">We bring you the best recipes</motion.p>
          <div className="mt-4 flex gap-4">
            <motion.div
            initial={{  x: 20 }}
            whileInView={{  x: 0 }}
            transition={{ duration: 1 }}
            viewport={{ once: true }}>
            <i className="fa-solid fa-circle-user text-[25px] hover:text-orange-500 cursor-pointer transition-all"></i>
            </motion.div>
            <motion.div
            initial={{  x: 20 }}
            whileInView={{  x: 0 }}
            transition={{ duration: 1 }}
            viewport={{ once: true }}>
            <i className="fa-solid fa-truck text-[25px] hover:text-orange-500 cursor-pointer transition-all"></i>
            </motion.div>
            <motion.div
            initial={{  x: 20 }}
            whileInView={{  x: 0 }}
            transition={{ duration: 1 }}
            viewport={{ once: true }}>
            <i className="fa-solid fa-wand-magic-sparkles text-[25px] hover:text-orange-500 cursor-pointer transition-all"></i>
            </motion.div>
          </div>
        </div>

        {/* Quick Links */}
        <div className=" flex flex-col items-center max-sm:items-start" >
          <motion.h3
          initial={{  x: 20 }}
          whileInView={{  x: 0 }}
          transition={{ duration: 1 }}
          viewport={{ once: true }}
           className="text-2xl font-bold">Quick Links</motion.h3>
          <ul className="mt-4 space-y-2">
            {["Home", "Menu", "Gallery", "Contact"].map((link,i) => (
              <motion.li
              initial={{  x: 20 }}
          whileInView={{  x: 0 }}
          transition={{ duration: 1,delay:0.2*i }}
          viewport={{ once: true }}
           key={link}>
                <a href="#" className="text-black hover:text-orange-500 transition-all">
                  {link}
                </a>
              </motion.li>
            ))}
          </ul>
        </div>

        {/* Information */}
        <div className=" flex flex-col items-center max-sm:items-start">
          <motion.h3 className="text-2xl font-bold">Information</motion.h3>
          <ul className="mt-4 space-y-2">
            {["Home", "About us", "Recipe", "Contact"].map((info,i) => (
              <motion.li
              initial={{  x: 20 }}
          whileInView={{  x: 0 }}
          transition={{ duration: 1,delay:0.2*i }}
          viewport={{ once: true }}
               key={info}>
                <a href="#" className="text-black hover:text-orange-500 transition-all">
                  {info}
                </a>
              </motion.li>
            ))}
          </ul>
        </div>

        {/* Contact */}
        <div className=" flex flex-col items-center max-sm:items-start">
          <motion.h3 className="text-2xl font-bold">Contact</motion.h3>
          <ul className="mt-4 space-y-2">
            {["Home", "About us", "Recipe", "Contact"].map((contact,i) => (
              <motion.li
              initial={{  x: 20 }}
          whileInView={{  x: 0 }}
          transition={{ duration: 1 ,delay:0.2*i }}
          viewport={{ once: true }} 
              
              key={contact}>
                <a href="#" className="text-black hover:text-orange-500 transition-all">
                  {contact}
                </a>
              </motion.li>
            ))}
          </ul>
        </div>
      </div>
    </footer>

    {/* Copyright */}
    <div className="text-center text-black mt-6">
      <hr className="my-4 border-gray-300" />
      © 2025 Cooking Website. All rights reserved.
    </div>
  </motion.div>
);
}

export default Footer;
