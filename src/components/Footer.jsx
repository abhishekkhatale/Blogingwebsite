import React from 'react';
import { motion } from 'framer-motion';

const Footer = () => {
  // Animation variants
  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        when: "beforeChildren",
        staggerChildren: 0.2
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

  return (
    <motion.footer
      initial="hidden"
      whileInView="visible"
      viewport={{ once: true, margin: "-50px" }}
      variants={containerVariants}
      className="w-full px-4 sm:px-6 md:px-8 lg:px-11 py-6 bg-[#e6e6e6]"
    >
      <div className="container mx-auto">
        <motion.div 
          variants={containerVariants}
          className="flex flex-col md:flex-row justify-between items-center md:items-start gap-6 md:gap-0"
        >
          {/* Left Section */}
          <motion.div 
            variants={itemVariants}
            className="w-full md:w-auto max-w-[412px] flex flex-col items-center md:items-start gap-4"
          >
            <motion.div 
              variants={itemVariants}
              className="flex flex-col items-center md:items-start"
            >
              <motion.h2 
                whileHover={{ scale: 1.02 }}
                className="text-center md:text-left"
              >
                <span className="text-[#104734] text-3xl sm:text-4xl lg:text-[40px] font-semibold font-poppins">UX</span>
                <span className="text-black text-3xl sm:text-4xl lg:text-[40px] font-semibold font-poppins"> Blogs</span>
              </motion.h2>
              <motion.p 
                variants={itemVariants}
                className="text-black text-lg lg:text-xl font-normal font-poppins mt-2"
              >
                Abhishek Khatale
              </motion.p>
            </motion.div>
            <motion.p 
              variants={itemVariants}
              className="text-[#5f5f5f] text-xs sm:text-sm font-normal font-poppins text-center md:text-left"
            >
              This website for learning purpose, it covers statemanagement, propdrilling axios crud operations.
            </motion.p>
          </motion.div>

          {/* Right Section */}
          <motion.div 
            variants={itemVariants}
            className="w-full md:w-auto max-w-[164px] flex flex-col items-center gap-4 sm:gap-6 md:gap-[27px]"
          >
            <motion.div 
              variants={itemVariants}
              className="flex gap-4 sm:gap-6 md:gap-[19px]"
            >
              <motion.a
                whileHover={{ scale: 1.1 }}
                href="GitHub.png"
                className="text-black text-sm sm:text-base font-medium font-poppins hover:text-[#104734] transition-colors"
              >
                Home
              </motion.a>
              <motion.a
                whileHover={{ scale: 1.1 }}
                href="#"
                className="text-black text-sm sm:text-base font-medium font-poppins hover:text-[#104734] transition-colors"
              >
                Admin
              </motion.a>
            </motion.div>
            <motion.div 
              variants={itemVariants}
              className="flex gap-3 sm:gap-4 md:gap-[13px]"
            >
              <motion.a
                whileHover={{ y: -3 }}
                href="#"
                aria-label="LinkedIn"
              >
                <img 
                  className="w-8 h-8 sm:w-10 sm:h-10 md:w-[46px] md:h-[46px] hover:opacity-80 transition-opacity" 
                  src="LinkedIn.png" 
                  alt="LinkedIn" 
                />
              </motion.a>
              <motion.a
                whileHover={{ y: -3 }}
                href="#"
                aria-label="GitHub"
              >
                <img 
                  className="w-8 h-8 sm:w-10 sm:h-10 md:w-[46px] md:h-[46px] hover:opacity-80 transition-opacity" 
                  src="GitHub.png" 
                  alt="GitHub" 
                />
              </motion.a>
              <motion.a
                whileHover={{ y: -3 }}
                href="#"
                aria-label="Figma"
              >
                <img 
                  className="w-8 h-8 sm:w-10 sm:h-10 md:w-[46px] md:h-[46px] hover:opacity-80 transition-opacity" 
                  src="Figma.png" 
                  alt="Figma" 
                />
              </motion.a>
            </motion.div>
          </motion.div>
        </motion.div>
      </div>
    </motion.footer>
  );
};

export default Footer;