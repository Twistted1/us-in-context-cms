import React, { useState, useMemo, useCallback } from 'react';
import { Target, FileText, Twitter, Instagram, Clapperboard, CheckCircle, Download, Calendar, ArrowLeft, ArrowRight } from 'lucide-react';
import SummaryCard from './SummaryCard';
import WeeklySchedule from './WeeklySchedule';
import RecentNotes from './RecentNotes';
import QuickActions from './QuickActions';

const MasterDashboard = () => {
  // --- STATE AND LOGIC ---
  const [activePlatform, setActivePlatform] = useState('X-Twitter'); // NEW: State to track the selected platform
  const [completedTasks, setCompletedTasks] = useState([]);
  const [currentWeeks, setCurrentWeeks] = useState({
      'X-Twitter': 1, 'Instagram': 1, 'Facebook': 1, 'LinkedIn': 1,
      'Website': 1, 'YouTube': 1, 'TikTok': 1,
  });

  const strategies = useMemo(() => ({
    'X-Twitter': {
      week1: { day1: "🌍 Just joined X! I'm behind @UsInContext...", day2: "🧵 THREAD: Remember the UK fuel crisis?...", day3: "🏭➡️💼 UK TRANSFORMATION: We went from making things to...", day4: "🎯 CONTEXT CHECK: [Current economic headline]...", day5: "⚠️ PATTERN ALERT: Spot the cycle...", day6: "❓ QUESTION: What 'supply chain issue' has affected you most?...", day7: "📝 WEEK 1 RECAP: We covered..." },
      week2: { day1: "Post 1 on inflation" /* etc. */ },
      week3: { day1: "Post 1 on fiscal policy" /* etc. */ },
      week4: { day1: "Post 1 on trade deficits" /* etc. */ },
    },
    'Instagram': { 
      week1: { post1: "Carousel on UK economy basics" }, week2: { post1: "Reel simplifying interest rates"}, week3: {}, week4: {}
    },
    'TikTok': { 
      week1: { video1: "15-second explainer on inflation." }, week2: {}, week3: {}, week4: {}
    },
    // Other platforms (Facebook, Website, YouTube, LinkedIn) would be fully defined here
  }), []);

  const platformData = useMemo(() => ({
      'X-Twitter': { total: 28, IconComponent: Twitter, colorClass: 'sky' },
      'Instagram': { total: 28, IconComponent: Instagram, colorClass: 'pink' },
      'TikTok': { total: 4, IconComponent: Clapperboard, colorClass: 'black' },
      // ...data for other platforms
  }), []);

  const toggleTask = useCallback((taskId) => {
      setCompletedTasks(prev => prev.includes(taskId) ? prev.filter(id => id !== taskId) : [...prev, taskId]);
  }, []);
  
  const summaryData = useMemo(() => [
    { title: 'Projects', IconComponent: Target, completed: 1, total: 1, colorClass: 'indigo' },
    { title: 'Notes', IconComponent: FileText, completed: 1, total: 1, colorClass: 'purple' },
    ...Object.keys(platformData).map(platform => ({
        title: platform,
        IconComponent: platformData[platform].IconComponent,
        completed: completedTasks.filter(t => t.startsWith(`${platform}-`)).length,
        total: platformData[platform].total || 0,
        colorClass: platformData[platform].colorClass
    }))
  ], [completedTasks, platformData]);

  const staticDate = "Wednesday, July 30, 2025";

  const platformTabs = ['X-Twitter', 'Instagram', 'TikTok', 'Facebook', 'LinkedIn', 'Website', 'YouTube'];

  return (
    <div className="p-4 sm:p-6 lg:p-8 font-sans">
      <div className="mb-8">
        <h1 className="text-4xl font-bold text-gray-800">Content Creation Dashboard</h1>
        <p className="mt-2 text-lg text-gray-500">Track your projects, manage content across all platforms</p>
        <p className="mt-4 text-sm font-mono text-gray-400">Today is {staticDate}</p>
      </div>

      <div className="mb-8 grid grid-cols-2 md:grid-cols-4 lg:grid-cols-7 gap-4">
        {summaryData.map(card => (
          <SummaryCard key={card.title} {...card} />
        ))}
      </div>
      
      {/* NEW: Platform selection tabs */}
      <div className="mb-6 border-b border-gray-200">
        <div className="flex space-x-4" aria-label="Tabs">
          {platformTabs.map(tab => (
            <button
              key={tab}
              onClick={() => setActivePlatform(tab)}
              className={`whitespace-nowrap pb-4 px-1 border-b-2 font-medium text-sm ${
                activePlatform === tab
                  ? 'border-blue-500 text-blue-600'
                  : 'border-transparent text-gray-500 hover:text-gray-700'
              }`}
            >
              {tab}
            </button>
          ))}
        </div>
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
        <div className="lg:col-span-2">
          <WeeklySchedule 
            strategies={strategies} 
            completedTasks={completedTasks} 
            toggleTask={toggleTask}
            activePlatform={activePlatform} // Pass the active platform down
          />
        </div>
        <div className="lg:col-span-1 space-y-8">
          <RecentNotes />
          <QuickActions />
        </div>
      </div>
    </div>
  );
};

export default MasterDashboard;