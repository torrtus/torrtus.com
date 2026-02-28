import React, { useState, useEffect } from 'react';
import { motion } from 'framer-motion';

const Navbar = () => {
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 50);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <motion.nav
      initial={{ y: -100 }}
      animate={{ y: 0 }}
      transition={{ duration: 0.8, ease: "easeOut" }}
      style={{
        position: 'fixed',
        top: 0,
        left: 0,
        width: '100%',
        padding: '1.5rem 5%',
        display: 'flex',
        justifyContent: 'space-between',
        alignItems: 'center',
        zIndex: 100,
        background: scrolled ? 'rgba(5, 5, 10, 0.8)' : 'transparent',
        backdropFilter: scrolled ? 'blur(10px)' : 'none',
        borderBottom: scrolled ? '1px solid var(--glass-border)' : '1px solid transparent',
        transition: 'all 0.3s ease'
      }}
    >
      <div style={{ display: 'flex', flexDirection: 'column', alignItems: 'center', justifyContent: 'center', zIndex: 10, cursor: 'none' }}>
        <div style={{ position: 'relative', width: '60px', height: '45px', display: 'flex', justifyContent: 'center', overflow: 'hidden' }}>
          {/* Glowing Aura (The Sun/Star) */}
          <motion.div
            animate={{ opacity: [0.7, 1, 0.7], scale: [1, 1.05, 1] }}
            transition={{ duration: 4, repeat: Infinity, ease: 'easeInOut' }}
            style={{
              position: 'absolute',
              width: '40px',
              height: '40px',
              borderRadius: '50%',
              background: 'linear-gradient(270deg, #482d61, #da66a7, #92508a)',
              filter: 'blur(6px)',
              top: '8px'
            }}
          />
          {/* The eclipsing dark planet */}
          <div
            style={{
              position: 'absolute',
              width: '44px',
              height: '44px',
              borderRadius: '50%',
              background: 'var(--bg-dark)',
              top: '20px',
              zIndex: 2,
              boxShadow: 'inset 0 4px 6px rgba(0,0,0,0.5)'
            }}
          />
        </div>
        <div style={{ 
          fontFamily: "'Syncopate', sans-serif", 
          fontSize: '0.65rem', 
          letterSpacing: '0.3em', 
          fontWeight: 700,
          color: 'var(--text-main)',
          marginLeft: '0.3em', // offset tracking
          marginTop: '-4px',
          zIndex: 3
        }}>
          TORRTUS
        </div>
      </div>
      <div style={{ display: 'flex', gap: '2rem' }}>
        <a href="#about" style={{ fontWeight: 600, color: 'var(--text-main)', transition: 'color 0.3s' }}>About</a>
        <a href="#services" style={{ fontWeight: 600, color: 'var(--text-main)', transition: 'color 0.3s' }}>Services</a>
        <a href="#features" style={{ fontWeight: 600, color: 'var(--text-main)', transition: 'color 0.3s' }}>Features</a>
        <a href="#ceo" style={{ fontWeight: 600, color: 'var(--accent-cyan)', transition: 'color 0.3s' }}>Founder</a>
      </div>
    </motion.nav>
  );
};

export default Navbar;
