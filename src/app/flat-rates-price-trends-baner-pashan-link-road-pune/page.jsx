import SchemaMarkup from '../../components/SchemaMarkup';
import Link from 'next/link';

export const metadata = {
  alternates: { canonical: '/flat-rates-price-trends-baner-pashan-link-road-pune' },
  title: 'Flat Rates & Price Trends Baner Pashan Link Road Pune',
  description: 'Comprehensive property rates, real estate valuation indices, and capital appreciation data for the Baner-Pashan Link Road corridor in West Pune.',
  keywords: 'property rates in Baner Link Road, price trends Baner Pashan Link Road, real estate prices Pune West, Malpani M Soulstrings price sheets',
  openGraph: {
    title: 'Flat Rates & Price Trends Baner-Pashan Link Road',
    description: 'Data-driven analysis of real estate price trends and appreciation rates in Pune West.',
    url: 'https://www.malpanimsoulstrings.com/flat-rates-price-trends-baner-pashan-link-road-pune',
    siteName: 'Malpani M SoulStrings',
    images: [
      {
        url: 'https://malpani-cms.firsteconomy.com/uploads/M_soul_strings_Desktop_Banner_Without_Text_0d38ce28d4.jpg',
        width: 1200,
        height: 630,
        alt: 'Baner Pashan Link Road Real Estate Price Trends',
      },
    ],
    locale: 'en_IN',
    type: 'website',
  }
};

export default function PriceTrendsPage() {
  const articleSchema = {
    "@context": "https://schema.org",
    "@type": "Article",
    "headline": "Real Estate Valuation & Price Trends: Baner-Pashan Link Road, Pune",
    "description": "Historical price appreciation index, capital rates, and future growth forecast for 3 BHK and 4 BHK luxury residences in West Pune.",
    "author": { "@type": "Organization", "name": "Market Intelligence Analyst" },
    "publisher": { "@type": "Organization", "name": "Malpani Estates" },
    "datePublished": "2026-06-25T12:00:00+05:30",
    "dateModified": new Date().toISOString()
  };

  return (
    <main>
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(articleSchema) }} />
      <SchemaMarkup pageName="Price Trends" pageUrl="/flat-rates-price-trends-baner-pashan-link-road-pune" />
      
      <div className="pillar-header" style={{ paddingTop: '120px', paddingBottom: '4rem', background: 'var(--color-surface)' }}>
        <div className="container">
          <div className="scarcity-badge fade-in-up" style={{ display: 'inline-block', marginBottom: '1rem' }}>
            <span className="material-symbols-outlined" style={{ fontSize: '1rem', verticalAlign: 'middle', marginRight: '0.2rem' }}>trending_up</span>
            Valuation Report
          </div>
          <h1 className="gradient-text" style={{ fontSize: '3rem', marginBottom: '1rem' }}>Baner-Pashan Link Road Price Trends</h1>
          <p style={{ fontSize: '1.2rem', color: 'var(--color-text-muted)', maxWidth: '800px' }}>
            Analysis of real estate appreciation indices, property rates, and capital values in Pune West’s premier residential corridor.
          </p>
        </div>
      </div>

      <div className="pillar-content" style={{ padding: '4rem 0' }}>
        <div className="container" style={{ display: 'grid', gridTemplateColumns: '1fr 300px', gap: '3rem' }}>
          
          <article className="main-content" style={{ color: 'rgba(255,255,255,0.8)', lineHeight: '1.8' }}>
            <h2>Valuation Index Overview</h2>
            <p>The <strong>Baner-Pashan Link Road</strong> has transitioned from a localized bypass to West Pune’s most coveted luxury residential street. Driven by demand for low-density gating, hill-view properties, and close connectivity to the Hinjewadi IT hub, <strong>price trends on the Baner Pashan Link Road</strong> have steadily outperformed central Baner and Aundh.</p>

            <h3>Historical Price Growth (CAGR)</h3>
            <p>Between 2023 and 2026, capital values in the corridor appreciated at a steady <strong>8% to 10% CAGR</strong>. The average per-square-foot rate has risen from ₹9,500/sq.ft. to approximately ₹12,500/sq.ft. for premium gating, with signature developments commanding upwards of ₹13,500/sq.ft. based on specifications like Italian marble and private elevator access.</p>

            <h3>Appreciation Factors</h3>
            <ul>
              <li><strong>Infrastructure (Metro Line 3):</strong> The upcoming metro corridor connecting Hinjewadi to Shivajinagar has fueled investor demand from IT professionals looking for zero-commute secondary properties.</li>
              <li><strong>Supply Constraints:</strong> Because the corridor borders the protected Sus-Baner hills forest reserve, the availability of large, clear-title land parcels is highly restricted, creating natural supply-side scarcity.</li>
              <li><strong>Density Preference:</strong> High-net-worth buyers are willing to pay a premium for low-density communities like <strong>Malpani M SoulStrings</strong>, which features only four towers over 5.20 acres, rather than high-density towers.</li>
            </ul>

            <div className="contact-box" style={{ background: 'var(--color-surface)', padding: '2rem', borderRadius: '12px', marginTop: '3rem', borderLeft: '4px solid var(--color-primary)' }}>
              <h3 style={{ marginTop: 0, color: '#fff' }}>Request Current Price Sheets</h3>
              <p>Get detailed carpet rates, tax breakdowns, and payment plans for 3 BHK & 4 BHK units: <strong><Link href="/" style={{ color: 'var(--color-primary)', textDecoration: 'none' }}>Request Price Sheet →</Link></strong></p>
            </div>
          </article>

          <aside className="sidebar">
            <div className="loc-card" style={{ padding: '1.5rem', borderRadius: '12px', position: 'sticky', top: '100px' }}>
              <h3 style={{ fontSize: '1.2rem', marginBottom: '1rem', color: 'var(--color-primary)' }}>Related Info</h3>
              <ul style={{ listStyle: 'none', padding: 0, margin: 0 }}>
                <li><Link href="/market-analysis-malpani-m-soulstrings-baner-pashan-link-road" style={{ color: 'var(--color-text)', textDecoration: 'none' }}>Market Analysis Hub</Link></li>
                <li style={{ marginTop: '1rem' }}><Link href="/nri-investment-malpani-m-soulstrings-baner-pashan-link-road" style={{ color: 'var(--color-text)', textDecoration: 'none' }}>NRI Playbook</Link></li>
                <li style={{ marginTop: '1rem' }}><Link href="/pune-west-real-estate-market-malpani-m-soulstrings-baner-pashan-link-road" style={{ color: 'var(--color-text)', textDecoration: 'none' }}>West Pune Dynamics</Link></li>
              </ul>
            </div>
          </aside>
          
        </div>
      </div>
    </main>
  );
}
