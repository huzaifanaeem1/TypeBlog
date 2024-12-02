import React from "react";
import Button from "../Button";



const NewSleter = () => {
  return (
    <section className="text-white body-font bg-black/95">
      <div className="container px-5 py-24 mx-auto ">
        <div className="flex flex-col text-center w-full mb-12">
          <h1 className="sm:text-7xl text-6xl font-medium title-font mb-4 text-white">Subscribe to Our Newsletter</h1>
          <p className=" text-secondary lg:w-2/3 mx-auto leading-relaxed text-base">Stay Updated on the Latest DSA Tutorials and Tips! Input Form</p>
        </div>
        <div className="flex lg:w-2/3 w-full sm:flex-row flex-col mx-auto px-8 sm:space-x-4 sm:space-y-0 space-y-4 sm:px-0 items-end">
          <div className="relative flex-grow w-full">
            <label htmlFor="full-name" className="leading-7 text-sm text-white">Full Name</label>
            <input type="text" id="full-name" name="full-name" className="w-full bg-gray-100/95 rounded border border-primary focus:border-primary focus:bg-transparent focus:ring-2 focus:ring-secondary text-base outline-none text-white py-1 px-3 leading-8 transition-colors duration-200 ease-in-out" />
          </div>
          <div className="relative flex-grow w-full">
            <label htmlFor="email" className="leading-7 text-sm text-white">Email</label>
            <input type="email" id="email" name="email" className="w-full bg-gray-100/95 rounded border border-primary focus:border-primary focus:bg-transparent focus:ring-2 focus:ring-secondary text-base outline-none text-white py-1 px-3 leading-8 transition-colors duration-200 ease-in-out" />
          </div>
        </div>
        <div className="flex justify-center pt-8">
        <div className="relative flex-grow max-w-md w-full">
  <label htmlFor="message" className="leading-7 text-sm text-white">
    Message
  </label>
  <textarea
    id="message"
    name="message"
    className="w-full bg-gray-100/95 rounded border border-primary focus:border-primary focus:bg-transparent focus:ring-2 focus:ring-secondary text-base outline-none text-white py-3 px-3 leading-8 transition-colors duration-200 ease-in-out"
  ></textarea>
</div>
</div>

       
        <div className="flex justify-center pt-16 pb-24">
        <Button
          type="button"
          className="py-[4px] px-[16px] ml-8 bg-transparent hover:bg-secondary/85 border-2 border-secondary shadow-md"
        >
          Submit
        </Button>
        </div>

      </div>
    </section>
  )
}
export default NewSleter;