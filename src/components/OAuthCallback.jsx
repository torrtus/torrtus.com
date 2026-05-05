import React, { useEffect, useState } from 'react';
import { Link, useSearchParams } from 'react-router-dom';

const OAuthCallback = () => {
  const [searchParams] = useSearchParams();
  const [status, setStatus] = useState('processing');

  useEffect(() => {
    const code = searchParams.get('code');
    const error = searchParams.get('error');

    if (error) {
      setStatus('error');
    } else if (code) {
      setStatus('success');
    } else {
      setStatus('idle');
    }
  }, [searchParams]);

  const states = {
    processing: {
      label: 'Processing',
      heading: 'Connecting...',
      body: 'Please wait while we complete the authorization.',
    },
    success: {
      label: 'Authorized',
      heading: 'Connection Successful',
      body: 'Your account has been authorized. You can close this window or return to the app.',
    },
    error: {
      label: 'Error',
      heading: 'Authorization Failed',
      body: `An error occurred during authorization: ${searchParams.get('error_description') || searchParams.get('error') || 'Unknown error'}`,
    },
    idle: {
      label: 'Callback',
      heading: 'OAuth Callback',
      body: 'This endpoint is used for OAuth 2.0 authorization callbacks by Torrtus-connected applications.',
    },
  };

  const current = states[status];

  return (
    <>
      <div className="site-bg" />
      <div style={{
        minHeight: '100vh',
        display: 'flex',
        flexDirection: 'column',
        alignItems: 'center',
        justifyContent: 'center',
        padding: '2rem 1.5rem',
        textAlign: 'center',
      }}>
        <div style={{
          background: 'var(--bg-card)',
          border: '1px solid var(--border-subtle)',
          borderRadius: '1.25rem',
          padding: 'clamp(2rem, 5vw, 3.5rem)',
          maxWidth: 480,
          width: '100%',
        }}>
          <p className="section-label" style={{ marginBottom: '1rem' }}>{current.label}</p>

          <h1 style={{ fontSize: 'clamp(1.5rem, 4vw, 2.25rem)', marginBottom: '1rem' }}
            className="text-gradient">
            {current.heading}
          </h1>

          <p style={{ color: 'var(--text-muted)', fontSize: '0.95rem', lineHeight: 1.7, marginBottom: '2rem' }}>
            {current.body}
          </p>

          <Link to="/" style={{
            display: 'inline-block',
            padding: '0.65rem 1.5rem',
            background: 'linear-gradient(135deg, var(--pink-3), var(--pink-2))',
            borderRadius: '0.5rem',
            color: '#fff',
            fontWeight: 600,
            fontSize: '0.9rem',
          }}>
            Back to Torrtus
          </Link>
        </div>

        <p style={{ color: 'var(--text-muted)', fontSize: '0.75rem', marginTop: '2rem' }}>
          &copy; {new Date().getFullYear()} Torrtus IT Services
        </p>
      </div>
    </>
  );
};

export default OAuthCallback;
