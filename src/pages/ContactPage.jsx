import React, { useEffect, useState } from 'react';
import { Mail, MapPin, Phone, ExternalLink } from 'lucide-react';

export default function ContactPage() {
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [phone, setPhone] = useState('');
  const [company, setCompany] = useState('');
  const [services, setServices] = useState([]);
  const [message, setMessage] = useState('');

  const toggleService = (srv) => {
    setServices(prev => prev.includes(srv) ? prev.filter(s => s !== srv) : [...prev, srv]);
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    if (!name || !email || !message) {
      alert("Please fill in the required fields (*).");
      return;
    }
    const text = `Hi Hindustan Marketing Media,\n\n*New Contact Form Submission:*\n\n*Name*: ${name}\n*Email*: ${email}\n*Phone*: ${phone || 'N/A'}\n*Company*: ${company || 'N/A'}\n*Services*: ${services.length > 0 ? services.join(', ') : 'N/A'}\n\n*Message*: ${message}`;
    const url = 'https://wa.me/917459893697?text=' + encodeURIComponent(text);
    window.open(url, '_blank');
    
    // Clear form
    setName('');
    setEmail('');
    setPhone('');
    setCompany('');
    setServices([]);
    setMessage('');
  };

  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  return (
    <main style={{ backgroundColor: 'var(--white)', minHeight: '100vh', paddingTop: '120px', paddingBottom: '120px', fontFamily: 'var(--font-sans)', color: 'var(--dark)' }}>
      <div className="container" style={{ maxWidth: '1000px', margin: '0 auto', padding: '0 24px' }}>
        
        {/* Header */}
        <div style={{ marginBottom: '64px' }}>
          <h1 style={{ fontSize: 'clamp(2.5rem, 5vw, 4rem)', fontWeight: 900, lineHeight: 1.1, marginBottom: '24px', letterSpacing: '-0.02em', color: 'var(--dark)' }}>
            Every Great Product Starts With{' '}
            <span style={{ fontFamily: 'var(--font-serif)', fontStyle: 'italic', fontWeight: 700, color: 'var(--orange)' }}>a Conversation</span>
          </h1>
          <p style={{ fontSize: '1.1rem', color: 'rgba(57,55,56,0.7)', maxWidth: '600px', margin: 0, lineHeight: 1.6 }}>
            Tell us what you're building, where you're stuck, or what you're trying to reach.
          </p>
        </div>

        {/* Form Section */}
        <h2 style={{ fontSize: '1.8rem', fontWeight: 800, marginBottom: '24px' }}>Get in Touch</h2>
        <div style={{ backgroundColor: 'var(--cream)', borderRadius: '24px', padding: '40px', marginBottom: '48px', color: 'var(--dark)' }}>
          <form onSubmit={handleSubmit} style={{ display: 'flex', flexDirection: 'column', gap: '24px' }}>
            
            <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: '24px' }}>
              <div>
                <label style={{ display: 'block', fontSize: '0.85rem', fontWeight: 700, marginBottom: '8px' }}>Name *</label>
                <input type="text" value={name} onChange={e => setName(e.target.value)} placeholder="Your name" style={{ width: '100%', padding: '12px 16px', borderRadius: '8px', border: '1px solid rgba(57,55,56,0.2)', outline: 'none', fontFamily: 'inherit' }} required />
              </div>
              <div>
                <label style={{ display: 'block', fontSize: '0.85rem', fontWeight: 700, marginBottom: '8px' }}>Email *</label>
                <input type="email" value={email} onChange={e => setEmail(e.target.value)} placeholder="you@company.com" style={{ width: '100%', padding: '12px 16px', borderRadius: '8px', border: '1px solid rgba(57,55,56,0.2)', outline: 'none', fontFamily: 'inherit' }} required />
              </div>
            </div>

            <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: '24px' }}>
              <div>
                <label style={{ display: 'block', fontSize: '0.85rem', fontWeight: 700, marginBottom: '8px' }}>Phone Number</label>
                <input type="tel" value={phone} onChange={e => setPhone(e.target.value)} placeholder="+1 (555) 000-0000" style={{ width: '100%', padding: '12px 16px', borderRadius: '8px', border: '1px solid rgba(57,55,56,0.2)', outline: 'none', fontFamily: 'inherit' }} />
              </div>
              <div>
                <label style={{ display: 'block', fontSize: '0.85rem', fontWeight: 700, marginBottom: '8px' }}>Organization/Company</label>
                <input type="text" value={company} onChange={e => setCompany(e.target.value)} placeholder="Your company" style={{ width: '100%', padding: '12px 16px', borderRadius: '8px', border: '1px solid rgba(57,55,56,0.2)', outline: 'none', fontFamily: 'inherit' }} />
              </div>
            </div>

            <div>
              <label style={{ display: 'block', fontSize: '0.85rem', fontWeight: 700, marginBottom: '12px' }}>Services Interested In (select all that apply)</label>
              <div style={{ display: 'flex', flexDirection: 'column', gap: '8px' }}>
                {['AI & Automation', 'Digital Marketing', 'Mobile App', 'Design', 'Other'].map(srv => (
                  <label key={srv} style={{ display: 'flex', alignItems: 'center', gap: '12px', backgroundColor: 'var(--white)', padding: '12px 16px', borderRadius: '8px', border: '1px solid rgba(57,55,56,0.1)', cursor: 'pointer' }}>
                    <input type="checkbox" checked={services.includes(srv)} onChange={() => toggleService(srv)} style={{ width: '18px', height: '18px', accentColor: 'var(--orange)' }} />
                    <span style={{ fontSize: '0.9rem', fontWeight: 500 }}>{srv}</span>
                  </label>
                ))}
              </div>
            </div>

            <div>
              <label style={{ display: 'block', fontSize: '0.85rem', fontWeight: 700, marginBottom: '8px' }}>Message *</label>
              <textarea rows="5" value={message} onChange={e => setMessage(e.target.value)} placeholder="Tell us about your project, goals, and timeline. The more detail, the better." style={{ width: '100%', padding: '12px 16px', borderRadius: '8px', border: '1px solid rgba(57,55,56,0.2)', outline: 'none', fontFamily: 'inherit', resize: 'vertical', backgroundColor: 'var(--white)' }} required></textarea>
            </div>

            <button type="submit" style={{ 
              backgroundColor: 'var(--orange)', color: 'var(--white)', border: 'none', padding: '16px 32px', 
              borderRadius: '8px', fontSize: '1rem', fontWeight: 700, cursor: 'pointer',
              alignSelf: 'flex-start', fontFamily: 'var(--font-sans)', marginTop: '8px'
            }}>
              Send Message
            </button>
          </form>
        </div>


        {/* Find Us Online */}
        <h2 style={{ fontSize: '1.8rem', fontWeight: 800, marginBottom: '24px', color: 'var(--dark)' }}>Find Us Online</h2>
        <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(280px, 1fr))', gap: '16px', marginBottom: '80px' }}>
          {[
            { n: 'Instagram', u: '@hindustanmarketingmedia', i: ExternalLink },
            { n: 'Facebook', u: 'hindustanmarketingmedia', i: ExternalLink },
            { n: 'LinkedIn', u: 'Hindustan Marketing Media', i: ExternalLink },
            { n: 'Clutch', u: 'Reviews & Ratings', i: ExternalLink },
            { n: 'GoodFirms', u: 'Reviews & Ratings', i: ExternalLink }
          ].map((soc, i) => {
            const Icon = soc.i;
            return (
              <a key={i} href="#" style={{ 
                display: 'flex', alignItems: 'center', gap: '16px', backgroundColor: 'var(--cream)', 
                border: '1px solid rgba(57,55,56,0.1)', borderRadius: '12px', padding: '16px', 
                textDecoration: 'none', color: 'var(--dark)'
              }}>
                <div style={{ width: '40px', height: '40px', borderRadius: '8px', backgroundColor: 'var(--white)', border: '1px solid rgba(57,55,56,0.1)', display: 'flex', alignItems: 'center', justifyContent: 'center' }}>
                  <Icon size={20} color="var(--dark)" />
                </div>
                <div>
                  <div style={{ fontWeight: 700, fontSize: '0.95rem' }}>{soc.n}</div>
                  <div style={{ color: 'rgba(57,55,56,0.6)', fontSize: '0.8rem' }}>{soc.u}</div>
                </div>
              </a>
            );
          })}
        </div>

        {/* What to Expect */}
        <h2 style={{ fontSize: '1.8rem', fontWeight: 800, marginBottom: '16px', color: 'var(--dark)' }}>What to Expect</h2>
        <p style={{ fontSize: '1rem', color: 'rgba(57,55,56,0.7)', lineHeight: 1.7, marginBottom: '40px' }}>
          We respond within 24 hours — usually faster. First conversations are 20 to 30 minutes, no commitment required. 
          We will talk about your business, your goals, and your timeline. If we are not the right fit, we will tell you.
        </p>
        
      </div>
    </main>
  );
}
