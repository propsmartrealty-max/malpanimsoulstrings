"use client";

import React, { useState } from 'react';

export default function SunPathSimulator() {
  const [timeIndex, setTimeIndex] = useState(0); // 0: Sunrise, 1: Morning, 2: Midday, 3: Sunset, 4: Night
  const [season, setSeason] = useState('winter'); // 'summer' | 'monsoon' | 'winter'

  const timeStates = [
    {
      label: "Dawn & Hill Sunrise",
      time: "06:30 AM",
      icon: "wb_twilight",
      sunAngle: "East 15° Elevation",
      temperature: "19°C (Cool Hill Breeze)",
      lightTone: "Soft Amber & Rose Gold",
      ambientDesc: "East-facing sundecks are bathed in therapeutic early morning sunlight. Mountain mist rises from the protected Sus Hills.",
      vastuImpact: "Surya Prabhav: Positive energetic awakening across Living Room and East balconies.",
      bgGradient: "linear-gradient(135deg, rgba(230,138,46,0.3) 0%, rgba(20,20,28,0.95) 100%)",
      glowColor: "#E68A2E"
    },
    {
      label: "Morning Peak Radiance",
      time: "09:30 AM",
      icon: "wb_sunny",
      sunAngle: "South-East 45° Elevation",
      temperature: "24°C (Crisp & Clear)",
      lightTone: "Brilliant Natural Daylight",
      ambientDesc: "Optimal natural light fills the formal dining area and study rooms, minimizing artificial lighting needs.",
      vastuImpact: "Agni Alignment: Harmonious thermal activation of South-East bespoke modular kitchens.",
      bgGradient: "linear-gradient(135deg, rgba(212,175,55,0.3) 0%, rgba(20,20,28,0.95) 100%)",
      glowColor: "#D4AF37"
    },
    {
      label: "Midday Solar Zenith",
      time: "01:00 PM",
      icon: "light_mode",
      sunAngle: "South 75° High Zenith",
      temperature: "28°C (2°C Cooler Than City)",
      lightTone: "Direct Crisp Luminescence",
      ambientDesc: "Acoustic Double-Glazed Units (DGU) and deep balcony cantilevers completely shield the interior from excess heat.",
      vastuImpact: "Brahmasthan Balance: Open central living zones remain naturally ventilated with cross-breezes.",
      bgGradient: "linear-gradient(135deg, rgba(255,215,0,0.2) 0%, rgba(20,20,28,0.95) 100%)",
      glowColor: "#FFD700"
    },
    {
      label: "Sunset & Golden Hour",
      time: "05:45 PM",
      icon: "bedtime",
      sunAngle: "West-Northwest 20° Horizon",
      temperature: "22°C (Evening Hill Draft)",
      lightTone: "Deep Crimson & Violet Twilight",
      ambientDesc: "270-degree panoramic sunset hues over the Sus Hills ridge. Ideal for evening tea or private cocktail decks.",
      vastuImpact: "Varuna Serenity: Calming transition energy across master bedrooms and family viewing lounges.",
      bgGradient: "linear-gradient(135deg, rgba(186,85,211,0.3) 0%, rgba(20,20,28,0.95) 100%)",
      glowColor: "#BA55D3"
    },
    {
      label: "Starlit Mountain Night",
      time: "09:30 PM",
      icon: "nights_stay",
      sunAngle: "Celestial Starlight (Zero Light Pollution)",
      temperature: "18°C (Fresh Mountain Air)",
      lightTone: "Starlit Midnight Velvet",
      ambientDesc: "Zero traffic noise, crisp mountain air, and panoramic views of illuminated city lights in the distant horizon.",
      vastuImpact: "Soma Rest: Quietude and acoustic tranquility supporting deep restorative sleep.",
      bgGradient: "linear-gradient(135deg, rgba(30,30,60,0.4) 0%, rgba(10,10,14,0.99) 100%)",
      glowColor: "#6495ED"
    }
  ];

  const current = timeStates[timeIndex];

  const handleTimeChange = (idx) => {
    setTimeIndex(idx);
    if (typeof window !== 'undefined') {
      window.dataLayer = window.dataLayer || [];
      window.dataLayer.push({
        event: 'sun_simulator_slide',
        timeLabel: timeStates[idx].label,
        season: season,
        pagePath: window.location.pathname
      });
    }
  };

  return (
    <div className="loc-card p-4 p-md-5" style={{ borderRadius: '20px', background: current.bgGradient, border: '1px solid rgba(212,175,55,0.3)', boxShadow: '0 25px 60px rgba(0,0,0,0.6)', transition: 'background 0.5s ease' }}>
      {/* Header */}
      <div className="d-flex justify-content-between align-items-center flex-wrap gap-3 mb-4">
        <div>
          <div className="d-flex align-items-center mb-1">
            <span className="material-symbols-outlined me-2" style={{ color: current.glowColor, fontSize: '2rem', transition: 'color 0.3s' }}>
              {current.icon}
            </span>
            <h3 className="h4 mb-0 text-white fw-bold">270° Hill View Horizon &amp; Sun Path Simulator</h3>
          </div>
          <p className="text-white-50 small mb-0">Experience real-time solar orientation, natural illumination, and micro-climate across all seasons</p>
        </div>

        {/* Season Selector */}
        <div className="btn-group" role="group" style={{ background: 'rgba(255,255,255,0.05)', borderRadius: '30px', padding: '4px', border: '1px solid rgba(212,175,55,0.3)' }}>
          <button 
            type="button" 
            className={`btn btn-sm ${season === 'winter' ? 'btn-primary text-black' : 'text-white'}`}
            onClick={() => setSeason('winter')}
            style={{ borderRadius: '20px', padding: '6px 14px', fontSize: '0.8rem', fontWeight: 'bold' }}
          >
            Winter Solstice
          </button>
          <button 
            type="button" 
            className={`btn btn-sm ${season === 'summer' ? 'btn-primary text-black' : 'text-white'}`}
            onClick={() => setSeason('summer')}
            style={{ borderRadius: '20px', padding: '6px 14px', fontSize: '0.8rem', fontWeight: 'bold' }}
          >
            Summer Breeze
          </button>
          <button 
            type="button" 
            className={`btn btn-sm ${season === 'monsoon' ? 'btn-primary text-black' : 'text-white'}`}
            onClick={() => setSeason('monsoon')}
            style={{ borderRadius: '20px', padding: '6px 14px', fontSize: '0.8rem', fontWeight: 'bold' }}
          >
            Lush Monsoon
          </button>
        </div>
      </div>

      {/* Interactive Time Slider */}
      <div className="mb-4">
        <div className="d-flex justify-content-between text-white small fw-bold mb-2">
          <span>{timeStates[0].time} (Sunrise)</span>
          <span style={{ color: current.glowColor, fontSize: '1rem' }}>{current.time} — {current.label}</span>
          <span>{timeStates[4].time} (Night)</span>
        </div>
        <input 
          type="range" 
          className="form-range" 
          id="sunSlider" 
          min="0" 
          max="4" 
          step="1" 
          value={timeIndex} 
          onChange={(e) => handleTimeChange(Number(e.target.value))}
          style={{ accentColor: current.glowColor, height: '8px', cursor: 'pointer' }}
        />
        <div className="d-flex justify-content-between text-white-50" style={{ fontSize: '0.75rem', marginTop: '4px' }}>
          {timeStates.map((st, i) => (
            <span key={i} onClick={() => handleTimeChange(i)} style={{ cursor: 'pointer', fontWeight: timeIndex === i ? 'bold' : 'normal', color: timeIndex === i ? '#fff' : 'rgba(255,255,255,0.4)' }}>
              {st.label.split(' ')[0]}
            </span>
          ))}
        </div>
      </div>

      {/* Visual Simulation Display Box */}
      <div className="p-4 rounded-3 mb-4" style={{ background: 'rgba(10,10,14,0.7)', border: `1px solid ${current.glowColor}40`, backdropFilter: 'blur(10px)' }}>
        <div className="row g-4 align-items-center">
          <div className="col-md-7">
            <div className="d-flex align-items-center gap-2 mb-2">
              <span className="badge px-3 py-1" style={{ background: `${current.glowColor}25`, color: current.glowColor, border: `1px solid ${current.glowColor}50` }}>
                {current.sunAngle}
              </span>
              <span className="text-white small"><strong>Estimated Temp:</strong> {current.temperature}</span>
            </div>
            <h4 className="text-white h5 fw-bold mb-2">{current.lightTone}</h4>
            <p className="text-white-50 small mb-3" style={{ lineHeight: '1.7' }}>{current.ambientDesc}</p>

            <div className="p-3 rounded-2" style={{ background: 'rgba(212,175,55,0.08)', borderLeft: `3px solid ${current.glowColor}` }}>
              <span className="text-white fw-bold small d-block mb-1">Vastu Shastra &amp; Biophilic Harmony:</span>
              <span className="text-white-50 small" style={{ lineHeight: '1.6' }}>{current.vastuImpact}</span>
            </div>
          </div>

          <div className="col-md-5 text-center">
            {/* Visual Solar Compass Indicator */}
            <div className="p-3 rounded-circle d-inline-flex align-items-center justify-content-center" style={{ width: '180px', height: '180px', border: `2px dashed ${current.glowColor}60`, background: 'rgba(255,255,255,0.02)', position: 'relative' }}>
              <div style={{ position: 'absolute', top: '8px', color: '#d4af37', fontSize: '0.75rem', fontWeight: 'bold' }}>N (Sus Hills)</div>
              <div style={{ position: 'absolute', right: '8px', color: '#d4af37', fontSize: '0.75rem', fontWeight: 'bold' }}>E (Sunrise)</div>
              <div style={{ position: 'absolute', bottom: '8px', color: '#d4af37', fontSize: '0.75rem', fontWeight: 'bold' }}>S (Agni)</div>
              <div style={{ position: 'absolute', left: '8px', color: '#d4af37', fontSize: '0.75rem', fontWeight: 'bold' }}>W (Sunset)</div>
              <div className="text-center">
                <span className="material-symbols-outlined d-block mb-1" style={{ fontSize: '2.5rem', color: current.glowColor }}>
                  {current.icon}
                </span>
                <span className="text-white fw-bold small">{current.time}</span>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* CTA Trigger */}
      <div className="d-flex flex-wrap gap-3 align-items-center justify-content-between">
        <div className="text-white-50 small">
          *Permanent 270° hillside greenery guaranteed by adjacent protected forest reservations.
        </div>
        <a href="#" data-bs-toggle="modal" data-bs-target="#enquireModal" className="btn btn-primary px-4 py-2" style={{ borderRadius: '30px', fontWeight: 'bold' }}>
          Schedule Sunset View Walkthrough →
        </a>
      </div>
    </div>
  );
}
