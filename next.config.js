/** @type {import('next').NextConfig} */
const nextConfig = {
  experimental: {
    appDir: true,
  },
  async rewrites() {
    return [
      {
        source: "/api-clients/:path*",
        destination: "https://simple-books-api.glitch.me/api-clients/:path*",
      },
    ];
  },
};

module.exports = nextConfig;
