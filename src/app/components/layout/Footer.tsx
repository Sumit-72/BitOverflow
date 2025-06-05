import React from 'react';
import { FaFacebookF, FaTwitter, FaInstagram, FaLinkedinIn, FaEnvelope } from 'react-icons/fa';

import Logo from '../ui/Logo';
import Link  from 'next/link';

const Footer: React.FC = () => {
  return (
    <footer className="bg-gray-100 dark:bg-gray-900 py-8 md:py-16">
      <div className="container mx-auto px-4">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          <div className="space-y-4">
            <Logo />
            <p className="text-gray-600 dark:text-gray-400 mt-4">
              Connect with your peers, ask questions, and share knowledge.
            </p>
            <div className="flex space-x-4 mt-6">
              <SocialIcon icon={FaFacebookF} />
              <SocialIcon icon={FaTwitter} />
              <SocialIcon icon={FaInstagram} />
              <SocialIcon icon={FaLinkedinIn} />
            </div>

          <section className="hidden md:block mt-4 ">
            <h3 className="text-base font-semibold text-gray-900 dark:text-white">
              Meet Our Developers
            </h3>
            <ul>
              <li className="flex items-center justify-between text-sm text-gray-800 dark:text-white mb-2 mt-2">
                <span className="font-medium">Sumit Shekhar</span>
                <div className="flex space-x-2">
                  <Link
                    href="https://www.linkedin.com/in/sumit-shekhar72"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-blue-600 hover:underline dark:text-blue-400 mr-2"
                    aria-label="Sumit's LinkedIn"
                  >
                    <FaLinkedinIn className='size-5'/>
                  </Link>
                  <Link
                    href="https://mail.google.com/mail/?view=cm&fs=1&to=mail.sumitshekhar@gmail.com"
                    target='_blank'
                    className="text-blue-600 hover:underline dark:text-blue-400 "
                    aria-label="Email Sumit"
                  >
                    <FaEnvelope className='size-5'/>
                  </Link>
                </div>
              </li>
              <li className="flex items-center justify-between text-sm text-gray-800 dark:text-white ">
                <span className="font-medium">Pranav Prajyot</span>
                <div className="flex space-x-2">
                  <Link
                    href="https://www.linkedin.com/in/pranav-prajyot-b297232a4 "
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-blue-600 hover:underline dark:text-blue-400 mr-2"
                    aria-label="Pranav's LinkedIn"
                  >
                    <FaLinkedinIn className='size-5'/>
                  </Link>
                  <Link
                    href="https://mail.google.com/mail/?view=cm&fs=1&to=pranavprajyot31@gmail.com"
                    className="text-blue-600 hover:underline dark:text-blue-400 "
                    aria-label="Email Pranav"
                  >
                    <FaEnvelope className='size-5'/>
                  </Link>
                </div>
              </li>
            </ul>
          </section>            
          </div>

          <div>
            <h3 className="text-lg font-semibold mb-2 text-gray-900 dark:text-white">Quick Links</h3>
            <ul className="space-y-3">
              <FooterLink href="/careers">Home</FooterLink>
              <FooterLink href="/questions">Questions</FooterLink>
              <FooterLink href="/leaderboard">LeaderBoard</FooterLink>
              <FooterLink href="/questions/ask">Ask a Question</FooterLink>
            </ul>
          </div>

          <div>
            <h3 className="text-lg font-semibold mb-4 text-gray-900 dark:text-white">Resources</h3>
            <ul className="space-y-3">
              <FooterLink href="#https://re-maps.vercel.app/">ReMap</FooterLink>
              <FooterLink href="/club">Clubs</FooterLink>
              <FooterLink href="/events">Events</FooterLink>
              <FooterLink href="/">Tags</FooterLink>
            </ul>
          </div>

          <div>
            <section>
            <h3 className="text-lg font-semibold mb-4 text-gray-900 dark:text-white">
              Report an Issue / Ask a Query
            </h3>
            <p className="text-gray-600 dark:text-gray-400 mb-4">
              Found a bug or have a question? Fill in your email below and we’ll get back to you.
            </p>
            
            <form className="flex mb-4" >
              <input
                type="email"
                placeholder="Email address"
                required
                className="px-4 py-2 rounded-l-lg border border-gray-300 focus:border-blue-500 focus:ring focus:ring-blue-200 dark:bg-gray-800 dark:border-gray-700 dark:text-white w-full"
              />
              <button
                type="submit"
                className="bg-blue-600 hover:bg-blue-700 text-white px-4 rounded-r-lg transition-colors"
                aria-label="Submit Email"
              >
                <FaEnvelope size={20} />
              </button>
            </form>

            <p className="text-gray-600 dark:text-gray-400">
              Or{" "}
              <Link
                href="https://mail.google.com/mail/?view=cm&fs=1&to=bitoverflow2@gmail.com"
                target="_blank"
                className="text-blue-600 dark:text-blue-400 hover:underline"
              >
                send us an email
              </Link>
              .
            </p>
          </section>
        </div>        

        <section className="sm:hidden mt-4 ">
            <h3 className="text-base font-semibold text-gray-900 dark:text-white">
              Meet Our Developers
            </h3>
            <ul>
              <li className="flex items-center justify-between text-sm text-gray-800 dark:text-white mb-2 mt-2">
                <span className="font-medium">Sumit Shekhar</span>
                <div className="flex space-x-2">
                  <Link
                    href="https://www.linkedin.com/in/sumit-shekhar72"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-blue-600 hover:underline dark:text-blue-400 mr-2"
                    aria-label="Sumit's LinkedIn"
                  >
                    <FaLinkedinIn className='size-5'/>
                  </Link>
                  <Link
                    href="mailto:mail.sumitshekhar@gmail.com"
                    className="text-blue-600 hover:underline dark:text-blue-400 "
                    aria-label="Email Sumit"
                  >
                    <FaEnvelope className='size-5'/>
                  </Link>
                </div>
              </li>
              <li className="flex items-center justify-between text-sm text-gray-800 dark:text-white ">
                <span className="font-medium">Pranav Prajyot</span>
                <div className="flex space-x-2">
                  <Link
                    href="https://www.linkedin.com/in/pranav-prajyot-b297232a4 "
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-blue-600 hover:underline dark:text-blue-400 mr-2"
                    aria-label="Pranav's LinkedIn"
                  >
                    <FaLinkedinIn className='size-5'/>
                  </Link>
                  <Link
                    href="mailto:pranavprajyot31@gmail.com"
                    className="text-blue-600 hover:underline dark:text-blue-400 "
                    aria-label="Email Pranav"
                  >
                    <FaEnvelope className='size-5'/>
                  </Link>
                </div>
              </li>
            </ul>
          </section>        
        </div>

        <div className="border-t border-gray-200 dark:border-gray-800 mt-12 pt-8">
          <div className="flex flex-col md:flex-row justify-between items-center space-y-4 md:space-y-0">
            <p className="text-gray-600 dark:text-gray-400 text-sm">
              © {new Date().getFullYear()} BitOverflow. All rights reserved.
            </p>
            <div className="flex space-x-6">
              <Link href="/" className="text-gray-600 dark:text-gray-400 hover:text-blue-600 dark:hover:text-blue-400 text-sm">
                Privacy Policy
              </Link>
              <Link href="/" className="text-gray-600 dark:text-gray-400 hover:text-blue-600 dark:hover:text-blue-400 text-sm">
                Terms of Service
              </Link>
              <Link href="/" className="text-gray-600 dark:text-gray-400 hover:text-blue-600 dark:hover:text-blue-400 text-sm">
                Cookie Policy
              </Link>
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
    <Link 
      href={href} 
      className="text-gray-600 dark:text-gray-400 hover:text-blue-600 dark:hover:text-blue-400 transition-colors"
    >
      {children}
    </Link>
  </li>
);

type SocialIconProps = {
  icon: React.FC<{ size?: number }>;
};

const SocialIcon: React.FC<SocialIconProps> = ({ icon: Icon }) => (
  <Link 
    href="#" 
    className="w-8 h-8 flex items-center justify-center rounded-full bg-gray-200 dark:bg-gray-800 text-gray-700 dark:text-gray-300 hover:bg-blue-600 dark:hover:bg-blue-600 hover:text-white dark:hover:text-white transition-colors"
  >
    <Icon size={18} />
  </Link>
);

export default Footer;