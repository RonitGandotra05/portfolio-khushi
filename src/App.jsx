import React from 'react';
import { BrowserRouter as Router } from 'react-router-dom';
import Navbar from './components/Navbar';
import Hero from './components/Hero';
import About from './components/About';
import Experience from './components/Experience';
import Projects from './components/Projects';
import Skills from './components/Skills';
import Publications from './components/Publications';
import Contact from './components/Contact';
import Footer from './components/Footer';
import Background3D from './components/Background3D';
import ScrollingDNA from './components/ScrollingDNA';

function App() {
  return (
    <Router>
      <div className="relative min-h-screen">
        <Background3D />
        <ScrollingDNA />
        <Navbar />
        <main>
          <Hero />
          <About />
          <Experience />
          <Projects />
          <Skills />
          <Publications />
          <Contact />
        </main>
        <Footer />
      </div>
    </Router>
  );
}

export default App; 