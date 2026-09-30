import React, { useState, useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import { Search, MessageCircle, Sparkles } from 'lucide-react';
import heroImage from '../assets/hero.png';

export default function Hero({ onOpenAuditModal }) {
  const navigate = useNavigate();
  const [searchVal, setSearchVal] = useState('');
  const [titleWeight, setTitleWeight] = useState(800);

  useEffect(() => {
    let dir = 1, w = 800;
    const tick = setInterval(() => {
      w += dir * 3;
      if (w >= 900) dir = -1;
      if (w <= 700) dir = 1;
      setTitleWeight(w);
    }, 60);
    return () => clearInterval(tick);
  }, []);

  const ticker = 'ISO 9001:2015 CERTIFIED  ·  NEW DELHI  ·  NEW JERSEY  ·  SERVING 8 COUNTRIES WORLDWIDE  ·  ';

  return (
    <section style={{
      position: 'relative',
      minHeight: '100vh',
      display: 'flex',
      flexDirection: 'column',
      justifyContent: 'center',
      overflow: 'hidden',
      backgroundColor: 'var(--cream)',
      paddingTop: '72px',
      boxSizing: 'border-box'
    }}>

      {/* ── Background Wave Animations ── */}
      <style>
        {`
          @keyframes waveSlow {
            0% { transform: translateX(0) translateY(0) rotate(-15deg) scale(1); }
            50% { transform: translateX(-10%) translateY(5%) rotate(-18deg) scale(1.05); }
            100% { transform: translateX(0) translateY(0) rotate(-15deg) scale(1); }
          }
          @keyframes waveSlow2 {
            0% { transform: translateX(-5%) translateY(5%) rotate(-20deg) scale(1.05); }
            50% { transform: translateX(0) translateY(0) rotate(-16deg) scale(1); }
            100% { transform: translateX(-5%) translateY(5%) rotate(-20deg) scale(1.05); }
          }
        `}
      </style>
      <div style={{ position: 'absolute', inset: 0, pointerEvents: 'none', zIndex: 0, overflow: 'hidden' }}>
        <div style={{
          position: 'absolute', inset: 0,
          background: 'radial-gradient(ellipse 55% 60% at 80% 25%, rgba(252,196,74,0.12) 0%, transparent 70%)',
        }} />
        
        {/* Wave 1 - Orange/Yellow */}
        <div style={{
          position: 'absolute', top: '35%', left: '-20%', width: '150%', height: '350px',
          background: 'linear-gradient(180deg, rgba(255,255,255,0) 0%, rgba(212,162,70,0.15) 50%, rgba(255,255,255,0) 100%)',
          borderRadius: '50%', filter: 'blur(20px)',
          animation: 'waveSlow 18s infinite ease-in-out',
          boxShadow: '0 0 100px rgba(212,162,70,0.1) inset'
        }} />

        {/* Wave 2 - Yellow */}
        <div style={{
          position: 'absolute', top: '45%', left: '-10%', width: '150%', height: '250px',
          background: 'linear-gradient(180deg, rgba(255,255,255,0) 0%, rgba(252,196,74,0.12) 50%, rgba(255,255,255,0) 100%)',
          borderRadius: '50%', filter: 'blur(15px)',
          animation: 'waveSlow2 22s infinite ease-in-out'
        }} />
      </div>



      {/* ── Main content — 2 COLUMNS ── */}
      <div style={{
        flex: 1,
        display: 'flex',
        flexDirection: 'row',
        alignItems: 'center',
        justifyContent: 'space-between',
        position: 'relative',
        zIndex: 1,
        maxWidth: '1300px',
        width: '100%',
        margin: '0 auto',
        padding: 'clamp(40px,5vw,60px) 24px clamp(24px,3vw,36px)',
        gap: '40px',
        flexWrap: 'wrap'
      }}>
        
        {/* Left Column - Text Content */}
        <div style={{
          flex: '1 1 500px',
          display: 'flex',
          flexDirection: 'column',
          alignItems: 'flex-start',
          textAlign: 'left',
        }}>

        {/* Label line — small caps, orange dots */}
        <p style={{
          fontFamily: 'var(--font-sans)',
          fontWeight: '700',
          fontSize: 'clamp(0.62rem, 1vw, 0.75rem)',
          letterSpacing: '0.18em',
          textTransform: 'uppercase',
          color: 'var(--orange)',
          marginBottom: '12px',
          display: 'flex',
          alignItems: 'center',
          gap: '7px',
          flexWrap: 'wrap',
        }}>
          Hindustan Marketing Media
          <span style={{ color: 'rgba(57,55,56,0.3)' }}>–</span>
          AI
          <span style={{ color: 'rgba(57,55,56,0.3)' }}>·</span>
          Marketing
          <span style={{ color: 'rgba(57,55,56,0.3)' }}>·</span>
          Technology
          <span style={{ color: 'rgba(57,55,56,0.3)' }}>·</span>
          Design
        </p>

        {/* H1 — Line 1: "Every business focuses on noise" */}
        <h1 style={{
          fontFamily: 'var(--font-sans)',
          fontWeight: 900,
          fontSize: 'clamp(1.9rem, 4vw, 3.8rem)',
          lineHeight: 1.08,
          letterSpacing: '-0.03em',
          color: 'var(--dark)',
          margin: '0',
        }}>
          Every business focuses on{' '}
          <span style={{ color: 'rgba(57,55,56,0.5)' }}>noise</span>
        </h1>

        {/* H1 — Line 2: italic serif + orange "vision." */}
        <p style={{
          fontFamily: 'var(--font-serif)',
          fontStyle: 'italic',
          fontWeight: 500,
          fontSize: 'clamp(1.7rem, 3.5vw, 3.4rem)',
          lineHeight: 1.1,
          letterSpacing: '-0.02em',
          color: 'var(--dark)',
          margin: '4px 0 clamp(40px, 8vw, 80px) 0',
        }}>
          till they find the{' '}
          <span style={{ color: 'var(--orange)' }}>vision.</span>
        </p>

        {/* ── Search bar ── */}
        <div style={{
          position: 'relative',
          width: '100%',
          maxWidth: '520px',
          marginBottom: 'clamp(36px,5vw,48px)',
        }}>
          <Search size={18} style={{
            position: 'absolute', left: '20px', top: '50%',
            transform: 'translateY(-50%)', color: 'var(--dark)', pointerEvents: 'none',
            opacity: 0.6
          }} />
          <input
            type="text"
            value={searchVal}
            onChange={e => setSearchVal(e.target.value)}
            onKeyDown={e => {
              if (e.key === 'Enter' && searchVal.trim()) {
                navigate(`/services?search=${encodeURIComponent(searchVal.trim())}`);
              }
            }}
            placeholder="Search services... e.g. AI, SEO, branding"
            style={{
              width: '100%',
              padding: '20px 24px 20px 56px',
              borderRadius: '9999px',
              border: '1px solid rgba(57,55,56,0.1)',
              backgroundColor: 'var(--white)',
              fontFamily: 'var(--font-sans)',
              fontSize: '1rem',
              color: 'var(--dark)',
              outline: 'none',
              transition: 'border-color 0.2s, box-shadow 0.2s',
            }}
            onFocus={e => {
              e.target.style.borderColor = 'var(--orange)';
              e.target.style.boxShadow = '0 0 0 3px rgba(212,162,70,0.15)';
            }}
            onBlur={e => {
              e.target.style.borderColor = 'rgba(57,55,56,0.1)';
              e.target.style.boxShadow = 'none';
            }}
          />
        </div>

        {/* ── CTAs ── */}
        <div style={{ display: 'flex', alignItems: 'center', gap: '16px', flexWrap: 'wrap' }}>
          <button
            onClick={() => navigate('/contact')}
            style={{
              display: 'flex', alignItems: 'center', gap: '8px',
              padding: '12px 28px', borderRadius: '9999px',
              backgroundColor: 'var(--orange)', color: 'var(--dark)',
              border: 'none', fontWeight: '800', fontSize: '0.95rem',
              cursor: 'pointer', transition: 'all 0.2s ease',
              fontFamily: 'var(--font-sans)',
            }}
            onMouseEnter={e => {
              e.currentTarget.style.transform = 'translateY(-2px)';
            }}
            onMouseLeave={e => {
              e.currentTarget.style.transform = 'none';
            }}
          >
            <MessageCircle size={18} />
            Connect Now
          </button>

          <button
            onClick={() => navigate('/services/ai-automation')}
            style={{
              display: 'flex', alignItems: 'center', justifyContent: 'center',
              padding: '11px 28px', borderRadius: '9999px',
              backgroundColor: 'transparent', color: 'var(--dark)',
              border: '1px solid rgba(57,55,56,0.2)', fontWeight: '600', fontSize: '0.85rem',
              cursor: 'pointer', letterSpacing: '0.15em', textTransform: 'uppercase',
              transition: 'all 0.2s',
              fontFamily: 'var(--font-sans)',
            }}
            onMouseEnter={e => {
              e.currentTarget.style.borderColor = 'var(--dark)';
              e.currentTarget.style.backgroundColor = 'rgba(57,55,56,0.05)';
            }}
            onMouseLeave={e => {
              e.currentTarget.style.borderColor = 'rgba(57,55,56,0.2)';
              e.currentTarget.style.backgroundColor = 'transparent';
            }}
          >
            EXPLORE AI MAGIC
          </button>
        </div>

        </div>

        {/* Right Column - Hero Image */}
        <div style={{
          flex: '1.4 1 500px',
          display: 'flex',
          justifyContent: 'flex-end',
          alignItems: 'center'
        }}>
          <img 
            src={heroImage} 
            alt="Hero Illustration" 
            style={{ 
              width: '120%', 
              maxWidth: '850px',
              height: 'auto',
              objectFit: 'contain',
              transform: 'translateX(5%)',
              filter: 'drop-shadow(0 20px 40px rgba(212,162,70,0.15))'
            }} 
          />
        </div>

      </div>



    </section>
  );
}
