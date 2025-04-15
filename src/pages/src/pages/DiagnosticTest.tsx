import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';

const DiagnosticTest: React.FC = () => {
  const navigate = useNavigate();
  const [currentQuestion, setCurrentQuestion] = useState(0);
  const [answers, setAnswers] = useState<string[]>([]);
  const [showResults, setShowResults] = useState(false);

  const questions = [
    {
      id: 1,
      word: 'perseverance',
      options: ['지구력', '인내심', '용기', '정확성'],
      correctAnswer: '인내심'
    },
    {
      id: 2,
      word: 'innovative',
      options: ['전통적인', '혁신적인', '보수적인', '일반적인'],
      correctAnswer: '혁신적인'
    },
    {
      id: 3,
      word: 'comprehensive',
      options: ['부분적인', '종합적인', '제한적인', '단순한'],
      correctAnswer: '종합적인'
    }
  ];

  const handleAnswerSelect = (answer: string) => {
    setAnswers([...answers, answer]);
    if (currentQuestion < questions.length - 1) {
      setCurrentQuestion(currentQuestion + 1);
    } else {
      // 모든 문제를 풀었을 때 결과 페이지로 이동
      navigate('/results');
    }
  };

  return (
    <div className="min-h-screen flex flex-col items-center justify-center bg-gray-50 p-4">
      <div className="max-w-2xl w-full space-y-8">
        <div className="text-center">
          <h1 className="text-3xl font-bold text-gray-900">진단 테스트</h1>
          <p className="mt-2 text-gray-600">
            문제 {currentQuestion + 1} / {questions.length}
          </p>
        </div>

        <div className="bg-white p-8 rounded-lg shadow-md">
          <h2 className="text-2xl font-semibold text-gray-900 mb-6">
            {questions[currentQuestion].word}
          </h2>
          
          <div className="space-y-4">
            {questions[currentQuestion].options.map((option, index) => (
              <button
                key={index}
                onClick={() => handleAnswerSelect(option)}
                className="w-full p-4 text-left border rounded-lg hover:bg-gray-50 transition-colors"
              >
                {option}
              </button>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};

export default DiagnosticTest; 