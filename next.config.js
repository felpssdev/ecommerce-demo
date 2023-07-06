/** @type {import('next').NextConfig} */
const nextConfig = {
  images: {
    remotePatterns: [
      {
        protocol: 'https',
        hostname: 'image.goat.com',
      },
      {
        protocol: 'https',
        hostname: 'images.stockx.com',
      }
    ]
  }
}

module.exports = nextConfig
