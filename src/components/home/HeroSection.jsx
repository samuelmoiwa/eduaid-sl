import React from 'react';
import bgImage from '../../images/1.jpg';
import { Link } from 'react-router-dom'; // Assuming you're using React Router for navigation

const HeroSection = () => {
  return (
    <section id="home"
      className="relative h-[50rem] flex items-center justify-center text-center bg-cover bg-center w-full max-w-[110rem]"
      style={{ backgroundImage: `url(${bgImage})` }}
    >
      {/* Overlay for better text readability */}
      <div className="absolute inset-0 bg-black opacity-40"></div>

      {/* Content Container */}
      <div className="relative z-10 px-4 sm:px-6 lg:px-8 max-w-4xl mx-auto">
        {/* Tagline */}
        <h1 className="text-4xl sm:text-5xl lg:text-6xl font-bold text-white mb-4 font-montserrat leading-tight">
          Empowering Students Worldwide with Knowledge and Tools
        </h1>

        {/* Subtext */}
        <p className="text-lg sm:text-xl text-gray-200 mb-8 font-open-sans font-light">
          Free resources, dissertation support, and curated learning materials for all.
        </p>

        {/* CTA Buttons */}
        <div className="flex flex-col sm:flex-row justify-center gap-4 sm:gap-6">
          <Link
            to="/resources"
            className="px-6 py-3 bg-blue-600 text-white font-semibold rounded-lg shadow-md hover:bg-blue-700 hover:scale-105 transition-all duration-300"
          >
            Explore Resources
          </Link>
          <Link
            to="/dissertation-hub"
            className="px-6 py-3 bg-green-600 text-white font-semibold rounded-lg shadow-md hover:bg-green-700 hover:scale-105 transition-all duration-300"
          >
            Get Dissertation Help
          </Link>
          <Link
            to="/shop"
            className="px-6 py-3 bg-orange-600 text-white font-semibold rounded-lg shadow-md hover:bg-orange-700 hover:scale-105 transition-all duration-300"
          >
            Shop Educational Books
          </Link>
        </div>

        {/* Scroll Down Arrow (Optional) */}
        <div className="mt-12">
          <a href="#next-section" className="text-white animate-bounce">
            <svg
              className="w-8 h-8 mx-auto"
              fill="none"
              stroke="currentColor"
              viewBox="0 0 24 24"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth="2"
                d="M19 14l-7 7m0 0l-7-7m7 7V3"
              ></path>
            </svg>
          </a>
        </div>
      </div>
    </section>
  );
};

export default HeroSection;
