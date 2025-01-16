import React from 'react';
import { motion } from 'framer-motion';
import { TypeAnimation } from 'react-type-animation';

const Hero = () => {
  return (
    <section className="relative h-screen flex items-center justify-start overflow-hidden px-4 sm:px-6 lg:px-8">
      {/* Background Gradients */}
      <div className="absolute inset-0">
        <div className="absolute inset-0 bg-gradient-radial from-gray-900/20 via-gray-800/10 to-transparent" />
        <div className="absolute inset-0 bg-gradient-to-r from-gray-900/10 via-transparent to-gray-800/10" />
      </div>

      {/* Text Content */}
      <div className="relative z-30 w-full max-w-4xl ml-4 sm:ml-6 lg:ml-8">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
        >
          <motion.h1 
            className="text-6xl md:text-8xl font-bold mb-6 whitespace-nowrap"
            initial={{ opacity: 0, x: -50 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 1, delay: 0.2 }}
          >
            <span className="bg-gradient-to-r from-white via-gray-100 to-gray-200 text-transparent bg-clip-text drop-shadow-[0_1.2px_1.2px_rgba(0,0,0,0.8)]">
              Hi, I'm Khushi Gupta
            </span>
          </motion.h1>
          
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 1, delay: 0.4 }}
          >
            <TypeAnimation
              sequence={[
                'Data Scientist',
                2000,
                'Bioinformatics Student',
                2000,
                'Machine Learning Developer',
                2000,
              ]}
              wrapper="h2"
              className="text-3xl md:text-4xl text-white font-semibold"
              repeat={Infinity}
              cursor={true}
            />
          </motion.div>

          <motion.p 
            className="mt-8 text-xl text-white max-w-2xl"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 1, delay: 0.6 }}
          >
            Exploring the intersection of Biology and Technology through innovative solutions
            and data-driven approaches. Passionate about leveraging AI and machine learning
            to solve complex biological problems.
          </motion.p>

          <motion.div 
            className="flex flex-col sm:flex-row gap-6 mt-12"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 1, delay: 0.8 }}
          >
            <motion.a
              href="https://drive.google.com/file/d/1xWQpCJy9YjM9_NyN_TEuxqYIYu6vY6gy/view?usp=drive_link"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center justify-center px-8 py-4 text-lg font-medium rounded-lg text-white bg-gray-800/80 hover:bg-gray-700/80 transition-all transform hover:scale-105 hover:shadow-lg group backdrop-blur-sm"
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
            >
              View My Resume
              <svg
                className="w-6 h-6 ml-2 transform transition-transform group-hover:translate-x-1"
                fill="none"
                stroke="currentColor"
                viewBox="0 0 24 24"
              >
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 8l4 4m0 0l-4 4m4-4H3" />
              </svg>
            </motion.a>

            <motion.a
              href="#contact"
              className="inline-flex items-center justify-center px-8 py-4 text-lg font-medium rounded-lg text-white border-2 border-white/30 hover:bg-white/10 transition-all transform hover:scale-105 hover:shadow-lg group backdrop-blur-sm"
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
            >
              Contact Me
              <svg
                className="w-6 h-6 ml-2 transform transition-transform group-hover:translate-x-1"
                fill="none"
                stroke="currentColor"
                viewBox="0 0 24 24"
              >
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M20 12H4m0 0l6-6m-6 6l6 6" />
              </svg>
            </motion.a>
          </motion.div>
        </motion.div>
      </div>

      {/* Scroll Indicator */}
      <motion.div
        initial={{ opacity: 0, y: 10 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ 
          duration: 1,
          repeat: Infinity,
          repeatType: "reverse"
        }}
        className="absolute bottom-12 left-1/2 transform -translate-x-1/2 z-30"
      >
        <div className="w-8 h-12 border-2 border-white rounded-full flex justify-center">
          <motion.div 
            className="w-2 h-3 bg-white rounded-full mt-2"
            animate={{ 
              y: [0, 12, 0],
            }}
            transition={{ 
              duration: 1.5,
              repeat: Infinity,
              ease: "easeInOut"
            }}
          />
        </div>
      </motion.div>
    </section>
  );
};

export default Hero; 