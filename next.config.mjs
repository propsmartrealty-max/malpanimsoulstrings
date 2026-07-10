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
          },
          {
            key: 'Strict-Transport-Security',
            value: 'max-age=31536000; includeSubDomains; preload'
          },
          {
            key: 'Permissions-Policy',
            value: 'camera=(), microphone=(), geolocation=(), browsing-topics=()'
          },
          {
            key: 'X-XSS-Protection',
            value: '1; mode=block'
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
      // Legacy .html redirects directly mapped to new keyword-rich URLs
      { source: '/4bhk-luxury-apartments-in-baner.html', destination: '/4bhk-luxury-malpani-m-soulstrings-baner-pashan-link-road', permanent: true },
      { source: '/amenities.html', destination: '/amenities-malpani-m-soulstrings-baner-pashan-link-road', permanent: true },
      { source: '/infrastructure.html', destination: '/infrastructure-malpani-m-soulstrings-baner-pashan-link-road', permanent: true },
      { source: '/location.html', destination: '/location-malpani-m-soulstrings-baner-pashan-link-road', permanent: true },
      { source: '/nri-investment.html', destination: '/nri-investment-malpani-m-soulstrings-baner-pashan-link-road', permanent: true },
      { source: '/market-analysis.html', destination: '/market-analysis-malpani-m-soulstrings-baner-pashan-link-road', permanent: true },
      { source: '/baner-overview.html', destination: '/baner-overview-malpani-m-soulstrings-baner-pashan-link-road', permanent: true },
      { source: '/shivajinagar-flats.html', destination: '/shivajinagar-malpani-m-soulstrings-baner-pashan-link-road', permanent: true },
      { source: '/aundh-properties.html', destination: '/aundh-malpani-m-soulstrings-baner-pashan-link-road', permanent: true },
      { source: '/pashan-link-road.html', destination: '/pashan-malpani-m-soulstrings-baner-pashan-link-road', permanent: true },
      
      // Short URLs redirected to the new canonical routes
      { source: '/3bhk-luxury', destination: '/3bhk-luxury-malpani-m-soulstrings-baner-pashan-link-road', permanent: true },
      { source: '/4bhk-luxury', destination: '/4bhk-luxury-malpani-m-soulstrings-baner-pashan-link-road', permanent: true },
      { source: '/5bhk-duplex', destination: '/5bhk-duplex-malpani-m-soulstrings-baner-pashan-link-road', permanent: true },
      { source: '/penthouse-luxury', destination: '/penthouse-luxury-malpani-m-soulstrings-baner-pashan-link-road', permanent: true },
      { source: '/location', destination: '/location-malpani-m-soulstrings-baner-pashan-link-road', permanent: true },
      { source: '/nri-investment', destination: '/nri-investment-malpani-m-soulstrings-baner-pashan-link-road', permanent: true },
      { source: '/amenities', destination: '/amenities-malpani-m-soulstrings-baner-pashan-link-road', permanent: true },
      { source: '/infrastructure', destination: '/infrastructure-malpani-m-soulstrings-baner-pashan-link-road', permanent: true },
      { source: '/baner-overview', destination: '/baner-overview-malpani-m-soulstrings-baner-pashan-link-road', permanent: true },
      { source: '/pune-west-real-estate-market', destination: '/pune-west-real-estate-market-malpani-m-soulstrings-baner-pashan-link-road', permanent: true },
      { source: '/vastu-compliant-luxury-homes-pune', destination: '/vastu-compliant-luxury-homes-pune-malpani-m-soulstrings-baner-pashan-link-road', permanent: true },
      { source: '/blog', destination: '/blog-malpani-m-soulstrings-baner-pashan-link-road', permanent: true },
      { source: '/blog/:slug', destination: '/blog-malpani-m-soulstrings-baner-pashan-link-road/:slug', permanent: true },
      { source: '/market-analysis', destination: '/market-analysis-malpani-m-soulstrings-baner-pashan-link-road', permanent: true },
      { source: '/it-professionals-luxury-homes-pune', destination: '/it-professionals-luxury-homes-pune-malpani-m-soulstrings-baner-pashan-link-road', permanent: true },
      { source: '/pune-real-estate-market', destination: '/pune-real-estate-market-malpani-m-soulstrings-baner-pashan-link-road', permanent: true },
      { source: '/baner-real-estate-market', destination: '/baner-real-estate-market-malpani-m-soulstrings-baner-pashan-link-road', permanent: true },
      { source: '/pune-infrastructure-metro-impact', destination: '/pune-infrastructure-metro-impact-malpani-m-soulstrings-baner-pashan-link-road', permanent: true },
      { source: '/aundh', destination: '/aundh-malpani-m-soulstrings-baner-pashan-link-road', permanent: true },
      { source: '/pashan', destination: '/pashan-malpani-m-soulstrings-baner-pashan-link-road', permanent: true },
      { source: '/shivajinagar', destination: '/shivajinagar-malpani-m-soulstrings-baner-pashan-link-road', permanent: true },
      { source: '/compare', destination: '/compare-malpani-m-soulstrings-baner-pashan-link-road', permanent: true },
      { source: '/compare/pristine-lords-baner', destination: '/compare-malpani-m-soulstrings-baner-pashan-link-road/pristine-lords-baner-malpani-m-soulstrings-baner-pashan-link-road', permanent: true },
      { source: '/compare/kohinoor-livience-baner', destination: '/compare-malpani-m-soulstrings-baner-pashan-link-road/kohinoor-livience-baner-malpani-m-soulstrings-baner-pashan-link-road', permanent: true },
      { source: '/sitemap', destination: '/sitemap-malpani-m-soulstrings-baner-pashan-link-road', permanent: true },
      
      // Keyword injection redirects for hubs
      { source: '/flats-near-hinjewadi-it-park-pune', destination: '/flats-near-hinjewadi-it-park-pune-malpani-m-soulstrings', permanent: true },
      { source: '/luxury-apartments-in-balewadi-pune', destination: '/luxury-apartments-in-balewadi-pune-malpani-m-soulstrings', permanent: true },
      { source: '/premium-residences-near-aundh-pune', destination: '/premium-residences-near-aundh-pune-malpani-m-soulstrings', permanent: true },
      { source: '/wakad-to-baner-real-estate-upgrade', destination: '/wakad-to-baner-real-estate-upgrade-malpani-m-soulstrings', permanent: true },
      { source: '/pashan-sus-road-luxury-projects', destination: '/pashan-sus-road-luxury-projects-malpani-m-soulstrings', permanent: true },
      { source: '/flat-rates-price-trends-baner-pashan-link-road-pune', destination: '/flat-rates-price-trends-baner-pashan-link-road-malpani-m-soulstrings', permanent: true },
      { source: '/luxury-gated-community-apartments-for-sale-pune-west', destination: '/luxury-gated-community-apartments-pune-west-malpani-m-soulstrings', permanent: true },
    ];
  },
};

export default nextConfig;
