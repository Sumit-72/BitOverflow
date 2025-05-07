import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  images: {
    remotePatterns: [
      {
        protocol: 'https',
        hostname: 'images.unsplash.com',
        pathname: '/**', // Allows all paths from Unsplash
      },
      {
        protocol: 'http',
        hostname: 'cloud.appwrite.io',
        pathname: '/**', // Allows all paths from Appwrite
      },
    ],
  },
};

export default nextConfig;
