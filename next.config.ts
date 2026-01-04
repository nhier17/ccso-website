import type { NextConfig } from "next";
import { withContentlayer } from 'next-contentlayer'

const nextConfig: NextConfig = {
  /* config options here */
  typescript: {
    ignoreBuildErrors: true,
  },
  images: {
    remotePatterns: [
      {
        protocol: "https",
        hostname: "**",
      },
    ],
  },
  turbopack: {},
};

export default withContentlayer(nextConfig)