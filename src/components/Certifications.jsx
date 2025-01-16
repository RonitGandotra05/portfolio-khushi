import React from 'react';
import { motion } from 'framer-motion';

const certifications = [
  {
    title: "Python for Data Science",
    issuer: "Indian Institute of Technology Kharagpur",
    link: "#"
  },
  {
    title: "Introduction To Machine Learning",
    issuer: "Indian Institute of Technology Kharagpur",
    link: "#"
  },
  {
    title: "Data Science for Engineers",
    issuer: "Indian Institute of Technology Kharagpur",
    link: "#"
  },
  {
    title: "Soft Skill Development",
    issuer: "Indian Institute of Technology Kharagpur",
    link: "#"
  }
];

const Certifications = () => {
  return (
    <section id="certifications" className="relative z-20 py-20">
      <div className="container mx-auto px-4">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          className="mx-auto"
        >
          <h2 className="text-4xl font-bold text-center mb-12 text-white">Certifications</h2>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-2 gap-8">
            {certifications.map((cert, index) => (
              <motion.a
                key={index}
                href={cert.link}
                target="_blank"
                rel="noopener noreferrer"
                className="block group"
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                whileHover={{ y: -5 }}
              >
                <div className="bg-white/5 backdrop-blur-xl rounded-xl p-8 border border-white/10 shadow-xl transition-all duration-300 hover:bg-white/10 hover:shadow-2xl h-full">
                  <div className="flex flex-col h-full">
                    <h3 className="text-2xl font-bold text-white mb-3 group-hover:text-white/90">
                      {cert.title}
                    </h3>
                    <p className="text-white/70 text-base">
                      Issued by {cert.issuer}
                    </p>
                    <div className="mt-auto pt-4">
                      <span className="inline-flex items-center text-white/60 text-sm group-hover:text-white/80 transition-colors">
                        View Certificate
                        <svg className="w-4 h-4 ml-2 transform group-hover:translate-x-1 transition-transform" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 8l4 4m0 0l-4 4m4-4H3" />
                        </svg>
                      </span>
                    </div>
                  </div>
                </div>
              </motion.a>
            ))}
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default Certifications; 