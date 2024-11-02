// import React, { useState } from 'react';
// import { useAuth } from '../../Context/AuthContext';

// const Register = () => {
//   const [email, setEmail] = useState('');
//   const [password, setPassword] = useState('');
//   const { register, error } = useAuth();

//   const handleSubmit = async (e) => {
//     e.preventDefault();
//     await register(email, password);
//   };

//   return (
//     <div className="flex justify-center items-center h-screen">
//       <form onSubmit={handleSubmit} className="bg-white p-6 rounded shadow-lg w-full max-w-md">
//         <h2 className="text-2xl font-bold mb-4">Register</h2>
//         {error && <p className="text-red-500">{error}</p>}
//         <div className="mb-4">
//           <label className="block text-gray-700">Email</label>
//           <input
//             type="email"
//             value={email}
//             onChange={(e) => setEmail(e.target.value)}
//             className="w-full p-2 border rounded"
//             required
//           />
//         </div>
//         <div className="mb-4">
//           <label className="block text-gray-700">Password</label>
//           <input
//             type="password"
//             value={password}
//             onChange={(e) => setPassword(e.target.value)}
//             className="w-full p-2 border rounded"
//             required
//           />
//         </div>
//         <button type="submit" className="bg-green-600 text-white px-4 py-2 rounded w-full">
//           Register
//         </button>
//       </form>
//     </div>
//   );
// };

// export default Register;
