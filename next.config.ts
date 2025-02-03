import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  /* config options here */
  images: {
    remotePatterns: [
      {
        protocol: 'https',
        hostname: 'cdn.newsroom.gg',
        pathname: '**',
      },
      {
        protocol: 'https',
        hostname: 'newsroom.gg',
        pathname: '**',
      }
    ],
  },
};

export default nextConfig;
