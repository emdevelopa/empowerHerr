import { useState } from "react";
import { Menu, X } from "lucide-react";
import Navbar from "./Navbar";
import MobileNav from "./mobileNav";

export default function HeroSection({ menuOpen }) {
  return (
    <div className="relative w-full h-screen bg-black">
      {/* Background Image */}
      <div
        className="absolute inset-0 bg-cover bg-center opacity-20"
        style={{
          backgroundImage:
            'url("https://plus.unsplash.com/premium_photo-1661488569775-2f16dbefca71?fm=jpg&q=60&w=3000&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MXx8ZmVtYWxlJTIwZW1wb3dlcm1lbnR8ZW58MHx8MHx8fDA%3D")',
        }}
      ></div>

      {/* Overlay */}
      <div className="relative z-10 flex flex-col h-full">
        {/* Hero Text */}
        <div className="flex flex-col items-center justify-center flex-grow text-center px-6 text-white">
          <h1 className="text-4xl md:text-6xl font-bold leading-tight">
            Advocating for Women & Children’s Rights
          </h1>
          <p className="text-lg mt-4 max-w-2xl text-green-200">
            At{" "}
            <span className="font-bold text-white">
              Stephen & Dora-Mira Foundation
            </span>
            , we are committed to empowering vulnerable women and children by
            promoting access to healthcare, education, and economic
            opportunities.
          </p>
          {/* <p className="text-md mt-2 max-w-2xl text-pink-200">
            Join us in fostering a future where every child and woman has a
            voice, opportunities, and the support they deserve.
          </p> */}
          {/* <button className="bg-pink-500 text-white px-6 py-3 mt-6 rounded-lg text-lg hover:bg-pink-600 transition">
            Get Involved
          </button> */}
        </div>
      </div>
    </div>
  );
}
