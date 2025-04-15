import React, { useState } from 'react';
import { useLocation, useNavigate } from 'react-router-dom';

interface Sentence {
  text: string;
  isSelected: boolean;
  isAnalyzed: boolean;
  structure: {
    subject: string;
    verb: string;
    object?: string;
    complement?: string;
    translation: string;
  };
}

interface Passage {
  title: string;
  content: string;
  sentences: Sentence[];
}

const SentenceTest: React.FC = () => {
  const location = useLocation();
  const navigate = useNavigate();
  const { passage } = location.state as { passage: Passage };
  const [currentSentenceIndex, setCurrentSentenceIndex] = useState(0);
  const [userAnswers, setUserAnswers] = useState<{ [key: number]: string }>({});
  const [score, setScore] = useState<number>(0);
  const [showResults, setShowResults] = useState(false);
  const [showFeedback, setShowFeedback] = useState(false);
  const [currentFeedback, setCurrentFeedback] = useState<React.ReactNode>(null);

  const selectedSentences = passage.sentences.filter(sentence => sentence.isSelected);

  const handleAnswerChange = (index: number, value: string) => {
    setUserAnswers(prev => ({
      ...prev,
      [index]: value
    }));
  };

  const checkTranslation = () => {
    const feedbacks: React.ReactNode[] = [];
    let correctCount = 0;

    selectedSentences.forEach((sentence, index) => {
      const userAnswer = userAnswers[index]?.toLowerCase().trim();
      const correctAnswer = sentence.structure.translation.toLowerCase().trim();
      
      if (userAnswer === correctAnswer) {
        correctCount++;
        feedbacks.push(
          <div key={index} className="text-green-600 mb-4">
            <div className="font-semibold">✓ Sentence {index + 1}: Correct!</div>
            <div className="text-sm text-gray-600 mt-1">
              Your translation: {userAnswers[index]}
            </div>
          </div>
        );
      } else {
        feedbacks.push(
          <div key={index} className="text-red-600 mb-4">
            <div className="font-semibold">✗ Sentence {index + 1}: Needs improvement</div>
            <div className="text-sm text-gray-600 mt-1">
              Your translation: {userAnswers[index]}
            </div>
            <div className="text-sm text-gray-600 mt-1">
              Correct translation: {sentence.structure.translation}
            </div>
            <div className="text-sm text-blue-600 mt-2">
              Tip: Try to focus on the main subject and verb of the sentence.
            </div>
          </div>
        );
      }
    });

    const totalScore = Math.round((correctCount / selectedSentences.length) * 100);
    setScore(totalScore);

    setCurrentFeedback(
      <div className="space-y-4">
        <div className="text-center mb-6">
          <div className="text-2xl font-bold text-gray-900">Your Score: {totalScore}%</div>
          <div className="text-sm text-gray-600 mt-1">
            {correctCount} out of {selectedSentences.length} sentences correct
          </div>
        </div>
        <div className="space-y-2">
          {feedbacks}
        </div>
        {totalScore === 100 ? (
          <div className="text-center mt-6">
            <div className="text-green-600 font-bold text-lg">
              Excellent! You've mastered all the sentences!
            </div>
            <button
              onClick={() => navigate('/passage-structure', { state: { passage } })}
              className="mt-4 bg-blue-600 text-white py-2 px-6 rounded hover:bg-blue-700"
            >
              Continue to Passage Reading
            </button>
          </div>
        ) : (
          <div className="text-center mt-6">
            <div className="text-blue-600 font-semibold">
              Keep practicing! Here are some tips:
            </div>
            <ul className="text-sm text-gray-600 mt-2 space-y-1">
              <li>• Pay attention to the sentence structure (subject, verb, object)</li>
              <li>• Make sure to include all key elements in your translation</li>
              <li>• Try to maintain the same tense as the original sentence</li>
            </ul>
          </div>
        )}
      </div>
    );
    setShowFeedback(true);
    setShowResults(true);
  };

  const handleNext = () => {
    if (currentSentenceIndex < selectedSentences.length - 1) {
      setCurrentSentenceIndex(currentSentenceIndex + 1);
      setShowFeedback(false);
    } else {
      setShowResults(true);
    }
  };

  const handlePrevious = () => {
    if (currentSentenceIndex > 0) {
      setCurrentSentenceIndex(currentSentenceIndex - 1);
      setShowFeedback(false);
    }
  };

  const calculateScore = () => {
    return Object.entries(userAnswers).reduce((score, [index, answer]) => {
      const sentence = selectedSentences[parseInt(index)];
      return answer.toLowerCase() === sentence.structure.translation.toLowerCase() ? score + 1 : score;
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
    const isPerfectScore = score === selectedSentences.length;

    return (
      <div className="min-h-screen bg-gray-50 p-4">
        <div className="max-w-4xl mx-auto">
          <div className="bg-white p-6 rounded-lg shadow-md">
            <h2 className="text-2xl font-bold text-gray-900 mb-4">Sentence Test Results</h2>
            <p className="text-gray-700 mb-4">
              You scored {score} out of {selectedSentences.length} sentences correctly.
            </p>
            {isPerfectScore ? (
              <div className="flex justify-end">
                <button
                  onClick={() => navigate('/passage-structure', { state: { passage } })}
                  className="bg-blue-600 text-white px-6 py-3 rounded-md hover:bg-blue-700"
                >
                  Continue to Passage Reading
                </button>
              </div>
            ) : (
              <div className="flex justify-end">
                <button
                  onClick={() => setShowResults(false)}
                  className="bg-blue-600 text-white px-6 py-3 rounded-md hover:bg-blue-700"
                >
                  Try Again
                </button>
              </div>
            )}
          </div>
        </div>
      </div>
    );
  }

  return (
    <div className="min-h-screen bg-gray-50 p-6">
      <div className="max-w-4xl mx-auto">
        <h1 className="text-3xl font-bold text-gray-900 mb-8">Sentence Translation Test</h1>
        
        {!showResults ? (
          <div className="space-y-6">
            {selectedSentences.map((sentence, index) => (
              <div key={index} className="bg-white p-6 rounded-lg shadow">
                <p className="text-lg font-medium text-gray-900 mb-4">{sentence.text}</p>
                <input
                  type="text"
                  value={userAnswers[index] || ''}
                  onChange={(e) => handleAnswerChange(index, e.target.value)}
                  className="w-full p-2 border rounded"
                  placeholder="Enter your translation"
                />
              </div>
            ))}
            <button
              onClick={checkTranslation}
              className="w-full bg-blue-600 text-white py-2 px-4 rounded hover:bg-blue-700"
            >
              Submit Answers
            </button>
          </div>
        ) : (
          <div className="space-y-6">
            <div className="bg-white p-6 rounded-lg shadow">
              {currentFeedback}
              {score < 100 && (
                <button
                  onClick={() => {
                    setShowResults(false);
                    setShowFeedback(false);
                    setUserAnswers({});
                  }}
                  className="w-full mt-6 bg-blue-600 text-white py-2 px-4 rounded hover:bg-blue-700"
                >
                  Try Again
                </button>
              )}
            </div>
          </div>
        )}
      </div>
    </div>
  );
};

export default SentenceTest; 