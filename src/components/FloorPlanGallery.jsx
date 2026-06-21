'use client';
import { useState } from 'react';
import Image from 'next/image';

const tabs = [
  {
    id: 'master',
    label: 'Master Plan',
    image: 'https://malpani-cms.firsteconomy.com/uploads/m_soulstrings_Masterplan_da0ad90428.png',
    desc: 'Over 35+ amenities spread across acres of ultra-luxury landscape.'
  },
  {
    id: 'towerB',
    label: 'Tower B Typical',
    image: 'https://malpani-cms.firsteconomy.com/uploads/Tower_B_Typical_Floor_Plan_d8871dabad.png',
    desc: 'Expansive 3BHK and 4BHK configurations maximizing ventilation and sunlight.'
  },
  {
    id: 'towerC',
    label: 'Tower C Typical',
    image: 'https://malpani-cms.firsteconomy.com/uploads/Tower_C_Typical_Floor_Plan_a1e5399ac9.png',
    desc: 'Premium core units featuring ultra-luxury bespoke specifications.'
  }
];

export default function FloorPlanGallery() {
  const [activeTab, setActiveTab] = useState('master');

  const currentPlan = tabs.find(t => t.id === activeTab);

  return (
    <div className="floor-plan-gallery">
      <div className="gallery-tabs" style={{ display: 'flex', justifyContent: 'center', gap: '1rem', marginBottom: '2rem', flexWrap: 'wrap' }}>
        {tabs.map((tab) => (
          <button
            key={tab.id}
            onClick={() => setActiveTab(tab.id)}
            style={{
              padding: '0.75rem 2rem',
              borderRadius: '30px',
              border: '1px solid var(--color-primary)',
              background: activeTab === tab.id ? 'var(--color-primary)' : 'transparent',
              color: activeTab === tab.id ? '#fff' : 'var(--color-primary)',
              cursor: 'pointer',
              fontWeight: '600',
              transition: 'all 0.3s ease'
            }}
          >
            {tab.label}
          </button>
        ))}
      </div>

      <div className="gallery-content fade-in-up loc-card" style={{ padding: '2rem', borderRadius: '16px', textAlign: 'center', background: 'var(--color-surface)' }}>
        <div style={{ position: 'relative', width: '100%', maxWidth: '1000px', margin: '0 auto', overflow: 'hidden', borderRadius: '8px' }}>
          <Image 
            src={currentPlan.image} 
            alt={`Malpani M SoulStrings ${currentPlan.label} Baner Pashan Link Road Pune`} 
            width={1200} 
            height={800} 
            style={{ width: '100%', height: 'auto', display: 'block', transition: 'opacity 0.5s ease-in-out' }} 
            key={currentPlan.id} // Forces re-render for fade effect if we had css, but standard works too
          />
        </div>
        <p style={{ marginTop: '2rem', color: 'var(--color-text-muted)', fontSize: '1.1rem' }}>
          {currentPlan.desc}
        </p>
      </div>
    </div>
  );
}
