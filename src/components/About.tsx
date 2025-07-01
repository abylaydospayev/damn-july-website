// src/components/About.tsx
"use client"; // Mark this as a client component because it uses Orb
import React from 'react';
import Orb from './Orb'; // Import your new Orb component

const About = () => {
  return (
    <section id="about" className="py-24">
      <div className="grid md:grid-cols-2 gap-16 items-center">
        {/* Column 1: Your existing text content */}
        <div className="max-w-md">
          <h2 className="text-4xl font-bold text-white mb-4">About</h2>
          <p className="text-text-secondary mb-6">
            Damn Labs is a pioneering technology company dedicated to creating transformative solutions that address complex challenges and unlock new possibilities. Our team of experts combines deep industry knowledge with a passion for innovation.
          </p>
          <button className="bg-accent-blue text-white py-3 px-8 rounded-md hover:bg-blue-600 transition-colors">
            Learn More
          </button>
        </div>
        
        {/* Column 2: The interactive Orb */}
        <div className="relative w-full h-96">
          <Orb />
        </div>
      </div>
    </section>
  );
};

export default About;