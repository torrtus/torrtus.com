import React from 'react';
import { motion } from 'framer-motion';
import { Server, Smartphone, Globe } from 'lucide-react';

const Services = () => {
  const cardVariants = {
    hidden: { opacity: 0, y: 50 },
    visible: { opacity: 1, y: 0 }
  };

  const services = [
    {
      title: "Website Hosting",
      icon: <Globe size={40} color="var(--accent-cyan)" />,
      desc: "Ultra-fast, secure, and infinitely scalable web hosting for robust enterprise solutions."
    },
    {
      title: "AppStore Deployment",
      icon: <Smartphone size={40} color="var(--accent-purple)" />,
      desc: "End-to-end iOS application hosting and maintenance on the Apple AppStore."
    },
    {
      title: "PlayStore Deployment",
      icon: <Server size={40} color="var(--accent-blue)" />,
      desc: "Seamless Android application delivery and optimization for Google PlayStore."
    }
  ];

  return (
    <section id="services">
      <motion.h2 
        className="section-title"
        initial={{ opacity: 0, y: 30 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
      >
        Enterprise-Grade <span className="text-gradient">Hosting</span>
      </motion.h2>

      <div className="grid-3">
        {services.map((service, idx) => (
          <motion.div
            key={idx}
            className="glass-panel"
            style={{ padding: '3rem 2rem', textAlign: 'center', transition: 'transform 0.3s' }}
            variants={cardVariants}
            initial="hidden"
            whileInView="visible"
            whileHover={{ y: -10 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: idx * 0.2 }}
          >
            <div style={{ marginBottom: '1.5rem', display: 'flex', justifyContent: 'center' }}>
              {service.icon}
            </div>
            <h3 style={{ fontSize: '1.5rem', marginBottom: '1rem' }}>{service.title}</h3>
            <p style={{ color: 'var(--text-muted)', lineHeight: 1.6 }}>{service.desc}</p>
          </motion.div>
        ))}
      </div>
    </section>
  );
};

export default Services;
