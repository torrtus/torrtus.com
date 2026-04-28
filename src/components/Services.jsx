import React from 'react';
import { Globe, Smartphone, Server } from 'lucide-react';

const SERVICES = [
  {
    icon: <Globe size={26} />,
    title: 'Website Hosting',
    desc: 'Ultra-fast, secure, and infinitely scalable web hosting for robust enterprise solutions.',
  },
  {
    icon: <Smartphone size={26} />,
    title: 'AppStore Deployment',
    desc: 'End-to-end iOS application hosting and maintenance on the Apple AppStore.',
  },
  {
    icon: <Server size={26} />,
    title: 'PlayStore Deployment',
    desc: 'Seamless Android application delivery and optimization for Google PlayStore.',
  },
];

const Services = () => (
  <section id="services" style={{ background: 'rgba(8, 3, 12, 0.6)' }}>
    <span className="section-label" style={{ textAlign: 'center' }}>Hosting & Deployment</span>
    <h2 className="section-title" style={{ textAlign: 'center' }}>
      Enterprise-Grade <span className="text-gradient">Hosting</span>
    </h2>

    <div className="grid-3">
      {SERVICES.map((s, i) => (
        <div key={i} className="card" style={{ display: 'flex', flexDirection: 'column', gap: '1.25rem' }}>
          <div className="icon-box">{s.icon}</div>
          <h3 style={{ fontSize: '1.15rem' }}>{s.title}</h3>
          <p style={{ color: 'var(--text-muted)', lineHeight: 1.65, fontSize: '0.92rem', flex: 1 }}>{s.desc}</p>
        </div>
      ))}
    </div>
  </section>
);

export default Services;
