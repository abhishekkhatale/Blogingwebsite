import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { Link } from 'react-router-dom';
import { FaBars, FaTimes } from 'react-icons/fa';

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <nav className="w-full bg-white shadow-sm sticky top-0 z-50">
      {/* Desktop Navbar */}
      <div className="container mx-auto px-4 py-4 hidden md:flex justify-between items-center">
        <Link to="/" className="text-[#104734] text-2xl font-semibold font-poppins hover:scale-105 transition-transform">
          UX blogs
        </Link>
        <div className="flex items-center gap-6 lg:gap-[23px]">
          <Link to="/" className="text-black text-lg lg:text-xl font-medium font-poppins hover:text-[#104734] transition-colors">
            Home
          </Link>
          <Link to="/admin" className="text-[#696969] text-lg lg:text-xl font-medium font-poppins hover:text-[#104734] transition-colors">
            Admin
          </Link>
        </div>
      </div>

      {/* Mobile Navbar */}
      <div className="md:hidden container mx-auto px-4 py-4">
        <div className="flex justify-between items-center">
          <Link to="/" className="text-[#104734] text-2xl font-semibold font-poppins">
            UX blogs
          </Link>
          <button 
            onClick={() => setIsOpen(!isOpen)}
            className="text-black focus:outline-none"
            aria-label="Toggle menu"
          >
            {isOpen ? <FaTimes size={24} /> : <FaBars size={24} />}
          </button>
        </div>

        {/* Mobile Menu */}
        {isOpen && (
          <div className="mt-4 pb-4 flex flex-col gap-4 border-t border-gray-200 pt-4">
            <Link 
              to="/" 
              className="text-black text-lg font-medium font-poppins hover:text-[#104734] transition-colors"
              onClick={() => setIsOpen(false)}
            >
              Home
            </Link>
            <Link 
              to="/admin" 
              className="text-[#696969] text-lg font-medium font-poppins hover:text-[#104734] transition-colors"
              onClick={() => setIsOpen(false)}
            >
              Admin
            </Link>
          </div>
        )}
      </div>
    </nav>
  );
};

export default Navbar;