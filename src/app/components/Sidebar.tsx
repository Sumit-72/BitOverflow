// components/Sidebar.js
import React from 'react';
import Particles from "@/components/magicui/particles"; // Import Particles
import './Sidebar.css'; // Import CSS for Sidebar styling

const Sidebar = () => {
  return (
    <div className="sidebar rounded-lg bg-white/10 p-6 shadow-lg" >
      {/* <Particles
        className="particles-background"
        quantity={500}
        ease={100}
        color="#ffffff"
        refresh
      /> */}
      <h2>Menu</h2>
      <ul className="sidebar-items">
        <li className="sidebar-item">Dashboard</li>
        <li className="sidebar-item">Profile</li>
        <li className="sidebar-item">Settings</li>
        <li className="sidebar-item">Help</li>
      </ul>
    </div>
  );
};

export default Sidebar;
