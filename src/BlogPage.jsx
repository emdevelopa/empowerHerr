import React, { useState } from "react";
import BlogPost from "./BlogPost";
import BlogList from "./BlogList";


const BlogPage = () => {
  const [selectedPost, setSelectedPost] = useState(null);

  const blogs = [
    {
      id: 1,
      title: "How Non-Profits Are Changing Lives",
      author: "John Doe",
      date: "February 21, 2025",
      image:
        "https://plus.unsplash.com/premium_photo-1663054954443-b0d64eb36d29?fm=jpg&q=60&w=3000&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8OXx8ZmVtYWxlJTIwZW1wb3dlcm1lbnR8ZW58MHx8MHx8fDA%3D",
      excerpt:
        "Discover how non-profits are making a significant impact in the world...",
      content: (
        <>
          <p>
            Non-profit organizations are making a significant impact worldwide,
            helping communities thrive and ensuring people in need get the
            support they deserve.
          </p>
          <h3 className="font-semibold mt-4">Why It Matters</h3>
          <p>
            Supporting non-profits means supporting meaningful causes. Every
            donation, volunteer effort, or shared story brings us one step
            closer to a better world.
          </p>
        </>
      ),
    },
    {
      id: 2,
      title: "The Impact of Donations",
      author: "Jane Smith",
      date: "February 10, 2025",
      image:
        "https://plus.unsplash.com/premium_photo-1663054954443-b0d64eb36d29?fm=jpg&q=60&w=3000&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8OXx8ZmVtYWxlJTIwZW1wb3dlcm1lbnR8ZW58MHx8MHx8fDA%3D",
      excerpt:
        "Donations play a crucial role in transforming communities and lives...",
      content: (
        <>
          <p>
            Every donation, big or small, helps create positive change in
            communities across the globe.
          </p>
          <h3 className="font-semibold mt-4">Making a Difference</h3>
          <p>
            When people come together to support a cause, the impact can be
            life-changing for those in need.
          </p>
        </>
      ),
    },
    {
      id: 2,
      title: "The Impact of Donations",
      author: "Jane Smith",
      date: "February 10, 2025",
      image:
        "https://plus.unsplash.com/premium_photo-1663054954443-b0d64eb36d29?fm=jpg&q=60&w=3000&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8OXx8ZmVtYWxlJTIwZW1wb3dlcm1lbnR8ZW58MHx8MHx8fDA%3D",
      excerpt:
        "Donations play a crucial role in transforming communities and lives...",
      content: (
        <>
          <p>
            Every donation, big or small, helps create positive change in
            communities across the globe.
          </p>
          <h3 className="font-semibold mt-4">Making a Difference</h3>
          <p>
            When people come together to support a cause, the impact can be
            life-changing for those in need.
          </p>
        </>
      ),
    },
    {
      id: 2,
      title: "The Impact of Donations",
      author: "Jane Smith",
      date: "February 10, 2025",
      image:
        "https://plus.unsplash.com/premium_photo-1663054954443-b0d64eb36d29?fm=jpg&q=60&w=3000&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8OXx8ZmVtYWxlJTIwZW1wb3dlcm1lbnR8ZW58MHx8MHx8fDA%3D",
      excerpt:
        "Donations play a crucial role in transforming communities and lives...",
      content: (
        <>
          <p>
            Every donation, big or small, helps create positive change in
            communities across the globe.
          </p>
          <h3 className="font-semibold mt-4">Making a Difference</h3>
          <p>
            When people come together to support a cause, the impact can be
            life-changing for those in need.
          </p>
        </>
      ),
    },
  ];

  return (
    <div>
      {selectedPost ? (
        <BlogPost post={selectedPost} onBack={() => setSelectedPost(null)} />
      ) : (
        <BlogList blogs={blogs} onSelect={setSelectedPost} />
      )}
    </div>
  );
};

export default BlogPage;
