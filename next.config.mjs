/** @type {import('next').NextConfig} */

import path from "path";

const __dirname = new URL(".", import.meta.url).pathname;

const nextConfig = {
  experimental: {
    reactCompiler: true,
    ppr: "incremental",
  },
  images: {
    remotePatterns: [
      {
        protocol: "https",
        hostname: "images.pexels.com",
      },
      {
        protocol: "https",
        hostname: "res.cloudinary.com",
      },
      {
        protocol: "https",
        hostname: "img.clerk.com",
      },
    ],
  },
  webpack: (config) => {
    config.resolve.alias["@"] = path.join(__dirname, "src");
    config.resolve.alias["@app"] = path.join(__dirname, "src/app");
    config.resolve.alias["@components"] = path.join(
      __dirname,
      "src/components"
    );
    config.resolve.alias["@lib"] = path.join(__dirname, "src/lib");
    return config;
  },
};

export default nextConfig;
