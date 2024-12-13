// components/Hobbies.tsx

import React from 'react';

const Hobbies: React.FC = () => {
  return (
    <section className="bg-white p-6 shadow-md rounded-lg mb-6">
      <h2 className="text-xl font-bold mb-4">Violon d'Ingres</h2>
      <ul className="list-disc pl-5">
        <li>La lecture</li>
        <li>Jeu d'échecs</li>
        <li>Basketball</li>
      </ul>
    </section>
  );
};

export default Hobbies;
