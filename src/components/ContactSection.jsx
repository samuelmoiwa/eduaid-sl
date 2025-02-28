import React from 'react';

const ContactSection = () => {
  return (
    <section id="contact" className="py-16 bg-white w-full max-w-[110rem]">
      <div className="container mx-auto px-4">
        {/* Title and Subtitle */}
        <div className="text-center mb-12">
          <h2 className="text-4xl font-bold text-gray-800 mb-4">Get in Touch</h2>
          <p className="text-xl text-gray-600">
            We’re here to help! Reach out to us for any questions or support.
          </p>
        </div>

        {/* Contact Content */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-12">
          {/* Contact Form */}
          <div className="bg-gray-50 p-8 rounded-lg shadow-md">
            <form>
              {/* Name Field */}
              <div className="mb-6">
                <label htmlFor="name" className="block text-gray-700 font-semibold mb-2">
                  Name
                </label>
                <input
                  type="text"
                  id="name"
                  name="name"
                  placeholder="Your Name"
                  className="w-full px-4 py-3 rounded-lg border border-gray-300 focus:outline-none focus:ring-2 focus:ring-blue-500"
                  required
                />
              </div>

              {/* Email Field */}
              <div className="mb-6">
                <label htmlFor="email" className="block text-gray-700 font-semibold mb-2">
                  Email
                </label>
                <input
                  type="email"
                  id="email"
                  name="email"
                  placeholder="Your Email"
                  className="w-full px-4 py-3 rounded-lg border border-gray-300 focus:outline-none focus:ring-2 focus:ring-blue-500"
                  required
                />
              </div>

              {/* Message Field */}
              <div className="mb-6">
                <label htmlFor="message" className="block text-gray-700 font-semibold mb-2">
                  Message
                </label>
                <textarea
                  id="message"
                  name="message"
                  placeholder="Your Message"
                  rows="5"
                  className="w-full px-4 py-3 rounded-lg border border-gray-300 focus:outline-none focus:ring-2 focus:ring-blue-500"
                  required
                ></textarea>
              </div>

              {/* Submit Button */}
              <button
                type="submit"
                className="w-full bg-blue-600 hover:bg-blue-700 text-white font-semibold py-3 px-8 rounded-lg transition duration-300"
              >
                Send Message
              </button>
            </form>
          </div>

          {/* Contact Information */}
          <div className="bg-gray-50 p-8 rounded-lg shadow-md">
            <h3 className="text-2xl font-bold text-gray-800 mb-6">Contact Information</h3>

            {/* Email */}
            <div className="mb-6">
              <h4 className="text-lg font-semibold text-gray-700 mb-2">Email</h4>
              <p className="text-gray-600">support@eduaid-sl.com</p>
            </div>

            {/* Phone */}
            <div className="mb-6">
              <h4 className="text-lg font-semibold text-gray-700 mb-2">Phone</h4>
              <p className="text-gray-600">+232 XXX XXX XXX</p>
            </div>

            {/* Social Media Links */}
            <div>
              <h4 className="text-lg font-semibold text-gray-700 mb-2">Follow Us</h4>
              <div className="flex space-x-4">
                <a
                  href="https://facebook.com/eduaid-sl"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-blue-600 hover:text-blue-700 transition duration-300"
                >
                  <i className="fab fa-facebook text-2xl"></i>
                </a>
                <a
                  href="https://twitter.com/eduaid-sl"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-blue-400 hover:text-blue-500 transition duration-300"
                >
                  <i className="fab fa-twitter text-2xl"></i>
                </a>
                <a
                  href="https://wa.me/232XXXXXXXXX"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-green-500 hover:text-green-600 transition duration-300"
                >
                  <i className="fab fa-whatsapp text-2xl"></i>
                </a>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default ContactSection;
