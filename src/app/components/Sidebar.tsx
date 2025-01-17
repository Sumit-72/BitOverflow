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
    <div className="sidebar " >
      <ul className="sidebar-items">
        <li className="sidebar-item"><SpaceDashboardIcon fontSize='medium'/>   Dashboard</li>
        <li className="sidebar-item"><QuestionIcon fontSize='medium'/>   My Queries</li>
        <li className="sidebar-item"><TagIcon fontSize='medium'/>   Tags</li>
        <li className="sidebar-item"><NotificationsIcon fontSize='medium'/>   Notifications</li>
        <li className="sidebar-item"><Diversity3Icon fontSize='medium'/>   Clubs</li><br></br>
        <li className="sidebar-item"><FeedbackIcon   fontSize='medium'/>   Feedback</li>
      </ul>
    </div>
  );
};

export default Sidebar;
