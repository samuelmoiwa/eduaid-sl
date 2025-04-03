import React, { useState } from 'react';
import { FaTimes, FaSearch, FaBullhorn, FaUsers, FaPlane, FaHeart, FaSpa } from 'react-icons/fa';
import Slider from 'react-slick'; // Import react-slick for carousel
import 'slick-carousel/slick/slick.css'; // Import slick carousel styles
import 'slick-carousel/slick/slick-theme.css'; // Import slick theme styles

// Dummy data with placeholder affiliate links
const dummyBooks = [
  { id: 1, title: 'SAT Prep 2025', author: 'The Princeton Review', category: 'Education', price: 29.99, affiliateLinks: [{ site: 'Amazon', url: 'https://amzn.to/dummy-sat-prep-2025', color: 'from-orange-500 to-yellow-500' }, { site: 'Bookshop.org', url: 'https://bookshop.org/dummy-sat-prep-2025', color: 'from-teal-600 to-blue-600' }], image: 'https://via.placeholder.com/200x300?text=SAT+Prep+2025', description: 'A comprehensive guide to ace your SATs with practice tests and strategies.' },
  { id: 2, title: 'Python Crash Course', author: 'Eric Matthes', category: 'Programming', price: 39.95, affiliateLinks: [{ site: 'Amazon', url: 'https://amzn.to/dummy-python-crash', color: 'from-orange-500 to-yellow-500' }, { site: 'Barnes & Noble', url: 'https://barnesandnoble.com/dummy-python-crash', color: 'from-blue-600 to-indigo-600' }], image: 'https://via.placeholder.com/200x300?text=Python+Crash+Course', description: 'Learn Python programming from scratch with this hands-on guide.' },
  { id: 3, title: 'The Elements of Style', author: 'William Strunk Jr.', category: 'Writing', price: 9.99, affiliateLinks: [{ site: 'Bookshop.org', url: 'https://bookshop.org/dummy-elements-style', color: 'from-teal-600 to-blue-600' }, { site: 'Amazon', url: 'https://amzn.to/dummy-elements-style', color: 'from-orange-500 to-yellow-500' }], image: 'https://via.placeholder.com/200x300?text=Elements+of+Style', description: 'A timeless classic for improving your writing skills.' },
  { id: 4, title: 'Calculus Made Easy', author: 'Silvanus P. Thompson', category: 'Math', price: 14.95, affiliateLinks: [{ site: 'Barnes & Noble', url: 'https://barnesandnoble.com/dummy-calculus-easy', color: 'from-blue-600 to-indigo-600' }, { site: 'Bookshop.org', url: 'https://bookshop.org/dummy-calculus-easy', color: 'from-teal-600 to-blue-600' }], image: 'https://via.placeholder.com/200x300?text=Calculus+Made+Easy', description: 'Simplify calculus with this accessible and engaging book.' },
  { id: 5, title: 'SAT Prep 2025', author: 'The Princeton Review', category: 'Education', price: 29.99, affiliateLinks: [{ site: 'Amazon', url: 'https://amzn.to/dummy-sat-prep-2025', color: 'from-orange-500 to-yellow-500' }, { site: 'Bookshop.org', url: 'https://bookshop.org/dummy-sat-prep-2025', color: 'from-teal-600 to-blue-600' }], image: 'https://via.placeholder.com/200x300?text=SAT+Prep+2025', description: 'A comprehensive guide to ace your SATs with practice tests and strategies.' },
  { id: 6, title: 'Python Crash Course', author: 'Eric Matthes', category: 'Programming', price: 39.95, affiliateLinks: [{ site: 'Amazon', url: 'https://amzn.to/dummy-python-crash', color: 'from-orange-500 to-yellow-500' }, { site: 'Barnes & Noble', url: 'https://barnesandnoble.com/dummy-python-crash', color: 'from-blue-600 to-indigo-600' }], image: 'https://via.placeholder.com/200x300?text=Python+Crash+Course', description: 'Learn Python programming from scratch with this hands-on guide.' },
  { id: 7, title: 'The Elements of Style', author: 'William Strunk Jr.', category: 'Writing', price: 9.99, affiliateLinks: [{ site: 'Bookshop.org', url: 'https://bookshop.org/dummy-elements-style', color: 'from-teal-600 to-blue-600' }, { site: 'Amazon', url: 'https://amzn.to/dummy-elements-style', color: 'from-orange-500 to-yellow-500' }], image: 'https://via.placeholder.com/200x300?text=Elements+of+Style', description: 'A timeless classic for improving your writing skills.' },
  { id: 8, title: 'Calculus Made Easy', author: 'Silvanus P. Thompson', category: 'Math', price: 14.95, affiliateLinks: [{ site: 'Barnes & Noble', url: 'https://barnesandnoble.com/dummy-calculus-easy', color: 'from-blue-600 to-indigo-600' }, { site: 'Bookshop.org', url: 'https://bookshop.org/dummy-calculus-easy', color: 'from-teal-600 to-blue-600' }], image: 'https://via.placeholder.com/200x300?text=Calculus+Made+Easy', description: 'Simplify calculus with this accessible and engaging book.' },
];

// Carousel data
const carouselData = [
  { title: 'Marketing', description: 'Master the art of reaching and engaging customers', icon: <FaBullhorn size={40} />, gradient: 'from-orange-500 to-yellow-500' },
  { title: 'Human Resource Management', description: 'Build a thriving and dynamic workforce', icon: <FaUsers size={40} />, gradient: 'from-teal-600 to-blue-600' },
  { title: 'Tourism & Hospitality Management', description: 'Dive into the world of travel and hospitality', icon: <FaPlane size={40} />, gradient: 'from-blue-600 to-indigo-600' },
  { title: 'Stress Management', description: 'Discover techniques for a balanced and healthy life', icon: <FaHeart size={40} />, gradient: 'from-teal-600 to-cyan-500' },
  { title: 'Health & Beauty', description: 'Embrace wellness, self-care, and confidence', icon: <FaSpa size={40} />, gradient: 'from-orange-500 to-pink-500' },
];

// Book Detail Modal Component
const BookDetailModal = ({ book, onClose }) => {
  if (!book) return null;

  return (
    <div className="fixed inset-0 bg-gray-900 bg-opacity-80 flex justify-center items-center z-50">
      <div className="bg-white rounded-xl shadow-2xl p-6 sm:p-8 max-w-lg w-full mx-4 transform transition-all duration-300 scale-95 animate-fade-in-up">
        <button onClick={onClose} className="absolute top-4 right-4 text-gray-600 hover:text-gray-800 focus:outline-none">
          <FaTimes size={20} />
        </button>
        <img src={book.image} alt={book.title} className="w-32 h-48 mx-auto mb-4 rounded-md shadow-md" />
        <h3 className="text-2xl font-bold text-teal-800 font-montserrat mb-4 text-center">{book.title}</h3>
        <p className="text-sm text-gray-600 font-open-sans mb-2"><span className="font-semibold">Author:</span> {book.author}</p>
        <p className="text-sm text-gray-600 font-open-sans mb-2"><span className="font-semibold">Category:</span> {book.category}</p>
        <p className="text-sm text-gray-600 font-open-sans mb-4"><span className="font-semibold">Price:</span> ${book.price.toFixed(2)}</p>
        <p className="text-base text-gray-700 font-open-sans leading-relaxed mb-6">{book.description}</p>
        <div className="space-y-3">
          {book.affiliateLinks.map((link) => (
            <a key={link.site} href={link.url} target="_blank" rel="noopener noreferrer" className={`block w-full px-6 py-3 bg-gradient-to-r ${link.color} text-white font-semibold rounded-full shadow-md hover:scale-105 transition-all duration-300 text-center`}>
              Buy on {link.site}
            </a>
          ))}
        </div>
      </div>
    </div>
  );
};

const ShopPage = () => {
  const [selectedBook, setSelectedBook] = useState(null);
  const [searchQuery, setSearchQuery] = useState('');

  const openModal = (book) => setSelectedBook(book);
  const closeModal = () => setSelectedBook(null);

  const filteredBooks = dummyBooks.filter((book) => book.title.toLowerCase().includes(searchQuery.toLowerCase()));

  // Carousel settings
  const settings = {
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 3,
    slidesToScroll: 1,
    autoplay: true,
    autoplaySpeed: 3000,
    responsive: [
      { breakpoint: 1024, settings: { slidesToShow: 2 } },
      { breakpoint: 640, settings: { slidesToShow: 1 } },
    ],
  };

  return (
    <section className="py-16 bg-gradient-to-b from-teal-100 via-white to-blue-100">
      {/* Hero Section */}
      <div className="text-center mb-12">
        <h1 className="text-4xl sm:text-5xl font-bold font-montserrat text-teal-800 relative inline-block">
          Shop Educational & Lifestyle Books <br /> at EduAid Global
          <span className="absolute -bottom-3 left-0 w-full h-2 bg-gradient-to-r from-orange-500 to-yellow-500 rounded-full transform -skew-y-3"></span>
        </h1>
        <p className="text-lg sm:text-xl text-gray-700 font-open-sans mt-[6rem] max-w-2xl mx-auto">
          Unlock knowledge, enrich your life, and enhance your career with our curated collection of books in diverse fields
        </p>
        {/* Carousel */}
        <div className="max-w-5xl mx-auto mt-4">
          <Slider {...settings}>
            {carouselData.map((item) => (
              <div key={item.title} className="px-2">
                <div className={`bg-white rounded-xl shadow-lg p-6 h-48 flex flex-col items-center justify-center text-center transform transition-all duration-300 hover:scale-105 hover:shadow-2xl border-t-4 border-gradient-to-r ${item.gradient}`}>
                  <div className={`text-white bg-gradient-to-r ${item.gradient} p-3 rounded-full mb-4`}>{item.icon}</div>
                  <h3 className="text-lg font-semibold text-gray-800 font-montserrat">{item.title}</h3>
                  <p className="text-sm text-gray-600 font-open-sans mt-2">{item.description}</p>
                </div>
              </div>
            ))}
          </Slider>
        </div>
        <p className="text-lg sm:text-xl text-gray-700 font-open-sans mt-8 max-w-2xl mx-auto">
          Browse now and invest in your future, one book at a time!
        </p>
      </div>

      {/* Search Filter */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 mb-12">
        <div className="relative max-w-md mx-auto">
          <input
            type="text"
            value={searchQuery}
            onChange={(e) => setSearchQuery(e.target.value)}
            placeholder="Search books by title..."
            className="w-full px-4 py-3 pl-10 bg-white border border-teal-300 rounded-full text-gray-800 font-open-sans focus:outline-none focus:ring-2 focus:ring-teal-400 transition-all duration-300 hover:bg-teal-50 shadow-md"
          />
          <FaSearch className="absolute left-3 top-1/2 transform -translate-y-1/2 text-teal-600" />
        </div>
      </div>

      {/* Book Grid */}
      <div className="max-w-[90rem] mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8">
          {filteredBooks.length > 0 ? (
            filteredBooks.map((book) => (
              <div key={book.id} onClick={() => openModal(book)} className="group bg-white rounded-xl shadow-lg hover:shadow-2xl hover:-translate-y-2 transition-all duration-300 cursor-pointer overflow-hidden">
                <div className="relative">
                  <img src={book.image} alt={book.title} className="w-full h-64 object-cover transform group-hover:scale-105 transition-transform duration-300" />
                  <div className="absolute inset-0 bg-gradient-to-t from-gray-900 via-transparent to-transparent opacity-0 group-hover:opacity-70 transition-opacity duration-300"></div>
                  <p className="absolute bottom-2 left-2 text-white font-semibold font-open-sans opacity-0 group-hover:opacity-100 transition-opacity duration-300">Click to View</p>
                </div>
                <div className="p-4">
                  <h3 className="text-lg font-semibold text-gray-800 font-montserrat truncate">{book.title}</h3>
                  <p className="text-sm text-gray-600 font-open-sans">{book.author}</p>
                  <p className="text-sm text-teal-600 font-open-sans mt-1">${book.price.toFixed(2)}</p>
                </div>
              </div>
            ))
          ) : (
            <p className="text-center text-gray-600 font-open-sans col-span-full">No books found.</p>
          )}
        </div>
      </div>

      {/* Book Detail Modal */}
      <BookDetailModal book={selectedBook} onClose={closeModal} />
    </section>
  );
};

// Custom Styles and Fonts
const ShopPageWithStyles = () => (
  <div>
    <style>
      {`
        @import url('https://fonts.googleapis.com/css2?family=Montserrat:wght@700&family=Open+Sans&display=swap');
        .font-montserrat { font-family: 'Montserrat', sans-serif; }
        .font-open-sans { font-family: 'Open Sans', sans-serif; }
        @keyframes fadeInUp { from { opacity: 0; transform: translateY(20px); } to { opacity: 1; transform: translateY(0); } }
        .animate-fade-in-up { animation: fadeInUp 0.5s ease-out forwards; }
        .slick-dots li button:before { color: #38b2ac; }
        .slick-dots li.slick-active button:before { color: #ed8936; }
      `}
    </style>
    <ShopPage />
  </div>
);

export default ShopPageWithStyles;
