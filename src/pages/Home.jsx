import React, { useEffect, useState } from 'react';
import Navbar from '../navigation/Navigation';
import Hero from '../assets/herosection/Hero';
import Faetures from '../assets/Faetures/Faetures';
import Recipe from '../recipesection/Recipe';
import Gallery from '../gellery/Gallery';
import Subscriber from '../subscriberpart/Subscriber';
import Footer from '../footer/Footer';
import { motion } from 'framer-motion';

function Home() {
  const [showIntro, setShowIntro] = useState(true);

  useEffect(() => {
    const timer = setTimeout(() => {
      setShowIntro(false);
    }, 3000);
    return () => clearTimeout(timer);
  }, []); 

  return (
    <>
      {showIntro && (
        <motion.div
          className="fixed top-0 left-0 w-full bg-orange-500 h-screen flex justify-center items-center origin-top"
          initial={{ opacity: 1, scaleY: 1 }}
          animate={{ opacity: 0, scaleY: 0 }}
          transition={{ delay: 2, ease: 'easeInOut', duration: 1 }}
        >
          <motion.h1 className='text-[80px] font-bold flex items-center max-sm:text-[30px]'>
            <i className="fa-solid fa-cookie-bite text-[120px] max-sm:text-[60px]"></i>
            <span className="ml-2">Cooking Haven</span>
          </motion.h1>
        </motion.div>
      )}
      <div>
        <Navbar />
        <div className='m-auto w-full'>
          <Hero />
        </div>
        <div className='mt-[100px]'>
          <Faetures />
        </div>
        <div className='bg-orange-100'>
          <Recipe />
        </div>
        <div>
          <Gallery />
        </div>
        <Subscriber />
        <Footer />
      </div>
    </>
  );
}

export default Home;


