import React from 'react';
import Header from '../components/Header'

import Hero from '../components/Hero';
import Experience from '../components/Experience';
import Languages from '../components/Languages';
import About from '../components/About';
import Skills from '../components/Skills';
import Education from '../components/Education';
import Contact from '../components/Contact';
import '../index.css';

const Cv = () => {
  return (
    <div className="font-sans bg-custom min-h-screen">
      <Header />
      <div className="pt-16">
        <Hero />
        <About />
        <Experience />
        <Education />
        <Skills />
        <Languages />
        <Contact />
      </div>
    </div>
     
  );
}

export default Cv;