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
          backgroundImage: 'url("hero.jpg")',
          backgroundSize: "cover", // Ensures the image covers the entire element
          backgroundPosition: "center", // Centers the image
          backgroundRepeat: "no-repeat", // Prevents the image from repeating
        }}
      ></div>

      {/* Overlay */}
      <div className="relative z-10 flex flex-col h-full">
        {/* Hero Text */}
        <div className="flex flex-col items-center justify-center flex-grow text-center px-6 text-white">
          <h1 className="text-4xl md:text-6xl font-bold leading-tight">
            Empowering Lives, Creating Change
          </h1>
          <p className="text-lg mt-4 max-w-2xl text-green-200">
            At{" "}
            <span className="font-bold text-white">
              Stephen & Dora-Mira Foundation
            </span>
            , we are dedicated to empowering vulnerable women, children, and
            marginalized communities through education, agriculture, vocational
            training, and community entrepreneurship. Our goal is to equip them
            with the tools to thrive, succeed, and inspire future generations.
          </p>
        </div>
      </div>
    </div>
  );
}
