import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';

const testQuestions = [
  {
    id: 1,
    word: 'Ubiquitous',
    options: [
      { id: 'a', text: 'Rare and hard to find' },
      { id: 'b', text: 'Present everywhere' },
      { id: 'c', text: 'Temporary' },
      { id: 'd', text: 'Ancient' },
    ],
    correctAnswer: 'b',
  },
  {
    id: 2,
    word: 'Ephemeral',
    options: [
      { id: 'a', text: 'Lasting a very short time' },
      { id: 'b', text: 'Eternal' },
      { id: 'c', text: 'Complex' },
      { id: 'd', text: 'Simple' },
    ],
    correctAnswer: 'a',
  },
  // Add more questions as needed
];

const DiagnosticTest: React.FC = () => {
  const navigate = useNavigate();
  const [currentQuestion, setCurrentQuestion] = useState(0);
  const [answers, setAnswers] = useState<Record<number, string>>({});
  const [showResults, setShowResults] = useState(false);

  const handleAnswerSelect = (questionId: number, answerId: string) => {
    setAnswers((prev) => ({
      ...prev,
      [questionId]: answerId,
    }));
  };

  const handleNext = () => {
    if (currentQuestion < testQuestions.length - 1) {
      setCurrentQuestion((prev) => prev + 1);
    } else {
      setShowResults(true);
    }
  };

  const calculateScore = () => {
    let correct = 0;
    Object.entries(answers).forEach(([questionId, answerId]) => {
      const question = testQuestions.find((q) => q.id === Number(questionId));
      if (question && question.correctAnswer === answerId) {
        correct++;
      }
    });
    return Math.round((correct / testQuestions.length) * 100);
  };

  if (showResults) {
    const score = calculateScore();
    return (
      <div className="min-h-screen bg-gray-50 p-6 flex items-center justify-center">
        <div className="max-w-md w-full bg-white p-8 rounded-lg shadow-lg text-center">
          <h1 className="text-3xl font-bold text-gray-900 mb-4">
            Test Complete!
          </h1>
          <p className="text-2xl font-semibold text-blue-600 mb-6">
            Your Score: {score}%
          </p>
          <p className="text-gray-600 mb-8">
            Based on your results, we'll create a personalized learning plan for you.
          </p>
          <button
            onClick={() => navigate('/dashboard')}
            className="w-full bg-blue-600 text-white py-3 px-4 rounded-lg font-medium hover:bg-blue-700 transition-colors"
          >
            Start Learning
          </button>
        </div>
      </div>
    );
  }

  const currentQ = testQuestions[currentQuestion];

  return (
    <div className="min-h-screen bg-gray-50 p-6">
      <div className="max-w-2xl mx-auto">
        <div className="mb-8">
          <div className="flex justify-between items-center mb-2">
            <span className="text-sm text-gray-600">
              Question {currentQuestion + 1} of {testQuestions.length}
            </span>
            <span className="text-sm text-gray-600">
              {Math.round(((currentQuestion + 1) / testQuestions.length) * 100)}%
            </span>
          </div>
          <div className="w-full bg-gray-200 rounded-full h-2">
            <div
              className="bg-blue-600 h-2 rounded-full"
              style={{
                width: `${((currentQuestion + 1) / testQuestions.length) * 100}%`,
              }}
            />
          </div>
        </div>

        <div className="bg-white p-8 rounded-lg shadow-lg">
          <h2 className="text-2xl font-bold text-gray-900 mb-6">
            What does "{currentQ.word}" mean?
          </h2>
          <div className="space-y-4">
            {currentQ.options.map((option) => (
              <div
                key={option.id}
                className={`p-4 border-2 rounded-lg cursor-pointer transition-colors ${
                  answers[currentQ.id] === option.id
                    ? 'border-blue-500 bg-blue-50'
                    : 'border-gray-200 hover:border-blue-300'
                }`}
                onClick={() => handleAnswerSelect(currentQ.id, option.id)}
              >
                <span className="font-medium">{option.text}</span>
              </div>
            ))}
          </div>
        </div>

        <div className="mt-8 text-center">
          <button
            onClick={handleNext}
            disabled={!answers[currentQ.id]}
            className={`px-6 py-3 rounded-lg font-medium transition-colors ${
              answers[currentQ.id]
                ? 'bg-blue-600 text-white hover:bg-blue-700'
                : 'bg-gray-300 text-gray-500 cursor-not-allowed'
            }`}
          >
            {currentQuestion === testQuestions.length - 1 ? 'Finish' : 'Next'}
          </button>
        </div>
      </div>
    </div>
  );
};

export default DiagnosticTest; 