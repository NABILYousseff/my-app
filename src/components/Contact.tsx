// src/components/Header.tsx

import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faLinkedin, faGithub } from '@fortawesome/free-brands-svg-icons';

const Header: React.FC = () => {
  return (
    <header className="bg-gray-800 text-white p-4 shadow-lg">
      <div className="container mx-auto flex justify-between items-center">
        <h1 className="text-xl font-bold">My Portfolio</h1>
        <nav>
          <ul className="flex space-x-4 items-center">
            <li><a href="#about" className="hover:text-gray-400">About</a></li>
            <li><a href="#experience" className="hover:text-gray-400">Experience</a></li>
            <li><a href="#education" className="hover:text-gray-400">Education</a></li>
            <li><a href="#skills" className="hover:text-gray-400">Skills</a></li>
            <li><a href="#languages" className="hover:text-gray-400">Languages</a></li>
            <li><a href="#contact" className="hover:text-gray-400">Contact</a></li>
            <li><a href="https://www.linkedin.com/in/youssef-nabil-511a77252/" target="_blank" className="hover:text-gray-400"><FontAwesomeIcon icon={faLinkedin} /></a></li>
            <li><a href="https://github.com/NABILYousseff" target="_blank" className="hover:text-gray-400"><FontAwesomeIcon icon={faGithub} /></a></li>
          </ul>
        </nav>
      </div>
    </header>
  );
};

export default Header;
