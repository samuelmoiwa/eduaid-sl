import React from 'react';
import { Link } from 'react-router-dom'; // For navigation links

const FeaturedSections = () => {
  return (
    <section className="py-16 bg-white w-full">
      {/* Container */}
      <div className=" w-full mx-auto px-4 sm:px-6 lg:px-8">
        {/* Grid Layout: Stacks on mobile, side-by-side on desktop */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 w-full">
          {/* Subsection 1: Latest Resources */}
          <div className="space-y-6">
            <h3 className="text-2xl font-bold text-gray-800 font-montserrat text-center md:text-left">
              New & Free Resources
            </h3>
            {/* Resource Cards */}
            <div className="space-y-4">
              {/* Card 1 */}
              <div className="bg-gray-50 p-4 rounded-lg shadow-md hover:shadow-lg transition-shadow duration-300">
                <div className="flex items-center space-x-4">
                  <img
                    src="https://img.icons8.com/ios-filled/50/000000/math.png"
                    alt="SAT Math Guide"
                    className="w-12 h-12"
                  />
                  <div>
                    <h4 className="text-lg font-semibold text-gray-700">SAT Math Guide</h4>
                    <p className="text-sm text-gray-500">Boost your SAT scores</p>
                  </div>
                </div>
              </div>
              {/* Card 2 */}
              <div className="bg-gray-50 p-4 rounded-lg shadow-md hover:shadow-lg transition-shadow duration-300">
                <div className="flex items-center space-x-4">
                  <img
                    src="https://img.icons8.com/ios-filled/50/000000/video.png"
                    alt="Physics Video Tutorial"
                    className="w-12 h-12"
                  />
                  <div>
                    <h4 className="text-lg font-semibold text-gray-700">Physics Video Tutorial</h4>
                    <p className="text-sm text-gray-500">Learn physics easily</p>
                  </div>
                </div>
              </div>
              {/* Card 3 */}
              <div className="bg-gray-50 p-4 rounded-lg shadow-md hover:shadow-lg transition-shadow duration-300">
                <div className="flex items-center space-x-4">
                  <img
                    src="https://img.icons8.com/ios-filled/50/000000/book.png"
                    alt="Biology Study Notes"
                    className="w-12 h-12"
                  />
                  <div>
                    <h4 className="text-lg font-semibold text-gray-700">Biology Study Notes</h4>
                    <p className="text-sm text-gray-500">Ace your exams</p>
                  </div>
                </div>
              </div>
            </div>
            {/* CTA Button */}
            <Link
              to="/resources"
              className="block text-center px-6 py-2 bg-blue-600 text-white font-semibold rounded-lg hover:bg-blue-700 transition-colors duration-300"
            >
              View All Resources
            </Link>
          </div>

          {/* Subsection 2: Trending Affiliate Products */}
          <div className="space-y-6">
            <h3 className="text-2xl font-bold text-gray-800 font-montserrat text-center md:text-left">
              Top Picks for Learning
            </h3>
            {/* Product Cards */}
            <div className="space-y-4">
              {/* Card 1 */}
              <div className="bg-white p-4 rounded-lg shadow-md border border-gray-200 hover:shadow-lg transition-shadow duration-300">
                <img
                  src="https://via.placeholder.com/100?text=Calculus+Book"
                  alt="Calculus Textbook"
                  className="w-20 h-20 mx-auto mb-2"
                />
                <h4 className="text-lg font-semibold text-gray-700">Calculus Textbook</h4>
                <p className="text-sm text-gray-500">$29.99</p>
                <a
                  href="#"
                  className="block mt-2 px-4 py-1 bg-orange-600 text-white text-sm font-semibold rounded hover:bg-orange-700 transition-colors duration-300"
                >
                  Shop Now
                </a>
              </div>
              {/* Card 2 */}
              <div className="bg-white p-4 rounded-lg shadow-md border border-gray-200 hover:shadow-lg transition-shadow duration-300">
                <img
                  src="https://via.placeholder.com/100?text=Grammarly"
                  alt="Grammarly Subscription"
                  className="w-20 h-20 mx-auto mb-2"
                />
                <h4 className="text-lg font-semibold text-gray-700">Grammarly Subscription</h4>
                <p className="text-sm text-gray-500">$11.99/mo</p>
                <a
                  href="#"
                  className="block mt-2 px-4 py-1 bg-orange-600 text-white text-sm font-semibold rounded hover:bg-orange-700 transition-colors duration-300"
                >
                  Shop Now
                </a>
              </div>
            </div>
            {/* Disclaimer */}
            <p className="text-xs text-gray-500 text-center md:text-left">
              Purchases support our free resources.
            </p>
          </div>

          {/* Subsection 3: Testimonials */}
          <div className="space-y-6">
            <h3 className="text-2xl font-bold text-gray-800 font-montserrat text-center md:text-left">
              What Students Say
            </h3>
            {/* Testimonial Cards */}
            <div className="space-y-4">
              {/* Card 1 */}
              <div className="bg-blue-50 p-4 rounded-lg shadow-md">
                <p className="text-gray-700 italic text-sm mb-2">
                  “EduAid helped me ace my exams!”
                </p>
                <div className="flex items-center space-x-2">
                  <img
                    src="https://via.placeholder.com/40?text=Jane"
                    alt="Jane Avatar"
                    className="w-10 h-10 rounded-full"
                  />
                  <div>
                    <p className="text-sm font-semibold text-gray-800">Jane</p>
                    <p className="text-xs text-gray-500">UK</p>
                  </div>
                </div>
              </div>
              {/* Card 2 */}
              <div className="bg-blue-50 p-4 rounded-lg shadow-md">
                <p className="text-gray-700 italic text-sm mb-2">
                  “The dissertation tools are a lifesaver.”
                </p>
                <div className="flex items-center space-x-2">
                  <img
                    src="https://via.placeholder.com/40?text=Alex"
                    alt="Alex Avatar"
                    className="w-10 h-10 rounded-full"
                  />
                  <div>
                    <p className="text-sm font-semibold text-gray-800">Alex</p>
                    <p className="text-xs text-gray-500">Canada</p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

// Custom Fonts
const FeaturedSectionsWithStyles = () => (
  <div>
    <style>
      {`
        @import url('https://fonts.googleapis.com/css2?family=Montserrat:wght@700&family=Open+Sans&display=swap');
        .font-montserrat { font-family: 'Montserrat', sans-serif; }
        .font-open-sans { font-family: 'Open Sans', sans-serif; }
      `}
    </style>
    <FeaturedSections />
  </div>
);

export default FeaturedSectionsWithStyles;
