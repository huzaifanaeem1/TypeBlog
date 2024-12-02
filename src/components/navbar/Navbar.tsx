import Link from "next/link";
import React from "react";
import NavLink from "./Navlink";
import Button from "../Button";
import Image from "next/image";
const navItems = [
  {
    id: 1,
    name: "Home",
    slug: "/",
  },
  {
    id: 2,
    name: "About",
    slug: "/about",
  },
  {
    id: 3,
    name: "Blogs",
    slug: "/blogs",
  },
  {
    id: 4,
    name: "Explore",
    slug: "/",
  },
  {
    id: 5,
    name: "Contact",
    slug: "/contact",
  },
];
const Navbar = () => {
return (
  <header className="text-white body-font bg-primary bg-opacity-30 backdrop-blur-md hidden md:flex fixed w-full top-0 left-0 z-10"
>
    <div className="container mx-auto flex flex-wrap p-5 items-center">
    <div>
    <Image 
      src="/images/logo-01.png" 
      alt="Logo" 
      width={200}  
      height={200}  
    /> 

</div>

      <nav className="md:ml-auto flex items-center gap-2 lg:gap-8 mt-5 md:mt-0 text-base justify-center">
        {navItems.map((item) => (
          <NavLink slug={item.slug} key={item.id} name={item.name} />
        ))}
      </nav>

      <a
        className="ml-4"
        href="/"
      >
        <Button
          type="button"
          className="py-[2px] ml-8 bg-transparent hover:bg-secondary/85 border-2 border-primary shadow-md"
        >
          Subscribe
        </Button>
      </a>
    </div>
  </header>
);
};

export default Navbar;