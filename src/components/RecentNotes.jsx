import React from 'react';

const RecentNotes = () => {
  return (
    <div className="bg-white p-6 rounded-lg shadow-md border">
      <h2 className="text-xl font-bold text-gray-700 mb-4">
        Recent Notes
      </h2>
      <div className="space-y-4">
        {/* Static Note 1 from PDF */}
        <div className="border-l-4 border-purple-500 pl-4 py-2">
          <div className="flex justify-between items-center">
            <p className="font-semibold text-gray-800">Tik Tok Algorithm Insights</p>
            <span className="text-xs font-mono text-gray-400">1/15/2025</span>
          </div>
          <p className="text-sm text-gray-500 mt-1">TODAY</p>
        </div>

        {/* Static Note 2 from PDF */}
        <div className="border-l-4 border-gray-300 pl-4 py-2">
           <p className="font-semibold text-gray-800">Research new content ideas</p>
           <p className="text-sm text-gray-500 mt-1">TOMORROW</p>
        </div>
      </div>
    </div>
  );
};

export default RecentNotes;