import React from 'react';

// This is now a dynamic component that accepts "props"
const SummaryCard = ({ IconComponent, title, completed, total, colorClass = 'indigo' }) => {
  const progress = total > 0 ? (completed / total) * 100 : 0;

  // Define color classes for Tailwind CSS
  const colorVariants = {
    indigo: {
      bg: 'bg-indigo-100',
      text: 'text-indigo-600',
      progress: 'bg-indigo-500',
    },
    purple: {
      bg: 'bg-purple-100',
      text: 'text-purple-600',
      progress: 'bg-purple-500',
    },
    sky: {
      bg: 'bg-sky-100',
      text: 'text-sky-600',
      progress: 'bg-sky-500',
    },
    pink: {
      bg: 'bg-pink-100',
      text: 'text-pink-600',
      progress: 'bg-pink-500',
    },
    black: {
      bg: 'bg-gray-200',
      text: 'text-gray-800',
      progress: 'bg-black',
    }
  };

  const colors = colorVariants[colorClass] || colorVariants.indigo;

  return (
    <div className="bg-white p-4 rounded-lg shadow-md border flex flex-col justify-between">
      <div className="flex items-start justify-between">
        <div className={`p-3 rounded-lg ${colors.bg}`}>
          <IconComponent className={`w-6 h-6 ${colors.text}`} />
        </div>
        <div className="text-right">
          <p className="text-sm text-gray-500 font-medium">{title}</p>
          <p className="text-3xl font-bold text-gray-800">{completed}</p>
        </div>
      </div>
      <div className="mt-4">
        <div className="w-full bg-gray-200 rounded-full h-2">
          <div
            className={`h-2 rounded-full transition-all duration-500 ${colors.progress}`}
            style={{ width: `${progress}%` }}
          ></div>
        </div>
      </div>
    </div>
  );
};

export default SummaryCard;