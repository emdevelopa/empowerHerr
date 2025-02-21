import React from "react";
import Navbar from "./Navbar";

const Contact = () => {
    return (
      <>
        {/* <Navbar /> */}
        <div className="relative w-full h-[60vh]">
          {/* Background Image */}
          <img
            src="https://images.unsplash.com/photo-1583971663176-dd7180de1b76?fm=jpg&q=60&w=3000&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8Mnx8ZmVtYWxlJTIwZW1wb3dlcm1lbnR8ZW58MHx8MHx8fDA%3D"
            alt="Blog Header"
            className="w-full h-full object-cover"
          />
          {/* Overlay */}
          <div className="absolute inset-0 bg-[#000000c3] bg-opacity-50 flex flex-col justify-center items-start px-10 text-white ">
            <h1 className="text-4xl font-bold">Contact</h1>
            <p className="text-lg mt-2">
              Connect with us for more information about our Non-profit
              Organisation and how you can contribute to our worthy causes.
            </p>
            <p className="mt-3 text-sm">
              <span className="text-gray-300">HOME</span> /{" "}
              <span className="text-yellow-500">BLOG</span>
            </p>
          </div>
          <div className="bg-[#f8faef] p-10 md:p-20 flex flex-col md:flex-row justify-between">
            {/* Left Section */}
            <div className="md:w-1/2 mb-10 md:mb-0">
              <h3 className="text-lg uppercase text-gray-600">Get in touch</h3>
              <h1 className="text-4xl font-bold text-green-900 mt-2">
                How can we help you?
              </h1>
              <p className="text-gray-700 mt-4">
                Our Non-profit Organisation is dedicated to helping those in
                need. Contact us to see how we can help you or someone you know.
              </p>

              <div className="mt-6">
                <h2 className="text-xl font-semibold text-green-900">
                  Headquarter
                </h2>
                <p className="text-gray-700">
                  2715 Demo St. San Jose, South Dakota 83475
                </p>
                <p className="text-gray-700">(205) 555-0100</p>
              </div>

              <div className="mt-6">
                <h2 className="text-xl font-semibold text-green-900">
                  Illinois Office
                </h2>
                <p className="text-gray-700">
                  2972 Example Rd. Santa Ana, Illinois 85486
                </p>
                <p className="text-gray-700">(603) 555-0123</p>
              </div>

              <div className="mt-6">
                <h2 className="text-xl font-semibold text-green-900">
                  Follow us on
                </h2>
                <div className="flex gap-4 mt-2 text-gray-600">
                  <i className="fab fa-facebook-f cursor-pointer"></i>
                  <i className="fab fa-twitter cursor-pointer"></i>
                  <i className="fab fa-instagram cursor-pointer"></i>
                  <i className="fab fa-youtube cursor-pointer"></i>
                </div>
              </div>
            </div>

            {/* Right Section - Form */}
            <div className="md:w-1/2 bg-white p-8 shadow-md rounded-lg">
              {/* <form className="space-y-4">
                <div>
                  <label className="block text-gray-700 font-medium">
                    Full Name *
                  </label>
                  <input
                    type="text"
                    className="w-full mt-1 p-2 border rounded focus:outline-none focus:ring-2 focus:ring-green-500"
                    placeholder="John"
                  />
                </div>
                <div>
                  <label className="block text-gray-700 font-medium">
                    Email *
                  </label>
                  <input
                    type="email"
                    className="w-full mt-1 p-2 border rounded focus:outline-none focus:ring-2 focus:ring-green-500"
                    placeholder="example@mail.com"
                  />
                </div>
                <div>
                  <label className="block text-gray-700 font-medium">
                    Subject *
                  </label>
                  <input
                    type="text"
                    className="w-full mt-1 p-2 border rounded focus:outline-none focus:ring-2 focus:ring-green-500"
                    placeholder="Subject"
                  />
                </div>
                <div>
                  <label className="block text-gray-700 font-medium">
                    Message
                  </label>
                  <textarea
                    className="w-full mt-1 p-2 border rounded h-24 focus:outline-none focus:ring-2 focus:ring-green-500"
                    placeholder="Enter your message"
                  ></textarea>
                </div>
                <button
                  type="submit"
                  className="w-full bg-green-600 text-white py-2 rounded hover:bg-green-700 transition"
                >
                  Send Message
                </button>
              </form> */}
            </div>
          </div>
        </div>
      </>
    );
};

export default Contact;
