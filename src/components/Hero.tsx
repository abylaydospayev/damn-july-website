"use client"; // Add this directive because we are using the Orb component
import React from 'react';
import Orb from './Orb'; // Import your interactive Orb

const Hero = () => {
  return (
    <section id="home" className="relative flex min-h-[75vh] items-center justify-center text-center py-20">
      
      {/* The Orb - Positioned in the center, behind the text */}
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[700px] h-[700px] max-w-full z-0">
        <Orb />
      </div>

      {/* Hero Content - z-10 keeps it on top of the orb */}
      <div className="relative z-10">
        <h1 className="text-6xl md:text-8xl font-black text-white tracking-tighter leading-none">
          Damn
        </h1>
        <h1 className="text-6xl md:text-8xl font-black text-white tracking-tighter leading-none">
          July
        </h1>
      </div>
    </section>
  );
};

export default Hero;