import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  images: {
    remotePatterns: [
      {
        protocol: "https",
        hostname: "assets-portfolio.ndaemy.dev",
        pathname: "/**/*",
      },
    ],
  },
  transpilePackages: ["next-mdx-remote"],
};

export default nextConfig;
