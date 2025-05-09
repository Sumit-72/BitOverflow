import React from 'react';
import Image from 'next/image';

const Logo: React.FC = () => {
  return (
    <div className="flex items-center">
      <Image src="/logo.png" alt="BitOverflow Logo" width={24} height={24} className="w-6 h-6 text-white" />
      <span className="ml-3 text-xl font-bold text-gray-900 dark:text-white">BitOverflow</span>
    </div>
  );
};

export default Logo;