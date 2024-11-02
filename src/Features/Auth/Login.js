// Login.js
import React, { useState, useContext } from 'react';
import AuthContext from '../../Context/AuthContext';
import { useNavigate } from 'react-router-dom'; // Import useNavigate
import { login as loginService } from '../../Services/AuthService';

const Login = () => {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [error, setError] = useState(null); // Local error state for this component
  const { login } = useContext(AuthContext); // Access login from AuthContext
  const navigate = useNavigate(); // Initialize navigate

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      // Call login service and destructure response
      const { token, refreshToken, user } = await loginService(email, password);
      // Pass user, token, and refreshToken to the context's login method
      login(user, token, refreshToken); 
      console.log('Login successful');
      setError(null); // Clear any existing error
     // navigate('/ProjectList');
    } catch (error) {
      setError("Login failed. Please check your credentials."); // Set error for UI display
      console.error(error);
    }
  };

  return (
    <div className="h-screen flex items-center justify-center bg-gradient-to-r from-blue-500 to-purple-500">
      {/* Left Side with Project Name and Description */}
      <div className="hidden md:flex flex-col items-start justify-center text-white p-10 space-y-6 w-1/2">
        <h1 className="text-4xl font-bold">Project Management App</h1>
        <p className="text-lg">
          Streamline your tasks, collaborate with team members, and manage projects efficiently.
        </p>
      </div>

      {/* Login Form */}
      <div className="flex items-center justify-center w-full md:w-1/2 p-6">
        <form onSubmit={handleSubmit} className="bg-white p-8 rounded-lg shadow-lg w-full max-w-md">
          <h2 className="text-2xl font-bold text-gray-800 mb-4 text-center">Login</h2>
          {error && <p className="text-red-500 text-center mb-4">{error}</p>}
          <div className="mb-6">
            <label className="block text-gray-700 font-semibold mb-2">Email</label>
            <input
              type="email"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              className="w-full p-3 border rounded-lg focus:outline-none focus:border-blue-500"
              required
            />
          </div>
          <div className="mb-6">
            <label className="block text-gray-700 font-semibold mb-2">Password</label>
            <input
              type="password"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
              className="w-full p-3 border rounded-lg focus:outline-none focus:border-blue-500"
              required
            />
          </div>
          <button type="submit" className="bg-blue-600 hover:bg-blue-700 text-white py-3 rounded-lg w-full font-semibold transition duration-300">
            Login
          </button>
        </form>
      </div>
    </div>
  );
};

export default Login;
