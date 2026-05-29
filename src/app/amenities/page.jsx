import Navbar from '../../components/Navbar';
import Footer from '../../components/Footer';
import SchemaMarkup from '../../components/SchemaMarkup';
import Link from 'next/link';

export const metadata = {
  title: '35+ Luxury Amenities at Malpani M SoulStrings | Baner Pashan Link Road',
  description: 'Explore the world-class resort amenities at Malpani m soulstrings baner pashan link road. Featuring infinity pools, sports courts, and smart home automation.',
};

export default function AmenitiesPage() {
  return (
    <main>
      <Navbar />
      <SchemaMarkup />
      
      <div className="pillar-header" style={{ paddingTop: '120px', paddingBottom: '4rem', background: 'var(--color-surface)' }}>
        <div className="container">
          <div className="scarcity-badge fade-in-up" style={{ display: 'inline-block', marginBottom: '1rem' }}>
            <span className="material-symbols-outlined" style={{ fontSize: '1rem', verticalAlign: 'middle', marginRight: '0.2rem' }}>pool</span>
            Resort-Style Lifestyle
          </div>
          <h1 className="gradient-text" style={{ fontSize: '3rem', marginBottom: '1rem' }}>The Rise of Smart Home Automation in Pune's Luxury Residences</h1>
          <p style={{ fontSize: '1.2rem', color: 'var(--color-text-muted)', maxWidth: '800px' }}>
            Discover the 35+ world-class amenities and intuitive home automation that defines true luxury at Malpani M SoulStrings.
          </p>
        </div>
      </div>

      <div className="pillar-content" style={{ padding: '4rem 0' }}>
        <div className="container" style={{ display: 'grid', gridTemplateColumns: '1fr 300px', gap: '3rem' }}>
          
          <article className="main-content">
            <p>The definition of luxury in the Pune Real Estate Market is undergoing a rapid technological evolution. At the highly acclaimed <strong>Malpani m soulstrings baner pashan link road</strong> project, it is no longer sufficient for a residence to just boast Italian marble. The modern ultra-luxury buyer demands a living space that is intuitively integrated. Welcome to the era of the Smart Home at Malpani Estates.</p>

            <h2>Beyond the Basics: True Luxury at Malpani M SoulStrings</h2>
            <p>When we talk about luxury estates at <strong>Malpani M soultraings</strong>, we are talking about deeply integrated ecosystems. In our premium 4 BHK Estates on the Baner Pashan Link Road, a central hub controls everything from ambient lighting to advanced security. It is the definition of <strong>smart amenities apartments Pune</strong>. From the moment you enter, you are experiencing the finest <strong>gated community with security Pune</strong> has to offer.</p>

            <h2>35+ World-Class Amenities: The Epicenter of Baner</h2>
            <p>Investing in <strong>Malpani m soulstrings baner pashan link road</strong> grants you exclusive access to a resort-style lifestyle. Residents enjoy unparalleled <strong>luxury apartments with swimming pool</strong> access, alongside a massive <strong>clubhouse apartments Baner</strong> facility. Fitness enthusiasts will thrive in our <strong>luxury apartments with gym</strong> and <strong>apartments with jogging track</strong>. For competitive play, we offer <strong>apartments with sports amenities Pune</strong>, featuring dedicated <strong>apartments with basketball court</strong> and <strong>apartments with net cricket</strong> zones.</p>

            <h2>Wellness, Nature, and Community</h2>
            <p>For high-net-worth individuals, holistic well-being is non-negotiable. M SoulStrings features <strong>premium apartments with wellness zone</strong> and <strong>luxury homes with reflexology path</strong> integrations. Families will love the sprawling <strong>luxury apartments with kids play area</strong> and dedicated <strong>apartments with senior citizen zone</strong> spaces. Experience vast <strong>luxury apartments with open spaces</strong> and beautifully curated <strong>luxury homes with landscaped gardens</strong>. We even cater to your furry friends with our exclusive <strong>luxury apartments with pet park</strong>. Entertain guests in the grand <strong>luxury apartments with amphitheatre</strong>, proving that this development offers the absolute best <strong>lifestyle amenities Baner Pune</strong> has ever seen.</p>
          </article>

          <aside className="sidebar">
            <div className="loc-card" style={{ padding: '1.5rem', borderRadius: '12px', position: 'sticky', top: '100px' }}>
              <h3 style={{ fontSize: '1.2rem', marginBottom: '1rem', color: 'var(--color-primary)' }}>Ready to elevate your lifestyle?</h3>
              <p style={{ color: 'var(--color-text-muted)', fontSize: '0.9rem', marginBottom: '1.5rem' }}>Discover the pinnacle of luxury living.</p>
              <a href="#" data-bs-toggle="modal" data-bs-target="#enquireModal" className="btn btn-primary" style={{ width: '100%' }}>Enquire Now</a>
            </div>
          </aside>
          
        </div>
      </div>

      <Footer />
    </main>
  );
}