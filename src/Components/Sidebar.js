import React from 'react';
import { Link } from 'react-router-dom';

const Sidebar = () => {
  return (
    <aside className="w-64 bg-white border-r border-gray-200 h-screen p-4">
      <h1 className="text-xl font-bold text-blue-600 mb-8">Project Management</h1>
      <nav className="space-y-4">
        <Link to="/" className="block text-blue-600 font-semibold">Projects</Link>
        <Link to="/work-items" className="block text-gray-600 font-medium">My Work Items</Link>
        <Link to="/pull-requests" className="block text-gray-600 font-medium">My Pull Requests</Link>
      </nav>
    </aside>
  );
};

export default Sidebar;
