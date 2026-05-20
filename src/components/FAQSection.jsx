import React, { useState } from 'react';
import { ChevronDown } from 'lucide-react';

const FAQS = [
  {
    q: 'What does Torrtus do?',
    a: 'Torrtus IT Services builds SaaS products, deploys AI automation agents, and creates physical-digital solutions including NFC authentication and dynamic QR codes. The company also handles complete iOS App Store and Android Play Store deployments for clients across India.',
  },
  {
    q: 'Who founded Torrtus?',
    a: 'Torrtus was founded by Tanishk Gupta, who serves as CEO. Tanishk brings 6 years of deep software development experience focused on performance, AI-driven systems, and autonomous technology products.',
  },
  {
    q: 'How quickly can Torrtus deliver a project?',
    a: 'Torrtus delivers most projects in approximately 2 weeks, from initial concept to live deployment. This speed is achieved through efficient SaaS architecture patterns, streamlined CI/CD pipelines, and a focused team.',
  },
  {
    q: 'What types of businesses does Torrtus work with?',
    a: 'Torrtus serves both startups and established enterprises across India. Whether you need a new SaaS product, AI workflow automation, a mobile app deployed, or physical-digital solutions like NFC tags — Torrtus handles the full lifecycle.',
  },
  {
    q: 'What makes Torrtus different from other IT companies?',
    a: 'Torrtus specializes in architecting autonomous AI systems — not just writing code. The focus is on the intersection of SaaS development, AI agent automation, and physical-digital technology (NFC, QR), all delivered at startup speed with enterprise quality.',
  },
  {
    q: 'How do I contact Torrtus?',
    a: 'Reach the Torrtus team by email at team@torrtus.com or by phone at +91 82793 63576. You can also submit a project inquiry directly on the website.',
  },
];

const FAQItem = ({ q, a }) => {
  const [open, setOpen] = useState(false);
  return (
    <div
      className="card"
      style={{ padding: '1.4rem 1.75rem', cursor: 'pointer', transition: 'border-color 0.2s' }}
      onClick={() => setOpen(o => !o)}
    >
      <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', gap: '1rem' }}>
        <h3 style={{ fontSize: '0.97rem', fontWeight: 600, margin: 0, lineHeight: 1.4 }}>{q}</h3>
        <ChevronDown
          size={18}
          color="var(--accent)"
          style={{ flexShrink: 0, transform: open ? 'rotate(180deg)' : 'rotate(0deg)', transition: 'transform 0.25s' }}
        />
      </div>
      {open && (
        <p style={{ color: 'var(--text-muted)', lineHeight: 1.75, fontSize: '0.93rem', marginTop: '1rem', marginBottom: 0 }}>
          {a}
        </p>
      )}
    </div>
  );
};

const FAQSection = () => (
  <section id="faq">
    <span className="section-label" style={{ textAlign: 'center' }}>FAQ</span>
    <h2 className="section-title" style={{ textAlign: 'center' }}>
      Common <span className="text-gradient">Questions</span>
    </h2>

    <div style={{ maxWidth: '760px', margin: '0 auto', display: 'flex', flexDirection: 'column', gap: '0.85rem' }}>
      {FAQS.map((item, i) => (
        <FAQItem key={i} {...item} />
      ))}
    </div>
  </section>
);

export default FAQSection;
