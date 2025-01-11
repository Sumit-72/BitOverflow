import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  // Add your other configuration options here
  typescript: {
    // Ignore TypeScript errors during build
    ignoreBuildErrors: true,
  },
};

export default nextConfig;

