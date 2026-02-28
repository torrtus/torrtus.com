import React, { useState, useEffect } from 'react';
import { motion, useAnimation, useMotionValue, useTransform } from 'framer-motion';

export default function IntroSequence({ onComplete }) {
  const [isOpen, setIsOpen] = useState(false);
  const [showRockets, setShowRockets] = useState(false);
  const [logoPhase, setLogoPhase] = useState('hidden'); // 'hidden', 'center', 'exiting'
  const controls = useAnimation();
  
  // Create a motion value for the pull chord drag
  const y = useMotionValue(0);
  // Transform the Y drag distance into the garage door's Y position (moving up visually)
  const doorY = useTransform(y, [0, 300], [0, -100]); // visual feedback while pulling DOWN
  // Change the color of the pull chord to glow brighter the further you pull DOWN (positive y)
  const handleGlow = useTransform(y, [0, 200], ['rgba(193, 98, 141, 0.4)', 'rgba(218, 102, 167, 1)']);

  const handleDragEnd = async (event, info) => {
    // If the user pulls the chord DOWN far enough (e.g., 150px)
    if (info.offset.y > 150) {
      setIsOpen(true);
      // Snap the chord DOWN visually
      await controls.start({ y: 300, transition: { duration: 0.2 } });
      
      // Open the massive garage doors (slide up and down)
      setShowRockets(true);
      
      // Sequence timing:
      // 1. Garage doors open over 1.5s
      // 2. Rockets + Text play until ~3.5s
      // 3. Logo appears at 3.5s in the center and creates orbiting stars
      setTimeout(() => {
        setLogoPhase('center');
      }, 3500);

      // 4. Logo flies away at 6s, taking 1s to reach the top-left corner.
      setTimeout(() => {
        setLogoPhase('exiting');
      }, 5500); 

      // 5. Unmount preloader at 6.7s to reveal actual Navbar smoothly (overlapping the last fraction of a second).
      setTimeout(() => {
        onComplete();
      }, 6700); 
      
    } else {
      // Snap back if not pulled far enough
      controls.start({ y: 0, transition: { type: 'spring', stiffness: 300, damping: 20 } });
    }
  };

  return (
    <div style={{
      position: 'fixed',
      top: 0,
      left: 0,
      width: '100vw',
      height: '100vh',
      backgroundColor: 'var(--bg-dark)',
      zIndex: 9999,
      overflow: 'hidden',
      display: 'flex',
      alignItems: 'center',
      justifyContent: 'center',
      opacity: isOpen && !showRockets ? 0 : 1, // Will handle unmounting in parent
    }}>
      
      {/* BACKGROUND REVEAL (The Space Scene) */}
      <div style={{
        position: 'absolute',
        width: '100%',
        height: '100%',
        zIndex: 1,
        display: 'flex',
        flexDirection: 'column',
        alignItems: 'center',
        justifyContent: 'center'
      }}>
        {showRockets && (
          <>
            <motion.h1 
              initial={{ scale: 0.5, opacity: 0 }}
              animate={{ scale: [0.5, 1.2, 1], opacity: [0, 1, 0] }}
              transition={{ duration: 4, times: [0, 0.5, 1] }}
              style={{
                fontFamily: "'Syncopate', sans-serif",
                color: 'var(--text-main)',
                fontSize: '2rem',
                textAlign: 'center',
                textShadow: '0 0 20px var(--pink-3)',
                zIndex: 5
              }}
            >
              Taking you to the world of intelligence...
            </motion.h1>

            {/* Hyper-drive zoom lines effect */}
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: [0, 1, 0] }}
              transition={{ duration: 3, delay: 0.5 }}
              style={{
                position: 'absolute',
                width: '100%', height: '100%',
                background: 'radial-gradient(circle, transparent 20%, var(--bg-dark) 80%)',
                zIndex: 4
              }}
            />

            {/* Hyperspace glowing stars zooming out from center */}
            {[...Array(40)].map((_, i) => {
              const angle = (Math.PI * 2 * i) / 40;
              const distance = 1500;
              const xInfo = Math.cos(angle) * distance;
              const yInfo = Math.sin(angle) * distance;

              return (
                <motion.div
                  key={i}
                  initial={{ x: 0, y: 0, scale: 0, opacity: 0 }}
                  animate={{ 
                    x: xInfo, 
                    y: yInfo, 
                    scale: [0, 1.5, 3], // Get bigger as they come "closer"
                    opacity: [0, 1, 0] 
                  }}
                  transition={{ 
                    duration: 1.5 + Math.random() * 2, 
                    delay: 0.2 + Math.random(),
                    ease: "easeIn" 
                  }}
                  style={{
                    position: 'absolute',
                    width: '4px',
                    height: '4px',
                    borderRadius: '50%',
                    background: i % 3 === 0 ? 'var(--pink-3)' : (i % 2 === 0 ? '#fff' : 'var(--pink-1)'),
                    boxShadow: `0 0 15px ${i % 3 === 0 ? 'var(--pink-3)' : (i % 2 === 0 ? '#fff' : 'var(--pink-1)')}`,
                    zIndex: 2
                  }}
                />
              );
            })}
          </>
        )}

        {logoPhase !== 'hidden' && (
          <>
            {/* Orbiting Stars around the logo */}
            {logoPhase === 'center' && (
              <motion.div
                initial={{ opacity: 0, scale: 0.5 }}
                animate={{ opacity: 1, scale: 1, rotate: 360 }}
                exit={{ opacity: 0, scale: 0 }}
                transition={{ 
                  opacity: { duration: 1 }, 
                  scale: { duration: 1, ease: 'easeOut' },
                  rotate: { duration: 20, repeat: Infinity, ease: 'linear' } 
                }}
                style={{
                  position: 'absolute',
                  top: '50%', left: '50%',
                  x: '-50%', y: '-50%',
                  width: '600px', height: '600px',
                  zIndex: 14,
                  pointerEvents: 'none'
                }}
              >
                {[...Array(15)].map((_, i) => {
                  const angle = (Math.PI * 2 * i) / 15;
                  const radius = 200 + Math.random() * 50;
                  const starX = Math.cos(angle) * radius + 300;
                  const starY = Math.sin(angle) * radius + 300;
                  return (
                    <div 
                      key={`orbit-${i}`}
                      style={{
                        position: 'absolute',
                        left: starX, top: starY,
                        width: i % 2 === 0 ? '4px' : '2px',
                        height: i % 2 === 0 ? '4px' : '2px',
                        borderRadius: '50%',
                        background: i % 3 === 0 ? 'var(--pink-3)' : '#fff',
                        boxShadow: `0 0 10px ${i % 3 === 0 ? 'var(--pink-3)' : '#fff'}`,
                      }}
                    />
                  );
                })}
              </motion.div>
            )}

            <motion.div
              initial={{ scale: 0, opacity: 0, top: '50%', left: '50%', x: '-50%', y: '-50%' }}
              animate={
                logoPhase === 'center' 
                  ? { scale: 4, opacity: 1, top: '50%', left: '50%', x: '-50%', y: '-50%' }
                  : { scale: 1, opacity: 0, top: '24px', left: '32px', x: '0%', y: '0%' } // Transition to Navbar position smoothly
              }
              transition={
                logoPhase === 'center'
                  ? { duration: 1, ease: 'easeOut' } // Pop into center
                  : { duration: 1.2, ease: [0.76, 0, 0.24, 1] } // Super smooth slide to corner
              }
              style={{
                position: 'absolute',
                zIndex: 15,
                display: 'flex',
                flexDirection: 'column',
                alignItems: 'center'
              }}
            >
              {/* The exact Torrtus Eclipse Logo from Navbar */}
              <div style={{ position: 'relative', width: '60px', height: '45px', display: 'flex', justifyContent: 'center' }}>
                <motion.div
                  animate={{ opacity: [0.7, 1, 0.7], scale: [1, 1.1, 1] }}
                  transition={{ duration: 1, repeat: Infinity, ease: 'easeInOut' }}
                  style={{
                    position: 'absolute',
                    width: '40px', height: '40px',
                    borderRadius: '50%',
                    background: 'linear-gradient(270deg, #482d61, #da66a7, #92508a)',
                    filter: 'blur(6px)',
                    top: '8px'
                  }}
                />
                <div style={{
                    position: 'absolute',
                    width: '44px', height: '44px',
                    borderRadius: '50%',
                    background: 'var(--bg-dark)',
                    top: '20px', zIndex: 2,
                    boxShadow: 'inset 0 4px 6px rgba(0,0,0,0.5)'
                  }}
                />
              </div>
              <div style={{ 
                fontFamily: "'Syncopate', sans-serif", fontSize: '0.65rem', 
                letterSpacing: '0.3em', fontWeight: 700, color: 'var(--text-main)',
                marginLeft: '0.3em', marginTop: '-4px', zIndex: 3,
                textShadow: '0 0 10px var(--pink-3)'
              }}>
                TORRTUS
              </div>
            </motion.div>
          </>
        )}
      </div>

      {/* TOP GARAGE DOOR */}
      <motion.div 
        animate={isOpen ? { y: '-100vh', opacity: 0 } : { y: 0, opacity: 1 }}
        transition={{ duration: 1.5, ease: [0.76, 0, 0.24, 1], delay: 0.2 }}
        style={{
          position: 'absolute',
          top: 0,
          left: 0,
          width: '100%',
          height: '50%',
          background: 'linear-gradient(to bottom, #160b1c, #09030b)',
          borderBottom: '4px solid var(--pink-3)',
          boxShadow: '0 10px 50px rgba(0,0,0,1), inset 0 -2px 10px var(--pink-3)',
          zIndex: 10,
          y: doorY, // Connect drag to visual feedback
          display: 'flex',
          flexDirection: 'column',
          alignItems: 'center',
          justifyContent: 'flex-end',
          overflow: 'hidden'
        }}
      >
        {/* Horizontal sci-fi metallic indents */}
        {[...Array(5)].map((_, i) => (
          <div key={`t-${i}`} style={{ width: '100%', height: '2px', background: 'rgba(255,255,255,0.05)', marginBottom: '4vh', boxShadow: '0 1px 0 rgba(0,0,0,0.5)' }} />
        ))}
      </motion.div>

      {/* BOTTOM GARAGE DOOR */}
      <motion.div 
        animate={isOpen ? { y: '100vh', opacity: 0 } : { y: 0, opacity: 1 }}
        transition={{ duration: 1.5, ease: [0.76, 0, 0.24, 1], delay: 0.2 }}
        style={{
          position: 'absolute',
          bottom: 0,
          left: 0,
          width: '100%',
          height: '50%',
          background: 'linear-gradient(to top, #160b1c, #09030b)',
          borderTop: '4px solid var(--pink-3)',
          boxShadow: '0 -10px 50px rgba(0,0,0,1), inset 0 2px 10px var(--pink-3)',
          zIndex: 10,
          display: 'flex',
          flexDirection: 'column',
          alignItems: 'center',
          justifyContent: 'flex-start',
          overflow: 'hidden'
        }}
      >
        {/* Horizontal sci-fi metallic indents */}
        {[...Array(5)].map((_, i) => (
           <div key={`b-${i}`} style={{ width: '100%', height: '2px', background: 'rgba(255,255,255,0.05)', marginTop: '4vh', boxShadow: '0 1px 0 rgba(0,0,0,0.5)' }} />
        ))}
      </motion.div>

      {/* PULL CHORD MECHANISM */}
      <motion.div
        animate={isOpen ? { opacity: 0, scale: 0 } : { opacity: 1, scale: 1 }}
        transition={{ duration: 0.5 }}
        style={{
          position: 'absolute',
          top: '30%', // Move to top to allow pulling DOWN
          right: '15%',
          zIndex: 20,
          display: 'flex',
          flexDirection: 'column', // Normal order so chord goes down
          alignItems: 'center',
          cursor: 'grab' 
        }}
      >
        <div style={{ color: 'var(--pink-3)', fontFamily: "'Syncopate', sans-serif", fontSize: '0.8rem', letterSpacing: '2px', marginBottom: '1rem', textShadow: '0 0 10px var(--pink-3)' }}>
          PULL DOWN TO INITIATE
        </div>
        
        {/* The draggable handle */}
        <motion.div
          drag="y"
          dragConstraints={{ top: 0, bottom: 300 }} // Drag downwards (positive Y)
          dragElastic={0.2}
          onDragEnd={handleDragEnd}
          style={{ y }}
          animate={controls}
          whileHover={{ scale: 1.1 }}
          whileTap={{ scale: 0.95, cursor: 'grabbing' }}
        >
          <motion.div style={{
            width: '40px',
            height: '60px',
            borderRadius: '20px',
            background: 'var(--bg-light)',
            border: '2px solid',
            borderColor: handleGlow,
            display: 'flex',
            flexDirection: 'column',
            alignItems: 'center',
            justifyContent: 'center',
            gap: '4px',
            boxShadow: '0 0 20px rgba(218, 102, 167, 0.4)'
          }}>
            <div style={{ width: '20px', height: '2px', background: 'var(--text-main)', opacity: 0.5 }} />
            <div style={{ width: '20px', height: '2px', background: 'var(--text-main)', opacity: 0.5 }} />
            <div style={{ width: '20px', height: '2px', background: 'var(--text-main)', opacity: 0.5 }} />
          </motion.div>
        </motion.div>
      </motion.div>

    </div>
  );
}
