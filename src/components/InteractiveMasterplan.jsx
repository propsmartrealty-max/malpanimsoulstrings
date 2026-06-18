'use client';

import Image from 'next/image';

export default function InteractiveMasterplan() {
  const hotspots = [
    { id: 'tower-c', top: '35%', left: '45%', title: 'Tower C', specs: '4 BHK Ultra-Luxury | 1950 Sq.Ft', status: 'Available' },
    { id: 'tower-b', top: '55%', left: '25%', title: 'Tower B', specs: '3 BHK Premium | 1450 Sq.Ft', status: 'Few Units Left' },
    { id: 'clubhouse', top: '70%', left: '60%', title: 'Clubhouse & Pool', specs: '3-Tier Swimming Pool | Gym | Spa', status: 'Operational' },
  ];

  return (
    <div className="interactive-masterplan-container" style={{ position: 'relative', width: '100%', maxWidth: '1200px', margin: '0 auto', borderRadius: '15px', overflow: 'hidden', boxShadow: '0 10px 30px rgba(0,0,0,0.5)' }}>
      <Image 
        src="https://malpani-cms.firsteconomy.com/uploads/Master_plan_70440f35a4.jpg" 
        alt="Malpani M SoulStrings Masterplan" 
        width={1200} 
        height={800} 
        style={{ width: '100%', height: 'auto', display: 'block' }}
        unoptimized
      />
      
      {hotspots.map((spot) => (
        <div 
          key={spot.id} 
          className="hotspot"
          onClick={() => {
            if (typeof window !== 'undefined') {
              window.dataLayer = window.dataLayer || [];
              window.dataLayer.push({
                event: 'masterplan_hotspot_click',
                hotspotId: spot.id,
                hotspotTitle: spot.title,
                pagePath: window.location.pathname
              });
            }
          }}
          style={{
            position: 'absolute',
            top: spot.top,
            left: spot.left,
            width: '30px',
            height: '30px',
            background: 'rgba(212, 175, 55, 0.8)',
            border: '2px solid #fff',
            borderRadius: '50%',
            cursor: 'pointer',
            transform: 'translate(-50%, -50%)',
            boxShadow: '0 0 15px rgba(212, 175, 55, 0.8)',
            animation: 'pulse 2s infinite'
          }}
          title={`${spot.title} | ${spot.specs}`}
          data-bs-toggle="tooltip"
          data-bs-placement="top"
        >
          {/* Custom tooltip logic can be added here, using native Bootstrap tooltips for simplicity */}
          <div className="custom-tooltip" style={{
            position: 'absolute',
            bottom: '40px',
            left: '50%',
            transform: 'translateX(-50%)',
            background: '#0a0a0c',
            border: '1px solid #d4af37',
            color: '#fff',
            padding: '10px 15px',
            borderRadius: '8px',
            width: 'max-content',
            opacity: 0,
            pointerEvents: 'none',
            transition: 'opacity 0.3s ease',
            zIndex: 10
          }}>
            <h6 style={{ color: '#d4af37', margin: '0 0 5px 0' }}>{spot.title}</h6>
            <p style={{ margin: 0, fontSize: '0.85rem' }}>{spot.specs}</p>
            <span style={{ fontSize: '0.75rem', color: spot.status === 'Available' ? '#2ecc71' : '#f39c12' }}>{spot.status}</span>
          </div>
        </div>
      ))}

      <style jsx>{`
        .hotspot:hover .custom-tooltip {
          opacity: 1 !important;
        }
        @keyframes pulse {
          0% { box-shadow: 0 0 0 0 rgba(212, 175, 55, 0.7); }
          70% { box-shadow: 0 0 0 15px rgba(212, 175, 55, 0); }
          100% { box-shadow: 0 0 0 0 rgba(212, 175, 55, 0); }
        }
      `}</style>
    </div>
  );
}
