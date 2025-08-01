import React from 'react';
import { Download, Calendar, Zap, Globe, FileText } from 'lucide-react';

const QuickActions = () => {
  return (
    <div className="bg-white p-6 rounded-lg shadow-md border">
      <h2 className="text-xl font-bold text-gray-700 mb-4">
        Quick Actions
      </h2>
      <div className="space-y-3">
        <button 
          className="w-full p-3 bg-blue-50 hover:bg-blue-100 rounded-lg text-left flex items-center space-x-3"
        >
          <Download className="w-5 h-5 text-blue-600" />
          <span className="font-medium text-blue-900">Export Complete Content Calendar</span>
        </button>
        <button 
          className="w-full p-3 bg-green-50 hover:bg-green-100 rounded-lg text-left flex items-center space-x-3"
        >
          <Calendar className="w-5 h-5 text-green-600" />
          <span className="font-medium text-green-900">Enable Calendar Sync</span>
        </button>
        <button 
          className="w-full p-3 bg-purple-50 hover:bg-purple-100 rounded-lg text-left flex items-center space-x-3"
        >
          <Zap className="w-5 h-5 text-purple-600" />
          <span className="font-medium text-purple-900">Claude AI Content Assist</span>
        </button>
      </div>
    </div>
  );
};

export default QuickActions;