import type { NextConfig } from "next";

// GitHub Pages serves this repo at https://<user>.github.io/MICE/, so
// production builds need a matching basePath/assetPrefix. Gated on
// production so `next dev` still serves at the plain localhost root.
const repoBasePath = "/MICE";
const isProd = process.env.NODE_ENV === "production";

const nextConfig: NextConfig = {
  output: "export",
  ...(isProd ? { basePath: repoBasePath, assetPrefix: repoBasePath } : {}),
  images: {
    unoptimized: true,
    remotePatterns: [
      {
        protocol: "https",
        hostname: "picsum.photos",
      },
      {
        protocol: "https",
        hostname: "fastly.picsum.photos",
      },
    ],
  },
};

export default nextConfig;
