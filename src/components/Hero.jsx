import React, { useEffect, useState } from 'react';
import { motion, useMotionValue, useTransform } from 'framer-motion';

const Hero = () => {
  const mouseX = useMotionValue(0);
  const mouseY = useMotionValue(0);

  useEffect(() => {
    const handleMouseMove = (e) => {
      // Normalize mouse position relative to center of screen: -1 to 1
      const x = (e.clientX / window.innerWidth) * 2 - 1;
      const y = (e.clientY / window.innerHeight) * 2 - 1;
      mouseX.set(x);
      mouseY.set(y);
    };
    
    window.addEventListener('mousemove', handleMouseMove);
    return () => window.removeEventListener('mousemove', handleMouseMove);
  }, [mouseX, mouseY]);

  // Transform normalized mouse position to pixel offsets for shadow/glow
  const shadowX = useTransform(mouseX, [-1, 1], [30, -30]);
  const shadowY = useTransform(mouseY, [-1, 1], [30, -30]);

  return (
    <section className="hero-section" id="hero" style={{ position: 'relative' }}>
      <motion.div
        initial={{ opacity: 0, y: 30 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 1, delay: 0.2 }}
        style={{ zIndex: 10, position: 'relative', display: 'flex', flexDirection: 'column', alignItems: 'center' }}
      >
        <div style={{ position: 'relative' }}>
          {/* Revolving Stars around the main heading */}
          <motion.div
            animate={{ rotate: 360 }}
            transition={{ duration: 15, repeat: Infinity, ease: 'linear' }}
            style={{ position: 'absolute', top: '50%', left: '50%', width: '120%', height: '160%', transform: 'translate(-50%, -50%)', pointerEvents: 'none', zIndex: -1 }}
          >
             {/* Star 1 */}
            <motion.div style={{ position: 'absolute', top: '10%', left: '10%', width: '6px', height: '6px', borderRadius: '50%', background: 'var(--pink-3)', boxShadow: '0 0 10px var(--pink-3)' }} />
             {/* Star 2 */}
            <motion.div style={{ position: 'absolute', bottom: '20%', right: '0%', width: '4px', height: '4px', borderRadius: '50%', background: 'var(--pink-1)', boxShadow: '0 0 10px var(--pink-1)' }} />
             {/* Star 3 */}
            <motion.div style={{ position: 'absolute', top: '80%', left: '25%', width: '3px', height: '3px', borderRadius: '50%', background: '#fff', boxShadow: '0 0 8px #fff' }} />
          </motion.div>

          {/* Interactive Heading */}
          <motion.h1 
            className="hero-title"
            style={{
              textShadow: useTransform(
                [shadowX, shadowY], 
                ([x, y]) => `${x}px ${y}px 40px rgba(146, 80, 138, 0.8)` // --pink-2
              )
            }}
          >
            Forge The Future <br/>
            <span className="text-gradient" style={{ animation: 'pulseGlow 2s infinite alternate' }}>With AI & SaaS</span>
          </motion.h1>
        </div>
        <p className="hero-subtitle">
          Leading IT Services. Saas project development, intelligent AI agents automation, and world-class app hosting for ambitious brands.
        </p>
        
        <motion.button 
          className="cta-button"
          whileHover={{ scale: 1.05 }}
          whileTap={{ scale: 0.95 }}
          onClick={() => document.getElementById('about').scrollIntoView({ behavior: 'smooth' })}
        >
          Explore Automation
        </motion.button>
      </motion.div>

      {/* Sci-fi intensely glowing animated orb */}
      <motion.div
        animate={{
            scale: [1, 1.2, 1],
            opacity: [0.5, 0.8, 0.5],
            rotate: [0, 90, 0]
        }}
        transition={{ duration: 8, repeat: Infinity, ease: 'easeInOut' }}
        style={{
            position: 'absolute',
            width: '900px',
            height: '900px',
            background: 'radial-gradient(ellipse at center, rgba(146, 80, 138, 0.4) 0%, rgba(218, 102, 167, 0.15) 30%, rgba(72, 45, 97, 0.05) 60%, transparent 80%)',
            top: '50%',
            left: '50%',
            transform: 'translate(-50%, -50%)',
            zIndex: 1,
            pointerEvents: 'none',
            filter: 'blur(30px)' // Add heavy blur for deep space plasma feel
        }}
      />
    </section>
  );
};

export default Hero;
