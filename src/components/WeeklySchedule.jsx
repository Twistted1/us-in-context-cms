import React, { useState, useEffect } from 'react';
import { CheckCircle, Copy, ChevronLeft, ChevronRight } from 'lucide-react';

const WeeklySchedule = ({ strategies, completedTasks, toggleTask, activePlatform }) => {
  const [currentWeek, setCurrentWeek] = useState(1);

  const platformStrategy = strategies[activePlatform] || {};
  const totalWeeks = Object.keys(platformStrategy).length || 4; // Default to 4 if strategy is simple
  const weekData = platformStrategy[`week${currentWeek}`] || {};

  // Reset to week 1 whenever the platform changes
  useEffect(() => {
    setCurrentWeek(1);
  }, [activePlatform]);

  const copyToClipboard = (text) => {
    // Handle cases where content is an object
    const textToCopy = typeof text === 'object' && text !== null ? text.content || text.title : text;
    navigator.clipboard.writeText(textToCopy);
    alert('Copied to clipboard!');
  };

  const renderTaskContent = (content) => {
    if (typeof content === 'object' && content !== null) {
      return (
        <div className="space-y-2">
          {content.title && <p className="font-semibold text-gray-800">{content.title}</p>}
          {content.topic && <p className="font-semibold text-gray-800">{content.topic}</p>}
          {content.content && <p className="text-gray-600 text-sm">{content.content}</p>}
          {content.description && <p className="text-gray-600 text-sm">{content.description}</p>}
          {content.engagement && <p className="text-xs text-green-700 font-medium mt-2 p-1 bg-green-50 rounded w-fit">{content.engagement}</p>}
        </div>
      );
    }
    return <p className="text-gray-600 text-sm">{content}</p>;
  };

  return (
    <div className="bg-white p-6 rounded-lg shadow-md border">
      <div className="flex justify-between items-center mb-4">
        <h2 className="text-xl font-bold text-gray-700">
          Weekly Posting Schedule for {activePlatform}
        </h2>
        {/* Week Navigation */}
        <div className="flex items-center space-x-2">
          <button
            onClick={() => setCurrentWeek(w => Math.max(1, w - 1))}
            disabled={currentWeek === 1}
            className="p-2 rounded-md bg-gray-100 hover:bg-gray-200 disabled:opacity-50"
          >
            <ChevronLeft className="w-5 h-5" />
          </button>
          <span className="font-semibold text-gray-700">Week {currentWeek}</span>
          <button
            onClick={() => setCurrentWeek(w => Math.min(totalWeeks, w + 1))}
            disabled={currentWeek === totalWeeks}
            className="p-2 rounded-md bg-gray-100 hover:bg-gray-200 disabled:opacity-50"
          >
            <ChevronRight className="w-5 h-5" />
          </button>
        </div>
      </div>
      
      <div className="space-y-4">
        {Object.keys(weekData).length > 0 ? (
          Object.entries(weekData).map(([dayKey, content]) => {
            const taskId = `${activePlatform}-week${currentWeek}-${dayKey}`;
            const isCompleted = completedTasks.includes(taskId);
            
            return (
              <div key={dayKey} className="flex items-start space-x-3 p-3 bg-gray-50 rounded-lg border">
                <button onClick={() => toggleTask(taskId)} className="mt-1 flex-shrink-0">
                  <CheckCircle className={`w-6 h-6 transition-colors ${isCompleted ? 'text-green-500 fill-current' : 'text-gray-300 hover:text-gray-400'}`} />
                </button>
                <div className="flex-1">
                  <div className="flex justify-between items-center">
                    <p className="font-semibold text-gray-700 capitalize">{dayKey.replace(/([A-Z])/g, ' $1')}</p>
                    <button onClick={() => copyToClipboard(content)} className="text-gray-400 hover:text-blue-500">
                      <Copy className="w-4 h-4" />
                    </button>
                  </div>
                  <div className={`mt-1 ${isCompleted ? 'line-through text-gray-400' : ''}`}>
                    {renderTaskContent(content)}
                  </div>
                </div>
              </div>
            );
          })
        ) : (
          <div className="text-center py-10 border-2 border-dashed rounded-lg">
            <p className="text-gray-400">No content scheduled for this week.</p>
          </div>
        )}
      </div>
    </div>
  );
};

export default WeeklySchedule;