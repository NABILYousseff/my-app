// src/App.tsx

import React from 'react';
import Header from './components/Header';
import Hero from './components/Hero';
import About from './components/About';
import Experience from './components/Experience';
import Education from './components/Education';
import Skills from './components/Skills';
import Languages from './components/Languages';
import Contact from './components/Contact';

const App: React.FC = () => {
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
};

export default App;
