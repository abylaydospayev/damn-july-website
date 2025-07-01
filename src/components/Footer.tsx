import React from 'react';

const Footer = () => {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="py-8 border-t border-gray-700/50">
      <div className="container mx-auto px-4 text-center text-text-secondary">
        <p>&copy; {currentYear} Damn Labs. All Rights Reserved.</p>
      </div>
    </footer>
  );
};

export default Footer;