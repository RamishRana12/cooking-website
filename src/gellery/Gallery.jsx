import React from "react";
import {motion} from  "framer-motion";
const galleryImages = [
  {
    img: "https://images.unsplash.com/photo-1504674900247-0877df9cc836?w=500&auto=format&fit=crop&q=60",
    name: "Grilled Steak",
    price: "$25",
  },
  {
    img: "https://images.unsplash.com/photo-1513104890138-7c749659a591?w=500&auto=format&fit=crop&q=60",
    name: "Pasta Delight",
    price: "$18",
  },
  {
    img: "https://images.unsplash.com/photo-1505253758473-96b7015fcd40?w=500&auto=format&fit=crop&q=60",
    name: "Seafood Platter",
    price: "$30",
  },
  {
    img: "https://images.unsplash.com/photo-1473093226795-af9932fe5856?w=500&auto=format&fit=crop&q=60",
    name: "Fresh Salad",
    price: "$12",
  },
  {
    img: "https://images.unsplash.com/photo-1565958011703-44f9829ba187?w=500&auto=format&fit=crop&q=60",
    name: "Tasty Burger",
    price: "$15",
  },
  {
    img: "https://images.unsplash.com/photo-1534939561126-855b8675edd7?w=500&auto=format&fit=crop&q=60",
    name: "Sushi Platter",
    price: "$28",
  },
  {
    img: "https://images.unsplash.com/photo-1529042410759-befb1204b468?w=500&auto=format&fit=crop&q=60",
    name: "Cheese Pizza",
    price: "$20",
  },
  {
    img: "https://images.unsplash.com/photo-1546069901-ba9599a7e63c?w=500&auto=format&fit=crop&q=60",
    name: "Gourmet Dessert",
    price: "$10",
  },
];

function Gallery() {
  return (
    <>
      <div className="mt-[80px]">
        <motion.p 
            initial={{ x:-50, opacity:0 }}
            whileInView={{ opacity:1,x:0 }}
            transition={{duration:1,delay:1}}
            viewport={{once:true}}
              className="text-center text-2xl font-mono ">
          O U R <motion.span  
          initial={{ x:50, opacity:0 }}
          whileInView={{ opacity:1,x:0 }}
          transition={{duration:1,delay:1}}
          viewport={{once:true}}
          className="ml-3">G A L L E R Y</motion.span>
        </motion.p>
        <motion.h1 
        initial={{  opacity:0 }}
        whileInView={{ opacity:1 }}
        transition={{duration:1,delay:1.5}}
        viewport={{once:true}}
         className="text-center font-bold text-[40px]">
          Gallery of our cooked food
        </motion.h1>
      </div>
      <motion.div 
      initial={{  opacity:0 }}
      whileInView={{ opacity:1}}
      transition={{duration:1,delay:2}}
      viewport={{once:true}}
      className="w-[80%] mx-auto py-10 px-4">
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols gap-[30px]">
          {galleryImages.map((item, i) => (
            <motion.div
            initial={{  opacity:0 }}
          whileInView={{ opacity:1 }}
          transition={{delay:i * 0.3}}
          viewport={{once:true}}
              key={i}
              className="overflow-hidden rounded-lg relative group"
            >
              <img
                src={item.img}
                alt={item.name}
                className="w-full h-[300px] object-cover transform hover:scale-105 transition duration-300 max-sm:h-[200px]"
              />
              <div className="absolute h-full w-full  bg-black opacity-0 group-hover:opacity-70 top-0 flex justify-center items-center flex-col text-white transition-opacity duration-300">
                <p className="text-lg font-bold">{item.name}</p>
                <p className="text-md">{item.price}</p>
                <button className="mt-4 bg-orange-500 hover:bg-orange-700 text-white py-2 px-4 rounded-full">
                  Order Now
                </button>
              </div>
            </motion.div>
          ))}
        </div>
      </motion.div>
    </>
  );
}

export default Gallery;
