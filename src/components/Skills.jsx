import React from 'react';
import { motion } from 'framer-motion';

const skillCategories = [
  {
    title: "Programming Languages",
    skills: ["Python", "R", "JavaScript", "SQL", "HTML/CSS"]
  },
  {
    title: "Machine Learning & Data Science",
    skills: ["TensorFlow", "PyTorch", "Scikit-learn", "Pandas", "NumPy", "Matplotlib"]
  },
  {
    title: "Bioinformatics Tools",
    skills: ["KEGG", "Reactome", "OmicsBox", "STRING", "BLAST", "Gene Ontology"]
  },
  {
    title: "Development Tools",
    skills: ["Git", "Docker", "VS Code", "Jupyter Notebook", "RStudio"]
  }
];

const Skills = () => {
  return (
    <section id="skills" className="relative z-20 py-20">
      <div className="container mx-auto px-4">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
        >
          <h2 className="text-4xl font-bold text-center mb-16 text-white">Skills</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {skillCategories.map((category, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: index * 0.2 }}
                className="bg-purple-950/30 backdrop-blur-sm rounded-xl p-6 shadow-xl border border-purple-900/40 hover:bg-purple-950/40 transition-colors"
              >
                <h3 className="text-xl font-bold mb-4 text-purple-200">{category.title}</h3>
                <div className="flex flex-wrap gap-2">
                  {category.skills.map((skill, i) => (
                    <span
                      key={i}
                      className="px-3 py-1 bg-purple-950/50 backdrop-blur-sm rounded-full text-sm text-purple-200"
                    >
                      {skill}
                    </span>
                  ))}
                </div>
              </motion.div>
            ))}
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default Skills; 