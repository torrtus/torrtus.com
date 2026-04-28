import React from 'react';
import { Globe, Smartphone, Server } from 'lucide-react';

const SERVICES = [
  {
    icon: <Globe size={26} />,
    title: 'Website Hosting',
    desc: 'Fast, secure infrastructure for web apps, landing pages, and SaaS platforms. We handle the stack so you focus on growth.',
  },
  {
    icon: <Smartphone size={26} />,
    title: 'iOS App Deployment',
    desc: 'End-to-end App Store management — from TestFlight to production, including updates, reviews, and crash monitoring.',
  },
  {
    icon: <Server size={26} />,
    title: 'Android App Deployment',
    desc: 'Google Play Store publishing, version management, and performance tracking for Android applications.',
  },
];

const Services = () => (
  <section id="services" style={{ background: 'rgba(8, 3, 12, 0.6)' }}>
    <span className="section-label" style={{ textAlign: 'center' }}>Hosting & Deployment</span>
    <h2 className="section-title" style={{ textAlign: 'center' }}>
      Enterprise Infra.<br />
      <span className="text-gradient">Startup Speed.</span>
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
