import React from 'react';
import { Rocket, Satellite, Orbit } from 'lucide-react';
import Particles from './Particles';

export default function OurVision() {
  return (
    <section style={{
      backgroundColor: 'var(--white)',
      position: 'relative',
      padding: '140px 0',
      overflow: 'hidden',
      color: 'var(--dark)',
      textAlign: 'center',
      display: 'flex',
      flexDirection: 'column',
      alignItems: 'center'
    }}>
      
      {/* Background Particles Animation */}
      <Particles
        particleColors={['#d4a246', '#393738', '#cccccc']}
        particleCount={250}
        particleSpread={12}
        speed={0.08}
        particleBaseSize={150}
        moveParticlesOnHover={true}
        alphaParticles={true}
        disableRotation={false}
      />

      {/* Floating Space Icons (to simulate the subtle UFO/Satellite outlines) */}
      <Satellite size={48} strokeWidth={1} style={{ position: 'absolute', top: '15%', right: '10%', color: 'rgba(57,55,56,0.06)', transform: 'rotate(15deg)', zIndex: 0 }} />
      <Orbit size={64} strokeWidth={1} style={{ position: 'absolute', top: '25%', left: '15%', color: 'rgba(57,55,56,0.06)', transform: 'rotate(-20deg)', zIndex: 0 }} />
      <Rocket size={40} strokeWidth={1} style={{ position: 'absolute', bottom: '20%', left: '10%', color: 'rgba(57,55,56,0.06)', transform: 'rotate(45deg)', zIndex: 0 }} />
      <Satellite size={56} strokeWidth={1} style={{ position: 'absolute', bottom: '15%', right: '15%', color: 'rgba(57,55,56,0.06)', transform: 'rotate(-45deg)', zIndex: 0 }} />

      <div className="container" style={{ position: 'relative', zIndex: 2, display: 'flex', flexDirection: 'column', alignItems: 'center' }}>
        
        {/* Top Label */}
        <p style={{ 
          fontFamily: 'var(--font-sans)', fontWeight: '700', fontSize: '0.75rem', 
          letterSpacing: '0.25em', textTransform: 'uppercase', color: 'var(--orange)', 
          marginBottom: '24px' 
        }}>
          OUR VISION
        </p>

        {/* Headline */}
        <h2 style={{ 
          fontFamily: 'var(--font-sans)', fontWeight: '800', fontSize: 'clamp(1.8rem, 4vw, 3rem)', 
          letterSpacing: '-0.02em', color: 'var(--dark)', lineHeight: 1.1, margin: '0 auto 60px',
          maxWidth: '800px'
        }}>
          We help businesses find answers to their most <span style={{ fontFamily: 'var(--font-serif)', fontStyle: 'italic', fontWeight: 500, color: 'var(--orange)' }}>compelling questions.</span>
        </h2>

        {/* Sub-label */}
        <p style={{ 
          fontFamily: 'var(--font-sans)', fontWeight: '600', fontSize: '0.75rem', 
          letterSpacing: '0.4em', textTransform: 'uppercase', color: 'rgba(57,55,56,0.6)', 
          marginBottom: '0px' 
        }}>
          WE HELP YOU FIND YOUR
        </p>

        {/* Giant Gradient "VISION" Text */}
        <h1 style={{
          fontFamily: 'var(--font-sans)', fontWeight: '900', fontSize: 'clamp(5rem, 20vw, 14rem)', 
          letterSpacing: '-0.04em', lineHeight: 1, margin: 0,
          background: 'linear-gradient(180deg, #dcb9fb 0%, #f3a886 50%, #f6ce64 100%)',
          WebkitBackgroundClip: 'text',
          WebkitTextFillColor: 'transparent',
          backgroundClip: 'text',
          color: 'transparent',
        }}>
          VISION
        </h1>

      </div>
    </section>
  );
}
