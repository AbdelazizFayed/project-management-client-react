// MasterLayout.js
import React from 'react';
import Sidebar from './Sidebar';
import Navbar from './Navbar';

const MasterLayout = ({ children }) => {
  return (
    <div className="flex h-screen w-full">
      <Sidebar />
      <div className="flex-1 flex flex-col h-full">
        <Navbar />
        <main className="flex-1 p-6 bg-gray-100">{children}</main>
      </div>
    </div>
  );
};

export default MasterLayout;
