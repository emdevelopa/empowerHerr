export default function AboutUsSection() {
  return (
    <section className="bg-[#f9faef] py-16 px-6 md:px-12" id="about">
      <div className="max-w-6xl mx-auto flex flex-col md:flex-row items-center md:items-start gap-12">
        {/* Left Content */}
        <div className="md:w-[40%]">
          <h4 className="text-sm font-medium text-gray-600 uppercase">
            About Us
          </h4>
          <h2 className="text-4xl font-bold text-pink-900 mt-2 leading-tight">
            Our journey of <br /> compassion and hope
          </h2>
          <p className="text-gray-700 mt-4">
            Join us on a journey towards compassion and hope. Through our
            non-profit organisation, we strive to make a positive impact on the
            world. Give back to your community and be a part of something
            greater than yourself.
          </p>
          <p className="text-gray-700 mt-4">
            A transformational journey towards bringing hope and compassion to
            the world.
          </p>
          <button className="mt-6 px-6 py-3 border-2 border-gray-900 text-gray-900 font-semibold rounded-lg hover:bg-gray-900 hover:text-white transition">
            Read More
          </button>
        </div>

        {/* Right Image Grid */}
        <div className="md:w-1/2 grid grid-cols-2 gap-4">
          <img
            src="https://websitedemos.net/non-profit-organization-04/wp-content/uploads/sites/1476/2023/06/home-0001.jpg"
            alt="Compassion"
            className="rounded-xl shadow-md"
          />
          <img
            src="https://websitedemos.net/non-profit-organization-04/wp-content/uploads/sites/1476/2023/06/home-02.jpg"
            alt="Volunteers"
            className="rounded-xl shadow-md"
          />
          <img
            src="https://websitedemos.net/non-profit-organization-04/wp-content/uploads/sites/1476/2023/06/home-03.jpg"
            alt="Donation"
            className="rounded-xl shadow-md"
          />
          <img
            src="https://websitedemos.net/non-profit-organization-04/wp-content/uploads/sites/1476/2023/06/home-0004.jpg"
            alt="Helping Hands"
            className="rounded-xl shadow-md"
          />
        </div>
      </div>
    </section>
  );
}
