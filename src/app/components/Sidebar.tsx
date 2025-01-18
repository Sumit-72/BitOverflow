// components/Sidebar.js
import React from 'react';
import Particles from "@/components/magicui/particles"; // Import Particles
import './Sidebar.css'; // Import CSS for Sidebar styling
import SpaceDashboardIcon from '@mui/icons-material/SpaceDashboard';
import TagIcon from '@mui/icons-material/LocalOffer';
import QuestionIcon from '@mui/icons-material/Quiz';
import NotificationsIcon from '@mui/icons-material/Notifications';
import Diversity3Icon from '@mui/icons-material/Diversity3';
import FeedbackIcon from '@mui/icons-material/Feedback';

const Sidebar = () => {
  
  return (
    <div
    className={`sidebar fixed top-[4rem] left-0 h-[calc(100vh-4rem)] bg-slate-400 shadow-lg transition-transform"
    } md:translate-x-0 md:w-[16%] w-[75%] z-40`}
  >
    <ul className="sidebar-items space-y-4 p-4 text-white">
      <li className="sidebar-item flex items-center gap-2">
        <SpaceDashboardIcon fontSize="medium" />
        <span className="hidden md:inline">Dashboard</span>
      </li>
      <li className="sidebar-item flex items-center gap-2">
        <QuestionIcon fontSize="medium" />
        <span className="hidden md:inline">My Queries</span>
      </li>
      <li className="sidebar-item flex items-center gap-2">
        <TagIcon fontSize="medium" />
        <span className="hidden md:inline">Tags</span>
      </li>
      <li className="sidebar-item flex items-center gap-2">
        <NotificationsIcon fontSize="medium" />
        <span className="hidden md:inline">Notifications</span>
      </li>
      <li className="sidebar-item flex items-center gap-2">
        <Diversity3Icon fontSize="medium" />
        <span className="hidden md:inline">Clubs</span>
      </li>
      <br />
      <li className="sidebar-item flex items-center gap-2">
        <FeedbackIcon fontSize="medium" />
        <span className="hidden md:inline">Feedback</span>
      </li>
    </ul>
  </div>
  

  );
};

export default Sidebar;
