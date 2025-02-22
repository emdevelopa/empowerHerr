import { Facebook, Instagram, Menu, Twitter, X, Youtube } from "lucide-react";
import MobileNav from "./mobileNav";
// import logo from "./assets/logo.svg";

export default function Navbar({ setMenuOpen, menuOpen }) {
  return (
    <nav className="flex justify-between items-center px-6 md:px-12 py-4 bg-black text-white">
      <div className="text-2xl font-bold flex items-center">
        {/* <span className="text-white">🌸EmpowerHer</span> */}
        <img src="logo.jpg" alt="swsw" className="w-[4em] rounded-2xl" />
      </div>
      {/* Desktop Nav */}
      <ul className="hidden md:flex space-x-6">
        <li className="hover:text-green-400 cursor-pointer">
          <a href="/">Home</a>
        </li>
        <li className="hover:text-green-400 cursor-pointer">
          <a href="/about">About</a>
        </li>
        <li className="hover:text-green-400 cursor-pointer">
          <a href="/impact">Impact</a>
        </li>
        <li className="hover:text-green-400 cursor-pointer">
          <a href="/blog">Blog</a>
        </li>
        <li className="hover:text-green-400 cursor-pointer">
          <a href="/contact">Contact</a>
        </li>
      </ul>
      {/* Mobile Menu Button */}
      <button className="md:hidden" onClick={() => setMenuOpen(!menuOpen)}>
        {menuOpen ? <X size={30} /> : <Menu size={30} />}
      </button>
      {/* Donate Button */}
      <div className="hidden md:block bg-white text-black px-4 py-2 rounded-lg shadow-md ">
        <div className="flex space-x-4 mt-4 md:mt-0">
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
      <MobileNav menuOpen={menuOpen} />
    </nav>
  );
}
