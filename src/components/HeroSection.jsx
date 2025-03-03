import React from 'react';
import bgImage from '../images/1.jpg';

const HeroSection = () => {
  return (
    <section id="home"
      className="relative h-[50rem] flex items-center justify-center text-center bg-cover bg-center w-full max-w-[110rem]"
      style={{ backgroundImage: `url(${bgImage})` }}
    >
      {/* Dark overlay for better text readability */}
      <div className="absolute inset-0 bg-black opacity-60"></div>

      {/* Content */}
      <div className="relative z-10 text-white max-w-4xl px-4">
        {/* Title */}
        <h1 className="text-5xl md:text-6xl font-bold mb-6">
          Welcome to Eduaid-SL – Your Academic Companion!
        </h1>

        {/* Subtitle */}
        <p className="text-xl md:text-2xl mb-8">
          Get help with desaturation, assignments, tutorials, and more. Designed for Sierra Leone students, by Sierra Leoneans.
        </p>

        {/* Call-to-Action Buttons */}
        <div className="flex flex-col sm:flex-row gap-4 justify-center">
          <a
            href="#services" // Link to the Services section
            className="bg-blue-600 hover:bg-blue-700 text-white font-semibold py-3 px-8 rounded-lg transition duration-300 transform hover:scale-105"
          >
            Get Started
          </a>
          <a
            href="https://your-community-link.com" // Replace with your community link
            target="_blank"
            rel="noopener noreferrer"
            className="bg-transparent border-2 border-blue-600 hover:bg-blue-600 text-white font-semibold py-3 px-8 rounded-lg transition duration-300 transform hover:scale-105"
          >
            Join Our Community
          </a>
        </div>
      </div>
    </section>
  );
};




export default HeroSection;
