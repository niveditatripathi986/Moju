import React from 'react';

export default function PrivacyPolicy() {
  return (
    <div style={{ backgroundColor: 'var(--cream)', minHeight: '100vh', paddingTop: '100px', paddingBottom: '80px', color: 'var(--dark)', fontFamily: 'var(--font-sans)' }}>
      <div style={{ maxWidth: '900px', margin: '0 auto', padding: '0 24px' }}>
        <h1 style={{ fontSize: '3rem', fontWeight: '800', marginBottom: '24px' }}>Privacy Policy</h1>
        
        <div style={{ lineHeight: '1.8', fontSize: '1.05rem', display: 'flex', flexDirection: 'column', gap: '24px' }}>
          <section>
            <h2 style={{ fontSize: '1.5rem', fontWeight: '700', marginBottom: '16px' }}>1. Introduction</h2>
            <p>Welcome to Hindustan Marketing Media. We respect your privacy and are committed to protecting your personal data. This privacy policy will inform you as to how we look after your personal data when you visit our website and tell you about your privacy rights and how the law protects you.</p>
          </section>

          <section>
            <h2 style={{ fontSize: '1.5rem', fontWeight: '700', marginBottom: '16px' }}>2. The Data We Collect About You</h2>
            <p>Personal data, or personal information, means any information about an individual from which that person can be identified. We may collect, use, store and transfer different kinds of personal data about you which we have grouped together as follows:</p>
            <ul style={{ marginLeft: '24px', marginTop: '12px', display: 'flex', flexDirection: 'column', gap: '8px' }}>
              <li><strong>Identity Data</strong> includes first name, last name, username or similar identifier.</li>
              <li><strong>Contact Data</strong> includes billing address, delivery address, email address and telephone numbers.</li>
              <li><strong>Technical Data</strong> includes internet protocol (IP) address, your login data, browser type and version, time zone setting and location, browser plug-in types and versions, operating system and platform, and other technology on the devices you use to access this website.</li>
              <li><strong>Usage Data</strong> includes information about how you use our website, products and services.</li>
            </ul>
          </section>

          <section>
            <h2 style={{ fontSize: '1.5rem', fontWeight: '700', marginBottom: '16px' }}>3. How We Use Your Personal Data</h2>
            <p>We will only use your personal data when the law allows us to. Most commonly, we will use your personal data in the following circumstances:</p>
            <ul style={{ marginLeft: '24px', marginTop: '12px', display: 'flex', flexDirection: 'column', gap: '8px' }}>
              <li>Where we need to perform the contract we are about to enter into or have entered into with you.</li>
              <li>Where it is necessary for our legitimate interests (or those of a third party) and your interests and fundamental rights do not override those interests.</li>
              <li>Where we need to comply with a legal obligation.</li>
            </ul>
          </section>

          <section>
            <h2 style={{ fontSize: '1.5rem', fontWeight: '700', marginBottom: '16px' }}>4. Contact Us</h2>
            <p>If you have any questions about this privacy policy or our privacy practices, please contact us at:</p>
            <p style={{ marginTop: '8px' }}>Email: market09000@gmail.com</p>
          </section>
        </div>
      </div>
    </div>
  );
}
