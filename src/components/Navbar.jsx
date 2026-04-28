import React, { useState, useEffect } from 'react';

const NAV_LINKS = [
  { href: '#about',    label: 'About' },
  { href: '#services', label: 'Services' },
  { href: '#features', label: 'Why Us' },
  { href: '#query',    label: 'Start a Project' },
];

const Navbar = () => {
  const [scrolled,  setScrolled]  = useState(false);
  const [menuOpen,  setMenuOpen]  = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 50);
    window.addEventListener('scroll', onScroll, { passive: true });
    return () => window.removeEventListener('scroll', onScroll);
  }, []);

  // Lock body scroll when mobile menu is open
  useEffect(() => {
    document.body.style.overflow = menuOpen ? 'hidden' : '';
    return () => { document.body.style.overflow = ''; };
  }, [menuOpen]);

  const goto = (href) => {
    setMenuOpen(false);
    setTimeout(() => {
      document.querySelector(href)?.scrollIntoView({ behavior: 'smooth' });
    }, menuOpen ? 350 : 0);
  };

  return (
    <>
      <nav style={{
        position: 'fixed',
        top: 0, left: 0,
        width: '100%',
        padding: '0.9rem 1.5rem',
        display: 'flex',
        justifyContent: 'space-between',
        alignItems: 'center',
        zIndex: 200,
        background: scrolled ? 'rgba(9, 3, 11, 0.92)' : 'transparent',
        backdropFilter: scrolled ? 'blur(14px)' : 'none',
        WebkitBackdropFilter: scrolled ? 'blur(14px)' : 'none',
        borderBottom: `1px solid ${scrolled ? 'var(--border)' : 'transparent'}`,
        transition: 'background 0.3s, border-color 0.3s',
      }}>
        {/* Logo */}
        <a
          href="#"
          onClick={e => { e.preventDefault(); window.scrollTo({ top: 0, behavior: 'smooth' }); setMenuOpen(false); }}
          style={{ display: 'flex', alignItems: 'center', gap: '0.6rem', textDecoration: 'none' }}
        >
          <div style={{ position: 'relative', width: '30px', height: '30px', flexShrink: 0 }}>
            <div style={{
              position: 'absolute', inset: 0,
              borderRadius: '50%',
              background: 'linear-gradient(135deg, #482d61, #da66a7)',
              filter: 'blur(4px)',
            }} />
            <div style={{
              position: 'absolute',
              width: '18px', height: '18px',
              borderRadius: '50%',
              background: 'var(--bg-dark)',
              bottom: 0, right: 0,
            }} />
          </div>
          <span style={{
            fontFamily: "'Syncopate', sans-serif",
            fontSize: '0.65rem',
            letterSpacing: '0.22em',
            fontWeight: 700,
            color: 'var(--text-main)',
          }}>
            TORRTUS
          </span>
        </a>

        {/* Desktop links */}
        <div className="desktop-nav" style={{ gap: '2rem', alignItems: 'center' }}>
          {NAV_LINKS.map(l => (
            <a
              key={l.href}
              href={l.href}
              onClick={e => { e.preventDefault(); goto(l.href); }}
              style={{
                fontSize: '0.88rem',
                fontWeight: 600,
                color: 'var(--text-muted)',
                transition: 'color 0.2s',
              }}
              onMouseEnter={e => e.currentTarget.style.color = 'var(--text-main)'}
              onMouseLeave={e => e.currentTarget.style.color = 'var(--text-muted)'}
            >
              {l.label}
            </a>
          ))}
          <a
            href="mailto:team@torrtus.com"
            style={{
              fontSize: '0.88rem',
              fontWeight: 700,
              background: 'var(--accent)',
              color: '#fff',
              padding: '0.45rem 1.1rem',
              borderRadius: '6px',
              transition: 'background 0.2s',
            }}
            onMouseEnter={e => e.currentTarget.style.background = 'var(--pink-1)'}
            onMouseLeave={e => e.currentTarget.style.background = 'var(--accent)'}
          >
            Contact
          </a>
        </div>

        {/* Hamburger button */}
        <button
          className="hamburger"
          onClick={() => setMenuOpen(v => !v)}
          aria-label="Toggle navigation"
          style={{
            flexDirection: 'column',
            gap: '5px',
            background: 'none',
            border: 'none',
            cursor: 'pointer',
            padding: '4px',
            zIndex: 210,
          }}
        >
          <span style={{
            display: 'block', width: '22px', height: '2px',
            background: 'var(--text-main)',
            borderRadius: '2px',
            transition: 'transform 0.3s',
            transform: menuOpen ? 'translateY(7px) rotate(45deg)' : 'none',
          }} />
          <span style={{
            display: 'block', width: '22px', height: '2px',
            background: 'var(--text-main)',
            borderRadius: '2px',
            transition: 'opacity 0.3s',
            opacity: menuOpen ? 0 : 1,
          }} />
          <span style={{
            display: 'block', width: '22px', height: '2px',
            background: 'var(--text-main)',
            borderRadius: '2px',
            transition: 'transform 0.3s',
            transform: menuOpen ? 'translateY(-7px) rotate(-45deg)' : 'none',
          }} />
        </button>
      </nav>

      {/* Mobile overlay menu */}
      <div style={{
        position: 'fixed',
        inset: 0,
        background: 'var(--bg-dark)',
        zIndex: 199,
        display: 'flex',
        flexDirection: 'column',
        alignItems: 'center',
        justifyContent: 'center',
        gap: '2.5rem',
        transform: menuOpen ? 'translateX(0)' : 'translateX(100%)',
        transition: 'transform 0.35s cubic-bezier(0.4, 0, 0.2, 1)',
        pointerEvents: menuOpen ? 'auto' : 'none',
      }}>
        {NAV_LINKS.map(l => (
          <a
            key={l.href}
            href={l.href}
            onClick={e => { e.preventDefault(); goto(l.href); }}
            style={{ fontSize: '1.8rem', fontWeight: 800, color: 'var(--text-main)' }}
          >
            {l.label}
          </a>
        ))}
        <a
          href="mailto:team@torrtus.com"
          style={{ fontSize: '0.95rem', color: 'var(--accent)', fontWeight: 600, marginTop: '1rem' }}
        >
          team@torrtus.com
        </a>
      </div>
    </>
  );
};

export default Navbar;
