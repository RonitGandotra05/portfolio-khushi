import React from 'react';
import { motion } from 'framer-motion';

const publications = [
  {
    title: "Machine Learning-Based Approaches for Vaccine Target Identification: Implementation and Insights",
    description: "This study involved extensive data analysis on large-scale datasets, employing multiple machine learning algorithms, including PyTorch, TensorFlow, and Scikit-Learn, to develop a predictive model.",
    tech: ["Machine Learning", "PyTorch", "TensorFlow", "Scikit-Learn"],
    link: "https://doi.org/10.1016/j.vaccine.2023.xxx",
    doi: "10.1016/j.vaccine.2023.xxx",
    citations: 12,
    journal: "Vaccine",
    year: "2023",
    additionalLinks: [
      {
        title: "GitHub Repository",
        url: "https://github.com/username/vaccine-target-ml"
      },
      {
        title: "Dataset",
        url: "https://zenodo.org/record/xxxxxx"
      }
    ]
  },
  {
    title: "Exploring Metabolic Pathways Implicated in Antifungal Drug Resistance",
    description: "Utilized genomic and transcriptomic data to perform pathway enrichment analysis, employing tools such as KEGG and Reactome. Implemented differential gene expression analysis and metabolic network modeling to identify key enzymes and metabolites implicated in resistance mechanisms.",
    tech: ["Bioinformatics", "KEGG", "Reactome", "Genomics"],
    link: "https://doi.org/10.1038/s41587-023-xxx",
    doi: "10.1038/s41587-023-xxx",
    citations: 8,
    journal: "Nature Biotechnology",
    year: "2023",
    additionalLinks: [
      {
        title: "GitHub Repository",
        url: "https://github.com/username/antifungal-resistance"
      },
      {
        title: "Supplementary Data",
        url: "https://www.nature.com/articles/s41587-023-xxx#supplementary-information"
      }
    ]
  }
];

const Publications = () => {
  return (
    <section id="publications" className="relative z-20 py-20">
      <div className="container mx-auto px-4">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
        >
          <h2 className="text-4xl font-bold text-center mb-16 text-white">Publications</h2>
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
            {publications.map((pub, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: index * 0.2 }}
                className="bg-purple-950/30 backdrop-blur-sm rounded-xl p-6 shadow-xl border border-purple-900/40 hover:bg-purple-950/40 transition-colors"
              >
                <h3 className="text-xl font-bold mb-4 text-purple-200">{pub.title}</h3>
                <p className="text-purple-100/80 mb-4">{pub.description}</p>
                <div className="flex flex-wrap gap-2 mb-4">
                  {pub.tech.map((tech, i) => (
                    <span 
                      key={i}
                      className="px-3 py-1 bg-purple-950/50 backdrop-blur-sm rounded-full text-sm text-purple-200"
                    >
                      {tech}
                    </span>
                  ))}
                </div>
                <div className="space-y-2 mb-6">
                  <p className="text-purple-100/80 text-sm">
                    Published in <span className="text-purple-200">{pub.journal}</span> ({pub.year})
                  </p>
                  <p className="text-purple-100/80 text-sm">
                    DOI: <a href={`https://doi.org/${pub.doi}`} target="_blank" rel="noopener noreferrer" className="text-purple-200 hover:text-purple-100">{pub.doi}</a>
                  </p>
                  <p className="text-purple-100/80 text-sm">
                    Citations: <span className="text-purple-200">{pub.citations}</span>
                  </p>
                </div>
                <div className="flex flex-wrap gap-4">
                  <a 
                    href={pub.link}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-purple-200 hover:text-purple-100 transition-colors inline-flex items-center group"
                  >
                    Read Publication
                    <svg 
                      className="w-5 h-5 ml-1 transform transition-transform group-hover:translate-x-1" 
                      fill="none" 
                      stroke="currentColor" 
                      viewBox="0 0 24 24"
                    >
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 8l4 4m0 0l-4 4m4-4H3" />
                    </svg>
                  </a>
                  {pub.additionalLinks.map((additionalLink, i) => (
                    <a
                      key={i}
                      href={additionalLink.url}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="text-purple-200 hover:text-purple-100 transition-colors inline-flex items-center group"
                    >
                      {additionalLink.title}
                      <svg 
                        className="w-5 h-5 ml-1 transform transition-transform group-hover:translate-x-1" 
                        fill="none" 
                        stroke="currentColor" 
                        viewBox="0 0 24 24"
                      >
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M10 6H6a2 2 0 00-2 2v10a2 2 0 002 2h10a2 2 0 002-2v-4M14 4h6m0 0v6m0-6L10 14" />
                      </svg>
                    </a>
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

export default Publications; 