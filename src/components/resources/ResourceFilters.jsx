import React, { useState } from 'react';
import { FaBars, FaTimes, FaSearch } from 'react-icons/fa';

const ResourceFilters = ({ onFilterChange }) => {
  const [isOpen, setIsOpen] = useState(false);
  const [searchQuery, setSearchQuery] = useState('');
  const [selectedCategory, setSelectedCategory] = useState('All');
  const [selectedLevel, setSelectedLevel] = useState('All');

  const categories = ['All', 'Math', 'Science', 'Languages', 'History', 'Programming'];
  const levels = ['All', 'High School', 'College', 'Professional'];

  // Debounced search handler (simplified for demo; use lodash.debounce in production)
  const handleSearch = (e) => {
    const query = e.target.value;
    setSearchQuery(query);
    if (onFilterChange) {
      onFilterChange({ search: query, category: selectedCategory, level: selectedLevel });
    }
  };

  const handleCategoryChange = (category) => {
    setSelectedCategory(category);
    if (onFilterChange) {
      onFilterChange({ search: searchQuery, category, level: selectedLevel });
    }
    setIsOpen(false); // Close mobile menu on selection
  };

  const handleLevelChange = (level) => {
    setSelectedLevel(level);
    if (onFilterChange) {
      onFilterChange({ search: searchQuery, category: selectedCategory, level });
    }
    setIsOpen(false); // Close mobile menu on selection
  };

  const toggleMenu = () => {
    setIsOpen(!isOpen);
  };

  return (
    <section className="sticky top-16 bg-white bg-opacity-90 shadow-lg z-40 py-4">
      {/* Container */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Desktop Filters */}
        <div className="hidden md:flex items-center justify-between space-x-6">
          {/* Category Buttons */}
          <div className="flex space-x-4">
            {categories.map((category) => (
              <button
                key={category}
                onClick={() => handleCategoryChange(category)}
                className={`px-4 py-2 rounded-full font-semibold font-open-sans transition-all duration-300 ${
                  selectedCategory === category
                    ? 'bg-gradient-to-r from-teal-600 to-blue-600 text-white shadow-md'
                    : 'bg-teal-100 text-teal-800 hover:bg-teal-200 hover:scale-105'
                }`}
              >
                {category}
              </button>
            ))}
          </div>

          {/* Level Dropdown */}
          <select
            value={selectedLevel}
            onChange={(e) => handleLevelChange(e.target.value)}
            className="px-4 py-2 bg-white border border-teal-300 rounded-full text-teal-800 font-open-sans focus:outline-none focus:ring-2 focus:ring-teal-400 transition-all duration-300 hover:bg-teal-50"
          >
            {levels.map((level) => (
              <option key={level} value={level}>
                {level}
              </option>
            ))}
          </select>

          {/* Search Input */}
          <div className="relative flex-grow max-w-md">
            <input
              type="text"
              value={searchQuery}
              onChange={handleSearch}
              placeholder="Search resources..."
              className="w-full px-4 py-2 pl-10 bg-white border border-teal-300 rounded-full text-gray-800 font-open-sans focus:outline-none focus:ring-2 focus:ring-teal-400 transition-all duration-300 hover:bg-teal-50"
            />
            <FaSearch className="absolute left-3 top-1/2 transform -translate-y-1/2 text-teal-600" />
          </div>
        </div>

        {/* Mobile Filters */}
        <div className="md:hidden flex items-center justify-between">
          {/* Hamburger Button */}
          <button onClick={toggleMenu} className="text-teal-800 focus:outline-none">
            {isOpen ? <FaTimes size={24} /> : <FaBars size={24} />}
          </button>

          {/* Search Input (Always Visible on Mobile) */}
          <div className="relative flex-grow max-w-xs">
            <input
              type="text"
              value={searchQuery}
              onChange={handleSearch}
              placeholder="Search..."
              className="w-full px-4 py-2 pl-10 bg-white border border-teal-300 rounded-full text-gray-800 font-open-sans focus:outline-none focus:ring-2 focus:ring-teal-400 transition-all duration-300"
            />
            <FaSearch className="absolute left-3 top-1/2 transform -translate-y-1/2 text-teal-600" />
          </div>
        </div>

        {/* Mobile Menu Dropdown */}
        <div
          className={`md:hidden absolute top-16 left-0 w-full bg-white bg-opacity-95 shadow-lg transition-all duration-500 ease-in-out ${
            isOpen ? 'max-h-96 opacity-100' : 'max-h-0 opacity-0 overflow-hidden'
          }`}
        >
          <div className="p-4 space-y-4 animate-fade-in-up">
            {/* Category Buttons */}
            <div className="flex flex-col space-y-2">
              <p className="text-sm font-semibold text-teal-800 font-montserrat">Categories</p>
              {categories.map((category) => (
                <button
                  key={category}
                  onClick={() => handleCategoryChange(category)}
                  className={`px-4 py-2 rounded-full font-semibold font-open-sans text-left ${
                    selectedCategory === category
                      ? 'bg-gradient-to-r from-teal-600 to-blue-600 text-white'
                      : 'bg-teal-100 text-teal-800 hover:bg-teal-200'
                  }`}
                >
                  {category}
                </button>
              ))}
            </div>

            {/* Level Dropdown */}
            <div>
              <p className="text-sm font-semibold text-teal-800 font-montserrat">Level</p>
              <select
                value={selectedLevel}
                onChange={(e) => handleLevelChange(e.target.value)}
                className="w-full px-4 py-2 mt-2 bg-white border border-teal-300 rounded-full text-teal-800 font-open-sans focus:outline-none focus:ring-2 focus:ring-teal-400 transition-all duration-300"
              >
                {levels.map((level) => (
                  <option key={level} value={level}>
                    {level}
                  </option>
                ))}
              </select>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

// Custom Styles and Fonts
const ResourceFiltersWithStyles = () => (
  <div>
    <style>
      {`
        @import url('https://fonts.googleapis.com/css2?family=Montserrat:wght@700&family=Open+Sans&display=swap');
        .font-montserrat { font-family: 'Montserrat', sans-serif; }
        .font-open-sans { font-family: 'Open Sans', sans-serif; }

        /* Fade In Up Animation */
        @keyframes fadeInUp {
          from { opacity: 0; transform: translateY(20px); }
          to { opacity: 1; transform: translateY(0); }
        }
        .animate-fade-in-up {
          animation: fadeInUp 0.5s ease-out forwards;
        }
      `}
    </style>
    <ResourceFilters />
  </div>
);

export default ResourceFiltersWithStyles;
