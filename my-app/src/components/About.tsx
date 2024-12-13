// src/components/About.tsx

import React from 'react';

const About: React.FC = () => {
  return (
    <section id="about" className="py-20 bg-black text-center">
      <div className="container mx-auto">
        <h2 className="text-3xl font-bold mb-4">About Me</h2>
        <p className="text-lg">
          Élève ingénieur à Télécom SudParis. Je suis un jeune étudiant curieux, créatif, ambitieux et
          flexible, cherchant l’excellence dans le domaine académique et la réussite
          dans le domaine professionnel avec patience et optimisme en exploitant mes
          compétences théoriques et pratiques, tout en gardant l’esprit zen et responsable.
        </p>
      </div>
    </section>
  );
};

export default About;
