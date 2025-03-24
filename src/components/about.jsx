export default function AboutUsSection() {
  return (
    <section className="bg-[#fff] py-16 px-6 md:px-12" id="about">
      <div className="max-w-6xl mx-auto flex flex-col md:flex-row items-center md:items-start gap-12">
        {/* Left Content */}
        <div className="md:w-[40%]">
          <h4 className="text-sm font-medium text-gray-600 uppercase">
            About Us
          </h4>
          <h2 className="text-4xl font-bold text-green-900 mt-2 leading-tight">
            Empowering Lives, Creating Change
          </h2>
          <p className="text-gray-700 mt-4">
            We are a dedicated organization committed to empowering vulnerable
            women, children, and marginalized communities through education,
            agriculture, vocational training, community entrepreneurship, and
            sustainable opportunities.
          </p>
          <p className="text-gray-700 mt-4">
            Our goal is to create a world where every vulnerable group and
            community has the tools to thrive, succeed, and inspire future
            generations. Through mentorship, skill-building, and
            community-driven initiatives, we strive to create lasting change and
            a brighter future for all.
          </p>
        </div>

        {/* Right Image Grid */}
        <div className="md:w-1/2 grid grid-cols-2 gap-4">
          <img
            src="https://websitedemos.net/non-profit-organization-04/wp-content/uploads/sites/1476/2023/06/home-0001.jpg"
            alt="Empowerment"
            className="rounded-xl shadow-md"
          />
          <img
            src="https://websitedemos.net/non-profit-organization-04/wp-content/uploads/sites/1476/2023/06/home-02.jpg"
            alt="Community Support"
            className="rounded-xl shadow-md"
          />
          <img
            src="https://websitedemos.net/non-profit-organization-04/wp-content/uploads/sites/1476/2023/06/home-03.jpg"
            alt="Education"
            className="rounded-xl shadow-md"
          />
          <img
            src="https://websitedemos.net/non-profit-organization-04/wp-content/uploads/sites/1476/2023/06/home-0004.jpg"
            alt="Growth"
            className="rounded-xl shadow-md"
          />
        </div>
      </div>

      {/* Vision & Mission Section */}
      <div className="max-w-6xl mx-auto mt-16 text-center">
        {/* Vision */}
        <div className="mb-12">
          <h3 className="text-3xl font-bold text-green-800">Our Vision</h3>
          <p className="text-gray-700 mt-4 max-w-3xl mx-auto">
            A world where women, children, and communities are empowered with
            knowledge, skills, and opportunities to shape a future that reflects
            the highest level of dignity, independence, and success.
          </p>
        </div>

        {/* Mission */}
        <div>
          <h3 className="text-3xl font-bold text-green-800">Our Mission</h3>
          <p className="text-gray-700 mt-4 max-w-3xl mx-auto">
            To provide education, skills, mentorship, resources, and economic
            opportunities that empower women, children, and underserved
            communities to break barriers and build sustainable, thriving
            futures.
          </p>
        </div>
      </div>
    </section>
  );
}
