import React from "react";
import { motion } from "framer-motion";
const data = [
  {
    img: "https://images.unsplash.com/photo-1504387828636-abeb50778c0c?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTh8fGNvb2tpbmd8ZW58MHx8MHx8fDA%3D",
    title: "menu variation",
    description: "Lorem ipsum dolor sit amet consectetur adipisic",
  },
  {
    img: "https://images.unsplash.com/photo-1551218808-94e220e084d2?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8N3x8Y29va2luZ3xlbnwwfHwwfHx8MA%3D%3D",
    title: "cooking ware",
    description: "Lorem ipsum dolor sit amet consectetur adipisic?",
  },
  {
    img: "https://images.unsplash.com/photo-1506368249639-73a05d6f6488?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8NHx8Y29va2luZ3xlbnwwfHwwfHx8MA%3D%3D",
    title: "best chef",
    description: "Lorem ipsum dolor sit amet consectetur adipisicing e?",
  },
  {
    img: "https://images.unsplash.com/photo-1547592180-85f173990554?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTJ8fGNvb2tpbmd8ZW58MHx8MHx8fDA%3D",
    title: "fast food",
    description: "Lorem ipsum dolor sit amet consectetur adipisic?",
  },
];

export default function FeaturesComponents() {
  return (
    <div className="flex flex-wrap justify-center max-sm:justify-center  w-[100%] ">
      {data.map((item, i) => (
        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          transition={{ duration: 0.3, delay: i * 0.3 }}
          viewport={{ once: true }}
          key={i}
          className="relative w-[300px] m-[35px]   items-center max-sm: bg-slate-100 flex justify-between flex-col shadow-2xl shadow-orange-500 rounded-2xl border-b-transparent p-8"
        >
          <div className="h-[120px] w-[120px] rounded-full -right-[-90px] absolute -top-14 overflow-hidden ">
            <img
              src={item.img}
              alt={item.title}
              className="h-full w-full object-cover rounded-full"
            />
          </div>
          <div className="flex justify-center items-center flex-col mt-[80px]">
            <p className="text-center font-bold text-3xl mb-2">{item.title}</p>
            <p className="text-gray-600 text-center">{item.description}</p>
            <a
              href="#"
              className="text-orange-700 mt-2 font-bold text-xl hover:text-orange-900 hover:underline"
            >
              Learn More
            </a>
          </div>
        </motion.div>
      ))}
    </div>
  );
}
