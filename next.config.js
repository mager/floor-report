/** @type {import('next').NextConfig} */
module.exports = {
  reactStrictMode: true,
  images: {
    domains: [
      'lh3.googleusercontent.com',
      'storage.opensea.io',
      'storage.googleapis.com',
      'openseauserdata.com',
      'i.seadn.io'
    ],
  },
  typescript: {
    ignoreBuildErrors: true,
  },
};
