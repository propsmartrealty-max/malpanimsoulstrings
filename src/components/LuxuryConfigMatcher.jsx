"use client";

import React, { useState } from 'react';
import Link from 'next/link';

export default function LuxuryConfigMatcher() {
  const [step, setStep] = useState(1);
  const [familyType, setFamilyType] = useState('nuclear');
  const [budgetRange, setBudgetRange] = useState('mid');
  const [viewPreference, setViewPreference] = useState('hills');

  const calculateRecommendation = () => {
    if (familyType === 'joint' || budgetRange === 'ultra') {
      return {
        title: "5 BHK Sky Duplex / Penthouse Estate",
        carpet: "3,400 - 4,500+ Sq.Ft.",
        price: "₹5.50 Cr - ₹6.50 Cr+",
        link: "/5bhk-duplex-malpani-m-soulstrings-baner-pashan-link-road",
        matchScore: 99,
        highlights: [
          "Double-height formal living room with panoramic glass facade",
          "Independent master suites on both levels for multi-generational privacy",
          "270° unobstructed views of protected Sus Hills",
          "3 dedicated multi-tier car parking spaces with EV charging"
        ],
        badge: "Highest Luxury & Space"
      };
    }

    if (familyType === 'growing' || budgetRange === 'high' || viewPreference === 'hills') {
      return {
        title: "4 BHK Ultra-Luxury Presidential Residence",
        carpet: "2,200 - 2,600 Sq.Ft.",
        price: "₹3.50 Cr - ₹4.20 Cr",
        link: "/4bhk-luxury-malpani-m-soulstrings-baner-pashan-link-road",
        matchScore: 97,
        highlights: [
          "Sprawling East-West oriented living & dining room with massive sundeck",
          "Grand master suite with walk-in wardrobe and luxury bath fittings",
          "Separate domestic help quarters and utility area",
          "100% Vastu-compliant Agneya kitchen & Nairutya master bedroom"
        ],
        badge: "Top Choice for Tech Executives & Doctors"
      };
    }

    return {
      title: "3 BHK Premium Luxury Residence",
      carpet: "1,450 - 1,650 Sq.Ft.",
      price: "₹1.95 Cr - ₹2.40 Cr",
      link: "/3bhk-luxury-malpani-m-soulstrings-baner-pashan-link-road",
      matchScore: 95,
      highlights: [
        "Optimal layout efficiency with zero wasted square footage",
        "Large private deck overlooking the 35+ resort amenities",
        "European sanitary fittings (Grohe/Kohler) and imported Italian marble",
        "Smart home automation with biometric digital door locks"
      ],
      badge: "Best Value & High Rental Yield"
    };
  };

  const result = calculateRecommendation();

  const handleFinish = () => {
    if (typeof window !== 'undefined') {
      window.dataLayer = window.dataLayer || [];
      window.dataLayer.push({
        event: 'quiz_completed',
        familyType,
        budgetRange,
        viewPreference,
        recommendedUnit: result.title,
        pagePath: window.location.pathname
      });
    }
  };

  return (
    <div className="loc-card p-4 p-md-5" style={{ borderRadius: '20px', background: 'linear-gradient(145deg, rgba(18,18,22,0.98), rgba(10,10,14,0.99))', border: '1px solid rgba(212,175,55,0.3)', boxShadow: '0 25px 60px rgba(0,0,0,0.6)' }}>
      <div className="d-flex align-items-center justify-content-between flex-wrap gap-2 mb-3">
        <div className="d-flex align-items-center">
          <span className="material-symbols-outlined me-2" style={{ color: 'var(--color-primary)', fontSize: '2rem' }}>auto_awesome</span>
          <h3 className="h4 mb-0" style={{ color: '#fff', fontWeight: '700' }}>AI Luxury Residence Matcher</h3>
        </div>
        <span className="badge px-3 py-2" style={{ background: 'rgba(212,175,55,0.15)', color: 'var(--color-primary)', border: '1px solid rgba(212,175,55,0.3)', fontSize: '0.8rem' }}>
          Step {step} of 3
        </span>
      </div>

      <p style={{ color: 'var(--color-text-muted)', fontSize: '0.95rem', marginBottom: '2rem' }}>
        Find your perfect bespoke home at Malpani M SoulStrings. Answer 3 quick questions to receive a tailored configuration recommendation and floor plan match.
      </p>

      {/* Step 1: Family Type */}
      {step === 1 && (
        <div className="fade-in-up">
          <label className="form-label text-white fw-bold mb-3">1. Select Your Family Structure & Requirements:</label>
          <div className="row g-3 mb-4">
            <div className="col-md-6">
              <button 
                type="button" 
                className={`w-100 p-3 text-start rounded-3 btn ${familyType === 'nuclear' ? 'btn-primary' : 'btn-outline-secondary text-white'}`}
                onClick={() => setFamilyType('nuclear')}
                style={{ border: '1px solid rgba(212,175,55,0.25)', transition: 'all 0.2s' }}
              >
                <div className="fw-bold">Nuclear Family (3-4 Members)</div>
                <div className="small opacity-75">Seeking smart space, modern luxury, and low maintenance.</div>
              </button>
            </div>
            <div className="col-md-6">
              <button 
                type="button" 
                className={`w-100 p-3 text-start rounded-3 btn ${familyType === 'growing' ? 'btn-primary' : 'btn-outline-secondary text-white'}`}
                onClick={() => setFamilyType('growing')}
                style={{ border: '1px solid rgba(212,175,55,0.25)', transition: 'all 0.2s' }}
              >
                <div className="fw-bold">Growing Family with Children</div>
                <div className="small opacity-75">Requires spacious bedrooms, study spaces & resort amenities.</div>
              </button>
            </div>
            <div className="col-md-6">
              <button 
                type="button" 
                className={`w-100 p-3 text-start rounded-3 btn ${familyType === 'joint' ? 'btn-primary' : 'btn-outline-secondary text-white'}`}
                onClick={() => setFamilyType('joint')}
                style={{ border: '1px solid rgba(212,175,55,0.25)', transition: 'all 0.2s' }}
              >
                <div className="fw-bold">Joint Multi-Generational Family</div>
                <div className="small opacity-75">Requires independent master bedrooms & double-height living.</div>
              </button>
            </div>
            <div className="col-md-6">
              <button 
                type="button" 
                className={`w-100 p-3 text-start rounded-3 btn ${familyType === 'cxo' ? 'btn-primary' : 'btn-outline-secondary text-white'}`}
                onClick={() => setFamilyType('cxo')}
                style={{ border: '1px solid rgba(212,175,55,0.25)', transition: 'all 0.2s' }}
              >
                <div className="fw-bold">Corporate CXO / NRI Investor</div>
                <div className="small opacity-75">Prioritizes prestige address, panoramic views & high ROI.</div>
              </button>
            </div>
          </div>
          <div className="text-end">
            <button className="btn btn-primary px-4 py-2" onClick={() => setStep(2)}>
              Next: Investment Budget →
            </button>
          </div>
        </div>
      )}

      {/* Step 2: Budget */}
      {step === 2 && (
        <div className="fade-in-up">
          <label className="form-label text-white fw-bold mb-3">2. Select Your Investment Budget Range:</label>
          <div className="row g-3 mb-4">
            <div className="col-md-4">
              <button 
                type="button" 
                className={`w-100 p-3 text-start rounded-3 btn ${budgetRange === 'entry' ? 'btn-primary' : 'btn-outline-secondary text-white'}`}
                onClick={() => setBudgetRange('entry')}
                style={{ border: '1px solid rgba(212,175,55,0.25)' }}
              >
                <div className="fw-bold">₹1.95 Cr - ₹2.50 Cr</div>
                <div className="small opacity-75">3 BHK Luxury Flats</div>
              </button>
            </div>
            <div className="col-md-4">
              <button 
                type="button" 
                className={`w-100 p-3 text-start rounded-3 btn ${budgetRange === 'mid' ? 'btn-primary' : 'btn-outline-secondary text-white'}`}
                onClick={() => setBudgetRange('mid')}
                style={{ border: '1px solid rgba(212,175,55,0.25)' }}
              >
                <div className="fw-bold">₹3.50 Cr - ₹4.50 Cr</div>
                <div className="small opacity-75">4 BHK Presidential Estates</div>
              </button>
            </div>
            <div className="col-md-4">
              <button 
                type="button" 
                className={`w-100 p-3 text-start rounded-3 btn ${budgetRange === 'ultra' ? 'btn-primary' : 'btn-outline-secondary text-white'}`}
                onClick={() => setBudgetRange('ultra')}
                style={{ border: '1px solid rgba(212,175,55,0.25)' }}
              >
                <div className="fw-bold">₹5.50 Cr - ₹6.50 Cr+</div>
                <div className="small opacity-75">5 BHK Duplex & Penthouses</div>
              </button>
            </div>
          </div>
          <div className="d-flex justify-content-between">
            <button className="btn btn-outline-secondary text-white px-4 py-2" onClick={() => setStep(1)}>
              ← Back
            </button>
            <button className="btn btn-primary px-4 py-2" onClick={() => setStep(3)}>
              Next: Lifestyle Priority →
            </button>
          </div>
        </div>
      )}

      {/* Step 3: Priority */}
      {step === 3 && (
        <div className="fade-in-up">
          <label className="form-label text-white fw-bold mb-3">3. What is Your Highest Lifestyle Priority?</label>
          <div className="row g-3 mb-4">
            <div className="col-md-6">
              <button 
                type="button" 
                className={`w-100 p-3 text-start rounded-3 btn ${viewPreference === 'hills' ? 'btn-primary' : 'btn-outline-secondary text-white'}`}
                onClick={() => setViewPreference('hills')}
                style={{ border: '1px solid rgba(212,175,55,0.25)' }}
              >
                <div className="fw-bold">270° Protected Sus Hill Views</div>
                <div className="small opacity-75">Permanent green vistas & pollution-free air.</div>
              </button>
            </div>
            <div className="col-md-6">
              <button 
                type="button" 
                className={`w-100 p-3 text-start rounded-3 btn ${viewPreference === 'vastu' ? 'btn-primary' : 'btn-outline-secondary text-white'}`}
                onClick={() => setViewPreference('vastu')}
                style={{ border: '1px solid rgba(212,175,55,0.25)' }}
              >
                <div className="fw-bold">100% Classical Vastu Purity</div>
                <div className="small opacity-75">East-West solar axis & Agneya kitchen orientation.</div>
              </button>
            </div>
            <div className="col-md-6">
              <button 
                type="button" 
                className={`w-100 p-3 text-start rounded-3 btn ${viewPreference === 'amenities' ? 'btn-primary' : 'btn-outline-secondary text-white'}`}
                onClick={() => setViewPreference('amenities')}
                style={{ border: '1px solid rgba(212,175,55,0.25)' }}
              >
                <div className="fw-bold">35+ Resort Amenities & Pool</div>
                <div className="small opacity-75">Infinity pool, luxury spa, clubhouse & sports courts.</div>
              </button>
            </div>
            <div className="col-md-6">
              <button 
                type="button" 
                className={`w-100 p-3 text-start rounded-3 btn ${viewPreference === 'privacy' ? 'btn-primary' : 'btn-outline-secondary text-white'}`}
                onClick={() => setViewPreference('privacy')}
                style={{ border: '1px solid rgba(212,175,55,0.25)' }}
              >
                <div className="fw-bold">Ultra-Low Density & Privacy</div>
                <div className="small opacity-75">Few units per core & biometric security.</div>
              </button>
            </div>
          </div>
          <div className="d-flex justify-content-between">
            <button className="btn btn-outline-secondary text-white px-4 py-2" onClick={() => setStep(2)}>
              ← Back
            </button>
            <button className="btn btn-primary px-4 py-2" onClick={() => { setStep(4); handleFinish(); }}>
              Generate Custom Match →
            </button>
          </div>
        </div>
      )}

      {/* Step 4: Matched Result */}
      {step === 4 && (
        <div className="fade-in-up p-4 rounded-3" style={{ background: 'rgba(212,175,55,0.08)', border: '1px solid rgba(212,175,55,0.3)' }}>
          <div className="d-flex justify-content-between align-items-center mb-3 flex-wrap gap-2">
            <span className="badge px-3 py-2" style={{ backgroundColor: '#25D366', color: '#fff', fontSize: '0.85rem' }}>
              ✓ {result.badge}
            </span>
            <span className="text-white fw-bold">Compatibility Match: <span style={{ color: 'var(--color-primary)', fontSize: '1.4rem' }}>{result.matchScore}%</span></span>
          </div>

          <h4 className="text-white h3 mb-2" style={{ fontWeight: '700' }}>{result.title}</h4>
          <div className="d-flex gap-3 text-white-50 small mb-4 flex-wrap">
            <span><strong>Carpet Area:</strong> {result.carpet}</span>
            <span>•</span>
            <span><strong>Price Band:</strong> <span style={{ color: 'var(--color-primary)' }}>{result.price}</span></span>
            <span>•</span>
            <span><strong>MahaRERA:</strong> P52100076782</span>
          </div>

          <div className="mb-4">
            <h5 className="text-white small fw-bold text-uppercase mb-2">Why This Is Your Perfect Match:</h5>
            <ul className="text-white-50 small ps-3 mb-0" style={{ lineHeight: '1.8' }}>
              {result.highlights.map((h, i) => (
                <li key={i}>{h}</li>
              ))}
            </ul>
          </div>

          <div className="d-flex flex-wrap gap-3 pt-2">
            <Link href={result.link} className="btn btn-primary flex-grow-1 py-3" style={{ borderRadius: '30px', textAlign: 'center' }}>
              View Detailed Floor Plans & Layouts →
            </Link>
            <a href="#" data-bs-toggle="modal" data-bs-target="#enquireModal" className="btn btn-outline text-white flex-grow-1 py-3" style={{ borderRadius: '30px', textAlign: 'center' }}>
              Schedule VIP Private Walkthrough
            </a>
            <button className="btn btn-sm btn-link text-white-50 w-100 mt-2" onClick={() => setStep(1)}>
              🔄 Retake Quiz
            </button>
          </div>
        </div>
      )}
    </div>
  );
}
