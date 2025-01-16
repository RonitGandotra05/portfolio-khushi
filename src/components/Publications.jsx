import React from 'react';
import { motion } from 'framer-motion';

const publications = [
  {
    title: "Protein-Protein Interaction Network Analysis of Mucormycosis Species",
    authors: "Gupta, K., et al.",
    journal: "Journal of Bioinformatics and Computational Biology",
    year: "2024",
    status: "In Review",
    abstract: "A comprehensive analysis of protein-protein interactions in mucormycosis species, revealing key pathogenic mechanisms and potential therapeutic targets.",
    link: "#"
  },
  {
    title: "Machine Learning Applications in Fungal Genomics",
    authors: "Gupta, K., et al.",
    journal: "Bioinformatics Research and Applications",
    year: "2023",
    status: "Published",
    abstract: "Review of machine learning techniques applied to fungal genomics, highlighting novel approaches for understanding pathogenicity and drug resistance.",
    link: "#"
  },
  {
    title: "Antifungal Drug Resistance: A Systems Biology Approach",
    authors: "Gupta, K., et al.",
    journal: "Computational Biology and Bioinformatics",
    year: "2023",
    status: "Published",
    abstract: "Systems biology analysis of antifungal drug resistance mechanisms using integrated genomic and pathway analysis approaches.",
    link: "#"
  }
];

const Publications = () => {
  return (
    <section id="publications" className="relative z-20 py-20">
      <div className="container mx-auto px-4">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          className="mx-auto"
        >
          <h2 className="text-4xl font-bold text-center mb-12 text-white">Publications</h2>
          
          <div className="space-y-6">
            {publications.map((pub, index) => (
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
                        {pub.title}
                      </h3>
                      <p className="text-white/80 mb-3 text-base">
                        {pub.authors} • {pub.journal} • {pub.year}
                      </p>
                      <p className="text-white/70 text-base line-clamp-2">
                        {pub.abstract}
                      </p>
                    </div>
                    <div className="flex items-center gap-3">
                      <span className="px-4 py-1.5 text-base bg-white/10 text-white/80 rounded-full">
                        {pub.status}
                      </span>
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

export default Publications; 