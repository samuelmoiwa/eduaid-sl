import React, { useState } from 'react';
import { Link, NavLink } from 'react-router-dom';
import { FaBars, FaTimes } from 'react-icons/fa';

const NavBar = () => {
  const [isOpen, setIsOpen] = useState(false);

  const toggleMenu = () => {
    setIsOpen(!isOpen);
  };

  return (
    <nav className="fixed top-0 left-0 w-full bg-gradient-to-r from-teal-600 to-blue-700 text-white shadow-lg z-50">
      {/* Container */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center py-4">
          {/* Logo */}
          <Link to="/" className="text-2xl font-bold font-montserrat flex items-center space-x-2 animate-fade-in">
            <span className="text-yellow-400">EduAid</span>
            <span>Global</span>
          </Link>

          {/* Desktop Navigation */}
          <div className="hidden md:flex space-x-8 items-center">
            <NavLink
              to="/"
              className={({ isActive }) =>
                `text-lg font-open-sans transition-all duration-300 ${
                  isActive ? 'text-yellow-400' : 'text-white hover:text-teal-200'
                }`
              }
            >
              Home
            </NavLink>
            <NavLink
              to="/resources"
              className={({ isActive }) =>
                `text-lg font-open-sans transition-all duration-300 ${
                  isActive ? 'text-yellow-400' : 'text-white hover:text-teal-200'
                }`
              }
            >
              Resources
            </NavLink>
            <NavLink
              to="/shop"
              className={({ isActive }) =>
                `text-lg font-open-sans transition-all duration-300 ${
                  isActive ? 'text-yellow-400' : 'text-white hover:text-teal-200'
                }`
              }
            >
              Shop
            </NavLink>
            <NavLink
              to="/help"
              className={({ isActive }) =>
                `text-lg font-open-sans transition-all duration-300 ${
                  isActive ? 'text-yellow-400' : 'text-white hover:text-teal-200'
                }`
              }
            >
              Help Desk
            </NavLink>
            <NavLink
              to="/contact"
              className={({ isActive }) =>
                `text-lg font-open-sans transition-all duration-300 ${
                  isActive ? 'text-yellow-400' : 'text-white hover:text-teal-200'
                }`
              }
            >
              Contact
            </NavLink>
            {/* CTA Button */}
            <Link
              to="/signup"
              className="px-4 py-2 bg-yellow-400 text-gray-900 font-semibold rounded-lg shadow-md hover:bg-yellow-500 hover:scale-105 transition-all duration-300"
            >
              Sign Up
            </Link>
          </div>

          {/* Mobile Menu Button */}
          <div className="md:hidden flex items-center">
            <button onClick={toggleMenu} className="text-white focus:outline-none">
              {isOpen ? <FaTimes size={24} /> : <FaBars size={24} />}
            </button>
          </div>
        </div>

        {/* Mobile Navigation */}
        <div
          className={`md:hidden absolute top-16 left-0 w-full bg-teal-700 text-white transition-all duration-500 ease-in-out ${
            isOpen ? 'max-h-96 opacity-100' : 'max-h-0 opacity-0 overflow-hidden'
          }`}
        >
          <div className="flex flex-col space-y-6 py-6 px-4 animate-fade-in-up">
            <NavLink
              to="/"
              className={({ isActive }) =>
                `text-lg font-open-sans transition-all duration-300 ${
                  isActive ? 'text-yellow-400' : 'text-white hover:text-teal-200'
                }`
              }
              onClick={toggleMenu}
            >
              Home
            </NavLink>
            <NavLink
              to="/resources"
              className={({ isActive }) =>
                `text-lg font-open-sans transition-all duration-300 ${
                  isActive ? 'text-yellow-400' : 'text-white hover:text-teal-200'
                }`
              }
              onClick={toggleMenu}
            >
              Resources
            </NavLink>
            <NavLink
              to="/shop"
              className={({ isActive }) =>
                `text-lg font-open-sans transition-all duration-300 ${
                  isActive ? 'text-yellow-400' : 'text-white hover:text-teal-200'
                }`
              }
              onClick={toggleMenu}
            >
              Shop
            </NavLink>
            <NavLink
              to="/help"
              className={({ isActive }) =>
                `text-lg font-open-sans transition-all duration-300 ${
                  isActive ? 'text-yellow-400' : 'text-white hover:text-teal-200'
                }`
              }
              onClick={toggleMenu}
            >
              Help Desk
            </NavLink>
            <NavLink
              to="/contact"
              className={({ isActive }) =>
                `text-lg font-open-sans transition-all duration-300 ${
                  isActive ? 'text-yellow-400' : 'text-white hover:text-teal-200'
                }`
              }
              onClick={toggleMenu}
            >
              Contact
            </NavLink>
            <Link
              to="/signup"
              className="px-4 py-2 bg-yellow-400 text-gray-900 font-semibold rounded-lg shadow-md hover:bg-yellow-500 hover:scale-105 transition-all duration-300 text-center"
              onClick={toggleMenu}
            >
              Sign Up
            </Link>
          </div>
        </div>
      </div>
    </nav>
  );
};

// Custom Styles and Fonts
const NavBarWithStyles = () => (
  <div>
    <style>
      {`
        @import url('https://fonts.googleapis.com/css2?family=Montserrat:wght@700&family=Open+Sans&display=swap');
        .font-montserrat { font-family: 'Montserrat', sans-serif; }
        .font-open-sans { font-family: 'Open Sans', sans-serif; }

        /* Fade In Animation */
        @keyframes fadeIn {
          from { opacity: 0; }
          to { opacity: 1; }
        }
        .animate-fade-in {
          animation: fadeIn 0.8s ease-out forwards;
        }

        /* Fade In Up Animation for Mobile Menu */
        @keyframes fadeInUp {
          from { opacity: 0; transform: translateY(20px); }
          to { opacity: 1; transform: translateY(0); }
        }
        .animate-fade-in-up {
          animation: fadeInUp 0.5s ease-out forwards;
        }
      `}
    </style>
    <NavBar />
  </div>
);

export default NavBarWithStyles;
