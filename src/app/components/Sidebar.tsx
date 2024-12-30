'use client'
import React, { useState } from 'react';
import TopContributers from './TopContributers';

const Sidebar: React.FC = () => {
  const [isCollapsed, setIsCollapsed] = useState(false);

  const toggleSidebar = () => {
    setIsCollapsed(!isCollapsed);
    console.log('clicked');
  };

  return (
    <div
      className={`h-screen bg-gray-800 text-white transition-all duration-300 overflow-hidden flex flex-col fixed ${
        isCollapsed ? 'w-20' : 'w-64'
      }`}
    >
      <button
        className="self-end m-2 w-8 h-8 bg-gray-700 text-white rounded-full flex items-center justify-center hover:bg-slate-900"
        onClick={toggleSidebar}
      >
        {isCollapsed ? '>' : '<'}
      </button>
      <div className="flex-grow p-4">
        {!isCollapsed && (
          <ul className="space-y-4">
            <li className="hover:text-gray-400">Home</li>
            <li className="hover:text-gray-400">About</li>
            <li className="hover:text-gray-400">Services</li>
            <li className="hover:text-gray-400">Contact</li>
          </ul>
        )}
      </div>
    </div>
  );
};

export default Sidebar;