import React from 'react';

const Hero = () => {
  return (
    <section id="hero" className="relative h-screen flex flex-col justify-center items-center text-center p-8 overflow-hidden">
      {/* Abstract glowing shapes will go here as absolute positioned divs or img tags */}
      <h1 className="text-6xl md:text-8xl font-extrabold text-white z-10 leading-tight">
        Damn July
        <br />
        Intelligent Automation
      </h1>
      <p className="mt-6 text-xl md:text-2xl text-gray-300 z-10 max-w-2xl">
        Accelerate your business with cutting-edge software solutions.
      </p>
      <a href="#services" className="mt-10 px-8 py-4 bg-gradient-to-r from-purple-600 to-indigo-600 text-white text-lg font-semibold rounded-full shadow-lg hover:from-purple-700 hover:to-indigo-700 transition duration-300 z-10">
        Get a Damn Solution
      </a>
      {/* Placeholder for glowing shapes */}
      <div className="absolute top-1/4 left-1/4 w-96 h-96 bg-purple-500 rounded-full mix-blend-multiply filter blur-3xl opacity-30 animate-blob"></div>
      <div className="absolute top-1/2 right-1/4 w-96 h-96 bg-teal-500 rounded-full mix-blend-multiply filter blur-3xl opacity-30 animate-blob animation-delay-2000"></div>
      <div className="absolute bottom-1/4 left-1/3 w-96 h-96 bg-blue-500 rounded-full mix-blend-multiply filter blur-3xl opacity-30 animate-blob animation-delay-4000"></div>
    </section>
  );
};
export default Hero; // <--- THIS LINE IS ESSENTIAL