import React, { useEffect, useState } from "react";
import BlogPost from "./BlogPost";
import BlogList from "./BlogList";
import { collection, getDocs } from "firebase/firestore";
import { db } from "./utils/firebaseConfig";


const BlogPage = () => {
  const [selectedPost, setSelectedPost] = useState(null);
  const [blogs, setBlogs] = useState([]);

  useEffect(() => {
    const fetchBlogs = async () => {
      const querySnapshot = await getDocs(collection(db, "blogs"));
      setBlogs(
        querySnapshot.docs.map((doc) => ({ id: doc.id, ...doc.data() }))
      );
    };

    fetchBlogs();
  }, []);

  console.log(blogs);

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
