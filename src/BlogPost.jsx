import React from "react";

const BlogPost = ({ post, onBack }) => {
  if (!post) {
    return <p className="text-center text-gray-500">No blog post found.</p>;
  }

  return (
    <div className="max-w-3xl mx-auto px-4 py-10">
      <button onClick={onBack} className="text-green-600 hover:underline mb-4">
        ← Back to Blog
      </button>

      <h1 className="text-3xl font-bold">{post.title}</h1>
      <p className="text-gray-500 mt-2">
        By {post.author} | {post.date}
      </p>

      <div className="w-full h-64 md:h-96 my-6">
        <img
          src={post.image}
          alt={post.title}
          className="w-full h-full object-cover rounded-lg"
        />
      </div>

      <div className="prose prose-lg text-gray-700">{post.content}</div>
    </div>
  );
};

export default BlogPost;

