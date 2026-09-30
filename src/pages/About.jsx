import React from 'react';
import DotGrid from '../components/DotGrid';
import { Share2, Image as ImageIcon, Layers, Megaphone } from 'lucide-react';
import zunaidImg from '../assets/zunaid.jpeg';


const ServiceCard = ({ title, desc, icon: Icon }) => (
  <div style={{ 
    backgroundColor: 'var(--white)', border: '1px solid rgba(57,55,56,0.1)', 
    borderRadius: '24px', padding: '40px 32px', textAlign: 'left',
    transition: 'all 0.4s cubic-bezier(0.175, 0.885, 0.32, 1.275)',
    boxShadow: '0 10px 30px rgba(57,55,56,0.03)',
    position: 'relative',
    overflow: 'hidden',
    display: 'flex',
    flexDirection: 'column',
    height: '100%'
  }}
  onMouseEnter={(e) => {
    e.currentTarget.style.transform = 'translateY(-8px)';
    e.currentTarget.style.boxShadow = '0 20px 40px rgba(212,162,70,0.15)';
    e.currentTarget.style.borderColor = 'var(--orange)';
    e.currentTarget.querySelector('.icon-container').style.backgroundColor = 'var(--orange)';
    e.currentTarget.querySelector('.icon-container svg').style.color = 'var(--white)';
  }}
  onMouseLeave={(e) => {
    e.currentTarget.style.transform = 'translateY(0)';
    e.currentTarget.style.boxShadow = '0 10px 30px rgba(57,55,56,0.03)';
    e.currentTarget.style.borderColor = 'rgba(57,55,56,0.1)';
    e.currentTarget.querySelector('.icon-container').style.backgroundColor = 'var(--cream)';
    e.currentTarget.querySelector('.icon-container svg').style.color = 'var(--orange)';
  }}
  >
    {/* Abstract gradient blob in corner */}
    <div style={{
      position: 'absolute', top: '-20px', right: '-20px', width: '100px', height: '100px',
      background: 'radial-gradient(circle, rgba(212,162,70,0.1) 0%, rgba(212,162,70,0) 70%)',
      borderRadius: '50%', pointerEvents: 'none'
    }} />

    <div className="icon-container" style={{ 
      width: '64px', height: '64px', borderRadius: '16px', 
      backgroundColor: 'var(--cream)', display: 'flex', alignItems: 'center', justifyContent: 'center',
      marginBottom: '24px', transition: 'all 0.3s ease',
      border: '1px solid rgba(57,55,56,0.05)'
    }}>
      <Icon size={28} strokeWidth={1.5} style={{ color: 'var(--orange)', transition: 'color 0.3s ease' }} />
    </div>
    
    <h4 style={{ fontSize: '1.4rem', fontWeight: 800, color: 'var(--dark)', marginBottom: '16px', fontFamily: 'var(--font-sans)' }}>{title}</h4>
    <p style={{ fontSize: '1.05rem', color: 'rgba(57,55,56,0.65)', lineHeight: 1.6, margin: 0, flexGrow: 1 }}>{desc}</p>
  </div>
);

export default function About() {
  return (
    <main id="main" style={{ backgroundColor: 'var(--white)', color: 'var(--dark)', fontFamily: 'var(--font-sans)' }}>
      
      {/* 1. Hero Section */}
      <section style={{ 
        position: 'relative', padding: '120px 24px 100px 24px', 
        minHeight: '100vh', display: 'flex', alignItems: 'center', justifyContent: 'center',
        backgroundImage: 'linear-gradient(to bottom, rgba(30,30,30,0.85), #1a1a1a), url("https://images.unsplash.com/photo-1557838923-2985c318be48?auto=format&fit=crop&w=2000&q=80")',
        backgroundSize: 'cover', backgroundPosition: 'center'
      }}>
        <div className="container" style={{ maxWidth: '1200px', margin: '0 auto', position: 'relative', zIndex: 1, textAlign: 'center', width: '100%' }}>
          <p style={{ color: 'var(--orange)', fontWeight: 700, letterSpacing: '0.2em', textTransform: 'uppercase', fontSize: '0.85rem', marginBottom: '24px' }}>
            ABOUT HINDUSTAN MARKETING MEDIA
          </p>
          <h1 style={{ fontSize: 'clamp(2.5rem, 5vw, 4rem)', fontWeight: 900, lineHeight: 1.1, marginBottom: '32px', color: 'var(--white)' }}>
            We Make Brands <br/>
            <span style={{ fontFamily: 'var(--font-serif)', fontStyle: 'italic', fontWeight: 500, color: 'var(--orange)' }}>Impossible to Ignore.</span>
          </h1>
          <p style={{ fontSize: '1.15rem', color: 'rgba(255,255,255,0.85)', lineHeight: 1.7, maxWidth: '800px', margin: '0 auto 40px auto' }}>
            Hindustan Marketing Media is a Delhi-based marketing and media company helping businesses build their brand, connect with their audience, and grow online.
            We focus on creative ideas, content, social media, branding, and digital marketing that help businesses communicate better and get noticed.
          </p>
        </div>
      </section>

      {/* 2. What We Do */}
      <section style={{ padding: '100px 24px', backgroundColor: 'var(--cream)' }}>
        <div className="container" style={{ maxWidth: '1200px', margin: '0 auto' }}>
          <h2 style={{ textAlign: 'center', fontSize: '2.5rem', fontWeight: 900, marginBottom: '64px', color: 'var(--dark)' }}>What We Do</h2>
          <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(250px, 1fr))', gap: '32px' }}>
            <ServiceCard 
              icon={Share2}
              title="Social Media Marketing" 
              desc="Building engaging social media presence and growing communities." 
            />
            <ServiceCard 
              icon={ImageIcon}
              title="Content & Creative" 
              desc="Creating reels, campaigns, visuals, and content that gets attention." 
            />
            <ServiceCard 
              icon={Layers}
              title="Branding" 
              desc="Building clear, memorable, and consistent brand identities." 
            />
            <ServiceCard 
              icon={Megaphone}
              title="Digital Marketing" 
              desc="Helping brands reach the right audience through effective digital campaigns." 
            />
          </div>
        </div>
      </section>

      {/* 3. Our Approach */}
      <section style={{ padding: '120px 24px', backgroundColor: 'var(--white)', textAlign: 'center', position: 'relative', overflow: 'hidden' }}>
        {/* Interactive Dot Grid Background */}
        <DotGrid 
          baseColor="#e5e5e5" 
          activeColor="#d4a246" 
          dotSize={4} 
          gap={32} 
        />
        <div className="container" style={{ maxWidth: '900px', margin: '0 auto', position: 'relative', zIndex: 1 }}>
          <h2 style={{ fontSize: '2.5rem', fontWeight: 900, marginBottom: '32px', color: 'var(--dark)' }}>Our Approach</h2>
          <p style={{ fontSize: '1.15rem', color: 'rgba(57,55,56,0.8)', lineHeight: 1.7, marginBottom: '24px' }}>
            We believe marketing should be simple, creative, and result-focused.
          </p>
          <p style={{ fontSize: '1.15rem', color: 'rgba(57,55,56,0.8)', lineHeight: 1.7, marginBottom: '40px' }}>
            Every business is different. We first understand the brand, its audience, and its goals — then create marketing around them.
          </p>
          <div style={{ 
            backgroundColor: 'var(--cream)', padding: '32px', borderRadius: '16px', 
            border: '1px solid rgba(57,55,56,0.1)', display: 'inline-block'
          }}>
            <h3 style={{ fontSize: '1.4rem', fontWeight: 800, color: 'var(--orange)', margin: 0 }}>
              Less unnecessary work. More ideas that matter.
            </h3>
          </div>
        </div>
      </section>

      {/* 4. Founder Section */}
      <section style={{ padding: '120px 24px', backgroundColor: 'var(--cream)' }}>
        <div className="container" style={{ maxWidth: '1200px', margin: '0 auto' }}>
          <div style={{ display: 'grid', gridTemplateColumns: '1fr 1.5fr', gap: '80px', alignItems: 'center' }}>
            
            {/* Left Image Placeholder */}
            <div>
              <div style={{ borderRadius: '24px', overflow: 'hidden', border: '1px solid rgba(57,55,56,0.1)', marginBottom: '32px', boxShadow: '0 20px 40px rgba(57,55,56,0.08)' }}>
                <img 
                  src={zunaidImg} 
                  alt="Moh Zunaid, Founder" 
                  style={{ width: '100%', height: 'auto', display: 'block' }} 
                />
              </div>
            </div>

            {/* Right Content */}
            <div>
              <h2 style={{ fontSize: '2.5rem', fontWeight: 900, marginBottom: '16px', color: 'var(--dark)' }}>About the Founder</h2>
              <h3 style={{ fontSize: '1.5rem', fontWeight: 800, color: 'var(--dark)', marginBottom: '8px' }}>Moh Zunaid</h3>
              <p style={{ color: 'var(--orange)', fontWeight: 700, fontSize: '0.9rem', textTransform: 'uppercase', letterSpacing: '0.1em', marginBottom: '32px' }}>
                Founder, Hindustan Marketing Media
              </p>
              
              <p style={{ fontSize: '1.1rem', color: 'rgba(57,55,56,0.8)', lineHeight: 1.7, marginBottom: '32px' }}>
                Moh Zunaid is the founder of Hindustan Marketing Media, a Delhi-based marketing company focused on helping businesses grow through modern marketing, content, and creative communication.
              </p>
              
              <p style={{ fontSize: '1.1rem', color: 'rgba(57,55,56,0.8)', lineHeight: 1.7, marginBottom: '32px' }}>
                The company was started with a simple idea:
              </p>

              <blockquote style={{ 
                margin: 0, paddingLeft: '24px', borderLeft: '4px solid var(--orange)', 
                fontSize: '1.3rem', fontWeight: 700, fontStyle: 'italic', color: 'var(--dark)'
              }}>
                Good businesses deserve marketing that gets people to notice them.
              </blockquote>
            </div>

          </div>
        </div>
      </section>

    </main>
  );
}
