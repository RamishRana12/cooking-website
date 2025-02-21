import { useState } from "react";
import { FaBars, FaTimes } from "react-icons/fa";
import { Link } from "react-router-dom";
import { motion } from "framer-motion";
export default function Navbar() {
  const [isOpen, setIsOpen] = useState(false);
  // console.log("hello");
  return (
    <nav className="bg-white shadow-lg w-full p-4">
      <div className=" mx-auto flex items-center justify-between">
        {/* Logo */}
        <motion.a
          initial={{ opacity: 0, x: -20 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.5, delay: 3 }}
          href="/"
          className="text-2xl font-bold text-orange-500 hover:text-orange-300 flex items-center"
        >
          <i className="fa-solid fa-cookie-bite text-[30px]"></i>
          <Link to="/hero\">
            <span className="ml-2">Cooking Haven</span>
          </Link>
        </motion.a>

        {/* Desktop Menu */}
        <div className="hidden md:flex space-x-6">
          {["Home", "Recipes", "About", "Contact"].map((item, index) => {
            console.log("hello");
            return (
              <motion.div
                key={item}
                initial={{ opacity: 0, y: -20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 1, delay: 3 }}
              >
                <a
                  href={`#${item.toLowerCase()}`}
                  className="text-xl hover:text-orange-500 cursor-pointer"
                >
                  {item}
                </a>
              </motion.div>
            );
          })}
        </div>

        {/* Desktop Buttons */}
        <div className="hidden md:flex space-x-4">
          <motion.button
            initial={{ opacity: 0, x: 20 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 1, delay: 3 }}
            className="border border-orange-500 text-orange-500 px-6 py-2 rounded-full hover:bg-orange-500 hover:text-white transition"
          >
            Contact Us
          </motion.button>
          <motion.button
            initial={{ opacity: 0, x: 20 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 1, delay: 3 }}
            className="border border-red-500 text-red-500 px-6 py-2 rounded-full hover:bg-red-500 hover:text-white transition"
          >
            Danger
          </motion.button>
        </div>

        {/* Mobile Menu Button */}
        <button
          className="md:hidden text-2xl focus:outline-none"
          onClick={() => setIsOpen(!isOpen)}
        >
          {isOpen ? <FaTimes /> : <FaBars />}
        </button>
      </div>

      {/* Mobile Dropdown Menu */}
      {isOpen && (
        <motion.div
          initial={{ opacity: 0, y: -10 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.3 }}
          className="md:hidden bg-white shadow-md flex flex-col items-center space-y-4 py-6 absolute top-[60px] left-0 w-full"
        >
          {/* console.log("Rendering navigation links..."); */}
          {["Home", "Recipes", "About", "Contact"].map((item) => {
            console.log("Processing:", item); // Ensure this runs
            return (
              <a
                key={item}
                href={`/${item.toLowerCase()}`}
                className="text-xl hover:text-orange-500 cursor-pointer"
              >
                {item}
              </a>
            );
          })}
          <button className="border border-orange-500 text-orange-500 px-6 py-2 rounded-full hover:bg-orange-500 hover:text-white transition">
            Contact Us
          </button>
          <button className="border border-red-500 text-red-500 px-6 py-2 rounded-full hover:bg-red-500 hover:text-white transition">
            Danger
          </button>
        </motion.div>
      )}
    </nav>
  );
}
