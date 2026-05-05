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

const TermsOfService = () => (
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
          Terms of Service
        </h1>
        <p style={{ color: 'var(--text-muted)', fontSize: '0.85rem', marginBottom: '1rem' }}>
          Effective: January 1, 2025 &#183; Last updated: May 6, 2026
        </p>
        <p style={{ color: 'var(--text-muted)', fontSize: '0.97rem', lineHeight: 1.8, maxWidth: '62ch', marginBottom: '4rem' }}>
          These Terms of Service govern your use of torrtus.com and all services provided by Torrtus IT Services.
          By accessing our website or engaging our services, you agree to be bound by these terms.
        </p>

        {/* Divider */}
        <div style={{ borderTop: '1px solid var(--border-subtle)', marginBottom: '3rem' }} />

        {/* Sections */}
        <Section title="1. Acceptance of Terms">
          By accessing torrtus.com or using any service offered by Torrtus IT Services (&quot;Torrtus&quot;, &quot;we&quot;,
          &quot;us&quot;, or &quot;our&quot;), you confirm that you have read, understood, and agree to be bound by these
          Terms of Service and our Privacy Policy. If you do not agree to these terms, please do not use our
          website or services. These Terms apply to all visitors, clients, and users of our platform.
        </Section>

        <Section title="2. About Our Services">
          <p style={{ marginBottom: '1rem' }}>
            Torrtus IT Services is a premier technology company operating across India, specializing in:
          </p>
          <ul style={{ paddingLeft: '1.5rem', display: 'flex', flexDirection: 'column', gap: '0.6rem' }}>
            <li><strong style={{ color: 'var(--text-main)' }}>SaaS Development</strong> &#8212; Rapid, full-cycle software-as-a-service product development for startups and enterprises.</li>
            <li><strong style={{ color: 'var(--text-main)' }}>AI Automation</strong> &#8212; Intelligent AI agent systems and workflow automation tools integrated into your business processes.</li>
            <li><strong style={{ color: 'var(--text-main)' }}>Web Hosting</strong> &#8212; Ultra-fast, secure, and scalable web hosting for enterprise-grade applications.</li>
            <li><strong style={{ color: 'var(--text-main)' }}>App Deployment</strong> &#8212; End-to-end iOS (App Store) and Android (Play Store) application deployment and maintenance.</li>
            <li><strong style={{ color: 'var(--text-main)' }}>NFC &amp; QR Solutions</strong> &#8212; Physical-digital bridge products including NFC authentication, dynamic QR codes, and product authenticity systems.</li>
          </ul>
          <p style={{ marginTop: '1rem' }}>
            Specific deliverables, timelines, and commercial terms for individual client engagements are governed
            by separate service agreements signed between Torrtus and the client, which take precedence over
            these general Terms where applicable.
          </p>
        </Section>

        <Section title="3. Use of the Website">
          <p style={{ marginBottom: '1rem' }}>You agree to use torrtus.com only for lawful purposes. You must not:</p>
          <ul style={{ paddingLeft: '1.5rem', display: 'flex', flexDirection: 'column', gap: '0.6rem' }}>
            <li>Attempt to gain unauthorized access to any part of our systems, servers, or databases.</li>
            <li>Use automated tools, bots, or scrapers to harvest content or data without express written permission.</li>
            <li>Transmit malware, spam, or any harmful, offensive, or disruptive content through the website.</li>
            <li>Impersonate Torrtus, our team, or any other person or entity.</li>
            <li>Interfere with the security or performance of the website or its underlying infrastructure.</li>
            <li>Attempt to reverse-engineer, decompile, or extract the source code of any Torrtus product or system.</li>
          </ul>
          <p style={{ marginTop: '1rem' }}>
            We reserve the right to suspend or block access to users who violate these terms without prior notice.
          </p>
        </Section>

        <Section title="4. Client Responsibilities">
          <p style={{ marginBottom: '1rem' }}>
            Clients engaging Torrtus for development or hosting services are responsible for:
          </p>
          <ul style={{ paddingLeft: '1.5rem', display: 'flex', flexDirection: 'column', gap: '0.6rem' }}>
            <li>Providing accurate project requirements, timely feedback, and necessary access credentials.</li>
            <li>Ensuring that content, assets, and materials shared with Torrtus do not infringe on third-party intellectual property rights.</li>
            <li>Maintaining confidentiality of any login credentials or API keys provided as part of the engagement.</li>
            <li>Keeping payment obligations current as specified in their service agreement.</li>
          </ul>
        </Section>

        <Section title="5. Intellectual Property">
          <p style={{ marginBottom: '1rem' }}>
            All original content on torrtus.com &#8212; including text, graphics, logos, icons, UI design, and code &#8212;
            is the exclusive property of Torrtus IT Services and is protected by applicable intellectual property laws.
          </p>
          <p style={{ marginBottom: '1rem' }}>
            You may not reproduce, distribute, publicly display, or create derivative works from any Torrtus content
            without our prior written consent. Linking to our website is permitted provided it is not done in a
            misleading or defamatory manner.
          </p>
          <p>
            For custom software developed for clients, ownership of deliverables is transferred to the client
            upon receipt of full payment, as outlined in the respective service agreement. Torrtus retains the
            right to display completed work in our portfolio unless the client explicitly requests confidentiality.
          </p>
        </Section>

        <Section title="6. Delivery &amp; Turnaround">
          <p>
            Torrtus targets an average delivery time of approximately 2 weeks from concept to a live, deployable
            product. Actual timelines depend on project scope, complexity, and client responsiveness. Milestone dates
            will be agreed upon in individual service contracts. Delays caused by incomplete client input, third-party
            dependencies, or force majeure events are excluded from delivery commitments.
          </p>
        </Section>

        <Section title="7. Payments &amp; Refunds">
          <p style={{ marginBottom: '1rem' }}>
            Payment terms, amounts, and schedules are detailed in individual service agreements. General principles include:
          </p>
          <ul style={{ paddingLeft: '1.5rem', display: 'flex', flexDirection: 'column', gap: '0.6rem' }}>
            <li>An advance payment is typically required before work commences.</li>
            <li>Refunds are evaluated on a case-by-case basis depending on the project stage and work completed.</li>
            <li>No refunds are issued for completed and delivered work accepted by the client.</li>
            <li>Disputes must be raised within 7 days of delivery for consideration.</li>
          </ul>
        </Section>

        <Section title="8. Disclaimer of Warranties">
          <p>
            This website and all information on it are provided &quot;as is&quot; without warranties of any kind, either
            express or implied, including but not limited to warranties of merchantability, fitness for a particular
            purpose, or non-infringement. Torrtus does not warrant that the website will be continuously available,
            error-free, or free of viruses or other harmful components. We make no guarantee regarding the accuracy
            or completeness of third-party links or referenced information.
          </p>
        </Section>

        <Section title="9. Limitation of Liability">
          <p>
            To the fullest extent permitted by applicable law, Torrtus IT Services, its directors, employees, and
            partners shall not be liable for any indirect, incidental, special, consequential, or punitive damages
            arising from your use of or inability to use this website or our services, even if Torrtus has been
            advised of the possibility of such damages. Our total liability in any event shall not exceed the amount
            paid by you for the specific service giving rise to the claim in the preceding 3 months.
          </p>
        </Section>

        <Section title="10. Third-Party Services &amp; Links">
          <p>
            Our website may contain links to third-party websites, tools, or platforms. These links are provided for
            informational purposes only. Torrtus has no control over the content, policies, or practices of third-party
            sites and accepts no liability for them. Our services may integrate with third-party APIs (e.g., app stores,
            cloud providers) whose separate terms of service govern their respective components.
          </p>
        </Section>

        <Section title="11. Privacy">
          <p>
            Your use of our website and services is also governed by our{' '}
            <Link to="/privacy" style={{ color: 'var(--accent)' }}>Privacy Policy</Link>, which is incorporated
            into these Terms by reference. By using our services, you consent to the collection and use of information
            as described in that policy.
          </p>
        </Section>

        <Section title="12. Modifications to Terms">
          <p>
            Torrtus reserves the right to modify these Terms of Service at any time. Changes will be posted on this
            page with an updated effective date. For active clients, we will make reasonable efforts to provide notice
            of material changes. Your continued use of the website or services after changes are posted constitutes
            your acceptance of the revised Terms.
          </p>
        </Section>

        <Section title="13. Governing Law &amp; Disputes">
          <p>
            These Terms are governed by the laws of India. Any disputes arising out of or in connection with these
            Terms shall first be attempted to be resolved amicably through good-faith negotiation. If a resolution
            cannot be reached within 30 days, disputes shall be referred to arbitration or the appropriate courts
            with jurisdiction over Torrtus IT Services' registered place of business.
          </p>
        </Section>

        <Section title="14. Contact Us">
          <p style={{ marginBottom: '1rem' }}>
            For any questions, concerns, or legal inquiries related to these Terms:
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
          <Link to="/privacy" style={{ color: 'var(--accent)', fontSize: '0.85rem', marginRight: '2rem' }}>
            Privacy Policy
          </Link>
          <Link to="/" style={{ color: 'var(--text-muted)', fontSize: '0.85rem' }}>
            &#8592; torrtus.com
          </Link>
        </div>

      </div>
    </div>
  </>
);

export default TermsOfService;
