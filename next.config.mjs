/** @type {import('next').NextConfig} */
const nextConfig = {
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
