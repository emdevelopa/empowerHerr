import React from 'react';


const MobileNav = ({menuOpen}) => {
    return (
      <>
        {menuOpen && (
          <div className="absolute z-20 top-16 left-0 w-full bg-black text-white p-4 flex flex-col items-center space-y-4 md:hidden">
            <a href="/" className="hover:text-pink-400">
              Home
            </a>
            <a href="#about" className="hover:text-pink-400">
              About
            </a>
            <a href="#impact" className="hover:text-pink-400">
              Impact
            </a>
            <a href="/blog" className="hover:text-pink-400">
              Blog
            </a>
            <a href="/contact" className="hover:text-pink-400">
              Contact
            </a>
            <button className="bg-white text-black px-4 py-2 rounded-lg shadow-md hover:bg-gray-200">
              Donate
            </button>
          </div>
        )}
      </>
    );
};

export default MobileNav;