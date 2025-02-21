export default function ImpactSection() {
  return (
    <div className="bg-pink-50 py-16 px-6 md:px-12">
      <div className="max-w-6xl mx-auto">
        {/* Card Container */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-">
          {/* Card 1 */}
          <div className="bg-white p-8 rounded-tl-xl rounded-bl-xl shadow-lg border border-gray-200">
            <h3 className="text-3xl font-bold text-pink-600">01.</h3>
            <h2 className="text-xl font-semibold mt-2">Education & Skills</h2>
            <p className="text-gray-600 mt-2">
              We provide education and vocational training to empower women with
              skills for financial independence.
            </p>
            <a
              href="#"
              className="mt-4 inline-block font-semibold text-pink-600 hover:text-pink-700"
            >
              See Success Stories →
            </a>
          </div>

          {/* Card 2 */}
          <div className="bg-white p-8  shadow-lg border border-gray-200">
            <h3 className="text-3xl font-bold text-pink-600">02.</h3>
            <h2 className="text-xl font-semibold mt-2">Community Support</h2>
            <p className="text-gray-600 mt-2">
              Join our network of mentors, volunteers, and advocates creating
              opportunities for women worldwide.
            </p>
            <a
              href="#"
              className="mt-4 inline-block font-semibold text-pink-600 hover:text-pink-700"
            >
              Get Involved →
            </a>
          </div>

          {/* Card 3 */}
          <div className="bg-white p-8 rounded-tr-xl rounded-br-xl shadow-lg border border-gray-200">
            <h3 className="text-3xl font-bold text-pink-600">03.</h3>
            <h2 className="text-xl font-semibold mt-2">Donate & Impact</h2>
            <p className="text-gray-600 mt-2">
              Your donations provide scholarships, resources, and business
              grants to help women thrive.
            </p>
            <a
              href="#"
              className="mt-4 inline-block font-semibold text-pink-600 hover:text-pink-700"
            >
              Learn More →
            </a>
          </div>
        </div>
      </div>
    </div>
  );
}
