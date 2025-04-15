import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';

type LearningProgress = {
  level: string;
  topic: string;
  completedPassages: number;
  totalPassages: number;
  vocabularyLearned: number;
  comprehensionScore: number;
};

const Dashboard: React.FC = () => {
  const navigate = useNavigate();
  const [progress] = useState<LearningProgress>({
    level: 'intermediate',
    topic: 'Technology',
    completedPassages: 2,
    totalPassages: 10,
    vocabularyLearned: 45,
    comprehensionScore: 85
  });

  const nextPassage = {
    title: 'The Future of Artificial Intelligence',
    topic: 'Technology',
    level: 'intermediate',
    estimatedTime: '15 minutes',
    difficulty: 'Medium'
  };

  const handleStartLearning = () => {
    navigate('/learning', { state: { passage: nextPassage } });
  };

  return (
    <div className="min-h-screen bg-gray-50 p-4">
      <div className="max-w-6xl mx-auto space-y-8">
        <div className="text-center">
          <h1 className="text-3xl font-bold text-gray-900">학습 대시보드</h1>
          <p className="mt-2 text-gray-600">
            당신의 학습 진행 상황과 다음 학습 내용을 확인하세요
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          {/* 진행 상황 */}
          <div className="bg-white p-6 rounded-lg shadow-md">
            <h2 className="text-xl font-semibold text-gray-900 mb-4">학습 진행 상황</h2>
            <div className="space-y-4">
              <div>
                <div className="flex justify-between mb-1">
                  <span className="text-sm font-medium text-gray-700">지문 완료율</span>
                  <span className="text-sm font-medium text-gray-700">
                    {progress.completedPassages}/{progress.totalPassages}
                  </span>
                </div>
                <div className="w-full bg-gray-200 rounded-full h-2.5">
                  <div
                    className="bg-indigo-600 h-2.5 rounded-full"
                    style={{ width: `${(progress.completedPassages / progress.totalPassages) * 100}%` }}
                  ></div>
                </div>
              </div>

              <div>
                <div className="flex justify-between mb-1">
                  <span className="text-sm font-medium text-gray-700">이해도 점수</span>
                  <span className="text-sm font-medium text-gray-700">{progress.comprehensionScore}%</span>
                </div>
                <div className="w-full bg-gray-200 rounded-full h-2.5">
                  <div
                    className="bg-green-600 h-2.5 rounded-full"
                    style={{ width: `${progress.comprehensionScore}%` }}
                  ></div>
                </div>
              </div>

              <div className="grid grid-cols-2 gap-4">
                <div className="bg-gray-50 p-4 rounded-lg">
                  <p className="text-sm text-gray-600">학습 레벨</p>
                  <p className="text-lg font-semibold text-gray-900">{progress.level}</p>
                </div>
                <div className="bg-gray-50 p-4 rounded-lg">
                  <p className="text-sm text-gray-600">학습한 어휘</p>
                  <p className="text-lg font-semibold text-gray-900">{progress.vocabularyLearned}개</p>
                </div>
              </div>
            </div>
          </div>

          {/* 다음 학습 */}
          <div className="bg-white p-6 rounded-lg shadow-md">
            <h2 className="text-xl font-semibold text-gray-900 mb-4">다음 학습</h2>
            <div className="space-y-4">
              <div>
                <h3 className="font-medium text-gray-900">{nextPassage.title}</h3>
                <div className="mt-2 grid grid-cols-2 gap-4">
                  <div>
                    <p className="text-sm text-gray-600">주제</p>
                    <p className="font-medium text-gray-900">{nextPassage.topic}</p>
                  </div>
                  <div>
                    <p className="text-sm text-gray-600">난이도</p>
                    <p className="font-medium text-gray-900">{nextPassage.difficulty}</p>
                  </div>
                  <div>
                    <p className="text-sm text-gray-600">예상 시간</p>
                    <p className="font-medium text-gray-900">{nextPassage.estimatedTime}</p>
                  </div>
                  <div>
                    <p className="text-sm text-gray-600">레벨</p>
                    <p className="font-medium text-gray-900">{nextPassage.level}</p>
                  </div>
                </div>
              </div>
              <button
                onClick={handleStartLearning}
                className="w-full py-2 px-4 bg-indigo-600 text-white rounded-md font-medium hover:bg-indigo-700"
              >
                학습 시작하기
              </button>
            </div>
          </div>
        </div>

        {/* 최근 학습 기록 */}
        <div className="bg-white p-6 rounded-lg shadow-md">
          <h2 className="text-xl font-semibold text-gray-900 mb-4">최근 학습 기록</h2>
          <div className="space-y-4">
            <div className="border-b pb-4">
              <div className="flex justify-between items-center">
                <h3 className="font-medium text-gray-900">The Impact of Technology on Education</h3>
                <span className="text-sm text-gray-500">2시간 전</span>
              </div>
              <div className="mt-2 flex items-center space-x-4">
                <span className="text-sm text-gray-600">이해도: 90%</span>
                <span className="text-sm text-gray-600">학습한 어휘: 12개</span>
              </div>
            </div>
            <div className="border-b pb-4">
              <div className="flex justify-between items-center">
                <h3 className="font-medium text-gray-900">Digital Transformation in Business</h3>
                <span className="text-sm text-gray-500">1일 전</span>
              </div>
              <div className="mt-2 flex items-center space-x-4">
                <span className="text-sm text-gray-600">이해도: 85%</span>
                <span className="text-sm text-gray-600">학습한 어휘: 15개</span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Dashboard; 