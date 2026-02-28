import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { Phone, Mail, MessageSquare } from 'lucide-react';

const Connect = () => {
  const [feedback, setFeedback] = useState('');

  const handleFeedbackSubmit = (e) => {
    e.preventDefault();
    alert("Thank you for your feedback!");
    setFeedback('');
  };

  return (
    <section id="connect" style={{ padding: '6rem 2rem' }}>
      <h2 className="section-title">Get In <span className="text-gradient">Touch</span></h2>
      
      <div className="grid-2" style={{ gap: '4rem' }}>
        {/* Contact Info */}
        <motion.div
          initial={{ opacity: 0, x: -30 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
        >
          <div className="glass-panel" style={{ padding: '3rem', height: '100%' }}>
            <h3 style={{ fontSize: '1.8rem', marginBottom: '2rem' }}>Direct Access</h3>
            
            <div style={{ display: 'flex', flexDirection: 'column', gap: '2rem' }}>
              <a href="mailto:team@torrtus.com" style={{ display: 'flex', alignItems: 'center', gap: '1rem', fontSize: '1.2rem', color: 'var(--text-main)', transition: 'color 0.3s' }}>
                <div style={{ padding: '1rem', background: 'rgba(255,255,255,0.05)', borderRadius: '12px' }}>
                  <Mail size={24} color="var(--accent-cyan)" />
                </div>
                <div>
                  <div style={{ color: 'var(--text-muted)', fontSize: '0.9rem' }}>Email Us</div>
                  <div>team@torrtus.com</div>
                </div>
              </a>

              <a href="tel:+918279363576" style={{ display: 'flex', alignItems: 'center', gap: '1rem', fontSize: '1.2rem', color: 'var(--text-main)', transition: 'color 0.3s' }}>
                <div style={{ padding: '1rem', background: 'rgba(255,255,255,0.05)', borderRadius: '12px' }}>
                  <Phone size={24} color="var(--accent-purple)" />
                </div>
                <div>
                  <div style={{ color: 'var(--text-muted)', fontSize: '0.9rem' }}>Call Us Directly</div>
                  <div>+91 8279363576</div>
                </div>
              </a>
            </div>
          </div>
        </motion.div>

        {/* Feedback Form */}
        <motion.div
          initial={{ opacity: 0, x: 30 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
        >
          <div className="glass-panel" style={{ padding: '3rem', height: '100%' }}>
            <h3 style={{ fontSize: '1.8rem', marginBottom: '1rem', display: 'flex', alignItems: 'center', gap: '0.5rem' }}>
              <MessageSquare size={24} color="var(--accent-cyan)" /> Feedback
            </h3>
            <p style={{ color: 'var(--text-muted)', marginBottom: '2rem' }}>Let us know how we can improve our services or website.</p>
            
            <form onSubmit={handleFeedbackSubmit} style={{ display: 'flex', flexDirection: 'column', gap: '1rem' }}>
              <textarea
                required
                value={feedback}
                onChange={(e) => setFeedback(e.target.value)}
                placeholder="Write your feedback here..."
                rows={5}
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
              <motion.button
                type="submit"
                whileHover={{ scale: 1.02 }}
                whileTap={{ scale: 0.98 }}
                style={{
                  padding: '1rem',
                  borderRadius: '12px',
                  background: 'transparent',
                  border: '1px solid var(--accent-cyan)',
                  color: 'var(--accent-cyan)',
                  fontWeight: 'bold',
                  fontSize: '1.1rem',
                  cursor: 'none',
                  transition: 'all 0.3s'
                }}
                onMouseOver={(e) => { e.currentTarget.style.background = 'rgba(0,240,255,0.1)' }}
                onMouseOut={(e) => { e.currentTarget.style.background = 'transparent' }}
              >
                Submit Feedback
              </motion.button>
            </form>
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default Connect;
