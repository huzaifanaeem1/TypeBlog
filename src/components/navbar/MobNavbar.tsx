"use client";

import React, { useState } from "react";
import NavLink from "./Navlink";
import Image from 'next/image';
import { RiMenu3Line } from "react-icons/ri";
const navItems = [
  { id: 1, name: "Home", slug: "/" },
  { id: 2, name: "About", slug: "/about" },
  { id: 3, name: "Blogs", slug: "/blogs" },
  { id: 4, name: "Explore", slug: "/explore" },
  { id: 5, name: "Contact", slug: "/contact" }, 
];

const MobNavbar = () => {
  const [isOpen, setIsOpen] = useState(false);

  return (
<header className="text-primary body-font bg-white bg-opacity-25 backdrop-blur-md flex flex-col md:hidden w-full fixed top-0 left-0 z-10"
>
      <div className="container mx-auto flex justify-between items-center p-5">
<div>
  
    <Image 
      src="/images/logo-01.png" 
      alt="Logo" 
      width={180}  
      height={180}  
    />

</div>



        <button
          className="text-secondary focus:outline-none"
          onClick={() => setIsOpen(!isOpen)}
        >
          {/* <svg
            className="w-6 h-6"
            fill="none"
            stroke="currentColor"
            viewBox="0 0 24 24"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth="2"
              d="M4 6h16M4 12h16M4 18h16"
            ></path>
          </svg> */}
          <RiMenu3Line className="w-7 h-7" />
        </button>
      </div>

      <nav
        className={`${
          isOpen ? "flex" : "hidden"
        } flex-col items-center gap-2 text-base justify-center absolute top-16 right-0 bg-black/95 backdrop-blur-md rounded-md p-4 w-48`}
      >
        {navItems.map((item) => (
          <NavLink slug={item.slug} key={item.id} name={item.name} />
        ))}
      </nav>
    </header>
  );
};

export default MobNavbar;
