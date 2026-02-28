import React from 'react';
import { motion } from 'framer-motion';

const Clients = () => {
  const clients = [
    { name: "Menoob" },
    { name: "Yogic Soul" },
    { name: "Adroid Connectz" },
    { name: "Pahun Holidays" },
    { name: "Quantropy" },
    { name: "Archline Designs" },
    { name: "Maashakti NGO" }
  ];

  return (
    <section id="clients" style={{ background: 'rgba(5,5,10,0.5)', padding: '6rem 0' }}>
      <motion.div
        initial={{ opacity: 0 }}
        whileInView={{ opacity: 1 }}
        viewport={{ once: true }}
        style={{ textAlign: 'center', marginBottom: '3rem' }}
      >
        <h2 className="section-title" style={{ marginBottom: '1rem' }}>Our <span className="text-gradient">Partners in Scale</span></h2>
        <p style={{ color: 'var(--text-muted)' }}>Empowering brands to reach their true potential.</p>
      </motion.div>

      <div style={{ overflow: 'hidden', whiteSpace: 'nowrap', position: 'relative' }}>
        <motion.div
          animate={{ x: ["0%", "-50%"] }}
          transition={{ duration: 25, repeat: Infinity, ease: "linear" }}
          style={{ display: 'flex', gap: '3rem', width: 'fit-content' }}
        >
          {/* Double the list to create seamless infinite scroll */}
          {[...clients, ...clients].map((client, idx) => (
            <div 
              key={idx} 
              className="glass-panel"
              style={{
                display: 'inline-flex',
                alignItems: 'center',
                justifyContent: 'center',
                padding: '1.5rem 3rem',
                minWidth: '200px',
                margin: '0 1rem'
              }}
            >
              <span style={{ fontSize: '1.2rem', fontWeight: 600, color: 'var(--text-main)' }}>
                {client.name}
              </span>
            </div>
          ))}
        </motion.div>
      </div>
    </section>
  );
};

export default Clients;
