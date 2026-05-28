/** @type {import('next').NextConfig} */
const nextConfig = {
  poweredByHeader: false,
  compress: true,
  images: {
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
  async headers() {
    return [
      {
        source: '/(.*)',
        headers: [
          {
            key: 'X-DNS-Prefetch-Control',
            value: 'on'
          },
          {
            key: 'X-Content-Type-Options',
            value: 'nosniff'
          },
          {
            key: 'Referrer-Policy',
            value: 'strict-origin-when-cross-origin'
          },
          {
            key: 'X-Frame-Options',
            value: 'SAMEORIGIN'
          }
        ],
      },
      {
        source: '/assets/(.*)',
        headers: [
          {
            key: 'Cache-Control',
            value: 'public, max-age=31536000, immutable',
          }
        ],
      }
    ]
  },
  async redirects() {
    return [
      { source: '/index.html', destination: '/', permanent: true },
      { source: '/4bhk-luxury-apartments-in-baner.html', destination: '/4bhk-luxury', permanent: true },
      { source: '/amenities.html', destination: '/amenities', permanent: true },
      { source: '/infrastructure.html', destination: '/infrastructure', permanent: true },
      { source: '/location.html', destination: '/location', permanent: true },
      { source: '/nri-investment.html', destination: '/nri-investment', permanent: true },
      { source: '/market-analysis.html', destination: '/market-analysis', permanent: true },
      { source: '/baner-overview.html', destination: '/baner-overview', permanent: true },
      { source: '/shivajinagar-flats.html', destination: '/shivajinagar', permanent: true },
      { source: '/aundh-properties.html', destination: '/aundh', permanent: true },
      { source: '/pashan-link-road.html', destination: '/pashan', permanent: true },
    ];
  },
};

export default nextConfig;
