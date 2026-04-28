import React, { useState } from 'react';
import { Send } from 'lucide-react';

const PROJECT_TYPES = [
  { id: 'app',        label: 'iOS / Android App' },
  { id: 'website',    label: 'Website' },
  { id: 'dashboard',  label: 'Dashboard' },
  { id: 'crm',        label: 'CRM' },
  { id: 'automation', label: 'AI Automation' },
  { id: 'ai',         label: 'AI Agents' },
  { id: 'seo',        label: 'SEO / GEO' },
  { id: 'branding',   label: 'Branding' },
];

const inputStyle = {
  width: '100%',
  padding: '0.9rem 1rem',
  borderRadius: '8px',
  background: 'rgba(0, 0, 0, 0.4)',
  border: '1px solid var(--border-subtle)',
  color: 'var(--text-main)',
  fontFamily: 'Outfit, sans-serif',
  fontSize: '0.95rem',
  outline: 'none',
  transition: 'border-color 0.2s',
};

const QueryBuilder = () => {
  const [projectType, setProjectType] = useState('app');
  const [description, setDescription] = useState('');
  const [email,       setEmail]       = useState('');

  const handleSubmit = (e) => {
    e.preventDefault();
    alert(`Query submitted for: ${projectType}\nWe'll reach out to ${email} soon!`);
    setDescription('');
    setEmail('');
  };

  return (
    <section id="query">
      <div style={{ maxWidth: '760px', margin: '0 auto' }}>
        <span className="section-label" style={{ textAlign: 'center' }}>Get Started</span>
        <h2 className="section-title" style={{ textAlign: 'center' }}>
          Tell Us What<br />
          <span className="text-gradient">You're Building.</span>
        </h2>
        <p style={{ textAlign: 'center', color: 'var(--text-muted)', marginBottom: '2.5rem', lineHeight: 1.7, fontSize: '0.95rem' }}>
          From complex AI agents to a simple landing page — describe what you need and we'll get back within 24 hours.
        </p>

        <div className="card" style={{ padding: '2.5rem' }}>
          <form onSubmit={handleSubmit} style={{ display: 'flex', flexDirection: 'column', gap: '1.75rem' }}>

            {/* Project type */}
            <div>
              <label style={{ display: 'block', marginBottom: '0.9rem', fontWeight: 600, fontSize: '0.9rem' }}>
                What are you looking to build?
              </label>
              <div style={{ display: 'flex', flexWrap: 'wrap', gap: '0.6rem' }}>
                {PROJECT_TYPES.map(t => (
                  <button
                    key={t.id}
                    type="button"
                    onClick={() => setProjectType(t.id)}
                    style={{
                      padding: '0.55rem 1.1rem',
                      borderRadius: '6px',
                      fontSize: '0.85rem',
                      fontWeight: 600,
                      cursor: 'pointer',
                      transition: 'all 0.2s',
                      background: projectType === t.id ? 'var(--accent)' : 'transparent',
                      color: projectType === t.id ? '#fff' : 'var(--text-muted)',
                      border: projectType === t.id ? '1px solid var(--accent)' : '1px solid var(--border-subtle)',
                    }}
                  >
                    {t.label}
                  </button>
                ))}
              </div>
            </div>

            {/* Description */}
            <div>
              <label style={{ display: 'block', marginBottom: '0.9rem', fontWeight: 600, fontSize: '0.9rem' }}>
                Describe your requirements
              </label>
              <textarea
                required
                value={description}
                onChange={e => setDescription(e.target.value)}
                placeholder="What problem are you solving? Who's the audience? Any existing tech stack?"
                rows={4}
                style={{ ...inputStyle, resize: 'vertical' }}
                onFocus={e => e.target.style.borderColor = 'var(--accent)'}
                onBlur={e => e.target.style.borderColor = 'var(--border-subtle)'}
              />
            </div>

            {/* Email */}
            <div>
              <label style={{ display: 'block', marginBottom: '0.9rem', fontWeight: 600, fontSize: '0.9rem' }}>
                Your email address
              </label>
              <input
                type="email"
                required
                value={email}
                onChange={e => setEmail(e.target.value)}
                placeholder="you@company.com"
                style={inputStyle}
                onFocus={e => e.target.style.borderColor = 'var(--accent)'}
                onBlur={e => e.target.style.borderColor = 'var(--border-subtle)'}
              />
            </div>

            <button
              type="submit"
              className="cta-button"
              style={{ display: 'flex', alignItems: 'center', justifyContent: 'center', gap: '0.5rem', padding: '1rem', fontSize: '1rem' }}
            >
              Send to Torrtus <Send size={16} />
            </button>
          </form>
        </div>
      </div>
    </section>
  );
};

export default QueryBuilder;
