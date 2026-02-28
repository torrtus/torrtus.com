import React, { useState } from 'react';
import { useParams, useNavigate } from 'react-router-dom';
import { motion } from 'framer-motion';
import CustomCursor from './CustomCursor';
import SpaceBackground from './SpaceBackground';
import { Lock } from 'lucide-react';

const AdminLogin = () => {
  const { clientName } = useParams();
  const navigate = useNavigate();
  const [password, setPassword] = useState('');

  const displayName = clientName ? clientName.replace(/([A-Z])/g, ' $1').trim() : 'Client';

  const handleLogin = (e) => {
    e.preventDefault();
    alert(`Attempting login for ${displayName} dashboard...`);
    // In a real app, authenticate then redirect to the actual dashboard
  };

  return (
    <>
      <CustomCursor />
      <SpaceBackground />
      
      <div 
        style={{ 
          minHeight: '100vh', 
          display: 'flex', 
          alignItems: 'center', 
          justifyContent: 'center',
          position: 'relative',
          zIndex: 1
        }}
      >
        <motion.div
          className="glass-panel"
          initial={{ opacity: 0, scale: 0.9 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.5 }}
          style={{ 
            padding: '4rem 3rem', 
            maxWidth: '500px', 
            width: '90%',
            textAlign: 'center' 
          }}
        >
          <div style={{ display: 'flex', justifyContent: 'center', marginBottom: '2rem' }}>
            <div style={{ padding: '1.5rem', background: 'rgba(0, 240, 255, 0.1)', borderRadius: '50%', border: '1px solid var(--accent-cyan)' }}>
              <Lock size={40} color="var(--accent-cyan)" />
            </div>
          </div>
          
          <h2 style={{ fontSize: '2rem', marginBottom: '0.5rem', textTransform: 'capitalize' }}>
            {displayName}
          </h2>
          <h3 className="text-gradient" style={{ fontSize: '1.2rem', marginBottom: '3rem' }}>
            Admin Dashboard Login
          </h3>

          <form onSubmit={handleLogin} style={{ display: 'flex', flexDirection: 'column', gap: '1.5rem' }}>
            <input
              type="password"
              placeholder="Enter Admin Password"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
              required
              style={{
                width: '100%',
                padding: '1rem',
                borderRadius: '12px',
                background: 'rgba(5,5,10,0.7)',
                border: '1px solid var(--glass-border)',
                color: 'var(--text-main)',
                fontFamily: 'inherit',
                fontSize: '1rem',
                textAlign: 'center',
                letterSpacing: '2px'
              }}
            />
            
            <button
              type="submit"
              className="cta-button"
              style={{ padding: '1rem', width: '100%' }}
            >
              Access Dashboard
            </button>
          </form>

          <button
            onClick={() => navigate('/')}
            style={{
              background: 'transparent',
              border: 'none',
              color: 'var(--text-muted)',
              marginTop: '2rem',
              textDecoration: 'underline',
              fontSize: '0.9rem'
            }}
          >
            ← Return to Torrtus.com
          </button>

        </motion.div>
      </div>
    </>
  );
};

export default AdminLogin;
