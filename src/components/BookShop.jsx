import React from 'react';
import Slider from 'react-slick';
import 'slick-carousel/slick/slick.css';
import 'slick-carousel/slick/slick-theme.css';
import { Link } from 'react-router-dom';

const books = [
  {
    title: "Introduction to Programming",
    author: "John Doe",
    image: "https://m.media-amazon.com/images/I/51HMi0HWTVL.jpg",
    link: "https://www.amazon.com/dp/B09XYZ123",
  },
  {
    title: "Data Structures & Algorithms",
    author: "Robert Lafore",
    image: "https://m.media-amazon.com/images/I/61Eu7A2oJWL.jpg",
    link: "https://www.amazon.com/dp/B08XYZ456",
  },
  {
    title: "Machine Learning Basics",
    author: "Andrew Ng",
    image: "https://m.media-amazon.com/images/I/41f7U-9ZpBL.jpg",
    link: "https://www.amazon.com/dp/B07XYZ789",
  },
  {
    title: "Effective Study Techniques",
    author: "Jane Smith",
    image: "https://m.media-amazon.com/images/I/71Z1UAPNN6L.jpg",
    link: "https://www.amazon.com/dp/B06XYZ321",
  },
  {
    title: "Ace Your Exams",
    author: "Dr. Emily Carter",
    image: "https://m.media-amazon.com/images/I/71w8HqejMbL.jpg",
    link: "https://www.amazon.com/dp/B08XYZ654",
  },
];

const BookShop = () => {
  const topSettings = {
    dots: false,
    infinite: true,
    speed: 600,
    slidesToShow: 3,
    slidesToScroll: 1,
    autoplay: true,
    autoplaySpeed: 2000,
    pauseOnHover: true,
    arrows: true,
    rtl: false, // Left to right
    responsive: [
      {
        breakpoint: 1024,
        settings: {
          slidesToShow: 2,
          arrows: false,
        },
      },
      {
        breakpoint: 768,
        settings: {
          slidesToShow: 1,
          arrows: false,
        },
      },
    ],
  };

  const bottomSettings = {
    dots: true,
    infinite: true,
    speed: 600,
    slidesToShow: 3,
    slidesToScroll: 1,
    autoplay: true,
    autoplaySpeed: 2000,
    pauseOnHover: true,
    arrows: true,
    rtl: true, // Right to left
    responsive: [
      {
        breakpoint: 1024,
        settings: {
          slidesToShow: 2,
          arrows: false,
        },
      },
      {
        breakpoint: 768,
        settings: {
          slidesToShow: 1,
          arrows: false,
        },
      },
    ],
  };

  const BookCard = ({ book }) => (
    <div className="p-4">
      <div className="bg-white bg-opacity-95 rounded-xl shadow-2xl overflow-hidden transform transition-all duration-500 hover:scale-105 hover:shadow-3xl hover:-rotate-1">
        <div className="relative">
          <img
            src={book.image}
            alt={book.title}
            className="w-full h-72 object-cover transition-transform duration-300 hover:scale-110"
          />
          <div className="absolute inset-0 bg-gradient-to-t from-gray-900/50 to-transparent opacity-0 hover:opacity-100 transition-opacity duration-300"></div>
        </div>
        <div className="p-6 text-center">
          <h3 className="text-xl font-semibold text-gray-800 font-montserrat truncate">{book.title}</h3>
          <p className="text-gray-600 text-sm mt-1 font-open-sans">by {book.author}</p>
          <a
            href={book.link}
            target="_blank"
            rel="noopener noreferrer"
            className="mt-4 inline-block px-6 py-2 bg-gradient-to-r from-orange-600 to-yellow-500 text-white font-semibold rounded-full shadow-md hover:from-orange-700 hover:to-yellow-600 hover:scale-110 transition-all duration-300"
          >
            Buy on Amazon
          </a>
        </div>
      </div>
    </div>
  );

  return (
    <section
      id="bookshop"
      className="py-20 bg-gradient-to-br from-orange-500 via-amber-500 to-yellow-400 text-white overflow-hidden relative"
    >
      {/* Decorative Background Elements */}
      <div className="absolute inset-0 opacity-20">
        <div className="absolute top-0 left-0 w-64 h-64 bg-yellow-300 rounded-full blur-3xl -translate-x-1/2 translate-y-1/4 animate-pulse"></div>
        <div className="absolute bottom-0 right-0 w-72 h-72 bg-orange-300 rounded-full blur-3xl translate-x-1/3 -translate-y-1/3 animate-pulse"></div>
      </div>

      {/* Container */}
      <div className="max-w-7xl mx-auto px-6 relative z-10">
        {/* Top Button */}
        <div className="text-center mb-8 animate-fade-in-up">
          <Link
            to="/shop"
            className="inline-block px-8 py-3 bg-gradient-to-r from-white to-gray-100 text-orange-600 font-semibold rounded-full shadow-lg hover:from-gray-100 hover:to-white hover:scale-105 transition-all duration-300"
          >
            View All Books
          </Link>
        </div>

        {/* Section Header */}
        <div className="text-center mb-12 animate-fade-in-up animation-delay-200">
          <h2 className="text-4xl sm:text-5xl font-bold font-montserrat relative inline-block">
            Recommended Books
            <span className="absolute -bottom-2 left-0 w-full h-1.5 bg-gradient-to-r from-white to-transparent rounded-full transform -skew-y-3"></span>
          </h2>
          <p className="mt-4 text-lg sm:text-xl text-orange-100 font-open-sans">
            Discover top-tier study materials and textbooks curated for students.
          </p>
        </div>

        {/* Top Carousel (Left to Right) */}
        <Slider {...topSettings} className="max-w-6xl mx-auto mb-12">
          {books.map((book, index) => (
            <BookCard key={`top-${index}`} book={book} />
          ))}
        </Slider>

        {/* Bottom Carousel (Right to Left) */}
        <Slider {...bottomSettings} className="max-w-6xl mx-auto">
          {books.map((book, index) => (
            <BookCard key={`bottom-${index}`} book={book} />
          ))}
        </Slider>
      </div>
    </section>
  );
};

// Custom Styles and Fonts
const BookShopWithStyles = () => (
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

        /* Pulse Animation for Background */
        @keyframes pulse {
          0% { opacity: 0.15; }
          50% { opacity: 0.25; }
          100% { opacity: 0.15; }
        }
        .animate-pulse {
          animation: pulse 4s infinite ease-in-out;
        }

        /* Slick Carousel Customizations */
        .slick-dots li button:before {
          color: #fff;
          font-size: 12px;
          opacity: 0.5;
        }
        .slick-dots li.slick-active button:before {
          color: #fff;
          opacity: 1;
        }
        .slick-prev, .slick-next {
          color: #fff;
          z-index: 10;
        }
        .slick-prev:before, .slick-next:before {
          color: #fff;
          font-size: 24px;
        }
      `}
    </style>
    <BookShop />
  </div>
);

export default BookShopWithStyles;
