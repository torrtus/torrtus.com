import React from 'react';
import { ShieldCheck, QrCode, SmartphoneNfc, Fingerprint } from 'lucide-react';

const PRODUCTS = [
  {
    icon: <SmartphoneNfc size={24} />,
    title: 'NFC Authentication',
    desc: 'Instant tap-to-verify secure physical products via mobile.',
  },
  {
    icon: <QrCode size={24} />,
    title: 'Dynamic QR Codes',
    desc: 'Trackable, updateable QR campaigns tailored for marketing & engagement.',
  },
  {
    icon: <Fingerprint size={24} />,
    title: 'Company NFC Tags',
    desc: 'Smart digital business cards and employee access systems.',
  },
  {
    icon: <ShieldCheck size={24} />,
    title: 'Product Authenticity',
    desc: 'Anti-counterfeit cryptographic validations for luxury and consumer goods.',
  },
];

const Products = () => (
  <section id="products">
    <span className="section-label" style={{ textAlign: 'center' }}>Physical × Digital</span>
    <h2 className="section-title" style={{ textAlign: 'center' }}>
      Physical Meets <span className="text-gradient">Digital</span>
    </h2>
    <p style={{
      textAlign: 'center',
      color: 'var(--text-muted)',
      maxWidth: '52ch',
      margin: '-1.5rem auto 3rem auto',
      lineHeight: 1.75,
      fontSize: '0.95rem',
    }}>
      Leverage App Clips, NFC, and QR technology to bridge the gap between offline interactions and intelligent digital systems.
    </p>

    <div className="grid-2" style={{ maxWidth: '880px', margin: '0 auto' }}>
      {PRODUCTS.map((p, i) => (
        <div key={i} className="card" style={{ display: 'flex', gap: '1.25rem', alignItems: 'flex-start' }}>
          <div className="icon-box">{p.icon}</div>
          <div>
            <h3 style={{ fontSize: '1.05rem', marginBottom: '0.4rem' }}>{p.title}</h3>
            <p style={{ color: 'var(--text-muted)', lineHeight: 1.65, fontSize: '0.9rem' }}>{p.desc}</p>
          </div>
        </div>
      ))}
    </div>
  </section>
);

export default Products;
