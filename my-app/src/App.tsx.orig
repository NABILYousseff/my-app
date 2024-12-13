import React from 'react';
import { HashRouter as Router, Routes, Route, Navigate } from 'react-router-dom';
import './index.css';
import Cv from './screens/cv';
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
    <Router>
      <div className="route">
        <Routes>
          <Route path="/" element={<Cv />} />
          <Route path="*" element={<Navigate to="/" />} /> {/* Handle unmatched routes */}
        </Routes>
      </div>
    </Router>
  );
};

export default App;
