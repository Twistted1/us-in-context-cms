import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Navbar from './components/Navbar';
import UsInContextCMS from './components/UsInContextCMS';

// A placeholder component for the new Overview page
const Overview = () => {
    // The date will be based on the user's computer time
    const today = new Date().toLocaleDateString('en-US', {
        weekday: 'long',
        year: 'numeric',
        month: 'long',
        day: 'numeric',
    });

    return (
        <div className="p-8">
            <div className="bg-gradient-to-r from-blue-600 to-purple-600 p-6 rounded-lg shadow-lg text-white">
                <h1 className="text-4xl font-bold">Content Creation Dashboard</h1>
                <p className="mt-2 text-blue-200">Track your projects, manage tasks, and stay on schedule.</p>
                <p className="mt-4 text-sm font-mono bg-black bg-opacity-20 px-2 py-1 rounded w-fit">{today}</p>
            </div>
        </div>
    );
}

function App() {
  return (
    <Router>
      <div className="bg-gray-50 min-h-screen">
        <Navbar />
        <main className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
          <Routes>
            {/* Main Pages */}
            <Route path="/" element={<Overview />} />
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