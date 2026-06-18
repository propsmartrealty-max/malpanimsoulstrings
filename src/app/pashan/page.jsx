

import SchemaMarkup from '../../components/SchemaMarkup';
import EmiCalculator from '../../components/EmiCalculator';
import Link from 'next/link';

export const metadata = {
  alternates: { canonical: '/pashan' },
  title: 'Pashan Serenity & Smart Luxury',
  description: 'Where the natural beauty of Pashan meets the pinnacle of modern smart-home technology. Panoramic views and sustainable luxury.',
};

export default function PashanPage() {
  const localSchema = {
    "@context": "https://schema.org",
    "@type": ["Place", "Neighborhood"],
    "name": "Pashan, Pune",
    "description": "Serene, green residential corridor in West Pune bordering Baner and Aundh, offering premium luxury real estate developments.",
    "containedInPlace": {
      "@type": "City",
      "name": "Pune"
    },
    "geo": {
      "@type": "GeoCoordinates",
      "latitude": 18.5365,
      "longitude": 73.7929
    }
  };

  return (
    <main>
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(localSchema) }} />

      <SchemaMarkup pageName="Pashan Link Road" pageUrl="/pashan" />
      
      <div className="pillar-header" style={{ paddingTop: '120px', paddingBottom: '4rem', background: 'var(--color-surface)' }}>
        <div className="container">
          <div className="scarcity-badge fade-in-up" style={{ display: 'inline-block', marginBottom: '1rem' }}>
            <span className="material-symbols-outlined" style={{ fontSize: '1rem', verticalAlign: 'middle', marginRight: '0.2rem' }}>forest</span>
            Nature & Innovation
          </div>
          <h1 className="gradient-text" style={{ fontSize: '3rem', marginBottom: '1rem' }}>Where Pashan's Serenity Meets Tomorrow's Technology</h1>
          <p style={{ fontSize: '1.2rem', color: 'var(--color-text-muted)', maxWidth: '800px' }}>
            We have captured the natural essence of Pashan and fused it with the absolute pinnacle of modern smart-home technology on the Baner Pashan Link Road.
          </p>
        </div>
      </div>

      <div className="pillar-content" style={{ padding: '4rem 0' }}>
        <div className="container" style={{ display: 'grid', gridTemplateColumns: '1fr 300px', gap: '3rem' }}>
          
          <article className="main-content">
            <p>The allure of Pashan has always been its natural beauty—the rolling hills, the cooler climate, and the serene environment. At <strong><Link href="/">Malpani M SoulStrings</Link></strong>, situated perfectly on the Baner Pashan Link Road, we have captured that natural essence and fused it with the pinnacle of modern smart-home technology.</p>

            <h2>Panoramic Views and Sustainable Living</h2>
            <p>Wake up to sweeping, unobstructed views of the lush Baner-Pashan hills. Our architectural masterpiece is designed to maximize natural light and cross-ventilation, ensuring that nature is an integral part of your living room. We are committed to sustainable luxury, featuring energy-efficient systems and extensive green landscaping.</p>

            <h2>The Smart-Estate Experience</h2>
            <p>While the views outside are timeless, the technology inside is from the future. Every 3 and 4 BHK Residence is fully integrated with smart home automation. Control your climate, lighting, and advanced biometric security systems from your smartphone or via voice command. It is the perfect harmony of nature and innovation.</p>

            <h2>The Best of Both Worlds</h2>
            <p>You no longer have to choose between a peaceful natural retreat and proximity to the vibrant city life. Located on the Baner Pashan Link Road, you are minutes away from the high-energy Balewadi High Street while residing in a tranquil, resort-like ecosystem.</p>
          </article>

          <aside className="sidebar">
            <div className="loc-card" style={{ padding: '1.5rem', borderRadius: '12px', position: 'sticky', top: '100px' }}>
              <h3 style={{ fontSize: '1.2rem', marginBottom: '1rem', color: 'var(--color-primary)' }}>Experience Serenity</h3>
              <p style={{ color: 'var(--color-text-muted)', fontSize: '0.9rem', marginBottom: '1.5rem' }}>Schedule a private site visit to witness the panoramic views firsthand.</p>
              <a href="#" data-bs-toggle="modal" data-bs-target="#enquireModal" className="btn btn-primary" style={{ width: '100%' }}>Enquire Now</a>
            </div>
          </aside>
          
        </div>
      </div>

      <section className="py-5" style={{ background: 'var(--color-background)', borderTop: '1px solid rgba(212,175,55,0.1)' }}>
        <div className="container">
          <div className="row align-items-center">
            <div className="col-lg-5 mb-5 mb-lg-0">
              <h2 className="display-5 fw-bold mb-4" style={{ color: 'var(--color-text)' }}>Financial Planning Tool</h2>
              <p style={{ color: 'var(--color-text-muted)', fontSize: '1.1rem', marginBottom: '2rem' }}>
                Secure your family's future in Pune's fastest-growing corridor. Utilize our calculator to model your investment strategy.
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