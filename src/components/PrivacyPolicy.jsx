import React from 'react';
import { Link } from 'react-router-dom';

const Section = ({ title, children }) => (
  <div style={{ marginBottom: '2.5rem' }}>
    <h2 style={{
      fontSize: '1.1rem',
      fontWeight: 700,
      color: 'var(--accent)',
      fontFamily: "'Syncopate', sans-serif",
      letterSpacing: '0.15em',
      textTransform: 'uppercase',
      marginBottom: '0.85rem',
    }}>{title}</h2>
    <div style={{ color: 'var(--text-muted)', fontSize: '0.95rem', lineHeight: 1.8 }}>
      {children}
    </div>
  </div>
);

const PrivacyPolicy = () => (
  <>
    <div className="site-bg" />
    <div style={{ maxWidth: 760, margin: '0 auto', padding: '6rem 1.5rem 4rem' }}>
      <Link to="/" style={{
        display: 'inline-flex', alignItems: 'center', gap: '0.4rem',
        color: 'var(--accent)', fontSize: '0.85rem', marginBottom: '3rem',
        fontFamily: "'Syncopate', sans-serif', letterSpacing: '0.1em",
      }}>
        &larr; TORRTUS
      </Link>

      <p className="section-label fade-up" style={{ marginBottom: '0.75rem' }}>Legal</p>
      <h1 className="text-gradient fade-up-1" style={{ fontSize: 'clamp(2rem, 5vw, 3rem)', marginBottom: '0.5rem' }}>
        Privacy Policy
      </h1>
      <p style={{ color: 'var(--text-muted)', fontSize: '0.85rem', marginBottom: '3.5rem' }}>
        Effective date: January 1, 2025 &nbsp;&middot;&nbsp; Last updated: May 6, 2026
      </p>

      <Section title="Overview">
        Torrtus IT Services ("Torrtus", "we", "our", or "us") is committed to protecting your
        personal information. This Privacy Policy explains how we collect, use, and safeguard
        data when you visit torrtus.com or engage with our services.
      </Section>

      <Section title="Information We Collect">
        <p style={{ marginBottom: '0.75rem' }}>We may collect the following categories of information:</p>
        <ul style={{ paddingLeft: '1.25rem', display: 'flex', flexDirection: 'column', gap: '0.5rem' }}>
          <li><strong style={{ color: 'var(--text-main)' }}>Contact data</strong> — name, email address, phone number when you fill out our contact form.</li>
          <li><strong style={{ color: 'var(--text-main)' }}>Usage data</strong> — pages visited, time spent, browser type, IP address (anonymized).</li>
          <li><strong style={{ color: 'var(--text-main)' }}>Communication data</strong> — messages you send us via email or the website.</li>
        </ul>
      </Section>

      <Section title="How We Use Your Information">
        <ul style={{ paddingLeft: '1.25rem', display: 'flex', flexDirection: 'column', gap: '0.5rem' }}>
          <li>To respond to your inquiries and deliver requested services.</li>
          <li>To improve and maintain our website and product offerings.</li>
          <li>To send service-related communications (not marketing, unless opted in).</li>
          <li>To comply with applicable laws and regulations.</li>
        </ul>
      </Section>

      <Section title="Data Sharing">
        We do not sell, rent, or trade your personal information. We may share data with
        trusted third-party service providers (e.g., hosting, analytics) who are contractually
        obligated to protect it and use it only as instructed by us.
      </Section>

      <Section title="Cookies">
        Our website uses minimal, essential cookies for site functionality. We do not use
        third-party advertising or tracking cookies. You may disable cookies in your browser
        settings without affecting core site functionality.
      </Section>

      <Section title="Data Retention">
        We retain personal data only as long as necessary to fulfill the purposes outlined
        in this policy, or as required by law. Contact form submissions are retained for up
        to 24 months.
      </Section>

      <Section title="Your Rights">
        Depending on your jurisdiction, you may have the right to access, correct, delete,
        or restrict processing of your personal data. To exercise these rights, contact us at{' '}
        <a href="mailto:privacy@torrtus.com" style={{ color: 'var(--accent)' }}>privacy@torrtus.com</a>.
      </Section>

      <Section title="Security">
        We use industry-standard security measures including HTTPS encryption and access
        controls. No method of transmission over the internet is 100% secure, but we take
        reasonable precautions to protect your data.
      </Section>

      <Section title="Changes to This Policy">
        We may update this Privacy Policy periodically. Material changes will be posted on
        this page with an updated effective date. Continued use of our website after changes
        constitutes acceptance.
      </Section>

      <Section title="Contact">
        For privacy-related questions or requests:
        <br />
        <a href="mailto:privacy@torrtus.com" style={{ color: 'var(--accent)' }}>privacy@torrtus.com</a>
        <br />
        Torrtus IT Services
      </Section>
    </div>
  </>
);

export default PrivacyPolicy;
