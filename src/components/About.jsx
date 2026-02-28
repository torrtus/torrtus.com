import React from 'react';
import { motion } from 'framer-motion';

const About = () => {
  return (
    <section id="about" style={{ minHeight: '80vh', display: 'flex', alignItems: 'center' }}>
      <div className="grid-2">
        <motion.div
          initial={{ opacity: 0, x: -50 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true, margin: "-100px" }}
          transition={{ duration: 0.8 }}
        >
          <h2 className="section-title" style={{ textAlign: 'left', marginBottom: '1.5rem' }}>
            Transforming Visions <br/> Into <span className="text-gradient">Reality</span>
          </h2>
          <p style={{ fontSize: '1.2rem', color: 'var(--text-muted)', lineHeight: 1.8, marginBottom: '2rem' }}>
            Torrtus is a premier IT services company specializing in rapid SaaS project development and AI agents automation tools. We don't just write code; we architect autonomous systems that give your business an unfair advantage.
          </p>
          <p style={{ fontSize: '1.2rem', color: 'var(--text-muted)', lineHeight: 1.8 }}>
            Whether you're a startup or an established enterprise, our automation tools seamlessly integrate into your workflow, driving unprecedented efficiency.
          </p>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, scale: 0.8 }}
          whileInView={{ opacity: 1, scale: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
          style={{ position: 'relative', display: 'flex', justifyContent: 'center', alignItems: 'center' }}
        >
          <div className="glass-panel" style={{ padding: '3rem', position: 'relative', zIndex: 2 }}>
            <h3 style={{ fontSize: '2rem', marginBottom: '1rem', color: 'var(--accent-cyan)' }}>AI Agents Automation</h3>
            <p style={{ color: 'var(--text-muted)', lineHeight: 1.6 }}>Deploy highly intelligent, self-correcting agents that handle repetitive tasks, customer service, and complex data analysis automatically.</p>
          </div>
          {/* Decorative element */}
          <div style={{
            position: 'absolute',
            top: '-20px', right: '-20px',
            width: '100px', height: '100px',
            borderRight: '2px solid var(--accent-purple)',
            borderTop: '2px solid var(--accent-purple)',
          }}></div>
          <div style={{
            position: 'absolute',
            bottom: '-20px', left: '-20px',
            width: '100px', height: '100px',
            borderLeft: '2px solid var(--accent-cyan)',
            borderBottom: '2px solid var(--accent-cyan)',
          }}></div>
        </motion.div>
      </div>
    </section>
  );
};

export default About;
