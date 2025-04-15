import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';

const topics = [
  { id: 'business', title: 'Business & Finance', description: 'Corporate communication, finance, and management terms' },
  { id: 'technology', title: 'Technology', description: 'IT, software development, and digital innovation vocabulary' },
  { id: 'science', title: 'Science & Research', description: 'Scientific terminology and research methodology' },
  { id: 'health', title: 'Health & Medicine', description: 'Medical terms and healthcare vocabulary' },
  { id: 'travel', title: 'Travel & Culture', description: 'Travel-related terms and cultural expressions' },
  { id: 'education', title: 'Education', description: 'Academic and educational terminology' },
];

const TopicSelection: React.FC = () => {
  const navigate = useNavigate();
  const [selectedTopics, setSelectedTopics] = useState<string[]>([]);

  const handleTopicSelect = (topicId: string) => {
    setSelectedTopics((prev) =>
      prev.includes(topicId)
        ? prev.filter((id) => id !== topicId)
        : [...prev, topicId]
    );
  };

  const handleContinue = () => {
    if (selectedTopics.length > 0) {
      navigate('/diagnostic');
    }
  };

  return (
    <div className="min-h-screen bg-gray-50 p-6">
      <div className="max-w-4xl mx-auto">
        <h1 className="text-3xl font-bold text-gray-900 mb-8 text-center">
          Select topics you're interested in
        </h1>
        <p className="text-gray-600 text-center mb-8">
          Choose one or more topics to personalize your learning experience
        </p>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
          {topics.map((topic) => (
            <div
              key={topic.id}
              className={`p-6 border-2 rounded-lg cursor-pointer transition-colors ${
                selectedTopics.includes(topic.id)
                  ? 'border-blue-500 bg-blue-50'
                  : 'border-gray-200 hover:border-blue-300'
              }`}
              onClick={() => handleTopicSelect(topic.id)}
            >
              <h2 className="text-xl font-semibold text-gray-900 mb-2">
                {topic.title}
              </h2>
              <p className="text-gray-600">{topic.description}</p>
            </div>
          ))}
        </div>
        <div className="mt-8 text-center">
          <button
            onClick={handleContinue}
            disabled={selectedTopics.length === 0}
            className={`px-6 py-3 rounded-lg font-medium transition-colors ${
              selectedTopics.length > 0
                ? 'bg-blue-600 text-white hover:bg-blue-700'
                : 'bg-gray-300 text-gray-500 cursor-not-allowed'
            }`}
          >
            Continue
          </button>
        </div>
      </div>
    </div>
  );
};

export default TopicSelection; 