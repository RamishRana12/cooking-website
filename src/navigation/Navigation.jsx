import { useState } from "react";
import { FaBars, FaTimes } from "react-icons/fa";
import { Link } from "react-router-dom";
import {motion} from "framer-motion";
export default function Navbar() {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <div className="h-[120px] p-4 max-sm:p-0 shadow-lg flex justify-center  items-center w-[100%] bg-white fixed top-0 z-50">
      <div className="flex items-center w-full max-sm:w-[100%] md:w-[100%]  justify-between ">
        {/* Logo */}
        <motion.a
        initial={{ opacity: 0, x: -20 }}
        animate={{ opacity: 1, x: 0 }}
        transition={{ duration: 0.5 }}
          href="/"
          className="text-2xl font-bold text-orange-500 hover:text-orange-300 flex items-center"
        >
          <i className="fa-solid fa-cookie-bite text-[30px]"></i>
          <span className="ml-2">Cooking Haven</span>
        </motion.a>

        {/* Desktop Menu */}
        <div className="hidden md:flex space-x-6">
          <motion.div 
          initial={{ opacity: 0, y: -20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1 }}>
          <Link href="/home" className="text-xl hover:text-orange-500 cursor-pointer">
            Home
          </Link>
          </motion.div>
          <motion.a
     initial={{ opacity: 0, y: -20 }}
     animate={{ opacity: 1, y: 0 }}
     transition={{ duration: 1 }}
            href="/recipes"
            className="text-xl hover:text-orange-500 cursor-pointer"
          >
            Recipes
          </motion.a>
          <motion.a
          initial={{ opacity: 0, y: -20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1 }}
            href="/about"
            className="text-xl hover:text-orange-500 cursor-pointer"
          >
            About
          </motion.a>
          <motion.a
           initial={{ opacity: 0, y: -20 }}
           animate={{ opacity: 1, y: 0 }}
           transition={{ duration: 1 }}
            href="/contact"
            className="text-xl hover:text-orange-500 cursor-pointer"
          >
            Contact
          </motion.a>
        </div>

        {/* Desktop Buttons */}
        <div className="hidden md:flex">
          <motion.button
           initial={{ opacity: 0, x: 20 }}
           animate={{ opacity: 1, x: 0 }}
           transition={{ duration: 1 }}
            type="button"
            className="btn btn-outline-danger mr-4 rounded-full w-[150px] h-[50px]"
          >
            Contact Us
          </motion.button>
          <motion.button
          initial={{ opacity: 0, x: 20 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 1 }}
            type="button"
            className="btn btn-outline-danger rounded-full w-[150px] h-[50px]"
          >
            Danger
          </motion.button>
        </div>

        {/* Mobile Menu Button */}
        <button
          className="md:hidden text-2xl"
          onClick={() => setIsOpen(!isOpen)}
        >
          {isOpen ? <FaTimes /> : <FaBars />}
        </button>
      </div>

      {/* Mobile Dropdown Menu */}
      {isOpen && (
        <div className="absolute top-[100px] left-0 w-full bg-white shadow-md flex flex-col items-center space-y-4 p-6 md:hidden">
          <a href="/" className="text-xl hover:text-orange-500 cursor-pointer">
            Home
          </a>
          <a
            href="/recipes"
            className="text-xl hover:text-orange-500 cursor-pointer"
          >
            Recipes
          </a>
          <a
            href="/about"
            className="text-xl hover:text-orange-500 cursor-pointer"
          >
            About
          </a>
          <a
            href="/contact"
            className="text-xl hover:text-orange-500 cursor-pointer"
          >
            Contact
          </a>
          <button
            type="button"
            className="btn btn-outline-danger rounded-full w-[150px] h-[50px]"
          >
            Contact Us
          </button>
          <button
            type="button"
            className="btn btn-outline-danger rounded-full w-[150px] h-[50px]"
          >
            Danger
          </button>
        </div>
      )}
    </div>
  );
}
