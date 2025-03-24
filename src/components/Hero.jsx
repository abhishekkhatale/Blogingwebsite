import React from 'react';
import { motion } from 'framer-motion';

const Hero = () => {
  // Animation variants
  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.2,
        delayChildren: 0.3
      }
    }
  };

  const itemVariants = {
    hidden: { y: 20, opacity: 0 },
    visible: {
      y: 0,
      opacity: 1,
      transition: {
        type: "spring",
        stiffness: 100,
        damping: 10
      }
    }
  };

  const imageVariants = {
    hidden: { x: 50, opacity: 0 },
    visible: {
      x: 0,
      opacity: 1,
      transition: {
        type: "spring",
        stiffness: 60,
        delay: 0.5
      }
    }
  };

  return (
    <motion.div
      initial="hidden"
      animate="visible"
      variants={containerVariants}
      className="w-full flex flex-col lg:flex-row justify-between items-center lg:items-end gap-8 lg:gap-[73px] px-4 md:px-8"
    >
      {/* Left Content */}
      <motion.div 
        variants={containerVariants}
        className="w-full lg:w-[624px] flex flex-col items-start gap-8 md:gap-12 lg:gap-[66px]"
      >
        {/* Welcome Section */}
        <motion.div 
          variants={containerVariants}
          className="w-full flex flex-col items-center gap-6 md:gap-8 lg:gap-[41px]"
        >
          <motion.div variants={itemVariants} className="w-full flex flex-col items-center">
            <motion.h2 
              variants={itemVariants}
              className="w-full text-black text-2xl sm:text-3xl md:text-[40px] font-normal font-poppins text-center"
            >
              Welcome To
            </motion.h2>
            <motion.h1 variants={itemVariants} className="w-full text-center">
              <span className="text-[#104734] text-4xl sm:text-5xl md:text-6xl lg:text-7xl xl:text-8xl font-semibold font-poppins">
                UX
              </span>
              <span className="text-black text-4xl sm:text-5xl md:text-6xl lg:text-7xl xl:text-8xl font-semibold font-poppins">
                {' '}Blogs
              </span>
            </motion.h1>
          </motion.div>

          <motion.p 
            variants={itemVariants}
            className="w-full text-[#676767] text-xs sm:text-[13px] font-normal font-poppins text-center max-w-2xl"
          >
            Dive into the world of user experience design, where creativity meets functionality. Whether you're a designer, developer, or just passionate about making digital interactions seamless, our blog is your go-to resource. Explore insightful articles, expert tips, and the latest trends to craft intuitive and engaging experiences. Let's design a better digital world
          </motion.p>

          <motion.button
            variants={itemVariants}
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
            className="px-8 sm:px-12 md:px-16 py-2 sm:py-3 md:py-[15px] bg-black rounded-xl text-white text-sm sm:text-base font-semibold font-poppins hover:bg-gray-800 transition-colors"
          >
            Read Blogs
          </motion.button>
        </motion.div>

        {/* About Us Card */}
        <motion.div
          variants={itemVariants}
          whileHover={{ y: -5 }}
          className="w-full p-2 sm:p-2.5 rounded-[10px] border border-[#717171] flex flex-col gap-2 sm:gap-2.5"
        >
          <div className="w-full flex flex-col sm:flex-row items-center gap-4 sm:gap-[30px]">
            <motion.img 
              initial={{ scale: 0.9 }}
              animate={{ scale: 1 }}
              transition={{ type: "spring", delay: 0.7 }}
              className="w-full sm:w-[187px] h-auto sm:h-[188px] rounded-[10px] object-cover"
              src="a.jpg" 
              alt="About us" 
            />
            <div className="w-full sm:w-96 flex flex-col gap-1 sm:gap-1.5">
              <motion.h3 
                initial={{ x: -20 }}
                animate={{ x: 0 }}
                transition={{ type: "spring", delay: 0.8 }}
                className="text-black text-2xl sm:text-3xl md:text-4xl font-normal font-poppins"
              >
                About us
              </motion.h3>
              <motion.p 
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{ delay: 0.9 }}
                className="text-black text-xs font-normal font-poppins"
              >
                We bring you the latest UI/UX blogs, covering trends, best practices, and design insights. Stay updated and enhance your skills with expert tips and innovative ideas.
              </motion.p>
            </div>
          </div>
        </motion.div>
      </motion.div>

      {/* Hero Image - Only shown on larger screens */}
      <motion.img 
        variants={imageVariants}
        className="hidden lg:block w-full max-w-[516px] h-auto lg:h-[734px] rounded-[10px] object-cover mt-8 lg:mt-0"
        src="h.jpg" 
        alt="UX Design" 
      />
    </motion.div>
  );
};

export default Hero;