import React, { useState, useEffect } from 'react';
import {
  ChevronDown,
  TrendingUp,
  Code,
  Smartphone,
  Palette,
  Sparkles,
  Menu,
  X,
  ArrowRight,
  PhoneCall
} from 'lucide-react';
import { Link, useLocation, useNavigate } from 'react-router-dom';
import logoImg from '../assets/logomoju.png';

export default function Header({ onOpenAuditModal }) {
  const [isServicesOpen, setIsServicesOpen] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const location = useLocation();
  const navigate = useNavigate();

  useEffect(() => {
    const handleScroll = () => setScrolled(window.scrollY > 20);
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  // Determine text color based on page and scroll position
  const isAboutPage = location.pathname === '/about';
  const isServicesPage = location.pathname.startsWith('/services');
  const isTransparentDark = (isAboutPage || isServicesPage) && !scrolled;
  const textColor = isTransparentDark ? 'var(--white)' : 'var(--dark)';

  const dynamicNavLinkStyle = {
    ...navLinkStyle,
    color: textColor,
  };

  const servicesList = [
    { title: 'AI & Automation', link: '/services/ai-automation' },
    { title: 'Digital Marketing', link: '/services/digital-marketing' },
    { title: 'Technology', link: '/services/technology' },
    { title: 'Design', link: '/services/design' },
  ];

  return (
    <header style={{
      position: 'fixed',
      top: 0,
      left: 0,
      right: 0,
      width: '100%',
      zIndex: 100,
      backgroundColor: scrolled ? 'rgba(250,243,225,0.95)' : 'transparent',
      backdropFilter: scrolled ? 'blur(14px)' : 'none',
      WebkitBackdropFilter: scrolled ? 'blur(14px)' : 'none',
      borderBottom: scrolled ? '1px solid rgba(202,195,188,0.5)' : '1px solid transparent',
      transition: 'all 0.3s ease',
      boxShadow: scrolled ? '0 2px 20px rgba(57,55,56,0.08)' : 'none',
    }}>
      <div style={{ maxWidth: '1240px', margin: '0 auto', padding: '0 24px', display: 'flex', alignItems: 'center', justifyContent: 'space-between', height: '72px' }}>

        {/* Brand */}
        <Link to="/" style={{ display: 'flex', alignItems: 'center', gap: '10px', textDecoration: 'none', color: textColor }}>
          <img src={logoImg} alt="Hindustan Marketing Media Logo" style={{ height: '38px', width: '38px', borderRadius: '50%', objectFit: 'cover' }} />
          <div>
            <span style={{ fontWeight: '800', fontSize: '1.15rem', letterSpacing: '0.04em', display: 'block', lineHeight: '1.1', fontFamily: 'var(--font-sans)' }}>Hindustan Marketing Media</span>
            <span style={{ fontSize: '0.65rem', fontWeight: '700', letterSpacing: '0.18em', color: 'var(--orange)', textTransform: 'uppercase', display: 'block' }}>CONSULTING</span>
          </div>
        </Link>

        {/* Desktop Nav */}
        <nav style={{ display: 'flex', alignItems: 'center', gap: '2px' }}>
          <Link to="/" style={dynamicNavLinkStyle}>Home</Link>

          {/* Services dropdown */}
          <div style={{ position: 'relative' }}
            onMouseEnter={() => setIsServicesOpen(true)}
            onMouseLeave={() => setIsServicesOpen(false)}
          >
            <button style={{
              ...dynamicNavLinkStyle, display: 'flex', alignItems: 'center', gap: '5px',
              backgroundColor: isServicesOpen ? (isTransparentDark ? 'rgba(255,255,255,0.1)' : 'rgba(252,196,74,0.18)') : 'transparent',
              border: 'none', cursor: 'pointer',
            }}>
              Services
              <ChevronDown size={14} style={{ transform: isServicesOpen ? 'rotate(180deg)' : 'rotate(0)', transition: 'transform 0.2s' }} />
            </button>
            {isServicesOpen && (
              <div style={{
                position: 'absolute', top: 'calc(100% + 6px)', left: '50%', transform: 'translateX(-50%)',
                width: '240px', backgroundColor: '#1a1a1a', borderRadius: '12px',
                padding: '8px', boxShadow: '0 20px 40px rgba(0,0,0,0.4)',
                border: '1px solid rgba(255,255,255,0.1)', zIndex: 200, display: 'flex', flexDirection: 'column',
              }}>
                {servicesList.map((svc, i) => (
                  <Link key={i} to={svc.link} onClick={() => setIsServicesOpen(false)} style={{
                    display: 'block', padding: '12px 16px',
                    borderRadius: '8px', textDecoration: 'none', color: 'rgba(255,255,255,0.9)',
                    fontSize: '0.95rem', fontWeight: '600', transition: 'background-color 0.15s, color 0.15s',
                  }}
                    onMouseEnter={e => { e.currentTarget.style.backgroundColor = 'rgba(255,255,255,0.1)'; e.currentTarget.style.color = 'var(--white)'; }}
                    onMouseLeave={e => { e.currentTarget.style.backgroundColor = 'transparent'; e.currentTarget.style.color = 'rgba(255,255,255,0.9)'; }}
                  >
                    {svc.title}
                  </Link>
                ))}
              </div>
            )}
          </div>

          <Link to="/about" style={dynamicNavLinkStyle}>About</Link>
          <Link to="/contact" style={dynamicNavLinkStyle}>Contact</Link>
        </nav>

        {/* CTA + Mobile toggle */}
        <div style={{ display: 'flex', alignItems: 'center', gap: '10px' }}>
          <button
            onClick={() => navigate('/contact')}
            style={{
              display: 'flex', alignItems: 'center', gap: '8px',
              padding: '10px 22px', borderRadius: '9999px',
              backgroundColor: 'var(--yellow)', color: 'var(--dark)',
              border: '2px solid transparent', fontWeight: '700', fontSize: '0.9rem',
              cursor: 'pointer', transition: 'all 0.2s ease',
              boxShadow: '0 4px 14px rgba(252,196,74,0.35)',
              fontFamily: 'var(--font-sans)',
            }}
            onMouseEnter={e => { e.currentTarget.style.backgroundColor = '#f0b535'; e.currentTarget.style.transform = 'translateY(-1px)'; }}
            onMouseLeave={e => { e.currentTarget.style.backgroundColor = 'var(--yellow)'; e.currentTarget.style.transform = 'none'; }}
          >
            Talk to an Expert
          </button>
          <button
            onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
            style={{
              display: 'none', padding: '8px', borderRadius: '50%',
              border: `1px solid ${isTransparentDark ? 'rgba(255,255,255,0.2)' : 'var(--gray)'}`, 
              backgroundColor: isTransparentDark ? 'rgba(255,255,255,0.1)' : 'var(--white)',
              cursor: 'pointer', color: textColor,
            }}
            className="mobile-menu-toggle"
          >
            {isMobileMenuOpen ? <X size={20} /> : <Menu size={20} />}
          </button>
        </div>
      </div>

      {/* Mobile drawer */}
      {isMobileMenuOpen && (
        <div style={{
          backgroundColor: 'var(--cream)', borderBottom: '1px solid var(--gray)',
          padding: '16px 24px 24px', display: 'flex', flexDirection: 'column', gap: '14px',
        }}>
          {['/', '/services', '/about', '/contact'].map((path, i) => (
            <Link key={i} to={path} onClick={() => setIsMobileMenuOpen(false)} style={mobileNavLinkStyle}>
              {['Home', 'Services', 'About', 'Contact'][i]}
            </Link>
          ))}
          <button className="btn btn-primary" onClick={() => { setIsMobileMenuOpen(false); navigate('/contact'); }} style={{ marginTop: '6px', width: '100%' }}>
            Talk to an Expert <ArrowRight size={16} />
          </button>
        </div>
      )}
    </header>
  );
}

const navLinkStyle = {
  padding: '9px 14px', borderRadius: '9999px', color: 'var(--dark)',
  textDecoration: 'none', fontWeight: '600', fontSize: '0.875rem',
  letterSpacing: '0.02em', textTransform: 'uppercase',
  transition: 'all 0.2s ease', background: 'transparent',
  fontFamily: 'var(--font-sans)',
};

const mobileNavLinkStyle = {
  padding: '12px 0', borderBottom: '1px solid var(--gray)',
  color: 'var(--dark)', textDecoration: 'none',
  fontWeight: '700', fontSize: '1.05rem', letterSpacing: '0.05em', textTransform: 'uppercase',
};
