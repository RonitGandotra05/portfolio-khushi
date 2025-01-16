import React from 'react';
import { motion } from 'framer-motion';

const experiences = [
  {
    title: "Vice President",
    company: "Praedictio - The Bioinformatics Club",
    duration: "July 2024 - Present",
    responsibilities: [
      "Lead strategic planning and decision-making for club initiatives",
      "Mentor and support club members in their professional development",
      "Organize workshops and interactive sessions"
    ]
  },
  {
    title: "Anchor and Coordinator",
    company: "Praedictio - The Bioinformatics Club",
    duration: "Oct 2023 – July 2024",
    responsibilities: [
      "Leading club activities and engaging members",
      "Organizing and hosting webinars and workshops",
      "Facilitating interactive discussions and events"
    ]
  },
  {
    title: "Summer Intern",
    company: "Computational Genomics Lab",
    duration: "May 2023 - July 2023",
    responsibilities: [
      "Conducted literature reviews on spore infection and mucormycosis species",
      "Performed gene name and pathway analysis using KEGG and Reactome",
      "Conducted Gene Ontology enrichment analysis",
      "Utilized OmicsBox for GO mapping and pathway construction",
      "Leveraged STRING for protein-protein interaction analysis"
    ]
  }
];

const Experience = () => {
  return (
    <section id="experience" className="relative z-20 py-20">
      <div className="container mx-auto px-4">
        <h2 className="text-4xl font-bold text-center mb-16 text-white">Experience</h2>
        <div className="space-y-8">
          {experiences.map((exp, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, x: index % 2 === 0 ? -20 : 20 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.5 }}
              className="bg-purple-900/20 backdrop-blur-sm rounded-xl p-8 shadow-xl border border-purple-800/30 hover:bg-purple-900/30 transition-colors"
            >
              <div className="flex flex-col md:flex-row justify-between mb-4">
                <div>
                  <h3 className="text-2xl font-bold text-purple-200">{exp.title}</h3>
                  <h4 className="text-xl text-purple-100/90">{exp.company}</h4>
                </div>
                <p className="text-purple-100/80 mt-2 md:mt-0">{exp.duration}</p>
              </div>
              <ul className="list-disc list-inside space-y-2 text-purple-100/80">
                {exp.responsibilities.map((resp, i) => (
                  <li key={i}>{resp}</li>
                ))}
              </ul>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Experience; 