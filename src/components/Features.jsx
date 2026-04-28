import React from 'react';
import { Zap, Users, TrendingUp, Search, Bot, Shield } from 'lucide-react';

const FEATURES = [
  {
    icon: <Zap size={18} />,
    title: 'Ships in Under 2 Weeks',
    desc: 'From kickoff call to live deployment. No 3-month timelines, no project sprawl.',
  },
  {
    icon: <Users size={18} />,
    title: '1-on-1 Brand Manager',
    desc: 'One dedicated person who knows your brand, handles communication, and drives outcomes.',
  },
  {
    icon: <TrendingUp size={18} />,
    title: 'Built to Scale',
    desc: 'Architecture designed for growth from day one. No painful rewrites when you hit traction.',
  },
  {
    icon: <Search size={18} />,
    title: 'SEO & GEO Strategy',
    desc: 'Visibility built in — search engine and geolocation strategy from the first commit.',
  },
  {
    icon: <Bot size={18} />,
    title: 'AI Support Agents',
    desc: 'Custom-trained bots deployed on your site and app that genuinely handle customer queries.',
  },
  {
    icon: <Shield size={18} />,
    title: 'Security First',
    desc: 'Every system built with security architecture baked in — your data and your customers protected.',
  },
];

const Features = () => (
  <section id="features" style={{ background: 'rgba(8, 3, 12, 0.6)' }}>
    <div style={{ maxWidth: '700px', margin: '0 auto 3.5rem auto', textAlign: 'center' }}>
      <span className="section-label">Why Torrtus</span>
      <h2 className="section-title" style={{ marginBottom: '0' }}>
        Built Different.<br />
        <span className="text-gradient">By Design.</span>
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
