import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  /* config options here */
  module.exports = {
  eslint: {
    ignoreDuringBuilds: true,
  },
    typescript: {
        // Ignore TypeScript errors during build
        ignoreBuildErrors: true,
    },
};

export default nextConfig;
