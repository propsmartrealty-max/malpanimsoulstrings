"use client";

import { useState } from 'react';

export default function VastuAuditTool() {
  const [direction, setDirection] = useState('east');
  const [room, setRoom] = useState('entrance');

  const vastuRules = {
    entrance: {
      east: { score: 98, status: 'Most Auspicious (Indra Zone)', advice: 'Receives morning solar energy and positive cosmic vibrations. Malpani M SoulStrings primary entrances are oriented along this axis.' },
      north: { score: 95, status: 'Highly Auspicious (Kubera Zone)', advice: 'Fosters financial growth, abundance, and commercial prosperity.' },
      west: { score: 85, status: 'Favorable (Varuna Zone)', advice: 'Brings stability and long-term career success.' },
      south: { score: 60, status: 'Requires Remediation', advice: 'Requires specific metallic thresholds or Vastu pyramids for optimal energy balancing.' }
    },
    kitchen: {
      east: { score: 88, status: 'Favorable (Sun Element)', advice: 'Good for morning energy and meal preparation.' },
      south: { score: 99, status: 'Perfect Alignment (Agni Kund / South-East)', advice: 'Strictly followed across Malpani M SoulStrings floor plans to enhance family health and vitality.' },
      north: { score: 50, status: 'Inauspicious (Water-Fire Conflict)', advice: 'Conflicts with water elements. Not used in Malpani M SoulStrings master designs.' },
      west: { score: 75, status: 'Acceptable Secondary Zone', advice: 'Acceptable with proper counter positioning and exhaust ventilation.' }
    },
    masterBedroom: {
      south: { score: 98, status: 'Optimal Stability (Nairutya Zone)', advice: 'Anchors the family head with grounding stability, restorative sleep, and leadership authority.' },
      west: { score: 90, status: 'Highly Favorable', advice: 'Promotes peaceful rest and harmonious multi-generational relationships.' },
      east: { score: 70, status: 'Better Suited for Children/Guests', advice: 'Active morning energy better suited for guest rooms or children study quarters.' },
      north: { score: 65, status: 'Moderate', advice: 'Recommended to position the head of the bed facing South for geomagnetic alignment.' }
    },
    livingRoom: {
      east: { score: 97, status: 'Optimal Light & Flow (Brahmasthan Openness)', advice: 'Sprawling column-free living halls at Malpani M SoulStrings radiate sunlight into all bedrooms.' },
      north: { score: 94, status: 'Highly Welcoming', advice: 'Invites positive social networking and guest prosperity.' },
      west: { score: 88, status: 'Serene Sunset Views', advice: 'Captures evening breezes and golden hour views over the Sus Hills.' },
      south: { score: 70, status: 'Standard', advice: 'Enhanced with light-colored Italian marble flooring and expansive glass facades.' }
    }
  };

  const currentResult = vastuRules[room]?.[direction] || { score: 90, status: 'Compliant', advice: 'M SoulStrings layout is engineered for harmonious living.' };

  return (
    <div className="loc-card p-4 p-md-5" style={{ borderRadius: '16px', background: 'linear-gradient(145deg, rgba(20,20,24,0.95), rgba(10,10,12,0.98))', border: '1px solid rgba(212,175,55,0.3)', boxShadow: '0 20px 50px rgba(0,0,0,0.5)' }}>
      <div className="d-flex align-items-center mb-3">
        <span className="material-symbols-outlined me-2" style={{ color: 'var(--color-primary)', fontSize: '2rem' }}>explore</span>
        <h3 className="h4 mb-0" style={{ color: '#fff', fontWeight: '700' }}>Interactive Vastu Harmony Audit</h3>
      </div>
      <p style={{ color: 'var(--color-text-muted)', fontSize: '0.95rem', marginBottom: '2rem' }}>
        Check the energetic score and compliance of your residence. All 3 & 4 BHK residences at Malpani M SoulStrings follow 100% classical Vastu guidelines.
      </p>

      <div className="row g-3 mb-4">
        <div className="col-md-6">
          <label className="form-label text-white small fw-bold">Select Living Zone</label>
          <select className="form-select bg-dark text-white border-secondary" value={room} onChange={(e) => setRoom(e.target.value)} style={{ padding: '0.75rem' }}>
            <option value="entrance">Main Entrance Door</option>
            <option value="kitchen">Kitchen (Agni Zone)</option>
            <option value="masterBedroom">Master Bedroom Suite</option>
            <option value="livingRoom">Sprawling Living & Dining</option>
          </select>
        </div>
        <div className="col-md-6">
          <label className="form-label text-white small fw-bold">Facing Direction</label>
          <select className="form-select bg-dark text-white border-secondary" value={direction} onChange={(e) => setDirection(e.target.value)} style={{ padding: '0.75rem' }}>
            <option value="east">East (Solar Morning Axis)</option>
            <option value="north">North (Kubera Wealth Axis)</option>
            <option value="west">West (Sunset & Stability)</option>
            <option value="south">South (Grounded Element)</option>
          </select>
        </div>
      </div>

      <div className="p-3 p-md-4 rounded-3" style={{ background: 'rgba(212,175,55,0.08)', border: '1px solid rgba(212,175,55,0.25)' }}>
        <div className="d-flex justify-content-between align-items-center mb-2 flex-wrap gap-2">
          <span className="badge px-3 py-2" style={{ backgroundColor: currentResult.score >= 85 ? '#25D366' : '#E65100', color: '#fff', fontSize: '0.9rem' }}>
            {currentResult.status}
          </span>
          <span className="text-white fw-bold">Vastu Score: <span style={{ color: 'var(--color-primary)', fontSize: '1.4rem' }}>{currentResult.score}/100</span></span>
        </div>
        <p className="mb-0 text-white-50 small" style={{ lineHeight: '1.6' }}>
          {currentResult.advice}
        </p>
      </div>

      <div className="mt-4 pt-2 text-center">
        <a href="#" data-bs-toggle="modal" data-bs-target="#enquireModal" className="btn btn-primary" style={{ padding: '0.75rem 2rem' }}>
          Download Vastu Floor Plan Layouts →
        </a>
      </div>
    </div>
  );
}
