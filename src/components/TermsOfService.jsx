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

const TermsOfService = () => (
  <>
    <div className="site-bg" />
    <div style={{ maxWidth: 760, margin: '0 auto', padding: '6rem 1.5rem 4rem' }}>
      <Link to="/" style={{
        display: 'inline-flex', alignItems: 'center', gap: '0.4rem',
        color: 'var(--accent)', fontSize: '0.85rem', marginBottom: '3rem',
        fontFamily: "'Syncopate', sans-serif",
      }}>
        &larr; TORRTUS
      </Link>

      <p className="section-label fade-up" style={{ marginBottom: '0.75rem' }}>Legal</p>
      <h1 className="text-gradient fade-up-1" style={{ fontSize: 'clamp(2rem, 5vw, 3rem)', marginBottom: '0.5rem' }}>
        Terms of Service
      </h1>
      <p style={{ color: 'var(--text-muted)', fontSize: '0.85rem', marginBottom: '3.5rem' }}>
        Effective date: January 1, 2025 &nbsp;&middot;&nbsp; Last updated: May 6, 2026
      </p>

      <Section title="Acceptance of Terms">
        By accessing or using torrtus.com or any services provided by Torrtus IT Services
        ("Torrtus", "we", "us"), you agree to be bound by these Terms of Service. If you
        do not agree, please do not use our website or services.
      </Section>

      <Section title="Services">
        Torrtus provides IT consulting, software development, digital strategy, and related
        technology services. Specific terms for client engagements are governed by separate
        service agreements signed between Torrtus and the client.
      </Section>

      <Section title="Use of the Website">
        <ul style={{ paddingLeft: '1.25rem', display: 'flex', flexDirection: 'column', gap: '0.5rem' }}>
          <li>You may use this website for lawful purposes only.</li>
          <li>You may not attempt to gain unauthorized access to any part of our systems.</li>
          <li>You may not use automated tools to scrape or harvest content without permission.</li>
          <li>You may not transmit harmful, offensive, or disruptive content through our website.</li>
        </ul>
      </Section>

      <Section title="Intellectual Property">
        All content on torrtus.com — including text, graphics, logos, icons, and code — is
        the property of Torrtus IT Services and is protected by applicable intellectual
        property laws. You may not reproduce, distribute, or create derivative works without
        our express written consent.
      </Section>

      <Section title="Disclaimer of Warranties">
        This website and its content are provided "as is" without warranties of any kind,
        express or implied. Torrtus does not warrant that the website will be uninterrupted,
        error-free, or free of viruses or other harmful components.
      </Section>

      <Section title="Limitation of Liability">
        To the fullest extent permitted by law, Torrtus IT Services shall not be liable for
        any indirect, incidental, special, or consequential damages arising from your use of
        this website or our services, even if advised of the possibility of such damages.
      </Section>

      <Section title="Third-Party Links">
        Our website may contain links to third-party websites. These links are provided for
        convenience only. Torrtus has no control over and accepts no responsibility for the
        content, privacy practices, or availability of those sites.
      </Section>

      <Section title="Modifications">
        We reserve the right to modify these Terms at any time. Changes will be posted on
        this page with an updated effective date. Your continued use of the website after
        changes constitutes acceptance of the revised Terms.
      </Section>

      <Section title="Governing Law">
        These Terms are governed by the laws of the applicable jurisdiction in which Torrtus
        IT Services operates. Any disputes shall be resolved through good-faith negotiation
        before pursuing formal legal proceedings.
      </Section>

      <Section title="Contact">
        For questions regarding these Terms:
        <br />
        <a href="mailto:legal@torrtus.com" style={{ color: 'var(--accent)' }}>legal@torrtus.com</a>
        <br />
        Torrtus IT Services
      </Section>
    </div>
  </>
);

export default TermsOfService;
