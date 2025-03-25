import axios from 'axios';
import React, { useState, useEffect } from 'react';

function BlogCard() {
  const [blogs, SetBlogs] = useState([]);

  // Fetch Blogs
  const getBlogs = () => {
    axios
      .get("https://blogging-api-xi.vercel.app/blog/")
      .then((response) => {
        console.log("Fetched data:", response.data.blogs);
        SetBlogs(response.data.blogs);
      })
      .catch((error) => {
        console.error("Error fetching blogs:", error);
      });
  };

  useEffect(() => {
    getBlogs();
  }, []);

  // Delete Blog Function
  const deleteBlog = (id) => {
    axios
      .delete(`https://blogging-api-xi.vercel.app/blog/${id}`)
      .then((response) => {
        console.log("Blog deleted:", response.data);
        // Remove deleted blog from state
        SetBlogs(blogs.filter((blog) => blog._id !== id));
      })
      .catch((error) => {
        console.error("Error deleting blog:", error);
      });
  };

  return (
    <div>
      {blogs.length > 0 ? (
        blogs.map((p) => (
          <div
            key={p._id}
            className="flex flex-col sm:flex-row gap-4 sm:gap-8 px-4 sm:px-10 py-6 sm:py-10"
          >
            <img
              className="w-full sm:w-auto h-60 sm:h-[500px] rounded-lg object-cover"
              src={p.img}
              alt=""
            />
            <div className="flex flex-col justify-start items-start gap-3 pt-3 sm:pt-5">
              <p className="font-bold text-2xl sm:text-7xl">{p.title}</p>
              <p className="text-base sm:text-xl">{p.content}</p>
              <p className="text-sm sm:text-lg text-blue-700">{p.links}</p>
              <p className="font-semibold text-sm sm:text-lg">{p.hashtag}</p>
              <button
                onClick={() => deleteBlog(p._id)}
                className="bg-[#000] hover:bg-[#1e1e1e] text-white px-4 sm:px-6 rounded-md py-1 sm:py-1.5 text-base sm:text-lg font-semibold"
              >
                Delete
              </button>
            </div>
          </div>
        ))
      ) : (
        <p className="text-center text-lg">Loading blogs...</p>
      )}
    </div>
  );
}

export default BlogCard;
