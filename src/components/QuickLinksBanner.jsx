import React from 'react';
import { Link } from 'react-router-dom';

const QuickLinksBanner = () => {
  return (
    <section >
      {/* Full-Width Container */}
      <div className="w-full px-4 sm:px-6 lg:px-8 text-center relative">
        {/* Decorative Background Elements */}
        <div className="absolute top-0 left-0 w-1/2 h-64 bg-teal-300 opacity-20 rounded-full blur-3xl -translate-x-1/4 translate-y-1/4"></div>
        <div className="absolute bottom-0 right-0 w-1/2 h-72 bg-blue-300 opacity-20 rounded-full blur-3xl translate-x-1/4 -translate-y-1/3"></div>

        {/* Main Content */}
        <div className="relative z-10 max-w-6xl mx-auto">
          {/* Text */}
          <h2 className="text-2xl sm:text-3xl md:text-4xl font-bold font-montserrat mb-8 animate-fade-in-up">
            Ready to Boost Your Learning? Start Here.
          </h2>

          {/* CTA Buttons */}
          <div className="flex flex-col sm:flex-row justify-center gap-6 animate-fade-in-up animation-delay-200">
            <Link
              to="/resources"
              className="px-8 py-4 bg-white text-teal-600 font-semibold rounded-lg shadow-lg hover:bg-gray-100 hover:scale-105 transition-all duration-300"
            >
              Browse Resources
            </Link>
            <Link
              to="/shop"
              className="px-8 py-4 bg-white text-teal-600 font-semibold rounded-lg shadow-lg hover:bg-gray-100 hover:scale-105 transition-all duration-300"
            >
              Shop Now
            </Link>
          </div>
        </div>
      </div>
    </section>
  );
};

// Custom Styles and Fonts
const QuickLinksBannerWithStyles = () => (
  <div>
    <style>
      {`
        @import url('https://fonts.googleapis.com/css2?family=Montserrat:wght@700&display=swap');
        .font-montserrat { font-family: 'Montserrat', sans-serif; }

        /* Fade In Up Animation */
        @keyframes fadeInUp {
          from { opacity: 0; transform: translateY(20px); }
          to { opacity: 1; transform: translateY(0); }
        }
        .animate-fade-in-up {
          animation: fadeInUp 0.8s ease-out forwards;
        }
        .animation-delay-200 { animation-delay: 0.2s; }
      `}
    </style>
    <QuickLinksBanner />
  </div>
);

export default QuickLinksBannerWithStyles;
