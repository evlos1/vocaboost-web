import React, { useState } from 'react';
import { useLocation, useNavigate } from 'react-router-dom';

interface Question {
  id: number;
  question: string;
  options: string[];
  correctAnswer: number;
}

const ComprehensionCheck: React.FC = () => {
  const location = useLocation();
  const navigate = useNavigate();
  const { passage } = location.state as { passage: any };
  const [currentQuestionIndex, setCurrentQuestionIndex] = useState(0);
  const [selectedAnswers, setSelectedAnswers] = useState<number[]>([]);
  const [showResults, setShowResults] = useState(false);

  const questions: Question[] = [
    {
      id: 1,
      question: "What is the main impact of technology on education according to the passage?",
      options: [
        "It has made education more expensive",
        "It has revolutionized learning and teaching methods",
        "It has reduced the need for teachers",
        "It has made education less interactive"
      ],
      correctAnswer: 1
    },
    {
      id: 2,
      question: "What is mentioned as a significant challenge in technology-enhanced learning?",
      options: [
        "Lack of technological devices",
        "Maintaining student engagement and preventing digital distractions",
        "Too many educational apps available",
        "Students learning too quickly"
      ],
      correctAnswer: 1
    },
    {
      id: 3,
      question: "What does the passage say about the digital divide?",
      options: [
        "It has been completely eliminated",
        "It creates disparities in access to quality education",
        "It only affects older students",
        "It is not a significant concern"
      ],
      correctAnswer: 1
    }
  ];

  const handleAnswerSelect = (optionIndex: number) => {
    const newSelectedAnswers = [...selectedAnswers];
    newSelectedAnswers[currentQuestionIndex] = optionIndex;
    setSelectedAnswers(newSelectedAnswers);
  };

  const handleNext = () => {
    if (currentQuestionIndex < questions.length - 1) {
      setCurrentQuestionIndex(currentQuestionIndex + 1);
    } else {
      setShowResults(true);
    }
  };

  const handlePrevious = () => {
    if (currentQuestionIndex > 0) {
      setCurrentQuestionIndex(currentQuestionIndex - 1);
    }
  };

  const calculateScore = () => {
    return selectedAnswers.reduce((score, answer, index) => {
      return answer === questions[index].correctAnswer ? score + 1 : score;
    }, 0);
  };

  if (!passage) {
    return (
      <div className="min-h-screen flex flex-col items-center justify-center bg-gray-50 p-4">
        <div className="max-w-4xl w-full text-center">
          <h1 className="text-3xl font-bold text-gray-900 mb-4">No Passage Available</h1>
          <p className="text-gray-600 mb-6">Please go back to the learning section to view the passage.</p>
          <button
            onClick={() => navigate('/learning')}
            className="bg-blue-600 text-white px-6 py-3 rounded-md hover:bg-blue-700"
          >
            Go Back to Learning
          </button>
        </div>
      </div>
    );
  }

  if (showResults) {
    const score = calculateScore();
    return (
      <div className="min-h-screen bg-gray-50 p-4">
        <div className="max-w-4xl mx-auto">
          <div className="bg-white p-6 rounded-lg shadow-md">
            <h2 className="text-2xl font-bold text-gray-900 mb-4">Comprehension Check Results</h2>
            <p className="text-gray-700 mb-4">You scored {score} out of {questions.length} questions correctly.</p>
            <div className="flex justify-end">
              <button
                onClick={() => navigate('/learning')}
                className="bg-blue-600 text-white px-6 py-3 rounded-md hover:bg-blue-700"
              >
                Back to Learning
              </button>
            </div>
          </div>
        </div>
      </div>
    );
  }

  return (
    <div className="min-h-screen bg-gray-50 p-4">
      <div className="max-w-4xl mx-auto">
        <div className="bg-white p-6 rounded-lg shadow-md">
          <h2 className="text-2xl font-bold text-gray-900 mb-4">Comprehension Check</h2>
          <div className="mb-6">
            <p className="text-gray-600">Question {currentQuestionIndex + 1} of {questions.length}</p>
            <h3 className="text-xl font-semibold text-gray-900 mt-2">
              {questions[currentQuestionIndex].question}
            </h3>
          </div>
          <div className="space-y-3">
            {questions[currentQuestionIndex].options.map((option, index) => (
              <button
                key={index}
                onClick={() => handleAnswerSelect(index)}
                className={`w-full p-4 rounded-md text-left ${
                  selectedAnswers[currentQuestionIndex] === index
                    ? 'bg-blue-100 border-2 border-blue-500'
                    : 'bg-gray-50 hover:bg-gray-100'
                }`}
              >
                {option}
              </button>
            ))}
          </div>
          <div className="flex justify-between mt-6">
            <button
              onClick={handlePrevious}
              disabled={currentQuestionIndex === 0}
              className={`px-4 py-2 rounded-md ${
                currentQuestionIndex === 0
                  ? 'bg-gray-300 cursor-not-allowed'
                  : 'bg-gray-600 text-white hover:bg-gray-700'
              }`}
            >
              Previous
            </button>
            <button
              onClick={handleNext}
              className="bg-blue-600 text-white px-6 py-3 rounded-md hover:bg-blue-700"
            >
              {currentQuestionIndex === questions.length - 1 ? 'Finish' : 'Next'}
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ComprehensionCheck; 