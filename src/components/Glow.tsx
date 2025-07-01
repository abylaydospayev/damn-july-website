import React from 'react';

type GlowProps = {
  color1: string; // e.g., 'from-accent-blue'
  color2: string; // e.g., 'to-accent-green'
  className?: string;
};

const Glow = ({ color1, color2, className }: GlowProps) => {
  return (
    <div className={`relative ${className}`}>
      {/* The blurred gradient */}
      <div 
        className={`absolute inset-0 bg-gradient-to-br ${color1} ${color2} rounded-full blur-2xl opacity-60`}
      ></div>
      {/* The sharp inner shape */}
      <div 
        className={`relative w-full h-full bg-gradient-to-br ${color1} ${color2} rounded-full`}
      ></div>
    </div>
  );
};

export default Glow;