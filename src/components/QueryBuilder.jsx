import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { Send } from 'lucide-react';

const QueryBuilder = () => {
  const [projectType, setProjectType] = useState('app');
  const [description, setDescription] = useState('');
  const [email, setEmail] = useState('');

  const projectTypes = [
    { id: 'app', label: 'App (iOS/Android)' },
    { id: 'website', label: 'Website' },
    { id: 'dashboard', label: 'Dashboard' },
    { id: 'crm', label: 'CRM' },
    { id: 'automation', label: 'Automation Tool' },
    { id: 'ai', label: 'AI Agents' },
    { id: 'seo', label: 'SEO/GEO Support' },
    { id: 'branding', label: 'Branding Support' }
  ];

  const handleSubmit = (e) => {
    e.preventDefault();
    // Normally handle submission here
    alert(`Query submitted for: ${projectType}\nWe will reach out to ${email} soon!`);
    setDescription('');
    setEmail('');
  };

  return (
    <section id="query" style={{ padding: '6rem 2rem' }}>
      <motion.div
        className="glass-panel"
        initial={{ opacity: 0, y: 30 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.6 }}
        style={{ maxWidth: '800px', margin: '0 auto', padding: '4rem 2rem' }}
      >
        <h2 className="section-title" style={{ marginBottom: '1rem' }}>Start Your <span className="text-gradient">Project</span></h2>
        <p style={{ textAlign: 'center', color: 'var(--text-muted)', marginBottom: '3rem' }}>
          Tell us what you need. From complex AI agents to simple branding support, we're ready.
        </p>

        <form onSubmit={handleSubmit} style={{ display: 'flex', flexDirection: 'column', gap: '2rem' }}>
          
          {/* Project Type Selection */}
          <div>
            <label style={{ display: 'block', marginBottom: '1rem', fontWeight: 600, color: 'var(--text-main)' }}>What are you looking for?</label>
            <div style={{ display: 'flex', flexWrap: 'wrap', gap: '1rem' }}>
              {projectTypes.map((type) => (
                <button
                  key={type.id}
                  type="button"
                  onClick={() => setProjectType(type.id)}
                  style={{
                    padding: '0.8rem 1.5rem',
                    borderRadius: '50px',
                    background: projectType === type.id ? 'var(--accent-cyan)' : 'transparent',
                    color: projectType === type.id ? '#000' : 'var(--text-main)',
                    border: projectType === type.id ? '1px solid var(--accent-cyan)' : '1px solid var(--glass-border)',
                    fontWeight: 600,
                    transition: 'all 0.3s'
                  }}
                >
                  {type.label}
                </button>
              ))}
            </div>
          </div>

          {/* Problem Description */}
          <div>
            <label style={{ display: 'block', marginBottom: '1rem', fontWeight: 600, color: 'var(--text-main)' }}>Describe your requirements</label>
            <textarea
              required
              value={description}
              onChange={(e) => setDescription(e.target.value)}
              placeholder="Tell us about the problem you are trying to solve..."
              rows={4}
              style={{
                width: '100%',
                padding: '1rem',
                borderRadius: '12px',
                background: 'rgba(5,5,10,0.7)',
                border: '1px solid var(--glass-border)',
                color: 'var(--text-main)',
                fontFamily: 'inherit',
                fontSize: '1rem',
                resize: 'vertical'
              }}
            />
          </div>

          {/* Contact Information */}
          <div>
            <label style={{ display: 'block', marginBottom: '1rem', fontWeight: 600, color: 'var(--text-main)' }}>How can we reach you?</label>
            <input
              type="email"
              required
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              placeholder="Your email address"
              style={{
                width: '100%',
                padding: '1rem',
                borderRadius: '12px',
                background: 'rgba(5,5,10,0.7)',
                border: '1px solid var(--glass-border)',
                color: 'var(--text-main)',
                fontFamily: 'inherit',
                fontSize: '1rem'
              }}
            />
          </div>

          <motion.button
            type="submit"
            whileHover={{ scale: 1.02 }}
            whileTap={{ scale: 0.98 }}
            style={{
              padding: '1rem',
              borderRadius: '12px',
              background: 'linear-gradient(90deg, var(--accent-purple), var(--accent-cyan))',
              border: 'none',
              color: 'white',
              fontWeight: 'bold',
              fontSize: '1.2rem',
              display: 'flex',
              justifyContent: 'center',
              alignItems: 'center',
              gap: '0.5rem',
              marginTop: '1rem',
              cursor: 'none'
            }}
          >
            Connect With Torrtus <Send size={20} />
          </motion.button>
        </form>
      </motion.div>
    </section>
  );
};

export default QueryBuilder;
