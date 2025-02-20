import React from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import "swiper/css/pagination";
import {motion} from "framer-motion"
import { Pagination, Autoplay } from "swiper/modules";

const chefs = [
    {
      img: "https://themewagon.github.io/chefs-kitchen-nextjs-free//images/Expert/boyone.svg",
      name: "Chef John Doe",
      specialty: "Italian Cuisine",
    },
    {
      img: "https://themewagon.github.io/chefs-kitchen-nextjs-free//images/Expert/boytwo.svg",
      name: "Chef Jane Smith",
      specialty: "French Pastry",
    },
    {
      img: "https://themewagon.github.io/chefs-kitchen-nextjs-free//images/Expert/girl.png",
      name: "Chef Marco Polo",
      specialty: "Asian Fusion",
    },
    {
      img: "https://themewagon.github.io/chefs-kitchen-nextjs-free//images/Expert/boytwo.svg",
      name: "Chef Lisa Wong",
      specialty: "Vegan Delights",
    },
  ];

function Slider() {
  return (
    <motion.div 
    initial={{ opacity:0 }}
    whileInView={{ opacity:1 }}
    transition={{ delay:3}}
    viewport={{once:true}}
       className="w-[80%] m-auto  px-4  ">
    <Swiper
      modules={[Pagination, Autoplay]}
      spaceBetween={10}
      slidesPerView={1}
      pagination={{ clickable: true }}
      autoplay={{ delay: 3000, disableOnInteraction: false }}
      breakpoints={{
        640: { slidesPerView: 1 },
        768: { slidesPerView: 2 },
        1024: { slidesPerView: 3 },
      }}
      className="w-full"
    >
      {chefs.map((chef, index) => (
        <div 
      >
        <SwiperSlide key={index} className="text-center p-6 rounded-lg   ">
          <img
            src={chef.img}
            alt={chef.name}
            className="m-auto  w-[350px] h-[350px] object-cover "
          />
          <h3 className="text-2xl font-semibold mt-4">{chef.name}</h3>
          <p className="text-gray-600 mt-2 mb-3">{chef.specialty}</p>
        </SwiperSlide>
        </div>
      ))}
    </Swiper>
  </motion.div>
  )
}

export default Slider
