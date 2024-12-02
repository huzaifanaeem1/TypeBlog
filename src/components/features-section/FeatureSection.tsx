import React from "react";
import Image from "next/image"

import SectionHeader from "../SectionHeader";

const FeatureSection = () => {
    return (
        <section className="text-gray-300 body-font bg-black/90">
            <div className="container px-5 py-24 mx-auto ">
                <div className="items-center text-center pt-10 pb-20">
                <SectionHeader
            heading="Featured Posts"
            tagline="Your Go-To Guide for Solving Complex Problems with Simple Solutions!"
          />
                </div>

                <div className="flex flex-wrap -m-4">
                    <div className="p-4 md:w-1/3">
                        <div className="h-full border-2 border-secondary rounded-lg overflow-hidden transition-transform duration-300 hover:scale-105">
                            <Image
                                className="lg:h-48 md:h-36 w-full object-cover object-center"
                                src="/images/bg.jpg"
                                alt="blog"
                                width={721}
                                height={401}
                            />
                            <div className="p-6">
                            <h2 className="tracking-widest text-xs title-font font-medium text-white mb-1">Introduction and Basics:</h2>
                                <h1 className="title-font text-lg font-medium text-secondary mb-3">Introduction to TypeScript</h1>
                                <p className="leading-relaxed mb-3">Overview of TypeScript, its advantages over JavaScript, and why it is essential for building scalable and maintainable applications.</p>
                                <div className="flex items-center flex-wrap ">
                                    <a className="text-primary inline-flex items-center md:mb-2 lg:mb-0">Learn More
                                        <button>

                                        </button>
                                    </a>

                                </div>
                            </div>
                        </div>
                    </div>
                    <div className="p-4 md:w-1/3">
                        <div className="h-full border-2 border-secondary rounded-lg overflow-hidden transition-transform duration-300 hover:scale-105">
                            <Image
                                className="lg:h-48 md:h-36 w-full object-cover object-center"
                                src="/images/bg.jpg"
                                alt="blog"
                                width={721}   
                                height={401}
                            />
                            <div className="p-6">
                            <h2 className="tracking-widest text-xs title-font font-medium text-white mb-1">Object-Oriented Programming:</h2>
                                <h1 className="title-font text-lg font-medium text-secondary mb-3">Classes and Objects</h1>
                                <p className="leading-relaxed mb-3">Learn how to define and work with classes and objects in TypeScript, leveraging object-oriented principles like inheritance, encapsulation, and polymorphism.</p>
                                <div className="flex items-center flex-wrap">
                                    <a className="text-primary inline-flex items-center md:mb-2 lg:mb-0">Learn More
                                        <button>

                                        </button>
                                    </a>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div className="p-4 md:w-1/3">
                        <div className="h-full border-2 border-secondary rounded-lg overflow-hidden transition-transform duration-300 hover:scale-105">
                            <Image
                                className="lg:h-48 md:h-36 w-full object-cover object-center"
                                src="/images/bg.jpg"
                                alt="blog"
                                width={721}   
                                height={401}  
                            />
                            <div className="p-6">
                            <h2 className="tracking-widest text-xs title-font font-medium text-white mb-1">Advanced Type Features:</h2>
                                <h1 className="title-font text-lg font-medium text-secondary mb-3">Enums</h1>
                                <p className="leading-relaxed mb-3">Explore TypeScript enums, a way to define a set of named constants that improves code clarity and avoids the use of magic numbers or strings.</p>
                                <div className="flex items-center flex-wrap ">
                                    <a className="text-primary inline-flex items-center md:mb-2 lg:mb-0">Learn More
                                        <button>

                                        </button>
                                    </a>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>

                <div className="flex justify-center items-center mt-8 pt-16">
  <a href="#" className="text-white bg-transparent hover:bg-secondary border-2 border-secondary shadow-lg px-8 py-3 rounded-full"
  >
    <button>
    See More
    </button>
    
  </a>
</div>
            </div>
        </section>
    )
}
export default FeatureSection;