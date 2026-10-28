import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  // Cloudflare Pages에 정적 파일로 배포 (빌드 결과: out/)
  output: 'export',
  images: {
    unoptimized: true,
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
