import React from 'react';

const ServicesSection = () => {
  // Service card data
  const services = [
    {
      title: 'Desaturation Help',
      description: 'Struggling with desaturation concepts? We break it down for you in simple terms.',
      icon: '💡', // Replace with an actual icon or image
    },
    {
      title: 'Assignment Assistance',
      description: 'Get step-by-step guidance to complete your assignments on time.',
      icon: '📝', // Replace with an actual icon or image
    },
    {
      title: 'Tutorials',
      description: 'Access easy-to-follow tutorials on various subjects.',
      icon: '🎥', // Replace with an actual icon or image
    },
    {
      title: 'Study Tips',
      description: 'Learn effective study techniques tailored for Sierra Leonean students.',
      icon: '📚', // Replace with an actual icon or image
    },
    {
      title: 'Exam Prep',
      description: 'Prepare for exams with curated resources and practice questions.',
      icon: '📖', // Replace with an actual icon or image
    },
    {
      title: 'Career Guidance',
      description: 'Get advice on career paths, university applications, and job opportunities.',
      icon: '🚀', // Replace with an actual icon or image
    },
  ];

  return (
    <section id="services" className="py-16 bg-gray-50 w-full max-w-[110rem] flex flex-col justify-center items-center">
      <div className="container mx-w-[100rem] px-4">
        {/* Title and Subtitle */}
        <div className="text-center mb-12">
          <h2 className="text-4xl font-bold text-gray-800 mb-4">
            How We Can Help You
          </h2>
          <p className="text-xl text-gray-600">
            Explore the academic support services we offer.
          </p>
        </div>

        {/* Service Cards Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {services.map((service, index) => (
            <div
              key={index}
              className="bg-white p-8 rounded-lg shadow-lg hover:shadow-xl transition-shadow duration-300"
            >
              {/* Icon */}
              <div className="text-4xl mb-4 text-blue-600">{service.icon}</div>

              {/* Title */}
              <h3 className="text-2xl font-semibold text-gray-800 mb-4">
                {service.title}
              </h3>

              {/* Description */}
              <p className="text-gray-600">{service.description}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default ServicesSection;
