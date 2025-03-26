import React from 'react';
import Lottie from 'lottie-react'; // Import Lottie component
import student_lottie from '../../lottie/student_1.json'

const MissionOverview = () => {
  return (
    <section className="py-20 text-center overflow-hidden flex flex-col justify-center items-center w-full max-w-[110rem]">
      {/* Container */}
      <div className="max-w- mx-auto px-4 sm:px-6 lg:px-8 relative w-full">
        {/* Decorative Background Elements */}
        {/* <div className="absolute top-0 left-0 w-40 h-40 bg-blue-300 opacity-20 rounded-full blur-3xl -translate-x-1/2 translate-y-1/4"></div>
        <div className="absolute bottom-0 right-0 w-56 h-56 bg-green-300 opacity-20 rounded-full blur-3xl translate-x-1/3 -translate-y-1/3"></div> */}

        {/* Main Content */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          {/* Left Column: Text Content */}
          <div className="space-y-6 animate-fade-in-left">
            {/* Heading with Underline Accent */}
            <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold text-gray-800 font-montserrat relative inline-block">
              Welcome to EduAid Global
              <span className="absolute -bottom-2 left-0 w-1/2 h-1 bg-gradient-to-r from-blue-500 to-green-500 rounded-full"></span>
            </h2>

            {/* Text Block */}
            <p className="text-lg sm:text-xl text-gray-700 font-open-sans leading-relaxed max-w-lg mx-auto lg:mx-0 text-justify">
              We streamline your learning journey by scouring the internet to gather top-quality educational resources,
              expert dissertation guidance, and meticulously curated materials, all centralized in one accessible hub
              for students worldwide. Our mission is to dismantle obstacles to education, delivering a seamless,
              impactful, and transformative experience—ensuring that no matter where you are, the tools for success
              are just a click away.
            </p>

            {/* Stats or Highlights */}
            <div className="flex justify-center lg:justify-start gap-6 mt-6">
              <div className="text-center">
                <p className="text-2xl font-bold text-blue-600">10K+</p>
                <p className="text-sm text-gray-600">Resources Available</p>
              </div>
              <div className="text-center">
                <p className="text-2xl font-bold text-green-600">50+</p>
                <p className="text-sm text-gray-600">Countries Reached</p>
              </div>
            </div>
          </div>

          {/* Right Column: Visual Element */}
          <div className="relative flex justify-center lg:justify-end animate-fade-in-right">
            {/* Illustration with Hover Effect */}
            <div className="relative group">
            <Lottie
            animationData={student_lottie}
            loop={true}
            className="w-64 h-64 sm:w-80 sm:h-80 transition-transform duration-500 group-hover:scale-105"
            />
              {/* Animated Background Circle */}
              <div className="absolute inset-0 m-auto w-72 h-72 sm:w-96 sm:h-96 bg-gradient-to-tr from-blue-200 to-green-200 rounded-full opacity-40 blur-xl animate-spin-slow group-hover:opacity-60 transition-opacity duration-500"></div>
            </div>

            {/* Floating Badge */}
            <div className="absolute top-0 right-0 sm:right-4 bg-blue-600 text-white px-4 py-2 rounded-full shadow-lg transform rotate-6 hover:rotate-0 transition-transform duration-300">
              <p className="text-sm font-semibold">Global Impact</p>
            </div>
          </div>
        </div>

        {/* Optional Video (Uncomment to enable) */}
        {/*
        <div className="mt-12">
          <video
            className="w-full max-w-3xl mx-auto rounded-xl shadow-2xl border-2 border-gray-200"
            autoPlay
            loop
            muted
            playsInline
          >
            <source
              src="https://www.w3schools.com/html/mov_bbb.mp4" // Replace with your 15-second looping video
              type="video/mp4"
            />
            Your browser does not support the video tag.
          </video>
        </div>
        */}
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
          from { opacity: 0; transform: translateX(-30px); }
          to { opacity: 1; transform: translateX(0); }
        }
        .animate-fade-in-left {
          animation: fadeInLeft 1s ease-out forwards;
        }

        /* Fade In Right Animation */
        @keyframes fadeInRight {
          from { opacity: 0; transform: translateX(30px); }
          to { opacity: 1; transform: translateX(0); }
        }
        .animate-fade-in-right {
          animation: fadeInRight 1s ease-out forwards;
        }

        /* Slow Spin Animation */
        @keyframes spinSlow {
          from { transform: rotate(0deg); }
          to { transform: rotate(360deg); }
        }
        .animate-spin-slow {
          animation: spinSlow 20s linear infinite;
        }
      `}
    </style>
    <MissionOverview />
  </div>
);

export default MissionOverviewWithStyles;
