import React, { useState } from 'react';
import { Plus, Minus } from 'lucide-react';

const faqs = [
  { q: 'What is Hindustan Marketing Media?', a: 'We are a premier growth consulting firm specializing in helping businesses scale rapidly through data-driven digital marketing, advanced SEO, and cutting-edge technology integrations.' },
  { q: 'What services does Hindustan Marketing Media offer?', a: 'Our services include performance marketing, SEO (including Generative Engine Optimization), UI/UX design, custom web and app development, brand strategy, and comprehensive digital transformation consulting.' },
  { q: 'Where is Hindustan Marketing Media located?', a: 'We are globally distributed with our main headquarters located in the heart of the tech district, serving enterprise and startup clients worldwide.' },
  { q: 'What types of businesses does Hindustan Marketing Media work with?', a: 'We partner with ambitious startups, venture-backed companies, and established enterprises across various sectors including Healthcare, SaaS, Real Estate, FinTech, and Retail.' },
  { q: 'How long does it take to see results from Hindustan Marketing Media?', a: 'While organic strategies like SEO can take 60-90 days to compound, our performance marketing and conversion rate optimization campaigns typically start showing measurable ROI within the first few weeks.' },
];

export default function Faq() {
  const [open, setOpen] = useState(null);

  return (
    <section id="faq" style={{ padding: '100px 0', background: 'var(--white)', position: 'relative', overflow: 'hidden' }}>
      
      {/* Subtle Glow */}
      <div style={{
        position: 'absolute', top: '50px', left: '10%', width: '300px', height: '300px',
        background: 'radial-gradient(circle at 50% 50%, rgba(212,162,70,0.1) 0%, transparent 70%)',
        pointerEvents: 'none', zIndex: 0
      }} />

      <div className="container" style={{ position: 'relative', zIndex: 1, maxWidth: '750px', margin: '0 auto' }}>
        
        {/* Header */}
        <div style={{ marginBottom: '64px' }}>
          <p style={{ fontWeight: '700', fontSize: '0.75rem', letterSpacing: '0.2em', textTransform: 'uppercase', color: 'var(--orange)', marginBottom: '16px' }}>
            FAQ
          </p>
          <h2 style={{ fontFamily: 'var(--font-sans)', fontWeight: '800', fontSize: 'clamp(2rem, 4vw, 3rem)', letterSpacing: '-0.02em', color: 'var(--dark)', lineHeight: 1.1, marginBottom: '16px' }}>
            Frequently Asked <span style={{ fontFamily: 'var(--font-serif)', fontStyle: 'italic', fontWeight: 500, color: 'var(--orange)' }}>Questions</span>
          </h2>
          <p style={{ fontSize: '1.05rem', color: 'rgba(57,55,56,0.7)', lineHeight: 1.6, margin: 0 }}>
            Quick answers to the questions we hear most often.
          </p>
        </div>

        {/* Accordion Box */}
        <div style={{ 
          background: 'transparent', 
          border: '1px solid rgba(57,55,56,0.1)', 
          borderRadius: '16px', 
          overflow: 'hidden' 
        }}>
          {faqs.map((faq, i) => {
            const isOpen = open === i;
            const isLast = i === faqs.length - 1;
            
            return (
              <div key={i} style={{ 
                borderBottom: isLast ? 'none' : '1px solid rgba(57,55,56,0.1)',
                background: isOpen ? 'var(--cream)' : 'transparent',
                transition: 'background 0.3s'
              }}>
                <button 
                  onClick={() => setOpen(isOpen ? null : i)} 
                  style={{ 
                    width: '100%', display: 'flex', alignItems: 'center', justifyContent: 'space-between', 
                    padding: '18px 24px', background: 'none', border: 'none', textAlign: 'left', cursor: 'pointer', 
                    fontFamily: 'var(--font-sans)', fontWeight: '700', fontSize: '0.95rem', color: 'var(--dark)' 
                  }}
                >
                  <span>{faq.q}</span>
                  <div style={{ color: isOpen ? 'var(--orange)' : 'var(--dark)', display: 'flex', alignItems: 'center', justifyContent: 'center' }}>
                    {isOpen ? <Minus size={18} strokeWidth={2.5} /> : <Plus size={18} strokeWidth={2.5} />}
                  </div>
                </button>
                {isOpen && (
                  <div style={{ padding: '0 24px 18px 24px' }}>
                    <p style={{ fontSize: '0.9rem', color: 'rgba(57,55,56,0.8)', lineHeight: 1.6, margin: 0 }}>
                      {faq.a}
                    </p>
                  </div>
                )}
              </div>
            );
          })}
        </div>

      </div>
    </section>
  );
}
