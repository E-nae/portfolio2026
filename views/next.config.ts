import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  async rewrites() {
    return [
      {
        source: "/api/:path*", 
        destination: "https://portfolio2026-3w2e.onrender.com/:path*", 
      },
    ];
  },
  images: {
    remotePatterns: [
      {
        protocol: 'https',
        hostname: 'images.unsplash.com'
      }
    ]
  },
  turbopack: {
    root: __dirname
  }
};

export default nextConfig;
