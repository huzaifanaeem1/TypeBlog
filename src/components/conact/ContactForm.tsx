"use client";
import { useState } from "react";
import React from "react";
import emailjs from "@emailjs/browser";

const ContactForm = () => {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    message: "",
  });

  const [status, setStatus] = useState("");

  const handleChange = (e: { target: { name: any; value: any; }; }) => {
    const { name, value } = e.target;
    setFormData({ ...formData, [name]: value });
  };

  const handleSubmit = (e: { preventDefault: () => void; }) => {
    e.preventDefault();

    emailjs
      .send(
        "service_lpahwai", // Service ID
        "template_8zpg9zs", // Template ID
        formData,
        "yssSSfDlseNl_T-PO" // Public Key
      )
      .then(
        (response) => {
          console.log("SUCCESS!", response.status, response.text);
          setStatus("Message sent successfully!");
          setFormData({ name: "", email: "", message: "" }); // Reset form
        },
        (err) => {
          console.error("FAILED...", err);
          setStatus("Failed to send the message. Please try again.");
        }
      );
  };

  return (
    <div className="lg:w-1/3 md:w-1/2 flex flex-col md:ml-auto w-full md:py-8 mt-8 md:mt-0">
      <h2 className="text-secondary text-lg mb-1 font-medium title-font">
        Send Us a Message
      </h2>
      <p className="leading-relaxed mb-5">
        Please fill this form if you have any queries or a message for us.
      </p>
      <form onSubmit={handleSubmit}>
        <div className="relative mb-4">
          <label htmlFor="name" className="leading-7 text-sm text-white">
            Name
          </label>
          <input
            type="text"
            id="name"
            name="name"
            value={formData.name}
            onChange={handleChange}
            required
            className="w-full bg-gray-200 rounded border border-secondary focus:border-primary focus:ring-2 focus:ring-secondary text-base outline-none text-black py-1 px-3 leading-8 transition-colors duration-200 ease-in-out"
          />
        </div>
        <div className="relative mb-4">
          <label htmlFor="email" className="leading-7 text-sm text-white">
            Email
          </label>
          <input
            type="email"
            id="email"
            name="email"
            value={formData.email}
            onChange={handleChange}
            required
            className="w-full bg-gray-200 rounded border border-secondary focus:border-primary focus:ring-2 focus:ring-secondary text-base outline-none text-black py-1 px-3 leading-8 transition-colors duration-200 ease-in-out"
          />
        </div>
        <div className="relative mb-4">
          <label htmlFor="message" className="leading-7 text-sm text-white">
            Message
          </label>
          <textarea
            id="message"
            name="message"
            value={formData.message}
            onChange={handleChange}
            required
            className="w-full bg-gray-200 rounded border border-secondary focus:border-primary focus:ring-2 focus:ring-secondary h-32 text-base outline-none text-black py-1 px-3 resize-none leading-6 transition-colors duration-200 ease-in-out"
          ></textarea>
        </div>
        <button
          type="submit"
          className="text-black font-medium bg-secondary border-0 py-2 px-6 focus:outline-none hover:bg-primary rounded text-lg"
        >
          Send Message
        </button>
      </form>
      {status && <p className="mt-3 text-xs text-white">{status}</p>}
      <p className="text-xs text-white text-opacity-90 mt-3">
        Please check our privacy policy for any issues.
      </p>
    </div>
  );
};

export default ContactForm;
