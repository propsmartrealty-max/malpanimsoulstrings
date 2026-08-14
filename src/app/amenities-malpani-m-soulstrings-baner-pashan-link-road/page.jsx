

import SchemaMarkup from '../../components/SchemaMarkup';
import Link from 'next/link';

export const metadata = {
  alternates: { canonical: '/amenities-malpani-m-soulstrings-baner-pashan-link-road' },
  title: '35+ Luxury Amenities at Malpani M SoulStrings Baner Pashan Link Road Pune',
  description: 'Discover 35+ world-class resort amenities at Malpani M SoulStrings, Baner Pashan Link Road — infinity pool, spa, clubhouse, smart home automation and more. The finest gated community in Pune West.',
  keywords: [
    'amenities malpani m soulstrings baner pashan link road',
    'luxury amenities baner pashan link road pune',
    'malpani m soulstrings amenities',
    '35 amenities luxury project pune',
    'infinity pool luxury apartments pune',
    'smart home automation baner pune',
    'luxury gated community amenities pune west',
    'clubhouse luxury project baner'
  ],
  openGraph: {
    title: '35+ Luxury Amenities at Malpani M SoulStrings Baner Pashan Link Road',
    description: '35+ world-class resort amenities at Malpani M SoulStrings, Baner Pashan Link Road — infinity pool, spa, clubhouse, and smart home automation.',
    url: 'https://www.malpanimsoulstrings.com/amenities-malpani-m-soulstrings-baner-pashan-link-road',
    siteName: 'Malpani M SoulStrings',
    locale: 'en_IN',
    type: 'article',
  }
};

export default function AmenitiesPage() {
  return (
    <main>

      <SchemaMarkup pageName="Amenities & Lifestyle" pageUrl="/amenities-malpani-m-soulstrings-baner-pashan-link-road" />
      
      <div className="pillar-header" style={{ paddingTop: '120px', paddingBottom: '4rem', background: 'var(--color-surface)' }}>
        <div className="container">
          <div className="scarcity-badge fade-in-up" style={{ display: 'inline-block', marginBottom: '1rem' }}>
            <span className="material-symbols-outlined" style={{ fontSize: '1rem', verticalAlign: 'middle', marginRight: '0.2rem' }}>pool</span>
            Resort-Style Lifestyle
          </div>
          <h1 className="gradient-text" style={{ fontSize: '3rem', marginBottom: '1rem' }}>35+ World-Class Amenities at Malpani M SoulStrings, Baner Pashan Link Road</h1>
          <p style={{ fontSize: '1.2rem', color: 'var(--color-text-muted)', maxWidth: '800px' }}>
            Discover the 35+ world-class amenities and intuitive home automation that defines true luxury at Malpani M SoulStrings.
          </p>
        </div>
      </div>

      <div className="pillar-content" style={{ padding: '4rem 0' }}>
        <div className="container" style={{ display: 'grid', gridTemplateColumns: '1fr 300px', gap: '3rem' }}>
          
          <article className="main-content">
            <p>The definition of luxury in the Pune Real Estate Market is undergoing a rapid technological evolution. At the highly acclaimed Malpani M SoulStrings project on the Baner-Pashan Link Road, it is no longer sufficient for a residence to just boast Italian marble. The modern ultra-luxury buyer demands a living space that is intuitively integrated. Welcome to the era of the Smart Home at Malpani Estates.</p>
            
            <h2 className="mt-5 mb-4 gradient-text" style={{ fontSize: '2rem' }}>Beyond the Basics: True Luxury at Malpani M SoulStrings Baner Pashan Link Road</h2>
            <p>When we talk about luxury estates at <strong>Malpani M SoulStrings, Baner Pashan Link Road</strong>, we are talking about deeply integrated living ecosystems. In our premium 3 BHK and 4 BHK Estates, a central hub controls everything from ambient lighting to advanced biometric security. It is the very definition of a smart, secure community. From the moment you enter Malpani M SoulStrings on the Baner Pashan Link Road, you are experiencing the finest gated community Pune has ever produced.</p>
            
            <h2 className="mt-5 mb-4 gradient-text" style={{ fontSize: '2rem' }}>35+ World-Class Amenities — The Epicenter of Baner Pashan Link Road</h2>
            <p>Investing in <strong>Malpani M SoulStrings, Baner Pashan Link Road</strong> grants you exclusive access to a resort-style lifestyle that is unmatched in Pune West. Residents enjoy an expansive infinity swimming pool, a signature multi-level clubhouse, a holistic Spa &amp; Salon, and a professional-grade gymnasium. For competitive play, Malpani M SoulStrings offers a basketball court, dedicated Badminton and Pickle Ball courts, and a net cricket zone — all within your gated community on the Baner Pashan Link Road.</p>
            
            <h2 className="mt-5 mb-4 gradient-text" style={{ fontSize: '2rem' }}>Wellness, Nature &amp; Community at Malpani M SoulStrings</h2>
            <p>For high-net-worth individuals, holistic well-being is non-negotiable. <strong>Malpani M SoulStrings</strong> on the <strong>Baner Pashan Link Road</strong> features premium wellness zones with yoga pavilions, reflexology paths, an aromatic garden, and a serene forest trail. Families at Malpani M SoulStrings love the sprawling kids' play areas, a dedicated toddler sandpit, and spaces for senior citizens. The grand amphitheatre at Malpani M SoulStrings Baner Pashan Link Road completes an amenity roster that no competitor in West Pune can match.</p>
          </article>

          <aside className="sidebar">
            <div className="loc-card" style={{ padding: '1.5rem', borderRadius: '12px', position: 'sticky', top: '100px' }}>
              <h3 style={{ fontSize: '1.2rem', marginBottom: '1rem', color: 'var(--color-primary)' }}>Ready to elevate your lifestyle?</h3>
              <p style={{ color: 'var(--color-text-muted)', fontSize: '0.9rem', marginBottom: '1.5rem' }}>Discover the pinnacle of luxury living.</p>
              <a href="#" data-bs-toggle="modal" data-bs-target="#enquireModal" className="btn btn-primary" style={{ width: '100%' }}>Enquire Now</a>
            </div>
          </aside>
          
        </div>
      </div>

    </main>
  );
}