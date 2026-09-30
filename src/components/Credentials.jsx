import React from 'react';
import { Award, ShieldCheck, Star } from 'lucide-react';
import MoltenMetal from './MoltenMetal';

const CredentialCard = ({ icon: Icon, title, desc, linkColor = '#a78bfa' }) => (
  <div style={{
    background: 'rgba(255, 255, 255, 0.5)',
    backdropFilter: 'blur(12px) saturate(150%)',
    WebkitBackdropFilter: 'blur(12px) saturate(150%)',
    border: '1px solid rgba(255, 255, 255, 0.8)',
    boxShadow: '0 8px 32px 0 rgba(0, 0, 0, 0.05)',
    borderRadius: '24px',
    padding: '28px 24px',
    display: 'flex',
    flexDirection: 'column',
    height: '100%',
    position: 'relative',
    transition: 'transform 0.3s ease, border-color 0.3s ease, box-shadow 0.3s ease',
    cursor: 'default',
  }}
  onMouseEnter={(e) => {
    e.currentTarget.style.transform = 'translateY(-5px)';
    e.currentTarget.style.borderColor = 'rgba(255, 255, 255, 1)';
    e.currentTarget.style.boxShadow = '0 12px 40px 0 rgba(0, 0, 0, 0.1)';
  }}
  onMouseLeave={(e) => {
    e.currentTarget.style.transform = 'none';
    e.currentTarget.style.borderColor = 'rgba(255, 255, 255, 0.8)';
    e.currentTarget.style.boxShadow = '0 8px 32px 0 rgba(0, 0, 0, 0.05)';
  }}
  >
    {/* Badge Icon Placeholder */}
    <div style={{ 
      display: 'flex', justifyContent: 'center', alignItems: 'center', 
      marginBottom: '32px', height: '80px' 
    }}>
      <div style={{
        width: '64px', height: '64px', borderRadius: '50%',
        background: 'rgba(57,55,56,0.03)', border: '1px solid rgba(57,55,56,0.08)',
        display: 'flex', justifyContent: 'center', alignItems: 'center',
        boxShadow: '0 0 30px rgba(167,139,250,0.1) inset'
      }}>
        <Icon size={32} color="var(--dark)" strokeWidth={1.5} />
      </div>
    </div>

    {/* Text Content */}
    <div style={{ flex: 1, display: 'flex', flexDirection: 'column' }}>
      <h3 style={{ 
        fontSize: '1.2rem', fontWeight: 800, color: 'var(--dark)', 
        marginBottom: '12px', fontFamily: 'var(--font-sans)', letterSpacing: '-0.02em',
        lineHeight: 1.3
      }}>
        {title}
      </h3>
      <p style={{ 
        fontSize: '0.85rem', color: 'rgba(57,55,56,0.7)', 
        lineHeight: 1.6, margin: '0 0 24px 0' 
      }}>
        {desc}
      </p>
      
      {/* Footer Link */}
      <div style={{ marginTop: 'auto' }}>
        <a href="#profile" style={{
          fontSize: '0.75rem', fontWeight: 700, letterSpacing: '0.2em',
          textTransform: 'uppercase', color: linkColor, textDecoration: 'none',
          display: 'flex', alignItems: 'center', gap: '8px',
          fontFamily: 'var(--font-mono)'
        }}
        onMouseEnter={(e) => e.currentTarget.style.opacity = 0.8}
        onMouseLeave={(e) => e.currentTarget.style.opacity = 1}
        >
          VIEW PROFILE &rarr;
        </a>
      </div>
    </div>
  </div>
);

export default function Credentials() {
  return (
    <section style={{ 
      backgroundColor: 'var(--cream)', 
      padding: '120px 0', 
      color: 'var(--dark)',
      position: 'relative',
      overflow: 'hidden'
    }}>
      
      <MoltenMetal
        color1="#d4a246"
        color2="#ca8a04"
        color3="#a16207"
        backgroundColor="#fcf9f2"
        speed={0.25}
        scale={4}
        glow={1.4}
        opacity={0.4}
        mouseInteraction={true}
        lightMode={true}
      />

      <div className="container" style={{ position: 'relative', zIndex: 1, maxWidth: '1200px', margin: '0 auto' }}>
        
        {/* Header */}
        <div style={{ marginBottom: '64px', textAlign: 'left' }}>
          <p style={{ 
            fontFamily: 'var(--font-sans)', fontWeight: '700', fontSize: '0.75rem', 
            letterSpacing: '0.2em', textTransform: 'uppercase', color: 'var(--orange)', 
            marginBottom: '16px' 
          }}>
            CREDENTIALS
          </p>
          <h2 style={{ 
            fontFamily: 'var(--font-sans)', fontWeight: '800', fontSize: 'clamp(2.5rem, 5vw, 3.5rem)', 
            letterSpacing: '-0.02em', color: 'var(--dark)', lineHeight: 1.1, margin: 0
          }}>
            Milestones of <span style={{ fontFamily: 'var(--font-serif)', fontStyle: 'italic', fontWeight: 500, color: 'var(--orange)' }}>Excellence</span>
          </h2>
        </div>

        {/* 3 Column Grid */}
        <div style={{ 
          display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(280px, 1fr))', gap: '24px',
          maxWidth: '1050px', margin: '0 auto'
        }}>
          
          <CredentialCard 
            icon={Star}
            title="Top Tech Development Company"
            desc="Independent, verified client reviews on Clutch — the B2B rating platform trusted for vetted feedback."
          />
          
          <CredentialCard 
            icon={ShieldCheck}
            title="ISO Quality Management Certified"
            desc="Certificate No. UCSPL8024I00373. Our quality management system is externally audited, not self-declared."
          />

          <CredentialCard 
            icon={Award}
            title="Top Digital Marketing Company"
            desc="Verified reviews and research-backed rankings on GoodFirms, an independent software and services marketplace."
          />

        </div>

      </div>
    </section>
  );
}
