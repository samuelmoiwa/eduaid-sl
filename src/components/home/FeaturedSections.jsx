import React from 'react';
import { Link } from 'react-router-dom';
import { Carousel } from 'react-responsive-carousel';
import 'react-responsive-carousel/lib/styles/carousel.min.css';
import profile_icon from '../../images/profile_icon.jpg';
import calculus from '../../images/calculus.jpg'
import grammarly from '../../images/grammarly.png'

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
    <section className="py-20 overflow-hidden w-full">
      {/* Container */}
      <div className="max-w-[90rem] mx-auto px-4 sm:px-6 lg:px-8 relative">
        {/* Decorative Background Elements */}
        <div className="absolute top-0 left-0 w-48 h-48 bg-blue-200 opacity-10 rounded-full blur-3xl -translate-x-1/2"></div>
        <div className="absolute bottom-0 right-0 w-64 h-64 bg-green-200 opacity-10 rounded-full blur-3xl translate-x-1/3"></div>

        {/* Grid Layout */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-10">
          {/* Subsection 1: Latest Resources */}
          <div className="space-y-6 animate-fade-in-up">
            <h3 className="text-3xl font-bold text-gray-800 font-montserrat text-center md:text-left relative">
              New & Free Resources
              <span className="absolute -bottom-2 left-0 w-16 h-1 bg-gradient-to-r from-blue-500 to-green-500 rounded-full md:left-auto md:right-0"></span>
            </h3>
            {/* Resource Cards */}
            <div className="space-y-4">
              {resources.map((resource) => (
                <div
                  key={resource.id}
                  className="bg-white p-5 rounded-xl shadow-lg hover:shadow-xl hover:-translate-y-1 transition-all duration-300 border-t-4 border-blue-500"
                >
                  <div className="flex items-center space-x-4">
                    <img src={resource.icon} alt={resource.title} className="w-14 h-14" />
                    <div>
                      <h4 className="text-lg font-semibold text-gray-800">{resource.title}</h4>
                      <p className="text-sm text-gray-600">{resource.description}</p>
                    </div>
                  </div>
                </div>
              ))}
            </div>
            {/* CTA Button */}
            <Link
              to="/resources"
              className="block text-center px-6 py-3 bg-gradient-to-r from-blue-600 to-blue-800 text-white font-semibold rounded-lg hover:from-blue-700 hover:to-blue-900 transition-all duration-300 shadow-md"
            >
              View All Resources
            </Link>
          </div>

          {/* Subsection 2: Trending Affiliate Products */}
          <div className="space-y-6 animate-fade-in-up animation-delay-200">
            <h3 className="text-3xl font-bold text-gray-800 font-montserrat text-center md:text-left relative">
              Top Picks for Learning
              <span className="absolute -bottom-2 left-0 w-16 h-1 bg-gradient-to-r from-orange-500 to-yellow-500 rounded-full md:left-auto md:right-0"></span>
            </h3>
            {/* Product Cards */}
            <div className="space-y-4">
              {products.map((product) => (
                <div
                  key={product.id}
                  className="bg-white p-5 rounded-xl shadow-lg hover:shadow-xl hover:-translate-y-1 transition-all duration-300 border-t-4 border-orange-500"
                >
                  <img
                    src={product.image}
                    alt={product.title}
                    className="w-24 h-24 mx-auto mb-3 rounded"
                  />
                  <h4 className="text-lg font-semibold text-gray-800">{product.title}</h4>
                  <p className="text-sm text-gray-600">{product.price}</p>
                  <a
                    href={product.link}
                    className="block mt-3 px-5 py-2 bg-orange-600 text-white text-sm font-semibold rounded-lg hover:bg-orange-700 transition-colors duration-300"
                  >
                    Shop Now
                  </a>
                </div>
              ))}
            </div>
            {/* Disclaimer */}
            <p className="text-xs text-gray-600 text-center md:text-left italic">
              Purchases support our free resources.
            </p>
          </div>

          {/* Subsection 3: Testimonials */}
          <div className="space-y-6 animate-fade-in-up animation-delay-400">
            <h3 className="text-3xl font-bold text-gray-800 font-montserrat text-center md:text-left relative">
              What Students Say
              <span className="absolute -bottom-2 left-0 w-16 h-1 bg-gradient-to-r from-green-500 to-teal-500 rounded-full md:left-auto md:right-0"></span>
            </h3>
            {/* Testimonials Carousel */}
            <Carousel
              showThumbs={false}
              showStatus={false}
              infiniteLoop
              autoPlay
              interval={5000}
              className="bg-teal-50 p-5 rounded-xl shadow-lg"
            >
              {testimonials.map((testimonial) => (
                <div key={testimonial.id} className="p-2">
                  <p className="text-gray-700 italic text-base mb-4">“{testimonial.quote}”</p>
                  <div className="flex flex-col items-center space-y-3 p-8 w-full">
                    <img
                      src={testimonial.avatar}
                      alt={`${testimonial.name} Avatar`}
                      className="h-[17rem] w-full rounded-full border-2 border-teal-300"
                    />
                    <div>
                      <p className="text-sm font-semibold text-gray-800">{testimonial.name}</p>
                      <p className="text-xs text-gray-600">{testimonial.location}</p>
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
          from { opacity: 0; transform: translateY(20px); }
          to { opacity: 1; transform: translateY(0); }
        }
        .animate-fade-in-up {
          animation: fadeInUp 0.8s ease-out forwards;
        }
        .animation-delay-200 { animation-delay: 0.2s; }
        .animation-delay-400 { animation-delay: 0.4s; }
      `}
    </style>
    <FeaturedSections />
  </div>
);

export default FeaturedSectionsWithStyles;
