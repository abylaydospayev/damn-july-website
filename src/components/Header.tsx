import React from 'react';

const Header = () => {
  return (
    <header className="sticky top-0 z-50 bg-gray-950 bg-opacity-90 backdrop-blur-sm p-4 shadow-lg">
      <nav className="container mx-auto flex justify-between items-center">
        <div className="text-2xl font-bold text-teal-400">Damn July</div>
        <ul className="flex space-x-6">
          <li><a href="#hero" className="hover:text-teal-300 transition duration-300">Home</a></li>
          <li><a href="#services" className="hover:text-teal-300 transition duration-300">Services</a></li>
          <li><a href="#projects" className="hover:text-teal-300 transition duration-300">Projects</a></li>
          <li><a href="#contact" className="hover:text-teal-300 transition duration-300">Contact</a></li>
        </ul>
      </nav>
    </header>
  );
};
export default Header; // <--- THIS LINE IS ESSENTIAL