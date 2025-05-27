import React, { useState, useEffect } from 'react';
import { Menu, X, Moon, Sun } from 'lucide-react';
import Logo from '../ui/Logo';
import slugify from "@/utils/slugify";
import { useAuthStore } from "@/store/Auth";
import Link from 'next/link';
import { IconHome, IconMessage, IconWorldQuestion } from "@tabler/icons-react";
import { Home, Users, MessageCircleQuestion, Tag, Bell, Compass} from "lucide-react";

type NavbarProps = {
  darkMode: boolean;
  toggleDarkMode: () => void;
};

const Navbar: React.FC<NavbarProps> = ({ darkMode, toggleDarkMode }) => {
  const [isOpen, setIsOpen] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 10);
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const toggleMenu = () => {
    setIsOpen(!isOpen);
  };
  const { session, logout } = useAuthStore();
  const { user } = useAuthStore();

  return (
    <nav 
      className={`fixed top-0 left-0 w-full z-50 transition-all duration-300 ease-in-out ${
        isScrolled 
          ? 'bg-white dark:bg-gray-900 shadow-md py-3' 
          : 'bg-transparent py-5'
      }`}
    >
      <div className="container mx-auto px-4 md:px-6">
        <div className="flex items-center justify-between">
          <div className="flex items-center ">
            <Logo />
          </div>

          {/* Desktop Navigation */}
          <div className="hidden md:flex items-center space-x-8 ml-12">
            <NavLinks />
            
            {/* Theme Change */}
            <button 
              onClick={toggleDarkMode}
              className="p-2 rounded-full hover:bg-gray-100 dark:hover:bg-gray-800 transition-colors"
              aria-label={darkMode ? "Switch to light mode" : "Switch to dark mode"}
            >
              {darkMode ? <Sun size={20} /> : <Moon size={20} />}
            </button>


            {/* <button className=" hover:bg-blue-700 text-white px-5 py-2 rounded-full transition-colors duration-300">
              Sign In
            </button>
            <button className="bg-blue-600 hover:bg-blue-700 text-white px-5 py-2 rounded-full transition-colors duration-300">
              Sign Up
            </button> */}

            <div>
              {session ? (
                <button
                  onClick={logout}
                  className="bg-blue-600 hover:bg-blue-700 text-white px-5 py-2 rounded-full transition-colors duration-300"
                >
                  Logout
                </button>
              ) : (
                <div className="flex space-x-3">
                  <Link
                    href="/login"
                    className="bg-blue-600 hover:bg-blue-700 text-white px-5 py-2 rounded-full transition-colors duration-300"
                  >
                    Login
                  </Link>
                  <Link
                    href="/register"
                    className="bg-blue-600 hover:bg-blue-700 text-white px-5 py-2 rounded-full transition-colors duration-300"
                  >
                    Signup
                  </Link>
                </div>
              )}
            </div>
          </div>

          {/* Mobile Navigation Toggle */}
          <div className="flex items-center md:hidden ">

            {/* Mobile quick nav icons */}
            {[
              { href: '/', icon: <IconHome size={22} />, label: 'Home' },
              { href: '/questions', icon: <IconWorldQuestion size={22} />, label: 'Questions' },
              ...(user ? [{ href: `/users/${user.$id}/${slugify(user.name)}`, icon: <IconMessage size={22} />, label: 'Profile' }] : [])
            ].map(link => (
              <Link
                key={link.href}
                href={link.href}
                className="p-2 rounded-full hover:bg-blue-100 dark:hover:bg-blue-900 transition-colors"
                aria-label={link.label}
                onClick={() => setIsOpen(false)}
              >
                {link.icon}
              </Link>
            ))}

            {/* Theme Change */}
            <button 
              onClick={toggleDarkMode}
              className="p-2 rounded-full hover:bg-gray-100 dark:hover:bg-gray-800 transition-colors"
              aria-label={darkMode ? "Switch to light mode" : "Switch to dark mode"}
            >
              {darkMode ? <Sun size={20} /> : <Moon size={20} />}
            </button>

            <button 
              onClick={toggleMenu} 
              className="text-gray-700 dark:text-gray-200"
            >
              {isOpen ? <X size={24} /> : <Menu size={24} />}
            </button>
          </div>
        </div>
      </div>

      {/* Mobile Navigation Menu */}
      <div 
        className={`md:hidden bg-white dark:bg-gray-900 transition-all duration-300 ease-in-out ${
          isOpen ? 'max-h-[calc(100vh-4rem)] overflow-y-auto' : 'max-h-0 overflow-hidden'
        }`}
      >
        <div className="container mx-auto px-4 py-4">
          <div className="flex flex-col space-y-4">
            <NavLinks mobile={true} closeMenu={() => setIsOpen(false)} />

            <div>
            {session ? (
            <button
              onClick={logout}
              className="bg-blue-600 hover:bg-blue-700 text-white px-5 py-2 rounded-full transition-colors duration-300"
            >
              Logout
            </button>
          ) : (
            <>
              <div className="flex space-x-3">
                  <Link
                    href="/login"
                    className="bg-blue-600 hover:bg-blue-700 text-white px-5 py-2 rounded-full transition-colors duration-300"
                  >
                    Login
                  </Link>
                  <Link
                    href="/register"
                    className="bg-blue-600 hover:bg-blue-700 text-white px-5 py-2 rounded-full transition-colors duration-300"
                  >
                    Signup
                  </Link>
                </div>
            </>
          )}
            </div>


          </div>
        </div>
      </div>
    </nav>
  );
};

type NavLinksProps = {
  mobile?: boolean;
  closeMenu?: () => void;
};

const NavLinks: React.FC<NavLinksProps> = ({ mobile = false, closeMenu }) => {
  const { user } = useAuthStore();

  const links = [
    { name: 'Home', href: '#', icon: IconHome },    
    { name: 'Questions', href: '/questions', icon: IconWorldQuestion },
    ...(user ? [{ name: 'Profile', href: `/users/${user.$id}/${slugify(user.name)}` , icon: IconMessage}] : [])
  ];

  const sidebarItems = [
    { id: "Questions", label: "Questions", icon: MessageCircleQuestion, href: "/questions" },
    { id: "Tags", label: "Tags", icon: Tag, href: "/" },
    { id: "Events", label: "Events", icon: Bell, href: "/events" },
    { id: "Clubs", label: "Clubs", icon: Users, href: "/club" },
    { id: "Campus Navigation", label: "Remap", icon: Compass, href: "https://re-maps.vercel.app/" },
  ];

  const [activeItem, setActiveItem] = useState("home");

  if (mobile) {
    // Show sidebar items as icons in mobile menu
    return (
      <div className="flex flex-col flex-wrap gap-2 justify-center">
        {sidebarItems.map((item) => (
          <Link
                key={item.id}
                href={item.href}
                className={`flex items-center p-2 rounded-lg transition-colors ${
                  activeItem === item.id
                    ? "bg-blue-50 dark:bg-blue-900/20 text-blue-600 dark:text-blue-400"
                    : "text-gray-700 dark:text-gray-300 hover:bg-gray-100 dark:hover:bg-gray-800"
                }`}
                onClick={() => setActiveItem(item.id)}
              >
                <item.icon size={20} />
                <span className={`ml-3`}>{item.label}</span>
              </Link>
        ))}
      </div>

    );
  }

  // Desktop: show text links
  return (
    <>
      {links.map((link) => (
        <Link
          key={link.name}
          href={link.href}
          className="text-gray-700 dark:text-gray-200 hover:text-blue-600 dark:hover:text-blue-400 transition-colors"
        >
          {link.name}
        </Link>
      ))}
    </>
  );
};

export default Navbar;