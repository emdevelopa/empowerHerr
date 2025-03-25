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
          <p className="text-gray-700 mt-4">
            To provide education, skills, mentorship, resources and economic
            opportunities that empower women, children and underserved
            communities to break barriers and build sustainable, thriving
            futures. Programme Pillars We deliver our projects through our core
            thematic areas of concerns: <br />
            <span className="text-green-600 text-2xl mr-3">✔</span>Social and
            Economic Justice
            <br />
            <span className="text-green-600 text-2xl mr-3">✔</span>Agriculture
            <br />
            <span className="text-green-600 text-2xl mr-3">✔</span>Education
            <br /> <span className="text-green-600 text-2xl mr-3">✔</span>Human
            Right Protection
          </p>
        </div>

        {/* Right Image Grid */}
        <div className="md:w-1/2 grid grid-cols-2 gap-4">
          <img
            src="./cardimg.jpg"
            alt="Empowerment"
            className="rounded-xl shadow-md"
          />
          <img
            src="./soc.jpg"
            alt="Community Support"
            className="rounded-xl shadow-md"
          />
          <img
            src="./edu.jpg"
            alt="Education"
            className="rounded-xl shadow-md"
          />
          <img
            src="./agric.jpg"
            alt="Growth"
            className="rounded-xl shadow-md border-2 border-[#cfcfcf]"
          />
        </div>
      </div>

      {/* Vision & Mission Section */}
      <div className="max-w-6xl mx-auto mt-16 text-center">
        {/* Vision */}
        <div className="mb-16">
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

        {/* Our Team */}
        <div className="mt-16">
          <h3 className="text-3xl font-bold text-green-800">Our Team</h3>
          <div className="flex flex-col md:flex-row items-center md:items-start gap-8 mt-12">
            {/* CEO IMAGE */}
            <img
              src="./ceo.jpg"
              alt="Sylvie Akwe Malo"
              className="w-48   rounded-full object-cover shadow-md"
            />
            {/* CEO content story */}
            <div className="text-left">
              <h4 className="text-2xl font-bold text-green-900">
                Sylvie Akwe Malo
              </h4>
              <p className="text-sm font-medium text-gray-600">
                Founder/Executive Director
              </p>
              <p className="text-gray-700 mt-4">
                Sylvie Akwe Malo is an educator, social entrepreneur, health &
                wellness specialist, development professional, community
                builder, and social mobilizer.
              </p>
              <p className="text-gray-700 mt-4">
                She represents a humble but bigger hope for the emergence of a
                new and prosperous Africa. Her experience with diverse realities
                of life has triggered her passion to pursue vision and agenda to
                better the lives of the marginalized, vulnerable, and oppressed
                in Cameroon. She founded Stephen and Dora-Mira Foundation to
                drive interventions and solutions that could unlock
                opportunities for wealth-creation and quality well-being for the
                underprivileged in Cameroon.
              </p>
              <p className="text-gray-700 mt-4">
                Originally trained in linguistics and education, Sylvie holds
                three master's degrees. She studied linguistics at bachelor's
                and master's degree level at University of Buea before
                proceeding to International Relations Institute, University of
                Yaounde to earn a Master's degree in Humanitarian Action and
                Development Cooperation. She capped it with an MSc in Innovation
                Management and Entrepreneurship obtained from Bournemouth
                University, United Kingdom.
              </p>
              <p className="text-gray-700 mt-4">
                In the career space, Sylvie has rendered superlative performance
                as a teacher, community development practitioner, and social
                mobilizer over the years. Her push for wider economic and social
                impacts through transformative programs and projects led her to
                establish Stephen and Dora-Mira Foundation.
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
