import React, { useState } from 'react';
import { Phone, Mail, MessageSquare } from 'lucide-react';

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
  resize: 'vertical',
  transition: 'border-color 0.2s',
};

const Connect = () => {
  const [feedback, setFeedback] = useState('');

  const handleSubmit = (e) => {
    e.preventDefault();
    alert('Thanks for your feedback! We read everything.');
    setFeedback('');
  };

  return (
    <section id="connect">
      <span className="section-label" style={{ textAlign: 'center' }}>Contact</span>
      <h2 className="section-title" style={{ textAlign: 'center' }}>
        Let's Talk.
      </h2>

      <div className="grid-2" style={{ maxWidth: '880px', margin: '0 auto', gap: '1.5rem' }}>
        {/* Contact info */}
        <div className="card" style={{ padding: '2.5rem' }}>
          <h3 style={{ fontSize: '1.2rem', marginBottom: '2rem' }}>Reach Us Directly</h3>
          <div style={{ display: 'flex', flexDirection: 'column', gap: '1.5rem' }}>
            <a
              href="mailto:team@torrtus.com"
              style={{ display: 'flex', alignItems: 'center', gap: '1rem' }}
            >
              <div className="icon-box"><Mail size={20} /></div>
              <div>
                <div style={{ fontSize: '0.78rem', color: 'var(--text-muted)', marginBottom: '0.15rem', textTransform: 'uppercase', letterSpacing: '0.06em' }}>Email</div>
                <div style={{ fontWeight: 600, fontSize: '0.95rem' }}>team@torrtus.com</div>
              </div>
            </a>

            <a
              href="tel:+918279363576"
              style={{ display: 'flex', alignItems: 'center', gap: '1rem' }}
            >
              <div className="icon-box"><Phone size={20} /></div>
              <div>
                <div style={{ fontSize: '0.78rem', color: 'var(--text-muted)', marginBottom: '0.15rem', textTransform: 'uppercase', letterSpacing: '0.06em' }}>Phone</div>
                <div style={{ fontWeight: 600, fontSize: '0.95rem' }}>+91 82793 63576</div>
              </div>
            </a>
          </div>
        </div>

        {/* Feedback form */}
        <div className="card" style={{ padding: '2.5rem' }}>
          <h3 style={{ fontSize: '1.2rem', marginBottom: '0.4rem', display: 'flex', alignItems: 'center', gap: '0.5rem' }}>
            <MessageSquare size={18} color="var(--accent)" /> Feedback
          </h3>
          <p style={{ color: 'var(--text-muted)', fontSize: '0.88rem', marginBottom: '1.5rem', lineHeight: 1.6 }}>
            Thoughts on our site or services? We read everything.
          </p>

          <form onSubmit={handleSubmit} style={{ display: 'flex', flexDirection: 'column', gap: '1rem' }}>
            <textarea
              required
              value={feedback}
              onChange={e => setFeedback(e.target.value)}
              placeholder="Your feedback..."
              rows={4}
              style={inputStyle}
              onFocus={e => e.target.style.borderColor = 'var(--accent)'}
              onBlur={e => e.target.style.borderColor = 'var(--border-subtle)'}
            />
            <button type="submit" className="cta-button" style={{ width: '100%', padding: '0.85rem' }}>
              Send Feedback
            </button>
          </form>
        </div>
      </div>
    </section>
  );
};

export default Connect;
