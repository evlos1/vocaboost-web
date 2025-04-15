import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';

type Word = {
  word: string;
  definition: string;
  example: string;
  isLearned: boolean;
};

type Sentence = {
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
};

type Passage = {
  title: string;
  content: string;
  words: Word[];
  sentences: Sentence[];
};

const Learning: React.FC = () => {
  const navigate = useNavigate();
  const [currentPassage, setCurrentPassage] = useState<Passage>({
    title: "The Impact of Technology on Education",
    content: "Technology has revolutionized the way we learn and teach in modern society. Digital tools and online platforms have made education more accessible and interactive than ever before. Students can now access a wealth of information at their fingertips, while teachers can create more engaging and personalized learning experiences. The traditional classroom setting has been transformed by innovative technologies that facilitate collaborative learning and real-time feedback. Virtual reality and augmented reality applications allow students to explore complex concepts through immersive experiences. Artificial intelligence systems can analyze student performance and provide customized learning paths to address individual needs. Online discussion forums and video conferencing tools have enabled global collaboration among students from different cultural backgrounds. Educational apps and gamification techniques have made learning more engaging and motivating for students of all ages. However, the rapid integration of technology in education also presents significant challenges that need to be addressed. Digital literacy has become an essential skill for both students and educators in the 21st century. The digital divide continues to create disparities in access to quality education across different socioeconomic groups. Maintaining student engagement and preventing digital distractions remain ongoing concerns in technology-enhanced learning environments. Despite these challenges, the potential of technology to transform education and create more equitable learning opportunities is undeniable.",
    words: [
      {
        word: "revolutionized",
        definition: "completely changed or transformed something in a significant way",
        example: "The internet has revolutionized how we communicate with each other.",
        isLearned: false
      },
      {
        word: "accessible",
        definition: "able to be reached or obtained easily",
        example: "The new library is accessible to people with disabilities.",
        isLearned: false
      }
    ],
    sentences: [
      {
        text: "Technology has revolutionized the way we learn and teach in modern society.",
        isSelected: false,
        isAnalyzed: false,
        structure: {
          subject: "Technology",
          verb: "has revolutionized",
          object: "the way we learn and teach in modern society",
          translation: "기술은 현대 사회에서 우리가 배우고 가르치는 방식을 혁신적으로 변화시켰습니다."
        }
      },
      {
        text: "Digital tools and online platforms have made education more accessible and interactive than ever before.",
        isSelected: false,
        isAnalyzed: false,
        structure: {
          subject: "Digital tools and online platforms",
          verb: "have made",
          object: "education",
          complement: "more accessible and interactive than ever before",
          translation: "디지털 도구와 온라인 플랫폼은 교육을 그 어느 때보다 접근하기 쉽고 상호작용적으로 만들었습니다."
        }
      },
      {
        text: "Students can now access a wealth of information at their fingertips, while teachers can create more engaging and personalized learning experiences.",
        isSelected: false,
        isAnalyzed: false,
        structure: {
          subject: "Students",
          verb: "can access",
          object: "a wealth of information",
          translation: "학생들은 이제 손가락 끝에서 풍부한 정보에 접근할 수 있으며, 교사들은 더욱 흥미롭고 개인화된 학습 경험을 만들 수 있습니다."
        }
      },
      {
        text: "The traditional classroom setting has been transformed by innovative technologies that facilitate collaborative learning and real-time feedback.",
        isSelected: false,
        isAnalyzed: false,
        structure: {
          subject: "The traditional classroom setting",
          verb: "has been transformed",
          translation: "전통적인 교실 환경은 협력적 학습과 실시간 피드백을 촉진하는 혁신적인 기술들에 의해 변화되었습니다."
        }
      },
      {
        text: "Virtual reality and augmented reality applications allow students to explore complex concepts through immersive experiences.",
        isSelected: false,
        isAnalyzed: false,
        structure: {
          subject: "Virtual reality and augmented reality applications",
          verb: "allow",
          object: "students to explore complex concepts through immersive experiences",
          translation: "가상 현실과 증강 현실 애플리케이션은 학생들이 몰입형 경험을 통해 복잡한 개념을 탐구할 수 있게 합니다."
        }
      },
      {
        text: "Artificial intelligence systems can analyze student performance and provide customized learning paths to address individual needs.",
        isSelected: false,
        isAnalyzed: false,
        structure: {
          subject: "Artificial intelligence systems",
          verb: "can analyze",
          object: "student performance",
          translation: "인공지능 시스템은 학생들의 성과를 분석하고 개별적인 요구를 해결하기 위한 맞춤형 학습 경로를 제공할 수 있습니다."
        }
      },
      {
        text: "Online discussion forums and video conferencing tools have enabled global collaboration among students from different cultural backgrounds.",
        isSelected: false,
        isAnalyzed: false,
        structure: {
          subject: "Online discussion forums and video conferencing tools",
          verb: "have enabled",
          object: "global collaboration",
          translation: "온라인 토론 포럼과 화상 회의 도구는 서로 다른 문화적 배경을 가진 학생들 사이의 글로벌 협업을 가능하게 했습니다."
        }
      },
      {
        text: "Educational apps and gamification techniques have made learning more engaging and motivating for students of all ages.",
        isSelected: false,
        isAnalyzed: false,
        structure: {
          subject: "Educational apps and gamification techniques",
          verb: "have made",
          object: "learning",
          complement: "more engaging and motivating for students of all ages",
          translation: "교육용 앱과 게이미피케이션 기술은 모든 연령대의 학생들에게 학습을 더욱 흥미롭고 동기부여가 되게 만들었습니다."
        }
      },
      {
        text: "However, the rapid integration of technology in education also presents significant challenges that need to be addressed.",
        isSelected: false,
        isAnalyzed: false,
        structure: {
          subject: "the rapid integration of technology in education",
          verb: "presents",
          object: "significant challenges",
          translation: "그러나 교육에서 기술의 빠른 통합은 해결해야 할 중요한 도전 과제를 제시합니다."
        }
      },
      {
        text: "Digital literacy has become an essential skill for both students and educators in the 21st century.",
        isSelected: false,
        isAnalyzed: false,
        structure: {
          subject: "Digital literacy",
          verb: "has become",
          complement: "an essential skill for both students and educators in the 21st century",
          translation: "디지털 리터러시는 21세기에 학생과 교육자 모두에게 필수적인 기술이 되었습니다."
        }
      },
      {
        text: "The digital divide continues to create disparities in access to quality education across different socioeconomic groups.",
        isSelected: false,
        isAnalyzed: false,
        structure: {
          subject: "The digital divide",
          verb: "continues to create",
          object: "disparities in access to quality education",
          translation: "디지털 격차는 서로 다른 사회경제적 집단 간의 양질의 교육 접근성에서 불균형을 계속해서 만들어내고 있습니다."
        }
      },
      {
        text: "Maintaining student engagement and preventing digital distractions remain ongoing concerns in technology-enhanced learning environments.",
        isSelected: false,
        isAnalyzed: false,
        structure: {
          subject: "Maintaining student engagement and preventing digital distractions",
          verb: "remain",
          complement: "ongoing concerns in technology-enhanced learning environments",
          translation: "학생들의 참여를 유지하고 디지털 방해 요소를 방지하는 것은 기술이 강화된 학습 환경에서 계속되는 관심사입니다."
        }
      },
      {
        text: "Despite these challenges, the potential of technology to transform education and create more equitable learning opportunities is undeniable.",
        isSelected: false,
        isAnalyzed: false,
        structure: {
          subject: "the potential of technology",
          verb: "is",
          complement: "undeniable",
          translation: "이러한 도전 과제에도 불구하고, 교육을 변화시키고 더욱 공평한 학습 기회를 창출하는 기술의 잠재력은 부인할 수 없습니다."
        }
      }
    ]
  });

  const [showSentenceAnalysis, setShowSentenceAnalysis] = useState(false);
  const [showPassageReview, setShowPassageReview] = useState(false);

  const handleSentenceSelect = (sentenceText: string) => {
    setCurrentPassage(prev => ({
      ...prev,
      sentences: prev.sentences.map(sentence => ({
        ...sentence,
        isSelected: sentence.text === sentenceText ? !sentence.isSelected : sentence.isSelected
      }))
    }));
  };

  const handleContinue = () => {
    setShowSentenceAnalysis(true);
  };

  const handlePassageAnalysis = () => {
    navigate('/passage-structure', { state: { passage: currentPassage } });
  };

  return (
    <div className="min-h-screen bg-gray-50 p-4">
      <div className="max-w-4xl mx-auto">
        <h1 className="text-3xl font-bold text-gray-900 mb-6">{currentPassage.title}</h1>
        
        {!showSentenceAnalysis && !showPassageReview ? (
          <div className="bg-white p-6 rounded-lg shadow-md">
            <h2 className="text-2xl font-bold text-gray-900 mb-4">Sentence Selection</h2>
            <p className="text-gray-700 mb-6">Select sentences you want to analyze. If you understand all sentences, click 'Continue to Analysis' without selecting any.</p>
            
            <div className="space-y-4 mb-6">
              {currentPassage.sentences.map((sentence, index) => (
                <div
                  key={index}
                  className={`p-4 rounded-lg cursor-pointer transition-colors ${
                    sentence.isSelected
                      ? 'bg-indigo-50 border-2 border-indigo-500' 
                      : 'bg-white border border-gray-200 hover:bg-gray-50'
                  }`}
                  onClick={() => handleSentenceSelect(sentence.text)}
                >
                  <p className="text-gray-700">{sentence.text}</p>
                  {sentence.isSelected && (
                    <div className="mt-2 text-sm text-indigo-600">
                      ✓ Selected
                    </div>
                  )}
                </div>
              ))}
            </div>

            <div className="flex justify-end">
              <button
                onClick={handleContinue}
                className="bg-blue-600 text-white px-6 py-3 rounded-md hover:bg-blue-700 transition-colors"
              >
                Continue to Analysis
              </button>
            </div>
          </div>
        ) : showPassageReview ? (
          <div className="bg-white p-6 rounded-lg shadow-md">
            <h2 className="text-2xl font-bold text-gray-900 mb-4">Passage Review</h2>
            <p className="text-gray-700 mb-6">Review the passage and learn the highlighted words:</p>
            <div className="bg-gray-50 p-6 rounded-lg mb-6">
              <p className="text-gray-700 whitespace-pre-line">{currentPassage.content}</p>
            </div>
            <div className="flex justify-end">
              <button
                onClick={() => {
                  setShowPassageReview(false);
                  setShowSentenceAnalysis(true);
                }}
                className="bg-blue-600 text-white px-6 py-3 rounded-md hover:bg-blue-700 transition-colors"
              >
                Continue to Analysis
              </button>
            </div>
          </div>
        ) : (
          <div className="bg-white p-6 rounded-lg shadow-md">
            <h2 className="text-2xl font-bold text-gray-900 mb-4">Sentence Analysis</h2>
            <p className="text-gray-700 mb-6">Analyze the selected sentences:</p>
            <div className="space-y-4">
              {currentPassage.sentences
                .filter(sentence => sentence.isSelected)
                .map((sentence, index) => (
                  <div key={index} className="bg-gray-50 p-6 rounded-lg">
                    <p className="text-gray-700 mb-4">{sentence.text}</p>
                    <div className="grid grid-cols-2 gap-4">
                      <div>
                        <p className="text-gray-600">Subject:</p>
                        <p className="text-gray-900 font-medium">{sentence.structure.subject}</p>
                      </div>
                      <div>
                        <p className="text-gray-600">Verb:</p>
                        <p className="text-gray-900 font-medium">{sentence.structure.verb}</p>
                      </div>
                      {sentence.structure.object && (
                        <div>
                          <p className="text-gray-600">Object:</p>
                          <p className="text-gray-900 font-medium">{sentence.structure.object}</p>
                        </div>
                      )}
                      {sentence.structure.complement && (
                        <div>
                          <p className="text-gray-600">Complement:</p>
                          <p className="text-gray-900 font-medium">{sentence.structure.complement}</p>
                        </div>
                      )}
                    </div>
                    <div className="mt-4">
                      <p className="text-gray-600">Translation:</p>
                      <p className="text-gray-900 font-medium">{sentence.structure.translation}</p>
                    </div>
                  </div>
                ))}
            </div>
            <div className="flex justify-end mt-6">
              <button
                onClick={() => navigate('/sentence-test', { state: { passage: currentPassage } })}
                className="bg-blue-600 text-white px-6 py-3 rounded-md hover:bg-blue-700 transition-colors"
              >
                Complete Learning
              </button>
            </div>
          </div>
        )}
      </div>
    </div>
  );
};

export default Learning; 