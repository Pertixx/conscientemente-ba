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
      },
      {
        protocol: 'https',
        hostname: 'cdn.contentor.io',
        pathname: '**',
      },
      {
        protocol: 'https',
        hostname: 'contentor.io',
        pathname: '**',
      }
    ],
  },
};

export default nextConfig;
