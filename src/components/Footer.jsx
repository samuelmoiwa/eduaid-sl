import React from 'react';
import { Link } from 'react-router-dom';
import { FaTwitter, FaLinkedin, FaInstagram, FaEnvelope } from 'react-icons/fa';

const Footer = () => {
  return (
    <footer className="bg-gradient-to-b from-gray-900 to-black text-gray-200 py-16 overflow-hidden relative">
      {/* Decorative Background Elements */}
      <div className="absolute inset-0 opacity-10">
        <div className="absolute top-0 left-0 w-72 h-72 bg-teal-500 rounded-full blur-3xl -translate-x-1/3 translate-y-1/4 animate-pulse"></div>
        <div className="absolute bottom-0 right-0 w-96 h-96 bg-blue-500 rounded-full blur-3xl translate-x-1/4 -translate-y-1/3 animate-pulse"></div>
      </div>

      {/* Container */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        {/* Main Footer Content */}
        <div className="grid grid-cols-1 md:grid-cols-4 gap-12">
          {/* Column 1: Brand & Description */}
          <div className="space-y-4 animate-fade-in-up">
            <h3 className="text-2xl font-bold font-montserrat text-teal-400">EduAid Global</h3>
            <p className="text-sm text-gray-400 font-open-sans">
              Empowering students worldwide with accessible, transformative education resources.
            </p>
            <div className="flex space-x-4">
              <a href="#" className="text-gray-400 hover:text-teal-400 transition-colors duration-300">
                <FaTwitter size={20} />
              </a>
              <a href="#" className="text-gray-400 hover:text-teal-400 transition-colors duration-300">
                <FaLinkedin size={20} />
              </a>
              <a href="#" className="text-gray-400 hover:text-teal-400 transition-colors duration-300">
                <FaInstagram size={20} />
              </a>
            </div>
          </div>

          {/* Column 2: Quick Links */}
          <div className="space-y-4 animate-fade-in-up animation-delay-200">
            <h3 className="text-lg font-semibold font-montserrat text-teal-300">Quick Links</h3>
            <ul className="space-y-2 text-sm font-open-sans">
              <li>
                <Link to="/" className="text-gray-400 hover:text-teal-400 transition-colors duration-300">
                  Home
                </Link>
              </li>
              <li>
                <Link to="/resources" className="text-gray-400 hover:text-teal-400 transition-colors duration-300">
                  Resources
                </Link>
              </li>
              <li>
                <Link to="/shop" className="text-gray-400 hover:text-teal-400 transition-colors duration-300">
                  Shop
                </Link>
              </li>
              <li>
                <Link to="/contact" className="text-gray-400 hover:text-teal-400 transition-colors duration-300">
                  Contact
                </Link>
              </li>
            </ul>
          </div>

          {/* Column 3: Support */}
          <div className="space-y-4 animate-fade-in-up animation-delay-400">
            <h3 className="text-lg font-semibold font-montserrat text-teal-300">Support</h3>
            <ul className="space-y-2 text-sm font-open-sans">
              <li>
                <Link to="/faq" className="text-gray-400 hover:text-teal-400 transition-colors duration-300">
                  FAQ
                </Link>
              </li>
              <li>
                <Link to="/terms" className="text-gray-400 hover:text-teal-400 transition-colors duration-300">
                  Terms of Service
                </Link>
              </li>
              <li>
                <Link to="/privacy" className="text-gray-400 hover:text-teal-400 transition-colors duration-300">
                  Privacy Policy
                </Link>
              </li>
              <li>
                <Link to="/help" className="text-gray-400 hover:text-teal-400 transition-colors duration-300">
                  Help Center
                </Link>
              </li>
            </ul>
          </div>

          {/* Column 4: Newsletter Signup */}
          <div className="space-y-4 animate-fade-in-up animation-delay-600">
            <h3 className="text-lg font-semibold font-montserrat text-teal-300">Stay Updated</h3>
            <p className="text-sm text-gray-400 font-open-sans">
              Subscribe to our newsletter for the latest resources and offers.
            </p>
            <form className="flex flex-col sm:flex-row gap-2">
              <input
                type="email"
                placeholder="Your Email"
                className="px-4 py-3 bg-gray-800 border border-teal-500 rounded-lg focus:outline-none focus:ring-2 focus:ring-teal-400 text-white placeholder-gray-500 transition-all duration-300"
              />
              <button
                type="submit"
                className="px-6 py-3 bg-gradient-to-r from-teal-500 to-blue-600 text-white font-semibold rounded-lg hover:from-teal-600 hover:to-blue-700 transition-all duration-300"
              >
                Subscribe
              </button>
            </form>
          </div>
        </div>

        {/* Divider */}
        <div className="mt-12 border-t border-gray-700 animate-fade-in-up animation-delay-800"></div>

        {/* Bottom Bar */}
        <div className="mt-8 flex flex-col md:flex-row justify-between items-center text-sm text-gray-400 font-open-sans animate-fade-in-up animation-delay-1000">
          <p>&copy; {new Date().getFullYear()} EduAid Global. All rights reserved.</p>
          <div className="flex space-x-4 mt-4 md:mt-0">
            <a href="mailto:support@eduaidglobal.com" className="flex items-center text-gray-400 hover:text-teal-400 transition-colors duration-300">
              <FaEnvelope className="mr-2" /> support@eduaidglobal.com
            </a>
          </div>
        </div>
      </div>

      {/* Floating Accent */}
      <div className="absolute bottom-4 right-4 bg-teal-500 text-white px-4 py-2 rounded-full shadow-lg transform rotate-6 hover:rotate-0 transition-transform duration-300 animate-bounce">
        <span className="text-sm font-semibold">Back to Top</span>
      </div>
    </footer>
  );
};

// Custom Styles and Fonts
const FooterWithStyles = () => (
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
        .animation-delay-400 { animation-delay: 0.4s; }
        .animation-delay-600 { animation-delay: 0.6s; }
        .animation-delay-800 { animation-delay: 0.8s; }
        .animation-delay-1000 { animation-delay: 1s; }

        /* Pulse Animation for Background */
        @keyframes pulse {
          0% { opacity: 0.1; }
          50% { opacity: 0.2; }
          100% { opacity: 0.1; }
        }
        .animate-pulse {
          animation: pulse 5s infinite ease-in-out;
        }

        /* Bounce Animation for Floating Accent */
        @keyframes bounce {
          0%, 100% { transform: translateY(0) rotate(6deg); }
          50% { transform: translateY(-10px) rotate(6deg); }
        }
        .animate-bounce {
          animation: bounce 2s infinite ease-in-out;
        }
      `}
    </style>
    <Footer />
  </div>
);

export default FooterWithStyles;
