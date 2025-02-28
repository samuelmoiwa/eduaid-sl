import React from 'react';

const ResourcesSection = () => {
  // Resource category data
  const resources = [
    {
      title: 'Past Exam Papers',
      description: 'Access past papers for WASSCE, NPSE, and BECE.',
      icon: '📄', // Replace with an actual icon or image
      link: '#', // Add the link to the resource
    },
    {
      title: 'Study Guides',
      description: 'Download subject-specific study guides.',
      icon: '📚', // Replace with an actual icon or image
      link: '#', // Add the link to the resource
    },
    {
      title: 'Video Tutorials',
      description: 'Watch video lessons on challenging topics.',
      icon: '🎥', // Replace with an actual icon or image
      link: '#', // Add the link to the resource
    },
    {
      title: 'Community Forum',
      description: 'Join discussions and ask questions.',
      icon: '💬', // Replace with an actual icon or image
      link: '#', // Add the link to the resource
    },
  ];

  return (
    <section id="resources" className="py-16 bg-white w-full max-w-[110rem]" >
      <div className="container mx-auto px-4">
        {/* Title and Subtitle */}
        <div className="text-center mb-12">
          <h2 className="text-4xl font-bold text-gray-800 mb-4">
            Free Resources for Your Success
          </h2>
          <p className="text-xl text-gray-600">
            Download study materials, past papers, and more.
          </p>
        </div>

        {/* Resource Cards Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {resources.map((resource, index) => (
            <a
              key={index}
              href={resource.link}
              className="block bg-gray-50 p-8 rounded-lg shadow-md hover:shadow-lg transition-shadow duration-300 text-center"
            >
              {/* Icon */}
              <div className="text-5xl mb-6 text-blue-600">{resource.icon}</div>

              {/* Title */}
              <h3 className="text-2xl font-semibold text-gray-800 mb-4">
                {resource.title}
              </h3>

              {/* Description */}
              <p className="text-gray-600">{resource.description}</p>
            </a>
          ))}
        </div>
      </div>
    </section>
  );
};

export default ResourcesSection;
