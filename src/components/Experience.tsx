// src/components/Experience.tsx

import React from 'react';

const Experience: React.FC = () => {
  return (
    <section id="experience" className="py-20 text-center">
      <div className="container mx-auto">
        <h2 className="text-3xl font-bold mb-4">Professional Experience</h2>
        <ul className="text-left">
          <li className="mb-4"><strong>Stage d’observation | MANAGEM</strong>: Maintenance électrique et automatisme industriel.</li>
          <li className="mb-4"><strong>Simulation d’une communication des antennes MIMO</strong>: École Mohammadia d'Ingénieurs.</li>
        </ul>
      </div>
    </section>
  );
};

export default Experience;
