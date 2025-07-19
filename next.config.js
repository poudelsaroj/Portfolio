/** @type {import('next').NextConfig} */
const nextConfig = {
  output: 'export',
  trailingSlash: true,
  skipTrailingSlashRedirect: true,
  distDir: 'out',
  images: {
    unoptimized: true
  },
  // Remove assetPrefix for custom domain - GitHub Pages handles this automatically
  assetPrefix: '',
  basePath: '',
  // Ensure proper static file handling
  experimental: {
    // This helps with static file optimization
    optimizeCss: false,
  }
}

module.exports = nextConfig
