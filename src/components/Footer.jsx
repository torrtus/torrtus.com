import React from 'react';

const Footer = () => {
  return (
    <footer style={{ 
      borderTop: '1px solid var(--glass-border)',
      padding: '3rem 5%',
      textAlign: 'center',
      background: 'rgba(5, 5, 10, 0.5)',
      marginTop: 'auto'
    }}>
      <div style={{ fontSize: '1.5rem', fontWeight: 800, letterSpacing: '1px', marginBottom: '1rem' }}>
        TORR<span className="text-gradient">TUS</span>
      </div>
      <p style={{ color: 'var(--text-muted)', fontSize: '0.9rem', marginBottom: '2rem' }}>
        © {new Date().getFullYear()} Torrtus IT Services. All Rights Reserved.
      </p>
      <div style={{ display: 'flex', justifyContent: 'center', gap: '2rem' }}>
        <a href="#" style={{ color: 'var(--text-muted)', transition: 'color 0.3s' }} onMouseOver={(e) => e.target.style.color='var(--accent-cyan)'} onMouseOut={(e) => e.target.style.color='var(--text-muted)'}>Privacy Policy</a>
        <a href="#" style={{ color: 'var(--text-muted)', transition: 'color 0.3s' }} onMouseOver={(e) => e.target.style.color='var(--accent-cyan)'} onMouseOut={(e) => e.target.style.color='var(--text-muted)'}>Terms of Service</a>
        <a href="#" style={{ color: 'var(--text-muted)', transition: 'color 0.3s' }} onMouseOver={(e) => e.target.style.color='var(--accent-cyan)'} onMouseOut={(e) => e.target.style.color='var(--text-muted)'}>Contact</a>
      </div>
    </footer>
  );
};

export default Footer;
