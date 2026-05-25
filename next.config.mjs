/** @type {import('next').NextConfig} */
const nextConfig = {
  images: {
    remotePatterns: [
      {
        protocol: 'https',
        hostname: 'malpani-cms.firsteconomy.com',
      },
      {
        protocol: 'https',
        hostname: 'www.malpaniestates.com',
      }
    ],
  },
  async redirects() {
    return [
      { source: '/malpani-m-soulstrings-baner-pashan-link-road-4bhk-luxury', destination: '/4bhk-luxury', permanent: true },
      { source: '/malpani-m-soulstrings-baner-pashan-link-road-smart-home-automation', destination: '/amenities', permanent: true },
      { source: '/malpani-m-soulstrings-baner-pashan-link-road-infrastructure', destination: '/infrastructure', permanent: true },
      { source: '/malpani-m-soulstrings-baner-pashan-link-road-nri-investment', destination: '/nri-investment', permanent: true },
      { source: '/malpani-m-soulstrings-pune-real-estate-market', destination: '/market-analysis', permanent: true },
      { source: '/malpani-m-soulstrings-baner-pashan-link-road-real-estate', destination: '/baner-overview', permanent: true },
      { source: '/malpani-m-soulstrings-baner-pashan-link-road-shivajinagar-elite-retreat', destination: '/shivajinagar', permanent: true },
      { source: '/malpani-m-soulstrings-baner-pashan-link-road-pashan-nature-tech', destination: '/pashan', permanent: true },
      { source: '/malpani-m-soulstrings-baner-pashan-link-road-aundh-luxury-upgrade', destination: '/aundh', permanent: true },
      { source: '/malpani-m-soulstrings-baner-pashan-link-road-pan-card-club-pinnacle', destination: '/location', permanent: true },
      { source: '/malpani-m-soulstrings-baner-pashan-link-road-vs-aundh-real-estate', destination: '/compare', permanent: true }
    ]
  },
};

export default nextConfig;
