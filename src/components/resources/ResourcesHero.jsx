import React from 'react';
import { Link } from 'react-router-dom';
import Lottie from 'lottie-react';
import student_lottie from '../../lottie/student_1.json'; // Adjust path as needed

const ResourcesHero = () => {
  return (
    <section className="py-32 bg-gradient-to-br from-teal-600 via-cyan-500 to-blue-700 text-white overflow-hidden relative">
      {/* Decorative Background Elements */}
      <div className="absolute inset-0 opacity-20">
        <div className="absolute top-0 left-0 w-72 h-72 bg-teal-300 rounded-full blur-3xl -translate-x-1/2 translate-y-1/4 animate-pulse"></div>
        <div className="absolute bottom-0 right-0 w-96 h-96 bg-blue-300 rounded-full blur-3xl translate-x-1/3 -translate-y-1/3 animate-pulse"></div>
      </div>

      {/* Container */}
      <div className="w-full mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        {/* Grid Layout for Content and Animation */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          {/* Left Column: Text Content */}
          <div className="space-y-8 text-center lg:text-left animate-fade-in-up">
            {/* Heading */}
            <h1 className="text-4xl sm:text-5xl lg:text-6xl font-bold font-montserrat relative inline-block">
                Unlock Your Path to Success with EduAid Global
              <span className="absolute -bottom-3 left-0 w-full h-2 bg-gradient-to-r from-yellow-400 to-orange-500 rounded-full transform -skew-y-3"></span>
            </h1>

            {/* Subheading */}
            <p className="text-lg sm:text-xl text-teal-100 font-open-sans leading-relaxed max-w-lg mx-auto lg:mx-0">
              At EduAid Global, we provide a comprehensive range of services to empower students, professionals, and businesses worldwide
            </p>

            {/* CTA Button */}
            <Link
              to="/resources#list"
              className="inline-block px-8 py-4 bg-gradient-to-r from-yellow-400 to-orange-500 text-gray-900 font-semibold rounded-full shadow-lg hover:from-yellow-500 hover:to-orange-600 hover:scale-105 transition-all duration-300 animate-fade-in-up animation-delay-200"
            >
              CONNECT WITH US NOW
            </Link>
          </div>

          {/* Right Column: Lottie Animation */}
          <div className="relative flex justify-center lg:justify-end animate-fade-in-right">
            <div className="relative group">
              <Lottie
                animationData={student_lottie}
                loop={true}
                className="w-72 h-72 sm:w-96 sm:h-96 transition-transform duration-500 group-hover:scale-110 group-hover:rotate-3"
              />
              {/* Animated Background Gradient */}
              <div className="absolute inset-0 m-auto w-80 h-80 sm:w-112 sm:h-112 bg-gradient-to-tr from-teal-300 via-yellow-300 to-blue-300 rounded-full opacity-30 blur-2xl animate-spin-slow group-hover:opacity-50 group-hover:blur-3xl transition-all duration-500"></div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

// Custom Styles and Fonts
const ResourcesHeroWithStyles = () => (
  <div>
    <style>
      {`
        @import url('https://fonts.googleapis.com/css2?family=Montserrat:wght@700&family=Open+Sans&display=swap');
        .font-montserrat { font-family: 'Montserrat', sans-serif; }
        .font-open-sans { font-family: 'Open Sans', sans-serif; }

        /* Fade In Up Animation */
        @keyframes fadeInUp {
          from { opacity: 0; transform: translateY(30px); }
          to { opacity: 1; transform: translateY(0); }
        }
        .animate-fade-in-up {
          animation: fadeInUp 0.8s ease-out forwards;
        }
        .animation-delay-200 { animation-delay: 0.2s; }

        /* Fade In Right Animation */
        @keyframes fadeInRight {
          from { opacity: 0; transform: translateX(40px); }
          to { opacity: 1; transform: translateX(0); }
        }
        .animate-fade-in-right {
          animation: fadeInRight 1s ease-out forwards;
        }

        /* Pulse Animation */
        @keyframes pulse {
          0% { opacity: 0.15; }
          50% { opacity: 0.25; }
          100% { opacity: 0.15; }
        }
        .animate-pulse {
          animation: pulse 4s infinite ease-in-out;
        }

        /* Slow Spin Animation */
        @keyframes spinSlow {
          from { transform: rotate(0deg); }
          to { transform: rotate(360deg); }
        }
        .animate-spin-slow {
          animation: spinSlow 15s linear infinite;
        }
      `}
    </style>
    <ResourcesHero />
  </div>
);

export default ResourcesHeroWithStyles;
