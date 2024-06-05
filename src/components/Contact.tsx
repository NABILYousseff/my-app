// src/components/Contact.tsx
import React from 'react';

const Contact: React.FC = () => {
  return (
    <section id="contact" className="py-20 text-center">
      <div className="container mx-auto">
        <h2 className="text-3xl font-bold mb-4">Contact</h2>
        <p className="text-lg mb-8">Get in touch with me via email: <a href="mailto:youssefnabil78@gmail.com" className="text-blue-600 hover:underline">youssefnabil78@gmail.com</a></p>
        <a href="https://www.linkedin.com/in/youssef-nabil-511a77252/" target="_blank" rel="noopener noreferrer" className="bg-blue-600 py-2 px-4 rounded text-white hover:bg-blue-700">Connect on LinkedIn</a>
      </div>
    </section>
  );
};

export default Contact;
