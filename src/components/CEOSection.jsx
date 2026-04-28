import React from 'react';

const CEOSection = () => (
  <section id="ceo" style={{ background: 'rgba(8, 3, 12, 0.6)' }}>
    <div style={{ maxWidth: '640px', margin: '0 auto', textAlign: 'center' }}>
      <span className="section-label">Founder</span>

      <div className="card" style={{ padding: '3rem 2rem' }}>
        <div style={{
          width: '72px', height: '72px',
          borderRadius: '50%',
          margin: '0 auto 1.5rem auto',
          background: 'linear-gradient(135deg, var(--pink-4), var(--pink-3))',
          display: 'flex', alignItems: 'center', justifyContent: 'center',
          fontSize: '1.3rem', fontWeight: 800,
          border: '2px solid var(--border)',
        }}>
          TG
        </div>

        <h2 style={{ fontSize: '1.9rem', marginBottom: '0.3rem' }}>Tanishk Gupta</h2>
        <p style={{
          color: 'var(--accent)',
          fontSize: '0.72rem',
          letterSpacing: '0.2em',
          textTransform: 'uppercase',
          fontWeight: 700,
          marginBottom: '1.5rem',
          fontFamily: "'Syncopate', sans-serif",
        }}>
          CEO &amp; Founder
        </p>

        <p style={{
          color: 'var(--text-muted)',
          lineHeight: 1.85,
          marginBottom: '2rem',
          maxWidth: '46ch',
          margin: '0 auto 2rem auto',
          fontSize: '0.97rem',
        }}>
          6 years of hands-on development experience. Tanishk leads the technical direction at Torrtus —
          obsessing over performance, design integrity, and building systems that genuinely last.
        </p>

        <a href="https://tanishkgupta.com" target="_blank" rel="noopener noreferrer">
          <button className="cta-button-outline">
            Meet the Founder &rarr;
          </button>
        </a>
      </div>
    </div>
  </section>
);

export default CEOSection;
