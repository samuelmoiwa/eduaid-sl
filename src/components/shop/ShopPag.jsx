import React, { useState } from 'react';
import { FaTimes } from 'react-icons/fa';

// Dummy data with placeholder affiliate links
const dummyBooks = [
  {
    id: 1,
    title: 'SAT Prep 2025',
    author: 'The Princeton Review',
    category: 'Education',
    price: 29.99,
    affiliateLinks: [
      { site: 'Amazon', url: 'https://amzn.to/dummy-sat-prep-2025', color: 'from-orange-500 to-yellow-500' },
      { site: 'Bookshop.org', url: 'https://bookshop.org/dummy-sat-prep-2025', color: 'from-teal-600 to-blue-600' },
    ],
    image: 'https://via.placeholder.com/200x300?text=SAT+Prep+2025',
    description: 'A comprehensive guide to ace your SATs with practice tests and strategies.',
  },
  {
    id: 2,
    title: 'Python Crash Course',
    author: 'Eric Matthes',
    category: 'Programming',
    price: 39.95,
    affiliateLinks: [
      { site: 'Amazon', url: 'https://amzn.to/dummy-python-crash', color: 'from-orange-500 to-yellow-500' },
      { site: 'Barnes & Noble', url: 'https://barnesandnoble.com/dummy-python-crash', color: 'from-blue-600 to-indigo-600' },
    ],
    image: 'https://via.placeholder.com/200x300?text=Python+Crash+Course',
    description: 'Learn Python programming from scratch with this hands-on guide.',
  },
  {
    id: 3,
    title: 'The Elements of Style',
    author: 'William Strunk Jr.',
    category: 'Writing',
    price: 9.99,
    affiliateLinks: [
      { site: 'Bookshop.org', url: 'https://bookshop.org/dummy-elements-style', color: 'from-teal-600 to-blue-600' },
      { site: 'Amazon', url: 'https://amzn.to/dummy-elements-style', color: 'from-orange-500 to-yellow-500' },
    ],
    image: 'https://via.placeholder.com/200x300?text=Elements+of+Style',
    description: 'A timeless classic for improving your writing skills.',
  },
  {
    id: 4,
    title: 'Calculus Made Easy',
    author: 'Silvanus P. Thompson',
    category: 'Math',
    price: 14.95,
    affiliateLinks: [
      { site: 'Barnes & Noble', url: 'https://barnesandnoble.com/dummy-calculus-easy', color: 'from-blue-600 to-indigo-600' },
      { site: 'Bookshop.org', url: 'https://bookshop.org/dummy-calculus-easy', color: 'from-teal-600 to-blue-600' },
    ],
    image: 'https://via.placeholder.com/200x300?text=Calculus+Made+Easy',
    description: 'Simplify calculus with this accessible and engaging book.',
  },
];

// Book Detail Modal Component
const BookDetailModal = ({ book, onClose }) => {
  if (!book) return null;

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
        <img src={book.image} alt={book.title} className="w-32 h-48 mx-auto mb-4 rounded-md shadow-md" />
        <h3 className="text-2xl font-bold text-teal-800 font-montserrat mb-4 text-center">{book.title}</h3>
        <p className="text-sm text-gray-600 font-open-sans mb-2">
          <span className="font-semibold">Author:</span> {book.author}
        </p>
        <p className="text-sm text-gray-600 font-open-sans mb-2">
          <span className="font-semibold">Category:</span> {book.category}
        </p>
        <p className="text-sm text-gray-600 font-open-sans mb-4">
          <span className="font-semibold">Price:</span> ${book.price.toFixed(2)}
        </p>
        <p className="text-base text-gray-700 font-open-sans leading-relaxed mb-6">{book.description}</p>

        {/* Affiliate Links */}
        <div className="space-y-3">
          {book.affiliateLinks.map((link) => (
            <a
              key={link.site}
              href={link.url}
              target="_blank"
              rel="noopener noreferrer"
              className={`block w-full px-6 py-3 bg-gradient-to-r ${link.color} text-white font-semibold rounded-full shadow-md hover:scale-105 transition-all duration-300 text-center`}
            >
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

  const openModal = (book) => {
    setSelectedBook(book);
  };

  const closeModal = () => {
    setSelectedBook(null);
  };

  return (
    <section >
      {/* Hero Section */}
      <div className="text-center mb-12">
        <h1 className="text-4xl sm:text-5xl font-bold font-montserrat text-teal-800 relative inline-block">
          Explore Our Book Shop
          <span className="absolute -bottom-3 left-0 w-full h-2 bg-gradient-to-r from-orange-500 to-yellow-500 rounded-full transform -skew-y-3"></span>
        </h1>
        <p className="text-lg sm:text-xl text-gray-700 font-open-sans mt-4 max-w-2xl mx-auto">
          Discover top educational books with affiliate links to support your learning journey.
        </p>
      </div>

      {/* Book Grid */}
      <div className="w-full mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8">
          {dummyBooks.map((book) => (
            <div
              key={book.id}
              onClick={() => openModal(book)}
              className="group bg-white rounded-xl shadow-lg hover:shadow-2xl hover:-translate-y-2 transition-all duration-300 cursor-pointer overflow-hidden"
            >
              <div className="relative">
                <img
                  src={book.image}
                  alt={book.title}
                  className="w-full h-64 object-cover transform group-hover:scale-105 transition-transform duration-300"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-gray-900 via-transparent to-transparent opacity-0 group-hover:opacity-70 transition-opacity duration-300"></div>
                <p className="absolute bottom-2 left-2 text-white font-semibold font-open-sans opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                  Click to View
                </p>
              </div>
              <div className="p-4">
                <h3 className="text-lg font-semibold text-gray-800 font-montserrat truncate">{book.title}</h3>
                <p className="text-sm text-gray-600 font-open-sans">{book.author}</p>
                <p className="text-sm text-teal-600 font-open-sans mt-1">${book.price.toFixed(2)}</p>
              </div>
            </div>
          ))}
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
    <ShopPage />
  </div>
);

export default ShopPageWithStyles;
