import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  images: {
    domains: [
      `${process.env.BLOB_WITHOUT_HTTP}`,
      "github-profile-summary-cards.vercel.app",
      "http.cat",
      "avatars.githubusercontent.com",
    ],
    dangerouslyAllowSVG: true,
  }
  
};

export default nextConfig;