import React from 'react';
import { motion } from 'framer-motion';

const CEOSection = () => {
  return (
    <section id="ceo" style={{ textAlign: 'center', margin: '4rem auto 8rem auto' }}>
      <motion.div
        className="glass-panel"
        style={{ maxWidth: '800px', margin: '0 auto', padding: '4rem 2rem' }}
        initial={{ opacity: 0, scale: 0.9 }}
        whileInView={{ opacity: 1, scale: 1 }}
        viewport={{ once: true }}
        transition={{ duration: 0.8 }}
      >
        <div style={{
          width: '120px', height: '120px',
          borderRadius: '50%',
          margin: '0 auto 2rem auto',
          background: 'linear-gradient(45deg, var(--accent-purple), var(--accent-cyan))',
          display: 'flex', justifyContent: 'center', alignItems: 'center',
          fontSize: '2.5rem', fontWeight: 'bold'
        }}>
          TG
        </div>
        <h2 style={{ fontSize: '2.5rem', marginBottom: '1rem' }}>Tanishk Gupta</h2>
        <h4 style={{ color: 'var(--accent-cyan)', fontSize: '1.2rem', marginBottom: '2rem', letterSpacing: '2px', textTransform: 'uppercase' }}>
          CEO / Founder
        </h4>
        <p style={{ color: 'var(--text-muted)', fontSize: '1.1rem', lineHeight: 1.7, marginBottom: '3rem', maxWidth: '600px', margin: '0 auto 3rem auto' }}>
          With 6 years of deep development experience, Tanishk steers the technical vision of Torrtus, obsessing over performance, aesthetics, and autonomous capabilities.
        </p>
        
        <a 
          href="https://tanishkgupta.com" 
          target="_blank" 
          rel="noopener noreferrer"
          style={{ display: 'inline-block' }}
        >
          <motion.button 
            className="cta-button"
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
            style={{ 
              background: 'transparent', 
              border: '1px solid var(--accent-cyan)', 
              boxShadow: '0 0 15px rgba(0, 240, 255, 0.2)' 
            }}
          >
            Meet The Founder
          </motion.button>
        </a>
      </motion.div>
    </section>
  );
};

export default CEOSection;
