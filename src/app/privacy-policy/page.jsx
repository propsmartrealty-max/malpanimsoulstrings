import SchemaMarkup from '@/components/SchemaMarkup';
import Link from 'next/link';

export const metadata = {
  title: 'Privacy Policy | Malpani M SoulStrings Pune',
  description: 'Official Privacy Policy for Malpani M SoulStrings by Malpani Estates. Understand how we collect, protect, and process buyer information in accordance with Indian DPDP Act and MahaRERA regulations.',
  alternates: {
    canonical: 'https://www.malpanimsoulstrings.com/privacy-policy',
  },
  robots: {
    index: true,
    follow: true,
  }
};

export default function PrivacyPolicyPage() {
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
        "name": "Privacy Policy",
        "item": "https://www.malpanimsoulstrings.com/privacy-policy"
      }
    ]
  };

  return (
    <main style={{ paddingTop: '120px', paddingBottom: '4rem', background: 'var(--color-background)', color: 'var(--color-text)' }}>
      <SchemaMarkup pageName="Privacy Policy" pageUrl="/privacy-policy" />
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(breadcrumbSchema) }} />

      <div className="container" style={{ maxWidth: '900px' }}>
        <h1 className="gradient-text mb-4" style={{ fontSize: '2.5rem', fontWeight: '700' }}>Privacy Policy</h1>
        <p style={{ color: 'rgba(255,255,255,0.6)', fontSize: '0.9rem', marginBottom: '2rem' }}>
          Last Updated: September 4, 2026 | Compliant with the Digital Personal Data Protection (DPDP) Act &amp; MahaRERA Guidelines
        </p>

        <section className="mb-5" style={{ lineHeight: '1.8' }}>
          <h2 style={{ color: '#d4af37', fontSize: '1.4rem', marginBottom: '1rem' }}>1. Introduction &amp; Corporate Identity</h2>
          <p>
            Welcome to the official digital portal of <strong>Malpani M SoulStrings</strong> (<em>https://www.malpanimsoulstrings.com</em>), an ultra-luxury residential development situated on Baner-Pashan Link Road, Pune, developed and marketed by <strong>Malpani Estates</strong> (MahaRERA Registration: <strong>P52100076782</strong> for Wing B and <strong>P52100055678</strong> for Wing C).
          </p>
          <p>
            We are committed to maintaining the utmost confidentiality, integrity, and security of your personal data. This Privacy Policy details our practices concerning data collection, usage, and rights regarding prospective homebuyers and website visitors.
          </p>
        </section>

        <section className="mb-5" style={{ lineHeight: '1.8' }}>
          <h2 style={{ color: '#d4af37', fontSize: '1.4rem', marginBottom: '1rem' }}>2. Information We Collect</h2>
          <p>We may collect and process the following information when you interact with our forms, WhatsApp widgets, or sales galleries:</p>
          <ul style={{ paddingLeft: '1.5rem', color: 'rgba(255,255,255,0.8)' }}>
            <li><strong>Identity &amp; Contact Information:</strong> Full Name, Email Address, and Phone Number provided during brochure downloads or site tour bookings.</li>
            <li><strong>Property Interest Details:</strong> Configuration preference (3 BHK, 4 BHK, 5 BHK Duplex, or Sky Penthouse), investment horizon, and NRI status.</li>
            <li><strong>Technical &amp; Telemetry Data:</strong> IP address, geolocation (country, city), device identifiers, and browser parameters captured at the Cloudflare Edge network to ensure site security and prevent fraudulent inquiries.</li>
          </ul>
        </section>

        <section className="mb-5" style={{ lineHeight: '1.8' }}>
          <h2 style={{ color: '#d4af37', fontSize: '1.4rem', marginBottom: '1rem' }}>3. How We Use Your Information</h2>
          <p>Your personal information is collected solely for legitimate real estate inquiry fulfillment:</p>
          <ul style={{ paddingLeft: '1.5rem', color: 'rgba(255,255,255,0.8)' }}>
            <li>To dispatch requested official brochures, dimensioned CAD floor plans, and pricing matrices.</li>
            <li>To schedule private VIP presentations and on-site experience gallery walkthroughs.</li>
            <li>To verify communication preferences via WhatsApp (+91 7744009295) or direct phone consultation.</li>
            <li>To comply with regulatory disclosures mandated by MahaRERA and Indian fiscal authorities.</li>
          </ul>
        </section>

        <section className="mb-5" style={{ lineHeight: '1.8' }}>
          <h2 style={{ color: '#d4af37', fontSize: '1.4rem', marginBottom: '1rem' }}>4. Zero Third-Party Brokerage &amp; Data Protection</h2>
          <p>
            <strong>We do not sell, rent, or trade your personal information.</strong> Your information is processed directly by the developer’s authorized in-house sales team and secure infrastructure (Cloudflare Pages Edge and encrypted mail relays). We enforce strict role-based access control to prevent unauthorized access.
          </p>
        </section>

        <section className="mb-5" style={{ lineHeight: '1.8' }}>
          <h2 style={{ color: '#d4af37', fontSize: '1.4rem', marginBottom: '1rem' }}>5. Cookies &amp; Google Analytics / Consent Mode v2</h2>
          <p>
            We implement modern Google Consent Mode v2 standards to respect your tracking choices. Cookies are utilized strictly for Core Web Vitals performance optimization, session management, and anonymous aggregated traffic diagnostics (Google Analytics 4). You may modify your browser settings at any time to reject non-essential cookies.
          </p>
        </section>

        <section className="mb-5" style={{ lineHeight: '1.8' }}>
          <h2 style={{ color: '#d4af37', fontSize: '1.4rem', marginBottom: '1rem' }}>6. Contact &amp; Grievance Officer</h2>
          <p>For inquiries regarding this policy, data deletion requests, or MahaRERA verification, contact our compliance desk:</p>
          <div style={{ background: 'rgba(255,255,255,0.03)', border: '1px solid rgba(212,175,55,0.3)', padding: '1.5rem', borderRadius: '8px' }}>
            <p className="mb-1"><strong>Malpani Estates - Customer Grievance Desk</strong></p>
            <p className="mb-1">Baner Pashan Link Road, Pune, Maharashtra 411045, India</p>
            <p className="mb-1">Phone: <a href="tel:+917744009295" style={{ color: '#d4af37' }}>+91 7744009295</a></p>
            <p className="mb-0">Email: <a href="mailto:propsmartrealty@gmail.com" style={{ color: '#d4af37' }}>propsmartrealty@gmail.com</a></p>
          </div>
        </section>

        <div className="mt-5 pt-3" style={{ borderTop: '1px solid rgba(255,255,255,0.1)' }}>
          <Link href="/" style={{ color: '#d4af37', textDecoration: 'underline' }}>← Back to Malpani M SoulStrings Home</Link>
        </div>
      </div>
    </main>
  );
}
