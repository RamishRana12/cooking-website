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
    <div className="grid grid-cols-1 max-sm:grid-cols-2 lg:grid-cols-4 gap-6  w-full p-6">
          {data.map((item,i) => (
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.3, delay:i * 0.5 }}
              viewport={{ once: true }}
              key={i}
              className="relative flex max-sm:mt-[80px]  justify-center flex-col h-[250px] items-center bg-slate-100 shadow-xl shadow-orange-500 rounded-2xl border p-6"
            >
              <div className="h-[100px] w-[100px] max-sm:h-[80px] max-sm:w-[80px] rounded-full absolute -top-10 overflow-hidden shadow-md">
                <img
                  src={item.img}
                  alt={`Profile picture of ${item.title}`}
                  className="h-full w-full object-cover rounded-full"
                />
              </div>
              <div className="flex justify-center items-center flex-col text-center">
                <p className="font-bold text-xl  font-serif max-sm:text-[17px]">{item.title}</p>
                <p className="text-gray-600 max-sm:text-[15px]">{item.description}</p>
                <a
                  href={item.link || "#"}
                  className="text-orange-700  font-bold text-lg hover:text-orange-900 hover:underline"
                  role="button"
                >
                  Learn More
                </a>
              </div>
            </motion.div>
          ))}
        </div>
      );
    };

