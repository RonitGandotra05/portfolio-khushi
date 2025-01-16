import React from 'react';
import { motion } from 'framer-motion';

const Contact = () => {
  return (
    <section id="contact" className="relative z-20 py-20">
      <div className="container mx-auto px-4">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          className="mx-auto"
        >
          <h2 className="text-4xl font-bold text-center mb-8 text-white">Get in Touch</h2>
          <p className="text-white/80 text-center mb-12">
            Have a question or want to work together? Feel free to reach out!
          </p>

          <div className="bg-white/5 backdrop-blur-xl rounded-xl p-8 border border-white/10 hover:bg-white/10 transition-all duration-300">
            <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
              {/* Contact Info */}
              <div className="space-y-6">
                <motion.a 
                  href="mailto:khushigupta.work@gmail.com"
                  className="flex items-center gap-4 text-white/80 hover:text-white transition-all duration-300 group"
                  whileHover={{ x: 5 }}
                >
                  <div className="w-12 h-12 rounded-xl bg-white/10 flex items-center justify-center group-hover:bg-white/20 transition-all duration-300">
                    <svg className="w-6 h-6" fill="currentColor" viewBox="0 0 24 24">
                      <path d="M20 4H4c-1.1 0-2 .9-2 2v12c0 1.1.9 2 2 2h16c1.1 0 2-.9 2-2V6c0-1.1-.9-2-2-2zm0 4l-8 5-8-5V6l8 5 8-5v2z"/>
                    </svg>
                  </div>
                  <div>
                    <h3 className="font-semibold mb-1">Email</h3>
                    <span className="text-sm">khushigupta.work@gmail.com</span>
                  </div>
                </motion.a>

                <motion.a 
                  href="https://www.linkedin.com/in/khushi-gupta-2125b02a3/"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-center gap-4 text-white/80 hover:text-white transition-all duration-300 group"
                  whileHover={{ x: 5 }}
                >
                  <div className="w-12 h-12 rounded-xl bg-white/10 flex items-center justify-center group-hover:bg-white/20 transition-all duration-300">
                    <svg className="w-6 h-6" fill="currentColor" viewBox="0 0 24 24">
                      <path d="M20.447 20.452h-3.554v-5.569c0-1.328-.027-3.037-1.852-3.037-1.853 0-2.136 1.445-2.136 2.939v5.667H9.351V9h3.414v1.561h.046c.477-.9 1.637-1.85 3.37-1.85 3.601 0 4.267 2.37 4.267 5.455v6.286zM5.337 7.433c-1.144 0-2.063-.926-2.063-2.065 0-1.138.92-2.063 2.063-2.063 1.14 0 2.064.925 2.064 2.063 0 1.139-.925 2.065-2.064 2.065zm1.782 13.019H3.555V9h3.564v11.452zM22.225 0H1.771C.792 0 0 .774 0 1.729v20.542C0 23.227.792 24 1.771 24h20.451C23.2 24 24 23.227 24 22.271V1.729C24 .774 23.2 0 22.222 0h.003z"/>
                    </svg>
                  </div>
                  <div>
                    <h3 className="font-semibold mb-1">LinkedIn</h3>
                    <span className="text-sm">Khushi Gupta</span>
                  </div>
                </motion.a>

                <motion.a 
                  href="https://github.com/khushii1412"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-center gap-4 text-white/80 hover:text-white transition-all duration-300 group"
                  whileHover={{ x: 5 }}
                >
                  <div className="w-12 h-12 rounded-xl bg-white/10 flex items-center justify-center group-hover:bg-white/20 transition-all duration-300">
                    <svg className="w-6 h-6" fill="currentColor" viewBox="0 0 24 24">
                      <path fillRule="evenodd" d="M12 2C6.477 2 2 6.477 2 12c0 4.42 2.87 8.17 6.84 9.5.5.08.66-.23.66-.5v-1.69c-2.77.6-3.36-1.34-3.36-1.34-.46-1.16-1.11-1.47-1.11-1.47-.91-.62.07-.6.07-.6 1 .07 1.53 1.03 1.53 1.03.87 1.52 2.34 1.07 2.91.83.09-.65.35-1.09.63-1.34-2.22-.25-4.55-1.11-4.55-4.92 0-1.11.38-2 1.03-2.71-.1-.25-.45-1.29.1-2.64 0 0 .84-.27 2.75 1.02.79-.22 1.65-.33 2.5-.33.85 0 1.71.11 2.5.33 1.91-1.29 2.75-1.02 2.75-1.02.55 1.35.2 2.39.1 2.64.65.71 1.03 1.6 1.03 2.71 0 3.82-2.34 4.66-4.57 4.91.36.31.69.92.69 1.85V21c0 .27.16.59.67.5C19.14 20.16 22 16.42 22 12A10 10 0 0012 2z" clipRule="evenodd"/>
                    </svg>
                  </div>
                  <div>
                    <h3 className="font-semibold mb-1">GitHub</h3>
                    <span className="text-sm">@khushii1412</span>
                  </div>
                </motion.a>
              </div>

              {/* Location */}
              <div className="space-y-6">
                <div className="flex items-center gap-4 text-white/80">
                  <div className="w-12 h-12 rounded-xl bg-white/10 flex items-center justify-center">
                    <svg className="w-6 h-6" fill="currentColor" viewBox="0 0 24 24">
                      <path fillRule="evenodd" d="M12 2C8.13 2 5 5.13 5 9c0 5.25 7 13 7 13s7-7.75 7-13c0-3.87-3.13-7-7-7zm0 9.5c-1.38 0-2.5-1.12-2.5-2.5s1.12-2.5 2.5-2.5 2.5 1.12 2.5 2.5-1.12 2.5-2.5 2.5z" clipRule="evenodd"/>
                    </svg>
                  </div>
                  <div>
                    <h3 className="font-semibold mb-1">Location</h3>
                    <span className="text-sm">Noida, India</span>
                  </div>
                </div>

                <div className="mt-8 p-6 bg-white/5 rounded-xl border border-white/10">
                  <p className="text-white/70 text-sm">
                    I'm always interested in hearing about new opportunities, collaborations, or just having a chat about bioinformatics and data science.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default Contact; 