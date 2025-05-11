import React, { useState, useEffect } from 'react';
import { Menu, X, Moon, Sun } from 'lucide-react';
import Logo from '../ui/Logo';
import slugify from "@/utils/slugify";
import { useAuthStore } from "@/store/Auth";
import Link from 'next/link';


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
          <div className="flex items-center">
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
          <div className="flex items-center md:hidden space-x-3">

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
    { name: 'Home', href: '#' },    
    { name: 'Questions', href: '/questions' },
    { name: 'About Us', href: '#about' },
    ...(user ? [{ name: 'Profile', href: `/users/${user.$id}/${slugify(user.name)}` }] : [])
  ];

  return (
    <>
      {links.map((link) => (
        <a
          key={link.name}
          href={link.href}
          onClick={mobile && closeMenu ? closeMenu : undefined}
          className={`text-gray-700 dark:text-gray-200 hover:text-blue-600 dark:hover:text-blue-400 transition-colors ${
            mobile ? 'block py-2' : ''
          }`}
        >
          {link.name}
        </a>
      ))}
    </>
  );
};

export default Navbar;