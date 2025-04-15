import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Onboarding from './pages/Onboarding';
import GoalSelection from './pages/GoalSelection';
import TopicSelection from './pages/TopicSelection';

const App: React.FC = () => {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<Onboarding />} />
        <Route path="/goal" element={<GoalSelection />} />
        <Route path="/topics" element={<TopicSelection />} />
      </Routes>
    </Router>
  );
};

export default App; 