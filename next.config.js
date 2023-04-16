/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
  images: {
    domains: [
      "images.unsplash.com",
      "media.licdn.com",
      "cdn.hashnode.com",
      "avatars.githubusercontent.com",
    ],
  },
};

module.exports = nextConfig;
