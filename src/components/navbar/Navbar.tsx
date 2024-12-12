
"use client";

import React, { useState } from "react";
import Link from "next/link";
import Image from "next/image";
import Button from "../Button";
import { FaAngleRight } from "react-icons/fa6";
import navItems from "./navItems";
import categories from "@/data/categoriesData";







const Navbar = () => {
  const [hoveredDropdown, setHoveredDropdown] = useState<number | null>(null);

  return (
    <header className="text-white body-font bg-primary bg-opacity-30 backdrop-blur-md hidden md:flex fixed w-full top-0 left-0 z-10">
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
          {navItems.map((item) =>
            item.hasDropdown ? (
              <div
                key={item.id}
                className="relative"
                onMouseEnter={() => setHoveredDropdown(item.id)}
                onMouseLeave={() => setHoveredDropdown(null)}
              >
                <button className="text-lg font-medium hover:text-primary hover:underline duration-300 flex items-center">
                  {item.name}
                  <FaAngleRight
                    className={`ml-2 text-xl transform duration-300 ${hoveredDropdown === item.id ? "rotate-90" : "rotate-0"
                      }`}
                  />
                </button>

                {hoveredDropdown === item.id && (
                  <div
                    className="absolute top-7 -left-7 bg-black text-gray-300 shadow-md rounded-lg p-4 space-y-2 w-56 max-w-xs"
                    onMouseEnter={() => setHoveredDropdown(item.id)}
                    onMouseLeave={() => setHoveredDropdown(null)}
                  >
                    {categories.map((category) => (
                      <Link
                        key={category.id}
                        href={`/categories/${category.slug}`}
                      >
                        <button className="block text-left hover:text-primary w-full text-lg py-2 px-2 rounded-md hover:bg-black/80">
                          {category.name}
                        </button>
                      </Link>
                    ))}
                  </div>
                )}
              </div>
            ) : (
              <NavLink key={item.id} slug={item.slug} children={item.name} />
            )
          )}
        </nav>

        <Link className="ml-4" href="/">
          <Button
            type="button"
            className="py-[2px] ml-8 bg-transparent hover:bg-secondary/85 border-2 border-primary shadow-md"
          >
            Subscribe
          </Button>
        </Link>
      </div>
    </header>
  );
};

export default Navbar;