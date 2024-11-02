// src/Components/UserProfile.js
import React, { useContext } from 'react';
import AuthContext from '../Context/AuthContext';

const UserProfile = () => {
  const { user } = useContext(AuthContext);

  if (!user) return null;

  return (
    <div className="flex items-center space-x-4 p-4 bg-gray-100 rounded-lg shadow-lg">
      {/* Static Profile Icon */}
      <div className="w-10 h-10 rounded-full bg-gray-300 flex items-center justify-center">
        <svg
          className="w-6 h-6 text-gray-500"
          fill="currentColor"
          viewBox="0 0 24 24"
          xmlns="http://www.w3.org/2000/svg"
        >
          <path d="M12 12c2.7 0 4.8-2.1 4.8-4.8S14.7 2.4 12 2.4 7.2 4.5 7.2 7.2 9.3 12 12 12zM12 14.4c-3.1 0-9.6 1.6-9.6 4.8v2.4h19.2v-2.4c0-3.2-6.5-4.8-9.6-4.8z"></path>
        </svg>
      </div>

      {/* User Information */}
      <div>
        <h2 className="font-semibold text-gray-800">{user.fullName}</h2>
        <p className="text-gray-600 text-sm">{user.email}</p>
      </div>
    </div>
  );
};

export default UserProfile;
