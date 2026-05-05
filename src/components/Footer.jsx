import React from 'react';
import { Link } from 'react-router-dom';

const LINKS = [
  { label: 'Privacy Policy', to: '/privacy' },
  { label: 'Terms of Service', to: '/terms' },
  { label: 'Contact', to: '/#connect' },
];

const Footer = () => (
  <footer style={{
    borderTop: '1px solid var(--border-subtle)',
    padding: '2.5rem 1.5rem',
    textAlign: 'center',
  }}>
    <div style={{
      fontFamily: "'Syncopate', sans-serif",
      fontSize: '0.75rem',
      fontWeight: 700,
      letterSpacing: '0.25em',
      marginBottom: '0.6rem',
      color: 'var(--text-main)',
    }}>
      TORRTUS
    </div>

    <p style={{ color: 'var(--text-muted)', fontSize: '0.82rem', marginBottom: '1.25rem' }}>
      &copy; {new Date().getFullYear()} Torrtus IT Services. All Rights Reserved.
    </p>

    <div style={{ display: 'flex', justifyContent: 'center', gap: '1.75rem', flexWrap: 'wrap' }}>
      {LINKS.map(({ label, to }) => (
        <Link
          key={label}
          to={to}
          style={{ color: 'var(--text-muted)', fontSize: '0.82rem', transition: 'color 0.2s' }}
          onMouseEnter={e => e.currentTarget.style.color = 'var(--accent)'}
          onMouseLeave={e => e.currentTarget.style.color = 'var(--text-muted)'}
        >
          {label}
        </Link>
      ))}
    </div>
  </footer>
);

export default Footer;
