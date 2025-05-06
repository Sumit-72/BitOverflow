import React from 'react';
import { Layers } from 'lucide-react';

const Logo: React.FC = () => {
  return (
    <div className="flex items-center">
      <div className="w-10 h-10 flex-shrink-0 bg-gradient-to-br from-blue-600 to-indigo-600 rounded-lg flex items-center justify-center shadow-md">
        <Layers size={24} className="text-white" />
      </div>
      <span className="ml-3 text-xl font-bold text-gray-900 dark:text-white">Nova</span>
    </div>
  );
};

export default Logo;