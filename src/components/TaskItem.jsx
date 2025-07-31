// src/components/TaskItem.jsx

import React from 'react';
import PropTypes from 'prop-types';
import { CheckCircle, Copy, Trash2 } from 'lucide-react';

const TaskItem = ({ task, onToggleComplete, onCopy, onDelete }) => {
  return (
    <div className="bg-white dark:bg-gray-800 rounded shadow p-4 flex justify-between items-start gap-4">
      <div className="flex-1">
        <h3 className={`font-semibold text-lg ${task.completed ? 'line-through text-gray-500' : 'text-gray-900 dark:text-white'}`}>
          {task.title}
        </h3>
        <p className="text-gray-600 dark:text-gray-300">{task.description}</p>
        <p className="text-sm text-gray-400 mt-1">Platform: {task.platform} | Date: {task.date}</p>
      </div>

      <div className="flex gap-2 items-center mt-2 sm:mt-0">
        <button
          onClick={() => onToggleComplete(task.id)}
          className={`p-2 rounded-full ${task.completed ? 'bg-green-500' : 'bg-gray-300 dark:bg-gray-600'}`}
          title="Mark as Complete"
        >
          <CheckCircle className="text-white w-5 h-5" />
        </button>

        <button
          onClick={() => onCopy(task)}
          className="p-2 rounded-full bg-blue-500 hover:bg-blue-600"
          title="Copy Task"
        >
          <Copy className="text-white w-5 h-5" />
        </button>

        <button
          onClick={() => onDelete(task.id)}
          className="p-2 rounded-full bg-red-500 hover:bg-red-600"
          title="Delete Task"
        >
          <Trash2 className="text-white w-5 h-5" />
        </button>
      </div>
    </div>
  );
};

TaskItem.propTypes = {
  task: PropTypes.shape({
    id: PropTypes.string.isRequired,
    title: PropTypes.string.isRequired,
    description: PropTypes.string,
    platform: PropTypes.string,
    date: PropTypes.string,
    completed: PropTypes.bool,
  }).isRequired,
  onToggleComplete: PropTypes.func.isRequired,
  onCopy: PropTypes.func.isRequired,
  onDelete: PropTypes.func.isRequired,
};

export default TaskItem;
