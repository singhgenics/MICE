/** @type {import('next').NextConfig} */
const repoBasePath = "/MICE";
const isProd = process.env.NODE_ENV === "production";

const nextConfig = {
  output: "export",
  // Type-checked separately via `tsc --noEmit` (lighter, single-process) to
  // avoid the parallel jest-worker type-check stalling under low memory.
  typescript: { ignoreBuildErrors: true },
  ...(isProd ? { basePath: repoBasePath, assetPrefix: repoBasePath } : {}),
  images: {
    unoptimized: true,
    remotePatterns: [
      { protocol: "https", hostname: "picsum.photos" },
      { protocol: "https", hostname: "fastly.picsum.photos" },
    ],
  },
};

export default nextConfig;
