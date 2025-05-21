import React from 'react';
import { DivideIcon as LucideIcon } from 'lucide-react';
import Link from 'next/link';

type FeatureCardProps = {
  icon: typeof LucideIcon;
  title: string;
  description: string;
};

const FeatureCard: React.FC<FeatureCardProps> = ({ icon: Icon, title, description }) => {
  return (
    <div className="p-6 md:p-8 bg-white dark:bg-gray-900 rounded-2xl shadow-sm hover:shadow-md transition-all duration-300 border border-gray-100 dark:border-gray-800 h-full flex flex-col group">
      <div className="p-4 bg-blue-50 dark:bg-blue-900/20 rounded-lg w-fit mb-6 group-hover:bg-blue-100 dark:group-hover:bg-blue-800/20 transition-colors">
        <Icon size={24} className="text-blue-600 dark:text-blue-400" />
      </div>
      <h3 className="text-xl font-semibold text-gray-900 dark:text-white mb-3 group-hover:text-blue-600 dark:group-hover:text-blue-400 transition-colors">
        {title}
      </h3>
      <p className="text-gray-600 dark:text-gray-300 flex-grow">
        {description}
      </p>
      <div className="mt-6 flex items-center">
        <Link 
          href="#" 
          className="text-blue-600 dark:text-blue-400 font-medium flex items-center hover:underline"
        >
          Learn More
          <svg
            xmlns="http://www.w3.org/2000/svg"
            width="20"
            height="20"
            viewBox="0 0 24 24"
            fill="none"
            stroke="currentColor" 
            strokeWidth="2"
            strokeLinecap="round"
            strokeLinejoin="round"
            className="ml-1 transform group-hover:translate-x-1 transition-transform"
          >
            <path d="M5 12h14M12 5l7 7-7 7" />
          </svg>
        </Link>
      </div>
    </div>
  );
};

export default FeatureCard;