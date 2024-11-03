// src/Features/Tasks/TaskDetail.js

import React from 'react';
const TaskDetail = () => {
  const handleButtonClick = () => {
    alert("Button clicked!");
  };
  debugger;

  return (
    <div style={{ padding: '20px' }}>
      <h1>Task Detail</h1>
      <p>This is the TaskDetail component. Use this to show details about a specific task.</p>
      <button onClick={handleButtonClick} style={{ padding: '10px', marginTop: '10px' }}>
        Click Me
      </button>
    </div>
  );
};

export default TaskDetail;
