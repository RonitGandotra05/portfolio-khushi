import React from 'react';
import { motion } from 'framer-motion';

const projects = [
  {
    title: "Multi-Armed Bandit Recommendation System",
    description: "Developed a recommendation system using the Multi-Armed Bandit algorithm to optimize video recommendations based on user interactions. The system dynamically learns and adapts to user preferences, enhancing content recommendations for improved user satisfaction.",
    tech: ["Python", "Machine Learning", "Recommendation Systems"],
    github: "https://github.com/RonitGandotra05/Multi-Armed-Bandit-Recommendation-System"
  },
  {
    title: "NLP based Sentiment Analysis",
    description: "Developed an NLP-based sentiment analysis pipeline to analyze customer chat data. The project involves preprocessing text data, performing sentiment analysis, and visualizing results using Python, Pandas, NLTK, TextBlob.",
    tech: ["Python", "NLTK", "TextBlob", "Pandas"],
    github: "https://github.com/RonitGandotra05/NLP-based-Sentiment-Analysis"
  },
  {
    title: "Metabolic Pathways Analysis",
    description: "Analysis of metabolic pathways implicated in antifungal drug resistance using genomic and transcriptomic data. Utilized KEGG and Reactome for pathway analysis.",
    tech: ["KEGG", "Reactome", "Bioinformatics"]
  }
];

const Projects = () => {
  return (
    <section id="projects" className="relative z-20 py-20">
      <div className="container mx-auto px-4">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
        >
          <h2 className="text-4xl font-bold text-center mb-16 text-white">Projects</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {projects.map((project, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: index * 0.2 }}
                className="bg-purple-900/10 backdrop-blur-xl rounded-xl p-6 shadow-xl border border-purple-800/30 hover:bg-purple-900/20 transition-all duration-300 hover:shadow-2xl hover:-translate-y-1"
              >
                <h3 className="text-xl font-bold mb-4 text-purple-200">{project.title}</h3>
                <p className="text-purple-100/80 mb-6">{project.description}</p>
                <div className="flex flex-wrap gap-2 mb-6">
                  {project.tech.map((tech, i) => (
                    <span 
                      key={i}
                      className="px-3 py-1 bg-purple-900/40 backdrop-blur-sm rounded-full text-sm text-purple-200"
                    >
                      {tech}
                    </span>
                  ))}
                </div>
                {project.github && (
                  <motion.a 
                    href={project.github}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-purple-200 hover:text-purple-100 transition-colors inline-flex items-center group"
                    whileHover={{ x: 5 }}
                  >
                    View on GitHub 
                    <svg 
                      className="w-5 h-5 ml-1 transform transition-transform group-hover:translate-x-1" 
                      fill="none" 
                      stroke="currentColor" 
                      viewBox="0 0 24 24"
                    >
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 8l4 4m0 0l-4 4m4-4H3" />
                    </svg>
                  </motion.a>
                )}
              </motion.div>
            ))}
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default Projects; 