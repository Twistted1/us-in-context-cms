import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Navbar from './components/Navbar';
import UsInContextCMS from './components/UsInContextCMS';
import MasterDashboard from './components/MasterDashboard'; // We've added our new dashboard

function App() {
  return (
    <Router>
      <div className="bg-gray-50 min-h-screen">
        <Navbar />
        <main className="max-w-7xl mx-auto">
          <Routes>
            {/* Main Pages */}
            <Route path="/" element={<MasterDashboard />} /> {/* This now shows our new dashboard */}
            <Route path="/cms" element={<UsInContextCMS />} />
            
            {/* Placeholder Pages from Navbar */}
            <Route path="/projects" element={<div>Projects Page Coming Soon</div>} />
            <Route path="/notes" element={<div>Notes Page Coming Soon</div>} />
            <Route path="/calendar" element={<div>Calendar Page Coming Soon</div>} />
            <Route path="/x-twitter" element={<div>X-Twitter Page Coming Soon</div>} />
            <Route path="/instagram" element={<div>Instagram Page Coming Soon</div>} />
            <Route path="/tiktok" element={<div>TikTok Page Coming Soon</div>} />
            <Route path="/linkedin" element={<div>LinkedIn Page Coming Soon</div>} />
          </Routes>
        </main>
      </div>
    </Router>
  );
}

export default App;