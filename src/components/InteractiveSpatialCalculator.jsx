"use client";

import React, { useState } from 'react';

export default function InteractiveSpatialCalculator() {
  const [activeConfig, setActiveConfig] = useState('4bhk');
  const [unit, setUnit] = useState('sqft'); // 'sqft' | 'sqm'

  const configurations = {
    '3bhk': {
      title: "3 BHK Premium Luxury Residence",
      carpetSqFt: 1450,
      carpetSqM: 134.7,
      priceEstimate: "₹1.95 Cr onwards",
      sundeckView: "Panoramic Resort Amenities & Green Courtyard",
      rooms: [
        { name: "Living & Formal Dining", dims: "22'0\" × 14'6\"", sqft: 319, sqm: 29.6, pct: "22%", desc: "Sprawling open-plan living with direct sliding access to the private sundeck." },
        { name: "Private Double-Height Sundeck", dims: "14'6\" × 6'0\"", sqft: 87, sqm: 8.1, pct: "6%", desc: "East-facing terrace capturing morning sun and hillside breeze." },
        { name: "Master Bedroom Suite", dims: "16'0\" × 12'6\"", sqft: 200, sqm: 18.6, pct: "14%", desc: "Spacious master bedroom with dedicated wardrobe niche and ensuite bath." },
        { name: "Master Ensuite Bathroom", dims: "9'0\" × 6'0\"", sqft: 54, sqm: 5.0, pct: "4%", desc: "Fitted with imported marble, glass shower enclosure, and Grohe fittings." },
        { name: "Bedroom 2 (Junior Suite)", dims: "14'0\" × 11'6\"", sqft: 161, sqm: 15.0, pct: "11%", desc: "Ideal for parents or guests with attached bathroom and large window." },
        { name: "Bedroom 3 (Kids / Study)", dims: "12'6\" × 11'0\"", sqft: 138, sqm: 12.8, pct: "10%", desc: "Optimized for study desk, twin bedding, and acoustic wall insulation." },
        { name: "Bespoke Modular Kitchen", dims: "12'0\" × 9'0\"", sqft: 108, sqm: 10.0, pct: "7%", desc: "Agneya South-East aligned with granite counter & chimney provision." },
        { name: "Utility & Dry Balcony", dims: "7'6\" × 5'0\"", sqft: 38, sqm: 3.5, pct: "3%", desc: "Dedicated washing machine, dishwasher & drying utility area." },
        { name: "Common Bathrooms & Foyers", dims: "Various", sqft: 345, sqm: 32.1, pct: "23%", desc: "Includes grand entry foyer, guest powder room, and internal passages." }
      ]
    },
    '4bhk': {
      title: "4 BHK Ultra-Luxury Presidential Estate",
      carpetSqFt: 1950,
      carpetSqM: 181.2,
      priceEstimate: "₹3.50 Cr onwards",
      sundeckView: "270° Unobstructed Sus Hills & Greenery",
      rooms: [
        { name: "Grand Living & Dining Hall", dims: "26'6\" × 16'0\"", sqft: 424, sqm: 39.4, pct: "22%", desc: "Expansive double-depth hall with floor-to-ceiling glass fenestrations." },
        { name: "Private Scenic Sundeck", dims: "16'0\" × 7'6\"", sqft: 120, sqm: 11.1, pct: "6%", desc: "Massive outdoor lounge deck overlooking the protected hill ridgeline." },
        { name: "Presidential Master Suite", dims: "18'0\" × 14'0\"", sqft: 252, sqm: 23.4, pct: "13%", desc: "Palatial master retreat with private dressing foyer and wooden flooring." },
        { name: "Master Dressing & Luxury Bath", dims: "12'0\" × 8'6\"", sqft: 102, sqm: 9.5, pct: "5%", desc: "Walk-in wardrobe corridor with 5-fixture luxury bathroom and bathtub." },
        { name: "Bedroom 2 (Senior Suite)", dims: "15'0\" × 13'0\"", sqft: 195, sqm: 18.1, pct: "10%", desc: "Nairutya aligned bedroom with anti-skid premium flooring." },
        { name: "Bedroom 3 (Children's Suite)", dims: "14'6\" × 12'0\"", sqft: 174, sqm: 16.2, pct: "9%", desc: "Generous layout with attached bathroom and large study corner." },
        { name: "Bedroom 4 / Executive Office", dims: "13'0\" × 11'6\"", sqft: 150, sqm: 13.9, pct: "8%", desc: "Versatile space configured as high-tech home office or private library." },
        { name: "Gourmet Kitchen & Breakfast Bar", dims: "14'0\" × 10'6\"", sqft: 147, sqm: 13.7, pct: "8%", desc: "Includes parallel quartz countertops and separate pantry storage." },
        { name: "Domestic Staff Room & Utility", dims: "8'0\" × 6'0\"", sqft: 48, sqm: 4.5, pct: "2%", desc: "Independent domestic help quarters with separate service entry." },
        { name: "Private Lift Lobby & Foyers", dims: "Various", sqft: 338, sqm: 31.4, pct: "17%", desc: "Exclusive elevator core entrance and sound-dampened passages." }
      ]
    },
    '5bhk': {
      title: "5 BHK Double-Height Sky Duplex",
      carpetSqFt: 3400,
      carpetSqM: 315.9,
      priceEstimate: "₹5.50 Cr onwards",
      sundeckView: "270° Panoramic Hill View & City Skyline",
      rooms: [
        { name: "Double-Height Grand Living Room", dims: "30'0\" × 20'0\"", sqft: 600, sqm: 55.7, pct: "18%", desc: "Dramatic 20-foot ceiling height with double-story glass curtain facade." },
        { name: "Sky Terrace & Viewing Deck", dims: "20'0\" × 10'0\"", sqft: 200, sqm: 18.6, pct: "6%", desc: "Sprawling terrace designed for evening cocktail receptions & stargazing." },
        { name: "Lower Level Master Suite", dims: "20'0\" × 15'0\"", sqft: 300, sqm: 27.9, pct: "9%", desc: "Barrier-free luxury master suite designed for senior family heads." },
        { name: "Upper Level Presidential Suite", dims: "22'0\" × 16'0\"", sqft: 352, sqm: 32.7, pct: "10%", desc: "Private upper sanctuary with lounge, walk-in closet, and spa bath." },
        { name: "Family Entertainment Lounge", dims: "18'0\" × 14'0\"", sqft: 252, sqm: 23.4, pct: "7%", desc: "Dedicated upper-level private family theater and multimedia zone." },
        { name: "Bedrooms 3, 4 & 5 (Ensuite)", dims: "Various", sqft: 650, sqm: 60.4, pct: "19%", desc: "Three independent suites with attached luxury designer baths." },
        { name: "Chef's Kitchen & Island Counter", dims: "16'0\" × 12'0\"", sqft: 192, sqm: 17.8, pct: "6%", desc: "Island kitchen layout with separate wet and dry cooking zones." },
        { name: "Private Internal Elevator & Stairs", dims: "Custom", sqft: 150, sqm: 13.9, pct: "4%", desc: "Internal designer floating staircase and private glass pneumatic elevator." },
        { name: "Staff Quarters & Service Zones", dims: "Various", sqft: 704, sqm: 65.5, pct: "21%", desc: "Comprehensive service rooms, utility decks, and private lobbies." }
      ]
    },
    'penthouse': {
      title: "Signature Sky Penthouse with Private Terrace",
      carpetSqFt: 4500,
      carpetSqM: 418.1,
      priceEstimate: "₹6.50 Cr onwards",
      sundeckView: "360° Unobstructed Western Ghats & Sus Hills",
      rooms: [
        { name: "Palatial Great Hall & Grand Dining", dims: "36'0\" × 24'0\"", sqft: 864, sqm: 80.3, pct: "19%", desc: "Magnificent ballroom-scale living area with 270° curved glass facade." },
        { name: "Private Open-Air Sky Deck & Plunge Pool", dims: "28'0\" × 18'0\"", sqft: 504, sqm: 46.8, pct: "11%", desc: "Rooftop terrace with infinity plunge pool provision and cabana lounge." },
        { name: "Imperial Master Retreat", dims: "24'0\" × 18'0\"", sqft: 432, sqm: 40.1, pct: "10%", desc: "Private wing with his-and-her walk-in dressing suites and private balcony." },
        { name: "Imperial Spa Bathroom", dims: "16'0\" × 12'0\"", sqft: 192, sqm: 17.8, pct: "4%", desc: "Jacuzzi bath overlooking the hills with twin vanity and rainfall shower." },
        { name: "Guest Suites 2, 3 & 4", dims: "Various", sqft: 850, sqm: 79.0, pct: "19%", desc: "Three palatial suites each with private balconies and luxury ensuites." },
        { name: "Private Cinema / Cigar Lounge", dims: "20'0\" × 15'0\"", sqft: 300, sqm: 27.9, pct: "7%", desc: "Acoustically isolated screening theater and executive meeting suite." },
        { name: "Gourmet Show Kitchen & Butler Pantry", dims: "18'0\" × 14'0\"", sqft: 252, sqm: 23.4, pct: "6%", desc: "Fully automated smart kitchen with custom refrigeration and wine cellar." },
        { name: "Private Rooftop Entry & Staff Suites", dims: "Various", sqft: 1106, sqm: 102.8, pct: "24%", desc: "Direct keycard elevator access, twin staff suites, and utility zones." }
      ]
    }
  };

  const current = configurations[activeConfig];

  const handleConfigChange = (cfg) => {
    setActiveConfig(cfg);
    if (typeof window !== 'undefined') {
      window.dataLayer = window.dataLayer || [];
      window.dataLayer.push({
        event: 'spatial_calculator_view',
        configuration: cfg,
        unit: unit,
        pagePath: window.location.pathname
      });
    }
  };

  return (
    <div className="loc-card p-4 p-md-5" style={{ borderRadius: '20px', background: 'linear-gradient(145deg, rgba(20,20,24,0.98), rgba(12,12,16,0.99))', border: '1px solid rgba(212,175,55,0.3)', boxShadow: '0 25px 60px rgba(0,0,0,0.6)' }}>
      {/* Header */}
      <div className="d-flex justify-content-between align-items-center flex-wrap gap-3 mb-4">
        <div>
          <div className="d-flex align-items-center mb-1">
            <span className="material-symbols-outlined me-2" style={{ color: 'var(--color-primary)', fontSize: '2rem' }}>straighten</span>
            <h3 className="h4 mb-0 text-white fw-bold">Interactive Spatial Dimension Calculator</h3>
          </div>
          <p className="text-white-50 small mb-0">Room-by-room architectural carpet area analysis for Malpani M SoulStrings</p>
        </div>

        {/* Unit Toggle */}
        <div className="btn-group" role="group" style={{ background: 'rgba(255,255,255,0.05)', borderRadius: '30px', padding: '4px', border: '1px solid rgba(212,175,55,0.3)' }}>
          <button 
            type="button" 
            className={`btn btn-sm ${unit === 'sqft' ? 'btn-primary text-black' : 'text-white'}`}
            onClick={() => setUnit('sqft')}
            style={{ borderRadius: '20px', padding: '6px 16px', fontWeight: 'bold' }}
          >
            Sq.Ft.
          </button>
          <button 
            type="button" 
            className={`btn btn-sm ${unit === 'sqm' ? 'btn-primary text-black' : 'text-white'}`}
            onClick={() => setUnit('sqm')}
            style={{ borderRadius: '20px', padding: '6px 16px', fontWeight: 'bold' }}
          >
            Sq.M.
          </button>
        </div>
      </div>

      {/* Configuration Selectors */}
      <div className="row g-2 mb-4">
        <div className="col-6 col-md-3">
          <button 
            type="button" 
            className={`w-100 p-3 rounded-3 btn text-start ${activeConfig === '3bhk' ? 'btn-primary text-black' : 'btn-outline-secondary text-white'}`}
            onClick={() => handleConfigChange('3bhk')}
            style={{ border: '1px solid rgba(212,175,55,0.3)', transition: 'all 0.2s' }}
          >
            <div className="fw-bold small">3 BHK Luxury</div>
            <div className="small opacity-75">{unit === 'sqft' ? '1,450 sq.ft.' : '134.7 sq.m.'}</div>
          </button>
        </div>
        <div className="col-6 col-md-3">
          <button 
            type="button" 
            className={`w-100 p-3 rounded-3 btn text-start ${activeConfig === '4bhk' ? 'btn-primary text-black' : 'btn-outline-secondary text-white'}`}
            onClick={() => handleConfigChange('4bhk')}
            style={{ border: '1px solid rgba(212,175,55,0.3)', transition: 'all 0.2s' }}
          >
            <div className="fw-bold small">4 BHK Presidential</div>
            <div className="small opacity-75">{unit === 'sqft' ? '1,950 sq.ft.' : '181.2 sq.m.'}</div>
          </button>
        </div>
        <div className="col-6 col-md-3">
          <button 
            type="button" 
            className={`w-100 p-3 rounded-3 btn text-start ${activeConfig === '5bhk' ? 'btn-primary text-black' : 'btn-outline-secondary text-white'}`}
            onClick={() => handleConfigChange('5bhk')}
            style={{ border: '1px solid rgba(212,175,55,0.3)', transition: 'all 0.2s' }}
          >
            <div className="fw-bold small">5 BHK Sky Duplex</div>
            <div className="small opacity-75">{unit === 'sqft' ? '3,400 sq.ft.' : '315.9 sq.m.'}</div>
          </button>
        </div>
        <div className="col-6 col-md-3">
          <button 
            type="button" 
            className={`w-100 p-3 rounded-3 btn text-start ${activeConfig === 'penthouse' ? 'btn-primary text-black' : 'btn-outline-secondary text-white'}`}
            onClick={() => handleConfigChange('penthouse')}
            style={{ border: '1px solid rgba(212,175,55,0.3)', transition: 'all 0.2s' }}
          >
            <div className="fw-bold small">Sky Penthouse</div>
            <div className="small opacity-75">{unit === 'sqft' ? '4,500+ sq.ft.' : '418.1 sq.m.'}</div>
          </button>
        </div>
      </div>

      {/* Overview Stat Box */}
      <div className="p-3 p-md-4 rounded-3 mb-4" style={{ background: 'rgba(212,175,55,0.08)', border: '1px solid rgba(212,175,55,0.25)' }}>
        <div className="row align-items-center">
          <div className="col-md-7">
            <h4 className="h5 text-white fw-bold mb-1">{current.title}</h4>
            <div className="text-white-50 small mb-2">
              <span className="me-3"><strong>View Aspect:</strong> {current.sundeckView}</span>
              <span><strong>MahaRERA:</strong> P52100076782</span>
            </div>
          </div>
          <div className="col-md-5 text-md-end">
            <div className="display-6 fw-bold" style={{ color: 'var(--color-primary)' }}>
              {unit === 'sqft' ? `${current.carpetSqFt.toLocaleString()} Sq.Ft.` : `${current.carpetSqM} Sq.M.`}
            </div>
            <div className="text-white-50 small">Usable Carpet Area (RERA Approved)</div>
          </div>
        </div>
      </div>

      {/* Room by Room Table */}
      <div className="table-responsive mb-4">
        <table className="table table-dark table-hover mb-0" style={{ background: 'transparent', fontSize: '0.88rem' }}>
          <thead>
            <tr style={{ borderBottom: '2px solid rgba(212,175,55,0.4)', color: 'var(--color-primary)' }}>
              <th scope="col" style={{ width: '35%' }}>Spatial Zone / Room</th>
              <th scope="col" style={{ width: '20%' }}>Dimensions</th>
              <th scope="col" style={{ width: '15%' }}>Area ({unit === 'sqft' ? 'Sq.Ft.' : 'Sq.M.'})</th>
              <th scope="col" style={{ width: '30%' }}>Architectural Highlights</th>
            </tr>
          </thead>
          <tbody>
            {current.rooms.map((r, i) => (
              <tr key={i} style={{ borderBottom: '1px solid rgba(255,255,255,0.08)' }}>
                <td className="fw-bold text-white">
                  <div className="d-flex align-items-center">
                    <span className="badge me-2" style={{ background: 'rgba(212,175,55,0.15)', color: 'var(--color-primary)', fontSize: '0.75rem' }}>{r.pct}</span>
                    {r.name}
                  </div>
                </td>
                <td className="text-white-50">{r.dims}</td>
                <td className="fw-bold" style={{ color: 'var(--color-primary)' }}>
                  {unit === 'sqft' ? `${r.sqft} sq.ft.` : `${r.sqm} sq.m.`}
                </td>
                <td className="text-white-50 small">{r.desc}</td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>

      {/* CTA Trigger */}
      <div className="d-flex flex-wrap gap-3 pt-2 align-items-center justify-content-between">
        <div className="text-white-50 small">
          *100% Vastu Compliant layouts. Dimensions subject to structural architectural detailing.
        </div>
        <div className="d-flex gap-2">
          <a href="#" data-bs-toggle="modal" data-bs-target="#enquireModal" className="btn btn-primary px-4 py-2" style={{ borderRadius: '30px', fontWeight: 'bold' }}>
            Download Complete CAD Floor Plan PDF →
          </a>
        </div>
      </div>
    </div>
  );
}
