import React, { useEffect } from 'react';
import { useParams, Navigate } from 'react-router-dom';
import { CheckCircle2, ArrowRight } from 'lucide-react';
import { servicesData } from '../data/servicesData';

export default function Services() {
  const { id } = useParams();

  // Scroll to top automatically when ID changes
  useEffect(() => {
    window.scrollTo(0, 0);
  }, [id]);

  // If no ID is provided, or the ID is invalid, redirect to the first service
  if (!id) {
    return <Navigate to={`/services/${servicesData[0].id}`} replace />;
  }

  const section = servicesData.find(s => s.id === id);
  
  if (!section) {
    return <Navigate to={`/services/${servicesData[0].id}`} replace />;
  }

  return (
    <main style={{ backgroundColor: '#0a0a0a', minHeight: '100vh', paddingBottom: '120px', fontFamily: 'var(--font-sans)', color: 'var(--white)' }}>
      
      {/* Top Banner */}
      <div style={{ backgroundColor: 'var(--dark)', paddingTop: '160px', paddingBottom: '60px', textAlign: 'center' }}>
        <div style={{ display: 'inline-block', backgroundColor: 'var(--white)', color: 'var(--dark)', padding: '6px 16px', borderRadius: '99px', fontSize: '0.8rem', fontWeight: 800, textTransform: 'uppercase', letterSpacing: '0.1em', marginBottom: '24px' }}>
          Explore Our Capabilities
        </div>
      </div>

      <div className="container" style={{ maxWidth: '1000px', margin: '0 auto', padding: '0 24px' }}>
        <div style={{ paddingTop: '80px', paddingBottom: '40px' }}>
          
          {/* Section Header */}
          <h2 style={{ fontSize: 'clamp(2rem, 4vw, 3rem)', fontWeight: 900, lineHeight: 1.1, marginBottom: '40px', letterSpacing: '-0.02em' }}>
            {section.title} <br/>
            <span style={{ fontFamily: 'var(--font-serif)', fontStyle: 'italic', fontWeight: 700, color: '#a78bfa' }}>{section.subtitle}</span>
          </h2>

          {/* Cards Grid */}
          <div style={{ display: 'flex', flexDirection: 'column', gap: '24px' }}>
            {section.cards.map((card, cIdx) => {
              const Icon = card.icon;
              return (
                <div key={cIdx} style={{ 
                  backgroundColor: 'rgba(255,255,255,0.03)', border: '1px solid rgba(255,255,255,0.08)',
                  borderRadius: '16px', padding: '32px', display: 'flex', gap: '40px', flexWrap: 'wrap'
                }}>
                  
                  {/* Left Column */}
                  <div style={{ flex: '1 1 250px', display: 'flex', flexDirection: 'column', alignItems: 'flex-start' }}>
                    <div style={{ backgroundColor: 'rgba(252,196,74,0.1)', padding: '12px', borderRadius: '12px', marginBottom: '24px' }}>
                      <Icon size={24} color="var(--yellow)" />
                    </div>
                    <h3 style={{ fontSize: '1.4rem', fontWeight: 800, marginBottom: '8px', lineHeight: 1.3 }}>{card.title}</h3>
                    <p style={{ color: '#a78bfa', fontSize: '0.85rem', fontWeight: 700, textTransform: 'uppercase', letterSpacing: '0.05em' }}>
                      {card.tag}
                    </p>
                  </div>

                  {/* Right Column */}
                  <div style={{ flex: '2 1 400px', display: 'flex', flexDirection: 'column' }}>
                    <p style={{ color: 'rgba(255,255,255,0.7)', fontSize: '1rem', lineHeight: 1.6, marginBottom: '24px' }}>
                      {card.desc}
                    </p>
                    
                    <div style={{ backgroundColor: 'rgba(0,0,0,0.3)', borderRadius: '12px', padding: '24px', marginBottom: '24px' }}>
                      <h4 style={{ fontSize: '0.8rem', color: 'rgba(255,255,255,0.5)', textTransform: 'uppercase', letterSpacing: '0.1em', marginBottom: '16px', fontWeight: 700 }}>Key Capabilities</h4>
                      <ul style={{ listStyle: 'none', padding: 0, margin: 0, display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(180px, 1fr))', gap: '12px' }}>
                        {card.features.map((feat, fIdx) => (
                          <li key={fIdx} style={{ display: 'flex', alignItems: 'center', gap: '8px', fontSize: '0.9rem', color: 'rgba(255,255,255,0.9)' }}>
                            <CheckCircle2 size={16} color="var(--orange)" />
                            {feat}
                          </li>
                        ))}
                      </ul>
                    </div>

                    <button style={{
                      display: 'flex', alignItems: 'center', gap: '8px',
                      backgroundColor: 'var(--orange)', color: 'var(--white)',
                      border: 'none', padding: '12px 24px', borderRadius: '99px',
                      fontSize: '0.9rem', fontWeight: 700, cursor: 'pointer',
                      alignSelf: 'flex-start', fontFamily: 'var(--font-sans)'
                    }}>
                      {card.btnText} <ArrowRight size={16} />
                    </button>
                  </div>
                </div>
              );
            })}
          </div>

        </div>
      </div>
    </main>
  );
}
