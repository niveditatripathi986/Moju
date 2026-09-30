import React from 'react';
import robotImage from '../assets/robot.png';

export default function MarketSignal() {
  return (
    <section style={{ 
      backgroundColor: 'var(--cream)', 
      padding: '120px 0', 
      color: 'var(--dark)',
      position: 'relative',
      overflow: 'hidden'
    }}>
      
      {/* Subtle Tech Lines Background (Left) */}
      <div style={{
        position: 'absolute', top: 0, left: 0, width: '40%', height: '100%',
        backgroundImage: 'linear-gradient(rgba(57,55,56,0.05) 1px, transparent 1px), linear-gradient(90deg, rgba(57,55,56,0.05) 1px, transparent 1px)',
        backgroundSize: '100px 100px',
        opacity: 0.5, zIndex: 0,
        maskImage: 'radial-gradient(ellipse at left center, black, transparent 70%)',
        WebkitMaskImage: 'radial-gradient(ellipse at left center, black, transparent 70%)'
      }} />

      {/* Abstract Orange Glow (Left Bottom) */}
      <div style={{
        position: 'absolute', bottom: '-20%', left: '-10%', width: '60%', height: '80%',
        background: 'radial-gradient(circle at 50% 50%, rgba(212,162,70,0.08) 0%, transparent 60%)',
        pointerEvents: 'none', zIndex: 0
      }} />

      <div className="container" style={{ position: 'relative', zIndex: 1, maxWidth: '1200px', margin: '0 auto' }}>
        
        <div style={{ 
          display: 'flex', 
          flexDirection: 'row', 
          alignItems: 'center', 
          gap: '64px',
          flexWrap: 'wrap'
        }}>
          
          {/* Left Column - Robot Image */}
          <div style={{ flex: '1 1 400px', display: 'flex', justifyContent: 'center' }}>
            <div style={{ position: 'relative', width: '100%', maxWidth: '400px', aspectRatio: '1/1' }}>
              <img 
                src={robotImage} 
                alt="AI Robot" 
                style={{ 
                  width: '100%', height: '100%', objectFit: 'contain', 
                  filter: 'drop-shadow(0 20px 40px rgba(212, 162, 70, 0.2))'
                }}
              />
            </div>
          </div>

          {/* Right Column - Text Content */}
          <div style={{ flex: '1 1 500px', display: 'flex', flexDirection: 'column' }}>
            
            <p style={{ 
              fontFamily: 'var(--font-sans)', fontWeight: '700', fontSize: '0.75rem', 
              letterSpacing: '0.2em', textTransform: 'uppercase', color: 'var(--orange)', 
              marginBottom: '16px' 
            }}>
              MARKET SIGNAL
            </p>
            
            <h2 style={{ 
              fontFamily: 'var(--font-sans)', fontWeight: '800', fontSize: 'clamp(2.5rem, 5vw, 3.5rem)', 
              letterSpacing: '-0.02em', color: 'var(--dark)', lineHeight: 1.1, margin: '0 0 32px 0'
            }}>
              The AI Shift <span style={{ fontFamily: 'var(--font-serif)', fontStyle: 'italic', fontWeight: 500, color: 'var(--orange)' }}>Is Already Here</span>
            </h2>

            {/* Quote Box */}
            <div style={{ 
              borderLeft: '3px solid var(--orange)',
              paddingLeft: '24px',
              marginBottom: '32px'
            }}>
              <p style={{ 
                fontSize: '1.25rem', color: 'var(--dark)', fontStyle: 'italic', 
                lineHeight: 1.5, margin: '0 0 12px 0', fontWeight: 400 
              }}>
                "79% of consumers expect to use AI-powered search tools to find information within the next year."
              </p>
              <p style={{ 
                fontSize: '0.85rem', color: 'rgba(57,55,56,0.6)', margin: 0 
              }}>
                — Gartner, 2024
              </p>
            </div>

            <p style={{ 
              fontSize: '1.05rem', color: 'rgba(57,55,56,0.8)', 
              lineHeight: 1.6, margin: '0 0 40px 0' 
            }}>
              If your business is not optimized for AI discovery, you are already behind. Traditional SEO alone is no longer enough — Generative Engine Optimization is the next layer, and most businesses have not started.
            </p>

            <div>
              <button style={{ 
                background: 'var(--dark)', 
                border: 'none',
                borderRadius: '8px',
                padding: '16px 32px', 
                color: 'var(--white)', 
                fontSize: '0.95rem', 
                fontWeight: 700,
                cursor: 'pointer', 
                transition: 'background 0.2s', 
                fontFamily: 'var(--font-sans)',
                boxShadow: '0 4px 14px rgba(57, 55, 56, 0.2)'
              }}
              onMouseEnter={(e) => e.currentTarget.style.background = 'var(--orange)'}
              onMouseLeave={(e) => e.currentTarget.style.background = 'var(--dark)'}
              >
                Find Out Where You Stand
              </button>
            </div>

          </div>
        </div>
      </div>
    </section>
  );
}
