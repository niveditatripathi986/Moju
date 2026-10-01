import React from 'react';

const PillarCard = ({ num, title, desc, flex }) => (
  <div style={{
    background: 'var(--white)',
    border: '1px solid rgba(57,55,56,0.08)',
    borderRadius: '16px',
    padding: '16px 20px',
    display: 'flex',
    flexDirection: 'column',
    flex: flex || 'none',
    height: '100%',
    position: 'relative',
    overflow: 'hidden',
    transition: 'border-color 0.3s ease',
  }}
  onMouseEnter={(e) => e.currentTarget.style.borderColor = 'rgba(57,55,56,0.2)'}
  onMouseLeave={(e) => e.currentTarget.style.borderColor = 'rgba(57,55,56,0.08)'}
  >
    <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', marginBottom: '16px', position: 'relative', zIndex: 2 }}>
      <span style={{ color: 'rgba(57,55,56,0.4)', fontSize: '0.8rem', fontWeight: 600, fontFamily: 'var(--font-mono)' }}>{num}</span>
      <button style={{ 
        background: 'transparent', border: '1px solid rgba(57,55,56,0.15)', borderRadius: '999px',
        padding: '6px 14px', color: 'var(--orange)', fontSize: '0.65rem', fontWeight: 700, letterSpacing: '0.15em',
        cursor: 'pointer', transition: 'background 0.2s', fontFamily: 'var(--font-sans)'
      }}
      onMouseEnter={(e) => e.currentTarget.style.background = 'rgba(57,55,56,0.05)'}
      onMouseLeave={(e) => e.currentTarget.style.background = 'transparent'}
      >
        EXPLORE &rarr;
      </button>
    </div>
    <div style={{ position: 'relative', zIndex: 2, marginTop: 'auto' }}>
      <h3 style={{ fontSize: '1.5rem', fontWeight: 800, color: 'var(--dark)', marginBottom: '8px', fontFamily: 'var(--font-sans)', letterSpacing: '-0.02em' }}>{title}</h3>
      <p style={{ fontSize: '0.95rem', color: 'rgba(57,55,56,0.7)', lineHeight: 1.5, margin: 0 }}>{desc}</p>
    </div>
  </div>
);

export default function WhatWeDo() {
  return (
    <section style={{ backgroundColor: 'var(--cream)', padding: '120px 0', color: 'var(--dark)' }}>
      <div className="container" style={{ maxWidth: '1000px', margin: '0 auto' }}>
        
        {/* Header */}
        <div style={{ marginBottom: '64px' }}>
          <p style={{ 
            fontWeight: '700', fontSize: '0.75rem', letterSpacing: '0.2em', textTransform: 'uppercase', 
            color: 'var(--orange)', marginBottom: '16px', display: 'flex', alignItems: 'center', gap: '12px'
          }}>
            What We Do
          </p>
          <h2 style={{ 
            fontFamily: 'var(--font-sans)', fontWeight: '800', fontSize: 'clamp(2rem, 4vw, 3.2rem)', 
            letterSpacing: '-0.03em', color: 'var(--dark)', lineHeight: 1.1, margin: 0
          }}>
            Four pillars. <span style={{ fontFamily: 'var(--font-serif)', fontStyle: 'italic', fontWeight: 500, color: 'var(--orange)' }}>One methodology.</span>
          </h2>
        </div>

        {/* Grid Layout */}
        <div style={{ 
          display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(360px, 1fr))', gap: '24px'
        }}>
          
          {/* Left Column - AI Image Card */}
          <div style={{ 
            borderRadius: '16px', overflow: 'hidden', position: 'relative', display: 'flex', flexDirection: 'column', 
            padding: '20px', minHeight: '400px', border: '1px solid rgba(57,55,56,0.08)'
          }}>
            <img 
              src="https://images.unsplash.com/photo-1485827404703-89b55fcc595e?auto=format&fit=crop&w=1000&q=80" 
              alt="AI Robot" 
              style={{ position: 'absolute', inset: 0, width: '100%', height: '100%', objectFit: 'cover', zIndex: 0 }}
            />
            {/* Light gradient overlay for text readability */}
            <div style={{ position: 'absolute', inset: 0, background: 'linear-gradient(to bottom, rgba(252,249,242,0.3) 0%, var(--cream) 95%)', zIndex: 1 }} />
            
            {/* Top Bar */}
            <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', position: 'relative', zIndex: 2 }}>
              <span style={{ color: 'rgba(57,55,56,0.6)', fontSize: '0.8rem', fontWeight: 600, fontFamily: 'var(--font-mono)' }}>01</span>
              <button style={{ 
                background: 'rgba(255,255,255,0.4)', border: '1px solid rgba(57,55,56,0.15)', borderRadius: '999px',
                padding: '6px 14px', color: 'var(--orange)', fontSize: '0.65rem', fontWeight: 700, letterSpacing: '0.15em',
                cursor: 'pointer', transition: 'background 0.2s', fontFamily: 'var(--font-sans)', backdropFilter: 'blur(4px)'
              }}>
                EXPLORE &rarr;
              </button>
            </div>

            {/* Bottom Content */}
            <div style={{ position: 'relative', zIndex: 2, marginTop: 'auto' }}>
              <h3 style={{ fontSize: '2.2rem', fontWeight: 800, color: 'var(--dark)', marginBottom: '12px', fontFamily: 'var(--font-sans)', letterSpacing: '-0.02em' }}>
                AI & Automation
              </h3>
              <p style={{ fontSize: '1.05rem', color: 'rgba(57,55,56,0.8)', lineHeight: 1.6, margin: 0 }}>
                We help businesses integrate AI into their operations — from chatbots and workflow automation to AI-optimized content and GEO strategy. Not theory. Deployed systems that reduce cost and increase reach.
              </p>
            </div>
          </div>

          {/* Right Column - 3 Text Cards */}
          <div style={{ display: 'flex', flexDirection: 'column', gap: '16px' }}>
            
            {/* Top Card (02) */}
            <div style={{ flex: 1 }}>
              <PillarCard 
                num="02" 
                title="Digital Marketing" 
                desc="Search, social, and paid campaigns grounded in data, not guesswork. Full-funnel strategy from keyword research to conversion optimization." 
              />
            </div>
            
            {/* Bottom Row (03 & 04) */}
            <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(200px, 1fr))', gap: '16px', flex: 1 }}>
              <PillarCard 
                num="03" 
                title="Technology" 
                desc="Web applications, cloud architecture, and platform builds designed for scale." 
              />
              <PillarCard 
                num="04" 
                title="Design" 
                desc="Brand identity, UI/UX, and visual systems that communicate credibility." 
              />
            </div>

          </div>

        </div>

      </div>
    </section>
  );
}
