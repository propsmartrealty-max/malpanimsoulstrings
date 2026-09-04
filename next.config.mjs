/** @type {import('next').NextConfig} */
const nextConfig = {
  // Standardized on Cloudflare Pages static export
  output: 'export',
  poweredByHeader: false,
  compress: true,
  images: {
    unoptimized: true,
    remotePatterns: [
      {
        protocol: 'https',
        hostname: 'malpani-cms.firsteconomy.com',
        pathname: '/**',
      },
      {
        protocol: 'https',
        hostname: 'www.malpaniestates.com',
        pathname: '/**',
      },
      {
        protocol: 'https',
        hostname: 'upload.wikimedia.org',
        pathname: '/**',
      }
    ],
    formats: ['image/avif', 'image/webp'],
    minimumCacheTTL: 31536000,
  },
};

export default nextConfig;
