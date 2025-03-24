import React from 'react';
import { motion } from 'framer-motion';
import { useParams, useNavigate } from 'react-router-dom';

const BlogInfo = () => {
  const { id } = useParams();
  const navigate = useNavigate();
  
  // In a real app, you would fetch blog data based on the ID
  const blog = {
    id: 1,
    title: "UX Principles",
    content: `UX design is guided by key principles that ensure a seamless and intuitive user experience. 
              Prioritizing user-centered design helps in understanding and addressing user needs effectively. 
              Consistency in design elements improves usability, while simplicity keeps interfaces clutter-free 
              and easy to navigate. Ensuring accessibility makes the experience inclusive for all users.`,
    tags: "#Uiux #Figma",
    imageUrl: "https://placehold.co/516x595",
    referenceLink: "https://www.nngroup.com/"
  };

  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0 }}
      className="w-full min-h-screen bg-white px-4 sm:px-8 md:px-12 lg:px-24 py-12 md:py-24"
    >
      <div className="max-w-6xl mx-auto">
        <div className="flex flex-col lg:flex-row gap-8 lg:gap-12">
          {/* Blog Image */}
          <motion.div
            initial={{ x: -50 }}
            animate={{ x: 0 }}
            className="w-full lg:w-1/2"
          >
            <img 
              className="w-full h-auto max-h-[600px] object-cover rounded-xl shadow-lg"
              src={blog.imageUrl} 
              alt={blog.title} 
            />
          </motion.div>

          {/* Blog Content */}
          <motion.div 
            initial={{ x: 50 }}
            animate={{ x: 0 }}
            className="w-full lg:w-1/2 flex flex-col gap-6"
          >
            <h1 className="text-3xl sm:text-4xl md:text-5xl font-semibold font-poppins">
              {blog.title}
            </h1>
            
            <p className="text-base md:text-lg font-normal font-poppins text-gray-700">
              {blog.content}
            </p>
            
            <div className="mt-4 flex flex-col gap-4">
              <a 
                href={blog.referenceLink} 
                target="_blank"
                rel="noopener noreferrer"
                className="text-blue-600 hover:text-blue-800 text-lg font-medium transition-colors"
              >
                {blog.referenceLink}
              </a>
              <p className="text-lg font-medium">
                {blog.tags}
              </p>
            </div>

            <div className='flex gap-4'>
            <button
              onClick={() => navigate(-1)}
              className="mt-8 px-8 py-3 bg-[#104734] text-white rounded-lg hover:bg-gray-800 transition-colors self-start"
            >
              Edit
            </button>
            <button
              onClick={() => navigate(-1)}
              className="mt-8 px-8 py-3 bg-black text-white rounded-lg hover:bg-gray-800 transition-colors self-start"
            >
              Back to Blogs
            </button>
            </div>
          </motion.div>
        </div>
      </div>
    </motion.div>
  );
};

export default BlogInfo;