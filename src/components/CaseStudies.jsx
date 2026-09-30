import React from 'react';
import { ArrowUpRight } from 'lucide-react';

const cases = [
  {
    client: 'OmniCommerce Retail',
    industry: 'E-Commerce & Fashion',
    big: '+240%', bigLabel: 'Organic Revenue',
    side: '4.2x ROAS on Meta Ads',
    desc: 'Re-architected Meta ad funnels, introduced UGC video creatives, and executed technical SEO across high-intent product categories.',
    tags: ['Meta Ads', 'Technical SEO', 'CRO'],
    accent: 'var(--yellow)',
  },
  {
    client: 'TechScale B2B SaaS',
    industry: 'Enterprise Software',
    big: '$1.2M+', bigLabel: 'Pipeline Added',
    side: '62% Lower Cost Per Demo',
    desc: 'Targeted LinkedIn Ads for C-suite decision makers paired with Google Search campaigns capturing high-intent enterprise keywords.',
    tags: ['LinkedIn Ads', 'Google Search', 'B2B Lead Gen'],
    accent: 'var(--teal)',
  },
  {
    client: 'Zenith Health D2C',
    industry: 'Wellness & Supplements',
    big: '3.8x', bigLabel: 'Blended ROAS',
    side: '45% Reduction in CAC',
    desc: 'Implemented automated Klaviyo email flows, optimised checkout conversion rates, and scaled TikTok & Meta performance campaigns.',
    tags: ['D2C Media Buying', 'Email Automation', 'A/B Testing'],
    accent: 'var(--peach)',
  },
];

export default function CaseStudies({ onOpenAuditModal }) {
  return (
    <section id="work" style={{ padding: '100px 0', background: 'var(--cream)' }}>
      <div className="container">

        {/* ── Header ── */}
        <div style={{ display: 'grid', gridTemplateColumns: '1fr auto', alignItems: 'end', gap: '32px', marginBottom: '56px' }}>
          <div>
            <p style={{ fontWeight: '700', fontSize: '0.78rem', letterSpacing: '0.16em', textTransform: 'uppercase', color: 'var(--orange)', marginBottom: '14px' }}>Verified Results</p>
            <h2 style={{ fontFamily: 'var(--font-sans)', fontWeight: '800', fontSize: 'clamp(2rem, 3.5vw, 3rem)', letterSpacing: '-0.025em', color: 'var(--dark)', lineHeight: 1.15 }}>
              Real Client Growth,{' '}
              <span style={{ fontFamily: 'var(--font-serif)', fontStyle: 'italic', fontWeight: 500 }}>Measured</span>
              {' '}in Revenue
            </h2>
          </div>
          <button onClick={onOpenAuditModal} className="btn btn-outline" style={{ flexShrink: 0, padding: '12px 24px', fontSize: '0.9rem', display: 'flex', alignItems: 'center', gap: '8px' }}>
            View All Cases <ArrowUpRight size={16} />
          </button>
        </div>

        {/* ── Case cards ── */}
        <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fill, minmax(340px, 1fr))', gap: '24px' }}>
          {cases.map((c, i) => (
            <div key={i} className="card" style={{ padding: '0', overflow: 'hidden', display: 'flex', flexDirection: 'column' }}>
              {/* Coloured accent top bar */}
              <div style={{ height: '6px', background: c.accent }} />

              <div style={{ padding: '28px', flex: 1, display: 'flex', flexDirection: 'column', gap: '0' }}>
                <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'space-between', marginBottom: '20px' }}>
                  <span style={{ fontSize: '0.72rem', fontWeight: '700', textTransform: 'uppercase', letterSpacing: '0.1em', color: 'var(--orange)' }}>{c.industry}</span>
                  <div style={{ width: '32px', height: '32px', borderRadius: '50%', background: c.accent, display: 'flex', alignItems: 'center', justifyContent: 'center' }}>
                    <ArrowUpRight size={16} color="var(--dark)" />
                  </div>
                </div>

                <h3 style={{ fontWeight: '800', fontSize: '1.4rem', color: 'var(--dark)', marginBottom: '18px' }}>{c.client}</h3>

                {/* Big metric box */}
                <div style={{ background: 'var(--cream)', border: '1px solid rgba(202,195,188,0.5)', borderRadius: '16px', padding: '20px', textAlign: 'center', marginBottom: '18px' }}>
                  <div style={{ fontFamily: 'var(--font-sans)', fontWeight: '900', fontSize: 'clamp(2.2rem,4vw,3rem)', letterSpacing: '-0.03em', color: 'var(--dark)', lineHeight: 1 }}>{c.big}</div>
                  <div style={{ fontWeight: '700', fontSize: '0.875rem', color: 'var(--dark)', marginTop: '4px' }}>{c.bigLabel}</div>
                  <div style={{ fontWeight: '600', fontSize: '0.78rem', color: 'var(--orange)', marginTop: '3px' }}>{c.side}</div>
                </div>

                <p style={{ fontSize: '0.9rem', color: 'var(--text-muted)', lineHeight: 1.6, marginBottom: '20px', flex: 1 }}>{c.desc}</p>

                {/* Tags */}
                <div style={{ display: 'flex', flexWrap: 'wrap', gap: '7px', marginBottom: '20px' }}>
                  {c.tags.map((t, ti) => (
                    <span key={ti} style={{ fontSize: '0.72rem', fontWeight: '700', background: 'var(--peach)', color: 'var(--dark)', padding: '4px 11px', borderRadius: '999px' }}>{t}</span>
                  ))}
                </div>

                <button onClick={onOpenAuditModal} className="btn btn-outline" style={{ width: '100%', padding: '11px', fontSize: '0.875rem' }}>
                  Read Full Case Study
                </button>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
