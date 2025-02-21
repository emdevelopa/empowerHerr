export default function TransformationStories() {
    
  return (
    <section className="bg-[#f9faef] py-16 px-4 md:px-16">
      <div className="text-center">
        <h2 className="text-4xl font-bold text-pink-900">
          Inspiring tales of transformation
        </h2>
        <p className="text-lg text-[#5F6D4E] mt-3">
          Get inspired by the remarkable stories of transformation through our
          non-profit organization. Join us in making a positive impact today.
        </p>
      </div>

      <div className="mt-12 grid grid-cols-1 md:grid-cols-2 gap-8">
        {/* First Story */}
        <div
          className="bg-white p-6 rounded-2xl shadow-lg flex flex-col items-center"
          // onClick={() => onSelect(blog)}
        >
          <img
            src="https://websitedemos.net/non-profit-organization-04/wp-content/uploads/sites/1476/2023/06/home-06.jpg"
            alt="The Special One"
            className="w-full h-64 object-cover rounded-xl"
          />
          <div className="mt-4 text-center">
            <h3 className="text-xl font-semibold text-[#2E3A24]">
              The Special One
            </h3>
            <p className="text-[#000000a8] mt-2">
              Join our non-profit organisation to help create a brighter future
              for those in need. Every donation counts towards making a
              difference in the lives of those less fortunate.
            </p>
            {/* <a
              href="#"
              className="text-[#2E3A24] font-semibold mt-3 inline-block"
            >
              Read More →
            </a> */}
          </div>
        </div>

        {/* Second Story */}
        <div className="bg-white p-6 rounded-2xl shadow-lg flex flex-col items-center">
          <img
            src="https://websitedemos.net/non-profit-organization-04/wp-content/uploads/sites/1476/2023/06/home-07.jpg"
            alt="A Better Education for Everyone"
            className="w-full h-64 object-cover rounded-xl"
          />
          <div className="mt-4 text-center">
            <h3 className="text-xl font-semibold text-[#2E3A24]">
              A Better Education for Everyone
            </h3>
            <p className="text-[#000000a8] mt-2">
              Our non-profit organisation is dedicated to improving access to
              education for all. With your support, we can help provide the
              resources and opportunities needed for success.
            </p>
            {/* <a
              href="#"
              className="text-[#2E3A24] font-semibold mt-3 inline-block"
            >
              Read More →
            </a> */}
          </div>
        </div>
      </div>
    </section>
  );
}
