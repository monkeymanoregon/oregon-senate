import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  async redirects() {
    return [
      {
        source: "/:path*",
        has: [{ type: "host", value: "www.voteor3.com" }],
        destination: "https://voteor3.com/:path*",
        permanent: true,
      },
    ];
  },
};

export default nextConfig;
