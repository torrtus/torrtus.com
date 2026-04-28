import React, { useState } from 'react';
import { Send } from 'lucide-react';

const PROJECT_TYPES = [
  { id: 'app',        label: 'App (iOS/Android)' },
  { id: 'website',    label: 'Website' },
  { id: 'dashboard',  label: 'Dashboard' },
  { id: 'crm',        label: 'CRM' },
  { id: 'automation', label: 'Automation Tool' },
  { id: 'ai',         label: 'AI Agents' },
  { id: 'seo',        label: 'SEO/GEO Support' },
  { id: 'branding',   label: 'Branding Support' },
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
          Start Your <span className="text-gradient">Project</span>
        </h2>
        <p style={{ textAlign: 'center', color: 'var(--text-muted)', marginBottom: '2.5rem', lineHeight: 1.7, fontSize: '0.95rem' }}>
          Tell us what you need. From complex AI agents to simple branding support, we're ready.
        </p>

        <div className="card" style={{ padding: '2.5rem' }}>
          <form onSubmit={handleSubmit} style={{ display: 'flex', flexDirection: 'column', gap: '1.75rem' }}>

            {/* Project type */}
            <div>
              <label style={{ display: 'block', marginBottom: '0.9rem', fontWeight: 600, fontSize: '0.9rem' }}>
                What are you looking for?
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
                placeholder="Tell us about the problem you are trying to solve..."
                rows={4}
                style={{ ...inputStyle, resize: 'vertical' }}
                onFocus={e => e.target.style.borderColor = 'var(--accent)'}
                onBlur={e => e.target.style.borderColor = 'var(--border-subtle)'}
              />
            </div>

            {/* Email */}
            <div>
              <label style={{ display: 'block', marginBottom: '0.9rem', fontWeight: 600, fontSize: '0.9rem' }}>
                How can we reach you?
              </label>
              <input
                type="email"
                required
                value={email}
                onChange={e => setEmail(e.target.value)}
                placeholder="Your email address"
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
              Connect With Torrtus <Send size={16} />
            </button>
          </form>
        </div>
      </div>
    </section>
  );
};

export default QueryBuilder;
