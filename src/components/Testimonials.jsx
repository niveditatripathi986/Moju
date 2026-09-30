import React from 'react';
import { Star, Quote } from 'lucide-react';

const reviews = [
  { quote: 'Hindustan Marketing Media turned our Google Ads around. Within 60 days our cost-per-acquisition dropped 42% while monthly orders doubled. Genuinely the best agency decision we made.', author: 'Vikramaditya Sharma', title: 'CMO, OmniCommerce Retail', rating: 5, bg: 'var(--yellow)' },
  { quote: "Their team doesn't just manage ad spend — they deeply understand unit economics. The Hindustan Marketing Media Framework gave us complete predictability in scaling our B2B SaaS ARR.", author: 'Ananya Deshmukh', title: 'Founder & CEO, TechScale Labs', rating: 5, bg: 'var(--teal)' },
  { quote: 'Best digital marketing partnership in 7 years of running campaigns. Transparent reporting, incredible ad creative, and an unmatched dedication to our ROI.', author: 'Rohan Kapoor', title: 'Head of Growth, Zenith Health', rating: 5, bg: 'var(--peach)' },
];

export default function Testimonials() {
  return (
    <section id="about" style={{ padding: '100px 0', background: 'var(--white)' }}>
      <div className="container">

        {/* ── Header ── */}
        <div style={{ textAlign: 'center', maxWidth: '680px', margin: '0 auto 64px' }}>
          <p style={{ fontWeight: '700', fontSize: '0.78rem', letterSpacing: '0.16em', textTransform: 'uppercase', color: 'var(--orange)', marginBottom: '14px' }}>Client Endorsements</p>
          <h2 style={{ fontFamily: 'var(--font-sans)', fontWeight: '800', fontSize: 'clamp(2rem, 3.5vw, 3rem)', letterSpacing: '-0.025em', color: 'var(--dark)', lineHeight: 1.15 }}>
            What Industry Leaders Say<br />
            About <span style={{ fontFamily: 'var(--font-serif)', fontStyle: 'italic', fontWeight: 500 }}>Hindustan Marketing Media</span>
          </h2>
        </div>

        {/* ── Review cards ── */}
        <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fill, minmax(320px, 1fr))', gap: '24px' }}>
          {reviews.map((r, i) => (
            <div key={i} className="card" style={{ padding: '32px', display: 'flex', flexDirection: 'column', justifyContent: 'space-between', gap: '0' }}>
              {/* Stars + quote icon */}
              <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'space-between', marginBottom: '20px' }}>
                <div style={{ display: 'flex', gap: '3px' }}>
                  {Array(r.rating).fill(0).map((_, si) => (
                    <Star key={si} size={17} fill="var(--yellow)" color="var(--yellow)" />
                  ))}
                </div>
                <Quote size={26} color="var(--gray)" />
              </div>

              <p style={{ fontSize: '1rem', fontStyle: 'italic', color: 'var(--dark)', lineHeight: 1.65, marginBottom: '28px', flex: 1 }}>"{r.quote}"</p>

              {/* Author */}
              <div style={{ display: 'flex', alignItems: 'center', gap: '12px', paddingTop: '20px', borderTop: '1px solid rgba(202,195,188,0.5)' }}>
                <div style={{ width: '44px', height: '44px', borderRadius: '50%', background: r.bg, display: 'flex', alignItems: 'center', justifyContent: 'center', fontWeight: '800', fontSize: '1.15rem', color: 'var(--dark)', flexShrink: 0 }}>
                  {r.author[0]}
                </div>
                <div>
                  <p style={{ fontWeight: '800', fontSize: '0.975rem', color: 'var(--dark)', margin: '0 0 2px' }}>{r.author}</p>
                  <p style={{ fontWeight: '600', fontSize: '0.8rem', color: 'var(--orange)', margin: 0 }}>{r.title}</p>
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* ── Trust strip ── */}
        <div style={{ marginTop: '64px', padding: '28px 32px', background: 'var(--cream)', borderRadius: '20px', border: '1px solid rgba(202,195,188,0.45)', display: 'flex', alignItems: 'center', justifyContent: 'center', gap: '40px', flexWrap: 'wrap' }}>
          {[['100+', 'Global Brands Served'], ['₹50M+', 'Ad Spend Managed'], ['98%', 'Client Retention'], ['8', 'Countries Served']].map(([num, lbl], i) => (
            <div key={i} style={{ textAlign: 'center' }}>
              <div style={{ fontFamily: 'var(--font-sans)', fontWeight: '900', fontSize: '1.8rem', letterSpacing: '-0.03em', color: 'var(--dark)' }}>{num}</div>
              <div style={{ fontWeight: '600', fontSize: '0.78rem', color: 'var(--text-muted)', textTransform: 'uppercase', letterSpacing: '0.08em' }}>{lbl}</div>
            </div>
          ))}
        </div>

      </div>
    </section>
  );
}
