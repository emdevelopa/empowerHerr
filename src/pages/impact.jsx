import React from "react";
import Impact from "../ourImpact";

const ImpactPage = () => {
  return (
    <>
      {/* Header Section */}
      <div className="relative w-full h-[70vh]">
        {/* Background Image */}
        <img
          src="./impact.jpg"
          alt="Impact Header"
          className="w-full h-full object-cover"
        />
        {/* Overlay */}
        <div className="absolute inset-0 bg-[#000000c3] bg-opacity-50 flex flex-col justify-center items-start px-10 text-white">
          <h1 className="text-4xl font-bold">Our Impact</h1>
          <p className="text-lg mt-2">
            We have delivered a series of projects that created demonstrable
            social and economic impacts.
          </p>
          <p className="mt-3 text-sm">
            <span className="text-gray-300">HOME</span> /{" "}
            <span className="text-yellow-500">IMPACT</span>
          </p>
        </div>
      </div>

      {/* Objectives Section */}
      <section className="py-16 px-6 md:px-16 bg-white">
        <div className="max-w-4xl mx-auto">
          <h3 className="text-2xl font-bold text-green-900 text-center">
            Our Achievements
          </h3>
          <ul className="mt-6 space-y-4">
            <li className="flex items-start">
              <span className="text-green-600 text-2xl mr-3">✔</span>
              <p className="text-green-700">
                Implemented community-driven initiatives that improved the
                livelihoods of women and children.
              </p>
            </li>
            <li className="flex items-start">
              <span className="text-green-600 text-2xl mr-3">✔</span>
              <p className="text-green-700">
                Provided education and vocational training to empower
                marginalized groups.
              </p>
            </li>
            <li className="flex items-start">
              <span className="text-green-600 text-2xl mr-3">✔</span>
              <p className="text-green-700">
                Advocated for human rights protection, ensuring access to
                justice for vulnerable individuals.
              </p>
            </li>
            <li className="flex items-start">
              <span className="text-green-600 text-2xl mr-3">✔</span>
              <p className="text-green-700">
                Promoted agricultural initiatives that enhanced food security
                and economic independence.
              </p>
            </li>
            <li className="flex items-start">
              <span className="text-green-600 text-2xl mr-3">✔</span>
              <p className="text-green-700">
                Supported skill development and mentorship programs, fostering
                entrepreneurship and self-reliance.
              </p>
            </li>
          </ul>
        </div>
      </section>

      <Impact />
    </>
  );
};

export default ImpactPage;
