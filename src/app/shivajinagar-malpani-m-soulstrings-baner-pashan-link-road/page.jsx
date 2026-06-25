

import SchemaMarkup from '../../components/SchemaMarkup';
import EmiCalculator from '../../components/EmiCalculator';
import Link from 'next/link';

export const metadata = {
  alternates: { canonical: '/shivajinagar-malpani-m-soulstrings-baner-pashan-link-road' },
  title: 'The Ultimate Retreat for the Shivajinagar Elite',
  description: 'Escape the density of central Pune. Discover low-density, ultra-luxury living at Malpani M SoulStrings on the Baner Pashan Link Road.',
};

export default function ShivajinagarPage() {
  const localSchema = {
    "@context": "https://schema.org",
    "@type": ["Place", "Neighborhood"],
    "name": "Shivajinagar, Pune",
    "description": "Historic and central administrative hub of Pune, connecting ultra-luxury buyers to the new Baner-Pashan real estate corridor.",
    "containedInPlace": {
      "@type": "City",
      "name": "Pune"
    },
    "geo": {
      "@type": "GeoCoordinates",
      "latitude": 18.5314,
      "longitude": 73.8446
    }
  };

  const faqSchema = {
    "@context": "https://schema.org",
    "@type": "FAQPage",
    "mainEntity": [
      {
        "@type": "Question",
        "name": "Why should Shivajinagar luxury home buyers consider the Baner-Pashan Link Road?",
        "acceptedAnswer": {
          "@type": "Answer",
          "text": "Central areas like Shivajinagar face increasing commercial density, congestion, noise pollution, and a lack of space for modern, expansive gated communities. The Baner-Pashan Link Road offers Shivajinagar elites the opportunity to own expansive, low-density modern estates with complete privacy and premium resort-style security."
        }
      },
      {
        "@type": "Question",
        "name": "What is the travel time from Shivajinagar to Malpani M SoulStrings?",
        "acceptedAnswer": {
          "@type": "Answer",
          "text": "Malpani M SoulStrings is highly accessible from Shivajinagar, taking approximately 20-25 minutes via University Road and the Baner-Pashan link route, providing a smooth commute for business owners and executives."
        }
      },
      {
        "@type": "Question",
        "name": "What amenities are offered at Malpani M SoulStrings for elite professionals?",
        "acceptedAnswer": {
          "@type": "Answer",
          "text": "Malpani M SoulStrings offers a 35+ world-class amenity ecosystem, including a sky infinity pool, state-of-the-art fitness arena, dedicated co-working lounges, smart automation, and private parking designed for modern high-profile families."
        }
      }
    ]
  };

  return (
    <main>
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(localSchema) }} />
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(faqSchema) }} />

      <SchemaMarkup pageName="Shivajinagar" pageUrl="/shivajinagar-malpani-m-soulstrings-baner-pashan-link-road" />
      
      <div className="pillar-header" style={{ paddingTop: '120px', paddingBottom: '4rem', background: 'var(--color-surface)' }}>
        <div className="container">
          <div className="scarcity-badge fade-in-up" style={{ display: 'inline-block', marginBottom: '1rem' }}>
            <span className="material-symbols-outlined" style={{ fontSize: '1rem', verticalAlign: 'middle', marginRight: '0.2rem' }}>spa</span>
            Urban Retreat
          </div>
          <h1 className="gradient-text" style={{ fontSize: '3rem', marginBottom: '1rem' }}>The Ultimate Urban Retreat for the Shivajinagar Elite</h1>
          <p style={{ fontSize: '1.2rem', color: 'var(--color-text-muted)', maxWidth: '800px' }}>
            For the residents of Shivajinagar, prestige is paramount. Discover a sanctuary that perfectly balances absolute exclusivity with seamless city access.
          </p>
        </div>
      </div>

      <div className="pillar-content" style={{ padding: '4rem 0' }}>
        <div className="container" style={{ display: 'grid', gridTemplateColumns: '1fr 300px', gap: '3rem' }}>
          
          <article className="main-content">
            <p>For the residents of Shivajinagar, prestige is paramount. However, the increasing density, traffic, and lack of expansive modern infrastructure in central Pune often compromise the tranquility that true luxury should provide. Choosing <strong><Link href="/">Malpani M SoulStrings on the Baner-Pashan Link Road</Link></strong> offers the perfect solution: an ultra-luxury urban retreat.</p>

            <h2>Expansive Estates, Unmatched Privacy</h2>
            <p>Our 4 BHK Residences are crafted for absolute exclusivity. With low-density planning, private elevator access options, and meticulously sound-proofed environments, you can retreat from the chaos of the city into your own private sanctuary. This is luxury defined by peace.</p>

            <h2>The New Epicenter of Power</h2>
            <p>The Baner Pashan Link Road has rapidly evolved into the new address of power and prestige in Pune. Favored by CEOs, founders, and industry leaders, residing here places you in a hyper-exclusive network, mirroring the traditional prestige of Shivajinagar but upgraded with world-class infrastructure.</p>

            <h2>Seamless City Access</h2>
            <p>With direct connectivity to the Mumbai-Pune Expressway and smooth arterial routes back into central Pune, you maintain absolute control over your schedule. Enjoy the sweeping green views of the Baner hills every morning, knowing your business district is just a refined drive away.</p>
          </article>

          <aside className="sidebar">
            <div className="loc-card" style={{ padding: '1.5rem', borderRadius: '12px', position: 'sticky', top: '100px' }}>
              <h3 style={{ fontSize: '1.2rem', marginBottom: '1rem', color: 'var(--color-primary)' }}>Secure Your Sanctuary</h3>
              <p style={{ color: 'var(--color-text-muted)', fontSize: '0.9rem', marginBottom: '1.5rem' }}>Schedule a private consultation at Malpani M SoulStrings.</p>
              <a href="#" data-bs-toggle="modal" data-bs-target="#enquireModal" className="btn btn-primary" style={{ width: '100%' }}>Enquire Now</a>
            </div>
          </aside>
          
        </div>
      </div>

      <section className="py-5" style={{ background: 'var(--color-background)', borderTop: '1px solid rgba(212,175,55,0.1)' }}>
        <div className="container">
          <div className="row align-items-center">
            <div className="col-lg-5 mb-5 mb-lg-0">
              <h2 className="display-5 fw-bold mb-4" style={{ color: 'var(--color-text)' }}>Investment Estimator</h2>
              <p style={{ color: 'var(--color-text-muted)', fontSize: '1.1rem', marginBottom: '2rem' }}>
                Transition your capital into Pune's highest-appreciating asset class. Plan your investment parameters effortlessly.
              </p>
            </div>
            <div className="col-lg-7">
              <EmiCalculator />
            </div>
          </div>
        </div>
      </section>

    </main>
  );
}