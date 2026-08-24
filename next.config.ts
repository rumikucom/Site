import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  /* config options here */
  experimental: {
    allowedRevalidateHeaderKeys: [], // optional, just putting experimental block
  },
  // the config property is experimental, but according to the log it might be top-level. 
  // Let's just put it top level as the log suggested:
  allowedDevOrigins: ['192.168.1.2'],
};

export default nextConfig;
