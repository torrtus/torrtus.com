import React from 'react';

const METRICS = [
  { num: '7+',    label: 'Brands Served',  sub: 'Across India' },
  { num: '6',     label: 'Years Building', sub: 'In production' },
  { num: '3',     label: 'Platforms',      sub: 'Web · iOS · Android' },
  { num: '~2 wk', label: 'Avg Delivery',   sub: 'Concept to live' },
];

const About = () => (
  <section id="about">
    <div className="grid-2" style={{ alignItems: 'center', gap: '3.5rem' }}>
      <div>
        <span className="section-label">Who We Are</span>
        <h2 className="section-title" style={{ textAlign: 'left', marginBottom: '1.5rem' }}>
          We Don't Just Write Code.<br />
          <span className="text-gradient">We Build Leverage.</span>
        </h2>
        <p style={{ fontSize: '1.05rem', color: 'var(--text-muted)', lineHeight: 1.85, marginBottom: '1.25rem' }}>
          Torrtus is a lean IT services company focused on SaaS development and AI automation.
          We build systems that work while you sleep — customer service agents, automated
          workflows, intelligent dashboards.
        </p>
        <p style={{ fontSize: '1.05rem', color: 'var(--text-muted)', lineHeight: 1.85 }}>
          Whether you're a first-time founder or running an established brand, we architect
          solutions that give your team an unfair operational advantage.
        </p>
      </div>

      <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: '1rem' }}>
        {METRICS.map((m, i) => (
          <div key={i} className="card">
            <div style={{ fontSize: '1.8rem', fontWeight: 800, color: 'var(--accent)', lineHeight: 1, marginBottom: '0.4rem' }}>
              {m.num}
            </div>
            <div style={{ fontWeight: 700, fontSize: '0.9rem', marginBottom: '0.2rem' }}>{m.label}</div>
            <div style={{ fontSize: '0.78rem', color: 'var(--text-muted)' }}>{m.sub}</div>
          </div>
        ))}
      </div>
    </div>
  </section>
);

export default About;
