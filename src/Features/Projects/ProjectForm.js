// import React, { useState, useEffect } from 'react';

// const ProjectForm = ({ project = {}, onSubmit, onClose }) => {
//   const [name, setName] = useState(project.name || '');
//   const [description, setDescription] = useState(project.description || '');
//   const [owner, setOwner] = useState(project.owner || '');
//   const [budget, setBudget] = useState(project.budget || '');
//   const [startDate, setStartDate] = useState(project.startDate || '');
//   const [endDate, setEndDate] = useState(project.endDate || '');
//   const [status, setStatus] = useState(project.status || 'Not Started');

//   const handleSubmit = (e) => {
//     e.preventDefault();
//     onSubmit({
//       id: project.id || Date.now(), // Generate a unique ID for new projects
//       name,
//       description,
//       owner,
//       budget,
//       startDate,
//       endDate,
//       status,
//     });
//     onClose(); // Close the form/modal after submission
//   };

//   return (
//     <form onSubmit={handleSubmit} className="bg-white p-6 rounded shadow-lg">
//       <h2 className="text-xl font-bold mb-4">{project.id ? 'Edit Project' : 'Add New Project'}</h2>
//       <div className="mb-4">
//         <label className="block text-gray-700">Project Name</label>
//         <input
//           type="text"
//           value={name}
//           onChange={(e) => setName(e.target.value)}
//           className="w-full p-2 border rounded"
//           required
//         />
//       </div>
//       <div className="mb-4">
//         <label className="block text-gray-700">Description</label>
//         <textarea
//           value={description}
//           onChange={(e) => setDescription(e.target.value)}
//           className="w-full p-2 border rounded"
//           required
//         ></textarea>
//       </div>
//       <div className="mb-4">
//         <label className="block text-gray-700">Owner</label>
//         <input
//           type="text"
//           value={owner}
//           onChange={(e) => setOwner(e.target.value)}
//           className="w-full p-2 border rounded"
//         />
//       </div>
//       <div className="mb-4">
//         <label className="block text-gray-700">Budget</label>
//         <input
//           type="number"
//           value={budget}
//           onChange={(e) => setBudget(e.target.value)}
//           className="w-full p-2 border rounded"
//         />
//       </div>
//       <div className="flex gap-4 mb-4">
//         <div className="w-1/2">
//           <label className="block text-gray-700">Start Date</label>
//           <input
//             type="date"
//             value={startDate}
//             onChange={(e) => setStartDate(e.target.value)}
//             className="w-full p-2 border rounded"
//           />
//         </div>
//         <div className="w-1/2">
//           <label className="block text-gray-700">End Date</label>
//           <input
//             type="date"
//             value={endDate}
//             onChange={(e) => setEndDate(e.target.value)}
//             className="w-full p-2 border rounded"
//           />
//         </div>
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
//       <div className="flex justify-end gap-4">
//         <button type="button" onClick={onClose} className="px-4 py-2 bg-gray-300 rounded">Cancel</button>
//         <button type="submit" className="px-4 py-2 bg-blue-600 text-white rounded">
//           {project.id ? 'Update Project' : 'Add Project'}
//         </button>
//       </div>
//     </form>
//   );
// };

// export default ProjectForm;
