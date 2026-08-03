import Link from 'next/link';

export const metadata = {
  title: 'Page Not Found | Malpani M SoulStrings',
  description: 'The page you are looking for does not exist. Explore premium 3 BHK, 4 BHK, and 5 BHK luxury estates at Malpani M SoulStrings in Baner Pashan Link Road, Pune.',
};

export default function NotFound() {
  return (
    <main className="container" style={{ padding: '10rem 0', minHeight: '80vh', textAlign: 'center' }}>
      <h1 className="gradient-text" style={{ fontSize: '4rem', marginBottom: '1rem' }}>404</h1>
      <h2 style={{ marginBottom: '2rem' }}>Page Not Found</h2>
      <p style={{ color: 'var(--color-text-muted)', marginBottom: '3rem', maxWidth: '600px', margin: '0 auto 3rem auto' }}>
        The luxury estate or information you are looking for seems to have been moved or doesn't exist. Let's get you back to exploring Pune's finest real estate.
      </p>
      
      <div style={{ display: 'flex', flexWrap: 'wrap', gap: '1rem', justifyContent: 'center' }}>
        <Link href="/" className="btn btn-primary" style={{ padding: '0.8rem 2rem' }}>
          Back to Home
        </Link>
        <Link href="/3bhk-luxury-malpani-m-soulstrings-baner-pashan-link-road" className="btn btn-outline" style={{ padding: '0.8rem 2rem' }}>
          View 3 BHK Residences
        </Link>
        <Link href="/4bhk-luxury-malpani-m-soulstrings-baner-pashan-link-road" className="btn btn-outline" style={{ padding: '0.8rem 2rem' }}>
          View 4 BHK Residences
        </Link>
      </div>
    </main>
  );
}
