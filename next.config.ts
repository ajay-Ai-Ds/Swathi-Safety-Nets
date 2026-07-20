import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  async redirects() {
    return [
      {
        source: "/index.html",
        destination: "/",
        permanent: true,
      },
      {
        source: "/invisible-grills.html",
        destination: "/invisible-grills",
        permanent: true,
      },
      {
        source: "/cloth-hangers.html",
        destination: "/cloth-hangers",
        permanent: true,
      },
    ];
  },
};

export default nextConfig;
