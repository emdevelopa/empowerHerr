export default function SixCardSections() {
  return (
    <div className="bg-green-50 py-16 px-6 md:px-12">
      <div className="max-w-6xl mx-auto">
        <div className="text-center mb-12">
          <h2 className="text-3xl md:text-4xl font-bold text-green-700">
            Creating Opportunities, Transforming Lives
          </h2>
          <p className="text-gray-600 mt-3 max-w-2xl mx-auto">
            At <span className="font-bold">Stephen & Dora-Mira Foundation</span>
            , we implement initiatives across key thematic areas to empower
            vulnerable women, children, and marginalized communities.
          </p>
        </div>

        {/* Card Container */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          {/* Card 1 - Social and Economic Justice */}
          <div className="bg-white p-8 rounded-tl-xl rounded-bl-xl shadow-lg border border-gray-200">
            <h3 className="text-3xl font-bold text-green-600">01.</h3>
            <h2 className="text-xl font-semibold mt-2">
              Social & Economic Justice
            </h2>
            <p className="text-gray-600 mt-2">
              We work towards breaking down barriers that hinder the progress of
              women and marginalized communities by advocating for social and
              economic equity.
            </p>
          </div>

          {/* Card 2 - Agriculture */}
          <div className="bg-white p-8 shadow-lg border border-gray-200">
            <h3 className="text-3xl font-bold text-green-600">02.</h3>
            <h2 className="text-xl font-semibold mt-2">Agriculture</h2>
            <p className="text-gray-600 mt-2">
              Through sustainable agricultural programs, we provide training and
              resources to help individuals and communities achieve food
              security and economic independence.
            </p>
          </div>

          {/* Card 3 - Education */}
          <div className="bg-white p-8 shadow-lg border border-gray-200">
            <h3 className="text-3xl font-bold text-green-600">03.</h3>
            <h2 className="text-xl font-semibold mt-2">Education</h2>
            <p className="text-gray-600 mt-2">
              We believe education is the key to empowerment. Our initiatives
              provide access to quality education and skill-building
              opportunities for children and women.
            </p>
          </div>

          {/* Card 4 - Human Rights Protection */}
          <div className="bg-white p-8 shadow-lg border border-gray-200">
            <h3 className="text-3xl font-bold text-green-600">04.</h3>
            <h2 className="text-xl font-semibold mt-2">
              Human Rights Protection
            </h2>
            <p className="text-gray-600 mt-2">
              We advocate for the rights of women and children, fighting against
              exploitation, gender-based violence, and all forms of
              discrimination.
            </p>
          </div>

          {/* Card 5 - Mentorship & Entrepreneurship */}
          <div className="bg-white p-8 shadow-lg border border-gray-200">
            <h3 className="text-3xl font-bold text-green-600">05.</h3>
            <h2 className="text-xl font-semibold mt-2">
              Mentorship & Entrepreneurship
            </h2>
            <p className="text-gray-600 mt-2">
              Through mentorship and entrepreneurship training, we equip
              individuals with the tools and resources they need to succeed in
              business and leadership.
            </p>
          </div>

          {/* Card 6 - Community Development */}
          <div className="bg-white p-8 rounded-tr-xl rounded-br-xl shadow-lg border border-gray-200">
            <h3 className="text-3xl font-bold text-green-600">06.</h3>
            <h2 className="text-xl font-semibold mt-2">
              Community Development
            </h2>
            <p className="text-gray-600 mt-2">
              We implement community-driven initiatives that foster social and
              economic growth, ensuring long-term impact for future generations.
            </p>
          </div>
        </div>
      </div>
    </div>
  );
}
