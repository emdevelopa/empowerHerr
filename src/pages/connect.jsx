import React from 'react';

const Connect = () => {
    return (
      <div>
        <div className="relative w-full h-[70vh]">
          {/* Background Image */}
          <img
            src="hands.webp"
            alt="Impact Header"
            className="w-full h-full object-cover"
          />
          {/* Overlay */}
          <div className="absolute inset-0 bg-[#000000e0] bg-opacity-50 flex flex-col justify-center items-start px-10 text-white">
            <h1 className="text-4xl font-bold">Connect with us</h1>
            <p className="text-lg mt-2">
              Empowering women and children by advocating for their rights,
              health, and access to opportunities.
            </p>
            <p className="mt-3 text-sm">
              <span className="text-gray-300">HOME</span> /{" "}
              <span className="text-yellow-500">CONNECT</span>
            </p>
          </div>
        </div>
        <div className="bg-green-600 text-white p-8 rounded-lg mt-12 flex flex-col md:flex-row justify-between items-center w-[80%] mx-auto mb-12">
          <div className="text-[34px] font-bold text-center md:text-left">
            Together, We Can Build a Brighter Future
            <p className="text-sm font-normal mt-2">
              Your support enables us to continue advocating for vulnerable
              women and children. Join us in making a difference today!
            </p>
          </div>
          <a href="https://forms.gle/QNtF8pWqe1ViUBXJ6" target="_blank">
            <button className="mt-4 md:mt-0 px-6 py-3 cursor-pointer bg-white text-green-600 font-semibold rounded-md hover:bg-gray-100 transition-all">
              Support Our Mission
            </button>
          </a>
        </div>
        {/* Call to Action */}
        <section className="py-16 px-6 md:px-16 bg-green-900 text-white text-center">
          <h3 className="text-2xl font-bold">Join Us in Making a Difference</h3>
          <p className="text-lg mt-4 max-w-3xl mx-auto">
            Together, we can change lives by ensuring that women and children
            receive the support, education, and empowerment they need. We
            welcome your donation in cash and material resources.
          </p>
          {/* <p> We welcome your donation in cash and material resources.</p> */}
          {/* <button className="mt-6 bg-white text-green-900 px-6 py-3 rounded-full font-semibold hover:bg-gray-200">
          Get Involved
        </button> */}
        </section>
      </div>
    );
};

export default Connect;