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
        <div className="bg-purple-900/10 backdrop-blur-xl rounded-xl p-8 shadow-xl border border-purple-800/30 hover:bg-purple-900/20 transition-colors">
          <h2 className="text-4xl font-bold mb-8 text-center text-white">About Me</h2>
          
          <div className="grid md:grid-cols-2 gap-8">
            <div>
              <h3 className="text-2xl font-semibold mb-4 text-purple-200">Education</h3>
              <div className="space-y-4">
                <div>
                  <h4 className="text-xl font-medium text-white">Amity University Noida</h4>
                  <p className="text-purple-100/80">B. Tech. Bioinformatics, Minor in Data Science</p>
                  <p className="text-purple-100/80">July 2022 - June 2026</p>
                  <p className="text-purple-300">CGPA: 8.0</p>
                </div>
                <div>
                  <h4 className="text-xl font-medium text-white">Delhi Public School</h4>
                  <p className="text-purple-100/80">High School</p>
                  <p className="text-purple-100/80">Class 12th: 76%</p>
                  <p className="text-purple-100/80">Class 10th: 80%</p>
                </div>
              </div>
            </div>
            
            <div>
              <h3 className="text-2xl font-semibold mb-4 text-purple-200">Professional Summary</h3>
              <p className="text-purple-100/80 mb-4">
                I am a passionate Bioinformatics student with a strong foundation in Data Science. 
                My expertise spans across various programming languages and bioinformatics tools, 
                allowing me to bridge the gap between biological data and computational analysis.
              </p>
              <p className="text-purple-100/80">
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