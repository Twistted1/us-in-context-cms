import React from 'react';

const PlatformCard = ({ name, count, total, color, bgColor }) => (
  <div className="bg-white p-4 rounded-lg shadow border">
    <div className="flex items-center justify-between">
      <div>
        <p className="text-sm text-gray-600">{name}</p>
        <p className="text-2xl font-bold text-gray-900">{count}/{total}</p>
      </div>
      <div className={`w-4 h-4 ${bgColor} rounded-sm flex items-center justify-center text-white text-xs font-bold`}>
        {color}
      </div>
    </div>
    <div className="mt-2 w-full bg-gray-200 rounded-full h-2">
      <div 
        className={`${bgColor} h-2 rounded-full transition-all duration-300`}
        style={{ width: `${(count / total) * 100}%` }}
      ></div>
    </div>
  </div>
);

export default PlatformCard;