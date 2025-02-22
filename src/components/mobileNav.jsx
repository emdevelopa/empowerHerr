import { Facebook, Instagram, Twitter, Youtube } from 'lucide-react';
import React from 'react';


const MobileNav = ({menuOpen}) => {
    return (
      <>
        {menuOpen && (
          <div className="absolute z-20 top-32 left-0 w-full bg-black text-white p-4 flex flex-col items-center space-y-4 md:hidden">
            <a href="/" className="hover:text-green-400">
              Home
            </a>
            <a href="/about" className="hover:text-green-400">
              About
            </a>
            <a href="/impact" className="hover:text-green-400">
              Impact
            </a>
            <a href="/blog" className="hover:text-green-400">
              Blog
            </a>
            <a href="/contact" className="hover:text-green-400">
              Contact
            </a>
            <div className=" md:hidden bg-white text-black px-4 py-2 rounded-lg shadow-md ">
              <div className="flex space-x-4 mt- md:mt-0">
                <a href="#" className="text-[#2E3A24] hover:text-[green]">
                  <Facebook size={18} />
                </a>
                <a href="#" className="text-[#2E3A24] hover:text-[green]">
                  <Twitter size={18} />
                </a>
                <a href="#" className="text-[#2E3A24] hover:text-[green]">
                  <Instagram size={18} />
                </a>
                <a href="#" className="text-[#2E3A24] hover:text-[green]">
                  <Youtube size={18} />
                </a>
              </div>
            </div>
          </div>
        )}
      </>
    );
};

export default MobileNav;