import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { useNavigate } from 'react-router-dom';
import blogApi from '../services/blogApi';  // ✅ Default import
import Deletevlog from '../components/Deletevlog';

const AdminPage = () => {
  const [isAuthenticated, setIsAuthenticated] = useState(false);
  const [credentials, setCredentials] = useState({
    uid: '',
    password: ''
  });
  const [newBlog, setNewBlog] = useState({
    title: '',
    content: '',
    img: null,
    hashtag: '',
    links: ''
  });
  const [error, setError] = useState('');
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [successMessage, setSuccessMessage] = useState('');
  const navigate = useNavigate();

  const handleLogin = async (e) => {
    e.preventDefault();
    if (credentials.uid === 'admin' && credentials.password === 'admin123') {
      setIsAuthenticated(true);
      setError('');
    } else {
      setError('Invalid credentials');
    }
  };

  const handleFileChange = (e) => {
    setNewBlog({...newBlog, img: e.target.files[0]});
  };

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setNewBlog({...newBlog, [name]: value});
  };

  const handleBlogSubmit = async (e) => {
    e.preventDefault();
    setIsSubmitting(true);
    setError('');
    setSuccessMessage('');

    try {
      const formData = new FormData();
      formData.append('title', newBlog.title);
      formData.append('content', newBlog.content);
      formData.append('hashtag', newBlog.hashtag);
      formData.append('links', newBlog.links);
      formData.append('img', newBlog.img);

      const response = await blogApi.createBlog(formData);
      
      setSuccessMessage(response.data.message);
      // Reset form
      setNewBlog({
        title: '',
        content: '',
        img: null,
        hashtag: '',
        links: ''
      });
    } catch (err) {
      setError(err.response?.data?.message || 'Failed to create blog');
    } finally {
      setIsSubmitting(false);
    }
  };

  if (!isAuthenticated) {
    return (
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        className="min-h-screen bg-white flex items-center justify-center px-4"
      >
        <div className="w-full max-w-md">
          <motion.div
            initial={{ y: -20 }}
            animate={{ y: 0 }}
            className="bg-white text-black p-8 rounded-lg shadow-xl"
          >
            <h1 className="text-2xl font-bold mb-6 text-center">Admin Login</h1>
            {error && <p className="text-red-500 mb-4 text-center">{error}</p>}
            <form onSubmit={handleLogin}>
              <div className="mb-4">
                <label className="block text-sm font-medium mb-1">Username</label>
                <input
                  type="text"
                  name="uid"
                  value={credentials.uid}
                  onChange={(e) => setCredentials({...credentials, uid: e.target.value})}
                  className="w-full px-3 py-2 text-black rounded border border-gray-300"
                  required
                />
              </div>
              <div className="mb-6">
                <label className="block text-sm font-medium mb-1">Password</label>
                <input
                  type="password"
                  name="password"
                  value={credentials.password}
                  onChange={(e) => setCredentials({...credentials, password: e.target.value})}
                  className="w-full px-3 py-2 text-black rounded border border-gray-300"
                  required
                />
              </div>
              <button
                type="submit"
                className="w-full bg-white text-black py-2 rounded font-medium hover:bg-gray-100 transition"
              >
                Login
              </button>
            </form>
            
          </motion.div>
        </div>
       
      </motion.div>
    );
  }

  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      className="min-h-screen bg-white py-12 px-4 sm:px-6 lg:px-8"
    >
      <div className="max-w-3xl mx-auto">
        <div className="flex justify-between items-center mb-8">
          <h1 className="text-2xl font-bold text-black">Create New Blog</h1>
          <button
            onClick={() => navigate(-1)}
            className="px-4 py-2 bg-black text-white rounded hover:bg-gray-800 transition"
          >
            Back
          </button>
        </div>

        {successMessage && (
          <div className="mb-6 p-4 bg-green-100 text-green-800 rounded">
            {successMessage}
          </div>
        )}
        {error && (
          <div className="mb-6 p-4 bg-red-100 text-red-800 rounded">
            {error}
          </div>
        )}

        <form onSubmit={handleBlogSubmit} className="space-y-6">
          <div>
            <label className="block text-sm font-medium text-black mb-1">Blog Image</label>
            <input
              type="file"
              name="img"
              onChange={handleFileChange}
              className="w-full px-3 py-2 border border-gray-300 rounded text-black"
              accept="image/*"
              required
            />
          </div>

          <div>
            <label className="block text-sm font-medium text-black mb-1">Title</label>
            <input
              type="text"
              name="title"
              value={newBlog.title}
              onChange={handleInputChange}
              className="w-full px-3 py-2 border border-gray-300 rounded text-black"
              placeholder="Blog title"
              required
            />
          </div>

          <div>
            <label className="block text-sm font-medium text-black mb-1">Content</label>
            <textarea
              name="content"
              value={newBlog.content}
              onChange={handleInputChange}
              className="w-full px-3 py-2 border border-gray-300 rounded text-black min-h-[150px]"
              placeholder="Blog content..."
              required
            />
          </div>

          <div>
            <label className="block text-sm font-medium text-black mb-1">Hashtags (comma separated)</label>
            <input
              type="text"
              name="hashtag"
              value={newBlog.hashtag}
              onChange={handleInputChange}
              className="w-full px-3 py-2 border border-gray-300 rounded text-black"
              placeholder="#UIUX, #Design, #Figma"
              required
            />
          </div>

          <div>
            <label className="block text-sm font-medium text-black mb-1">Reference Links (comma separated)</label>
            <input
              type="text"
              name="links"
              value={newBlog.links}
              onChange={handleInputChange}
              className="w-full px-3 py-2 border border-gray-300 rounded text-black"
              placeholder="https://example.com, https://another.com"
              required
            />
          </div>

          <div className="flex justify-end">
            <button
              type="submit"
              disabled={isSubmitting}
              className={`px-6 py-2 bg-black text-white rounded font-medium hover:bg-gray-800 transition ${
                isSubmitting ? 'opacity-50 cursor-not-allowed' : ''
              }`}
            >
              {isSubmitting ? 'Publishing...' : 'Publish Blog'}
            </button>
          </div>
        </form>
      </div>
      <Deletevlog/>
    </motion.div>
  );
};

export default AdminPage;