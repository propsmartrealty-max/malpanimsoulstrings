

import SchemaMarkup from '../../components/SchemaMarkup';
import Link from 'next/link';

export const metadata = {
  alternates: { canonical: '/4bhk-luxury' },
  title: '4 BHK Premium Flats for Sale in Baner-Pashan Link Road | Malpani',
  description: 'Explore the most expansive 4 BHK luxury Estates in the Baner Pashan Link Road real estate market. Vastu-compliant, smart home automation, and 35+ amenities.',
  keywords: ['4 BHK premium flats for sale in Baner-Pashan Link Road', 'spacious 4 BHK apartments near Baner-Pashan Link Road', 'luxury penthouses in Baner Pashan Link Road']
};

export default function FourBhkLuxuryPage() {
  const productSchema = {
    "@context": "https://schema.org/",
    "@type": "Product",
    "name": "4 BHK Ultra-Luxury Estate at Malpani M SoulStrings",
    "image": [
      "https://malpani-cms.firsteconomy.com/uploads/02_1_fccd839fae.png"
    ],
    "description": "Premium 4 BHK luxury apartment in Baner-Pashan Link Road, Pune. Features smart home automation, expansive decks, and Vastu-compliant layouts.",
    "brand": {
      "@type": "Brand",
      "name": "Malpani Estates"
    },
    "offers": {
      "@type": "Offer",
      "url": "https://www.malpanimsoulstrings.com/4bhk-luxury",
      "priceCurrency": "INR",
      "price": "35000000",
      "itemCondition": "https://schema.org/NewCondition",
      "availability": "https://schema.org/InStock",
      "seller": {
        "@type": "Organization",
        "name": "Malpani Estates"
      }
    },
    "aggregateRating": {
      "@type": "AggregateRating",
      "ratingValue": "4.8",
      "reviewCount": "89"
    }
  };

  return (
    <main>
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(productSchema) }} />

      <SchemaMarkup />
      
      <div className="pillar-header" style={{ paddingTop: '120px', paddingBottom: '4rem', background: 'var(--color-surface)' }}>
        <div className="container">
          <div className="scarcity-badge fade-in-up" style={{ display: 'inline-block', marginBottom: '1rem' }}>
            <span className="material-symbols-outlined" style={{ fontSize: '1rem', verticalAlign: 'middle', marginRight: '0.2rem' }}>diamond</span>
            Ultra-Luxury Residences
          </div>
          <h1 className="gradient-text" style={{ fontSize: '3rem', marginBottom: '1rem' }}>4 BHK Premium Flats in Baner-Pashan Link Road</h1>
          <p style={{ fontSize: '1.2rem', color: 'var(--color-text-muted)', maxWidth: '800px' }}>
            Redefining grandeur in the Pune Real Estate Market. Our ultra-luxurious 4 BHK premium flats in Baner-Pashan Link Road are meticulously designed for elite buyers who demand space, privacy, and uncompromising elegance in West Pune.
          </p>
        </div>
      </div>

      <div className="pillar-content" style={{ padding: '4rem 0' }}>
        <div className="container" style={{ display: 'grid', gridTemplateColumns: '1fr 300px', gap: '3rem' }}>
          
          <article className="main-content">
            <div className="row g-4 mb-5">
              <div className="col-md-4">
                <div className="card h-100 p-4 border-0" style={{ background: 'var(--color-surface)', borderRadius: '12px', border: '1px solid rgba(212,175,55,0.1)' }}>
                  <h3 style={{ color: 'var(--color-primary)', fontSize: '1.2rem', marginBottom: '1rem' }}>Smart Home Automation</h3>
                  <p style={{ color: 'var(--color-text-muted)', margin: 0, fontSize: '0.95rem' }}>Step into the future with fully integrated smart homes. Control lighting, climate, and security with a touch, setting a new benchmark for luxury Estates in Pune.</p>
                </div>
              </div>
              <div className="col-md-4">
                <div className="card h-100 p-4 border-0" style={{ background: 'var(--color-surface)', borderRadius: '12px', border: '1px solid rgba(212,175,55,0.1)' }}>
                  <h3 style={{ color: 'var(--color-primary)', fontSize: '1.2rem', marginBottom: '1rem' }}>Gated Community</h3>
                  <p style={{ color: 'var(--color-text-muted)', margin: 0, fontSize: '0.95rem' }}>Experience true peace of mind in a secure, expansive gated community featuring over 35+ amenities including an infinity pool, private clubhouse, and multi-fitness zones.</p>
                </div>
              </div>
              <div className="col-md-4">
                <div className="card h-100 p-4 border-0" style={{ background: 'var(--color-surface)', borderRadius: '12px', border: '1px solid rgba(212,175,55,0.1)' }}>
                  <h3 style={{ color: 'var(--color-primary)', fontSize: '1.2rem', marginBottom: '1rem' }}>Vastu-Compliant</h3>
                  <p style={{ color: 'var(--color-text-muted)', margin: 0, fontSize: '0.95rem' }}>Our spacious 4 BHK Estates are crafted for families, offering perfectly ventilated, Vastu-compliant layouts with panoramic views of the Baner hills.</p>
                </div>
              </div>
            </div>

            <h2 className="mt-5 mb-4 gradient-text" style={{ fontSize: '2rem' }}>The Zenith of Large Carpet Area Apartments Pune</h2>
            <p>
                Discover the ultimate in spatial design. Whether you are seeking <strong>premium 3 BHK Baner Pune</strong> or an <strong>ultra luxury 4 BHK Pune</strong>, Malpani M SoulStrings delivers an unparalleled lifestyle. Experience a breathtakingly <strong>spacious 4 BHK Pashan</strong> layout or a perfectly designed <strong>spacious 3 BHK Baner</strong>, renowned as the premier <strong>large carpet area apartments Pune</strong> in the West corridor.
            </p>
            <p>
                These are unequivocally the most exclusive <strong>luxury 4 BHK Baner Pune</strong> and <strong>luxury 3 BHK in Pashan</strong> properties available. Designed as definitive <strong>elite residences Baner</strong>, every unit is built as a fully <strong>vastu compliant 3 BHK Pune</strong>. Enjoy panoramic vistas from your <strong>4 BHK with private deck Pune</strong> or <strong>3 BHK with deck Baner</strong>, ensuring refreshing cross-ventilation across these <strong>luxury sky apartments Pune</strong>. Our layout features highly coveted corner homes, establishing them as perfectly secluded, <strong>exclusive 4 BHK homes Pune</strong>.
            </p>
            <p>
                Engineered as the ideal <strong>luxury family apartments Pune</strong> with <strong>smart luxury apartments Baner</strong> layouts, these <strong>premium family homes Pune</strong> sit within magnificent <strong>luxury high rise Baner</strong> towers. Experience elevated podium living in these soaring <strong>high rise 3 BHK Pune</strong> and <strong>luxury penthouse Pune</strong> residences, culminating in striking architectural dominance. For buyers seeking a <strong>3 BHK near Baner Pashan Link Road</strong> or an <strong>ultra premium homes Baner</strong> upgrade, this is the destination.
            </p>
            <p>
                Step inside to find a massive, luxurious living room flowing seamlessly into <strong>luxury 4 BHK with terrace</strong> decks. Retreat to the premium master bedroom and unleash your culinary skills in a bespoke kitchen. Our interiors boast world-class fittings, securing these as the top <strong>luxury flats near Hinjewadi</strong> and <strong>luxury residences near Balewadi</strong>. Whether you want <strong>premium apartments near Pune IT park</strong> or <strong>3 BHK apartments near IT hub</strong>, the strategic location paired with these <strong>3 BHK with amenities Baner</strong> and <strong>luxury flats with clubhouse Pune</strong> solidifies this development as the most iconic in the market.
            </p>
          </article>

          <aside className="sidebar">
            <div className="loc-card" style={{ padding: '1.5rem', borderRadius: '12px', position: 'sticky', top: '100px' }}>
              <h3 style={{ fontSize: '1.2rem', marginBottom: '1rem', color: 'var(--color-primary)' }}>Experience the Masterpiece</h3>
              <p style={{ color: 'var(--color-text-muted)', fontSize: '0.9rem', marginBottom: '1.5rem' }}>Schedule a private viewing at Malpani M SoulStrings to experience true luxury.</p>
              <a href="#" data-bs-toggle="modal" data-bs-target="#enquireModal" className="btn btn-primary" style={{ width: '100%' }}>Download Floor Plan</a>
            </div>
          </aside>
          
        </div>
      </div>

    </main>
  );
}