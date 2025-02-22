import React from "react";
import Impact from "../ourImpact";

const ImpactPage = () => {
  return (
    <>
      {/* Header Section */}
      <div className="relative w-full h-[60vh]">
        {/* Background Image */}
        <img
          src="https://images.unsplash.com/photo-1583971663176-dd7180de1b76?fm=jpg&q=60&w=3000&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8Mnx8ZmVtYWxlJTIwZW1wb3dlcnN8ZW58MHx8MHx8fDA%3D"
          alt="Impact Header"
          className="w-full h-full object-cover"
        />
        {/* Overlay */}
        <div className="absolute inset-0 bg-[#000000c3] bg-opacity-50 flex flex-col justify-center items-start px-10 text-white">
          <h1 className="text-4xl font-bold">Impact</h1>
          <p className="text-lg mt-2">
            Empowering women and children by advocating for their rights,
            health, and access to opportunities.
          </p>
          <p className="mt-3 text-sm">
            <span className="text-gray-300">HOME</span> /{" "}
            <span className="text-yellow-500">IMPACT</span>
          </p>
        </div>
      </div>

      {/* Vision & Mission Section */}
      <section className="py-16 px-6 md:px-16 bg-green-50">
        <div className="text-center">
          <h2 className="text-3xl font-bold text-green-900">
            Vision & Mission
          </h2>
          <p className="text-lg text-green-700 mt-4 max-w-3xl mx-auto">
            To advocate for the health and rights of women and children,
            ensuring they have access to a better quality of life, education,
            and economic opportunities.
          </p>
        </div>
      </section>

      {/* Objectives Section */}
      <section className="py-16 px-6 md:px-16 bg-white">
        <div className="max-w-4xl mx-auto">
          <h3 className="text-2xl font-bold text-green-900 text-center">
            Our Objectives
          </h3>
          <ul className="mt-6 space-y-4">
            <li className="flex items-start">
              <span className="text-green-600 text-2xl mr-3">✔</span>
              <p className="text-green-700">
                Providing better living conditions for vulnerable children and
                women.
              </p>
            </li>
            <li className="flex items-start">
              <span className="text-green-600 text-2xl mr-3">✔</span>
              <p className="text-green-700">
                Promoting income-generating activities for women’s empowerment.
              </p>
            </li>
            <li className="flex items-start">
              <span className="text-green-600 text-2xl mr-3">✔</span>
              <p className="text-green-700">
                Advocating for access to education for the less privileged.
              </p>
            </li>
            <li className="flex items-start">
              <span className="text-green-600 text-2xl mr-3">✔</span>
              <p className="text-green-700">
                Supporting children with special needs through inclusive
                community programs.
              </p>
            </li>
            <li className="flex items-start">
              <span className="text-green-600 text-2xl mr-3">✔</span>
              <p className="text-green-700">
                Fostering community development and sustainable livelihood
                projects.
              </p>
            </li>
          </ul>
        </div>
      </section>

      {/* Impact Stories */}
      <Impact />

      {/* Call to Action */}
      <section className="py-16 px-6 md:px-16 bg-green-900 text-white text-center">
        <h3 className="text-2xl font-bold">Join Us in Making a Difference</h3>
        <p className="text-lg mt-4 max-w-3xl mx-auto">
          Together, we can change lives by ensuring that women and children
          receive the support, education, and empowerment they need.
        </p>
        {/* <button className="mt-6 bg-white text-green-900 px-6 py-3 rounded-full font-semibold hover:bg-gray-200">
          Get Involved
        </button> */}
      </section>
    </>
  );
};

export default ImpactPage;
