import React from 'react';

// Define the types for the ServiceCard's props
type ServiceCardProps = {
  title: string;
  items: string[];
};

// A reusable sub-component for the cards
const ServiceCard = ({ title, items }: ServiceCardProps) => (
  <div className="bg-card p-6 rounded-lg border border-gray-700/50">
    <h3 className="text-2xl font-bold text-white mb-4">{title}</h3>
    <ul className="space-y-2">
      {items.map((item, index) => (
        <li key={index} className="text-text-secondary">{item}</li>
      ))}
    </ul>
  </div>
);

const Services = () => {
  // We can store our service data in an object for clarity
  const serviceData = {
    business: ['Market Research', 'Strategy', 'Business Model', 'Funding'],
    product: ['UI/UX Design', 'Prototyping', 'Development', 'Testing'],
    growth: ['Marketing Strategy', 'SEO', 'Content Creation', 'Social Media'],
  };

  return (
    <section id="services" className="py-24">
      <h2 className="text-4xl font-bold text-white mb-8">Services</h2>
      
      {/* The main grid for the service cards */}
      <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
        <ServiceCard title="Business" items={serviceData.business} />
        <ServiceCard title="Product" items={serviceData.product} />
        <ServiceCard title="Growth" items={serviceData.growth} />
      </div>
    </section>
  );
};

export default Services;