import React from 'react';

const CLIENTS = [
  'Menoob',
  'Yogic Soul',
  'Adroid Connectz',
  'Pahun Holidays',
  'Quantropy',
  'Archline Designs',
  'Maashakti NGO',
];

const Clients = () => (
  <div style={{
    borderTop: '1px solid var(--border-subtle)',
    borderBottom: '1px solid var(--border-subtle)',
    padding: '1.5rem 0',
    overflow: 'hidden',
    position: 'relative',
  }}>
    {/* Fade edges */}
    <div style={{
      position: 'absolute', top: 0, left: 0, width: '80px', height: '100%',
      background: 'linear-gradient(to right, var(--bg-dark), transparent)',
      zIndex: 2, pointerEvents: 'none',
    }} />
    <div style={{
      position: 'absolute', top: 0, right: 0, width: '80px', height: '100%',
      background: 'linear-gradient(to left, var(--bg-dark), transparent)',
      zIndex: 2, pointerEvents: 'none',
    }} />

    <div
      className="marquee-track"
      style={{ display: 'flex', gap: '4rem', width: 'max-content' }}
    >
      {[...CLIENTS, ...CLIENTS].map((name, i) => (
        <span key={i} style={{
          fontSize: '0.85rem',
          fontWeight: 600,
          color: 'var(--text-muted)',
          letterSpacing: '0.06em',
          textTransform: 'uppercase',
          whiteSpace: 'nowrap',
        }}>
          {name}
        </span>
      ))}
    </div>
  </div>
);

export default Clients;
