

import SchemaMarkup from '../../components/SchemaMarkup';
import Link from 'next/link';

export const metadata = {
  alternates: { canonical: '/amenities' },
  title: '35+ Luxury Amenities at Malpani M SoulStrings | Baner Pashan Link Road',
  description: 'Explore the world-class resort amenities at Malpani m soulstrings baner pashan link road. Featuring infinity pools, sports courts, and smart home automation.',
};

export default function AmenitiesPage() {
  return (
    <main>

      <SchemaMarkup />
      
      <div className="pillar-header" style={{ paddingTop: '120px', paddingBottom: '4rem', background: 'var(--color-surface)' }}>
        <div className="container">
          <div className="scarcity-badge fade-in-up" style={{ display: 'inline-block', marginBottom: '1rem' }}>
            <span className="material-symbols-outlined" style={{ fontSize: '1rem', verticalAlign: 'middle', marginRight: '0.2rem' }}>pool</span>
            Resort-Style Lifestyle
          </div>
          <h1 className="gradient-text" style={{ fontSize: '3rem', marginBottom: '1rem' }}>The Rise of Smart Home Automation in Pune's Luxury Residences</h1>
          <p style={{ fontSize: '1.2rem', color: 'var(--color-text-muted)', maxWidth: '800px' }}>
            Discover the 35+ world-class amenities and intuitive home automation that defines true luxury at Malpani M SoulStrings.
          </p>
        </div>
      </div>

      <div className="pillar-content" style={{ padding: '4rem 0' }}>
        <div className="container" style={{ display: 'grid', gridTemplateColumns: '1fr 300px', gap: '3rem' }}>
          
          <article className="main-content">
            <p>The definition of luxury in the Pune Real Estate Market is undergoing a rapid technological evolution. At the highly acclaimed Malpani M SoulStrings project on the Baner-Pashan Link Road, it is no longer sufficient for a residence to just boast Italian marble. The modern ultra-luxury buyer demands a living space that is intuitively integrated. Welcome to the era of the Smart Home at Malpani Estates.</p>
            
            <h2 className="mt-5 mb-4 gradient-text" style={{ fontSize: '2rem' }}>Beyond the Basics: True Luxury at Malpani M SoulStrings</h2>
            <p>When we talk about luxury estates at Malpani M SoulStrings, we are talking about deeply integrated ecosystems. In our premium 4 BHK Estates, a central hub controls everything from ambient lighting to advanced security. It is the very definition of a smart, secure community. From the moment you enter, you are experiencing the finest gated community Pune has to offer.</p>
            
            <h2 className="mt-5 mb-4 gradient-text" style={{ fontSize: '2rem' }}>35+ World-Class Amenities: The Epicenter of Baner</h2>
            <p>Investing in this prestigious Baner-Pashan Link Road property grants you exclusive access to a resort-style lifestyle. Residents enjoy unparalleled access to an expansive swimming pool and a massive, bespoke clubhouse. Fitness enthusiasts will thrive in our state-of-the-art gymnasium and dedicated jogging tracks. For competitive play, we offer extensive sports facilities, featuring a professional-grade basketball court and dedicated net cricket zones.</p>
            
            <h2 className="mt-5 mb-4 gradient-text" style={{ fontSize: '2rem' }}>Wellness, Nature, and Community</h2>
            <p>For high-net-worth individuals, holistic well-being is non-negotiable. M SoulStrings features premium wellness zones and reflexology paths. Families will love the sprawling kids' play areas and serene spaces dedicated entirely to senior citizens. Experience vast open spaces and beautifully curated landscaped gardens. We even cater to your furry friends with our exclusive pet park. Entertain guests in the grand open-air amphitheater, proving that this development offers the absolute best lifestyle amenities West Pune has ever seen.</p>
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