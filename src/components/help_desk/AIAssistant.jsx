import React, { useState } from 'react';
import { FaRobot } from 'react-icons/fa';

const AIAssistant = () => {
  const [input, setInput] = useState('');
  const [response, setResponse] = useState('');

  const handleSubmit = (e) => {
    e.preventDefault();
    // Simulated AI response (replace with API call in production)
    let aiResponse = 'I’m here to help! ';
    if (input.toLowerCase().includes('dissertation')) {
      aiResponse += 'For your dissertation, I suggest starting with a clear research question. How about exploring "The Impact of Technology on Student Learning Outcomes"? I can help brainstorm topics, outline sections, or suggest resources—just let me know what you need!';
    } else if (input.toLowerCase().includes('assignment')) {
      aiResponse += 'For your assignment, try breaking it into sections: introduction, main points, and conclusion. What topic are you working on? I can provide ideas or structure tips.';
    } else {
      aiResponse += 'Please tell me more about your research or assignment needs, and I’ll assist you step-by-step!';
    }
    setResponse(aiResponse);
    setInput('');
  };

  return (
    <section >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <h2 className="text-3xl font-bold text-teal-800 font-montserrat text-center mb-8">AI Study Assistant</h2>
        <div className="bg-white rounded-xl shadow-lg p-6 max-w-2xl mx-auto">
          <form onSubmit={handleSubmit} className="space-y-4">
            <div className="flex items-center border border-teal-300 rounded-full p-2">
              <FaRobot className="text-teal-600 ml-2" size={24} />
              <input
                type="text"
                value={input}
                onChange={(e) => setInput(e.target.value)}
                placeholder="Ask me about dissertations, assignments, or research..."
                className="w-full px-4 py-2 text-gray-800 font-open-sans focus:outline-none"
              />
            </div>
            <button
              type="submit"
              className="w-full px-6 py-3 bg-gradient-to-r from-teal-600 to-blue-600 text-white font-semibold rounded-full shadow-md hover:from-teal-700 hover:to-blue-700 hover:scale-105 transition-all duration-300"
            >
              Get Help
            </button>
          </form>
          {response && (
            <div className="mt-6 p-4 bg-teal-50 rounded-xl animate-fade-in-up">
              <p className="text-gray-800 font-open-sans">{response}</p>
            </div>
          )}
        </div>
      </div>
    </section>
  );
};

// Custom Styles
const AIAssistantWithStyles = () => (
  <div>
    <style>
      {`
        @import url('https://fonts.googleapis.com/css2?family=Montserrat:wght@700&family=Open+Sans&display=swap');
        .font-montserrat { font-family: 'Montserrat', sans-serif; }
        .font-open-sans { font-family: 'Open Sans', sans-serif; }
        @keyframes fadeInUp { from { opacity: 0; transform: translateY(20px); } to { opacity: 1; transform: translateY(0); } }
        .animate-fade-in-up { animation: fadeInUp 0.5s ease-out forwards; }
      `}
    </style>
    <AIAssistant />
  </div>
);

export default AIAssistantWithStyles;
