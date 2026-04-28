import React from 'react';
import { ShieldCheck, QrCode, SmartphoneNfc, Fingerprint } from 'lucide-react';

const PRODUCTS = [
  {
    icon: <SmartphoneNfc size={24} />,
    title: 'NFC Authentication',
    desc: 'Tap-to-verify — customers authenticate physical products in seconds with a phone tap. No app download needed.',
  },
  {
    icon: <QrCode size={24} />,
    title: 'Dynamic QR Codes',
    desc: 'Trackable, updatable QR campaigns. Change the destination without reprinting a single label.',
  },
  {
    icon: <Fingerprint size={24} />,
    title: 'Company NFC Tags',
    desc: 'Smart digital business cards and employee access systems that update instantly and never expire.',
  },
  {
    icon: <ShieldCheck size={24} />,
    title: 'Product Authenticity',
    desc: 'Cryptographic anti-counterfeit validation for luxury and consumer goods — provable, not just printed.',
  },
];

const Products = () => (
  <section id="products">
    <span className="section-label" style={{ textAlign: 'center' }}>Physical × Digital</span>
    <h2 className="section-title" style={{ textAlign: 'center' }}>
      Smart Tech That Lives<br />
      <span className="text-gradient">In The Real World.</span>
    </h2>
    <p style={{
      textAlign: 'center',
      color: 'var(--text-muted)',
      maxWidth: '52ch',
      margin: '-1.5rem auto 3rem auto',
      lineHeight: 1.75,
      fontSize: '0.95rem',
    }}>
      Bridge offline touchpoints with intelligent digital systems using NFC, App Clips, and dynamic QR technology.
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
