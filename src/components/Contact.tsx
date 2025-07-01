import React from 'react';

const Contact = () => {
  return (
    <section id="contact" className="text-center py-24">
      <h2 className="text-4xl font-bold text-white mb-4">Contact</h2>
      <p className="text-text-secondary max-w-lg mx-auto mb-8">
        Have a project in mind? Let's talk about it. We're ready to help you build the future.
      </p>
      <button className="bg-accent-blue text-white py-3 px-8 rounded-md hover:bg-blue-600 transition-colors text-lg">
        Get In Touch
      </button>
    </section>
  );
};

export default Contact;