import React from 'react';
import { motion } from 'framer-motion';

const About = () => {
  return (
    <section id="about" className="relative z-20 py-20">
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8 }}
        className="container mx-auto px-4"
      >
        <div className="bg-white/5 backdrop-blur-xl rounded-xl p-8 shadow-xl border border-white/10 hover:bg-white/10 transition-colors">
          <h2 className="text-4xl font-bold mb-12 text-center text-white">About Me</h2>
          
          <div className="grid md:grid-cols-3 gap-8">
            {/* Image Column */}
            <div className="flex flex-col items-center space-y-6">
              <motion.div
                initial={{ opacity: 0, scale: 0.5 }}
                whileInView={{ opacity: 1, scale: 1 }}
                transition={{ duration: 0.5 }}
                className="relative w-72 h-72 rounded-full overflow-hidden border-4 border-white/20 shadow-2xl"
                style={{ boxShadow: '0 0 20px rgba(255,255,255,0.15)' }}
              >
                <img
                  src="/images/Khushi.jpeg"
                  alt="Khushi Gupta"
                  className="w-full h-full object-cover"
                />
              </motion.div>
              <div className="flex items-center justify-center gap-4">
                <a
                  href="https://www.linkedin.com/in/khushi-gupta-2125b02a3/"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-white/80 hover:text-white transition-colors"
                >
                  <svg className="w-6 h-6" fill="currentColor" viewBox="0 0 24 24">
                    <path d="M20.447 20.452h-3.554v-5.569c0-1.328-.027-3.037-1.852-3.037-1.853 0-2.136 1.445-2.136 2.939v5.667H9.351V9h3.414v1.561h.046c.477-.9 1.637-1.85 3.37-1.85 3.601 0 4.267 2.37 4.267 5.455v6.286zM5.337 7.433c-1.144 0-2.063-.926-2.063-2.065 0-1.138.92-2.063 2.063-2.063 1.14 0 2.064.925 2.064 2.063 0 1.139-.925 2.065-2.064 2.065zm1.782 13.019H3.555V9h3.564v11.452zM22.225 0H1.771C.792 0 0 .774 0 1.729v20.542C0 23.227.792 24 1.771 24h20.451C23.2 24 24 23.227 24 22.271V1.729C24 .774 23.2 0 22.222 0h.003z"/>
                  </svg>
                </a>
                <a
                  href="https://github.com/khushii1412"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-white/80 hover:text-white transition-colors"
                >
                  <svg className="w-6 h-6" fill="currentColor" viewBox="0 0 24 24">
                    <path fillRule="evenodd" d="M12 2C6.477 2 2 6.477 2 12c0 4.42 2.87 8.17 6.84 9.5.5.08.66-.23.66-.5v-1.69c-2.77.6-3.36-1.34-3.36-1.34-.46-1.16-1.11-1.47-1.11-1.47-.91-.62.07-.6.07-.6 1 .07 1.53 1.03 1.53 1.03.87 1.52 2.34 1.07 2.91.83.09-.65.35-1.09.63-1.34-2.22-.25-4.55-1.11-4.55-4.92 0-1.11.38-2 1.03-2.71-.1-.25-.45-1.29.1-2.64 0 0 .84-.27 2.75 1.02.79-.22 1.65-.33 2.5-.33.85 0 1.71.11 2.5.33 1.91-1.29 2.75-1.02 2.75-1.02.55 1.35.2 2.39.1 2.64.65.71 1.03 1.6 1.03 2.71 0 3.82-2.34 4.66-4.57 4.91.36.31.69.92.69 1.85V21c0 .27.16.59.67.5C19.14 20.16 22 16.42 22 12A10 10 0 0012 2z" clipRule="evenodd" />
                  </svg>
                </a>
              </div>
            </div>

            {/* Education Column */}
            <div>
              <h3 className="text-2xl font-semibold mb-4 text-white">Education</h3>
              <div className="space-y-4">
                <div>
                  <h4 className="text-xl font-medium text-white">Amity University Noida</h4>
                  <p className="text-white/80">B. Tech. Bioinformatics, Minor in Data Science</p>
                  <p className="text-white/80">July 2022 - June 2026</p>
                  <p className="text-white/90">CGPA: 8.0</p>
                </div>
                <div>
                  <h4 className="text-xl font-medium text-white">Delhi Public School</h4>
                  <p className="text-white/80">High School</p>
                  <p className="text-white/80">Class 12th: 76%</p>
                  <p className="text-white/80">Class 10th: 80%</p>
                </div>
              </div>
            </div>
            
            {/* Professional Summary Column */}
            <div>
              <h3 className="text-2xl font-semibold mb-4 text-white">Professional Summary</h3>
              <p className="text-white/80 mb-4">
                I am a passionate Bioinformatics student with a strong foundation in Data Science. 
                My expertise spans across various programming languages and bioinformatics tools, 
                allowing me to bridge the gap between biological data and computational analysis.
              </p>
              <p className="text-white/80">
                Currently serving as the Vice President of Praedictio - The Bioinformatics Club, 
                I lead strategic planning and support fellow students in their professional development. 
                My experience includes working with computational genomics and developing machine 
                learning solutions for biological data analysis.
              </p>
            </div>
          </div>
        </div>
      </motion.div>
    </section>
  );
};

export default About; 