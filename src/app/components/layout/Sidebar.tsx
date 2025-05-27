"use client";
import React, { useState } from "react";
import { ChevronLeft, ChevronRight, Home, Layers, Users, Settings, HelpCircle, 
        MessageCircleQuestion, Tag, Bell, Compass} from "lucide-react";
import Link from "next/link";

type SidebarProps = {
  isSidebarOpen: boolean;
  toggleSidebar: () => void;
};

const Sidebar: React.FC<SidebarProps> = ({ isSidebarOpen, toggleSidebar }) => {
  const [activeItem, setActiveItem] = useState("home");

  const sidebarItems = [
    { id: "home", label: "Home", icon: Home, href: "/" },
    { id: "Questions", label: "Questions", icon: MessageCircleQuestion, href: "/questions" },
    { id: "Tags", label: "Tags", icon: Tag, href: "/" },
    { id: "Events", label: "Events", icon: Bell, href: "/events" },
    { id: "Clubs", label: "Clubs", icon: Users, href: "/club" },
    { id: "Campus Navigation", label: "Remap", icon: Compass, href: "https://re-maps.vercel.app/" },
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
              <Link
                key={item.id}
                href={item.href}
                className={`flex items-center p-3 rounded-lg transition-colors ${
                  activeItem === item.id
                    ? "bg-blue-50 dark:bg-blue-900/20 text-blue-600 dark:text-blue-400"
                    : "text-gray-700 dark:text-gray-300 hover:bg-gray-100 dark:hover:bg-gray-800"
                }`}
                onClick={() => setActiveItem(item.id)}
              >
                <item.icon size={20} />
                <span className={`ml-3 ${!isSidebarOpen && "md:hidden"}`}>{item.label}</span>
              </Link>
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