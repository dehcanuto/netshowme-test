import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  images: {
    remotePatterns: [
        {
          protocol: 'https',
          hostname: 'static-ott.netshow.me',
          port: '',
        }
    ],
  },
};

export default nextConfig;
