import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';

const LevelTest: React.FC = () => {
  const navigate = useNavigate();
  const [currentPassage, setCurrentPassage] = useState(0);
  const [unknownWords, setUnknownWords] = useState<string[]>([]);
  const [currentLevel, setCurrentLevel] = useState('intermediate');

  const passages = [
    {
      level: 'intermediate',
      title: 'The Impact of Technology on Education',
      content: `Technology has revolutionized the way we learn. Digital tools and online platforms have made education more accessible and interactive. Students can now access a wealth of information at their fingertips, collaborate with peers worldwide, and receive instant feedback on their work. However, this digital transformation also presents challenges, such as maintaining focus in an increasingly distracting environment and ensuring equal access to technology for all students.`,
      words: ['revolutionized', 'accessible', 'interactive', 'wealth', 'collaborate', 'worldwide', 'instant', 'transformation', 'distracting', 'ensuring']
    },
    {
      level: 'advanced',
      title: 'The Future of Artificial Intelligence',
      content: `Artificial Intelligence is rapidly transforming various sectors, from healthcare to finance. Machine learning algorithms can now diagnose diseases with remarkable accuracy, while natural language processing enables more sophisticated human-computer interactions. However, the ethical implications of AI development raise important questions about privacy, job displacement, and algorithmic bias. As we navigate this technological frontier, it's crucial to establish robust regulatory frameworks and ethical guidelines.`,
      words: ['transforming', 'algorithms', 'diagnose', 'remarkable', 'sophisticated', 'ethical', 'implications', 'displacement', 'algorithmic', 'frontier', 'robust', 'regulatory', 'frameworks']
    },
    {
      level: 'beginner',
      title: 'Healthy Eating Habits',
      content: `Eating healthy food is important for our body. We should eat fruits and vegetables every day. They give us vitamins and help us stay strong. We also need to drink water and exercise regularly. Good food and exercise make us feel better and help us live longer.`,
      words: ['healthy', 'important', 'vegetables', 'vitamins', 'regularly', 'exercise', 'better', 'longer']
    }
  ];

  const handleWordSelect = (word: string) => {
    setUnknownWords(prev => {
      if (prev.includes(word)) {
        return prev.filter(w => w !== word);
      }
      return [...prev, word];
    });
  };

  const handleContinue = () => {
    const currentPassageData = passages[currentPassage];
    const wordCount = currentPassageData.words.length;
    const unknownPercentage = (unknownWords.length / wordCount) * 100;

    if (unknownPercentage < 3 && currentLevel === 'intermediate') {
      setCurrentLevel('advanced');
      setCurrentPassage(1);
      setUnknownWords([]);
    } else if (unknownPercentage > 5 && currentLevel === 'intermediate') {
      setCurrentLevel('beginner');
      setCurrentPassage(2);
      setUnknownWords([]);
    } else {
      navigate('/learning', { state: { level: currentLevel, unknownWords } });
    }
  };

  return (
    <div className="min-h-screen flex flex-col items-center justify-center bg-gray-50 p-4">
      <div className="max-w-2xl w-full space-y-8">
        <div className="text-center">
          <h1 className="text-3xl font-bold text-gray-900">수준 테스트</h1>
          <p className="mt-2 text-gray-600">
            다음 지문을 읽고 모르는 단어를 선택해주세요
          </p>
        </div>

        <div className="bg-white p-6 rounded-lg shadow-md">
          <h2 className="text-xl font-semibold text-gray-900 mb-4">
            {passages[currentPassage].title}
          </h2>
          <p className="text-gray-700 mb-6">
            {passages[currentPassage].content}
          </p>

          <div className="space-y-4">
            <h3 className="font-medium text-gray-900">모르는 단어 선택:</h3>
            <div className="flex flex-wrap gap-2">
              {passages[currentPassage].words.map((word) => (
                <button
                  key={word}
                  onClick={() => handleWordSelect(word)}
                  className={`px-3 py-1 rounded-md ${
                    unknownWords.includes(word)
                      ? 'bg-indigo-600 text-white'
                      : 'bg-gray-100 text-gray-700 hover:bg-gray-200'
                  }`}
                >
                  {word}
                </button>
              ))}
            </div>
          </div>
        </div>

        <button
          onClick={handleContinue}
          className="w-full py-2 px-4 bg-indigo-600 text-white rounded-md font-medium hover:bg-indigo-700"
        >
          Continue
        </button>
      </div>
    </div>
  );
};

export default LevelTest; 