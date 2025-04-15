import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';

const GoalSelection: React.FC = () => {
  const navigate = useNavigate();
  const [selectedGoal, setSelectedGoal] = useState<string>('');

  const goals = [
    {
      id: 'entrance',
      title: '대학 입시 준비',
      description: '대학 입시를 위한 영어 독해와 어휘력 향상'
    },
    {
      id: 'improvement',
      title: '영어 실력 향상',
      description: '일반적인 영어 실력과 어휘력 향상'
    }
  ];

  const handleGoalSelect = (goalId: string) => {
    setSelectedGoal(goalId);
  };

  const handleContinue = () => {
    if (selectedGoal) {
      navigate('/topics');
    }
  };

  return (
    <div className="min-h-screen flex flex-col items-center justify-center bg-gray-50 p-4">
      <div className="max-w-2xl w-full space-y-8">
        <div className="text-center">
          <h1 className="text-3xl font-bold text-gray-900">학습 목표 선택</h1>
          <p className="mt-2 text-gray-600">
            당신의 주요 학습 목표를 선택해주세요
          </p>
        </div>

        <div className="grid grid-cols-1 gap-4">
          {goals.map((goal) => (
            <div
              key={goal.id}
              onClick={() => handleGoalSelect(goal.id)}
              className={`p-6 border rounded-lg cursor-pointer transition-colors ${
                selectedGoal === goal.id
                  ? 'border-indigo-500 bg-indigo-50'
                  : 'border-gray-200 hover:border-indigo-300'
              }`}
            >
              <h3 className="text-lg font-semibold text-gray-900">{goal.title}</h3>
              <p className="mt-2 text-gray-600">{goal.description}</p>
            </div>
          ))}
        </div>

        <button
          onClick={handleContinue}
          disabled={!selectedGoal}
          className={`w-full py-2 px-4 rounded-md text-white font-medium ${
            selectedGoal
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

export default GoalSelection; 