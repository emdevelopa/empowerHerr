export default function Impact() {
  return (
    <div className="bg-green-50 px-6 pb-16 pt-1 lg:px-24">
      {/* Impact Section */}
      <div className="max-w-6xl mx-auto text-center mt-20" id="impact">
        <h3 className="text-sm uppercase tracking-wide text-gray-600">
          Our Impact
        </h3>
        <h2 className="text-4xl font-bold text-green-900 leading-tight mt-2">
          Transforming Lives Through Love, Humility, and Service
        </h2>
        <p className="text-gray-700 mt-4 max-w-3xl mx-auto">
          At Stephen & Dora-Mira Foundation, we advocate for the health and
          rights of women and children. Our mission is to provide better living
          conditions for the vulnerable, especially children, and to promote
          education, economic opportunities, and community development.
        </p>

        <div className="grid grid-cols-2 md:grid-cols-4 gap-8 mt-12">
          <div>
            <p className="text-3xl font-bold text-green-900">5,000+</p>
            <p className="text-gray-700">
              Children supported with better living conditions
            </p>
          </div>
          <div>
            <p className="text-3xl font-bold text-green-900">3,200+</p>
            <p className="text-gray-700">
              Students granted access to education
            </p>
          </div>
          <div>
            <p className="text-3xl font-bold text-green-900">1,500+</p>
            <p className="text-gray-700">
              Women trained in income-generating activities
            </p>
          </div>
          <div>
            <p className="text-3xl font-bold text-green-900">200+</p>
            <p className="text-gray-700">
              Communities empowered through development projects
            </p>
          </div>
        </div>

        <div className="bg-green-600 text-white p-8 rounded-lg mt-12 flex flex-col md:flex-row justify-between items-center">
          <div className="text-[34px] font-bold text-center md:text-left">
            Together, We Can Build a Brighter Future
            <p className="text-sm font-normal mt-2">
              Your support enables us to continue advocating for vulnerable
              women and children. Join us in making a difference today!
            </p>
          </div>
          <button className="mt-4 md:mt-0 px-6 py-3 bg-white text-green-600 font-semibold rounded-md hover:bg-gray-100 transition-all">
            Support Our Mission
          </button>
        </div>
      </div>
    </div>
  );
}
