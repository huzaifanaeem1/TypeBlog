import React from "react";
import Button from "../Button";

const HeroSection = () => {
    return(
<section className="relative bg-cover bg-center h-screen text-white body-font pt-6"
>
  <div
    className="absolute inset-0 bg-cover bg-center"
    style={{
      backgroundImage: "url('/images/bg2.jpg')",
      opacity: 0.6,
      zIndex: -1,
    }}
  />
 <div className="container mx-auto flex px-5 py-24 md:flex-row flex-col items-center sm:pb-8">
  <div className="lg:flex-grow sm:w-1/2 mt-28 pt-28 sm:pt-20 lg:mt-28 md:pl-16 flex flex-col sm:items-center sm:text-center mb-14  sm:mb-0 items-center text-center">
    <h1 className="title-font text-6xl sm:text-6xl md:text-7xl font-bold">
      Level Up
      <br className="hidden lg:inline-block" />
      <span className="text-secondary"> Your Development</span>
    </h1>
    <p className="font-medium mt-4 leading-relaxed text-base sm:text-lg md:text-xl">
      Explore innovative techniques and insights that will enhance your skills
      <br />
      and open new possibilities in software development.
    </p>
    <a
      className="ml-4"
      href="/blogs"
  
    >
      <Button type={"button"} className="mt-4 bg-transparent border-2 border-secondary hover:bg-secondary shadow-lg">
        Read Now!
      </Button>
    </a>
  </div>
</div>
</section>

  )
}
export default HeroSection;

