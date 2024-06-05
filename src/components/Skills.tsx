// src/components/Skills.tsx

import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faPython, faJava, faJs, faLinux, faHtml5, faCss3Alt, faPhp } from '@fortawesome/free-brands-svg-icons';
import { faNetworkWired } from '@fortawesome/free-solid-svg-icons';

const Skills: React.FC = () => {
  return (
    <section id="skills" className="p-8 bg-gray-800">
      <div className="container mx-auto">
        <h2 className="text-4xl font-heading font-bold mb-6 text-accent text-center">Programming Skills</h2>
        <ul className="flex flex-wrap justify-center space-x-8 text-light">
          <li className="flex flex-col items-center text-lg">
            <FontAwesomeIcon icon={faPython} size="3x" className="text-accent mb-2" />
            <span>Python</span>
          </li>
          <li className="flex flex-col items-center text-lg">
            <FontAwesomeIcon icon={faJava} size="3x" className="text-accent mb-2" />
            <span>Java</span>
          </li>
          <li className="flex flex-col items-center text-lg">
            <FontAwesomeIcon icon={faJs} size="3x" className="text-accent mb-2" />
            <span>JavaScript</span>
          </li>
          <li className="flex flex-col items-center text-lg">
            <FontAwesomeIcon icon={faLinux} size="3x" className="text-accent mb-2" />
            <span>Linux</span>
          </li>
          <li className="flex flex-col items-center text-lg">
            <FontAwesomeIcon icon={faHtml5} size="3x" className="text-accent mb-2" />
            <span>HTML5</span>
          </li>
          <li className="flex flex-col items-center text-lg">
            <FontAwesomeIcon icon={faCss3Alt} size="3x" className="text-accent mb-2" />
            <span>CSS3</span>
          </li>
          <li className="flex flex-col items-center text-lg">
            <FontAwesomeIcon icon={faPhp} size="3x" className="text-accent mb-2" />
            <span>PHP</span>
          </li>
          <li className="flex flex-col items-center text-lg">
            <FontAwesomeIcon icon={faNetworkWired} size="3x" className="text-accent mb-2" />
            <span>GNS3</span>
          </li>
        </ul>
      </div>
    </section>
  );
};

export default Skills;
