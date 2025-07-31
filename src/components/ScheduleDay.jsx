// src/components/ScheduleDay.jsx

import React from 'react';
import PropTypes from 'prop-types';
import TaskItem from './TaskItem';

const ScheduleDay = ({
  day,
  date,
  tasks,
  handleToggleTask,
  handleSelectTask,
  selectedTasks,
  handleCopyTask,
  handleDeleteTask,
}) => {
  return (
    <div className="bg-white dark:bg-gray-800 rounded-lg shadow p-4 space-y-4 min-w-[280px]">
      <h2 className="text-lg font-semibold text-gray-800 dark:text-white">
        {day} — {date}
      </h2>

      <div className="space-y-2">
        {tasks.length === 0 ? (
          <p className="text-gray-500 dark:text-gray-400 text-sm">No tasks scheduled.</p>
        ) : (
          tasks.map((task) => (
            <TaskItem
              key={task.id}
              task={task}
              onToggleComplete={handleToggleTask}
              onCopy={handleCopyTask}
              onDelete={handleDeleteTask}
              isSelected={selectedTasks.includes(task.id)}
              onSelect={handleSelectTask}
              date={date}
            />
          ))
        )}
      </div>
    </div>
  );
};

ScheduleDay.propTypes = {
  day: PropTypes.string.isRequired,
  date: PropTypes.string.isRequired,
  tasks: PropTypes.arrayOf(PropTypes.object).isRequired,
  handleToggleTask: PropTypes.func.isRequired,
  handleSelectTask: PropTypes.func.isRequired,
  selectedTasks: PropTypes.arrayOf(PropTypes.string).isRequired,
  handleCopyTask: PropTypes.func.isRequired,
  handleDeleteTask: PropTypes.func.isRequired,
};

export default ScheduleDay;
