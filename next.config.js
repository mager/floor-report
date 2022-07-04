/** @type {import('next').NextConfig} */
module.exports = {
  reactStrictMode: true,
  images: {
    domains: [
      'lh3.googleusercontent.com',
      'storage.opensea.io',
      'storage.googleapis.com',
      'openseauserdata.com',
    ],
  },
  typescript: {
    ignoreBuildErrors: true,
  },
};
