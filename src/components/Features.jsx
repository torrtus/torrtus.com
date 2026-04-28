import React from 'react';
import { Zap, Users, TrendingUp, Search, Bot, Shield } from 'lucide-react';

const FEATURES = [
  {
    icon: <Zap size={18} />,
    title: 'Speed of Light',
    desc: 'Fastest development and deployment speed. From concept to live under 2 weeks.',
  },
  {
    icon: <Users size={18} />,
    title: '1-on-1 Brand Management',
    desc: '1 dedicated brand manager for each brand ensuring great client support and success.',
  },
  {
    icon: <TrendingUp size={18} />,
    title: 'Scaling Small Brands',
    desc: 'We help small scale brands to upgrade to greater heights and dominate their market.',
  },
  {
    icon: <Search size={18} />,
    title: 'SEO & GEO Masterclass',
    desc: 'Advanced search engine optimization and geolocation strategies for maximum visibility.',
  },
  {
    icon: <Bot size={18} />,
    title: 'AI Driven Support',
    desc: 'AI driven customer support chatbots enabled globally on your websites and apps.',
  },
  {
    icon: <Shield size={18} />,
    title: 'Ironclad Reliability',
    desc: 'Built with security-first architecture to protect your mission-critical data.',
  },
];

const Features = () => (
  <section id="features" style={{ background: 'rgba(8, 3, 12, 0.6)' }}>
    <div style={{ maxWidth: '700px', margin: '0 auto 3.5rem auto', textAlign: 'center' }}>
      <span className="section-label">Why Torrtus</span>
      <h2 className="section-title" style={{ marginBottom: '0' }}>
        Core <span className="text-gradient">Advantage</span>
      </h2>
    </div>

    <div style={{
      display: 'grid',
      gridTemplateColumns: 'repeat(auto-fit, minmax(280px, 1fr))',
      gap: '0',
      maxWidth: '860px',
      margin: '0 auto',
      border: '1px solid var(--border-subtle)',
      borderRadius: '12px',
      overflow: 'hidden',
    }}>
      {FEATURES.map((f, i) => (
        <div key={i} style={{
          display: 'flex',
          gap: '1rem',
          alignItems: 'flex-start',
          padding: '1.75rem',
          borderRight: (i % 2 === 0) ? '1px solid var(--border-subtle)' : 'none',
          borderBottom: i < FEATURES.length - 2 ? '1px solid var(--border-subtle)' : 'none',
          background: 'var(--bg-card)',
          transition: 'background 0.2s',
        }}
          onMouseEnter={e => e.currentTarget.style.background = 'rgba(218,102,167,0.04)'}
          onMouseLeave={e => e.currentTarget.style.background = 'var(--bg-card)'}
        >
          <div style={{ color: 'var(--accent)', flexShrink: 0, marginTop: '2px' }}>{f.icon}</div>
          <div>
            <h3 style={{ fontSize: '0.95rem', marginBottom: '0.35rem' }}>{f.title}</h3>
            <p style={{ color: 'var(--text-muted)', lineHeight: 1.6, fontSize: '0.87rem' }}>{f.desc}</p>
          </div>
        </div>
      ))}
    </div>
  </section>
);

export default Features;
