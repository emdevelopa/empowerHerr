export default function Impact() {
  return (
    <div className="bg-pink-50 px-6 py-16 lg:px-24">
      {/* Impact Section */}
      <div className="max-w-6xl mx-auto text-center mt-20" id="impact">
        <h3 className="text-sm uppercase tracking-wide text-gray-600">
          Our Impact
        </h3>
        <h2 className="text-4xl font-bold text-pink-900 leading-tight mt-2">
          The impact we have made in our community
        </h2>
        <p className="text-gray-700 mt-4 max-w-3xl mx-auto">
          We have made a significant impact in our community through our
          non-profit organization. By providing services and support to those in
          need, we have created a positive change. Our efforts have helped to
          improve the lives of many and we are committed to continuing to make a
          difference.
        </p>

        <div className="grid grid-cols-2 md:grid-cols-4 gap-8 mt-12">
          <div>
            <p className="text-3xl font-bold text-pink-900">20M+</p>
            <p className="text-gray-700">People served worldwide</p>
          </div>
          <div>
            <p className="text-3xl font-bold text-pink-900">142,790</p>
            <p className="text-gray-700">Projects funded</p>
          </div>
          <div>
            <p className="text-3xl font-bold text-pink-900">1.8M</p>
            <p className="text-gray-700">People to take action</p>
          </div>
          <div>
            <p className="text-3xl font-bold text-pink-900">5,246</p>
            <p className="text-gray-700">Partner organizations</p>
          </div>
        </div>

        <div className="bg-pink-600 text-white p-8 rounded-lg mt-12 flex flex-col md:flex-row justify-between items-center">
          <div className="text-[34px] font-bold font-semibold text-center md:text-left">
            We can create a better tomorrow
            <p className="text-sm font-normal mt-2">
              Every dollar counts and helps us bring hope and essential
              resources to those in need.
            </p>
          </div>
          <button className="mt-4 md:mt-0 px-6 py-3 bg-white text-pink-600 font-semibold rounded-md hover:bg-gray-100 transition-all">
            Donate Now
          </button>
        </div>
      </div>
    </div>
  );
}
