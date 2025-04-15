import React from 'react';
import { useNavigate } from 'react-router-dom';

const Onboarding: React.FC = () => {
  const navigate = useNavigate();

  return (
    <div className="min-h-screen flex flex-col items-center justify-center bg-gray-50 p-4">
      <div className="max-w-md w-full space-y-8 text-center">
        <h1 className="text-4xl font-bold text-gray-900 mb-6">
          Welcome to VocaBoost
        </h1>
        <p className="text-lg text-gray-600 mb-8">
          Your personalized vocabulary learning journey starts here. 
          Let's help you achieve your language goals!
        </p>
        <button
          onClick={() => navigate('/goals')}
          className="w-full bg-blue-600 text-white py-3 px-4 rounded-lg font-medium hover:bg-blue-700 transition-colors"
        >
          Get Started
        </button>
      </div>
    </div>
  );
};

export default Onboarding; 