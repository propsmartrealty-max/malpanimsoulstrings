import SchemaMarkup from '../../components/SchemaMarkup';
import Link from 'next/link';

export const metadata = {
  alternates: { canonical: '/premium-residences-near-aundh-pune-malpani-m-soulstrings' },
  title: 'Premium Residences Near Aundh Pune | Malpani M SoulStrings',
  description: 'Searching for premium residences near Aundh Pune? Upgrade your lifestyle with the ultra-luxury 4 BHK and 5 BHK estates at Malpani M SoulStrings Baner.',
  keywords: [
    'premium residences near Aundh Pune',
    'luxury flats in Aundh',
    'Aundh real estate alternative',
    'Malpani M SoulStrings Aundh connectivity',
    '4 BHK flats near Aundh'
  ],
  openGraph: {
    title: 'Premium Residences Near Aundh Pune | Malpani M SoulStrings',
    description: 'Upgrade your lifestyle from Aundh to the ultra-luxury 4 BHK and 5 BHK estates at Malpani M SoulStrings Baner.',
    url: 'https://www.malpanimsoulstrings.com/premium-residences-near-aundh-pune-malpani-m-soulstrings',
    siteName: 'Malpani M SoulStrings',
    images: [{ url: 'https://malpani-cms.firsteconomy.com/uploads/01_1_97625c7cd6.png', width: 1200, height: 800, alt: 'Premium Residences Near Aundh Pune' }],
    locale: 'en_IN',
    type: 'article',
  }
};

export default function AundhAlternativePage() {
  return (
    <main>
      <SchemaMarkup pageName="Aundh Premium Alternative" pageUrl="/premium-residences-near-aundh-pune-malpani-m-soulstrings" />
      
      <div className="pillar-header" style={{ paddingTop: '120px', paddingBottom: '4rem', background: 'var(--color-surface)' }}>
        <div className="container">
          <div className="scarcity-badge fade-in-up" style={{ display: 'inline-block', marginBottom: '1rem' }}>
            <span className="material-symbols-outlined" style={{ fontSize: '1rem', verticalAlign: 'middle', marginRight: '0.2rem' }}>diamond</span>
            The Heritage Upgrade
          </div>
          <h1 className="gradient-text" style={{ fontSize: '3rem', marginBottom: '1rem' }}>The Next Generation of Premium Residences Near Aundh, Pune</h1>
          <p style={{ fontSize: '1.2rem', color: 'var(--color-text-muted)', maxWidth: '800px' }}>
            Aundh's charm is undeniable, but its infrastructure is aging. Discover the modern luxury upgrade at Malpani M SoulStrings.
          </p>
        </div>
      </div>

      <div className="pillar-content" style={{ padding: '4rem 0' }}>
        <div className="container" style={{ display: 'grid', gridTemplateColumns: '1fr 300px', gap: '3rem' }}>
          
          <article className="main-content">
            <p><strong>Aundh</strong> has long been the gold standard for premium living in Pune. However, as the neighborhood reaches maximum density, large-format luxury homes are becoming non-existent, and aging infrastructure is a growing concern for high-net-worth individuals.</p>

            <h2>The Baner-Pashan Link Road: The New Aundh</h2>
            <p>Just a 12-minute drive from Aundh, the Baner-Pashan Link Road has firmly established itself as the successor to Aundh's legacy. <strong><Link href="/">Malpani M SoulStrings</Link></strong> offers the exact same elite social fabric, but with brand-new, cutting-edge infrastructure and unpolluted surroundings.</p>

            <h2>Uncompromising Space</h2>
            <p>While finding a spacious, modern 4 BHK or 5 BHK in Aundh is nearly impossible without compromising on amenities or parking, M SoulStrings delivers 1950+ Sq.Ft. Carpet 4 BHKs and exclusive Penthouses, complete with multi-level parking and EV charging.</p>

            <h2>Preserving Your Lifestyle</h2>
            <p>You don't have to give up your favorite Aundh clubs, cafes, or schools. With direct connectivity via Baner Road and University Circle, Aundh remains your backyard, while your home becomes a private, ultra-luxury sanctuary.</p>
          </article>

          <aside className="sidebar">
            <div className="loc-card" style={{ padding: '1.5rem', borderRadius: '12px', position: 'sticky', top: '100px' }}>
              <h3 style={{ fontSize: '1.2rem', marginBottom: '1rem', color: 'var(--color-primary)' }}>Upgrade from Aundh</h3>
              <p style={{ color: 'var(--color-text-muted)', fontSize: '0.9rem', marginBottom: '1.5rem' }}>Discover the modern definition of luxury. Get the floor plans today.</p>
              <a href="#" data-bs-toggle="modal" data-bs-target="#enquireModal" className="btn btn-primary" style={{ width: '100%' }}>Enquire Now</a>
            </div>
          </aside>
          
        </div>
      </div>
    </main>
  );
}
