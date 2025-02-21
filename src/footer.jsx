import { Facebook, Twitter, Instagram, Youtube } from "lucide-react";

export default function Footer() {
  return (
    <footer className="bg-pink-50 py-12 border-t border-[#C4C4C4]">
      <div className="container mx-auto px-4 md:px-16">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
          {/* Charity Logo & Description */}
          <div>
            <div className="text-2xl font-bold flex items-center">
              <span className="text-black">🌸EmpowerHer</span>
              {/* <img src={logo} alt="swsw" /> */}
            </div>
            <p className="text-[#5F6D4E] mt-3">
              The power of giving: Support a cause and make a difference through
              charity.
            </p>
          </div>

          {/* About Us */}
          <div>
            <h3 className="text-lg font-semibold text-[#2E3A24]">About Us</h3>
            <ul className="mt-3 space-y-2 text-[#5F6D4E]">
              <li>
                <a href="#">Our History</a>
              </li>
              <li>
                <a href="#">What We Believe</a>
              </li>
              <li>
                <a href="#">Our Programs</a>
              </li>
              <li>
                <a href="#">Partners</a>
              </li>
            </ul>
          </div>

          {/* Ways to Give */}
          <div>
            <h3 className="text-lg font-semibold text-[#2E3A24]">
              Ways To Give
            </h3>
            <ul className="mt-3 space-y-2 text-[#5F6D4E]">
              <li>
                <a href="#">Fundraise</a>
              </li>
              <li>
                <a href="#">Planned Giving</a>
              </li>
              <li>
                <a href="#">Brand Partnership</a>
              </li>
              <li>
                <a href="#">Legacy Giving</a>
              </li>
            </ul>
          </div>

          {/* Contact Info */}
          <div>
            <h3 className="text-lg font-semibold text-[#2E3A24]">
              Contact Info
            </h3>
            <p className="mt-3 text-[#5F6D4E]">
              1234 Thornridge Cir. Syracuse, <br />
              Connecticut 56789 <br />
              (406) 555-0121 <br />
              <a href="mailto:mail@example.com" className="text-[#2E3A24]">
                mail@example.com
              </a>
            </p>
          </div>
        </div>

        {/* Bottom Section */}
        <div className="mt-8 flex flex-col md:flex-row items-center justify-between text-[#5F6D4E] text-sm">
          <p>© 2025 Non-Profit Organization. All rights reserved.</p>

          {/* Social Icons */}
          <div className="flex space-x-4 mt-4 md:mt-0">
            <a href="#" className="text-[#2E3A24] hover:text-black">
              <Facebook size={18} />
            </a>
            <a href="#" className="text-[#2E3A24] hover:text-black">
              <Twitter size={18} />
            </a>
            <a href="#" className="text-[#2E3A24] hover:text-black">
              <Instagram size={18} />
            </a>
            <a href="#" className="text-[#2E3A24] hover:text-black">
              <Youtube size={18} />
            </a>
          </div>
        </div>
      </div>
    </footer>
  );
}
