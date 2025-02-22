import React from "react";
// import Navbar from "./Navbar";
import AboutUsSection from "../components/about";

const About = () => {
  return (
    <>
      {/* <Navbar /> */}
      <div>
        <div className="relative w-full h-[60vh]">
          {/* Background Image */}
          <img
            src="https://images.unsplash.com/photo-1583971663176-dd7180de1b76?fm=jpg&q=60&w=3000&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8Mnx8ZmVtYWxlJTIwZW1wb3dlcm1lbnR8ZW58MHx8MHx8fDA%3D"
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
