// src/components/Education.tsx

import React from 'react';

const Education: React.FC = () => {
  return (
    <section id="education" className="p-8 bg-gray-200 text-black">
      <div className="container mx-auto">
        <h2 className="text-4xl font-heading font-bold mb-6 text-accent text-center">Education</h2>
        <ul className="text-black space-y-4">
          <li>2022-Présent: Cycle d’ingénieur en génie électrique | École Mohammadia des Ingénieurs</li>
          <li>2020-2022: Classes préparatoires aux grandes écoles | Lycée Ibn Timiya</li>
          <li>2019-2020: Baccalauréat international | Lycée Zerktouni - Option Science Physique</li>
        </ul>
      </div>
    </section>
  );
};

export default Education;
