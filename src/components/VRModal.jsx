'use client';

export default function VRModal() {
  return (
    <div className="modal fade" id="vrModal" tabIndex="-1" aria-labelledby="vrModalLabel" aria-hidden="true">
      <div className="modal-dialog modal-fullscreen">
        <div className="modal-content" style={{ background: '#0a0a0c' }}>
          <div className="modal-header" style={{ borderBottom: '1px solid rgba(212, 175, 55, 0.2)', padding: '1rem 2rem' }}>
            <h5 className="modal-title" id="vrModalLabel" style={{ color: '#d4af37', display: 'flex', alignItems: 'center', gap: '10px' }}>
              <span className="material-symbols-outlined">view_in_ar</span>
              M SoulStrings 3D Walkthrough
            </h5>
            <button type="button" className="btn-close btn-close-white" data-bs-dismiss="modal" aria-label="Close" style={{ filter: 'invert(1) grayscale(100%) brightness(200%)' }}></button>
          </div>
          <div className="modal-body" style={{ padding: 0, position: 'relative' }}>
            <iframe 
              src="https://connector.eagle3dstreaming.com/v5/Naman/SoulStrings/wow" 
              style={{ width: '100%', height: '100%', border: 'none' }}
              allow="autoplay; fullscreen; vr"
              title="Malpani VR Tour"
            />
          </div>
        </div>
      </div>
    </div>
  );
}
