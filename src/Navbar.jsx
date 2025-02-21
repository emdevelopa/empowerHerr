import { Menu, X } from "lucide-react";

export default function Navbar({setMenuOpen, menuOpen}) {
  return (
    <nav className="flex justify-between items-center px-6 md:px-12 py-4 bg-black text-white">
      <div className="text-2xl font-bold flex items-center">
        <span className="text-white">🌸 Women Rise</span>
      </div>
      {/* Desktop Nav */}
      <ul className="hidden md:flex space-x-6">
        <li className="hover:text-pink-400 cursor-pointer">
          <a href="/">Home</a>
        </li>
        <li className="hover:text-pink-400 cursor-pointer">
          <a href="">About</a>
        </li>
        <li className="hover:text-pink-400 cursor-pointer">
          <a href="#impact">Impact</a>
        </li>
        <li className="hover:text-pink-400 cursor-pointer">
          <a href="/blog">Blog</a>
        </li>
        <li className="hover:text-pink-400 cursor-pointer">Contact</li>
      </ul>
      {/* Mobile Menu Button */}
      <button className="md:hidden" onClick={() => setMenuOpen(!menuOpen)}>
        {menuOpen ? <X size={30} /> : <Menu size={30} />}
      </button>
      {/* Donate Button */}
      <button className="hidden md:block bg-white text-black px-4 py-2 rounded-lg shadow-md hover:bg-gray-200">
        Donate
      </button>
    </nav>
  );
}
