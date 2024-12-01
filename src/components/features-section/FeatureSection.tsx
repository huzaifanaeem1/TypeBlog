import React from "react";
import Image from "next/image"
import Button from "../Button";

const FeatureSection = () => {
    return (
        <section className="text-gray-300 body-font bg-black/90">
            <div className="container px-5 py-24 mx-auto ">
                <div className="items-center text-center pt-10 pb-20">
                <h1 className="title-font text-white text-6xl sm:text-7xl font-bold pb-8">
                    Featured Posts</h1>
                </div>

                <div className="flex flex-wrap -m-4">
                    <div className="p-4 md:w-1/3">
                        <div className="h-full border-2 border-secondary rounded-lg overflow-hidden">
                            <Image
                                className="lg:h-48 md:h-36 w-full object-cover object-center"
                                src="/images/bg.jpg"
                                alt="blog"
                                width={721}
                                height={401}
                            />
                            <div className="p-6">
                                <h1 className="title-font text-lg font-medium text-secondary mb-3">The Catalyzer</h1>
                                <p className="leading-relaxed mb-3">Photo booth fam kinfolk cold-pressed sriracha leggings jianbing microdosing tousled waistcoat.</p>
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
                        <div className="h-full border-2 border-secondary rounded-lg overflow-hidden">
                            <Image
                                className="lg:h-48 md:h-36 w-full object-cover object-center"
                                src="/images/bg.jpg"
                                alt="blog"
                                width={721}   
                                height={401}
                            />
                            <div className="p-6">
                                <h1 className="title-font text-lg font-medium text-secondary mb-3">The 400 Blows</h1>
                                <p className="leading-relaxed mb-3">Photo booth fam kinfolk cold-pressed sriracha leggings jianbing microdosing tousled waistcoat.</p>
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
                        <div className="h-full border-2 border-secondary rounded-lg overflow-hidden">
                            <Image
                                className="lg:h-48 md:h-36 w-full object-cover object-center"
                                src="/images/bg.jpg"
                                alt="blog"
                                width={721}   
                                height={401}  
                            />
                            <div className="p-6">
                                <h1 className="title-font text-lg font-medium text-secondary mb-3">Shooting Stars</h1>
                                <p className="leading-relaxed mb-3">Photo booth fam kinfolk cold-pressed sriracha leggings jianbing microdosing tousled waistcoat.</p>
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
  <a href="#" className="text-white bg-secondary hover:bg-primary px-8 py-3 rounded-full"
  >
    See More
  </a>
</div>
            </div>
        </section>
    )
}
export default FeatureSection;