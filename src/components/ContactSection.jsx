import React from 'react';
import { Formik, Form, Field, ErrorMessage } from 'formik';
import * as Yup from 'yup';

// Validation schema using Yup
const validationSchema = Yup.object({
  name: Yup.string()
    .min(2, 'Name must be at least 2 characters')
    .required('Name is required'),
  email: Yup.string()
    .email('Invalid email address')
    .required('Email is required'),
  phone: Yup.string()
    .matches(/^[0-9]{10}$/, 'Phone must be a 10-digit number')
    .required('Phone number is required'),
  message: Yup.string()
    .min(10, 'Message must be at least 10 characters')
    .required('Message is required'),
});

const ContactSection = () => {
  return (
    <section >
      {/* Decorative Background Elements */}
      <div className="absolute inset-0 opacity-20 animate-pulse">
        <div className="absolute top-0 left-0 w-72 h-72 bg-teal-300 rounded-full blur-3xl -translate-x-1/3 translate-y-1/4"></div>
        <div className="absolute bottom-0 right-0 w-96 h-96 bg-blue-300 rounded-full blur-3xl translate-x-1/4 -translate-y-1/3"></div>
      </div>

      {/* Container */}
      <div className="max-w-[90rem] w-full mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        {/* Main Content */}
        <div className="text-center mb-16 animate-fade-in-up">
          <h2 className="text-4xl sm:text-5xl font-bold font-montserrat relative inline-block">
            Let’s Connect!
            <span className="absolute -bottom-3 left-0 w-full h-2 bg-gradient-to-r from-yellow-400 to-orange-500 rounded-full transform -skew-y-3"></span>
          </h2>
          <p className="mt-4 text-xl text-teal-100 font-open-sans">
          We’re here to help you every step of the way! Reach out to us via the following:
          </p>
        </div>

        {/* Split Layout: Form + Contact Info */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
          {/* Form */}
          <div className="bg-white bg-opacity-90 p-8 rounded-2xl shadow-2xl animate-fade-in-up animation-delay-200">
            <Formik
              initialValues={{ name: '', email: '', phone: '', message: '' }}
              validationSchema={validationSchema}
              onSubmit={(values, { setSubmitting, resetForm }) => {
                console.log('Form submitted:', values);
                setTimeout(() => {
                  alert('Thank you! Your message has been sent.');
                  setSubmitting(false);
                  resetForm();
                }, 1000);
              }}
            >
              {({ isSubmitting }) => (
                <Form className="space-y-6">
                  {/* Name Field */}
                  <div>
                    <label htmlFor="name" className="block text-sm font-semibold text-gray-800 mb-2">
                      Name
                    </label>
                    <Field
                      type="text"
                      name="name"
                      className="w-full px-4 py-3 bg-gray-50 border border-teal-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-yellow-400 transition-all duration-300 text-gray-800 placeholder-gray-400"
                      placeholder="Your Name"
                    />
                    <ErrorMessage name="name" component="p" className="text-red-500 text-xs mt-1" />
                  </div>

                  {/* Email Field */}
                  <div>
                    <label htmlFor="email" className="block text-sm font-semibold text-gray-800 mb-2">
                      Email
                    </label>
                    <Field
                      type="email"
                      name="email"
                      className="w-full px-4 py-3 bg-gray-50 border border-teal-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-yellow-400 transition-all duration-300 text-gray-800 placeholder-gray-400"
                      placeholder="Your Email"
                    />
                    <ErrorMessage name="email" component="p" className="text-red-500 text-xs mt-1" />
                  </div>

                  {/* Phone Field */}
                  <div>
                    <label htmlFor="phone" className="block text-sm font-semibold text-gray-800 mb-2">
                      Phone
                    </label>
                    <Field
                      type="text"
                      name="phone"
                      className="w-full px-4 py-3 bg-gray-50 border border-teal-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-yellow-400 transition-all duration-300 text-gray-800 placeholder-gray-400"
                      placeholder="Your Phone (10 digits)"
                    />
                    <ErrorMessage name="phone" component="p" className="text-red-500 text-xs mt-1" />
                  </div>

                  {/* Message Field */}
                  <div>
                    <label htmlFor="message" className="block text-sm font-semibold text-gray-800 mb-2">
                      Message
                    </label>
                    <Field
                      as="textarea"
                      name="message"
                      className="w-full px-4 py-3 bg-gray-50 border border-teal-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-yellow-400 transition-all duration-300 h-36 resize-none text-gray-800 placeholder-gray-400"
                      placeholder="Tell us how we can assist you!"
                    />
                    <ErrorMessage name="message" component="p" className="text-red-500 text-xs mt-1" />
                  </div>

                  {/* Submit Button */}
                  <button
                    type="submit"
                    disabled={isSubmitting}
                    className="w-full px-6 py-3 bg-gradient-to-r from-yellow-400 to-orange-500 text-gray-800 font-semibold rounded-lg shadow-lg hover:from-yellow-500 hover:to-orange-600 transition-all duration-300 disabled:opacity-50"
                  >
                    {isSubmitting ? 'Sending...' : 'Send Message'}
                  </button>
                </Form>
              )}
            </Formik>
          </div>

          {/* Contact Info */}
          <div className="flex flex-col justify-center space-y-8 animate-fade-in-up animation-delay-400">
            <div className="bg-teal-800 bg-opacity-80 p-6 rounded-2xl shadow-lg hover:bg-opacity-90 transition-all duration-300">
              <h3 className="text-xl font-semibold font-montserrat mb-2">Email Us</h3>
              <p className="text-teal-100">support@eduaidglobal.com</p>
            </div>
            <div className="bg-teal-800 bg-opacity-80 p-6 rounded-2xl shadow-lg hover:bg-opacity-90 transition-all duration-300">
              <h3 className="text-xl font-semibold font-montserrat mb-2">Call Us</h3>
              <p className="text-teal-100">+1 (123) 456-7890</p>
            </div>
            <div className="bg-teal-800 bg-opacity-80 p-6 rounded-2xl shadow-lg hover:bg-opacity-90 transition-all duration-300">
              <h3 className="text-xl font-semibold font-montserrat mb-2">Follow Us</h3>
              <div className="flex space-x-4 justify-center">
                <a href="#" className="text-teal-100 hover:text-yellow-400 transition-colors duration-300">Twitter</a>
                <a href="#" className="text-teal-100 hover:text-yellow-400 transition-colors duration-300">LinkedIn</a>
                <a href="#" className="text-teal-100 hover:text-yellow-400 transition-colors duration-300">Instagram</a>
              </div>
            </div>

            <div className="bg-teal-800 bg-opacity-80 p-6 rounded-2xl shadow-lg hover:bg-opacity-90 transition-all duration-300">
              <p className="text-teal-100">
              For any inquiries, please feel free to send us a message, and we’ll respond promptly.
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

// Custom Styles and Fonts
const ContactSectionWithStyles = () => (
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

        /* Pulse Animation for Background */
        @keyframes pulse {
          0% { opacity: 0.15; }
          50% { opacity: 0.25; }
          100% { opacity: 0.15; }
        }
        .animate-pulse {
          animation: pulse 4s infinite ease-in-out;
        }
      `}
    </style>
    <ContactSection />
  </div>
);

export default ContactSectionWithStyles;
