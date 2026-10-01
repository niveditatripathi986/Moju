import React from 'react';
import { useNavigate } from 'react-router-dom';

export default function ReadyToTalk() {
  const navigate = useNavigate();

  return (
    <section style={{ 
      position: 'relative',
      padding: '80px 24px', 
      display: 'flex',
      alignItems: 'center',
      justifyContent: 'center',
      minHeight: '450px',
      overflow: 'hidden'
    }}>
      
      {/* Background Image with Overlay */}
      <div style={{
        position: 'absolute',
        top: 0, left: 0, width: '100%', height: '100%',
        backgroundImage: 'url("https://images.unsplash.com/photo-1496442226666-8d4d0e62e6e9?auto=format&fit=crop&w=2000&q=80")',
        backgroundSize: 'cover',
        backgroundPosition: 'center',
        zIndex: 0
      }}>
        {/* Optional dark overlay to ensure text readability if needed */}
        <div style={{ position: 'absolute', inset: 0, background: 'rgba(0,0,0,0.2)' }} />
      </div>

      {/* Glassmorphism Card */}
      <div style={{
        position: 'relative',
        zIndex: 1,
        background: 'rgba(255, 255, 255, 0.1)',
        backdropFilter: 'blur(20px)',
        WebkitBackdropFilter: 'blur(20px)',
        border: '1px solid rgba(255, 255, 255, 0.2)',
        borderRadius: '24px',
        padding: '48px 32px',
        maxWidth: '700px',
        width: '100%',
        textAlign: 'center',
        boxShadow: '0 24px 64px rgba(0,0,0,0.3)'
      }}>
        
        <h2 style={{ 
          fontFamily: 'var(--font-sans)', 
          fontWeight: '800', 
          fontSize: 'clamp(2rem, 4vw, 3rem)', 
          color: 'var(--white)', 
          lineHeight: 1.1, 
          marginBottom: '24px'
        }}>
          Ready to Talk?
        </h2>
        
        <p style={{ 
          fontSize: '1.05rem', 
          color: 'rgba(255,255,255,0.9)', 
          lineHeight: 1.6, 
          margin: '0 auto 40px auto',
          maxWidth: '560px'
        }}>
          No pitch decks. No 12-slide proposals. A direct conversation about your business, your goals, and whether we are the right fit.
        </p>

        <button style={{ 
          background: 'var(--orange)', 
          border: 'none',
          borderRadius: '8px',
          padding: '16px 40px', 
          color: 'var(--white)', 
          fontSize: '0.95rem', 
          fontWeight: 700,
          cursor: 'pointer', 
          transition: 'background 0.2s, transform 0.2s', 
          fontFamily: 'var(--font-sans)',
          boxShadow: '0 4px 14px rgba(212, 162, 70, 0.3)'
        }}
        onMouseEnter={(e) => {
          e.currentTarget.style.background = '#b87e22';
          e.currentTarget.style.transform = 'translateY(-2px)';
        }}
        onMouseLeave={(e) => {
          e.currentTarget.style.background = 'var(--orange)';
          e.currentTarget.style.transform = 'none';
        }}
        onClick={() => navigate('/contact')}
        >
          Explore More
        </button>

      </div>
    </section>
  );
}
