import React from 'react';
import { Link } from 'react-router-dom';
import { ArrowRight, Phone, Mail, MapPin, Globe, Share2 } from 'lucide-react';
import logoImg from '../assets/logomoju.png';

export default function Footer({ onOpenAuditModal }) {
  return (
    <footer style={{ backgroundColor: 'var(--dark)', color: 'var(--cream)', paddingTop: '80px', paddingBottom: '40px' }}>
      <div className="container">


        {/* Giant Company Name Banner */}
        <div style={{ marginBottom: '80px', textAlign: 'center', width: '100%', overflow: 'hidden' }}>
          <h2 style={{
            fontSize: 'clamp(1.5rem, 5.5vw, 7.5rem)',
            fontWeight: '900',
            lineHeight: '1.1',
            margin: 0,
            background: 'linear-gradient(180deg, #9ca3af 0%, #374151 100%)',
            WebkitBackgroundClip: 'text',
            WebkitTextFillColor: 'transparent',
            letterSpacing: '-0.03em',
            whiteSpace: 'nowrap'
          }}>
            Hindustan Marketing Media
          </h2>
        </div>

        {/* Footer Navigation Columns */}
        <div style={{
          display: 'grid',
          gridTemplateColumns: 'repeat(auto-fit, minmax(200px, 1fr))',
          gap: '40px',
          marginBottom: '64px'
        }}>

          {/* Brand Info */}
          <div style={{ gridColumn: 'span 1' }}>
            <div style={{ display: 'flex', alignItems: 'center', gap: '12px', marginBottom: '16px' }}>
              <img src={logoImg} alt="Hindustan Marketing Media Logo" style={{ height: '38px', width: '38px', borderRadius: '50%', objectFit: 'cover' }} />
              <span style={{ fontWeight: '800', fontSize: '1.3rem', color: 'var(--white)' }}>
                Hindustan Marketing Media
              </span>
            </div>

            <p style={{ color: 'rgba(250, 243, 225, 0.7)', fontSize: '0.9rem', lineHeight: '1.6', marginBottom: '20px' }}>
              Performance-driven digital marketing agency helping brands scale revenue through SEO, PPC ads, CRO, and omnichannel media buying.
            </p>

            {/* Social Icons */}
            <div style={{ display: 'flex', gap: '12px' }}>
              <a href="https://www.linkedin.com/posts/hindustan-marketing-media_marketing-branding-activity-7509729414847516672-VQ8P?utm_source=share&utm_medium=member_android&rcm=ACoAAGhetYcBvK2B5q4GTHtYQ7OV80-eCgXzrmo---" style={socialIconStyle} title="LinkedIn" target="_blank" rel="noopener noreferrer">
                <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M16 8a6 6 0 0 1 6 6v7h-4v-7a2 2 0 0 0-2-2 2 2 0 0 0-2 2v7h-4v-7a6 6 0 0 1 6-6z" /><rect x="2" y="9" width="4" height="12" /><circle cx="4" cy="4" r="2" /></svg>
              </a>
              <a href="https://www.instagram.com/hindustanmarketingmedia/?hl=en" style={socialIconStyle} title="Instagram" target="_blank" rel="noopener noreferrer">
                <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><rect x="2" y="2" width="20" height="20" rx="5" ry="5" /><path d="M16 11.37A4 4 0 1 1 12.63 8 4 4 0 0 1 16 11.37z" /><line x1="17.5" y1="6.5" x2="17.51" y2="6.5" /></svg>
              </a>
            </div>
          </div>

          {/* Services Column */}
          <div>
            <h4 style={footerColHeaderStyle}>Services</h4>
            <ul style={footerListStyle}>
              <li><Link to="/services/ai-automation" style={footerLinkStyle}>AI & Automation</Link></li>
              <li><Link to="/services/digital-marketing" style={footerLinkStyle}>Digital Marketing</Link></li>
              <li><Link to="/services/technology" style={footerLinkStyle}>Technology</Link></li>
              <li><Link to="/services/design" style={footerLinkStyle}>Design</Link></li>
            </ul>
          </div>

          {/* Company Column */}
          <div>
            <h4 style={footerColHeaderStyle}>Company</h4>
            <ul style={footerListStyle}>
              <li><Link to="/about" style={footerLinkStyle}>About Us</Link></li>
              <li><Link to="/contact" style={footerLinkStyle}>Contact Us</Link></li>
            </ul>
          </div>

          {/* Contact Column */}
          <div>
            <h4 style={footerColHeaderStyle}>Contact Us</h4>
            <ul style={footerListStyle}>
              <li style={{ color: 'rgba(250, 243, 225, 0.7)', fontSize: '0.9rem' }}>
                📍 Gali no 5, Sector 7-Dwarka, Delhi
              </li>
              <li style={{ color: 'rgba(250, 243, 225, 0.7)', fontSize: '0.9rem' }}>
                📞 +91 74598 93697
              </li>
              <li style={{ color: 'rgba(250, 243, 225, 0.7)', fontSize: '0.9rem' }}>
                ✉️ market09000@gmail.com
              </li>
            </ul>
          </div>

        </div>

        {/* Bottom Copyright */}
        <div style={{
          borderTop: '1px solid rgba(255, 255, 255, 0.1)',
          paddingTop: '28px',
          display: 'flex',
          alignItems: 'center',
          justifyContent: 'space-between',
          flexWrap: 'wrap',
          gap: '16px',
          fontSize: '0.85rem',
          color: 'rgba(250, 243, 225, 0.6)'
        }}>
          <div>
            © {new Date().getFullYear()} Hindustan Marketing Media. All rights reserved.
          </div>

          <div style={{ display: 'flex', gap: '20px' }}>
            <Link to="/privacy-policy" style={{ color: 'inherit', textDecoration: 'none' }}>Privacy Policy</Link>
            <Link to="/terms-of-service" style={{ color: 'inherit', textDecoration: 'none' }}>Terms of Service</Link>
            <a href="#" style={{ color: 'inherit', textDecoration: 'none' }}>Cookie Policy</a>
          </div>
        </div>

      </div>
    </footer>
  );
}

const socialIconStyle = {
  width: '36px',
  height: '36px',
  borderRadius: '50%',
  backgroundColor: 'rgba(255, 255, 255, 0.1)',
  color: 'var(--white)',
  display: 'flex',
  alignItems: 'center',
  justifyContent: 'center',
  textDecoration: 'none',
  transition: 'background-color 0.2s ease'
};

const footerColHeaderStyle = {
  fontSize: '1.05rem',
  fontWeight: '800',
  color: 'var(--white)',
  marginBottom: '20px'
};

const footerListStyle = {
  listStyle: 'none',
  padding: 0,
  margin: 0,
  display: 'flex',
  flexDirection: 'column',
  gap: '12px'
};

const footerLinkStyle = {
  color: 'rgba(250, 243, 225, 0.7)',
  textDecoration: 'none',
  fontSize: '0.9rem',
  transition: 'color 0.2s ease'
};
