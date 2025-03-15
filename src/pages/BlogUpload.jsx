import { useState, useEffect, useRef } from "react";
import { collection, addDoc } from "firebase/firestore";
import { db } from "../utils/firebaseConfig";

const BlogUpload = () => {
  const [title, setTitle] = useState("");
  const [description, setDescription] = useState("");
  const [mediaUrl, setMediaUrl] = useState("");
  const [uploading, setUploading] = useState(false);
  const cloudinaryWidget = useRef(null);

  // ✅ Preload Cloudinary Widget on Page Load
  useEffect(() => {
    if (window.cloudinary) {
      cloudinaryWidget.current = window.cloudinary.createUploadWidget(
        {
          cloudName: "djwldmjmy",
          uploadPreset: "ngoasset",
          sources: ["local", "url", "camera"],
          multiple: false,
          resourceType: "auto",
        },
        (error, result) => {
          if (!error && result.event === "success") {
            console.log("Uploaded:", result.info.secure_url);
            setMediaUrl(result.info.secure_url);
          }
        }
      );
    }
  }, []);

  const openCloudinaryWidget = () => {
    if (cloudinaryWidget.current) {
      cloudinaryWidget.current.open();
    } else {
      alert("Cloudinary is still loading, please wait a second.");
    }
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    if (!title || !description || !mediaUrl)
      return alert("All fields are required!");

    setUploading(true);

    try {
      await addDoc(collection(db, "blogs"), {
        title,
        description,
        mediaUrl,
        createdAt: new Date(),
      });

      alert("Blog uploaded successfully!");
      setTitle("");
      setDescription("");
      setMediaUrl("");
    } catch (error) {
      console.error("Upload failed", error);
    }

    setUploading(false);
  };

  return (
    <div className="flex items-center justify-center min-h-screen bg-gray-100">
      <div className="bg-white shadow-lg rounded-lg p-6 max-w-lg w-full">
        <h2 className="text-2xl font-semibold text-center mb-4 text-gray-700">
          Upload Blog
        </h2>
        <form onSubmit={handleSubmit} className="space-y-4">
          <input
            type="text"
            placeholder="Blog Title"
            value={title}
            onChange={(e) => setTitle(e.target.value)}
            required
            className="w-full px-4 py-2 border rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
          />
          <textarea
            placeholder="Blog Description"
            value={description}
            onChange={(e) => setDescription(e.target.value)}
            required
            className="w-full px-4 py-2 border rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
          />
          <button
            type="button"
            onClick={openCloudinaryWidget}
            className="w-full bg-blue-500 text-white py-2 rounded-lg hover:bg-blue-600 transition"
          >
            Upload Media
          </button>

          {mediaUrl && (
            <div className="flex justify-center mt-4">
              {mediaUrl.includes("video") ? (
                <video width="100%" controls className="rounded-lg shadow-md">
                  <source src={mediaUrl} type="video/mp4" />
                  Your browser does not support the video tag.
                </video>
              ) : (
                <img
                  src={mediaUrl}
                  alt="Uploaded"
                  className="w-full max-h-64 object-cover rounded-lg shadow-md"
                />
              )}
            </div>
          )}

          <button
            type="submit"
            disabled={uploading}
            className="w-full bg-green-500 text-white py-2 rounded-lg hover:bg-green-600 transition disabled:opacity-50"
          >
            {uploading ? "Uploading..." : "Submit"}
          </button>
        </form>
      </div>
    </div>
  );
};

export default BlogUpload;
