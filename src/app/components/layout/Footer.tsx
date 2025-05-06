// import React from "react";
// import AnimatedGridPattern from "@/components/magicui/animated-grid-pattern";
// import { cn } from "@/lib/utils";
// import Link from "next/link";

// const Footer = () => {
//     const items = [
//         {
//             title: "Home",
//             href: "/",
//         },
//         {
//             title: "About",
//             href: "/about",
//         },
//         {
//             title: "Privacy Policy",
//             href: "/privacy-policy",
//         },
//         {
//             title: "Terms of Service",
//             href: "/terms-of-service",
//         },
//         {
//             title: "Questions",
//             href: "/questions",
//         },
//     ];
//     return (
//         <footer className="relative block overflow-hidden border-t border-solid border-white/30 py-20">
//             <div className="container mx-auto px-4">
//                 <ul className="flex flex-wrap items-center justify-center gap-3">
//                     {items.map(item => (
//                         <li key={item.href}>
//                             <Link href={item.href}>{item.title}</Link>
//                         </li>
//                     ))}
//                 </ul>
//                 <div className="mt-4 text-center">&copy; {new Date().getFullYear()} BitOverflow</div>
//             </div>
//             <AnimatedGridPattern
//                 numSquares={30}
//                 maxOpacity={0.4}
//                 duration={3}
//                 repeatDelay={1}
//                 className={cn(
//                     "[mask-image:radial-gradient(3000px_circle_at_center,white,transparent)]",
//                     "inset-y-[-50%] h-[200%] skew-y-6"
//                 )}
//             />
//         </footer>
//     );
// };

// export default Footer;

import React from 'react';
import { Facebook, Twitter, Instagram, Linkedin, Mail } from 'lucide-react';
import Logo from '../ui/Logo';

const Footer: React.FC = () => {
  return (
    <footer className="bg-gray-100 dark:bg-gray-900 py-12 md:py-16">
      <div className="container mx-auto px-4">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          <div className="space-y-4">
            <Logo />
            <p className="text-gray-600 dark:text-gray-400 mt-4">
              Creating beautiful digital experiences with cutting-edge technology and intuitive design.
            </p>
            <div className="flex space-x-4 mt-6">
              <SocialIcon icon={Facebook} />
              <SocialIcon icon={Twitter} />
              <SocialIcon icon={Instagram} />
              <SocialIcon icon={Linkedin} />
            </div>
          </div>

          <div>
            <h3 className="text-lg font-semibold mb-4 text-gray-900 dark:text-white">Company</h3>
            <ul className="space-y-3">
              <FooterLink href="#about">About Us</FooterLink>
              <FooterLink href="#careers">Careers</FooterLink>
              <FooterLink href="#blog">Blog</FooterLink>
              <FooterLink href="#press">Press</FooterLink>
            </ul>
          </div>

          <div>
            <h3 className="text-lg font-semibold mb-4 text-gray-900 dark:text-white">Resources</h3>
            <ul className="space-y-3">
              <FooterLink href="#docs">Documentation</FooterLink>
              <FooterLink href="#guides">Guides</FooterLink>
              <FooterLink href="#support">Support</FooterLink>
              <FooterLink href="#api">API Status</FooterLink>
            </ul>
          </div>

          <div>
            <h3 className="text-lg font-semibold mb-4 text-gray-900 dark:text-white">Subscribe</h3>
            <p className="text-gray-600 dark:text-gray-400 mb-4">
              Subscribe to our newsletter for updates
            </p>
            <form className="flex flex-col space-y-2">
              <div className="flex">
                <input
                  type="email"
                  placeholder="Email address"
                  className="px-4 py-2 rounded-l-lg border-gray-300 focus:border-blue-500 focus:ring-blue-500 w-full dark:bg-gray-800 dark:border-gray-700 dark:text-white"
                />
                <button
                  type="submit"
                  className="bg-blue-600 hover:bg-blue-700 text-white p-2 rounded-r-lg transition-colors"
                >
                  <Mail size={20} />
                </button>
              </div>
              <p className="text-xs text-gray-500 dark:text-gray-400">
                We respect your privacy. Unsubscribe at any time.
              </p>
            </form>
          </div>
        </div>

        <div className="border-t border-gray-200 dark:border-gray-800 mt-12 pt-8">
          <div className="flex flex-col md:flex-row justify-between items-center space-y-4 md:space-y-0">
            <p className="text-gray-600 dark:text-gray-400 text-sm">
              © {new Date().getFullYear()} YourCompany. All rights reserved.
            </p>
            <div className="flex space-x-6">
              <a href="#privacy" className="text-gray-600 dark:text-gray-400 hover:text-blue-600 dark:hover:text-blue-400 text-sm">
                Privacy Policy
              </a>
              <a href="#terms" className="text-gray-600 dark:text-gray-400 hover:text-blue-600 dark:hover:text-blue-400 text-sm">
                Terms of Service
              </a>
              <a href="#cookies" className="text-gray-600 dark:text-gray-400 hover:text-blue-600 dark:hover:text-blue-400 text-sm">
                Cookie Policy
              </a>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
};

type FooterLinkProps = {
  href: string;
  children: React.ReactNode;
};

const FooterLink: React.FC<FooterLinkProps> = ({ href, children }) => (
  <li>
    <a 
      href={href} 
      className="text-gray-600 dark:text-gray-400 hover:text-blue-600 dark:hover:text-blue-400 transition-colors"
    >
      {children}
    </a>
  </li>
);

type SocialIconProps = {
  icon: React.FC<{ size?: number }>;
};

const SocialIcon: React.FC<SocialIconProps> = ({ icon: Icon }) => (
  <a 
    href="#" 
    className="w-8 h-8 flex items-center justify-center rounded-full bg-gray-200 dark:bg-gray-800 text-gray-700 dark:text-gray-300 hover:bg-blue-600 dark:hover:bg-blue-600 hover:text-white dark:hover:text-white transition-colors"
  >
    <Icon size={18} />
  </a>
);

export default Footer;