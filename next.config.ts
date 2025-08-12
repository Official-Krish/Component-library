import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  images: {
    domains: ['aceternity.com', 'pro.aceternity.com'],
  },
  experimental: {
    viewTransition: true,
  },
};

export default nextConfig;
