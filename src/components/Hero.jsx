import React from 'react';

const STATS = [
  { num: '7+',   label: 'Brands Built' },
  { num: '6 yrs', label: 'Experience' },
  { num: '~2 wk', label: 'Avg Delivery' },
  { num: '3',    label: 'Platforms' },
];

const Hero = () => (
  <section className="hero-section" id="hero">
    <span className="hero-label fade-up">Torrtus · IT Services · AI Automation</span>

    <h1 className="hero-title fade-up-1">
      Forge The Future<br />
      <span className="text-gradient">With AI & SaaS</span>
    </h1>

    <p className="hero-subtitle fade-up-2">
      Leading IT Services. Saas project development, intelligent AI agents automation, and world-class app hosting for ambitious brands.
    </p>

    <div className="cta-row fade-up-3">
      <button
        className="cta-button"
        onClick={() => document.getElementById('about')?.scrollIntoView({ behavior: 'smooth' })}
      >
        Explore Automation
      </button>
      <button
        className="cta-button-outline"
        onClick={() => document.getElementById('about')?.scrollIntoView({ behavior: 'smooth' })}
      >
        Learn More
      </button>
    </div>

    <div className="hero-stats fade-up-4">
      {STATS.map((s, i) => (
        <div key={i}>
          <div className="hero-stat-num">{s.num}</div>
          <div className="hero-stat-label">{s.label}</div>
        </div>
      ))}
    </div>
  </section>
);

export default Hero;
