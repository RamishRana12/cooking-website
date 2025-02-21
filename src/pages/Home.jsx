import { useState, useEffect, useRef } from "react";
import { motion } from "framer-motion";
import { FaBars, FaTimes } from "react-icons/fa";
import Hero from '../assets/herosection/Hero.jsx'

import Features from "../assets/Faetures/Faetures";
import Recipe from "../recipesection/Recipe.jsx";
import Gallery from "../gellery/Gallery.jsx";
import Subscriber from "../subscriberpart/Subscriber.jsx";
import Footer from "../footer/Footer.jsx";

function Home() {
  const [showIntro, setShowIntro] = useState(true);
  const [isOpen, setIsOpen] = useState(false);

  // Refs for smooth scrolling
  const heroRef = useRef(null);
  const featuresRef = useRef(null);
  const recipeRef = useRef(null);
  const galleryRef = useRef(null);
  const subscriberRef = useRef(null);

  // Hide intro animation after 3 seconds
  useEffect(() => {
    const timer = setTimeout(() => {
      setShowIntro(false);
    }, 3000);
    return () => clearTimeout(timer);
  }, []);

  // Function to scroll to section
  const scrollToSection = (ref) => {
    ref.current?.scrollIntoView({ behavior: "smooth" });
    setIsOpen(false); // Close mobile menu after clicking
  };

  return (
    <>
      {/* Intro Animation */}
      {showIntro && (
        <motion.div
          className="fixed top-0 left-0 w-full h-screen bg-orange-500 flex justify-center items-center"
          initial={{ opacity: 1 }}
          animate={{ opacity: 0 }}
          transition={{ delay: 2, duration: 1, ease: "easeInOut" }}
        >
          <motion.h1 className="text-[80px] font-bold flex items-center max-sm:text-[30px]">
            <i className="fa-solid fa-cookie-bite text-[120px] max-sm:text-[60px]"></i>
            <span className="ml-2">Cooking Haven</span>
          </motion.h1>
        </motion.div>
      )}

      {/* Navigation */}
      <nav className="bg-white shadow-lg w-full p-4 fixed top-0 left-0 z-50">
        <div className="mx-auto flex items-center justify-between">
          {/* Logo */}
          <motion.a
            initial={{ opacity: 0, x: -20 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.5, delay: 3 }}
            href="#"
            className="text-2xl font-bold text-orange-500 hover:text-orange-300 flex items-center"
          >
            <i className="fa-solid fa-cookie-bite text-[30px]"></i>
            <span className="ml-2">Cooking Haven</span>
          </motion.a>

          {/* Desktop Navigation */}
          <div className="hidden md:flex space-x-6">
            {[
              { name: "Home", ref: heroRef },
              { name: "Features", ref: featuresRef },
              { name: "Recipes", ref: recipeRef },
              { name: "Gallery", ref: galleryRef },
              { name: "Subscriber", ref: subscriberRef },
            ].map((item) => (
              <motion.div
                key={item.name}
                initial={{ opacity: 0, y: -20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 1, delay: 3 }}
              >
                <button
                  onClick={() => scrollToSection(item.ref)}
                  className="text-xl hover:text-orange-500 cursor-pointer"
                >
                  {item.name}
                </button>
              </motion.div>
            ))}
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
            {[
              { name: "Home", ref: heroRef },
              { name: "Features", ref: featuresRef },
              { name: "Recipes", ref: recipeRef },
              { name: "Gallery", ref: galleryRef },
              { name: "Subscriber", ref: subscriberRef },
            ].map((item) => (
              <button
                key={item.name}
                onClick={() => scrollToSection(item.ref)}
                className="text-xl hover:text-orange-500 cursor-pointer"
              >
                {item.name}
              </button>
            ))}
          </motion.div>
        )}
      </nav>

      {/* Sections */}
      <div className="pt-[70px]"> {/* Adjusted for fixed navbar */}
        <div ref={heroRef} className="">
          <Hero />
        </div>
        <div ref={featuresRef} className="">
          <Features />
        </div>
        <div ref={recipeRef} className=" ">
          <Recipe />
        </div>
        <div ref={galleryRef} className=" ">
          <Gallery />
        </div>
        <div ref={subscriberRef} className="">
          <Subscriber />
        </div>

        {/* Footer */}
        <Footer />
      </div>
    </>
  );
}

export default Home;



