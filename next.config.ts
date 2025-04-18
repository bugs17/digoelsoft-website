import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  images:{
    remotePatterns:[
      {
        hostname:"res.cloudinary.com",
        protocol:"https"
      }
    ]
  }
  /* config options here */
};

export default nextConfig;
