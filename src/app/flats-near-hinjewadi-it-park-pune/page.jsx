import SchemaMarkup from '../../components/SchemaMarkup';
import Link from 'next/link';

export const metadata = {
  alternates: { canonical: '/flats-near-hinjewadi-it-park-pune' },
  title: 'Luxury Flats Near Hinjewadi IT Park Pune | Malpani M SoulStrings',
  description: 'Looking for luxury flats near Hinjewadi IT Park? Malpani M SoulStrings on Baner Pashan Link Road offers a zero-commute upgrade for tech professionals in Pune.',
  keywords: [
    'flats near Hinjewadi IT Park',
    'luxury apartments near Hinjewadi Pune',
    '3 BHK flats near Hinjewadi',
    '4 BHK premium flats near Hinjewadi Phase 1',
    'real estate investment near Hinjewadi',
    'Malpani M SoulStrings Hinjewadi connectivity'
  ],
  openGraph: {
    title: 'Luxury Flats Near Hinjewadi IT Park Pune',
    description: 'The ultimate luxury upgrade for tech professionals. Zero commute, absolute luxury at Malpani M SoulStrings.',
    url: 'https://www.malpanimsoulstrings.com/flats-near-hinjewadi-it-park-pune',
    siteName: 'Malpani M SoulStrings',
    images: [
      {
        url: 'https://malpani-cms.firsteconomy.com/uploads/M_soul_strings_Desktop_Banner_Without_Text_0d38ce28d4.jpg',
        width: 1200,
        height: 630,
        alt: 'Luxury Flats Near Hinjewadi IT Park Pune Malpani M SoulStrings',
      }
    ],
    locale: 'en_IN',
    type: 'article',
  }
};

export default function HinjewadiFlatsPage() {
  return (
    <main>

      <SchemaMarkup pageName="Flats Near Hinjewadi IT Park" pageUrl="/flats-near-hinjewadi-it-park-pune" />
      
      <div className="pillar-header" style={{ paddingTop: '120px', paddingBottom: '4rem', background: 'var(--color-surface)' }}>
        <div className="container">
          <div className="scarcity-badge fade-in-up" style={{ display: 'inline-block', marginBottom: '1rem' }}>
            <span className="material-symbols-outlined" style={{ fontSize: '1rem', verticalAlign: 'middle', marginRight: '0.2rem' }}>domain</span>
            IT Corridor Proximity
          </div>
          <h1 className="gradient-text" style={{ fontSize: '3rem', marginBottom: '1rem' }}>Zero Commute, Absolute Luxury Near Hinjewadi IT Park</h1>
          <p style={{ fontSize: '1.2rem', color: 'var(--color-text-muted)', maxWidth: '800px' }}>
            Discover why tech leaders are choosing Malpani M SoulStrings on Baner-Pashan Link Road over living directly in Hinjewadi.
          </p>
        </div>
      </div>

      <div className="pillar-content" style={{ padding: '4rem 0' }}>
        <div className="container" style={{ display: 'grid', gridTemplateColumns: '1fr 300px', gap: '3rem' }}>
          
          <article className="main-content">
            <p>For IT executives and tech leaders working in <strong>Hinjewadi Phase 1, 2, and 3</strong>, finding the perfect balance between a short commute and ultra-luxury living has historically been a challenge. The solution? <strong><Link href="/">Malpani M SoulStrings</Link></strong> on the Baner Pashan Link Road.</p>

            <h2>Why Buy Flats Near Hinjewadi Instead of Inside It?</h2>
            <p>While Hinjewadi is the undeniable commercial engine of West Pune, it is highly congested and lacks the quiet, upscale residential ecosystem that luxury buyers demand. By choosing a 3 BHK or 4 BHK at Malpani M SoulStrings, you position yourself on the Baner-Pashan Link Road—just a 15-minute signal-free drive to Hinjewadi Phase 1 via the Mumbai-Bengaluru highway, but a world away in terms of lifestyle and peace.</p>

            <h2>The Pune Metro Line 3 Advantage</h2>
            <p>The upcoming Pune Metro Line 3 (Hinjewadi to Shivajinagar) runs directly parallel to the Baner corridor. This infrastructure marvel will make the commute from Malpani M SoulStrings to any Hinjewadi IT Park completely frictionless, simultaneously driving massive capital appreciation for early investors.</p>

            <h2>A Lifestyle Upgrade for IT Professionals</h2>
            <p>After a long day in the tech park, return to a vehicle-free podium, a sky infinity pool, and a 3-tier luxury clubhouse. You are minutes away from the vibrant nightlife of Balewadi High Street, yet your home is nestled against the serene Sus Hills. It is the ultimate dual-advantage location.</p>
            
            <div className="map-container fade-in-up" style={{ marginTop: '3rem', borderRadius: '16px', overflow: 'hidden', boxShadow: '0 10px 30px rgba(0,0,0,0.1)' }}>
              {/* Embed map showing route from Baner Pashan Link Road to Hinjewadi Phase 1 */}
              <iframe 
                src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d15128.84742721833!2d73.7258385!3d18.5779532!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3bc2bbc0c8b212f7%3A0xc3b8a1c9df2bd414!2sHinjawadi%2C%20Pune%2C%20Maharashtra!5e0!3m2!1sen!2sin!4v1716982400000!5m2!1sen!2sin" 
                width="100%" 
                height="450" 
                style={{ border: 0, display: 'block' }} 
                allowFullScreen="" 
                loading="lazy" 
                referrerPolicy="no-referrer-when-downgrade">
              </iframe>
            </div>
          </article>

          <aside className="sidebar">
            <div className="loc-card" style={{ padding: '1.5rem', borderRadius: '12px', position: 'sticky', top: '100px' }}>
              <h3 style={{ fontSize: '1.2rem', marginBottom: '1rem', color: 'var(--color-primary)' }}>Tech Executive Special</h3>
              <p style={{ color: 'var(--color-text-muted)', fontSize: '0.9rem', marginBottom: '1.5rem' }}>Schedule a site visit tailored for IT professionals and explore our 4 BHK masterpieces.</p>
              <a href="#" data-bs-toggle="modal" data-bs-target="#enquireModal" className="btn btn-primary" style={{ width: '100%' }}>Enquire Now</a>
            </div>
          </aside>
          
        </div>
      </div>

    </main>
  );
}
