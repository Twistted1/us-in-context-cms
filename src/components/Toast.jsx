import React from 'react';

const Toast = ({ message, isVisible, onClose }) => {
  if (!isVisible) return null;
  
  return (
    <div className="fixed bottom-4 right-4 bg-gray-800 text-white px-4 py-2 rounded-lg shadow-lg z-50 flex items-center space-x-2">
      <span>{message}</span>
      <button onClick={onClose} className="text-white hover:text-gray-300">
        &times;
      </button>
    </div>
  );
};

export default Toast;