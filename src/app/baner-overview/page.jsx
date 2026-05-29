import Navbar from '../../components/Navbar';
import Footer from '../../components/Footer';
import SchemaMarkup from '../../components/SchemaMarkup';
import Link from 'next/link';

export const metadata = {
  title: 'Baner Real Estate Guide 2026 | Top Investment in Baner Pune',
  description: 'Comprehensive guide to the Baner Pashan Link Road real estate market. Discover why investing in luxury properties in Baner Pune offers the highest ROI.',
  keywords: ['Baner Real Estate Guide', 'Investment in Baner Pune', 'Baner Pashan Link Road real estate', 'Buy luxury property in Baner Pune']
};

export default function BanerOverviewPage() {
  return (
    <main>
      <Navbar />
      <SchemaMarkup />
      
      <div className="pillar-header" style={{ paddingTop: '120px', paddingBottom: '4rem', background: 'var(--color-surface)' }}>
        <div className="container">
          <div className="scarcity-badge fade-in-up" style={{ display: 'inline-block', marginBottom: '1rem' }}>
            <span className="material-symbols-outlined" style={{ fontSize: '1rem', verticalAlign: 'middle', marginRight: '0.2rem' }}>insights</span>
            Market Dominance
          </div>
          <h1 className="gradient-text" style={{ fontSize: '3rem', marginBottom: '1rem' }}>The Baner Real Estate Guide</h1>
          <p style={{ fontSize: '1.2rem', color: 'var(--color-text-muted)', maxWidth: '800px' }}>
            Baner has evolved into the absolute epicenter of luxury real estate in West Pune. Discover why the Baner-Pashan Link Road commands the highest appreciation rates in the city.
          </p>
        </div>
      </div>

      <div className="pillar-content" style={{ padding: '4rem 0' }}>
        <div className="container" style={{ display: 'grid', gridTemplateColumns: '1fr 300px', gap: '3rem' }}>
          
          <article className="main-content">
            <div className="row g-4 mb-5">
              <div className="col-md-4">
                <div className="card h-100 p-4 border-0" style={{ background: 'var(--color-surface)', borderRadius: '12px', border: '1px solid rgba(212,175,55,0.1)' }}>
                  <h3 style={{ color: 'var(--color-primary)', fontSize: '1.2rem', marginBottom: '1rem' }}>Pan Card Club Road</h3>
                  <p style={{ color: 'var(--color-text-muted)', margin: 0, fontSize: '0.95rem' }}>Often referred to as the "Billionaire's Row" of West Pune, Pan Card Club Road is home to ultra-premium developments like Malpani M SoulStrings. Here, luxury isn't just an option; it's the standard.</p>
                </div>
              </div>
              <div className="col-md-4">
                <div className="card h-100 p-4 border-0" style={{ background: 'var(--color-surface)', borderRadius: '12px', border: '1px solid rgba(212,175,55,0.1)' }}>
                  <h3 style={{ color: 'var(--color-primary)', fontSize: '1.2rem', marginBottom: '1rem' }}>Unmatched Connectivity</h3>
                  <p style={{ color: 'var(--color-text-muted)', margin: 0, fontSize: '0.95rem' }}>With direct access to the Mumbai-Pune Expressway and the upcoming Metro Line 3, Baner offers seamless connectivity, making it the top choice for NRIs and High-Net-Worth Individuals.</p>
                </div>
              </div>
              <div className="col-md-4">
                <div className="card h-100 p-4 border-0" style={{ background: 'var(--color-surface)', borderRadius: '12px', border: '1px solid rgba(212,175,55,0.1)' }}>
                  <h3 style={{ color: 'var(--color-primary)', fontSize: '1.2rem', marginBottom: '1rem' }}>Baner vs. Aundh</h3>
                  <p style={{ color: 'var(--color-text-muted)', margin: 0, fontSize: '0.95rem' }}>While Aundh boasts legacy, Baner represents the future. Baner's real estate market offers superior modern amenities, larger gated communities, and higher ROI, outpacing Aundh's saturated market.</p>
                </div>
              </div>
            </div>

            <h2 className="mt-5 mb-4 gradient-text" style={{ fontSize: '2rem' }}>Driven by the IT Corridor</h2>
            <p>
                The proximity to the Hinjewadi IT Park and the vibrant Balewadi High Street acts as a powerful catalyst for Baner's exponential growth. For tech professionals and corporate executives, securing an <strong>Investment in Baner Pune</strong> means a zero-stress commute and an elevated lifestyle.
            </p>
            <p>
                As infrastructural projects continue to mature, the Baner-Pashan Link Road is definitively proving to be the most lucrative and prestigious sector within this dynamic micro-market.
            </p>
          </article>

          <aside className="sidebar">
            <div className="loc-card" style={{ padding: '1.5rem', borderRadius: '12px', position: 'sticky', top: '100px' }}>
              <h3 style={{ fontSize: '1.2rem', marginBottom: '1rem', color: 'var(--color-primary)' }}>Invest in Baner's Crown Jewel</h3>
              <p style={{ color: 'var(--color-text-muted)', fontSize: '0.9rem', marginBottom: '1.5rem' }}>Secure your legacy at Malpani M SoulStrings.</p>
              <a href="#" data-bs-toggle="modal" data-bs-target="#enquireModal" className="btn btn-primary" style={{ width: '100%' }}>Enquire Now</a>
            </div>
          </aside>
          
        </div>
      </div>

      <Footer />
    </main>
  );
}