// import React, { useState } from 'react';

// const TaskForm = ({ task = {}, onSubmit, onClose }) => {
//   const [title, setTitle] = useState(task.title || '');
//   const [assignedTo, setAssignedTo] = useState(task.assignedTo || '');
//   const [status, setStatus] = useState(task.status || 'Not Started');
//   const [priority, setPriority] = useState(task.priority || 'Medium');

//   const handleSubmit = (e) => {
//     e.preventDefault();
//     onSubmit({
//       id: task.id || Date.now(), // Unique ID for new tasks
//       title,
//       assignedTo,
//       status,
//       priority,
//     });
//     onClose();
//   };

//   return (
//     <form onSubmit={handleSubmit} className="bg-white p-6 rounded shadow-lg">
//       <h2 className="text-xl font-bold mb-4">{task.id ? 'Edit Task' : 'Add New Task'}</h2>
//       <div className="mb-4">
//         <label className="block text-gray-700">Task Title</label>
//         <input
//           type="text"
//           value={title}
//           onChange={(e) => setTitle(e.target.value)}
//           className="w-full p-2 border rounded"
//           required
//         />
//       </div>
//       <div className="mb-4">
//         <label className="block text-gray-700">Assigned To</label>
//         <input
//           type="text"
//           value={assignedTo}
//           onChange={(e) => setAssignedTo(e.target.value)}
//           className="w-full p-2 border rounded"
//         />
//       </div>
//       <div className="mb-4">
//         <label className="block text-gray-700">Status</label>
//         <select
//           value={status}
//           onChange={(e) => setStatus(e.target.value)}
//           className="w-full p-2 border rounded"
//         >
//           <option value="Not Started">Not Started</option>
//           <option value="In Progress">In Progress</option>
//           <option value="Completed">Completed</option>
//         </select>
//       </div>
//       <div className="mb-4">
//         <label className="block text-gray-700">Priority</label>
//         <select
//           value={priority}
//           onChange={(e) => setPriority(e.target.value)}
//           className="w-full p-2 border rounded"
//         >
//           <option value="High">High</option>
//           <option value="Medium">Medium</option>
//           <option value="Low">Low</option>
//         </select>
//       </div>
//       <div className="flex justify-end gap-4">
//         <button type="button" onClick={onClose} className="px-4 py-2 bg-gray-300 rounded">Cancel</button>
//         <button type="submit" className="px-4 py-2 bg-blue-600 text-white rounded">
//           {task.id ? 'Update Task' : 'Add Task'}
//         </button>
//       </div>
//     </form>
//   );
// };

// export default TaskForm;
