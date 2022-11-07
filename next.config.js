/**
 * @type {import('next').NextConfig}
 */
const nextConfig = {
  images: {
    domains: [
      'https://cdn.blackpixel.mx',
      'cdn.blackpixel.mx',
      'images.unsplash.com',
      'cdn.uey.mx',
      'cdn.photoswipe.com'
    ]
  },
  generateBuildId: async () => (process.env.BUILD_ID ? process.env.BUILD_ID : `${new Date().getTime()}`),
  webpack: config => config
}

module.exports = nextConfig
