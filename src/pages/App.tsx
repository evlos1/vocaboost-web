import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Onboarding from './pages/Onboarding';
import GoalSelection from './pages/GoalSelection';
import TopicSelection from './pages/TopicSelection';
import DiagnosticTest from './pages/DiagnosticTest';

function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<Onboarding />} />
        <Route path="/goals" element={<GoalSelection />} />
        <Route path="/topics" element={<TopicSelection />} />
        <Route path="/diagnostic" element={<DiagnosticTest />} />
      </Routes>
    </Router>
  );
}

export default App; 