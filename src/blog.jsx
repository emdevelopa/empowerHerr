export default function TransformationStories() {
  return (
    <section className="bg-[#fff] py-16 px-4 md:px-16">
      <div className="text-center">
        <h2 className="text-4xl font-bold text-green-900">
          Inspiring Tales of Transformation
        </h2>
        <p className="text-lg text-green-700 mt-3">
          Discover powerful stories of resilience and empowerment. Through our
          initiatives, we advocate for the health, education, and rights of
          women and children, ensuring a better future for all.
        </p>
      </div>

      <div className="mt-12 grid grid-cols-1 md:grid-cols-2 gap-8">
        {/* First Story */}
        <div className="bg-white p-6 rounded-2xl shadow-lg flex flex-col items-center">
          <img
            src="https://websitedemos.net/non-profit-organization-04/wp-content/uploads/sites/1476/2023/06/home-06.jpg"
            alt="Providing a Better Life for Vulnerable Children"
            className="w-full h-64 object-cover rounded-xl"
          />
          <div className="mt-4 text-center">
            <h3 className="text-xl font-semibold text-green-900">
              A Brighter Future for Every Child
            </h3>
            <p className="text-green-700 mt-2">
              We are committed to improving living conditions for vulnerable
              children. Through our efforts, we provide access to education,
              health support, and essential resources, ensuring no child is left
              behind.
            </p>
            {/* <button className="mt-4 bg-green-700 text-white px-6 py-2 rounded-full hover:bg-green-800 transition">
              Learn More
            </button> */}
          </div>
        </div>

        {/* Second Story */}
        <div className="bg-white p-6 rounded-2xl shadow-lg flex flex-col items-center">
          <img
            src="https://websitedemos.net/non-profit-organization-04/wp-content/uploads/sites/1476/2023/06/home-07.jpg"
            alt="Empowering Women Through Economic Initiatives"
            className="w-full h-64 object-cover rounded-xl"
          />
          <div className="mt-4 text-center">
            <h3 className="text-xl font-semibold text-green-900">
              Empowering Women & Communities
            </h3>
            <p className="text-green-700 mt-2">
              By training women in income-generating activities and promoting
              sustainable development projects, we help create self-sufficient
              communities that thrive for generations.
            </p>
            {/* <button className="mt-4 bg-green-700 text-white px-6 py-2 rounded-full hover:bg-green-800 transition">
              Learn More
            </button> */}
          </div>
        </div>
      </div>
    </section>
  );
}
