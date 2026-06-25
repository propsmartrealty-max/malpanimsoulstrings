import SchemaMarkup from '../../components/SchemaMarkup';
import Link from 'next/link';

export const metadata = {
  alternates: { canonical: '/malpani-m-soulstrings-construction-status-updates-possession' },
  title: 'Malpani M SoulStrings Construction Status & Possession Updates',
  description: 'Track the latest construction status, structural progress, engineering updates, and scheduled possession timelines for Malpani M SoulStrings on Baner-Pashan Link Road.',
  keywords: 'Malpani M Soulstrings construction status, M Soulstrings updates, possession date Malpani M Soulstrings, construction progress Pune West luxury flats',
  openGraph: {
    title: 'Construction Status & Updates - Malpani M SoulStrings',
    description: 'Track the real-time structural progress and possession dates of Malpani M SoulStrings.',
    url: 'https://www.malpanimsoulstrings.com/malpani-m-soulstrings-construction-status-updates-possession',
    siteName: 'Malpani M SoulStrings',
    images: [
      {
        url: 'https://malpani-cms.firsteconomy.com/uploads/About_Project_27b8c57d51.png',
        width: 1200,
        height: 630,
        alt: 'Malpani M SoulStrings Construction Status',
      },
    ],
    locale: 'en_IN',
    type: 'website',
  }
};

export default function ConstructionStatusPage() {
  const articleSchema = {
    "@context": "https://schema.org",
    "@type": "Article",
    "headline": "Malpani M SoulStrings: Construction Timeline & possession Guide",
    "description": "Real-time structural progress reports, concrete pour metrics, brickwork updates, and official MahaRERA possession timelines for Wings B & C.",
    "author": { "@type": "Organization", "name": "Technical Audit Team" },
    "publisher": { "@type": "Organization", "name": "Malpani Estates" },
    "datePublished": "2026-06-25T12:00:00+05:30",
    "dateModified": new Date().toISOString()
  };

  return (
    <main>
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(articleSchema) }} />
      <SchemaMarkup pageName="Construction Status" pageUrl="/malpani-m-soulstrings-construction-status-updates-possession" />
      
      <div className="pillar-header" style={{ paddingTop: '120px', paddingBottom: '4rem', background: 'var(--color-surface)' }}>
        <div className="container">
          <div className="scarcity-badge fade-in-up" style={{ display: 'inline-block', marginBottom: '1rem' }}>
            <span className="material-symbols-outlined" style={{ fontSize: '1rem', verticalAlign: 'middle', marginRight: '0.2rem' }}>build</span>
            Construction Progress
          </div>
          <h1 className="gradient-text" style={{ fontSize: '3rem', marginBottom: '1rem' }}>Construction Status & Possession Updates</h1>
          <p style={{ fontSize: '1.2rem', color: 'var(--color-text-muted)', maxWidth: '800px' }}>
            Real-time monitoring of structural engineering milestones, concrete pours, and RERA possession guides for Wings B & C.
          </p>
        </div>
      </div>

      <div className="pillar-content" style={{ padding: '4rem 0' }}>
        <div className="container" style={{ display: 'grid', gridTemplateColumns: '1fr 300px', gap: '3rem' }}>
          
          <article className="main-content" style={{ color: 'rgba(255,255,255,0.8)', lineHeight: '1.8' }}>
            <h2>Real-Time Structural Progress</h2>
            <p>Transparency is fundamental to the developer-buyer relationship. The <strong>Malpani M SoulStrings construction status</strong> is updated monthly, detailing the milestone progress of Wings B & C on the Baner-Pashan Link Road. Using Mivan Alu-form construction techniques, structural pours have proceeded on a tight timeline.</p>

            <h3>Wing B & Wing C Milestones</h3>
            <p>Below is a summary of the current engineering progress at the site:</p>
            <ul>
              <li><strong>Excavation & Foundations:</strong> 100% completed for all wings, featuring robust seismic-resistant pile foundations anchored to stable basalt strata.</li>
              <li><strong>RCC Framework Structure:</strong> RCC slab framing is proceeding at a rate of 3 floors per month using automated Mivan concrete systems.</li>
              <li><strong>Brickwork & Internal Plastering:</strong> Underway for lower and mid-levels, ensuring optimal insulation and soundproof thermal layers are installed.</li>
              <li><strong>Services Integration:</strong> Concealed plumbing grids, firefighting loops, and smart home ducting are being laid out in synchronization with structural pours.</li>
            </ul>

            <h3>Possession Timelines</h3>
            <p>The project is fully registered under MahaRERA, establishing strict legal timelines for key handovers. The official scheduled <strong>possession date for Malpani M SoulStrings</strong> is set for late 2027, with the developer tracking ahead of schedule for early handovers of key residential towers.</p>

            <div className="contact-box" style={{ background: 'var(--color-surface)', padding: '2rem', borderRadius: '12px', marginTop: '3rem', borderLeft: '4px solid var(--color-primary)' }}>
              <h3 style={{ marginTop: 0, color: '#fff' }}>Request Live Construction Site Video</h3>
              <p>Receive monthly site photographs, drone updates, and RERA progress logs directly in your inbox: <strong><Link href="/" style={{ color: 'var(--color-primary)', textDecoration: 'none' }}>Subscribe to Updates →</Link></strong></p>
            </div>
          </article>

          <aside className="sidebar">
            <div className="loc-card" style={{ padding: '1.5rem', borderRadius: '12px', position: 'sticky', top: '100px' }}>
              <h3 style={{ fontSize: '1.2rem', marginBottom: '1rem', color: 'var(--color-primary)' }}>Project Details</h3>
              <ul style={{ listStyle: 'none', padding: 0, margin: 0 }}>
                <li><Link href="/flat-rates-price-trends-baner-pashan-link-road-pune" style={{ color: 'var(--color-text)', textDecoration: 'none' }}>Price Trends Sheet</Link></li>
                <li style={{ marginTop: '1rem' }}><Link href="/compare-malpani-m-soulstrings-baner-pashan-link-road/pristine-lords-baner-malpani-m-soulstrings-baner-pashan-link-road" style={{ color: 'var(--color-text)', textDecoration: 'none' }}>vs. Pristine The Lords</Link></li>
                <li style={{ marginTop: '1rem' }}><Link href="/compare-malpani-m-soulstrings-baner-pashan-link-road/kohinoor-livience-baner-malpani-m-soulstrings-baner-pashan-link-road" style={{ color: 'var(--color-text)', textDecoration: 'none' }}>vs. Kohinoor Livience</Link></li>
              </ul>
            </div>
          </aside>
          
        </div>
      </div>
    </main>
  );
}
