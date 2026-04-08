import { withSentryConfig } from "@sentry/nextjs";

/** @type {import('next').NextConfig} */
const nextConfig = {
  typescript: {
    ignoreBuildErrors: true,
  },
  // Prevent Next.js build from invoking its ESLint bridge with outdated options.
  // `npm run lint` remains the source of truth for linting.
  eslint: {
    ignoreDuringBuilds: true,
  },
  images: {
    remotePatterns: [
      {
        protocol: "https",
        hostname: "images.unsplash.com",
        pathname: "/**",
      },
      {
        protocol: "http",
        hostname: "cloud.appwrite.io",
        pathname: "/**",
      },
    ],
  },
  webpack: (config) => {
    // Avoid filesystem cache write failures in restricted Windows environments.
    config.cache = false;
    return config;
  },
};

export default withSentryConfig(nextConfig, {
  org: "sumit-73",
  project: "bitoverflow",
  silent: !process.env.CI,
  widenClientFileUpload: true,
  tunnelRoute: "/monitoring",
  disableLogger: true,
  automaticVercelMonitors: true,
});
