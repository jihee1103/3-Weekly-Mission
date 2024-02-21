/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
  images: {
    domains:['ca.slack-edge.com','codeit-images.codeit.com'],
  }
};

module.exports = nextConfig;
