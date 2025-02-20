import React from 'react'
import Navbar from '../navigation/Navigation'
import Hero from '../assets/herosection/Hero'
import Faetures from '../assets/Faetures/Faetures'
import Recipe from '../recipesection/Recipe'
import Gallery from '../gellery/Gallery'
import Subscriber from '../subscriberpart/Subscriber'
import Footer from '../footer/Footer'
function Home() {
  return (
    <div>
      <Navbar/>
      <div className=' m-auto w-full'>
      <Hero/>
      </div>
      <div className='mt-[100px]'>
      <Faetures/>
      </div>
      <div className=' bg-orange-100'>
        <Recipe/>
      </div>
      <div>
        <Gallery/>
      </div>
      <Subscriber/>
      <Footer/>
    </div>
    
  )
}

export default Home
