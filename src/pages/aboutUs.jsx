import React from "react";
// import Navbar from "./Navbar";
import AboutUsSection from "../components/about";

const About = () => {
  return (
    <>
      {/* <Navbar /> */}
      <div>
        <div className="relative w-full h-[70vh]">
          {/* Background Image */}
          <img
            src="./aboutUs.jpg"
            alt="About Us Header"
            className="w-full h-full object-cover"
          />
          {/* Overlay */}
          <div className="absolute inset-0 bg-[#000000c3] bg-opacity-50 flex flex-col justify-center items-start px-10 text-white ">
            <h1 className="text-4xl font-bold">About Us</h1>
            <p className="text-lg mt-2">
              Learn more about our mission, vision, and the team dedicated to
              making a difference.
            </p>
            <p className="mt-3 text-sm">
              <span className="text-gray-300">HOME</span> /{" "}
              <span className="text-yellow-500">ABOUT US</span>
            </p>
          </div>
        </div>
        <AboutUsSection />
      </div>
    </>
  );
};

export default About;
