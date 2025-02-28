import React from 'react';

const AboutUsSection = () => {
  return (
    <section id="about" className="py-16 bg-gray-50 w-full max-w-[110rem]">
      <div className="container mx-auto px-4">
        {/* Title and Subtitle */}
        <div className="text-center mb-12">
          <h2 className="text-4xl font-bold text-gray-800 mb-4">About Eduaid-SL</h2>
          <p className="text-xl text-gray-600">
            Our mission is to empower Sierra Leonean students with the tools they need to succeed.
          </p>
        </div>

        {/* Content */}
        <div className="max-w-3xl mx-auto text-gray-700">
          <p className="mb-6">
            Eduaid-SL was founded by a group of passionate educators and students who understand the
            challenges faced by learners in Sierra Leone. We aim to bridge the gap in educational
            resources and provide accessible, high-quality support to all students.
          </p>

          <p className="mb-6">
            In Sierra Leone, many students struggle to access quality educational materials,
            especially in rural areas. Eduaid-SL was created to address this issue by offering a
            platform where students can find free resources, tutorials, and guidance to excel in
            their studies.
          </p>

          <p className="mb-6">
            Our platform provides a wide range of resources, including past exam papers, study
            guides, video tutorials, and study tips. Whether you're preparing for WASSCE, NPSE, or
            BECE, Eduaid-SL is here to help you every step of the way.
          </p>

          <p className="mb-6">
            We believe that education is the key to unlocking opportunities and transforming lives.
            By empowering students with the right tools and knowledge, we aim to contribute to the
            development of Sierra Leone and create a brighter future for all.
          </p>

          <p className="mb-6">
            Join us on this journey to make education accessible, inclusive, and impactful for every
            student in Sierra Leone.
          </p>
        </div>

        {/* Key Features Section */}
        <div className="mt-12">
          <h3 className="text-3xl font-bold text-gray-800 text-center mb-8">Why Choose Eduaid-SL?</h3>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {/* Feature 1 */}
            <div className="bg-white p-6 rounded-lg shadow-md text-center">
              <div className="text-5xl mb-4 text-blue-600">📚</div>
              <h4 className="text-2xl font-semibold text-gray-800 mb-2">Free Resources</h4>
              <p className="text-gray-600">
                Access a wide range of free study materials, including past papers and study guides.
              </p>
            </div>

            {/* Feature 2 */}
            <div className="bg-white p-6 rounded-lg shadow-md text-center">
              <div className="text-5xl mb-4 text-blue-600">🎓</div>
              <h4 className="text-2xl font-semibold text-gray-800 mb-2">Expert Guidance</h4>
              <p className="text-gray-600">
                Get step-by-step guidance from experienced educators and mentors.
              </p>
            </div>

            {/* Feature 3 */}
            <div className="bg-white p-6 rounded-lg shadow-md text-center">
              <div className="text-5xl mb-4 text-blue-600">💡</div>
              <h4 className="text-2xl font-semibold text-gray-800 mb-2">Tailored Support</h4>
              <p className="text-gray-600">
                Resources and tips designed specifically for Sierra Leonean students.
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default AboutUsSection;
