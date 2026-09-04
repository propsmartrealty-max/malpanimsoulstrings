import SchemaMarkup from '@/components/SchemaMarkup';
import Link from 'next/link';

export const metadata = {
  title: 'Terms and Conditions | Malpani M SoulStrings Pune',
  description: 'Official Terms and Conditions, booking policies, MahaRERA statutory disclosures, and architectural disclaimers for Malpani M SoulStrings by Malpani Estates.',
  alternates: {
    canonical: 'https://www.malpanimsoulstrings.com/terms-and-conditions',
  },
  robots: {
    index: true,
    follow: true,
  }
};

export default function TermsAndConditionsPage() {
  const breadcrumbSchema = {
    "@context": "https://schema.org",
    "@type": "BreadcrumbList",
    "itemListElement": [
      {
        "@type": "ListItem",
        "position": 1,
        "name": "Home",
        "item": "https://www.malpanimsoulstrings.com/"
      },
      {
        "@type": "ListItem",
        "position": 2,
        "name": "Terms and Conditions",
        "item": "https://www.malpanimsoulstrings.com/terms-and-conditions"
      }
    ]
  };

  return (
    <main style={{ paddingTop: '120px', paddingBottom: '4rem', background: 'var(--color-background)', color: 'var(--color-text)' }}>
      <SchemaMarkup pageName="Terms and Conditions" pageUrl="/terms-and-conditions" />
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(breadcrumbSchema) }} />

      <div className="container" style={{ maxWidth: '900px' }}>
        <h1 className="gradient-text mb-4" style={{ fontSize: '2.5rem', fontWeight: '700' }}>Terms and Conditions</h1>
        <p style={{ color: 'rgba(255,255,255,0.6)', fontSize: '0.9rem', marginBottom: '2rem' }}>
          Last Updated: September 4, 2026 | Governing MahaRERA &amp; Consumer Protection Compliance
        </p>

        <section className="mb-5" style={{ lineHeight: '1.8' }}>
          <h2 style={{ color: '#d4af37', fontSize: '1.4rem', marginBottom: '1rem' }}>1. Acceptance of Terms</h2>
          <p>
            By accessing or browsing this website (<em>https://www.malpanimsoulstrings.com</em>), scheduling a site walkthrough, downloading promotional literature, or submitting an inquiry via digital forms or WhatsApp, you agree to be bound by these Terms and Conditions and our Privacy Policy.
          </p>
        </section>

        <section className="mb-5" style={{ lineHeight: '1.8' }}>
          <h2 style={{ color: '#d4af37', fontSize: '1.4rem', marginBottom: '1rem' }}>2. MahaRERA Statutory Disclosures</h2>
          <p>
            <strong>Malpani M SoulStrings</strong> is being developed by <strong>Malpani Estates</strong> and is registered with the Maharashtra Real Estate Regulatory Authority (MahaRERA) under:
          </p>
          <ul style={{ paddingLeft: '1.5rem', color: 'rgba(255,255,255,0.8)' }}>
            <li><strong>Wing B:</strong> MahaRERA Registration No. <strong>P52100076782</strong></li>
            <li><strong>Wing C:</strong> MahaRERA Registration No. <strong>P52100055678</strong></li>
          </ul>
          <p>
            The project details, approved plans, sanctioned layout, and progress milestones are officially available on the MahaRERA website (<a href="https://maharera.maharashtra.gov.in" target="_blank" rel="noopener noreferrer" style={{ color: '#d4af37', textDecoration: 'underline' }}>maharera.maharashtra.gov.in</a>) under registered projects.
          </p>
        </section>

        <section className="mb-5" style={{ lineHeight: '1.8' }}>
          <h2 style={{ color: '#d4af37', fontSize: '1.4rem', marginBottom: '1rem' }}>3. Architectural &amp; Artistic Visuals Disclaimer</h2>
          <p>
            All renderings, 3D floor walkthroughs, elevations, landscape plans, and mock-up visual representations on this website are conceptual artist impressions designed to convey the design intent of the development. Actual finished residences, fittings, and landscape flora may vary within approved regulatory parameters. Only the provisions explicitly documented in the registered Agreement for Sale shall constitute binding contractual commitments.
          </p>
        </section>

        <section className="mb-5" style={{ lineHeight: '1.8' }}>
          <h2 style={{ color: '#d4af37', fontSize: '1.4rem', marginBottom: '1rem' }}>4. Pricing, Payment Plans &amp; Return Policy</h2>
          <p>
            Property prices indicated on this website (e.g. ₹1.95 Cr to ₹6.5 Cr) represent base prevailing rates for respective configurations (3 BHK, 4 BHK, 5 BHK Duplex, and Penthouses) as of the current market cycle and are subject to change without prior notice based on floor escalation, unit facing, and milestone-linked payment schedules.
          </p>
          <p>
            <strong>Merchant Return Policy:</strong> As residential real estate transactions involve legally binding immovable property deeds under Indian law, returns or consumer cancellations are governed strictly by the terms stipulated in the MahaRERA standard allotment letter and registered Agreement for Sale. No automatic digital refunds or online returns apply.
          </p>
        </section>

        <section className="mb-5" style={{ lineHeight: '1.8' }}>
          <h2 style={{ color: '#d4af37', fontSize: '1.4rem', marginBottom: '1rem' }}>5. Zero Brokerage Guarantee</h2>
          <p>
            Inquiries placed directly through this official portal or our sales desk at <strong>+91 7744009295</strong> are handled directly by the developer’s authorized sales management desk, ensuring transparent builder pricing with zero intermediary brokerage fees.
          </p>
        </section>

        <section className="mb-5" style={{ lineHeight: '1.8' }}>
          <h2 style={{ color: '#d4af37', fontSize: '1.4rem', marginBottom: '1rem' }}>6. Applicable Jurisdiction</h2>
          <p>
            Any dispute arising out of or related to the usage of this website or communications originating herein shall be subject exclusively to the jurisdiction of the competent courts in Pune, Maharashtra, India.
          </p>
        </section>

        <div className="mt-5 pt-3" style={{ borderTop: '1px solid rgba(255,255,255,0.1)' }}>
          <Link href="/" style={{ color: '#d4af37', textDecoration: 'underline' }}>← Back to Malpani M SoulStrings Home</Link>
        </div>
      </div>
    </main>
  );
}
