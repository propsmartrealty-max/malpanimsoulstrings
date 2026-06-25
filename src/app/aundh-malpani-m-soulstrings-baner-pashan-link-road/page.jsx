

import SchemaMarkup from '../../components/SchemaMarkup';
import EmiCalculator from '../../components/EmiCalculator';
import Link from 'next/link';

export const metadata = {
  alternates: { canonical: '/aundh-malpani-m-soulstrings-baner-pashan-link-road' },
  title: 'Upgrade Your Legacy: Aundh to Baner Pashan Link Road',
  description: 'The ultimate real estate upgrade for Aundh residents. Discover Malpani M SoulStrings on the Baner-Pashan Link Road, offering expansive 3 & 4 BHK luxury estates.',
};

export default function AundhPage() {
  const localSchema = {
    "@context": "https://schema.org",
    "@type": ["Place", "Neighborhood"],
    "name": "Aundh, Pune",
    "description": "Premium residential neighborhood in West Pune, known for high-net-worth real estate and seamless connectivity to Baner Pashan Link Road.",
    "containedInPlace": {
      "@type": "City",
      "name": "Pune"
    },
    "geo": {
      "@type": "GeoCoordinates",
      "latitude": 18.5626,
      "longitude": 73.8077
    }
  };

  const faqSchema = {
    "@context": "https://schema.org",
    "@type": "FAQPage",
    "mainEntity": [
      {
        "@type": "Question",
        "name": "Why are Aundh residents upgrading to the Baner-Pashan Link Road?",
        "acceptedAnswer": {
          "@type": "Answer",
          "text": "Aundh has become highly saturated with older, high-density residential constructions. Luxury homebuyers in Aundh are upgrading to the Baner-Pashan Link Road corridor to access modern, low-density projects like Malpani M SoulStrings, which offer expansive 3 & 4 BHK luxury estates, 35+ state-of-the-art amenities, and serene green hill-facing environments."
        }
      },
      {
        "@type": "Question",
        "name": "What is the distance between Aundh and Malpani M SoulStrings?",
        "acceptedAnswer": {
          "@type": "Answer",
          "text": "Malpani M SoulStrings is located just 10-15 minutes away from Aundh via the seamlessly connected Baner Pashan Link Road. This close proximity allows residents to retain easy access to their established social infrastructure, premium clubs, and top schools in Aundh."
        }
      },
      {
        "@type": "Question",
        "name": "Are 4 BHK luxury residences available at Malpani M SoulStrings?",
        "acceptedAnswer": {
          "@type": "Answer",
          "text": "Yes, Malpani M SoulStrings offers premium 3 BHK, 4 BHK, and 5 BHK sky villa-style luxury residences. These estates feature massive column-free living rooms, expansive private decks, and 100% Vastu-compliant layouts designed for the absolute elite of Pune."
        }
      }
    ]
  };

  return (
    <main>
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(localSchema) }} />
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(faqSchema) }} />

      <SchemaMarkup pageName="Aundh Real Estate" pageUrl="/aundh-malpani-m-soulstrings-baner-pashan-link-road" />
      
      <div className="pillar-header" style={{ paddingTop: '120px', paddingBottom: '4rem', background: 'var(--color-surface)' }}>
        <div className="container">
          <div className="scarcity-badge fade-in-up" style={{ display: 'inline-block', marginBottom: '1rem' }}>
            <span className="material-symbols-outlined" style={{ fontSize: '1rem', verticalAlign: 'middle', marginRight: '0.2rem' }}>moving</span>
            The Aundh Upgrade
          </div>
          <h1 className="gradient-text" style={{ fontSize: '3rem', marginBottom: '1rem' }}>Upgrade Your Legacy from Aundh to Baner Pashan Link Road</h1>
          <p style={{ fontSize: '1.2rem', color: 'var(--color-text-muted)', maxWidth: '800px' }}>
            Aundh has long been the gold standard of West Pune. But as the definition of true luxury evolves, it's time for the ultimate upgrade to expansive, amenity-rich estates.
          </p>
        </div>
      </div>

      <div className="pillar-content" style={{ padding: '4rem 0' }}>
        <div className="container" style={{ display: 'grid', gridTemplateColumns: '1fr 300px', gap: '3rem' }}>
          
          <article className="main-content">
            <p>Aundh has long been the gold standard of West Pune. Its tree-lined avenues and established legacy are undeniable. However, as families grow and the definition of true luxury evolves, the saturated market of Aundh struggles to offer the sprawling, amenity-rich estates that modern high-net-worth families demand. It is time for the ultimate upgrade to <strong><Link href="/">Malpani M SoulStrings on the Baner-Pashan Link Road</Link></strong>.</p>

            <h2>The Space You Deserve</h2>
            <p><strong><Link href="/">Malpani M SoulStrings</Link></strong> at Baner Pashan Link Road offers what is simply unavailable in Aundh today: sheer, uncompromised space. Our 4 BHK luxury residences are designed as expansive estates, featuring massive living areas, private decks, and Vastu-compliant layouts. You do not have to compromise your lifestyle due to space constraints.</p>

            <h2>An Ecosystem, Not Just A Building</h2>
            <p>While legacy buildings offer charm, M SoulStrings offers a 35+ amenity ecosystem. From a sky infinity pool and a fully-equipped multi-fitness arena to smart-home automation and concierge services, this is a master-planned community designed for the absolute elite of Pune.</p>

            <h2>A Seamless Transition</h2>
            <p>Located just minutes from Aundh via the seamlessly connected Baner Pashan Link Road, you retain access to all your favorite Aundh social clubs, schools, and networks, while dramatically elevating your daily living experience. Secure your family's new legacy today.</p>
          </article>

          <aside className="sidebar">
            <div className="loc-card" style={{ padding: '1.5rem', borderRadius: '12px', position: 'sticky', top: '100px' }}>
              <h3 style={{ fontSize: '1.2rem', marginBottom: '1rem', color: 'var(--color-primary)' }}>Take the Next Step</h3>
              <p style={{ color: 'var(--color-text-muted)', fontSize: '0.9rem', marginBottom: '1.5rem' }}>Schedule a private consultation to discuss your transition from Aundh.</p>
              <a href="#" data-bs-toggle="modal" data-bs-target="#enquireModal" className="btn btn-primary" style={{ width: '100%' }}>Enquire Now</a>
            </div>
          </aside>
          
        </div>
      </div>

      <section className="py-5" style={{ background: 'var(--color-background)', borderTop: '1px solid rgba(212,175,55,0.1)' }}>
        <div className="container">
          <div className="row align-items-center">
            <div className="col-lg-5 mb-5 mb-lg-0">
              <h2 className="display-5 fw-bold mb-4" style={{ color: 'var(--color-text)' }}>Financial Upgrade Estimator</h2>
              <p style={{ color: 'var(--color-text-muted)', fontSize: '1.1rem', marginBottom: '2rem' }}>
                Plan your real estate portfolio upgrade. Calculate the cash flow required to secure an ultra-luxury asset in West Pune's most coveted corridor.
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