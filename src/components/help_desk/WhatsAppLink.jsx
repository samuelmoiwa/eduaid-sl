import React from 'react';
import { FaWhatsapp } from 'react-icons/fa';

const WhatsAppLink = () => {
  return (
    <section >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
        <h2 className="text-3xl font-bold font-montserrat mb-6">Need Direct Help?</h2>
        <p className="text-lg font-open-sans mb-8">Join our WhatsApp group for instant support from our team!</p>
        <a
          href="https://chat.whatsapp.com/DUMMY_LINK" // Replace with real WhatsApp group invite link
          target="_blank"
          rel="noopener noreferrer"
          className="inline-flex items-center px-8 py-4 bg-gradient-to-r from-teal-600 to-blue-600 text-white font-semibold rounded-full shadow-lg hover:from-teal-700 hover:to-blue-700 hover:scale-105 transition-all duration-300"
        >
          <FaWhatsapp className="mr-2" size={24} />
          Join WhatsApp Group
        </a>
      </div>
    </section>
  );
};

// Custom Styles
const WhatsAppLinkWithStyles = () => (
  <div>
    <style>
      {`
        @import url('https://fonts.googleapis.com/css2?family=Montserrat:wght@700&family=Open+Sans&display=swap');
        .font-montserrat { font-family: 'Montserrat', sans-serif; }
        .font-open-sans { font-family: 'Open Sans', sans-serif; }
      `}
    </style>
    <WhatsAppLink />
  </div>
);

export default WhatsAppLinkWithStyles;
