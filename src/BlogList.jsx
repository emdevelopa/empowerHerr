const BlogList = ({ blogs, onSelect }) => {
  return (
    <>
      {/* <Navbar /> */}
      <div className="relative w-full h-[70vh]">
        {/* Background Image */}
        <img
          src="./blog.jpg"
          alt="Blog Header"
          className="w-full h-full object-cover"
        />
        {/* Overlay */}
        <div className="absolute inset-0 bg-[#000000c3] bg-opacity-50 flex flex-col justify-center items-start px-10 text-white ">
          <h1 className="text-4xl font-bold">Blog</h1>
          <p className="text-lg mt-2">
            Help today because tomorrow you may be the one who needs more
            helping!
          </p>
          <p className="mt-3 text-sm">
            <span className="text-gray-300">HOME</span> /{" "}
            <span className="text-yellow-500">BLOG</span>
          </p>
        </div>
      </div>
      <div className="max-w-6xl mx-auto px-4 py-10">
        {blogs.length === 0 ? (
          <div className=" h-[20vh] flex justify-center items-center">
            {" "}
            <p className="text-center text-4xl font-bold text-gray-500">
              No blogs yet
            </p>
          </div>
        ) : (
          <div className="mt-6 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
            {blogs.map((blog) => (
              <div
                key={blog.id}
                className="border border-gray-200 shadow-md rounded-lg overflow-hidden cursor-pointer hover:shadow-lg transition-shadow duration-300"
                onClick={() => onSelect(blog)}
              >
                <div className="p-4">
                  {blog.mediaUrl.includes("/video/") ? (
                    <iframe
                      src={blog.mediaUrl}
                      width="100%"
                      height="auto"
                      allow="autoplay; encrypted-media"
                      allowFullScreen
                      className="rounded-lg shadow-md"
                    />
                  ) : (
                    <img
                      src={blog.mediaUrl}
                      alt="Uploaded"
                      className="w-full max-h-64 object-cover rounded-lg shadow-md"
                    />
                  )}

                  <h2 className="text-xl font-semibold text-green-800">
                    {blog.title}
                  </h2>
                  <p className="text-gray-500 text-sm">
                    {new Date(
                      blog.createdAt.seconds * 1000
                    ).toLocaleDateString()}
                  </p>
                  <p className="text-gray-700 mt-2">{blog.description}</p>
                </div>
              </div>
            ))}
          </div>
        )}
      </div>
    </>
  );
};

export default BlogList;
