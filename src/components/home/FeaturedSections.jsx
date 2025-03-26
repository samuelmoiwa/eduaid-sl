import React from 'react';
import { Link } from 'react-router-dom';
import { Carousel } from 'react-responsive-carousel';
import 'react-responsive-carousel/lib/styles/carousel.min.css';
import profile_icon from '../../images/profile_icon.jpg';
import calculus from '../../images/calculus.jpg';
import grammarly from '../../images/grammarly.png';

// Sample data (replace with API or state in a real app)
const sampleData = {
  resources: [
    {
      id: 1,
      title: 'SAT Math Guide',
      description: 'Boost your SAT scores fast',
      icon: 'https://img.icons8.com/ios-filled/50/000000/math.png',
    },
    {
      id: 2,
      title: 'Physics Video Tutorial',
      description: 'Master physics concepts',
      icon: 'https://img.icons8.com/ios-filled/50/000000/video.png',
    },
    {
      id: 3,
      title: 'Biology Study Notes',
      description: 'Ace your biology exams',
      icon: 'https://img.icons8.com/ios-filled/50/000000/book.png',
    },
  ],
  products: [
    {
      id: 1,
      title: 'Calculus Textbook',
      price: '$29.99',
      image: calculus,
      link: '#',
    },
    {
      id: 2,
      title: 'Grammarly Subscription',
      price: '$11.99/mo',
      image: grammarly,
      link: '#',
    },
  ],
  testimonials: [
    {
      id: 1,
      quote: 'EduAid helped me ace my exams with their amazing resources!',
      name: 'Jane',
      location: 'UK',
      avatar: profile_icon,
    },
    {
      id: 2,
      quote: 'The dissertation tools are a lifesaver—highly recommend!',
      name: 'Alex',
      location: 'Canada',
      avatar: profile_icon,
    },
    {
      id: 3,
      quote: 'A game-changer for my studies—thank you, EduAid!',
      name: 'Priya',
      location: 'India',
      avatar: profile_icon,
    },
  ],
};

const FeaturedSections = ({ resources = sampleData.resources, products = sampleData.products, testimonials = sampleData.testimonials }) => {
  return (
    <section >
      {/* Decorative Background Elements */}
      <div className="absolute inset-0 opacity-10">
        <div className="absolute top-0 left-0 w-72 h-72 bg-teal-300 rounded-full blur-3xl -translate-x-1/2 translate-y-1/4 animate-pulse"></div>
        <div className="absolute bottom-0 right-0 w-96 h-96 bg-blue-300 rounded-full blur-3xl translate-x-1/3 -translate-y-1/3 animate-pulse"></div>
      </div>

      {/* Container */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        {/* Grid Layout */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-12">
          {/* Subsection 1: Latest Resources */}
          <div className="space-y-6 animate-fade-in-up">
            <h3 className="text-3xl sm:text-4xl font-bold text-teal-800 font-montserrat text-center md:text-left relative">
              New & Free Resources
              <span className="absolute -bottom-2 left-0 md:left-auto md:right-0 w-20 h-1.5 bg-gradient-to-r from-teal-500 to-blue-500 rounded-full transform -skew-y-3"></span>
            </h3>
            {/* Resource Cards */}
            <div className="space-y-6">
              {resources.map((resource) => (
                <div
                  key={resource.id}
                  className="bg-white p-6 rounded-xl shadow-lg hover:shadow-2xl hover:-translate-y-2 transition-all duration-300 border-t-4 border-teal-500 flex items-center space-x-4 transform hover:scale-105"
                >
                  <img src={resource.icon} alt={resource.title} className="w-12 h-12 flex-shrink-0" />
                  <div>
                    <h4 className="text-lg font-semibold text-gray-800 font-montserrat">{resource.title}</h4>
                    <p className="text-sm text-gray-600 font-open-sans">{resource.description}</p>
                  </div>
                </div>
              ))}
            </div>
            {/* CTA Button */}
            <Link
              to="/resources"
              className="block text-center px-6 py-3 bg-gradient-to-r from-teal-600 to-blue-600 text-white font-semibold rounded-full shadow-md hover:from-teal-700 hover:to-blue-700 hover:scale-105 transition-all duration-300"
            >
              View All Resources
            </Link>
          </div>

          {/* Subsection 2: Trending Affiliate Products */}
          <div className="space-y-6 animate-fade-in-up animation-delay-200">
            <h3 className="text-3xl sm:text-4xl font-bold text-orange-800 font-montserrat text-center md:text-left relative">
              Top Picks for Learning
              <span className="absolute -bottom-2 left-0 md:left-auto md:right-0 w-20 h-1.5 bg-gradient-to-r from-orange-500 to-yellow-500 rounded-full transform -skew-y-3"></span>
            </h3>
            {/* Product Cards */}
            <div className="space-y-6">
              {products.map((product) => (
                <div
                  key={product.id}
                  className="bg-white p-6 rounded-xl shadow-lg hover:shadow-2xl hover:-translate-y-2 transition-all duration-300 border-t-4 border-orange-500 transform hover:scale-105"
                >
                  <img
                    src={product.image}
                    alt={product.title}
                    className="w-28 h-28 mx-auto mb-4 rounded-lg object-cover"
                  />
                  <h4 className="text-lg font-semibold text-gray-800 font-montserrat text-center">{product.title}</h4>
                  <p className="text-sm text-gray-600 font-open-sans text-center">{product.price}</p>
                  <a
                    href={product.link}
                    className="block mt-4 px-5 py-2 bg-gradient-to-r from-orange-600 to-yellow-500 text-white font-semibold rounded-full hover:from-orange-700 hover:to-yellow-600 transition-all duration-300 text-center"
                  >
                    Shop Now
                  </a>
                </div>
              ))}
            </div>
            {/* Disclaimer */}
            <p className="text-xs text-gray-600 text-center md:text-left italic font-open-sans">
              Purchases support our resources.
            </p>
          </div>

          {/* Subsection 3: Testimonials */}
          <div className="space-y-6 animate-fade-in-up animation-delay-400">
            <h3 className="text-3xl sm:text-4xl font-bold text-blue-800 font-montserrat text-center md:text-left relative">
              What Our Students Say
              <span className="absolute -bottom-2 left-0 md:left-auto md:right-0 w-20 h-1.5 bg-gradient-to-r from-blue-500 to-teal-500 rounded-full transform -skew-y-3"></span>
            </h3>
            {/* Testimonials Carousel */}
            <Carousel
              showThumbs={false}
              showStatus={false}
              infiniteLoop
              autoPlay
              interval={4000}
              className="bg-white p-6 rounded-xl shadow-lg"
            >
              {testimonials.map((testimonial) => (
                <div key={testimonial.id} className="p-4">
                  <p className="text-gray-700 italic text-base sm:text-lg mb-6 font-open-sans leading-relaxed">
                    “{testimonial.quote}”
                  </p>
                  <div className="flex items-center space-x-4 p-4">
                    <img
                      src={testimonial.avatar}
                      alt={`${testimonial.name} Avatar`}
                      className="w-full sm:h-[13rem] h-16 rounded-full border-2 border-teal-400 object-cover"
                    />
                    <div>
                      <p className="text-sm font-semibold text-gray-800 font-montserrat">{testimonial.name}</p>
                      <p className="text-xs text-gray-600 font-open-sans">{testimonial.location}</p>
                    </div>
                  </div>
                </div>
              ))}
            </Carousel>
          </div>
        </div>
      </div>
    </section>
  );
};

// Custom Styles and Fonts
const FeaturedSectionsWithStyles = () => (
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

        /* Pulse Animation */
        @keyframes pulse {
          0% { opacity: 0.1; }
          50% { opacity: 0.2; }
          100% { opacity: 0.1; }
        }
        .animate-pulse {
          animation: pulse 5s infinite ease-in-out;
        }

        /* Carousel Customizations */
        .carousel .control-dots .dot {
          background: #4b5563; /* Gray-600 */
          opacity: 0.5;
        }
        .carousel .control-dots .dot.selected {
          background: #1e40af; /* Blue-800 */
          opacity: 1;
        }
        .carousel .control-arrow {
          background: rgba(0, 0, 0, 0.3);
          color: #fff;
          font-size: 24px;
        }
      `}
    </style>
    <FeaturedSections />
  </div>
);

export default FeaturedSectionsWithStyles;
