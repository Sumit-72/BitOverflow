import React from 'react';
import Image from 'next/image';

const Logo: React.FC = () => {
  return (
    <div className="flex items-center space-x-2">
      <div className="relative w-12 h-10 transform transition-transform hover:scale-110">
        <Image
          src="/logo.png"
          alt="BitOverflow Logo"
          fill
          className="object-contain drop-shadow-xl rounded-[35%]"
        />
      </div>
      <span className="text-xl sm:text-2xl font-extrabold bg-gradient-to-r from-purple-500 via-pink-500 to-red-500 bg-clip-text text-transparent drop-shadow-md dark:drop-shadow-lg">
        BitOverflow
      </span>
    </div>
  );
};

export default Logo;

