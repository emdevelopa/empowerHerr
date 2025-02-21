import React from "react";
import Navbar from "./Navbar";

const BlogList = ({ blogs, onSelect }) => {
    return (
      <>
        {/* <Navbar /> */}
        <div className="relative w-full h-64">
          {/* Background Image */}
          <img
            src="https://images.unsplash.com/photo-1583971663176-dd7180de1b76?fm=jpg&q=60&w=3000&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8Mnx8ZmVtYWxlJTIwZW1wb3dlcm1lbnR8ZW58MHx8MHx8fDA%3D"
            alt="Blog Header"
            className="w-full h-full object-cover"
          />
          {/* Overlay */}
          <div className="absolute inset-0 bg-[#000000c3] bg-opacity-50 flex flex-col justify-center items-start px-10 text-white">
            {/* <h1 className="text-4xl font-bold">Blog Grid</h1> */}
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
          <div className="mt-6 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
            {blogs.map((blog) => (
              <div
                key={blog.id}
                className="border border-gray-200 shadow-md rounded-lg overflow-hidden cursor-pointer hover:shadow-lg transition-shadow duration-300"
                onClick={() => onSelect(blog)}
              >
                <div className="p-4">
                  <img
                    src="https://images.unsplash.com/photo-1583971663176-dd7180de1b76?fm=jpg&q=60&w=3000&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8Mnx8ZmVtYWxlJTIwZW1wb3dlcm1lbnR8ZW58MHx8MHx8fDA%3D"
                    alt=""
                    className="rounded-xl"
                  />
                  <h2 className="text-xl font-semibold text-green-800">
                    {blog.title}
                  </h2>
                  <p className="text-gray-500 text-sm">{blog.date}</p>
                  <p className="text-gray-700 mt-2">{blog.excerpt}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </>
    );
};

export default BlogList;
