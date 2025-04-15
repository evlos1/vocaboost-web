import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';

const goals = [
  { id: 'exam', title: 'Exam Preparation', description: 'Prepare for TOEFL, IELTS, or other English proficiency tests' },
  { id: 'business', title: 'Business English', description: 'Improve your professional communication skills' },
  { id: 'academic', title: 'Academic English', description: 'Enhance your academic writing and reading skills' },
  { id: 'daily', title: 'Daily Communication', description: 'Improve your everyday English conversation skills' },
];

const GoalSelection: React.FC = () => {
  const navigate = useNavigate();
  const [selectedGoal, setSelectedGoal] = useState<string | null>(null);

  const handleGoalSelect = (goalId: string) => {
    setSelectedGoal(goalId);
  };

  const handleContinue = () => {
    if (selectedGoal) {
      navigate('/topics');
    }
  };

  return (
    <div className="min-h-screen bg-gray-50 p-6">
      <div className="max-w-2xl mx-auto">
        <h1 className="text-3xl font-bold text-gray-900 mb-8 text-center">
          What's your main goal?
        </h1>
        <div className="space-y-4">
          {goals.map((goal) => (
            <div
              key={goal.id}
              className={`p-6 border-2 rounded-lg cursor-pointer transition-colors ${
                selectedGoal === goal.id
                  ? 'border-blue-500 bg-blue-50'
                  : 'border-gray-200 hover:border-blue-300'
              }`}
              onClick={() => handleGoalSelect(goal.id)}
            >
              <h2 className="text-xl font-semibold text-gray-900 mb-2">
                {goal.title}
              </h2>
              <p className="text-gray-600">{goal.description}</p>
            </div>
          ))}
        </div>
        <div className="mt-8 text-center">
          <button
            onClick={handleContinue}
            disabled={!selectedGoal}
            className={`px-6 py-3 rounded-lg font-medium transition-colors ${
              selectedGoal
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

export default GoalSelection; 