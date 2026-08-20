import Link from 'next/link';

export default function Footer() {
  return (
    <>
      <footer className="footer" style={{ background: '#0a0a0c', padding: '4rem 0 2rem 0', borderTop: '1px solid rgba(212,175,55,0.2)' }}>
        <div className="container">
          <nav className="row mb-5" aria-label="Footer Navigation">
              <div className="col-lg-3 mb-4 mb-lg-0">
                  <h4 style={{ color: '#d4af37', fontWeight: 'bold', letterSpacing: '2px', marginBottom: '1.5rem' }}>MALPANI <span style={{ color:'#fff' }}>M SOULSTRINGS</span></h4>
                  <p style={{ color: 'rgba(255,255,255,0.5)', lineHeight: '1.8' }}>
                    Redefining ultra-luxury real estate and architectural perfection on the prestigious Baner-Pashan Link Road, Pune West. Low-density residential sanctuary by Malpani Estates.
                  </p>
                  <div className="mt-3" style={{ fontSize: '0.85rem', color: 'rgba(212,175,55,0.8)' }}>
                    <div><strong>MahaRERA Registration:</strong></div>
                    <div>Wing B: P52100076782 | Wing C: P52100055678</div>
                  </div>
              </div>
              <div className="col-lg-3 mb-4 mb-lg-0">
                  <h5 className="text-white mb-3">Project Configurations</h5>
                  <ul className="list-unstyled" style={{ lineHeight: '2' }}>
                      <li><Link href="/" style={{ color: 'rgba(255,255,255,0.5)', textDecoration: 'none' }}>M SoulStrings Overview</Link></li>
                      <li><Link href="/3bhk-luxury-malpani-m-soulstrings-baner-pashan-link-road" style={{ color: 'rgba(255,255,255,0.5)', textDecoration: 'none' }}>3 BHK Luxury Flats Baner</Link></li>
                      <li><Link href="/4bhk-luxury-malpani-m-soulstrings-baner-pashan-link-road" style={{ color: 'rgba(255,255,255,0.5)', textDecoration: 'none' }}>4 BHK Ultra-Luxury Estates</Link></li>
                      <li><Link href="/5bhk-duplex-malpani-m-soulstrings-baner-pashan-link-road" style={{ color: 'rgba(255,255,255,0.5)', textDecoration: 'none' }}>5 BHK Sky Duplexes</Link></li>
                      <li><Link href="/penthouse-luxury-malpani-m-soulstrings-baner-pashan-link-road" style={{ color: 'rgba(255,255,255,0.5)', textDecoration: 'none' }}>Sky Penthouses with Terraces</Link></li>
                      <li><Link href="/amenities-malpani-m-soulstrings-baner-pashan-link-road" style={{ color: 'rgba(255,255,255,0.5)', textDecoration: 'none' }}>35+ Resort Amenities &amp; Pool</Link></li>
                      <li><Link href="/vastu-compliant-luxury-homes-pune-malpani-m-soulstrings-baner-pashan-link-road" style={{ color: 'rgba(255,255,255,0.5)', textDecoration: 'none' }}>100% Vastu Compliant Homes</Link></li>
                      <li><Link href="/location-malpani-m-soulstrings-baner-pashan-link-road" style={{ color: 'rgba(255,255,255,0.5)', textDecoration: 'none' }}>Baner Pashan Link Road Location</Link></li>
                      <li><Link href="/about-malpani-estates-pune" style={{ color: 'rgba(255,255,255,0.5)', textDecoration: 'none' }}>About Malpani Estates</Link></li>
                      <li><Link href="/press-malpani-estates-baner-pune" style={{ color: 'rgba(255,255,255,0.5)', textDecoration: 'none' }}>Press &amp; Media Mentions</Link></li>
                      <li><Link href="/sitemap-malpani-m-soulstrings-baner-pashan-link-road" style={{ color: 'rgba(255,255,255,0.5)', textDecoration: 'none' }}>HTML Sitemap</Link></li>
                  </ul>
              </div>
              <div className="col-lg-3 mb-4 mb-lg-0">
                  <h5 className="text-white mb-3">Pune Market Guides</h5>
                  <ul className="list-unstyled" style={{ lineHeight: '2' }}>
                      <li><Link href="/blog-malpani-m-soulstrings-baner-pashan-link-road/4-5-bhk-luxury-apartments-in-baner-mahalunge-corridor-pune" style={{ color: 'rgba(255,255,255,0.5)', textDecoration: 'none' }}>4.5 BHK in Baner &amp; Mahalunge</Link></li>
                      <li><Link href="/blog-malpani-m-soulstrings-baner-pashan-link-road/2-bhk-vs-3-bhk-luxury-upgrade-baner-pashan-link-road" style={{ color: 'rgba(255,255,255,0.5)', textDecoration: 'none' }}>2 BHK to 3 BHK Upgrade Guide</Link></li>
                      <li><Link href="/blog-malpani-m-soulstrings-baner-pashan-link-road/simplex-vs-duplex-vs-sky-villas-luxury-estates-pune" style={{ color: 'rgba(255,255,255,0.5)', textDecoration: 'none' }}>Simplex vs. Duplex vs. Sky Villas</Link></li>
                      <li><Link href="/blog-malpani-m-soulstrings-baner-pashan-link-road/township-vs-low-density-luxury-living-baner-pashan-link-road" style={{ color: 'rgba(255,255,255,0.5)', textDecoration: 'none' }}>Township vs. Low Density Living</Link></li>
                      <li><Link href="/blog-malpani-m-soulstrings-baner-pashan-link-road/koregaon-park-to-baner-pashan-luxury-relocation-guide" style={{ color: 'rgba(255,255,255,0.5)', textDecoration: 'none' }}>Koregaon Park to Baner Pashan</Link></li>
                      <li><Link href="/blog-malpani-m-soulstrings-baner-pashan-link-road/kharadi-it-corridor-vs-hinjewadi-west-pune-luxury-living" style={{ color: 'rgba(255,255,255,0.5)', textDecoration: 'none' }}>Kharadi vs. Hinjewadi West Pune</Link></li>
                      <li><Link href="/blog-malpani-m-soulstrings-baner-pashan-link-road/mumbai-hni-relocating-to-pune-west-luxury-corridor-guide" style={{ color: 'rgba(255,255,255,0.5)', textDecoration: 'none' }}>Mumbai HNIs Moving to Pune West</Link></li>
                  </ul>
              </div>
              <div className="col-lg-3">
                  <h5 className="text-white mb-3">Compare &amp; Hubs</h5>
                  <ul className="list-unstyled" style={{ lineHeight: '2' }}>
                      <li><Link href="/compare-malpani-m-soulstrings-baner-pashan-link-road/pristine-lords-baner-malpani-m-soulstrings-baner-pashan-link-road" style={{ color: 'rgba(255,255,255,0.5)', textDecoration: 'none' }}>vs. Pristine The Lords</Link></li>
                      <li><Link href="/compare-malpani-m-soulstrings-baner-pashan-link-road/kohinoor-livience-baner-malpani-m-soulstrings-baner-pashan-link-road" style={{ color: 'rgba(255,255,255,0.5)', textDecoration: 'none' }}>vs. Kohinoor Livience</Link></li>
                      <li><Link href="/flats-near-hinjewadi-it-park-pune-malpani-m-soulstrings" style={{ color: 'rgba(255,255,255,0.5)', textDecoration: 'none' }}>Flats Near Hinjewadi IT Park</Link></li>
                      <li><Link href="/luxury-apartments-in-balewadi-pune-malpani-m-soulstrings" style={{ color: 'rgba(255,255,255,0.5)', textDecoration: 'none' }}>Balewadi Luxury Apartments</Link></li>
                      <li><Link href="/premium-residences-near-aundh-pune-malpani-m-soulstrings" style={{ color: 'rgba(255,255,255,0.5)', textDecoration: 'none' }}>Residences Near Aundh</Link></li>
                      <li><Link href="/wakad-to-baner-real-estate-upgrade-malpani-m-soulstrings" style={{ color: 'rgba(255,255,255,0.5)', textDecoration: 'none' }}>Wakad to Baner Upgrade</Link></li>
                      <li><Link href="/nri-investment-malpani-m-soulstrings-baner-pashan-link-road" style={{ color: 'rgba(255,255,255,0.5)', textDecoration: 'none' }}>NRI Investment Portal</Link></li>
                  </ul>
              </div>
          </nav>

          {/* SEO Factsheet & Market Intelligence Corridor */}
          <div className="seo-factsheet-section mt-5 pt-5" style={{ borderTop: '1px solid rgba(212,175,55,0.15)', color: 'rgba(255,255,255,0.6)', paddingBottom: '2rem' }}>
            <div className="row mb-4">
              <div className="col-12">
                <h3 style={{ color: '#d4af37', fontSize: '1.5rem', fontWeight: '700', letterSpacing: '1px', marginBottom: '1.5rem', textTransform: 'uppercase' }}>
                  Malpani M SoulStrings: Premium 3, 4, 4.5 &amp; 5 BHK Township Factsheet &amp; Pune Real Estate Matrix
                </h3>
              </div>
            </div>
            
            <div className="row">
              {/* Factsheet & Spatial Metrics Column */}
              <div className="col-lg-6 mb-4 mb-lg-0" style={{ paddingRight: '2rem' }}>
                <h4 style={{ color: '#fff', fontSize: '1.15rem', fontWeight: '600', marginBottom: '1rem', borderBottom: '1px solid rgba(255,255,255,0.1)', paddingBottom: '0.5rem' }}>
                  3 BHK, 4 BHK &amp; 5 BHK Configuration Detailing &amp; Specifications
                </h4>
                <p style={{ fontSize: '0.9rem', lineHeight: '1.8', marginBottom: '1.5rem' }}>
                  At <strong>Malpani M SoulStrings</strong> on the <strong>Baner Pashan Link Road</strong>, space is executed as the ultimate luxury. The project offers expansive <strong>3 BHK Premium (1450+ Sq.Ft. Carpet)</strong>, <strong>4 BHK Ultra-Luxury (1950+ to 2600 Sq.Ft. Carpet)</strong>, alongside limited-edition <strong>5 BHK Duplexes and Sky Penthouses</strong> (up to 4,500+ sq.ft.). Designed with 100% Vastu-compliant cardinal alignments, every estate features east-west entries to maximize natural light and cool mountain breezes from the neighboring Sus Hills.
                </p>
                
                <div className="table-responsive mb-3">
                  <table style={{ width: '100%', fontSize: '0.85rem', color: 'rgba(255,255,255,0.7)', borderCollapse: 'collapse' }}>
                    <thead>
                      <tr style={{ borderBottom: '2px solid rgba(212,175,55,0.3)', textAlign: 'left' }}>
                        <th style={{ padding: '0.5rem 0', color: '#fff' }}>Metric / Parameter</th>
                        <th style={{ padding: '0.5rem 0', color: '#fff' }}>Project Specifications &amp; Details</th>
                      </tr>
                    </thead>
                    <tbody>
                      <tr style={{ borderBottom: '1px solid rgba(255,255,255,0.1)' }}>
                        <td style={{ padding: '0.6rem 0', fontWeight: '600', color: '#d4af37' }}>MahaRERA Registration</td>
                        <td style={{ padding: '0.6rem 0' }}>P52100076782 (Wing B) | P52100055678 (Wing C)</td>
                      </tr>
                      <tr style={{ borderBottom: '1px solid rgba(255,255,255,0.1)' }}>
                        <td style={{ padding: '0.6rem 0', fontWeight: '600', color: '#d4af37' }}>Land Parcel &amp; Density</td>
                        <td style={{ padding: '0.6rem 0' }}>5.20 Acres | Ultra-Low Density | Only 455 Residences</td>
                      </tr>
                      <tr style={{ borderBottom: '1px solid rgba(255,255,255,0.1)' }}>
                        <td style={{ padding: '0.6rem 0', fontWeight: '600', color: '#d4af37' }}>3 BHK Floor Space</td>
                        <td style={{ padding: '0.6rem 0' }}>1450 - 1650 Sq.Ft. Carpet Area with Private Sundeck</td>
                      </tr>
                      <tr style={{ borderBottom: '1px solid rgba(255,255,255,0.1)' }}>
                        <td style={{ padding: '0.6rem 0', fontWeight: '600', color: '#d4af37' }}>4 BHK Floor Space</td>
                        <td style={{ padding: '0.6rem 0' }}>1950 - 2600 Sq.Ft. Carpet Area with Private Elevator Core</td>
                      </tr>
                      <tr style={{ borderBottom: '1px solid rgba(255,255,255,0.1)' }}>
                        <td style={{ padding: '0.6rem 0', fontWeight: '600', color: '#d4af37' }}>5 BHK &amp; Sky Duplexes</td>
                        <td style={{ padding: '0.6rem 0' }}>3400 - 4500+ Sq.Ft. Double-Height Living &amp; Private Terraces</td>
                      </tr>
                      <tr style={{ borderBottom: '1px solid rgba(255,255,255,0.1)' }}>
                        <td style={{ padding: '0.6rem 0', fontWeight: '600', color: '#d4af37' }}>Premium Finishes</td>
                        <td style={{ padding: '0.6rem 0' }}>Imported Italian Marble, European Sanitary Ware, Acoustic DGU Glazing</td>
                      </tr>
                    </tbody>
                  </table>
                </div>
              </div>

              {/* Market Dynamics Column */}
              <div className="col-lg-6" style={{ paddingLeft: '2rem', borderLeft: '1px solid rgba(212,175,55,0.1)' }}>
                <h4 style={{ color: '#fff', fontSize: '1.15rem', fontWeight: '600', marginBottom: '1rem', borderBottom: '1px solid rgba(255,255,255,0.1)', paddingBottom: '0.5rem' }}>
                  Pune Real Estate Market, Baner, Pashan &amp; Mahalunge Corridor Dynamics
                </h4>
                <p style={{ fontSize: '0.9rem', lineHeight: '1.8', marginBottom: '1rem' }}>
                  The <strong>Pune West Real Estate Market</strong> has witnessed a major structural transformation. Discerning high-net-worth individuals, tech executives from Hinjewadi, doctors from Jupiter/Manipal hospitals, and global NRI investors are choosing the <strong>Baner-Pashan Link Road</strong> over crowded high-rises in Wakad, Mahalunge, and central Baner.
                </p>
                <p style={{ fontSize: '0.9rem', lineHeight: '1.8', marginBottom: '1rem' }}>
                  With steady <strong>10.5% CAGR capital appreciation</strong> along the Baner-Pashan growth belt, driven by the upcoming <strong>Pune Metro Line 3</strong> and the direct 12-minute expressway bypass to Hinjewadi Phase 1, investing in <strong>Malpani M SoulStrings</strong> guarantees both superior lifestyle elevation and robust wealth preservation.
                </p>
                <p style={{ fontSize: '0.9rem', lineHeight: '1.8' }}>
                  By combining vehicle-free central podiums, monolithic Mivan earthquake-resistant construction, and a 3-tier clubhouse with temperature-controlled infinity pools, Malpani M SoulStrings stands as Pune West's benchmark residential landmark.
                </p>
              </div>
            </div>

            {/* Proximity & Connectivity Table */}
            <div className="row mt-5 pt-4" style={{ borderTop: '1px solid rgba(255,255,255,0.05)' }}>
              <div className="col-lg-6 mb-4 mb-lg-0" style={{ paddingRight: '2rem' }}>
                <h4 style={{ color: '#fff', fontSize: '1.15rem', fontWeight: '600', marginBottom: '1rem', borderBottom: '1px solid rgba(255,255,255,0.1)', paddingBottom: '0.5rem' }}>
                  Strategic Proximity &amp; Commute Matrix
                </h4>
                <div className="table-responsive">
                  <table style={{ width: '100%', fontSize: '0.85rem', color: 'rgba(255,255,255,0.7)', borderCollapse: 'collapse' }}>
                    <thead>
                      <tr style={{ borderBottom: '2px solid rgba(212,175,55,0.3)', textAlign: 'left' }}>
                        <th style={{ padding: '0.5rem 0', color: '#fff' }}>Destination Hub</th>
                        <th style={{ padding: '0.5rem 0', color: '#fff' }}>Distance / Travel Time</th>
                      </tr>
                    </thead>
                    <tbody>
                      <tr style={{ borderBottom: '1px solid rgba(255,255,255,0.1)' }}>
                        <td style={{ padding: '0.6rem 0', fontWeight: '600', color: '#d4af37' }}>Hinjewadi IT Park (Phase 1)</td>
                        <td style={{ padding: '0.6rem 0' }}>~12 Minutes (8.2 km)</td>
                      </tr>
                      <tr style={{ borderBottom: '1px solid rgba(255,255,255,0.1)' }}>
                        <td style={{ padding: '0.6rem 0', fontWeight: '600', color: '#d4af37' }}>Balewadi High Street</td>
                        <td style={{ padding: '0.6rem 0' }}>~8 Minutes (2.4 km)</td>
                      </tr>
                      <tr style={{ borderBottom: '1px solid rgba(255,255,255,0.1)' }}>
                        <td style={{ padding: '0.6rem 0', fontWeight: '600', color: '#d4af37' }}>Mumbai-Pune Expressway (NH 48)</td>
                        <td style={{ padding: '0.6rem 0' }}>~10 Minutes (1.1 km)</td>
                      </tr>
                      <tr style={{ borderBottom: '1px solid rgba(255,255,255,0.1)' }}>
                        <td style={{ padding: '0.6rem 0', fontWeight: '600', color: '#d4af37' }}>Jupiter Hospital &amp; Manipal Hospital</td>
                        <td style={{ padding: '0.6rem 0' }}>~8 Minutes (3.2 km)</td>
                      </tr>
                      <tr style={{ borderBottom: '1px solid rgba(255,255,255,0.1)' }}>
                        <td style={{ padding: '0.6rem 0', fontWeight: '600', color: '#d4af37' }}>The Orchid School &amp; VIBGYOR High</td>
                        <td style={{ padding: '0.6rem 0' }}>~5 to 10 Minutes</td>
                      </tr>
                    </tbody>
                  </table>
                </div>
              </div>

              {/* Engineering, Security & Bank Approvals */}
              <div className="col-lg-6" style={{ paddingLeft: '2rem', borderLeft: '1px solid rgba(212,175,55,0.1)' }}>
                <h4 style={{ color: '#fff', fontSize: '1.15rem', fontWeight: '600', marginBottom: '1rem', borderBottom: '1px solid rgba(255,255,255,0.1)', paddingBottom: '0.5rem' }}>
                  Engineering Innovation &amp; Gated Sanctuary Highlights
                </h4>
                <p style={{ fontSize: '0.9rem', lineHeight: '1.8', marginBottom: '1rem' }}>
                  Malpani M SoulStrings utilizes state-of-the-art <strong>Mivan monolithic formwork technology</strong> to guarantee superior structural durability and earthquake resistance. To shield the luxury interiors from external dust and noise, every apartment is fitted with high-performance <strong>Double-Glazed Units (DGU)</strong> for thermal and acoustic isolation.
                </p>
                <p style={{ fontSize: '0.9rem', lineHeight: '1.8', marginBottom: '1rem' }}>
                  The community features an advanced <strong>3-tier digital surveillance network</strong> including video door phones, RFID vehicle screening, and 24/7 CCTV parameters with dedicated EV charging ports for every parking slot.
                </p>
                <p style={{ fontSize: '0.9rem', lineHeight: '1.8' }}>
                  <strong>Bank Approvals:</strong> Approved for maximum funding by SBI, HDFC Bank, ICICI Bank, and Axis Bank with customized construction-linked schedules.
                </p>
              </div>
            </div>
          </div>

          {/* Master Pune Real Estate & Keyword Dominance Cloud */}
          <div className="row mt-4 pt-4" style={{ borderTop: '1px solid rgba(212,175,55,0.1)' }}>
            <div className="col-12 text-center">
              <p style={{ fontSize: '0.85rem', color: '#d4af37', fontWeight: 'bold', margin: '1rem 0 0.8rem 0', textTransform: 'uppercase', letterSpacing: '1px' }}>
                Pune Real Estate Search Hub &amp; Micro-Market Directory:
              </p>
              <div style={{ display: 'flex', flexWrap: 'wrap', justifyContent: 'center', gap: '10px 18px', lineHeight: '1.8' }}>
                <Link href="/" style={{ fontSize: '0.78rem', color: 'rgba(255,255,255,0.5)', textDecoration: 'none' }}>Malpani M SoulStrings Baner Pashan Link Road Pune</Link>
                <Link href="/3bhk-luxury-malpani-m-soulstrings-baner-pashan-link-road" style={{ fontSize: '0.78rem', color: 'rgba(255,255,255,0.5)', textDecoration: 'none' }}>3 BHK in Baner</Link>
                <Link href="/4bhk-luxury-malpani-m-soulstrings-baner-pashan-link-road" style={{ fontSize: '0.78rem', color: 'rgba(255,255,255,0.5)', textDecoration: 'none' }}>4 BHK in Baner Pashan Link Road</Link>
                <Link href="/blog-malpani-m-soulstrings-baner-pashan-link-road/4-5-bhk-luxury-apartments-in-baner-mahalunge-corridor-pune" style={{ fontSize: '0.78rem', color: 'rgba(255,255,255,0.5)', textDecoration: 'none' }}>4.5 BHK in Baner</Link>
                <Link href="/blog-malpani-m-soulstrings-baner-pashan-link-road/4-5-bhk-luxury-apartments-in-baner-mahalunge-corridor-pune" style={{ fontSize: '0.78rem', color: 'rgba(255,255,255,0.5)', textDecoration: 'none' }}>4.5 BHK in Mahalunge</Link>
                <Link href="/5bhk-duplex-malpani-m-soulstrings-baner-pashan-link-road" style={{ fontSize: '0.78rem', color: 'rgba(255,255,255,0.5)', textDecoration: 'none' }}>5 BHK Sky Duplex Baner</Link>
                <Link href="/penthouse-luxury-malpani-m-soulstrings-baner-pashan-link-road" style={{ fontSize: '0.78rem', color: 'rgba(255,255,255,0.5)', textDecoration: 'none' }}>Luxury Penthouses Baner Pashan</Link>
                <Link href="/flats-near-hinjewadi-it-park-pune-malpani-m-soulstrings" style={{ fontSize: '0.78rem', color: 'rgba(255,255,255,0.5)', textDecoration: 'none' }}>Flats Near Hinjewadi IT Park</Link>
                <Link href="/luxury-apartments-in-balewadi-pune-malpani-m-soulstrings" style={{ fontSize: '0.78rem', color: 'rgba(255,255,255,0.5)', textDecoration: 'none' }}>Balewadi High Street Real Estate</Link>
                <Link href="/premium-residences-near-aundh-pune-malpani-m-soulstrings" style={{ fontSize: '0.78rem', color: 'rgba(255,255,255,0.5)', textDecoration: 'none' }}>Premium Residences Near Aundh</Link>
                <Link href="/wakad-to-baner-real-estate-upgrade-malpani-m-soulstrings" style={{ fontSize: '0.78rem', color: 'rgba(255,255,255,0.5)', textDecoration: 'none' }}>Wakad to Baner Upgrade</Link>
                <Link href="/pashan-sus-road-luxury-projects-malpani-m-soulstrings" style={{ fontSize: '0.78rem', color: 'rgba(255,255,255,0.5)', textDecoration: 'none' }}>Pashan Sus Road Projects</Link>
                <Link href="/blog-malpani-m-soulstrings-baner-pashan-link-road/simplex-vs-duplex-vs-sky-villas-luxury-estates-pune" style={{ fontSize: '0.78rem', color: 'rgba(255,255,255,0.5)', textDecoration: 'none' }}>Sky Villas in Baner</Link>
                <Link href="/blog-malpani-m-soulstrings-baner-pashan-link-road/simplex-vs-duplex-vs-sky-villas-luxury-estates-pune" style={{ fontSize: '0.78rem', color: 'rgba(255,255,255,0.5)', textDecoration: 'none' }}>Simplex &amp; Duplex Estates Pune</Link>
                <Link href="/blog-malpani-m-soulstrings-baner-pashan-link-road/township-vs-low-density-luxury-living-baner-pashan-link-road" style={{ fontSize: '0.78rem', color: 'rgba(255,255,255,0.5)', textDecoration: 'none' }}>Township Projects in Baner</Link>
                <Link href="/blog-malpani-m-soulstrings-baner-pashan-link-road/koregaon-park-to-baner-pashan-luxury-relocation-guide" style={{ fontSize: '0.78rem', color: 'rgba(255,255,255,0.5)', textDecoration: 'none' }}>Koregaon Park to Baner</Link>
                <Link href="/blog-malpani-m-soulstrings-baner-pashan-link-road/kharadi-it-corridor-vs-hinjewadi-west-pune-luxury-living" style={{ fontSize: '0.78rem', color: 'rgba(255,255,255,0.5)', textDecoration: 'none' }}>Kharadi vs Baner Real Estate</Link>
                <Link href="/blog-malpani-m-soulstrings-baner-pashan-link-road/mumbai-hni-relocating-to-pune-west-luxury-corridor-guide" style={{ fontSize: '0.78rem', color: 'rgba(255,255,255,0.5)', textDecoration: 'none' }}>Mumbai HNI Luxury Pune Homes</Link>
                <Link href="/blog-malpani-m-soulstrings-baner-pashan-link-road/kothrud-prabhat-road-to-baner-pashan-luxury-homebuyer-guide" style={{ fontSize: '0.78rem', color: 'rgba(255,255,255,0.5)', textDecoration: 'none' }}>Kothrud to Baner Upgrade</Link>
                <Link href="/blog-malpani-m-soulstrings-baner-pashan-link-road/model-colony-shivajinagar-to-baner-pashan-upgrade-guide" style={{ fontSize: '0.78rem', color: 'rgba(255,255,255,0.5)', textDecoration: 'none' }}>Model Colony to Baner Pashan</Link>
                <Link href="/blog-malpani-m-soulstrings-baner-pashan-link-road/viman-nagar-to-west-pune-luxury-property-migration-trends" style={{ fontSize: '0.78rem', color: 'rgba(255,255,255,0.5)', textDecoration: 'none' }}>Viman Nagar to Pune West</Link>
                <Link href="/blog-malpani-m-soulstrings-baner-pashan-link-road/bavdhan-chandni-chowk-vs-baner-pashan-real-estate-appreciation" style={{ fontSize: '0.78rem', color: 'rgba(255,255,255,0.5)', textDecoration: 'none' }}>Bavdhan vs Baner Pashan</Link>
                <Link href="/vastu-compliant-luxury-homes-pune-malpani-m-soulstrings-baner-pashan-link-road" style={{ fontSize: '0.78rem', color: 'rgba(255,255,255,0.5)', textDecoration: 'none' }}>Vastu Compliant Homes Pune</Link>
                <Link href="/nri-investment-malpani-m-soulstrings-baner-pashan-link-road" style={{ fontSize: '0.78rem', color: 'rgba(255,255,255,0.5)', textDecoration: 'none' }}>NRI Property Investment Pune</Link>
                <Link href="/compare-malpani-m-soulstrings-baner-pashan-link-road/pristine-lords-baner-malpani-m-soulstrings-baner-pashan-link-road" style={{ fontSize: '0.78rem', color: 'rgba(255,255,255,0.5)', textDecoration: 'none' }}>Pristine Lords Baner Alternative</Link>
                <Link href="/compare-malpani-m-soulstrings-baner-pashan-link-road/kohinoor-livience-baner-malpani-m-soulstrings-baner-pashan-link-road" style={{ fontSize: '0.78rem', color: 'rgba(255,255,255,0.5)', textDecoration: 'none' }}>Kohinoor Livience Aleenta Baner</Link>
                <Link href="/malpani-m-soulstrings-reviews-ratings-baner-pune" style={{ fontSize: '0.78rem', color: 'rgba(255,255,255,0.5)', textDecoration: 'none' }}>Malpani M Soulstrings Google Reviews</Link>
                <Link href="/flat-rates-price-trends-baner-pashan-link-road-malpani-m-soulstrings" style={{ fontSize: '0.78rem', color: 'rgba(255,255,255,0.5)', textDecoration: 'none' }}>Baner Real Estate Price Trends 2026</Link>
                <Link href="/malpani-m-soulstrings-construction-status-updates-possession" style={{ fontSize: '0.78rem', color: 'rgba(255,255,255,0.5)', textDecoration: 'none' }}>M Soulstrings MahaRERA Construction Status</Link>
                <Link href="/invest-in-malpani-estates-pune-growth-corridors" style={{ fontSize: '0.78rem', color: 'rgba(255,255,255,0.5)', textDecoration: 'none' }}>Malpani Estates Pune Growth Corridors</Link>
              </div>
            </div>
          </div>
        </div>
      </footer>

      {/* Mobile Sticky CTA Bar */}
      <div className="mobile-sticky-cta">
        <div className="cta-container">
          <a href="#" data-bs-toggle="modal" data-bs-target="#enquireModal" className="cta-brochure">Brochure</a>
          <a href="#" data-bs-toggle="modal" data-bs-target="#enquireModal" className="cta-enquire">Enquire Now</a>
        </div>
      </div>
    </>
  );
}
