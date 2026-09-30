import React from 'react';
import { 
  HeartPulse, Microscope, GraduationCap, Cloud, 
  Building, Plane
} from 'lucide-react';
import DotGrid from './DotGrid';

const industries = [
  { name: 'Healthcare & Life Sciences', icon: HeartPulse },
  { name: 'Diagnostics & Medical Labs', icon: Microscope },
  { name: 'EdTech & Learning Platforms', icon: GraduationCap },
  { name: 'SaaS & Technology', icon: Cloud },
  { name: 'Real Estate', icon: Building },
  { name: 'Hospitality & Travel', icon: Plane }
];

const IndustryCard = ({ name, icon: Icon }) => (
  <div style={{
    background: 'var(--cream)',
    border: '1px solid rgba(57,55,56,0.08)',
    borderRadius: '16px',
    padding: '14px 16px',
    display: 'flex',
    alignItems: 'center',
    gap: '16px',
    transition: 'transform 0.2s, background 0.2s, border-color 0.2s',
    cursor: 'default',
  }}
  onMouseEnter={(e) => {
    e.currentTarget.style.transform = 'translateY(-2px)';
    e.currentTarget.style.background = 'var(--white)';
    e.currentTarget.style.borderColor = 'rgba(57,55,56,0.15)';
  }}
  onMouseLeave={(e) => {
    e.currentTarget.style.transform = 'none';
    e.currentTarget.style.background = 'var(--cream)';
    e.currentTarget.style.borderColor = 'rgba(57,55,56,0.08)';
  }}
  >
    <div style={{
      width: '40px', height: '40px', minWidth: '40px',
      borderRadius: '10px', background: 'var(--white)',
      display: 'flex', justifyContent: 'center', alignItems: 'center',
      border: '1px solid rgba(57,55,56,0.05)'
    }}>
      <Icon size={18} color="var(--orange)" strokeWidth={2} />
    </div>
    <span style={{ 
      color: 'var(--dark)', fontSize: '0.8rem', fontWeight: 700, 
      fontFamily: 'var(--font-sans)', lineHeight: 1.3 
    }}>
      {name}
    </span>
  </div>
);

export default function Industries() {
  return (
    <section style={{ 
      backgroundColor: 'var(--white)', 
      padding: '120px 0', 
      color: 'var(--dark)',
      position: 'relative',
      overflow: 'hidden'
    }}>
      
      {/* Abstract Orange Glow */}
      <div style={{
        position: 'absolute', top: '10%', right: '-10%', width: '80%', height: '80%',
        background: 'radial-gradient(circle at 50% 50%, rgba(212,162,70,0.05) 0%, transparent 60%)',
        pointerEvents: 'none', zIndex: 0
      }} />

      {/* Interactive Dot Grid Background */}
      <DotGrid 
        baseColor="#e5e5e5" 
        activeColor="#d4a246" 
        dotSize={4} 
        gap={32} 
      />

      <div className="container" style={{ position: 'relative', zIndex: 1, maxWidth: '1200px', margin: '0 auto' }}>
        
        {/* Header */}
        <div style={{ marginBottom: '64px', textAlign: 'left' }}>
          <p style={{ 
            fontFamily: 'var(--font-sans)', fontWeight: '700', fontSize: '0.75rem', 
            letterSpacing: '0.2em', textTransform: 'uppercase', color: 'var(--orange)', 
            marginBottom: '16px' 
          }}>
            INDUSTRIES WE SERVE
          </p>
          <h2 style={{ 
            fontFamily: 'var(--font-sans)', fontWeight: '800', fontSize: 'clamp(2.5rem, 5vw, 4rem)', 
            letterSpacing: '-0.02em', color: 'var(--dark)', lineHeight: 1.1, margin: 0
          }}>
            Enterprise-grade thinking,<br />
            <span style={{ fontFamily: 'var(--font-serif)', fontStyle: 'italic', fontWeight: 500, color: 'var(--orange)' }}>across every sector.</span>
          </h2>
        </div>

        {/* 4 Column Grid */}
        <div style={{ 
          display: 'grid', gridTemplateColumns: 'repeat(auto-fill, minmax(260px, 1fr))', gap: '20px' 
        }}>
          {industries.map((ind, idx) => (
            <IndustryCard key={idx} name={ind.name} icon={ind.icon} />
          ))}
        </div>

      </div>
    </section>
  );
}
