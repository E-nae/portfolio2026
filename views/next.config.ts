import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  async rewrites() {
    const apiUrl = process.env.NEXT_PUBLIC_API_URL;
    if (!apiUrl) {
      console.warn("⚠️ 경고: NEXT_PUBLIC_API_URL 환경변수가 없습니다.");
    }
    return [
      {
        source: "/api/:path*", 
        destination: `${apiUrl}/:path*`, 
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
