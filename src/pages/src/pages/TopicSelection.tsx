import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';

const TopicSelection: React.FC = () => {
  const navigate = useNavigate();
  const [selectedTopics, setSelectedTopics] = useState<Record<string, number>>({});

  const topics = [
    { id: 'science', title: '과학/기술', description: '과학, 기술, 공학 관련 주제' },
    { id: 'social', title: '사회/문화', description: '사회, 문화, 역사 관련 주제' },
    { id: 'business', title: '경제/비즈니스', description: '경제, 비즈니스, 정치 관련 주제' },
    { id: 'arts', title: '예술/문학', description: '예술, 문학, 인문학 관련 주제' },
    { id: 'health', title: '건강/의학', description: '건강, 의학, 생명과학 관련 주제' },
    { id: 'environment', title: '환경/생태', description: '환경, 생태, 지구과학 관련 주제' }
  ];

  const handleTopicSelect = (topicId: string, level: number) => {
    setSelectedTopics(prev => ({
      ...prev,
      [topicId]: level
    }));
  };

  const handleContinue = () => {
    if (Object.keys(selectedTopics).length > 0) {
      navigate('/level-test');
    }
  };

  return (
    <div className="min-h-screen flex flex-col items-center justify-center bg-gray-50 p-4">
      <div className="max-w-4xl w-full space-y-8">
        <div className="text-center">
          <h1 className="text-3xl font-bold text-gray-900">관심 주제 선택</h1>
          <p className="mt-2 text-gray-600">
            각 주제에 대한 관심도를 선택해주세요 (높음/보통/낮음)
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
          {topics.map((topic) => (
            <div key={topic.id} className="bg-white p-6 rounded-lg shadow-md">
              <h3 className="text-lg font-semibold text-gray-900">{topic.title}</h3>
              <p className="mt-2 text-gray-600">{topic.description}</p>
              
              <div className="mt-4 flex justify-between">
                {[1, 2, 3].map((level) => (
                  <button
                    key={level}
                    onClick={() => handleTopicSelect(topic.id, level)}
                    className={`px-4 py-2 rounded-md ${
                      selectedTopics[topic.id] === level
                        ? 'bg-indigo-600 text-white'
                        : 'bg-gray-100 text-gray-700 hover:bg-gray-200'
                    }`}
                  >
                    {level === 1 ? '높음' : level === 2 ? '보통' : '낮음'}
                  </button>
                ))}
              </div>
            </div>
          ))}
        </div>

        <button
          onClick={handleContinue}
          disabled={Object.keys(selectedTopics).length === 0}
          className={`w-full py-2 px-4 rounded-md text-white font-medium ${
            Object.keys(selectedTopics).length > 0
              ? 'bg-indigo-600 hover:bg-indigo-700'
              : 'bg-gray-400 cursor-not-allowed'
          }`}
        >
          Continue
        </button>
      </div>
    </div>
  );
};

export default TopicSelection; 