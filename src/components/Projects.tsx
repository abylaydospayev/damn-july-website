import React from 'react';
import Glow from './Glow';

const Projects = () => {
  return (
    <section id="projects" className="py-24">
      <h2 className="text-4xl font-bold text-white mb-8">Projects</h2>
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8">
        
        {/* Card 1: Placeholder for the colorful sphere */}
        <div className="bg-card rounded-lg p-4 flex items-center justify-center border border-gray-700/50 min-h-[250px]">
            <Glow color1="from-accent-blue" color2="to-accent-pink" className="w-40 h-40" />
        </div>

        {/* Card 2: The DAMN LABS text card */}
        <div className="bg-card rounded-lg flex flex-col items-center justify-center border border-gray-700/50 min-h-[250px] p-8">
          <div className="text-center">
            <span className="text-5xl text-accent-blue text-glow-blue">*</span>
            <span className="text-5xl text-accent-pink text-glow-pink ml-1">*</span>
          </div>
          <h3 className="text-3xl font-bold text-white mt-4">
            DAMN LABS
          </h3>
        </div>

        {/* Card 3: Placeholder for the glowing outline shape */}
        <div className="bg-card rounded-lg p-4 flex items-center justify-center border border-gray-700/50 min-h-[250px]">
            <Glow color1="from-red-500" color2="to-orange-500" className="w-40 h-40" />
        </div>
        
        {/* Card 4: Placeholder for the robotic head */}
        <div className="bg-card rounded-lg p-4 flex items-center justify-center border border-gray-700/50 min-h-[250px]">
            <Glow color1="from-teal-500" color2="to-green-500" className="w-40 h-40" />
        </div>

      </div>
    </section>
  );
};

export default Projects;