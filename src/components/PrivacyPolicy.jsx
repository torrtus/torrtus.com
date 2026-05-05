import React from 'react';
import { Link } from 'react-router-dom';
import Navbar from './Navbar';

const Section = ({ title, children }) => (
  <div style={{ marginBottom: '3rem', paddingBottom: '3rem', borderBottom: '1px solid var(--border-subtle)' }}>
    <h2 style={{
      fontSize: '0.7rem',
      fontWeight: 700,
      color: 'var(--accent)',
      fontFamily: "'Syncopate', sans-serif",
      letterSpacing: '0.2em',
      textTransform: 'uppercase',
      marginBottom: '1rem',
    }}>{title}</h2>
    <div style={{ color: 'var(--text-muted)', fontSize: '0.97rem', lineHeight: 1.85 }}>
      {children}
    </div>
  </div>
);

const PrivacyPolicy = () => (
  <>
    <div className="site-bg" />
    <Navbar />
    <div style={{ position: 'relative', zIndex: 1 }}>
      <div style={{ maxWidth: 800, margin: '0 auto', padding: '8rem 1.5rem 6rem' }}>

        {/* Back link */}
        <Link to="/" style={{
          display: 'inline-flex',
          alignItems: 'center',
          gap: '0.5rem',
          color: 'var(--accent)',
          fontSize: '0.72rem',
          fontFamily: "'Syncopate', sans-serif",
          letterSpacing: '0.18em',
          textTransform: 'uppercase',
          marginBottom: '3.5rem',
        }}>
          &#8592; Back to Torrtus
        </Link>

        {/* Header */}
        <p className="section-label" style={{ marginBottom: '0.75rem' }}>Legal</p>
        <h1 className="text-gradient" style={{ fontSize: 'clamp(2.2rem, 5vw, 3.5rem)', marginBottom: '1rem', fontWeight: 800, lineHeight: 1.1 }}>
          Privacy Policy
        </h1>
        <p style={{ color: 'var(--text-muted)', fontSize: '0.85rem', marginBottom: '1rem' }}>
          Effective: January 1, 2025 &#183; Last updated: May 6, 2026
        </p>
        <p style={{ color: 'var(--text-muted)', fontSize: '0.97rem', lineHeight: 1.8, maxWidth: '62ch', marginBottom: '4rem' }}>
          Torrtus IT Services is committed to your privacy. This policy explains how we collect,
          use, and protect your personal information when you use our website or engage our services.
        </p>

        {/* Divider */}
        <div style={{ borderTop: '1px solid var(--border-subtle)', marginBottom: '3rem' }} />

        {/* Sections */}
        <Section title="1. Who We Are">
          <p>
            Torrtus IT Services (&quot;Torrtus&quot;, &quot;we&quot;, &quot;us&quot;, or &quot;our&quot;) is a premier IT services company based in India,
            operating at torrtus.com. We specialize in SaaS development, AI automation, web and mobile app
            hosting, and NFC/QR digital solutions. This Privacy Policy applies to all individuals who visit
            our website or engage with us in a professional capacity.
          </p>
        </Section>

        <Section title="2. Information We Collect">
          <p style={{ marginBottom: '1rem' }}>
            We collect only the information necessary to deliver our services and respond to your inquiries.
            This includes:
          </p>
          <ul style={{ paddingLeft: '1.5rem', display: 'flex', flexDirection: 'column', gap: '0.75rem' }}>
            <li>
              <strong style={{ color: 'var(--text-main)' }}>Contact Information</strong> &#8212; Your name, email address,
              and phone number when submitted via our contact form or through direct communication.
            </li>
            <li>
              <strong style={{ color: 'var(--text-main)' }}>Project &amp; Business Information</strong> &#8212; Details about
              your project, organization, or requirements that you voluntarily share during service discussions.
            </li>
            <li>
              <strong style={{ color: 'var(--text-main)' }}>Usage Data</strong> &#8212; Pages visited, time on site, browser
              type, device type, and anonymized IP address for website analytics. We do not track individual users across sessions.
            </li>
            <li>
              <strong style={{ color: 'var(--text-main)' }}>Communication Records</strong> &#8212; Emails, messages, or
              feedback submitted to us, retained to provide support and continuity of service.
            </li>
          </ul>
          <p style={{ marginTop: '1rem' }}>
            We do not collect sensitive personal data such as financial details, government ID numbers,
            or biometric data through this website.
          </p>
        </Section>

        <Section title="3. How We Use Your Information">
          <p style={{ marginBottom: '1rem' }}>We use your information solely to:</p>
          <ul style={{ paddingLeft: '1.5rem', display: 'flex', flexDirection: 'column', gap: '0.6rem' }}>
            <li>Respond to your inquiries and provide the services you have requested.</li>
            <li>Communicate project updates, proposals, and relevant service information.</li>
            <li>Improve the functionality and user experience of our website.</li>
            <li>Maintain records of engagements for legal and accounting purposes.</li>
            <li>Send service-related updates &#8212; we do not send unsolicited marketing emails.</li>
            <li>Comply with applicable Indian and international legal obligations.</li>
          </ul>
          <p style={{ marginTop: '1rem' }}>
            We will never use your information to make automated decisions that significantly affect you,
            nor will we use it for profiling or targeted advertising.
          </p>
        </Section>

        <Section title="4. Legal Basis for Processing">
          <p style={{ marginBottom: '1rem' }}>We process your personal data based on:</p>
          <ul style={{ paddingLeft: '1.5rem', display: 'flex', flexDirection: 'column', gap: '0.6rem' }}>
            <li><strong style={{ color: 'var(--text-main)' }}>Consent</strong> &#8212; When you voluntarily submit a contact form or opt into communications.</li>
            <li><strong style={{ color: 'var(--text-main)' }}>Contractual Necessity</strong> &#8212; To fulfill obligations under service agreements with clients.</li>
            <li><strong style={{ color: 'var(--text-main)' }}>Legitimate Interests</strong> &#8212; To improve our services and maintain business records.</li>
            <li><strong style={{ color: 'var(--text-main)' }}>Legal Compliance</strong> &#8212; Where required by applicable law or regulation.</li>
          </ul>
        </Section>

        <Section title="5. Data Sharing &amp; Third Parties">
          <p style={{ marginBottom: '1rem' }}>
            We do not sell, rent, trade, or otherwise transfer your personal data to third parties for
            commercial purposes. We may share data with:
          </p>
          <ul style={{ paddingLeft: '1.5rem', display: 'flex', flexDirection: 'column', gap: '0.6rem' }}>
            <li>
              <strong style={{ color: 'var(--text-main)' }}>Hosting &amp; Infrastructure Providers</strong> &#8212; Trusted cloud
              providers used to operate our website and services, who are contractually bound to protect your data.
            </li>
            <li>
              <strong style={{ color: 'var(--text-main)' }}>Analytics Platforms</strong> &#8212; Anonymized and aggregated
              usage data may be processed by analytics tools to help us improve our site.
            </li>
            <li>
              <strong style={{ color: 'var(--text-main)' }}>Legal Authorities</strong> &#8212; Where required by law, court order,
              or regulatory obligation.
            </li>
          </ul>
          <p style={{ marginTop: '1rem' }}>
            All third-party partners are evaluated for compliance with applicable data protection standards.
          </p>
        </Section>

        <Section title="6. Cookies &amp; Tracking">
          <p style={{ marginBottom: '1rem' }}>
            Our website uses minimal, essential cookies required for basic functionality such as session
            management and security. We do not use:
          </p>
          <ul style={{ paddingLeft: '1.5rem', display: 'flex', flexDirection: 'column', gap: '0.5rem' }}>
            <li>Third-party advertising or retargeting cookies</li>
            <li>Social media tracking pixels</li>
            <li>Cross-site user profiling tools</li>
          </ul>
          <p style={{ marginTop: '1rem' }}>
            You may disable cookies in your browser settings without affecting core website functionality.
            If you do so, some interactive features (such as the contact form) may behave differently.
          </p>
        </Section>

        <Section title="7. Data Retention">
          <p>
            We retain personal data only for as long as necessary to fulfill the purposes for which it was
            collected, or as required by applicable law. Typical retention periods:
          </p>
          <ul style={{ paddingLeft: '1.5rem', marginTop: '1rem', display: 'flex', flexDirection: 'column', gap: '0.6rem' }}>
            <li><strong style={{ color: 'var(--text-main)' }}>Contact form submissions:</strong> Up to 24 months from the date of submission.</li>
            <li><strong style={{ color: 'var(--text-main)' }}>Client project records:</strong> For the duration of the engagement plus 3 years for legal and accounting purposes.</li>
            <li><strong style={{ color: 'var(--text-main)' }}>Website usage data:</strong> Anonymized and aggregated &#8212; retained indefinitely for trend analysis.</li>
          </ul>
          <p style={{ marginTop: '1rem' }}>
            Upon expiry of the applicable retention period, data is securely deleted or anonymized.
          </p>
        </Section>

        <Section title="8. Your Rights">
          <p style={{ marginBottom: '1rem' }}>
            You have the right to:
          </p>
          <ul style={{ paddingLeft: '1.5rem', display: 'flex', flexDirection: 'column', gap: '0.6rem' }}>
            <li><strong style={{ color: 'var(--text-main)' }}>Access</strong> &#8212; Request a copy of the personal data we hold about you.</li>
            <li><strong style={{ color: 'var(--text-main)' }}>Correction</strong> &#8212; Request that we correct inaccurate or incomplete data.</li>
            <li><strong style={{ color: 'var(--text-main)' }}>Deletion</strong> &#8212; Request erasure of your personal data, subject to legal retention requirements.</li>
            <li><strong style={{ color: 'var(--text-main)' }}>Restriction</strong> &#8212; Request that we limit how we process your data in certain circumstances.</li>
            <li><strong style={{ color: 'var(--text-main)' }}>Objection</strong> &#8212; Object to processing based on legitimate interests.</li>
            <li><strong style={{ color: 'var(--text-main)' }}>Portability</strong> &#8212; Request your data in a structured, machine-readable format.</li>
          </ul>
          <p style={{ marginTop: '1rem' }}>
            To exercise any of these rights, contact us at{' '}
            <a href="mailto:team@torrtus.com" style={{ color: 'var(--accent)' }}>team@torrtus.com</a>.
            We will respond within 30 days.
          </p>
        </Section>

        <Section title="9. Security">
          <p>
            Torrtus takes the security of your data seriously. We implement industry-standard measures
            including HTTPS encryption across all pages, strict access controls on internal systems, and
            regular security reviews of our infrastructure. Client project credentials and access keys are
            handled with confidentiality and never stored in plain text.
          </p>
          <p style={{ marginTop: '1rem' }}>
            While we take every reasonable precaution, no data transmission over the internet is 100%
            secure. We cannot guarantee absolute security of information transmitted to our site.
          </p>
        </Section>

        <Section title="10. Children's Privacy">
          <p>
            Our website and services are not directed at individuals under the age of 18. We do not
            knowingly collect personal data from minors. If we become aware that we have inadvertently
            collected data from a child, we will promptly delete it. If you believe a minor has provided
            us with personal data, please contact us immediately.
          </p>
        </Section>

        <Section title="11. Changes to This Policy">
          <p>
            We may update this Privacy Policy from time to time to reflect changes in our practices or
            applicable regulations. Material changes will be posted on this page with an updated effective
            date. We encourage you to review this policy periodically. Your continued use of our website
            following changes constitutes acceptance of the updated policy.
          </p>
        </Section>

        <Section title="12. Contact Us">
          <p style={{ marginBottom: '1rem' }}>
            For any privacy-related questions, data requests, or concerns, please reach out:
          </p>
          <div style={{ display: 'flex', flexDirection: 'column', gap: '0.4rem' }}>
            <span><strong style={{ color: 'var(--text-main)' }}>Company:</strong> Torrtus IT Services</span>
            <span>
              <strong style={{ color: 'var(--text-main)' }}>Email:</strong>{' '}
              <a href="mailto:team@torrtus.com" style={{ color: 'var(--accent)' }}>team@torrtus.com</a>
            </span>
            <span>
              <strong style={{ color: 'var(--text-main)' }}>Phone:</strong>{' '}
              <a href="tel:+918279363576" style={{ color: 'var(--accent)' }}>+91 82793 63576</a>
            </span>
            <span><strong style={{ color: 'var(--text-main)' }}>Website:</strong> torrtus.com</span>
          </div>
        </Section>

        {/* Footer note */}
        <div style={{ textAlign: 'center', paddingTop: '1rem' }}>
          <Link to="/terms" style={{ color: 'var(--accent)', fontSize: '0.85rem', marginRight: '2rem' }}>
            Terms of Service
          </Link>
          <Link to="/" style={{ color: 'var(--text-muted)', fontSize: '0.85rem' }}>
            &#8592; torrtus.com
          </Link>
        </div>

      </div>
    </div>
  </>
);

export default PrivacyPolicy;
