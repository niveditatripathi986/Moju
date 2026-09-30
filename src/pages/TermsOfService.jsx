import React from 'react';

export default function TermsOfService() {
  return (
    <div style={{ backgroundColor: 'var(--cream)', minHeight: '100vh', paddingTop: '100px', paddingBottom: '80px', color: 'var(--dark)', fontFamily: 'var(--font-sans)' }}>
      <div style={{ maxWidth: '900px', margin: '0 auto', padding: '0 24px' }}>
        <h1 style={{ fontSize: '3rem', fontWeight: '800', marginBottom: '24px' }}>Terms of Service</h1>
        
        <div style={{ lineHeight: '1.8', fontSize: '1.05rem', display: 'flex', flexDirection: 'column', gap: '24px' }}>
          <section>
            <h2 style={{ fontSize: '1.5rem', fontWeight: '700', marginBottom: '16px' }}>1. Agreement to Terms</h2>
            <p>These Terms of Service constitute a legally binding agreement made between you, whether personally or on behalf of an entity ("you") and Hindustan Marketing Media ("we," "us" or "our"), concerning your access to and use of our website as well as any other media form, media channel, mobile website or mobile application related, linked, or otherwise connected thereto (collectively, the "Site").</p>
          </section>

          <section>
            <h2 style={{ fontSize: '1.5rem', fontWeight: '700', marginBottom: '16px' }}>2. Intellectual Property Rights</h2>
            <p>Unless otherwise indicated, the Site is our proprietary property and all source code, databases, functionality, software, website designs, audio, video, text, photographs, and graphics on the Site (collectively, the "Content") and the trademarks, service marks, and logos contained therein (the "Marks") are owned or controlled by us or licensed to us, and are protected by copyright and trademark laws.</p>
          </section>

          <section>
            <h2 style={{ fontSize: '1.5rem', fontWeight: '700', marginBottom: '16px' }}>3. User Representations</h2>
            <p>By using the Site, you represent and warrant that: (1) all registration information you submit will be true, accurate, current, and complete; (2) you will maintain the accuracy of such information and promptly update such registration information as necessary; (3) you have the legal capacity and you agree to comply with these Terms of Service.</p>
          </section>

          <section>
            <h2 style={{ fontSize: '1.5rem', fontWeight: '700', marginBottom: '16px' }}>4. Limitation of Liability</h2>
            <p>In no event will we or our directors, employees, or agents be liable to you or any third party for any direct, indirect, consequential, exemplary, incidental, special, or punitive damages, including lost profit, lost revenue, loss of data, or other damages arising from your use of the site, even if we have been advised of the possibility of such damages.</p>
          </section>
        </div>
      </div>
    </div>
  );
}
