import React from 'react';
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Onboarding from "./pages/Onboarding";
import GoalSelection from "./pages/GoalSelection";
import TopicSelection from "./pages/TopicSelection";
import LevelTest from "./pages/LevelTest";
import Learning from "./pages/Learning";
import PassageStructure from "./pages/PassageStructure";
import SentenceTest from "./pages/SentenceTest";
import Dashboard from "./pages/Dashboard";

function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<Onboarding />} />
        <Route path="/goals" element={<GoalSelection />} />
        <Route path="/topics" element={<TopicSelection />} />
        <Route path="/level-test" element={<LevelTest />} />
        <Route path="/learning" element={<Learning />} />
        <Route path="/passage-structure" element={<PassageStructure />} />
        <Route path="/sentence-test" element={<SentenceTest />} />
        <Route path="/dashboard" element={<Dashboard />} />
      </Routes>
    </Router>
  );
}

export default App; 