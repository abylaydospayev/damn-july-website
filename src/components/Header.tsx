// src/components/Header.tsx
import React from 'react';
import GooeyNav from './GooeyNav';

const Header = () => {
  const navItems = [
    { label: "About", href: "#about" },
    { label: "Services", href: "#services" },
    { label: "Projects", href: "#projects" },
    { label: "Contact", href: "#contact" },
  ];

  return (
    <header className="flex items-center justify-between whitespace-nowrap px-10 py-5">
      <div className="flex items-center gap-3">
        {/* You can add an SVG logo here if you have one */}
        <h2 className="text-white text-xl font-bold">DAMN LABS</h2>
      </div>
      <nav>
        {/* Your awesome GooeyNav component! */}
        <GooeyNav items={navItems} />
      </nav>
    </header>
  );
};

export default Header;