// src/components/Hero.tsx

import React from 'react';
export {};
const Hero: React.FC = () => {
  return (
    <section className="bg-gray-900 text-white text-center py-20">
      <div className="container mx-auto">
        <img src="cv.jpg" alt="Profile" className="w-64 h-100 rounded-full mx-auto mb-4"/>
        <h2 className="text-4xl mb-4">Youssef Nabil</h2>
        <p className="text-xl mb-8">Etudiant et enthousiaste des Réseaux et Cybersecurité</p>

        <a href="#contact" className="bg-blue-600 py-2 px-4 rounded hover:bg-blue-700">Contact Me</a>

       
      </div>
    </section>
  );
};

export default Hero;
