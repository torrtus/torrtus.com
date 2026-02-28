import React from 'react';
import { motion } from 'framer-motion';
import { Zap, Users, Shield, TrendingUp, Search, Bot } from 'lucide-react';

const Features = () => {
  const features = [
    {
      title: "Speed of Light",
      icon: <Zap size={32} color="var(--accent-cyan)" />,
      desc: "Fastest development and deployment speed. From concept to live under 2 weeks."
    },
    {
      title: "1-on-1 Brand Management",
      icon: <Users size={32} color="var(--accent-purple)" />,
      desc: "1 dedicated brand manager for each brand ensuring great client support and success."
    },
    {
      title: "Scaling Small Brands",
      icon: <TrendingUp size={32} color="#00ffcc" />,
      desc: "We help small scale brands to upgrade to greater heights and dominate their market."
    },
    {
      title: "SEO & GEO Masterclass",
      icon: <Search size={32} color="#ff00cc" />,
      desc: "Advanced search engine optimization and geolocation strategies for maximum visibility."
    },
    {
      title: "AI Driven Support",
      icon: <Bot size={32} color="var(--accent-cyan)" />,
      desc: "AI driven customer support chatbots enabled globally on your websites and apps."
    },
    {
      title: "Ironclad Reliability",
      icon: <Shield size={32} color="var(--accent-blue)" />,
      desc: "Built with security-first architecture to protect your mission-critical data."
    }
  ];

  return (
    <section id="features" style={{ background: 'linear-gradient(180deg, transparent, rgba(10,10,20,0.8), transparent)', padding: '8rem 2rem' }}>
      <motion.div
        initial={{ opacity: 0 }}
        whileInView={{ opacity: 1 }}
        viewport={{ once: true }}
      >
        <h2 className="section-title" style={{ marginBottom: '5rem' }}>Core <span className="text-gradient">Advantage</span></h2>
        
        <div className="grid-3" style={{ rowGap: '4rem' }}>
          {features.map((feat, idx) => (
            <motion.div
              key={idx}
              initial={{ opacity: 0, x: idx % 2 === 0 ? -30 : 30 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: idx * 0.1 }}
              style={{ display: 'flex', gap: '1.5rem', alignItems: 'flex-start' }}
            >
              <div style={{ 
                background: 'rgba(218, 102, 167, 0.08)', 
                padding: '1rem', 
                borderRadius: '12px',
                border: '1px solid var(--glass-border)' 
              }}>
                {feat.icon}
              </div>
              <div>
                <h3 style={{ fontSize: '1.3rem', marginBottom: '0.5rem' }}>{feat.title}</h3>
                <p style={{ color: 'var(--text-muted)', lineHeight: 1.5, fontSize: '0.95rem' }}>{feat.desc}</p>
              </div>
            </motion.div>
          ))}
        </div>
      </motion.div>
    </section>
  );
};

export default Features;
