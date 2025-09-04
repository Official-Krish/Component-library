import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  images: {
    domains: ['assets.krishdev.xyz', 'pro.aceternity.com', "aceternity.com"],
  },
  experimental: {
    viewTransition: true,
  },
};

export default nextConfig;
