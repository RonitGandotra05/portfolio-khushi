import React from 'react';
import { motion } from 'framer-motion';

const projects = [
  {
    title: "Multi-Armed Bandit Recommendation System",
    description: "Developed a recommendation system using the Multi-Armed Bandit algorithm to optimize video recommendations based on user interactions. Developed in Python, the system dynamically learns and adapts to user preferences, enhancing content recommendations for improved user satisfaction.",
    tech: ["Python", "Machine Learning", "Recommendation Systems", "Data Analysis"],
    link: "https://github.com/RonitGandotra05/Epsilon-Greedy-Multi-Armed-Bandit-Recommendation-System"
  },
  {
    title: "NLP-based Sentiment Analysis",
    description: "Developed an NLP-based sentiment analysis pipeline to analyze customer chat data. The project involves preprocessing text data, performing sentiment analysis, and visualizing results using Python, Pandas, NLTK, TextBlob, Matplotlib, Seaborn. This project is directly relevant to e-commerce as it can be used to improve customer satisfaction.",
    tech: ["Python", "NLTK", "TextBlob", "Pandas", "Matplotlib", "Seaborn"],
    link: "https://github.com/RonitGandotra05/NLP-based-Sentiment-Analysis"
  },
  {
    title: "Metabolic Pathways Analysis",
    description: "Analysis of metabolic pathways implicated in antifungal drug resistance using genomic and transcriptomic data. Utilized KEGG and Reactome for pathway analysis, identifying key resistance mechanisms and potential therapeutic targets.",
    tech: ["KEGG", "Reactome", "Bioinformatics", "Pathway Analysis", "R"],
    link: "#"
  }
];

const Projects = () => {
  return (
    <section id="projects" className="relative z-20 py-20">
      <div className="container mx-auto px-4">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          className="mx-auto"
        >
          <h2 className="text-4xl font-bold text-center mb-12 text-white">Projects</h2>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {projects.map((project, index) => (
              <motion.a
                key={index}
                href={project.link}
                target="_blank"
                rel="noopener noreferrer"
                className="block group"
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                whileHover={{ y: -5 }}
              >
                <div className="bg-white/5 backdrop-blur-xl rounded-xl p-8 border border-white/10 shadow-xl transition-all duration-300 hover:bg-white/10 hover:shadow-2xl h-full">
                  <h3 className="text-2xl font-bold text-white mb-3 group-hover:text-white/90">
                    {project.title}
                  </h3>
                  <p className="text-white/70 mb-4 text-base">
                    {project.description}
                  </p>
                  <div className="flex flex-wrap gap-2 mt-auto">
                    {project.tech.map((tech, techIndex) => (
                      <span
                        key={techIndex}
                        className="px-4 py-1.5 text-base bg-white/10 text-white/80 rounded-full"
                      >
                        {tech}
                      </span>
                    ))}
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

export default Projects; 