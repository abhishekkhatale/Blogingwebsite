import axios from 'axios';
import React, { useState, useEffect } from 'react';

function BlogCard() {
  const [blogs, SetBlogs] = useState([]);

  const getBlogs = () => {
    axios
      .get("https://blogging-api-xi.vercel.app/blog/")
      .then((response) => {
        console.log("Fetched data:", response.data.blogs);
        SetBlogs(response.data.blogs); // Correct state update
      })
      .catch((error) => {
        console.error("Error fetching blogs:", error);
      });
  };

  useEffect(() => {
    getBlogs();
  }, []);

  useEffect(() => {
    console.log("Updated blogs state:", blogs);
  }, [blogs]); // Logs updated state

  return (
    <div>
      {blogs.length > 0 ? (
        blogs.map((p) => (
          <div key={p._id} className="flex gap-8 px-10 py-10">
            <img className="w-auto h-[500px] rounded-lg" src={p.img} alt="" />
            <div className="flex flex-col justify-start items-start gap-3 pt-5">
              <p className="font-bold text-7xl">{p.title}</p>
              <p className="text-xl">{p.content}</p>
              <p className="text-lg text-blue-700">{p.links}</p>
              <p className="font-semibold text-lg">{p.hashtag}</p>
              <button className="bg-black text-white px-6 rounded-md py-1.5 text-lg font-semibold">
                Delete
              </button>
            </div>
          </div>
        ))
      ) : (
        <p>Loading blogs...</p>
      )}
    </div>
  );
}

export default BlogCard;
