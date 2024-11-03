// import React from 'react';

// const ProjectOverview = ({ project }) => {
//   return (
//     <div className="bg-white shadow rounded-lg p-6 mb-6">
//       <h2 className="text-2xl font-bold text-gray-800 mb-4">Project: {project.name}</h2>
//       <p className="text-gray-600 mb-4">Description: {project.description || 'No description available.'}</p>
      
//       <div className="grid grid-cols-2 gap-6">
//         <div>
//           <p className="font-semibold text-gray-800">Owner:</p>
//           <p className="text-gray-600">{project.owner || 'Not assigned'}</p>
//         </div>
//         <div>
//           <p className="font-semibold text-gray-800">Budget:</p>
//           <p className="text-gray-600">{project.budget ? `$${project.budget}` : 'Not specified'}</p>
//         </div>
//         <div>
//           <p className="font-semibold text-gray-800">Start Date:</p>
//           <p className="text-gray-600">{project.startDate || 'Not specified'}</p>
//         </div>
//         <div>
//           <p className="font-semibold text-gray-800">End Date:</p>
//           <p className="text-gray-600">{project.endDate || 'Not specified'}</p>
//         </div>
//         <div>
//           <p className="font-semibold text-gray-800">Status:</p>
//           <span className={`inline-block px-3 py-1 text-xs font-medium rounded-full ${
//             project.status === 'In Progress' ? 'bg-yellow-200 text-yellow-800' :
//             project.status === 'Completed' ? 'bg-green-200 text-green-800' : 
//             'bg-red-200 text-red-800'
//           }`}>
//             {project.status || 'No status'}
//           </span>
//         </div>
//       </div>
//     </div>
//   );
// };

// export default ProjectOverview;
