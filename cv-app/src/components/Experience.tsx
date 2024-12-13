// src/components/Experience.tsx

import React from 'react';

const Experience: React.FC = () => {
  return (
    <section id="experience" className="py-20 text-center">
    <div className="container mx-auto">
      <h2 className="text-3xl font-bold mb-4 text-orange-500">Professional Experience</h2>
      <div className="flex justify-between items-center">
        <div className="w-full text-center mb-4">
          <strong>Implementation d’un SOC et Pentests </strong>
          <p>Stage d’ingénieur au Centre National de Recherche Scientifique et Technique à Rabat, Maroc</p>
        </div>
        <div className="w-full text-center mb-4">
          <strong>Simulation d’une communication des antennes MIMO à </strong>
          <p>l'École Mohammadia d'Ingénieurs.</p>
        </div>
      </div>
    </div>
  </section>
  );
};

export default Experience;
