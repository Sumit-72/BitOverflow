// import React from 'react';
// import SpaceDashboardIcon from '@mui/icons-material/SpaceDashboard';
// import TagIcon from '@mui/icons-material/LocalOffer';
// import QuestionIcon from '@mui/icons-material/Quiz';
// import NotificationsIcon from '@mui/icons-material/Notifications';
// import Diversity3Icon from '@mui/icons-material/Diversity3';
// import FeedbackIcon from '@mui/icons-material/Feedback';
// import ExploreIcon from '@mui/icons-material/Explore';
// import Link from 'next/link';

// const Sidebar = () => {
//   return (
//     <div
//       className={"sidebar fixed top-[4rem] left-0 h-[calc(100vh-4rem)] bg-slate-400 shadow-lg transition-transform md:translate-x-0 md:w-[16%] sm:w-[8%]"}
//     >
//       <ul className="relative sidebar-items space-y-4 p-4 text-white">
//         <li className="sidebar-item flex items-center gap-2 pt-4">
//           <Link href="/" className="flex items-center gap-2">
//             <SpaceDashboardIcon fontSize="medium" />
//             <span className="hidden md:inline">Dashboard</span>
//           </Link>
//         </li>
//         <li className="sidebar-item flex items-center gap-2 pt-4">
//           <Link href="/questions" className="flex items-center gap-2">
//             <QuestionIcon fontSize="medium" />
//             <span className="hidden md:inline">My Queries</span>
//           </Link>
//         </li>
//         <li className="sidebar-item flex items-center gap-2 pt-4">
//           <Link href="/" className="flex items-center gap-2">
//             <TagIcon fontSize="medium" />
//             <span className="hidden md:inline">Tags</span>
//           </Link>
//         </li>
//         <li className="sidebar-item flex items-center gap-2 pt-4">
//           <Link href="/events" className="flex items-center gap-2">
//             <NotificationsIcon fontSize="medium" />
//             <span className="hidden md:inline">Events</span>
//           </Link>
//         </li>
//         <li className="sidebar-item flex items-center gap-2 pt-4">
//           <Link href="/club" className="flex items-center gap-2">
//             <Diversity3Icon fontSize="medium" />
//             <span className="hidden md:inline">Clubs</span>
//           </Link>
//         </li>
//         <li className="sidebar-item flex items-center gap-2 pt-4">
//           <Link href="https://eloquent-semifreddo-c8e593.netlify.app" className="flex items-center gap-2">
//             <ExploreIcon fontSize="medium" />
//             <span className="hidden md:inline">Remaps</span>
//           </Link>
//         </li>
//         <br />
//         <li className="sidebar-item flex items-center gap-2 pt-4">
//           <Link href="/feedback" className="flex items-center gap-2">
//             <FeedbackIcon fontSize="medium" />
//             <span className="hidden md:inline">Feedback</span>
//           </Link>
//         </li>
//       </ul>
//     </div>

//   );
// };

// export default Sidebar;
"use client";
import React, { useState } from "react";
import { ChevronLeft, ChevronRight, Home, Layers, Users, Settings, HelpCircle } from "lucide-react";

type SidebarProps = {
  isSidebarOpen: boolean;
  toggleSidebar: () => void;
};

const Sidebar: React.FC<SidebarProps> = ({ isSidebarOpen, toggleSidebar }) => {
  const [activeItem, setActiveItem] = useState("home");

  const sidebarItems = [
    { id: "home", label: "Home", icon: Home },
    { id: "features", label: "Features", icon: Layers },
    { id: "team", label: "Our Team", icon: Users },
    { id: "settings", label: "Settings", icon: Settings },
    { id: "help", label: "Help", icon: HelpCircle },
  ];

  return (
    <div className="relative">
      <aside
        className={`fixed top-0 left-0 h-[calc(100vh-4rem)] mt-16 bg-white dark:bg-gray-900 shadow-lg transform transition-all duration-300 ease-in-out z-40 ${
          isSidebarOpen ? "translate-x-0" : "-translate-x-full md:translate-x-0"
        } ${isSidebarOpen ? "w-64" : "md:w-20"}`}
      >
        <div className="px-4 py-6">
          <div className="flex flex-col space-y-4">
            {sidebarItems.map((item) => (
              <button
                key={item.id}
                onClick={() => setActiveItem(item.id)}
                className={`flex items-center p-3 rounded-lg transition-colors ${
                  activeItem === item.id
                    ? "bg-blue-50 dark:bg-blue-900/20 text-blue-600 dark:text-blue-400"
                    : "text-gray-700 dark:text-gray-300 hover:bg-gray-100 dark:hover:bg-gray-800"
                }`}
              >
                <item.icon size={20} />
                <span className={`ml-3 ${!isSidebarOpen && "md:hidden"}`}>{item.label}</span>
              </button>
            ))}
          </div>
        </div>
      </aside>

      {/* Toggle Button */}
      <button
        onClick={toggleSidebar}
        className="hidden md:flex fixed bottom-8 left-0 z-50 bg-white dark:bg-gray-900 shadow-md p-2 rounded-r-lg transform transition-all duration-300 ease-in-out"
        style={{
          left: isSidebarOpen ? "15.5rem" : "4.5rem",
        }}
      >
        {isSidebarOpen ? <ChevronLeft size={20} /> : <ChevronRight size={20} />}
      </button>
    </div>
  );
};

export default Sidebar;