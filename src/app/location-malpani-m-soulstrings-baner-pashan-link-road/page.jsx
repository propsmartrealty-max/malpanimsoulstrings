

import SchemaMarkup from '../../components/SchemaMarkup';
import Link from 'next/link';

export const metadata = {
  alternates: { canonical: '/location-malpani-m-soulstrings-baner-pashan-link-road' },
  title: 'Location Advantages of Malpani M SoulStrings | Baner Pashan Link Road',
  description: 'Discover why the Malpani m soulstrings baner pashan link road location is the most coveted real estate destination in West Pune, bridging Hinjewadi and Aundh.',
  keywords: [
    'Malpani m soulstrings baner pashan link road location',
    'Baner Pashan Link Road Pune real estate',
    'luxury flats near Wakad',
    'apartments near Mumbai Bangalore Highway',
    'apartments near Sus Road',
    'apartments near Baner Road',
    'West Pune luxury real estate'
  ],
  openGraph: {
    title: 'Location Advantages of Malpani M SoulStrings',
    description: 'Discover why the Baner-Pashan Link Road location is the most coveted real estate destination in West Pune.',
    url: 'https://www.malpanimsoulstrings.com/location',
    siteName: 'Malpani M SoulStrings',
    images: [
      {
        url: 'https://malpani-cms.firsteconomy.com/uploads/M_soul_strings_Desktop_Banner_Without_Text_0d38ce28d4.jpg',
        width: 1200,
        height: 630,
        alt: 'Malpani M SoulStrings Baner Pashan Link Road Location Map and Connectivity',
      }
    ],
    locale: 'en_IN',
    type: 'article',
  }
};

export default function LocationPage() {
  return (
    <main>

      <SchemaMarkup pageName="Strategic Location" pageUrl="/location-malpani-m-soulstrings-baner-pashan-link-road" />
      
      <div className="pillar-header" style={{ paddingTop: '120px', paddingBottom: '4rem', background: 'var(--color-surface)' }}>
        <div className="container">
          <div className="scarcity-badge fade-in-up" style={{ display: 'inline-block', marginBottom: '1rem' }}>
            <span className="material-symbols-outlined" style={{ fontSize: '1rem', verticalAlign: 'middle', marginRight: '0.2rem' }}>location_on</span>
            Prime Location
          </div>
          <h1 className="gradient-text" style={{ fontSize: '3rem', marginBottom: '1rem' }}>The Absolute Pinnacle of Baner-Pashan Link Road</h1>
          <p style={{ fontSize: '1.2rem', color: 'var(--color-text-muted)', maxWidth: '800px' }}>
            Unmatched connectivity bridging Hinjewadi and Aundh. Discover the most coveted real estate destination in West Pune.
          </p>
        </div>
      </div>

      <div className="pillar-content" style={{ padding: '4rem 0' }}>
        <div className="container" style={{ display: 'grid', gridTemplateColumns: '1fr 300px', gap: '3rem' }}>
          
          <article className="main-content">
            <p>You already know Baner. You appreciate the unmatched connectivity, the vibrant culinary scene on Balewadi High Street, and the dynamic energy of West Pune's luxury real estate corridor. But if you are looking for the absolute zenith of luxury within this thriving neighborhood, the search ends at the Malpani M SoulStrings project on Baner Pashan Link Road.</p>

            <h2>The Billionaire's Row of Pune</h2>
            <p>The Baner Pashan Link Road is the most exclusive address in the area, commanding the highest price appreciation among all West Pune corridors. <strong><Link href="/">Malpani M SoulStrings</Link></strong> is designed to be the crown jewel of this exact location — a landmark estate that redefines the city's skyline and sets a new benchmark for luxury living in this coveted micro-market.</p>

            <h2>Unrivaled Connectivity & Prestige</h2>
            <p>Why settle when you can have an entire ecosystem? The location offers immediate access to the Mumbai-Bangalore Highway while being nestled against the hills for zero-pollution living — all just 10 minutes from Jupiter Hospital. IT professionals benefit from a swift commute to Hinjewadi IT Park and the broader Pune tech corridor, while residents enjoy proximity to Balewadi High Street and University Circle without the traffic congestion.</p>

            <h2>The Final Upgrade in West Pune</h2>
            <p>Whether you currently reside in Aundh, Sus Road, Bavdhan, or Wakad, this project represents the definitive upgrade. It delivers premium living in Baner with the tranquility of Pashan, seamless access to the upcoming Pune Metro line, and effortless connectivity to Chandni Chowk — all within a single, meticulously planned estate.</p>
            
            <div className="map-container fade-in-up" style={{ marginTop: '3rem', borderRadius: '16px', overflow: 'hidden', boxShadow: '0 10px 30px rgba(0,0,0,0.1)' }}>
              <iframe 
                src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d15129.803923485458!2d73.77457781519777!3d18.553715383561957!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3bc2bec70409d57b%3A0xc6e4eb5fb6354ee9!2sBaner%20-%20Pashan%20Link%20Rd%2C%20Pune%2C%20Maharashtra!5e0!3m2!1sen!2sin!4v1716982400000!5m2!1sen!2sin" 
                width="100%" 
                height="450" 
                style={{ border: 0, display: 'block' }} 
                allowFullScreen="" 
                loading="lazy" 
                referrerPolicy="no-referrer-when-downgrade">
              </iframe>
            </div>
          </article>

          <aside className="sidebar">
            <div className="loc-card" style={{ padding: '1.5rem', borderRadius: '12px', position: 'sticky', top: '100px' }}>
              <h3 style={{ fontSize: '1.2rem', marginBottom: '1rem', color: 'var(--color-primary)' }}>Secure Your Masterpiece</h3>
              <p style={{ color: 'var(--color-text-muted)', fontSize: '0.9rem', marginBottom: '1.5rem' }}>Schedule a private site visit to experience the prime location firsthand.</p>
              <a href="#" data-bs-toggle="modal" data-bs-target="#enquireModal" className="btn btn-primary" style={{ width: '100%' }}>Enquire Now</a>
            </div>
          </aside>
          
        </div>
      </div>

    </main>
  );
}