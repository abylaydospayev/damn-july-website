// src/components/About.tsx
import React from 'react';

const About = () => {
  return (
    <section id="about" className="py-16 md:py-24 bg-damn-dark text-white px-4">
      <div className="max-w-6xl mx-auto">
        <h2 className="text-4xl md:text-5xl font-bold mb-10 text-left">About Damn July</h2>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-12 items-start"> {/* Use grid for the two-column layout */}
          <div>
            <p className="text-lg md:text-xl text-gray-300 leading-relaxed mb-8">
              Damn July is a revolutionary software company at the forefront of intelligent automation and advanced computing. We partner with businesses in Everett, Seattle, and beyond, transforming their operations by eliminating manual bottlenecks and driving unparalleled efficiency. Our bespoke solutions leverage cutting-edge AI to streamline workflows, qualify leads, and provide actionable insights.
            </p>
            <p className="text-lg md:text-xl text-gray-300 leading-relaxed mb-8">
              We believe in building software that doesn't just work, but elevates your entire business. With Damn July, prepare to accelerate, innovate, and thrive.
            </p>
            <a href="#contact" className="inline-block px-8 py-4 bg-neon-blue-light text-white rounded-lg font-semibold shadow-md hover:bg-blue-600 transition duration-300">
              Learn More
            </a>
          </div>
          {/* This column will be for "Services" intro text, but we'll fill the full services section next hour */}
          {/* For now, maybe a placeholder or a very brief intro to services */}
          <div className="md:border-l md:border-gray-700 md:pl-12"> {/* Optional divider */}
             <h3 className="text-3xl font-bold text-white mb-6">Our Core Focus</h3>
             <p className="text-md text-gray-400 leading-relaxed">
               At Damn July, we're relentlessly focused on delivering automations that save you time, reduce errors, and supercharge your business growth. From intelligent lead systems to custom workflow solutions, we engineer simplicity out of complexity.
             </p>
             {/* You can add a subtle placeholder for the "Services" boxes from the design here, or just keep it simple */}
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;