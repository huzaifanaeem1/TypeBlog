import React from "react";
import Image from "next/image"; 
import { AiFillInstagram } from "react-icons/ai";
import { FaFacebook, FaLinkedinIn } from "react-icons/fa";
import { FaXTwitter } from "react-icons/fa6";
const Footer = () => {
  return (
    <footer className="bg-white bg-opacity-25 backdrop-blur-md text-white body-font w-full ">
      <div className="container px-4 py-6 mx-auto flex items-center sm:flex-row flex-col">
        <a className="flex title-font font-medium items-center md:justify-start justify-center ">
        <Image 
      src="/images/logo-01.png" 
      alt="Logo" 
      width={200}  
      height={200}  
    /> 
        </a>
        
     <p className="text-sm text-white pl-5 sm:ml-2 sm:pl-2 sm:border-l-2 sm:border-white sm:py-2 sm:mt-0 mt-4">
      <span className="pl-5"> © 2024 TypeBlog</span>
</p>

   

        <span className="inline-flex sm:ml-auto sm:mt-0 mt-4 justify-center sm:justify-start">
            <a href="https://www.facebook.com/share/91NKfwYSFLSKCXBX/?mibextid=qi2Omg"
                target="_blank"
                rel="noopener noreferrer">
              <FaFacebook  className="w-8 h-8 hover:text-secondary hover:scale-110 transform transition duration-400" />
            </a>
            <a className="ml-4"
            href="https://x.com/Huzai_fa123?t=DnFYfJoMreRFqN08hnQP6A&s=09"
            target="_blank"
            rel="noopener noreferrer">
              <FaXTwitter className="w-8 h-8 hover:text-secondary hover:scale-110 transform transition duration-400" />
            </a>
            <a className="ml-4"
            href="https://www.instagram.com/__.zefa.__?igsh=a2J4a3dvcWF2Njg5"
            target="_blank"
            rel="noopener noreferrer">
              <AiFillInstagram className="w-8 h-8 hover:text-secondary  hover:scale-110 transform transition duration-400" />
            </a>
            <a className="ml-4"
            href="https://www.linkedin.com/in/huzaifa-naeem-8949692b5?"
            target="_blank"
            rel="noopener noreferrer">
              <FaLinkedinIn  className="w-8 h-8 hover:text-secondary  hover:scale-110 transform transition duration-400" />
            </a>
          </span>
      </div>
    </footer>
  );
};

export default Footer;