import React from "react";
import Image from "next/image";
import { FaGithub, FaLinkedin, } from "react-icons/fa";
const About = () => {
  return (
    <><section className="relative bg-cover bg-center h-screen text-white body-font pt-6">
      <div
        className="absolute inset-0 bg-cover bg-center"
        style={{
          backgroundImage: "url('/images/about.avif')",
          opacity: 0.5,
          zIndex: -1,
        }} /> 
      <div className="container mx-auto flex px-5 py-24 md:flex-row flex-col items-center sm:pb-8 mt-28">
        <div className="lg:flex-grow sm:w-1/2 mt-32 lg:mt-28 md:pl-16 flex flex-col sm:items-center sm:text-center mb-16 sm:mb-0 items-center text-center">
          <h1 className="title-font text-4xl sm:text-6xl md:text-7xl font-bold">
            About TypeBlog
          </h1>
          <p className=" text-white font-medium mt-4 leading-relaxed text-base sm:text-lg md:text-xl">
            TypeBlog is your go-to platform for learning and mastering programming, with a focus on TypeScript and web development. We provide easy-to-follow tutorials, tips, and resources to help both beginners and experienced developers enhance their skills. Join us and stay up-to-date with the latest trends in coding!
            <br />
          </p>
        </div>
      </div>
    </section>
      <section className="text-white bg-black/70 body-font">
        <div className="container mx-auto flex px-8 sm:px-20 py-32  md:flex-row flex-col items-center">
          <div className="lg:flex-grow md:w-1/2 lg:pr-24 md:pr-16 flex flex-col md:items-start mb-16 md:mb-0 items-center">
            <h1 className="title-font text-4xl sm:text-5xl md:text-6xl lg:text-7xl mb-2 font-bold ">
              Our <span className="underline text-primary">Mission</span>
            </h1>

            <p className="my-8 leading-relaxed text-xl">
              At <span className="font-semibold text-primary">TypeBlog</span>{" "}
              our mission is to make complex topics in programming, TypeScript, and web development accessible, engaging, and practical for learners of all levels.
              <br /> Whether you're a beginner looking to learn the basics or an experienced developer honing your skills, TypeBlog is here to guide you in your coding journey.

            </p>
          </div>
          <div className="lg:max-w-lg lg:w-full md:w-1/2 w-5/6">
            <Image
              className="object-cover object-center rounded-xl"
              alt="hero"
              src="/images/mission.avif"
              width={600}
              height={600}
            />
          </div>
        </div>
        <div className="w-full border-t border-white "></div>
      </section>
      <section className="text-white bg-black/95 body-font">
        <div className="container mx-auto flex px-5 py-24 md:flex-row flex-col justify-center items-center">
          <div className="lg:max-w-lg lg:w-full md:w-1/2 w-5/6 mb-10 md:mb-0">
            <Image
              className="object-cover object-center rounded"
              alt="hero"
              src="/images/profile-img.png"
              width={720}
              height={600}
            />
          </div>
          <div className="lg:flex-grow md:w-1/2 lg:pl-24 md:pl-16 flex flex-col md:items-start md:text-left items-center text-center justify-center ">
            <h1 className="text-4xl sm:text-5xl md:text-6xl lg:text-7xl font-bold title-font text-center">
              Meet <span className="text-primary underline">the creator</span>
            </h1>
            <p className="text-white text-lg leading-relaxed max-w-[600px] mt-5 ">
              Hi, I’m Huzaifa Naeem, a passionate developer and tech enthusiast currently pursuing my second year in Computer Science at DJ Sindh Govt. Science College. <br />
              I’m also a Graphic Designer with 2 years of experience, and I’m enrolled in the Governor House IT Course (GIAIC), where I’m expanding my skills in Artificial Intelligence. <br />
              So far, I’ve learned TypeScript and Next.js, and I’m constantly exploring new technologies to improve my coding expertise. <br />
              I created TypeBlog to share my knowledge and help fellow learners with coding tutorials, focusing on practical examples and easy-to-understand explanations. <br />
              My goal is to simplify complex programming concepts and make them accessible to everyone, whether you're just starting or looking to expand your skills. <br />

            </p>
            <div className="flex justify-center mt-6">
              <a
                href="https://www.linkedin.com/in/huzaifa-naeem-8949692b5"
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center font-semibold text-white bg-[#0077B5] border-0 py-2 px-6 focus:outline-none hover:bg-white hover:text-cyan-700 rounded text-lg"
              >
                <FaLinkedin className="w-6 h-6 mr-2" />
                Linked
              </a>
              <a
                href="https://github.com/huzaifanaeem1"
                target="_blank"
                rel="noopener noreferrer"
                className="ml-4 inline-flex items-center font-semibold text-black bg-white border-0 py-2 px-6 focus:outline-none hover:bg-black hover:text-white rounded text-lg"
              >
                <FaGithub className="w-6 h-6 mr-2" />
                GitHub
              </a>
            </div>
          </div>
        </div>
      </section>
      <div className="w-full border-t border-white "></div>
      <section className="body-font bg-black/95">
        <div className="container px-5 py-24 mx-auto flex flex-col items-center text-center">
          <div className="w-full mb-12">
            <h1 className="text-4xl sm:text-5xl md:text-6xl lg:text-7xl font-bold title-font mb-6 text-primary">
              Thank You <br /> For Visiting
            </h1>
            <p className="lg:w-1/2 mx-auto leading-relaxed text-lg text-white">
              Your support inspires us to continue creating and sharing valuable
              content. Let’s build something amazing together!
            </p>
          </div>


        </div>
      </section>


    </>



  )
}
export default About;



