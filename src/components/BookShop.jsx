import React from 'react';
import Slider from 'react-slick';
import 'slick-carousel/slick/slick.css';
import 'slick-carousel/slick/slick-theme.css';

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
  const settings = {
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 3,
    slidesToScroll: 1,
    autoplay: true,
    autoplaySpeed: 3000,
    responsive: [
      {
        breakpoint: 1024,
        settings: {
          slidesToShow: 2,
        },
      },
      {
        breakpoint: 768,
        settings: {
          slidesToShow: 1,
        },
      },
    ],
  };

  return (
    <section id="bookshop" className="py-16 bg-orange-600 w-full max-w-[110rem]">
      <div className=" mx-auto px-6 w-full">
        {/* Section Header */}
        <div className="text-center mb-10">
          <h2 className="text-4xl font-bold text-white">Recommended Books</h2>
          <p className="text-lg text-white mt-2">
            Explore top study materials and textbooks for students.
          </p>
        </div>

        {/* Carousel Section */}
        <Slider {...settings} className="max-w-5xl mx-auto">
          {books.map((book, index) => (
            <div key={index} className="p-4">
              <div className="bg-white shadow-lg rounded-lg overflow-hidden hover:shadow-2xl transition duration-300 transform hover:scale-105">
                <img src={book.image} alt={book.title} className="w-full h-64 object-cover" />
                <div className="p-4 text-center">
                  <h3 className="text-xl font-semibold text-gray-800">{book.title}</h3>
                  <p className="text-gray-600">by {book.author}</p>
                  <a
                    href={book.link}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="mt-4 inline-block bg-blue-600 text-white px-4 py-2 rounded-lg hover:bg-blue-700 transition"
                  >
                    Buy on Amazon
                  </a>
                </div>
              </div>
            </div>
          ))}
        </Slider>
      </div>
    </section>
  );
};

export default BookShop;
