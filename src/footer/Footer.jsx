import React from "react";

function Footer() {
  return (
    <div className="">
      <footer className=" text-black  mt-[200px]  flex justify-center items-center max-sm:justify-start w-full">
        <div className=" w-[100%] px-4 grid grid-cols-1 md:grid-cols-3 gap-64 max-sm:gap-6  lg:grid-cols-4   ">
          <div>
            <h3 className="text-2xl font-bold">
              <i className="fa-solid fa-cookie-bite text-orange-500 text-[30px]"></i>{" "}
              Cooking Heaven
            </h3>
            <p className="mt-4 text-black ">
              We bring you the best recipes 
            </p>
            <div className="mt-4">
              <i className="fa-solid fa-circle-user text-[25px] hover:text-orange-500 cursor-pointer duration-100"></i>
              <i className="fa-solid fa-truck mr-3 ml-3 text-[25px] hover:text-orange-500 cursor-pointer duration-100"></i>
              <i className="fa-solid fa-wand-magic-sparkles text-[25px] hover:text-orange-500 cursor-pointer duration-100"></i>
            </div>
            <div></div>
          </div>
          <div>
            <h3 className="text-2xl font-bold">Quick Links</h3>
            <ul className="mt-4">
              <li>
                <a
                  href="#"
                  className="text-black hover:text-orange-500 cursor-pointer duration-100 max-sm:text-left "
                >
                  Home
                </a>
              </li>
              <li className="mt-4 mb-4 ">
                <a
                  href="#"
                  className="text-black  hover:text-orange-500 cursor-pointer duration-100 max-sm:text-left"
                >
                  Menu
                </a>
              </li>
              <li>
                <a
                  href="#"
                  className="text-black hover:text-orange-500 cursor-pointer duration-100"
                >
                  Gallery
                </a>
              </li>
              <li className="mt-4 mb-4">
                <a
                  href="#"
                  className="text-black hover:text-orange-500 cursor-pointer duration-100"
                >
                  Contact
                </a>
              </li>
            </ul>
          </div>
          <div>
            <h3 className="text-2xl font-bold">Information</h3>
            <ul className="mt-4">
              <li>
                <a
                  href="#"
                  className="text-black hover:text-orange-500 cursor-pointer duration-100"
                >
                  Home
                </a>
              </li>
              <li className="mt-4 mb-4">
                <a
                  href="#"
                  className="text-black hover:text-orange-500 cursor-pointer duration-100"
                >
                  About us
                </a>
              </li>
              <li>
                <a
                  href="#"
                  className="text-black hover:text-orange-500 cursor-pointer duration-100"
                >
                  Recipe
                </a>
              </li>
              <li className="mt-4 mb-4">
                <a
                  href="#"
                  className="text-black hover:text-orange-500 cursor-pointer duration-100"
                >
                  Contact
                </a>
              </li>
            </ul>
          </div>
          <div>
            <h3 className="text-2xl font-bold">Contact</h3>
            <ul className="mt-4">
              <li>
                <a
                  href="#"
                  className="text-black hover:text-orange-500 cursor-pointer duration-100"
                >
                  Home
                </a>
              </li>
              <li className="mt-4 mb-4">
                <a
                  href="#"
                  className="text-black hover:text-orange-500 cursor-pointer duration-100"
                >
                  About us
                </a>
              </li>
              <li>
                <a
                  href="#"
                  className="text-black hover:text-orange-500 cursor-pointer duration-100"
                >
                  Recipe
                </a>
              </li>
              <li className="mt-4 mb-4">
                <a
                  href="#"
                  className="text-black hover:text-orange-500 cursor-pointer duration-100"
                >
                  Contact
                </a>
              </li>
            </ul>
          </div>
        </div>
      </footer>
      <div className="text-center text-black mt-6">
        {" "}
        <hr />© 2025 Cooking Website. All rights reserved.
      </div>
    </div>
  );
}

export default Footer;
