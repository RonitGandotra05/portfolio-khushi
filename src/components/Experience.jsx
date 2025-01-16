import React from 'react';
import { motion } from 'framer-motion';

const experiences = [
  {
    title: "Vice President",
    company: "Praedictio - The Bioinformatics Club",
    period: "2023 - Present",
    location: "Delhi, India",
    description: "Leading strategic planning and supporting fellow students in their professional development. Organizing workshops, seminars, and events focused on bioinformatics and computational biology.",
    skills: ["Leadership", "Event Management", "Mentoring"]
  },
  {
    title: "Research Intern",
    company: "Bioinformatics Research Lab",
    period: "2023",
    location: "Delhi, India",
    description: "Conducted research on protein-protein interactions in fungal species, developed computational pipelines for data analysis, and contributed to multiple research publications.",
    skills: ["Research", "Data Analysis", "Scientific Writing"]
  },
  {
    title: "Data Science Intern",
    company: "Tech Innovation Labs",
    period: "2022",
    location: "Remote",
    description: "Developed machine learning models for biological data analysis, implemented data processing pipelines, and created visualization tools for research findings.",
    skills: ["Machine Learning", "Python", "Data Visualization"]
  }
];

const Experience = () => {
  return (
    <section id="experience" className="relative z-20 py-20">
      <div className="container mx-auto px-4">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          className="mx-auto"
        >
          <h2 className="text-4xl font-bold text-center mb-12 text-white">Experience</h2>
          
          <div className="space-y-6">
            {experiences.map((exp, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, x: -20 }}
                whileInView={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                className="group"
              >
                <div className="bg-white/5 backdrop-blur-xl p-8 border-l-4 border-l-white/20 border-y border-r border-white/10 hover:bg-white/10 transition-all duration-300">
                  <div className="flex flex-col md:flex-row md:items-start md:justify-between gap-4">
                    <div className="flex-1">
                      <h3 className="text-2xl font-bold text-white mb-2 group-hover:text-white/90">
                        {exp.title}
                      </h3>
                      <p className="text-white/80 mb-3 text-base">
                        {exp.company} • {exp.period} • {exp.location}
                      </p>
                      <p className="text-white/70 mb-4 text-base">
                        {exp.description}
                      </p>
                      <div className="flex flex-wrap gap-2">
                        {exp.skills.map((skill, skillIndex) => (
                          <span
                            key={skillIndex}
                            className="px-4 py-1.5 text-base bg-white/10 text-white/80 rounded-full"
                          >
                            {skill}
                          </span>
                        ))}
                      </div>
                    </div>
                  </div>
                </div>
              </motion.div>
            ))}
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default Experience; 