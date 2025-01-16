import React from 'react';
import { motion } from 'framer-motion';

const skillCategories = [
  {
    title: "Programming Languages",
    skills: ["Python", "R", "JavaScript", "HTML/CSS", "SQL", "Java"]
  },
  {
    title: "Bioinformatics Tools",
    skills: ["BLAST", "KEGG", "STRING", "OmicsBox", "Cytoscape", "PathVisio"]
  },
  {
    title: "Machine Learning",
    skills: ["scikit-learn", "TensorFlow", "PyTorch", "Keras", "Deep Learning"]
  },
  {
    title: "Data Analysis",
    skills: ["Pandas", "NumPy", "Matplotlib", "Seaborn", "Jupyter", "Statistical Analysis"]
  },
  {
    title: "Web Development",
    skills: ["React", "Node.js", "Tailwind CSS", "Git", "RESTful APIs"]
  }
];

const Skills = () => {
  return (
    <section id="skills" className="relative z-20 py-20">
      <div className="container mx-auto px-4">
        <h2 className="text-4xl font-bold text-center mb-16 text-white">Skills</h2>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {skillCategories.map((category, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              className="bg-white/5 backdrop-blur-xl rounded-xl p-8 shadow-xl border border-white/10 hover:bg-white/10 transition-all"
            >
              <h3 className="text-2xl font-bold text-white mb-6">{category.title}</h3>
              <div className="flex flex-wrap gap-2">
                {category.skills.map((skill, i) => (
                  <motion.span
                    key={i}
                    initial={{ scale: 0 }}
                    animate={{ scale: 1 }}
                    transition={{ duration: 0.2, delay: i * 0.05 }}
                    className="px-3 py-1 text-sm bg-white/10 text-white/90 rounded-full border border-white/10"
                  >
                    {skill}
                  </motion.span>
                ))}
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Skills; 