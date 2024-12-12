import React from "react";
import { BiLogoGmail } from "react-icons/bi";
import { FaFacebook, FaGithub, FaInstagramSquare, FaLinkedin, FaPhoneAlt } from "react-icons/fa";
import { FaLocationDot } from "react-icons/fa6";
import ContactForm from "./ContactForm";

const Contact = () => {
    return (
        <>
            <section className="relative bg-cover bg-center h-screen text-white body-font pt-12">
            <div
    className="absolute inset-0 bg-cover bg-center"
    style={{
      backgroundImage: "url('/images/contact.jpg')",
      opacity: 0.4,
      zIndex: -1,
    }}
  />
                <div className="container mx-auto flex px-5 py-24 md:flex-row flex-col items-center sm:pb-8">
                    <div className="lg:flex-grow sm:w-1/2  mt-40 lg:mt-28 md:pl-16 flex flex-col sm:items-center sm:text-center mb-16 sm:mb-0 items-center text-center">
                        <h1 className="title-font text-4xl sm:text-6xl md:text-7xl font-bold">
                            Get in Touch
                            <br className="hidden lg:inline-block" />
                            <span className="text-secondary"> with Us</span>
                        </h1>
                        <p className="font-normal mt-8 leading-relaxed text-base sm:text-lg md:text-xl">
                        We’d love to hear from you! Whether you have questions about our work, suggestions to improve, or simply want to share your thoughts, don’t hesitate to reach out. Your feedback and ideas are invaluable to us, and we’re always here to assist you in the best possible way. Let’s connect, collaborate, and make great things happen together. Your journey matters, and we’re excited to be a part of it!
                        </p>
                    </div>
                </div>
            </section>
            <section className="text-white bg-black/85 body-font relative">
                <div className="container px-5 py-12 mx-auto flex sm:flex-nowrap flex-wrap">

                    <div className="lg:w-2/3 md:w-1/2 bg-black rounded-lg overflow-hidden sm:mr-10 p-10 flex items-end justify-start relative">
                        <iframe
                            width="100%"
                            height="100%"
                            title="map"
                            className="absolute inset-0"
                            scrolling="no"
                            src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d14473.428962714777!2d67.1191173841228!3d24.91989720631561!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3eb338e531744437%3A0xc146fcc5aa4768fd!2sBlock%2014%20Gulistan-e-Johar%2C%20Karachi%2C%20Karachi%20City%2C%20Sindh%2C%20Pakistan!5e0!3m2!1sen!2s!4v1731156674374!5m2!1sen!2s"
                        ></iframe>
                        <div className="bg-black relative flex flex-wrap py-6 rounded shadow-md">
                            <div className="lg:w-1/2 px-6 mt-4 lg:mt-0">
                                <h2 className="title-font font-semibold text-primary tracking-widest text-xs"><BiLogoGmail className="w-8 h-8" /></h2>
                                <a
                                    href="mailto:huzaifaneem1407@gmail.com"
                                    className="text-white leading-relaxed hover:text-secondary transition-all duration-200 transform hover:scale-105"
                                >
                                    huzaifaneem1407@gmail.com
                                </a>

                                <h2 className="title-font font-semibold text-primary tracking-widest text-xs mt-4"><FaPhoneAlt className="w-8 h-8" /></h2>
                                <a
                                    href="tel:+923123629391"
                                    className="text-white leading-relaxed hover:text-secondary transition-all duration-200 transform hover:scale-105"
                                >
                                    +92 312 3629 391
                                </a>

                                <h2 className="title-font font-semibold text-primary tracking-widest text-xs mt-4">SOCIAL MEDIA:</h2>
                                <div className="flex space-x-4 mt-2">
                                    <a
                                        href="https://www.linkedin.com/in/huzaifa-naeem-8949692b5"
                                        className="text-white hover:text-secondary transition-all duration-200 transform hover:scale-105"
                                    >
                                        <FaLinkedin className="w-8 h-8" />
                                    </a>
                                    <a
                                        href="https://github.com/huzaifanaeem1"
                                        className="text-white hover:text-secondary transition-all duration-200 transform hover:scale-105"
                                    >
                                        <FaGithub className="w-8 h-8" />
                                    </a>
                                    <a
                                        href="https://www.facebook.com/share/14b1ZUyT4P/"
                                        className="text-white hover:text-secondary transition-all duration-200 transform hover:scale-105"
                                    >
                                        <FaFacebook className="w-8 h-8" />
                                    </a>
                                    <a
                                        href="https://www.instagram.com/__.zefa.__?igsh=a2J4a3dvcWF2Njg5"
                                        className="text-white hover:text-secondary transition-all duration-200 transform hover:scale-105"
                                    >
                                        <FaInstagramSquare className="w-8 h-8" />
                                    </a>
                                </div>
                            </div>
                            <div className="lg:w-1/2 px-6 mt-4 lg:mt-0">
                                <h2 className="title-font font-semibold text-primary tracking-widest text-xs"><FaLocationDot className="w-8 h-8" /></h2>
                                <p className="mt-1">Gulistan-e-Johar Block 15 Karachi</p>
                            </div>
                        </div>
                    </div>
                    
                    <ContactForm/>

                </div>
            </section>
        </>
    );
};

export default Contact;
