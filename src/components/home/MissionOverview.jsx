import React from 'react';
import Lottie from 'lottie-react';
import student_lottie from '../../lottie/student_1.json';
import { Link } from 'react-router-dom';

const MissionOverview = () => {
  return (
    <section >
      {/* Decorative Background Elements */}
      <div className="absolute inset-0 opacity-20">
        <div className="absolute top-0 left-0 w-64 h-64 bg-teal-300 rounded-full blur-3xl -translate-x-1/2 translate-y-1/4 animate-pulse"></div>
        <div className="absolute bottom-0 right-0 w-80 h-80 bg-blue-300 rounded-full blur-3xl translate-x-1/3 -translate-y-1/3 animate-pulse"></div>
      </div>

      {/* Container */}
      <div className="max-w-[90rem] mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        {/* Main Content */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          {/* Left Column: Text Content */}
          <div className="space-y-8 animate-fade-in-left">
            {/* Heading with Gradient Underline */}
            <h2 className="text-4xl sm:text-5xl lg:text-6xl font-bold font-montserrat relative inline-block">
              Welcome to EduAid Global
              <span className="absolute -bottom-3 left-0 w-full h-2 bg-gradient-to-r from-yellow-400 to-teal-400 rounded-full transform -skew-y-3"></span>
            </h2>

            {/* Text Block */}
            <p className="text-lg sm:text-xl font-open-sans leading-relaxed max-w-xl mx-auto lg:mx-0 text-teal-50 text-justify">
              We streamline your learning journey by curating top-quality educational resources, expert dissertation guidance, and meticulously selected materials—all in one accessible hub for students worldwide. Our mission is to break down barriers to education, delivering a seamless, impactful, and transformative experience, ensuring success is always within reach.
            </p>

            {/* Stats or Highlights */}
            <div className="flex justify-center lg:justify-start gap-8 mt-8">
              <div className="text-center bg-white bg-opacity-10 p-4 rounded-lg shadow-md hover:bg-opacity-20 transition-all duration-300">
                <p className="text-3xl font-bold text-yellow-400">10K+</p>
                <p className="text-sm text-teal-100">Resources Available</p>
              </div>
              <div className="text-center bg-white bg-opacity-10 p-4 rounded-lg shadow-md hover:bg-opacity-20 transition-all duration-300">
                <p className="text-3xl font-bold text-yellow-400">50+</p>
                <p className="text-sm text-teal-100">Countries Reached</p>
              </div>
            </div>
          </div>

          {/* Right Column: Visual Element */}
          <div className="relative flex justify-center lg:justify-end animate-fade-in-right">
            {/* Lottie Animation with Enhanced Effects */}
            <div className="relative group">
              <Lottie
                animationData={student_lottie}
                loop={true}
                className="w-72 h-72 sm:w-96 sm:h-96 transition-transform duration-500 group-hover:scale-110 group-hover:rotate-3"
              />
              {/* Animated Background Gradient */}
              <div className="absolute inset-0 m-auto w-80 h-80 sm:w-112 sm:h-112 bg-gradient-to-tr from-teal-300 via-yellow-300 to-blue-300 rounded-full opacity-30 blur-2xl animate-spin-slow group-hover:opacity-50 group-hover:blur-3xl transition-all duration-500"></div>
            </div>

            {/* Floating Badge */}
            <div className="absolute top-4 right-4 sm:right-8 bg-yellow-400 text-gray-900 px-6 py-3 rounded-full shadow-lg transform rotate-6 hover:rotate-0 transition-transform duration-300 animate-bounce">
              <p className="text-sm font-semibold">Global Impact</p>
            </div>
          </div>
        </div>

        {/* Call-to-Action Button */}
        <div className="mt-12 text-center animate-fade-in-up animation-delay-400">
          <Link
            to="/resources"
            className="inline-block px-8 py-4 bg-gradient-to-r from-yellow-400 to-orange-500 text-gray-900 font-semibold rounded-full shadow-lg hover:from-yellow-500 hover:to-orange-600 hover:scale-105 transition-all duration-300"
          >
            Explore Resources
          </Link>
        </div>
      </div>
    </section>
  );
};

// Custom Styles and Fonts
const MissionOverviewWithStyles = () => (
  <div>
    <style>
      {`
        @import url('https://fonts.googleapis.com/css2?family=Montserrat:wght@700&family=Open+Sans&display=swap');
        .font-montserrat { font-family: 'Montserrat', sans-serif; }
        .font-open-sans { font-family: 'Open Sans', sans-serif; }

        /* Fade In Left Animation */
        @keyframes fadeInLeft {
          from { opacity: 0; transform: translateX(-40px); }
          to { opacity: 1; transform: translateX(0); }
        }
        .animate-fade-in-left {
          animation: fadeInLeft 1s ease-out forwards;
        }

        /* Fade In Right Animation */
        @keyframes fadeInRight {
          from { opacity: 0; transform: translateX(40px); }
          to { opacity: 1; transform: translateX(0); }
        }
        .animate-fade-in-right {
          animation: fadeInRight 1s ease-out forwards;
        }

        /* Fade In Up Animation */
        @keyframes fadeInUp {
          from { opacity: 0; transform: translateY(30px); }
          to { opacity: 1; transform: translateY(0); }
        }
        .animate-fade-in-up {
          animation: fadeInUp 0.8s ease-out forwards;
        }
        .animation-delay-400 { animation-delay: 0.4s; }

        /* Slow Spin Animation */
        @keyframes spinSlow {
          from { transform: rotate(0deg); }
          to { transform: rotate(360deg); }
        }
        .animate-spin-slow {
          animation: spinSlow 15s linear infinite;
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

        /* Bounce Animation */
        @keyframes bounce {
          0%, 100% { transform: translateY(0) rotate(6deg); }
          50% { transform: translateY(-10px) rotate(6deg); }
        }
        .animate-bounce {
          animation: bounce 2s infinite ease-in-out;
        }
      `}
    </style>
    <MissionOverview />
  </div>
);

export default MissionOverviewWithStyles;
