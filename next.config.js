/** @type {import('next').NextConfig} */
const nextConfig = {
  eslint: {
    ignoreDuringBuilds: true,
  },
  images: { unoptimized: true },
  // Discord Webhookを使用するためにAPI Routesを有効化
  // static exportを無効化
  output: undefined,
};

module.exports = nextConfig;