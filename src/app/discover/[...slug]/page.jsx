import SchemaMarkup from '@/components/SchemaMarkup';
import Image from 'next/image';
import VRModal from '@/components/VRModal';
import InteractiveMasterplan from '@/components/InteractiveMasterplan';
import EmiCalculator from '@/components/EmiCalculator';
import Testimonials from '@/components/Testimonials';
import FloorPlanGallery from '@/components/FloorPlanGallery';
import fs from 'fs';
import path from 'path';
import Link from 'next/link';
import { getAllProgrammaticSlugs } from '@/data/programmaticData';

export const revalidate = 604800; // 1 week (in seconds)
export const dynamicParams = true; // Fallback for 13,994 remaining routes

export async function generateStaticParams() {
  const allSlugs = getAllProgrammaticSlugs();
  return allSlugs.map(slug => ({
    slug: slug.split('/')
  }));
}

export async function generateMetadata({ params }) {
  const { slug } = await params;
  const keywordStr = slug.join(' ').replace(/-/g, ' ');
  const keyword = keywordStr.replace(/\b\w/g, c => c.toUpperCase());
  const description = `Explore premium ${keyword} at Malpani M SoulStrings in Pune West. Discover low-density luxury estates with 35+ premium amenities on Baner-Pashan Link Road.`;
  const url = `https://www.malpanimsoulstrings.com/discover/${slug.join('/')}`;
  
  return {
    title: `${keyword} - Malpani M SoulStrings Pune`,
    description: description,
    alternates: {
      canonical: url
    },
    openGraph: {
      title: `${keyword} - Malpani M SoulStrings`,
      description: description,
      url: url,
      siteName: 'Malpani M SoulStrings',
      images: [
        {
          url: 'https://malpani-cms.firsteconomy.com/uploads/M_soul_strings_Desktop_Banner_Without_Text_0d38ce28d4.jpg',
          width: 1200,
          height: 630,
          alt: `${keyword} in Baner Pashan Link Road`,
        }
      ],
      locale: 'en_IN',
      type: 'website',
    },
    twitter: {
      card: 'summary_large_image',
      title: `${keyword} - Malpani M SoulStrings`,
      description: description,
      images: ['https://malpani-cms.firsteconomy.com/uploads/M_soul_strings_Desktop_Banner_Without_Text_0d38ce28d4.jpg'],
    }
  };
}

export default async function ProgrammaticPage({ params }) {
  const { slug } = await params;
  const keywordStr = slug.join(' ').replace(/-/g, ' ');
  const keyword = keywordStr.replace(/\b\w/g, c => c.toUpperCase());
  const pageUrl = `/discover/${slug.join('/')}`;
  const videoSchema = {
    "@context": "https://schema.org",
    "@type": "VideoObject",
    "name": "Malpani M SoulStrings - Ultra Premium 3 & 4 BHK Estates",
    "description": "Experience the epitome of luxury real estate in Baner-Pashan Link Road, Pune. Virtual tour of the M SoulStrings masterpiece by Malpani Estates.",
    "thumbnailUrl": [
      "https://malpani-cms.firsteconomy.com/uploads/M_soul_strings_Desktop_Banner_Without_Text_0d38ce28d4.jpg"
    ],
    "uploadDate": "2024-05-01T08:00:00+08:00",
    "duration": "PT0M30S",
    "contentUrl": "https://malpani-cms.firsteconomy.com/uploads/video_51_98e1310033.mp4",
    "embedUrl": "https://malpani-cms.firsteconomy.com/uploads/video_51_98e1310033.mp4"
  };

  const faqSchema = {
    "@context": "https://schema.org",
    "@type": "FAQPage",
    "mainEntity": [
      {
        "@type": "Question",
        "name": "What is the price of Malpani M Soulstrings?",
        "acceptedAnswer": {
          "@type": "Answer",
          "text": "The Malpani M Soulstrings price is highly competitive for the ultra-luxury segment in Pune West. Because pricing varies based on floor bands, configurations (3 BHK vs 4 BHK), and custom specifications, we recommend submitting an inquiry to get the exact and updated pricing sheet."
        }
      },
      {
        "@type": "Question",
        "name": "How can I download the Malpani M Soulstrings floor plan and brochure?",
        "acceptedAnswer": {
          "@type": "Answer",
          "text": "To view the detailed layouts, simply fill out the smart contact form at the bottom of this page. You will immediately receive access to the official Malpani M Soulstrings brochure pdf and the complete Malpani M Soulstrings floor plan gallery."
        }
      },
      {
        "@type": "Question",
        "name": "What is the Malpani M Soulstrings RERA number?",
        "acceptedAnswer": {
          "@type": "Answer",
          "text": "The project is strictly MahaRERA compliant. The official Malpani M Soulstrings RERA number is P52100076782 (Wing B) and P52100055678 (Wing C)."
        }
      },
      {
        "@type": "Question",
        "name": "How can I check the Malpani M Soulstrings construction update?",
        "acceptedAnswer": {
          "@type": "Answer",
          "text": "Construction is proceeding at an accelerated pace. To get the latest, real-time Malpani M Soulstrings construction update and timeline for possession, please contact our VIP sales team via the WhatsApp widget."
        }
      }
    ]
  };

  const contentDir = path.join(process.cwd(), 'src', 'content', 'blog');
  let blogFiles = [];
  try {
    blogFiles = fs.readdirSync(contentDir).filter(f => f.endsWith('.md')).slice(0, 3);
  } catch (e) {
    // Directory might not exist
  }

  return (
    <main>
      <SchemaMarkup pageName={keyword} pageUrl={pageUrl} />
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(faqSchema) }} />
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(videoSchema) }} />
      <section id="hero" className="hero">
      <div className="hero-bg">
        <video src="https://malpani-cms.firsteconomy.com/uploads/video_51_98e1310033.mp4" preload="metadata" poster="https://malpani-cms.firsteconomy.com/uploads/M_soul_strings_Desktop_Banner_Without_Text_0d38ce28d4.jpg" autoPlay loop muted playsInline className="video-bg" aria-label="Aerial view of Malpani M SoulStrings luxury estate in Baner-Pashan Link Road, Pune"></video>
        <div className="hero-overlay"></div>
      </div>
      <div className="hero-content">
        <h1 className="hero-title" aria-label="Malpani M SoulStrings" style={{ display: 'flex', flexDirection: 'column', gap: '0.5rem' }}>
          <span>Malpani M SoulStrings</span>
          <span style={{ fontSize: 'clamp(1rem, 2vw, 1.5rem)', fontWeight: '400', letterSpacing: '3px', textTransform: 'uppercase', color: 'rgba(255,255,255,0.8)' }}>
            Ultra-Premium 3, 4, 5 BHK, Duplex & Penthouse Estates in Baner Pashan Link Road
          </span>
        </h1>
        <p className="hero-subtitle fade-in-up" >The Preferred Choice for Elite Buyers from Aundh, Shivajinagar, Balewadi, and Wakad.</p>
        <a href="#masterpiece" className="btn btn-outline pulse-vip fade-in-up" >Enter The Legacy</a>
      </div>
    </section>

    {/* Masterpiece Narrative Section */}
    <section id="masterpiece" className="section masterpiece" >
      <div className="parallax-text" data-speed="0.2">MASTERPIECE</div>
      <div className="container" >
        <div className="fade-in-up" >
          <h2 className="section-title gradient-text" >The Crown Jewel of the<br />Pune Luxury Real Estate Market</h2>
          <p className="section-desc" >
            Malpani M SoulStrings is not just a residence; it is a visionary masterpiece of signature luxury. As one of the most iconic towers in Pune, this project stands as the definitive choice for discerning luxury buyers, offering premium 3 BHK, 4 BHK, 5 BHK flats, Duplexes, and Penthouses for sale in Baner-Pashan Link Road. It is the preferred destination where buyers from Aundh, Shivajinagar, Balewadi, Pashan, and Wakad converge to secure the absolute pinnacle of luxury. When you seek the highest echelon of the West Pune real estate market, M SoulStrings is the undeniable answer.
          </p>
        </div>
      </div>
    </section>

    {/* About Section */}
    <section id="about" className="section about">
      <div className="container about-grid">
        <div className="about-text slide-in-left">
          <h2 className="section-title">The Epitome of Exclusivity</h2>
          <p className="section-desc">Malpani M SoulStrings by Malpani Estates is destined to be the new realty capital of the city, completely redefining the Baner-Pashan Link Road real estate market. For those looking to buy 3bhk luxury homes, 4bhk residences, 5bhk residences, or penthouse homes, this landmark project offers bigger spacious apartments designed as ultimate trophy homes with state-of-the-art amenities, setting a new benchmark for premium luxury homes in pune.</p>
          <div className="stats" >
            <div className="stat-item">
              <span className="stat-value" >1,597,548</span>
              <span className="stat-label">Sq.Ft Construction Area</span>
            </div>
            <div className="stat-item">
              <span className="stat-value" >455</span>
              <span className="stat-label">Exclusive 3, 4, 5 BHK & Penthouses</span>
            </div>
            <div className="stat-item">
              <span className="stat-value" >04</span>
              <span className="stat-label">Luxury Wings</span>
            </div>
            <div className="stat-item">
              <span className="stat-value" >MAHARERA APPROVED</span>
              <span className="stat-label" >Wing B: P52100076782<br />Wing C: P52100055678</span>
            </div>
          </div>
        </div>
        <div className="about-image slide-in-right">
          <Image src="https://malpani-cms.firsteconomy.com/uploads/About_Project_27b8c57d51.png" alt="Malpani M SoulStrings Baner Pashan Link Road real estate" width={1200} height={800} sizes="(max-width: 768px) 100vw, 50vw" style={{ width: "100%", height: "auto" }} />
        </div>
      </div>
    </section>

    {/* Master Plan & Floor Plans */}
    <section id="floor-plans" className="section floor-plans" style={{ background: 'var(--color-surface)' }}>
      <div className="parallax-text" data-speed="0.15">LAYOUTS</div>
      <div className="container" >
        <div className="section-header fade-in-up">
          <div className="scarcity-badge fade-in-up" >
            <span className="material-symbols-outlined" >hourglass_empty</span>
            Only <span id="scarcity-counter" >45</span> Premium Units Remaining
          </div>
          <h2 className="section-title gradient-text">Project Master Plan & Layouts</h2>
          <p className="section-desc">Explore the grand vision of M SoulStrings and our expansive 3BHK, 4BHK, 5BHK, Duplex, and Penthouse residences.</p>
        </div>
        
        {/* Interactive Floor Plan Gallery */}
        <div style={{ marginTop: '3rem', marginBottom: '3rem' }}>
          <FloorPlanGallery />
        </div>
        
        <div className="vr-hub-container fade-in-up" style={{ marginTop: '4rem', textAlign: 'center' }}>
          <div className="loc-card" style={{ padding: '3rem', borderRadius: '12px', display: 'inline-block', maxWidth: '800px' }}>
            <span className="material-symbols-outlined" style={{ fontSize: '3rem', color: 'var(--color-primary)', marginBottom: '1rem' }}>view_in_ar</span>
            <h3 style={{ marginBottom: '1rem' }}>Immersive 3D Walkthrough</h3>
            <p style={{ color: 'var(--color-text-muted)', marginBottom: '2rem' }}>Step inside M SoulStrings from anywhere in the world. Experience the sheer scale and luxury of our Show Flats in stunning Virtual Reality.</p>
            <button data-bs-toggle="modal" data-bs-target="#vrModal" className="btn btn-primary" style={{ fontSize: "1.2rem", padding: "1rem 3rem" }}>Launch VR Tour (Native)</button>
          </div>
        </div>
      </div>
    </section>

    {/* Specifications Section (Refined) */}
    <section id="specs" className="section specs" >
      <div className="container">
        <div className="section-header fade-in-up">
          <h2 className="section-title gradient-text">Ultra-Luxury Specifications</h2>
          <p className="section-desc">Every 3 BHK, 4 BHK, 5 BHK, Duplex, and Penthouse residence at Malpani M SoulStrings is crafted with the highest standards of luxury.</p>
        </div>
        <div className="specs-grid fade-in-up" style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(250px, 1fr))', gap: '2rem' }}>
          <div className="spec-card loc-card spec-interactive" style={{ padding: '2.5rem', borderRadius: '12px', textAlign: 'center' }}>
            <span className="material-symbols-outlined spec-icon" style={{ fontSize: '3rem', color: 'var(--color-primary)', marginBottom: '1rem', transition: 'all 0.3s ease' }}>floor</span>
            <h3 style={{ fontSize: '1.5rem', marginBottom: '1rem' }}>Premium Flooring</h3>
            <p style={{ color: 'var(--color-text-muted)', lineHeight: '1.6' }}>Imported Italian marble in the living and dining areas, accompanied by premium engineered wooden flooring in the master bedroom.</p>
          </div>
          <div className="spec-card loc-card spec-interactive" style={{ padding: '2.5rem', borderRadius: '12px', textAlign: 'center' }}>
            <span className="material-symbols-outlined spec-icon" style={{ fontSize: '3rem', color: 'var(--color-primary)', marginBottom: '1rem', transition: 'all 0.3s ease' }}>smart_toy</span>
            <h3 style={{ fontSize: '1.5rem', marginBottom: '1rem' }}>Smart Home Automation</h3>
            <p style={{ color: 'var(--color-text-muted)', lineHeight: '1.6' }}>State-of-the-art integrated smart home systems controlling lighting, climate, and advanced multi-tier biometric security.</p>
          </div>
          <div className="spec-card loc-card spec-interactive" style={{ padding: '2.5rem', borderRadius: '12px', textAlign: 'center' }}>
            <span className="material-symbols-outlined spec-icon" style={{ fontSize: '3rem', color: 'var(--color-primary)', marginBottom: '1rem', transition: 'all 0.3s ease' }}>kitchen</span>
            <h3 style={{ fontSize: '1.5rem', marginBottom: '1rem' }}>Bespoke Kitchens</h3>
            <p style={{ color: 'var(--color-text-muted)', lineHeight: '1.6' }}>Fully modular premium kitchens equipped with top-tier international branded fittings, hob, and chimney systems.</p>
          </div>
          <div className="spec-card loc-card spec-interactive" style={{ padding: '2.5rem', borderRadius: '12px', textAlign: 'center' }}>
            <span className="material-symbols-outlined spec-icon" style={{ fontSize: '3rem', color: 'var(--color-primary)', marginBottom: '1rem', transition: 'all 0.3s ease' }}>bathtub</span>
            <h3 style={{ fontSize: '1.5rem', marginBottom: '1rem' }}>Designer Bathrooms</h3>
            <p style={{ color: 'var(--color-text-muted)', lineHeight: '1.6' }}>European standard CP and sanitary fittings (Grohe/Kohler or equivalent), glass shower partitions, and exquisite wall tiling.</p>
          </div>
        </div>
      </div>
    </section>

    {/* Comprehensive Amenities Section (Refined) */}
    <section id="amenities" className="section amenities" style={{ background: 'var(--color-surface)' }}>
      <div className="container">
        <div className="section-header fade-in-up">
          <h2 className="section-title gradient-text">35+ World-Class Amenities</h2>
          <p className="section-desc">A masterfully curated ecosystem designed for absolute luxury, wellness, and entertainment.</p>
        </div>
        
        <div className="amenities-categories fade-in-up" style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(350px, 1fr))', gap: '3rem' }}>
          
          {/* Wellness & Aqua */}
          <div className="amenity-category loc-card" style={{ padding: '2.5rem', borderRadius: '12px' }}>
            <h3 style={{ marginBottom: '1.5rem', color: 'var(--color-primary)', display: 'flex', alignItems: 'center', gap: '0.5rem' }}>
              <span className="material-symbols-outlined">water_drop</span> Wellness & Aqua
            </h3>
            <ul className="premium-amenity-grid" style={{ listStyle: 'none', padding: 0, display: 'grid', gridTemplateColumns: '1fr 1fr', gap: '1rem' }}>
              <li style={{ display: 'flex', alignItems: 'center', gap: '0.5rem', color: 'var(--color-text-muted)' }}><span className="material-symbols-outlined" style={{ color: 'var(--color-primary)', fontSize: '1.2rem' }}>check_circle</span> Swimming Pool</li>
              <li style={{ display: 'flex', alignItems: 'center', gap: '0.5rem', color: 'var(--color-text-muted)' }}><span className="material-symbols-outlined" style={{ color: 'var(--color-primary)', fontSize: '1.2rem' }}>check_circle</span> Spa & Salon</li>
              <li style={{ display: 'flex', alignItems: 'center', gap: '0.5rem', color: 'var(--color-text-muted)' }}><span className="material-symbols-outlined" style={{ color: 'var(--color-primary)', fontSize: '1.2rem' }}>check_circle</span> Pool Side Cabanas</li>
              <li style={{ display: 'flex', alignItems: 'center', gap: '0.5rem', color: 'var(--color-text-muted)' }}><span className="material-symbols-outlined" style={{ color: 'var(--color-primary)', fontSize: '1.2rem' }}>check_circle</span> Kids Pool</li>
              <li style={{ display: 'flex', alignItems: 'center', gap: '0.5rem', color: 'var(--color-text-muted)' }}><span className="material-symbols-outlined" style={{ color: 'var(--color-primary)', fontSize: '1.2rem' }}>check_circle</span> Outdoor Shower</li>
              <li style={{ display: 'flex', alignItems: 'center', gap: '0.5rem', color: 'var(--color-text-muted)' }}><span className="material-symbols-outlined" style={{ color: 'var(--color-primary)', fontSize: '1.2rem' }}>check_circle</span> Reflexology Path</li>
            </ul>
          </div>

          {/* Sports & Fitness */}
          <div className="amenity-category loc-card" style={{ padding: '2.5rem', borderRadius: '12px' }}>
            <h3 style={{ marginBottom: '1.5rem', color: 'var(--color-primary)', display: 'flex', alignItems: 'center', gap: '0.5rem' }}>
              <span className="material-symbols-outlined">fitness_center</span> Sports & Fitness
            </h3>
            <ul className="premium-amenity-grid" style={{ listStyle: 'none', padding: 0, display: 'grid', gridTemplateColumns: '1fr 1fr', gap: '1rem' }}>
              <li style={{ display: 'flex', alignItems: 'center', gap: '0.5rem', color: 'var(--color-text-muted)' }}><span className="material-symbols-outlined" style={{ color: 'var(--color-primary)', fontSize: '1.2rem' }}>check_circle</span> Multifitness Area</li>
              <li style={{ display: 'flex', alignItems: 'center', gap: '0.5rem', color: 'var(--color-text-muted)' }}><span className="material-symbols-outlined" style={{ color: 'var(--color-primary)', fontSize: '1.2rem' }}>check_circle</span> Basketball Court</li>
              <li style={{ display: 'flex', alignItems: 'center', gap: '0.5rem', color: 'var(--color-text-muted)' }}><span className="material-symbols-outlined" style={{ color: 'var(--color-primary)', fontSize: '1.2rem' }}>check_circle</span> Net-cricket</li>
              <li style={{ display: 'flex', alignItems: 'center', gap: '0.5rem', color: 'var(--color-text-muted)' }}><span className="material-symbols-outlined" style={{ color: 'var(--color-primary)', fontSize: '1.2rem' }}>check_circle</span> Badminton Court</li>
              <li style={{ display: 'flex', alignItems: 'center', gap: '0.5rem', color: 'var(--color-text-muted)' }}><span className="material-symbols-outlined" style={{ color: 'var(--color-primary)', fontSize: '1.2rem' }}>check_circle</span> Pickle Ball Court</li>
              <li style={{ display: 'flex', alignItems: 'center', gap: '0.5rem', color: 'var(--color-text-muted)' }}><span className="material-symbols-outlined" style={{ color: 'var(--color-primary)', fontSize: '1.2rem' }}>check_circle</span> Jogging Trail</li>
            </ul>
          </div>

          {/* Club & Entertainment */}
          <div className="amenity-category loc-card" style={{ padding: '2.5rem', borderRadius: '12px' }}>
            <h3 style={{ marginBottom: '1.5rem', color: 'var(--color-primary)', display: 'flex', alignItems: 'center', gap: '0.5rem' }}>
              <span className="material-symbols-outlined">nightlife</span> Club & Social
            </h3>
            <ul className="premium-amenity-grid" style={{ listStyle: 'none', padding: 0, display: 'grid', gridTemplateColumns: '1fr 1fr', gap: '1rem' }}>
              <li style={{ display: 'flex', alignItems: 'center', gap: '0.5rem', color: 'var(--color-text-muted)' }}><span className="material-symbols-outlined" style={{ color: 'var(--color-primary)', fontSize: '1.2rem' }}>check_circle</span> Grand Clubhouse</li>
              <li style={{ display: 'flex', alignItems: 'center', gap: '0.5rem', color: 'var(--color-text-muted)' }}><span className="material-symbols-outlined" style={{ color: 'var(--color-primary)', fontSize: '1.2rem' }}>check_circle</span> Amphitheatre</li>
              <li style={{ display: 'flex', alignItems: 'center', gap: '0.5rem', color: 'var(--color-text-muted)' }}><span className="material-symbols-outlined" style={{ color: 'var(--color-primary)', fontSize: '1.2rem' }}>check_circle</span> Coffee Lounge</li>
              <li style={{ display: 'flex', alignItems: 'center', gap: '0.5rem', color: 'var(--color-text-muted)' }}><span className="material-symbols-outlined" style={{ color: 'var(--color-primary)', fontSize: '1.2rem' }}>check_circle</span> Dance Room</li>
              <li style={{ display: 'flex', alignItems: 'center', gap: '0.5rem', color: 'var(--color-text-muted)' }}><span className="material-symbols-outlined" style={{ color: 'var(--color-primary)', fontSize: '1.2rem' }}>check_circle</span> Social Island</li>
              <li style={{ display: 'flex', alignItems: 'center', gap: '0.5rem', color: 'var(--color-text-muted)' }}><span className="material-symbols-outlined" style={{ color: 'var(--color-primary)', fontSize: '1.2rem' }}>check_circle</span> Chit-chat Corner</li>
            </ul>
          </div>

          {/* Indoor Games */}
          <div className="amenity-category loc-card" style={{ padding: '2.5rem', borderRadius: '12px' }}>
            <h3 style={{ marginBottom: '1.5rem', color: 'var(--color-primary)', display: 'flex', alignItems: 'center', gap: '0.5rem' }}>
              <span className="material-symbols-outlined">sports_esports</span> Indoor Games
            </h3>
            <ul className="premium-amenity-grid" style={{ listStyle: 'none', padding: 0, display: 'grid', gridTemplateColumns: '1fr 1fr', gap: '1rem' }}>
              <li style={{ display: 'flex', alignItems: 'center', gap: '0.5rem', color: 'var(--color-text-muted)' }}><span className="material-symbols-outlined" style={{ color: 'var(--color-primary)', fontSize: '1.2rem' }}>check_circle</span> Pool Table</li>
              <li style={{ display: 'flex', alignItems: 'center', gap: '0.5rem', color: 'var(--color-text-muted)' }}><span className="material-symbols-outlined" style={{ color: 'var(--color-primary)', fontSize: '1.2rem' }}>check_circle</span> Table Tennis</li>
              <li style={{ display: 'flex', alignItems: 'center', gap: '0.5rem', color: 'var(--color-text-muted)' }}><span className="material-symbols-outlined" style={{ color: 'var(--color-primary)', fontSize: '1.2rem' }}>check_circle</span> Carrom & Chess</li>
              <li style={{ display: 'flex', alignItems: 'center', gap: '0.5rem', color: 'var(--color-text-muted)' }}><span className="material-symbols-outlined" style={{ color: 'var(--color-primary)', fontSize: '1.2rem' }}>check_circle</span> Dart Area</li>
              <li style={{ display: 'flex', alignItems: 'center', gap: '0.5rem', color: 'var(--color-text-muted)' }}><span className="material-symbols-outlined" style={{ color: 'var(--color-primary)', fontSize: '1.2rem' }}>check_circle</span> Coding Room</li>
              <li style={{ display: 'flex', alignItems: 'center', gap: '0.5rem', color: 'var(--color-text-muted)' }}><span className="material-symbols-outlined" style={{ color: 'var(--color-primary)', fontSize: '1.2rem' }}>check_circle</span> Art & Craft</li>
            </ul>
          </div>

          {/* Nature & Landscapes */}
          <div className="amenity-category loc-card" style={{ padding: '2.5rem', borderRadius: '12px' }}>
            <h3 style={{ marginBottom: '1.5rem', color: 'var(--color-primary)', display: 'flex', alignItems: 'center', gap: '0.5rem' }}>
              <span className="material-symbols-outlined">park</span> Nature & Landscapes
            </h3>
            <ul className="premium-amenity-grid" style={{ listStyle: 'none', padding: 0, display: 'grid', gridTemplateColumns: '1fr 1fr', gap: '1rem' }}>
              <li style={{ display: 'flex', alignItems: 'center', gap: '0.5rem', color: 'var(--color-text-muted)' }}><span className="material-symbols-outlined" style={{ color: 'var(--color-primary)', fontSize: '1.2rem' }}>check_circle</span> Forest Trail</li>
              <li style={{ display: 'flex', alignItems: 'center', gap: '0.5rem', color: 'var(--color-text-muted)' }}><span className="material-symbols-outlined" style={{ color: 'var(--color-primary)', fontSize: '1.2rem' }}>check_circle</span> Flower Garden</li>
              <li style={{ display: 'flex', alignItems: 'center', gap: '0.5rem', color: 'var(--color-text-muted)' }}><span className="material-symbols-outlined" style={{ color: 'var(--color-primary)', fontSize: '1.2rem' }}>check_circle</span> Aromatic Garden</li>
              <li style={{ display: 'flex', alignItems: 'center', gap: '0.5rem', color: 'var(--color-text-muted)' }}><span className="material-symbols-outlined" style={{ color: 'var(--color-primary)', fontSize: '1.2rem' }}>check_circle</span> Multipurpose Lawn</li>
              <li style={{ display: 'flex', alignItems: 'center', gap: '0.5rem', color: 'var(--color-text-muted)' }}><span className="material-symbols-outlined" style={{ color: 'var(--color-primary)', fontSize: '1.2rem' }}>check_circle</span> Natures Corner</li>
              <li style={{ display: 'flex', alignItems: 'center', gap: '0.5rem', color: 'var(--color-text-muted)' }}><span className="material-symbols-outlined" style={{ color: 'var(--color-primary)', fontSize: '1.2rem' }}>check_circle</span> Pets Park</li>
            </ul>
          </div>

          {/* Kids & Convenience */}
          <div className="amenity-category loc-card" style={{ padding: '2.5rem', borderRadius: '12px' }}>
            <h3 style={{ marginBottom: '1.5rem', color: 'var(--color-primary)', display: 'flex', alignItems: 'center', gap: '0.5rem' }}>
              <span className="material-symbols-outlined">family_restroom</span> Kids & Lifestyle
            </h3>
            <ul className="premium-amenity-grid" style={{ listStyle: 'none', padding: 0, display: 'grid', gridTemplateColumns: '1fr 1fr', gap: '1rem' }}>
              <li style={{ display: 'flex', alignItems: 'center', gap: '0.5rem', color: 'var(--color-text-muted)' }}><span className="material-symbols-outlined" style={{ color: 'var(--color-primary)', fontSize: '1.2rem' }}>check_circle</span> Kids Play Area</li>
              <li style={{ display: 'flex', alignItems: 'center', gap: '0.5rem', color: 'var(--color-text-muted)' }}><span className="material-symbols-outlined" style={{ color: 'var(--color-primary)', fontSize: '1.2rem' }}>check_circle</span> Toddler Sandpit</li>
              <li style={{ display: 'flex', alignItems: 'center', gap: '0.5rem', color: 'var(--color-text-muted)' }}><span className="material-symbols-outlined" style={{ color: 'var(--color-primary)', fontSize: '1.2rem' }}>check_circle</span> Temple</li>
              <li style={{ display: 'flex', alignItems: 'center', gap: '0.5rem', color: 'var(--color-text-muted)' }}><span className="material-symbols-outlined" style={{ color: 'var(--color-primary)', fontSize: '1.2rem' }}>check_circle</span> Senior Citizen Area</li>
              <li style={{ display: 'flex', alignItems: 'center', gap: '0.5rem', color: 'var(--color-text-muted)' }}><span className="material-symbols-outlined" style={{ color: 'var(--color-primary)', fontSize: '1.2rem' }}>check_circle</span> Bus Pick Up</li>
              <li style={{ display: 'flex', alignItems: 'center', gap: '0.5rem', color: 'var(--color-text-muted)' }}><span className="material-symbols-outlined" style={{ color: 'var(--color-primary)', fontSize: '1.2rem' }}>check_circle</span> Grand Lobby</li>
            </ul>
          </div>

        </div>
      </div>
    </section>

    {/* Luxury Masonry Gallery */}
    <section id="gallery" className="section gallery" >
      <div className="container">
        <div className="section-header fade-in-up">
          <h2 className="section-title gradient-text">A Glimpse of Grandeur</h2>
          <p className="section-desc">Click any image to enlarge and explore the unmatched luxury of Malpani Estates.</p>
        </div>
        
        <div className="masonry-grid fade-in-up">
          {/* Official Elevation & Interior Renders */}
          <Image src="https://malpani-cms.firsteconomy.com/uploads/01_1_97625c7cd6.png" alt="3 BHK luxury apartments in Baner-Pashan Link Road exterior Malpani M SoulStrings" width={1200} height={800} sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw" className="gallery-img" style={{ width: "100%", height: "auto" }} />
          <Image src="https://malpani-cms.firsteconomy.com/uploads/02_1_fccd839fae.png" alt="4 BHK premium flats for sale in Baner-Pashan Link Road interior Malpani M SoulStrings" width={1200} height={800} sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw" className="gallery-img" style={{ width: "100%", height: "auto" }} />
          <Image src="https://malpani-cms.firsteconomy.com/uploads/03_5afad0394f.png" alt="Ready to move 3 BHK in Baner Pashan Link Road amenities Malpani M SoulStrings" width={1200} height={800} sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw" className="gallery-img" style={{ width: "100%", height: "auto" }} />
          <Image src="https://malpani-cms.firsteconomy.com/uploads/04_1_dfeed3efb5.png" alt="New luxury residential projects in Baner-Pashan Link Road Malpani M SoulStrings" width={1200} height={800} sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw" className="gallery-img" style={{ width: "100%", height: "auto" }} />
          <Image src="https://malpani-cms.firsteconomy.com/uploads/05_1_767fc1bb82.png" alt="Gated community luxury flats in Pashan Pune pool Malpani M SoulStrings Baner Pashan Link Road" width={1200} height={800} sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw" className="gallery-img" style={{ width: "100%", height: "auto" }} />
          <Image src="https://malpani-cms.firsteconomy.com/uploads/Entrance_Lobby_9d4d367801.png" alt="Malpani M SoulStrings Grand Entrance Lobby Baner Pashan Link Road Pune" width={1200} height={800} sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw" className="gallery-img" style={{ width: "100%", height: "auto" }} />
          <Image src="https://malpani-cms.firsteconomy.com/uploads/About_Project_27b8c57d51.png" alt="Malpani M SoulStrings Project Elevation Baner Pashan Link Road West Pune Real Estate" width={1200} height={800} sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw" className="gallery-img" style={{ width: "100%", height: "auto" }} />
          <Image src="https://malpani-cms.firsteconomy.com/uploads/M_soul_strings_Desktop_Banner_Without_Text_0d38ce28d4.jpg" alt="Luxury apartments in Pune Baner Pashan Link Road Malpani M SoulStrings" width={1200} height={800} sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw" className="gallery-img" style={{ width: "100%", height: "auto" }} />
        </div>
      </div>
    </section>

    {/* Location Section */}
    <section id="location" className="section location" itemscope itemtype="https://schema.org/Place">
      <div className="container">
        <div className="section-header fade-in-up">
          <h2 className="section-title">A Prestigious Address at Malpani M SoulStrings Baner Pashan Link Road</h2>
          <p className="section-desc">The epicenter of the Baner Pashan Link Road real estate market, unmatched by any other development.</p>
        </div>
        <div className="location-content fade-in-up" >
          <p>Situated in Pune's most coveted neighborhood, the Malpani M SoulStrings property on Baner-Pashan Link Road offers seamless connectivity to major IT hubs like Hinjewadi, while redefining the luxury standards of the Aundh real estate market. The strategic location guarantees a serene retreat from the city's hustle without sacrificing urban convenience, making these 3BHK, 4BHK, 5BHK, Duplex, and Penthouse luxury homes the ultimate investment.</p>
          <div className="location-grid" >
            <div className="loc-card" >
              <h3 >Work & IT Hubs</h3>
              <ul style={{ listStyle: 'none', padding: 0 }}>
                <li>✓ Hinjewadi IT Park - 15 mins</li>
                <li>✓ Wakad Business District - 10 mins</li>
                <li>✓ Prabhat Road & SB Road - 20 mins</li>
              </ul>
            </div>
            <div className="loc-card" >
              <h3 >Lifestyle & Leisure</h3>
              <ul style={{ listStyle: 'none', padding: 0 }}>
                <li>✓ Balewadi High Street - 10 mins</li>
                <li>✓ The Pavillion Mall - 15 mins</li>
                <li>✓ Baner Hill - 5 mins</li>
              </ul>
            </div>
            <div className="loc-card" >
              <h3 >Education & Healthcare</h3>
              <ul style={{ listStyle: 'none', padding: 0 }}>
                <li>✓ Pune University - 12 mins</li>
                <li>✓ Jupiter Hospital - 10 mins</li>
                <li>✓ Loyola High School - 15 mins</li>
              </ul>
            </div>
          </div>
          
          {/* Google Maps Business Integration */}
          <div className="map-container" >
            <iframe src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3782.2608460627766!2d73.78852000000001!3d18.5449193!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3bc2bf7096fc9d67%3A0x286e77f435256d6!2sM-Soulstrings!5e0!3m2!1sen!2sin!4v1723900000000!5m2!1sen!2sin" width="100%" height="450" allowFullScreen="" loading="lazy" referrerPolicy="no-referrer-when-downgrade" title="Malpani M SoulStrings Official Google Maps Location"></iframe>
          </div>
        </div>
      </div>
    </section>

    
    {/* West Pune Real Estate Dominance (NEW SEO SECTION) */}
    <section id="west-pune" className="section west-pune" >
      <div className="container">
        <div className="section-header fade-in-up">
          <h2 className="section-title gradient-text">Top Luxury Real Estate Projects in Pune</h2>
          <p className="section-desc">The ultimate destination for luxury apartments and premium real estate in Baner, Pune.</p>
        </div>
        <div className="west-pune-content fade-in-up" >
          <p >
            When it comes to the Baner luxury real estate market, nothing compares to the sheer grandeur of Malpani M SoulStrings. We are setting an untouchable standard for 3BHK, 4BHK, 5BHK, Duplex, and Penthouse luxury flats in Baner. Located at the prestigious junction of Baner and Pashan, this development represents the absolute pinnacle of high-end living in West Pune.
          </p>
          <p >
            If you are searching for the best luxury apartments on the Baner-Pashan Link Road or evaluating premium real estate in Pune West, M SoulStrings isn't just a residence; it is a legacy. With over 1.5 million square feet of uncompromising quality, it stands as the undisputed crown jewel for those seeking luxury living in Baner.
          </p>
        </div>
      </div>
    </section>

    {/* Insights & Blog Section (NEW) */}
    <section id="insights" className="section insights" >
      <div className="container">
        <div className="section-header fade-in-up">
          <h2 className="section-title">Market Insights & News</h2>
          <p className="section-desc">Discover why Malpani M SoulStrings is leading the Baner Pashan Link Road real estate market.</p>
        </div>
        <div className="blog-grid fade-in-up" >
          {blogFiles.map(file => {
            const slug = file.replace('.md', '');
            let title = slug.replace(/-/g, ' ').toUpperCase();
            try {
              const content = fs.readFileSync(path.join(contentDir, file), 'utf-8');
              const titleMatch = content.match(/^#\s+(.*)/m);
              if (titleMatch) title = titleMatch[1];
            } catch (e) {
              // Fallback
            }
            return (
              <article key={slug} className="blog-card" style={{ display: 'flex', flexDirection: 'column', justifyContent: 'space-between' }}>
                <h3 >{title}</h3>
                <p >Explore the latest metrics, infrastructure updates, and luxury real estate trends in West Pune.</p>
                <Link href={`/blog-malpani-m-soulstrings-baner-pashan-link-road/${slug}`} >Read More</Link>
              </article>
            );
          })}
        </div>
      </div>
    </section>

    {/* Social Proof Trust Engine */}
    <Testimonials />

    {/* Financial Upgrade Section */}
    <section id="financials" className="py-5" style={{ background: 'var(--color-background)', borderTop: '1px solid rgba(212,175,55,0.1)' }}>
      <div className="container">
        <div className="row align-items-center">
          <div className="col-lg-5 mb-5 mb-lg-0 fade-in-up">
            <h2 className="display-5 fw-bold mb-4 gradient-text">Investment Estimator</h2>
            <p style={{ color: 'var(--color-text-muted)', fontSize: '1.1rem', marginBottom: '2rem' }}>
              Transition your capital into Pune's highest-appreciating asset class. Plan your investment parameters instantly and secure your legacy.
            </p>
          </div>
          <div className="col-lg-7 fade-in-up">
            <EmiCalculator />
          </div>
        </div>
      </div>
    </section>

    {/* FAQ Section for SEO */}
    <section id="faq" className="section faq" >
      <div className="container">
        <div className="section-header fade-in-up">
          <h2 className="section-title">Frequently Asked Questions</h2>
          <p className="section-desc">Learn more about the ultra-luxury lifestyle at Malpani M SoulStrings.</p>
        </div>
        <div className="faq-list fade-in-up" >
          <details className="faq-item" >
            <summary >What configurations are available in Malpani M SoulStrings?</summary>
            <p >Malpani M SoulStrings offers ultra-premium 3BHK and 4BHK luxury homes. If you are looking to buy a premium flat in Pune, these expansive residences are meticulously designed to maximize space, natural light, and cross-ventilation, earning the reputation as the best luxury project in Pune West.</p>
          </details>
          <details className="faq-item" >
            <summary >Where exactly is Malpani M SoulStrings located?</summary>
            <p >The project is strategically positioned on the prestigious Baner-Pashan Link Road, Pune. This prime location places it at the epicenter of West Pune, offering immediate connectivity to the Aundh real estate market, Shivajinagar, Balewadi High Street, and the Hinjewadi IT corridor.</p>
          </details>
          <details className="faq-item" >
            <summary >What amenities are provided at Malpani M SoulStrings?</summary>
            <p >Residents enjoy exclusive access to over 35+ state-of-the-art amenities, including a stunning Sky Infinity Pool, a Signature Clubhouse, a holistic Spa & Salon, multi-fitness arenas, Badminton and Pickle Ball courts, an Amphitheatre, and a tranquil Forest Trail.</p>
          </details>
          <details className="faq-item" >
            <summary >Why is Baner considered a top real estate investment in Pune?</summary>
            <p >Baner has rapidly evolved into the most desired residential hub for high-net-worth individuals. With its seamless connectivity to the Mumbai-Bengaluru Highway, proximity to elite educational institutions in Wakad, and world-class commercial infrastructure in Balewadi, the Baner Pashan Link Road real estate market promises unparalleled ROI and lifestyle upgrades.</p>
          </details>
          <details className="faq-item" >
            <summary >Is Malpani M SoulStrings a good choice for IT professionals?</summary>
            <p >Absolutely. The direct connection from the Baner Pashan Link Road to the Hinjewadi IT Park and Wakad business centers makes M SoulStrings the ultimate luxury residence for tech executives seeking a zero-commute lifestyle without compromising on grandeur and exclusivity.</p>
          </details>
          <details className="faq-item" >
            <summary >What is the price of Malpani M Soulstrings?</summary>
            <p >The Malpani M SoulStrings price is highly competitive for the ultra-luxury segment in Pune West. Because pricing varies based on floor bands, configurations (3 BHK vs 4 BHK), and custom specifications, we recommend submitting an inquiry to get the exact and updated pricing sheet.</p>
          </details>
          <details className="faq-item" >
            <summary >How can I download the Malpani M Soulstrings floor plan and brochure?</summary>
            <p >To view the detailed layouts, simply fill out the smart contact form at the bottom of this page. You will immediately receive access to the official Malpani M SoulStrings brochure and the complete floor plan gallery.</p>
          </details>
          <details className="faq-item" >
            <summary >What is the Malpani M Soulstrings RERA number?</summary>
            <p >The project is strictly MahaRERA compliant. The official Malpani M SoulStrings RERA number is P52100076782 (Wing B) and P52100055678 (Wing C).</p>
          </details>
          <details className="faq-item" >
            <summary >How can I check the Malpani M Soulstrings construction update?</summary>
            <p >Construction is proceeding at an accelerated pace. To get the latest, real-time Malpani M SoulStrings construction update, timeline for possession, or to inquire about ready possession luxury apartments in Pune, please contact our VIP sales team via the WhatsApp widget.</p>
          </details>
          <details className="faq-item" >
            <summary >Who is the developer behind Malpani M SoulStrings?</summary>
            <p >This masterpiece is developed by Malpani Estates, a legacy brand renowned across the entire Pune real estate market for delivering iconic, ultra-premium projects with uncompromising quality and architectural brilliance.</p>
          </details>
          <details className="faq-item" >
            <summary >How can I book a 3BHK or 4BHK luxury Residence here?</summary>
            <p >You can register your interest by using our smart contact form below or by clicking the WhatsApp widget. Our dedicated VIP sales team specializing in the West Pune real estate market will guide you through a private presentation and site visit.</p>
          </details>
        </div>
      </div>
    </section>

    {/* Advanced Contact & Smart Form Section */}
    <section id="contact" className="section contact">
      <div className="container contact-wrapper fade-in-up">
        <div className="contact-info">
          <h2 className="section-title gradient-text">Schedule Site Visit</h2>
          <p>Get exclusive Malpani M SoulStrings pricing lists and browse the finest luxury flats for sale in Baner.</p>
          <div className="contact-details" >
            <p ><span className="material-symbols-outlined" >location_on</span> Baner Pashan Link Road, Pune, Maharashtra 411045</p>
            <p ><span className="material-symbols-outlined" >call</span> +91 7744009295</p>
          </div>
        </div>
        <div className="contact-form-container">
          <form id="smart-contact-form" className="contact-form">
            <div className="form-group floating-label-group">
              <input type="text" id="name" name="name" required className="floating-input" placeholder=" " />
              <label htmlFor="name" className="floating-label">Full Name</label>
            </div>
            <div className="form-group floating-label-group">
              <input type="email" id="email" name="email" required className="floating-input" placeholder=" " />
              <label htmlFor="email" className="floating-label">Email Address</label>
            </div>
            <div className="form-group floating-label-group">
              <input type="tel" id="phone" name="phone" pattern="[0-9]{10}" required className="floating-input" placeholder=" " />
              <label htmlFor="phone" className="floating-label">Phone Number (10 digits)</label>
            </div>
            <button type="submit" className="btn btn-primary btn-block">Download Malpani M SoulStrings Brochure</button>
            <div id="form-success-msg" style={{ display: 'none', color: '#28a745', marginTop: '1rem' }}>✓ Thank you! Our luxury consultant will contact you shortly to Book Luxury Flat in Baner.</div>
          </form>
        </div>
      </div>
    </section>
      <VRModal />
    </main>
  );
}
