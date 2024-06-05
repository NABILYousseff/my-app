// src/components/Header.tsx

import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faLinkedin, faGithub } from '@fortawesome/free-brands-svg-icons';
import { Link } from 'react-router-dom';
const Header: React.FC = () => {
  return (
    <header className="bg-gray-800 text-white p-4 shadow-lg fixed top-0 w-full z-10 transition-all duration-300">
      <div className="container mx-auto flex justify-between items-center">
        <h1 className="text-xl font-bold">My Portfolio</h1>
        <nav>
          <ul className="flex space-x-4 items-center">
          <Link to="/formulaire">
          <button className="hover:text-gray-400 transition-colors duration-300">Form</button>
        </Link>
            <li><a href="#about" className="hover:text-gray-400 transition-colors duration-300">About</a></li>
            <li><a href="#experience" className="hover:text-gray-400 transition-colors duration-300">Experience</a></li>
            <li><a href="#education" className="hover:text-gray-400 transition-colors duration-300">Education</a></li>
            <li><a href="#skills" className="hover:text-gray-400 transition-colors duration-300">Skills</a></li>
            <li><a href="#languages" className="hover:text-gray-400 transition-colors duration-300">Languages</a></li>
            <li><a href="#contact" className="hover:text-gray-400 transition-colors duration-300">Contact</a></li>
            <li><a href="https://www.linkedin.com/in/youssef-nabil-511a77252/" target="_blank" className="hover:text-gray-400 transition-colors duration-300"><FontAwesomeIcon icon={faLinkedin} /></a></li>
            <li><a href="https://github.com/NABILYousseff" target="_blank" className="hover:text-gray-400 transition-colors duration-300"><FontAwesomeIcon icon={faGithub} /></a></li>
          </ul>
        </nav>
      </div>
    </header>
  );
};

export default Header;
