import React, { useState } from 'react';
import { FaBars, FaTimes, FaSearch } from 'react-icons/fa';

// Dummy data for resources
const dummyResources = [
  { id: 1, title: 'SAT Math Guide', category: 'Math', level: 'High School', description: 'Boost your SAT scores fast with this comprehensive guide covering key math concepts and practice questions.' },
  { id: 2, title: 'Physics Video Tutorial', category: 'Science', level: 'College', description: 'Master physics concepts through engaging video tutorials, perfect for college-level students.' },
  { id: 3, title: 'Biology Study Notes', category: 'Science', level: 'High School', description: 'Ace your biology exams with these detailed, easy-to-follow study notes.' },
  { id: 4, title: 'Spanish Grammar Basics', category: 'Languages', level: 'High School', description: 'Learn Spanish fundamentals with clear explanations and examples.' },
  { id: 5, title: 'Python for Beginners', category: 'Programming', level: 'College', description: 'Start coding with Python using this beginner-friendly resource.' },
  { id: 6, title: 'World History Timeline', category: 'History', level: 'High School', description: 'Key events in history presented in an interactive timeline format.' },
  { id: 7, title: 'Calculus Crash Course', category: 'Math', level: 'College', description: 'Master calculus quickly with this intensive crash course.' },
  { id: 8, title: 'French Vocabulary List', category: 'Languages', level: 'Professional', description: 'Expand your French skills with this extensive vocabulary list.' },
  { id: 9, title: 'Chemistry Lab Basics', category: 'Science', level: 'College', description: 'Essential lab techniques for chemistry students, with practical tips.' },
  { id: 10, title: 'JavaScript Essentials', category: 'Programming', level: 'Professional', description: 'Core JS concepts explained for professional developers.' },
];

// Resource Detail Modal Component
const ResourceDetailModal = ({ resource, onClose }) => {
  if (!resource) return null;

  return (
    <div className="fixed inset-0 bg-gray-900 bg-opacity-80 flex justify-center items-center z-50">
      <div className="bg-white rounded-xl shadow-2xl p-6 sm:p-8 max-w-lg w-full mx-4 transform transition-all duration-300 scale-95 animate-fade-in-up">
        {/* Close Button */}
        <button
          onClick={onClose}
          className="absolute top-4 right-4 text-gray-600 hover:text-gray-800 focus:outline-none"
        >
          <FaTimes size={20} />
        </button>

        {/* Modal Content */}
        <h3 className="text-2xl font-bold text-teal-800 font-montserrat mb-4">{resource.title}</h3>
        <div className="space-y-4">
          <p className="text-sm text-gray-600 font-open-sans">
            <span className="font-semibold">Category:</span> {resource.category}
          </p>
          <p className="text-sm text-gray-600 font-open-sans">
            <span className="font-semibold">Level:</span> {resource.level}
          </p>
          <p className="text-base text-gray-700 font-open-sans leading-relaxed">{resource.description}</p>
        </div>

        {/* Action Button */}
        <button
          onClick={() => alert('Resource link clicked!')} // Replace with actual link logic
          className="mt-6 w-full px-6 py-3 bg-gradient-to-r from-teal-600 to-blue-600 text-white font-semibold rounded-full shadow-md hover:from-teal-700 hover:to-blue-700 hover:scale-105 transition-all duration-300"
        >
          View Resource
        </button>
      </div>
    </div>
  );
};

const ResourceFilters = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [searchQuery, setSearchQuery] = useState('');
  const [selectedCategory, setSelectedCategory] = useState('All');
  const [selectedLevel, setSelectedLevel] = useState('All');
  const [selectedResource, setSelectedResource] = useState(null);

  const categories = ['All', 'Math', 'Science', 'Languages', 'History', 'Programming'];
  const levels = ['All', 'High School', 'College', 'Professional'];

  // Filter resources based on search, category, and level
  const filteredResources = dummyResources.filter((resource) => {
    const matchesSearch = resource.title.toLowerCase().includes(searchQuery.toLowerCase()) ||
                          resource.description.toLowerCase().includes(searchQuery.toLowerCase());
    const matchesCategory = selectedCategory === 'All' || resource.category === selectedCategory;
    const matchesLevel = selectedLevel === 'All' || resource.level === selectedLevel;
    return matchesSearch && matchesCategory && matchesLevel;
  });

  // Handlers
  const handleSearch = (e) => {
    setSearchQuery(e.target.value);
  };

  const handleCategoryChange = (category) => {
    setSelectedCategory(category);
    setIsOpen(false);
  };

  const handleLevelChange = (level) => {
    setSelectedLevel(level);
    setIsOpen(false);
  };

  const toggleMenu = () => {
    setIsOpen(!isOpen);
  };

  const openModal = (resource) => {
    setSelectedResource(resource);
  };

  const closeModal = () => {
    setSelectedResource(null);
  };

  return (
    <section className="sticky top-16 bg-white bg-opacity-90 shadow-lg z-40 py-4">
      {/* Container */}
      <div className="sm:max-w-[90%] mx-auto px-4 sm:px-6 lg:px-8">
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
            className="px-4 py-2 bg-white border border-teal-300 rounded-full text-teal-800 font-open-sans
                focus:outline-none focus:ring-2 focus:ring-teal-400 transition-all duration-300 hover:bg-teal-50"
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
              className="w-full px-4 py-2 pl-10 bg-white border border-teal-300 rounded-full text-gray-800
              font-open-sans focus:outline-none focus:ring-2 focus:ring-teal-400 transition-all duration-300 hover:bg-teal-50"
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
              className="w-full px-4 py-2 pl-10 bg-white border border-teal-300 rounded-full text-gray-800
                font-open-sans focus:outline-none focus:ring-2 focus:ring-teal-400 transition-all duration-300"
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

        {/* Resource List */}
        <div className="mt-6 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {filteredResources.length > 0 ? (
            filteredResources.map((resource) => (
              <div
                key={resource.id}
                onClick={() => openModal(resource)}
                className="bg-white p-4 rounded-xl shadow-lg hover:shadow-xl hover:-translate-y-1 transition-all duration-300 border-t-4 border-teal-500 cursor-pointer"
              >
                <h4 className="text-lg font-semibold text-gray-800 font-montserrat">{resource.title}</h4>
                <p className="text-sm text-gray-600 font-open-sans truncate">{resource.description}</p>
                <p className="text-xs text-teal-600 mt-2 font-open-sans">
                  {resource.category} • {resource.level}
                </p>
              </div>
            ))
          ) : (
            <p className="text-center text-gray-600 font-open-sans col-span-full">No resources found.</p>
          )}
        </div>

        {/* Resource Detail Modal */}
        <ResourceDetailModal resource={selectedResource} onClose={closeModal} />
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
