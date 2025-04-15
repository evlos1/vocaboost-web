import React from 'react';
import { useLocation, useNavigate } from 'react-router-dom';

const PassageStructure: React.FC = () => {
  const location = useLocation();
  const navigate = useNavigate();
  const { passage } = location.state as { passage: any };

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

  const structure = {
    mainTopic: 'The Impact of Technology on Education',
    pattern: 'Problem-Solution-Challenge Structure',
    sections: [
      {
        title: 'Introduction',
        sentences: [0],
        description: 'Introduces the revolutionary impact of technology on learning'
      },
      {
        title: 'Positive Impact',
        sentences: [1, 2],
        description: 'Explains the positive changes brought by digital tools and online platforms'
      },
      {
        title: 'Challenges',
        sentences: [3],
        description: 'Presents new challenges in the digital transformation'
      }
    ],
    keyPoints: [
      'Revolutionary role of technology',
      'Enhanced accessibility and interactivity',
      'Easy access to information and collaboration',
      'Challenges in maintaining focus',
      'Equality in technology access'
    ]
  };

  const handleContinue = () => {
    navigate('/learning', { state: { passage } });
  };

  return (
    <div className="min-h-screen bg-gray-50 p-4">
      <div className="max-w-4xl mx-auto">
        <h1 className="text-3xl font-bold text-gray-900 mb-6">{passage.title}</h1>
        <div className="bg-white p-6 rounded-lg shadow-md">
          <h2 className="text-2xl font-bold text-gray-900 mb-4">Passage Structure Analysis</h2>
          
          <div className="space-y-6">
            <div className="bg-gray-50 p-6 rounded-lg">
              <h3 className="text-xl font-semibold text-gray-900 mb-2">Main Topic</h3>
              <p className="text-gray-700">The impact of technology on education, including its benefits and challenges</p>
            </div>

            <div className="bg-gray-50 p-6 rounded-lg">
              <h3 className="text-xl font-semibold text-gray-900 mb-2">Organizing Pattern</h3>
              <p className="text-gray-700">Problem-Solution-Challenge Structure</p>
              <div className="mt-4 space-y-4">
                <div className="border-l-4 border-indigo-500 pl-4">
                  <h4 className="font-medium text-gray-900">Introduction</h4>
                  <p className="text-gray-600 mt-1">Introduces the revolutionary impact of technology on learning</p>
                </div>
                <div className="border-l-4 border-indigo-500 pl-4">
                  <h4 className="font-medium text-gray-900">Positive Impact</h4>
                  <p className="text-gray-600 mt-1">Explains the positive changes brought by digital tools and online platforms</p>
                </div>
                <div className="border-l-4 border-indigo-500 pl-4">
                  <h4 className="font-medium text-gray-900">Challenges</h4>
                  <p className="text-gray-600 mt-1">Presents new challenges in the digital transformation</p>
                </div>
              </div>
            </div>

            <div className="bg-gray-50 p-6 rounded-lg">
              <h3 className="text-xl font-semibold text-gray-900 mb-2">Translation</h3>
              <p className="text-gray-700">
                기술은 현대 사회에서 우리가 배우고 가르치는 방식을 혁신적으로 변화시켰습니다. 디지털 도구와 온라인 플랫폼은 교육을 그 어느 때보다 접근하기 쉽고 상호작용적으로 만들었습니다. 학생들은 이제 손가락 끝에서 풍부한 정보에 접근할 수 있으며, 교사들은 더욱 흥미롭고 개인화된 학습 경험을 만들 수 있습니다. 전통적인 교실 환경은 협력적 학습과 실시간 피드백을 촉진하는 혁신적인 기술들에 의해 변화되었습니다. 가상 현실과 증강 현실 애플리케이션은 학생들이 몰입형 경험을 통해 복잡한 개념을 탐구할 수 있게 합니다. 인공지능 시스템은 학생들의 성과를 분석하고 개별적인 요구를 해결하기 위한 맞춤형 학습 경로를 제공할 수 있습니다. 온라인 토론 포럼과 화상 회의 도구는 서로 다른 문화적 배경을 가진 학생들 사이의 글로벌 협업을 가능하게 했습니다. 교육용 앱과 게이미피케이션 기술은 모든 연령대의 학생들에게 학습을 더욱 흥미롭고 동기부여가 되게 만들었습니다. 그러나 교육에서 기술의 빠른 통합은 해결해야 할 중요한 도전 과제를 제시합니다. 디지털 리터러시는 21세기에 학생과 교육자 모두에게 필수적인 기술이 되었습니다. 디지털 격차는 서로 다른 사회경제적 집단 간의 양질의 교육 접근성에서 불균형을 계속해서 만들어내고 있습니다. 학생들의 참여를 유지하고 디지털 방해 요소를 방지하는 것은 기술이 강화된 학습 환경에서 계속되는 관심사입니다. 이러한 도전 과제에도 불구하고, 교육을 변화시키고 더욱 공평한 학습 기회를 창출하는 기술의 잠재력은 부인할 수 없습니다.
              </p>
            </div>
          </div>

          <div className="flex justify-end mt-6">
            <button
              onClick={() => navigate('/learning', { state: { passage } })}
              className="bg-blue-600 text-white px-6 py-3 rounded-md hover:bg-blue-700 transition-colors"
            >
              Back to Passage Review
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default PassageStructure; 