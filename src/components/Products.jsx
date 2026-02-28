import React from 'react';
import { motion } from 'framer-motion';
import { ShieldCheck, QrCode, SmartphoneNfc, Fingerprint } from 'lucide-react';

const Products = () => {
  const products = [
    {
      title: "NFC Authentication",
      icon: <SmartphoneNfc size={40} color="var(--accent-cyan)" />,
      desc: "Instant tap-to-verify secure physical products via mobile."
    },
    {
      title: "Dynamic QR Codes",
      icon: <QrCode size={40} color="var(--accent-purple)" />,
      desc: "Trackable, updateable QR campaigns tailored for marketing & engagement."
    },
    {
      title: "Company NFC Tags",
      icon: <Fingerprint size={40} color="var(--accent-blue)" />,
      desc: "Smart digital business cards and employee access systems."
    },
    {
      title: "Product Authenticity",
      icon: <ShieldCheck size={40} color="#00ffcc" />,
      desc: "Anti-counterfeit cryptographic validations for luxury and consumer goods."
    }
  ];

  return (
    <section id="products">
      <motion.div
        initial={{ opacity: 0, y: 30 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        style={{ textAlign: 'center', marginBottom: '4rem' }}
      >
        <h2 className="section-title">Physical Meets <span className="text-gradient">Digital</span></h2>
        <p style={{ color: 'var(--text-muted)', maxWidth: '600px', margin: '0 auto' }}>Leverage App Clips, NFC, and QR technology to bridge the gap between offline interactions and intelligent digital systems.</p>
      </motion.div>

      <div className="grid-2">
        {products.map((prod, idx) => (
          <motion.div
            key={idx}
            className="glass-panel"
            initial={{ opacity: 0, scale: 0.9 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: idx * 0.1 }}
            style={{ padding: '2.5rem', display: 'flex', gap: '1.5rem', alignItems: 'center' }}
          >
            <div style={{ padding: '1rem', background: 'rgba(255,255,255,0.05)', borderRadius: '12px' }}>
              {prod.icon}
            </div>
            <div>
              <h3 style={{ fontSize: '1.3rem', marginBottom: '0.5rem' }}>{prod.title}</h3>
              <p style={{ color: 'var(--text-muted)', lineHeight: 1.5 }}>{prod.desc}</p>
            </div>
          </motion.div>
        ))}
      </div>
    </section>
  );
};

export default Products;
