export default function SixCardSections() {
  return (
    <div className="bg-green-50 py-16 px-6 md:px-12">
      <div className="max-w-6xl mx-auto">
        <div className="text-center mb-12">
          <h2 className="text-3xl md:text-4xl font-bold text-green-700">
            Empowering Women, Transforming Communities
          </h2>
          <p className="text-gray-600 mt-3 max-w-2xl mx-auto">
            Our initiatives focus on education, skill development, mentorship,
            and health, ensuring every woman and girl has the resources to
            succeed.
          </p>
        </div>

        {/* Card Container */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          {/* Card 1 - Education & Skills */}
          <div className="bg-white p-8 rounded-tl-xl rounded-bl-xl shadow-lg border border-gray-200">
            <h3 className="text-3xl font-bold text-green-600">01.</h3>
            <h2 className="text-xl font-semibold mt-2">Education & Skills</h2>
            <p className="text-gray-600 mt-2">
              We provide free education and vocational training for women and
              girls, equipping them with practical skills for self-sufficiency.
            </p>
          </div>

          {/* Card 2 - Community Support */}
          <div className="bg-white p-8 shadow-lg border border-gray-200">
            <h3 className="text-3xl font-bold text-green-600">02.</h3>
            <h2 className="text-xl font-semibold mt-2">Community Support</h2>
            <p className="text-gray-600 mt-2">
              We create safe spaces where women can connect, share experiences,
              and support each other in their personal and professional
              journeys.
            </p>
          </div>

          {/* Card 3 - Mentorship & Leadership */}
          <div className="bg-white p-8 shadow-lg border border-gray-200">
            <h3 className="text-3xl font-bold text-green-600">03.</h3>
            <h2 className="text-xl font-semibold mt-2">
              Mentorship & Leadership
            </h2>
            <p className="text-gray-600 mt-2">
              Our mentorship programs connect young women with role models who
              guide them towards career growth and leadership opportunities.
            </p>
          </div>

          {/* Card 4 - Healthcare & Wellness */}
          <div className="bg-white p-8 shadow-lg border border-gray-200">
            <h3 className="text-3xl font-bold text-green-600">04.</h3>
            <h2 className="text-xl font-semibold mt-2">
              Healthcare & Wellness
            </h2>
            <p className="text-gray-600 mt-2">
              We advocate for women's health by providing essential medical
              checkups, mental health support, and wellness programs.
            </p>
          </div>

          {/* Card 5 - Economic Empowerment */}
          <div className="bg-white p-8 shadow-lg border border-gray-200">
            <h3 className="text-3xl font-bold text-green-600">05.</h3>
            <h2 className="text-xl font-semibold mt-2">Economic Empowerment</h2>
            <p className="text-gray-600 mt-2">
              We help women gain financial independence through entrepreneurship
              training, business funding, and career development programs.
            </p>
          </div>

          {/* Card 6 - Advocacy & Awareness */}
          <div className="bg-white p-8 rounded-tr-xl rounded-br-xl shadow-lg border border-gray-200">
            <h3 className="text-3xl font-bold text-green-600">06.</h3>
            <h2 className="text-xl font-semibold mt-2">Advocacy & Awareness</h2>
            <p className="text-gray-600 mt-2">
              We amplify women's voices by raising awareness on gender equality,
              rights, and social justice through campaigns and policy reforms.
            </p>
          </div>
        </div>
      </div>
    </div>
  );
}
