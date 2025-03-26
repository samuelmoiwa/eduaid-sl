import React from 'react';

const resources = [
  { title: 'Research Writing Guide', url: '#', description: 'Tips for structuring your dissertation or research paper.' },
  { title: 'Citation Tool', url: '#', description: 'Generate citations in APA, MLA, and more.' },
  { title: 'Study Tips', url: '#', description: 'Boost your productivity with these strategies.' },
];

const HelpDeskResources = () => {
  return (
    <section className="py-16 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <h2 className="text-3xl font-bold text-teal-800 font-montserrat text-center mb-8">Resources for You</h2>
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
          {resources.map((resource) => (
            <a
              key={resource.title}
              href={resource.url}
              className="bg-white rounded-xl shadow-lg p-6 hover:shadow-2xl hover:-translate-y-2 transition-all duration-300 border-t-4 border-gradient-to-r from-teal-600 to-blue-600"
            >
              <h3 className="text-lg font-semibold text-gray-800 font-montserrat">{resource.title}</h3>
              <p className="text-sm text-gray-600 font-open-sans mt-2">{resource.description}</p>
            </a>
          ))}
        </div>
      </div>
    </section>
  );
};

// Custom Styles
const HelpDeskResourcesWithStyles = () => (
  <div>
    <style>
      {`
        @import url('https://fonts.googleapis.com/css2?family=Montserrat:wght@700&family=Open+Sans&display=swap');
        .font-montserrat { font-family: 'Montserrat', sans-serif; }
        .font-open-sans { font-family: 'Open Sans', sans-serif; }
      `}
    </style>
    <HelpDeskResources />
  </div>
);

export default HelpDeskResourcesWithStyles;
