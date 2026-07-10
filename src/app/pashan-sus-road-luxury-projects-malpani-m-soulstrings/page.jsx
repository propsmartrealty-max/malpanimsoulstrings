import SchemaMarkup from '../../components/SchemaMarkup';
import Link from 'next/link';

export const metadata = {
  alternates: { canonical: '/pashan-sus-road-luxury-projects-malpani-m-soulstrings' },
  title: 'Pashan Sus Road Luxury Projects | Malpani M SoulStrings',
  description: 'Explore the finest Pashan Sus Road luxury projects. Malpani M SoulStrings offers the perfect blend of Sus Hills tranquility and Baner connectivity.',
  keywords: [
    'Pashan Sus Road luxury projects',
    'flats near Sus Road Pune',
    'luxury homes Pashan',
    '3 BHK Pashan Sus Road',
    'Malpani M SoulStrings'
  ],
  openGraph: {
    title: 'Pashan Sus Road Luxury Projects | Malpani M SoulStrings',
    description: 'Explore the finest Pashan Sus Road luxury projects. Malpani M SoulStrings offers the perfect blend of Sus Hills tranquility and Baner connectivity.',
    url: 'https://www.malpanimsoulstrings.com/pashan-sus-road-luxury-projects-malpani-m-soulstrings',
    siteName: 'Malpani M SoulStrings',
    images: [{ url: 'https://malpani-cms.firsteconomy.com/uploads/03_5afad0394f.png', width: 1200, height: 800, alt: 'Pashan Sus Road Luxury Projects' }],
    locale: 'en_IN',
    type: 'article',
  }
};

export default function PashanSusRoadPage() {
  return (
    <main>
      <SchemaMarkup pageName="Pashan Sus Road Projects" pageUrl="/pashan-sus-road-luxury-projects-malpani-m-soulstrings" />
      
      <div className="pillar-header" style={{ paddingTop: '120px', paddingBottom: '4rem', background: 'var(--color-surface)' }}>
        <div className="container">
          <div className="scarcity-badge fade-in-up" style={{ display: 'inline-block', marginBottom: '1rem' }}>
            <span className="material-symbols-outlined" style={{ fontSize: '1rem', verticalAlign: 'middle', marginRight: '0.2rem' }}>landscape</span>
            Nature Meets Luxury
          </div>
          <h1 className="gradient-text" style={{ fontSize: '3rem', marginBottom: '1rem' }}>The Crown Jewel of Pashan & Sus Road Luxury Projects</h1>
          <p style={{ fontSize: '1.2rem', color: 'var(--color-text-muted)', maxWidth: '800px' }}>
            Why Malpani M SoulStrings is the only choice for buyers seeking the tranquility of Pashan with the high-end infrastructure of Baner.
          </p>
        </div>
      </div>

      <div className="pillar-content" style={{ padding: '4rem 0' }}>
        <div className="container" style={{ display: 'grid', gridTemplateColumns: '1fr 300px', gap: '3rem' }}>
          
          <article className="main-content">
            <p>The <strong>Pashan-Sus Road corridor</strong> has always been favored by those who cherish nature, thanks to the stunning Sus Hills, NDA hills, and Pashan Lake. However, finding true, uncompromising luxury in this belt has historically been difficult—until now.</p>

            <h2>The Baner-Pashan Link Road Advantage</h2>
            <p><strong><Link href="/">Malpani M SoulStrings</Link></strong> bridges the gap between Pashan's natural beauty and Baner's commercial powerhouse. Located exactly on the Link Road, residents get front-row views of the lush green hills while remaining just minutes away from the Mumbai-Bengaluru Highway.</p>

            <h2>Unmatched Air Quality and Micro-climate</h2>
            <p>Because of its proximity to the hill reserves, this specific pocket of West Pune enjoys a noticeably cooler micro-climate and vastly superior Air Quality Index (AQI) compared to the inner city. M SoulStrings maximizes this with Vastu-compliant layouts designed for optimal cross-ventilation.</p>

            <h2>The Best of Both Worlds</h2>
            <p>For buyers analyzing Pashan Sus Road luxury projects, Malpani M SoulStrings represents the ultimate synthesis: the peace and quiet of a hill-station retreat combined with 35+ world-class luxury amenities and smart-home automation.</p>
          </article>

          <aside className="sidebar">
            <div className="loc-card" style={{ padding: '1.5rem', borderRadius: '12px', position: 'sticky', top: '100px' }}>
              <h3 style={{ fontSize: '1.2rem', marginBottom: '1rem', color: 'var(--color-primary)' }}>Nature Awaits</h3>
              <p style={{ color: 'var(--color-text-muted)', fontSize: '0.9rem', marginBottom: '1.5rem' }}>Experience the serenity of the Sus Hills. Download the brochure.</p>
              <a href="#" data-bs-toggle="modal" data-bs-target="#enquireModal" className="btn btn-primary" style={{ width: '100%' }}>Enquire Now</a>
            </div>
          </aside>
          
        </div>
      </div>
    </main>
  );
}
