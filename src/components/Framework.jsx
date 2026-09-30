import React, { useState } from 'react';
import { Compass, Cpu, Rocket, BarChart3, RotateCw, Trophy, ArrowRight, ChevronRight } from 'lucide-react';

const steps = [
  { letter: 'N', title: 'Navigate & Audit', sub: '360° Account Diagnostic', icon: Compass, accent: 'var(--yellow)', desc: 'We analyse your past campaign performance, competitor ad creative, SEO keyword gaps, and conversion funnels to pinpoint immediate growth opportunities.', deliverables: ['Historical Ad Spend Audit', 'Competitor Keyword Matrix', 'Conversion Bottleneck Map'] },
  { letter: 'O', title: 'Optimise Strategy', sub: 'Custom Growth Blueprint', icon: Cpu, accent: 'var(--teal)', desc: 'We build your bespoke omnichannel strategy — budget allocation across Meta & Google, SEO pipeline, and offer messaging refined for your target buyer.', deliverables: ['Full-Funnel Campaign Blueprint', 'Direct-Response Messaging Guide', 'Target Audience Archetypes'] },
  { letter: 'I', title: 'Implement & Launch', sub: 'Creative & Technical Execution', icon: Rocket, accent: 'var(--peach)', desc: 'Our copywriters, designers, and media buyers craft high-converting ad assets, deploy landing pages, and configure precise tracking pixels for launch.', deliverables: ['UGC Video & Graphic Creatives', 'GA4 Server-Side Pixel Setup', 'High-Converting Landing Pages'] },
  { letter: 'S', title: 'Scale & Automate', sub: 'ROAS & Budget Expansion', icon: BarChart3, accent: 'var(--light-yellow)', desc: 'As winning ad angles emerge, we scale budget aggressively into high-ROAS ad sets while implementing retargeting and automated email nurture flows.', deliverables: ['Horizontal & Vertical Ad Scaling', 'Automated Email Drips', 'Dynamic Remarketing Funnels'] },
  { letter: 'I', title: 'Inspect & Refine', sub: 'Continuous Split Testing', icon: RotateCw, accent: 'var(--coral)', desc: 'Weekly A/B tests on headlines, hooks, landing page CTA placement, and keyword bidding tactics keep performance at its peak.', deliverables: ['Weekly Creative & Headline Tests', 'Heatmap & Session Analysis', 'Negative Bidding Optimisations'] },
  { letter: 'V', title: 'Victory & Revenue', sub: 'Predictable Growth', icon: Trophy, accent: 'var(--orange)', desc: 'You achieve compounding revenue growth with complete transparent reporting, predictable CAC, and maximum customer lifetime value.', deliverables: ['Live Performance Dashboards', 'Quarterly Growth Roadmap', 'Dedicated Account Leadership'] },
];

export default function Framework({ onOpenAuditModal }) {
  const [active, setActive] = useState(0);
  const cur = steps[active];
  const Icon = cur.icon;

  return (
    <section id="framework" style={{ padding: '100px 0', background: 'var(--dark)', position: 'relative', overflow: 'hidden' }}>
      {/* Subtle warm orb */}
      <div style={{ position: 'absolute', top: '-10%', right: '-5%', width: '500px', height: '500px', borderRadius: '50%', background: 'radial-gradient(circle, rgba(252,196,74,0.08) 0%, transparent 70%)', pointerEvents: 'none' }} />

      <div className="container" style={{ position: 'relative', zIndex: 1 }}>

        {/* ── Section header ── */}
        <div style={{ maxWidth: '720px', marginBottom: '64px' }}>
          <p style={{ fontWeight: '700', fontSize: '0.78rem', letterSpacing: '0.16em', textTransform: 'uppercase', color: 'var(--orange)', marginBottom: '14px' }}>
            Proprietary Methodology
          </p>
          <h2 style={{ fontFamily: 'var(--font-sans)', fontWeight: '800', fontSize: 'clamp(2rem, 3.5vw, 3rem)', letterSpacing: '-0.025em', color: 'var(--white)', lineHeight: 1.15, marginBottom: '16px' }}>
            The 6-Step{' '}
            <span style={{ fontFamily: 'var(--font-serif)', fontStyle: 'italic', fontWeight: 500, color: 'var(--yellow)' }}>Hindustan Marketing Media</span>
            {' '}Growth Framework
          </h2>
          <p style={{ fontSize: '1.05rem', color: 'rgba(250,243,225,0.65)', lineHeight: 1.65 }}>
            A systematic, data-backed roadmap designed to transform underperforming campaigns into scalable revenue engines.
          </p>
        </div>

        {/* ── Step selector pills ── */}
        <div style={{ display: 'flex', gap: '10px', flexWrap: 'wrap', marginBottom: '48px' }}>
          {steps.map((s, i) => (
            <button key={i} onClick={() => setActive(i)} style={{
              display: 'flex', alignItems: 'center', gap: '8px',
              padding: '10px 20px', borderRadius: '9999px', cursor: 'pointer',
              border: '1.5px solid', fontWeight: '700', fontSize: '0.875rem',
              fontFamily: 'var(--font-sans)', transition: 'all 0.2s',
              borderColor: active === i ? s.accent : 'rgba(255,255,255,0.15)',
              background: active === i ? s.accent : 'rgba(255,255,255,0.05)',
              color: active === i ? 'var(--dark)' : 'rgba(250,243,225,0.7)',
            }}>
              <span style={{ fontWeight: '900', fontSize: '1.1rem' }}>{s.letter}</span>
              <span>{s.title.split(' ')[0]}</span>
            </button>
          ))}
        </div>

        {/* ── Active step detail ── */}
        <div style={{ display: 'grid', gridTemplateColumns: '1.1fr 0.9fr', gap: '32px', alignItems: 'stretch' }}>

          {/* Left: description */}
          <div style={{ background: 'rgba(255,255,255,0.05)', border: '1px solid rgba(255,255,255,0.1)', borderRadius: '24px', padding: '40px', display: 'flex', flexDirection: 'column', gap: '20px' }}>
            <div style={{ display: 'flex', alignItems: 'center', gap: '16px' }}>
              <div style={{ width: '56px', height: '56px', borderRadius: '16px', background: cur.accent, display: 'flex', alignItems: 'center', justifyContent: 'center', fontWeight: '900', fontSize: '1.6rem', color: 'var(--dark)', fontFamily: 'var(--font-sans)', flexShrink: 0 }}>
                {cur.letter}
              </div>
              <div>
                <h3 style={{ fontWeight: '800', fontSize: '1.7rem', color: 'var(--white)', lineHeight: 1.1 }}>{cur.title}</h3>
                <span style={{ fontSize: '0.875rem', fontWeight: '700', color: cur.accent }}>{cur.sub}</span>
              </div>
            </div>

            <p style={{ fontSize: '1.05rem', color: 'rgba(250,243,225,0.75)', lineHeight: 1.65, margin: 0 }}>{cur.desc}</p>

            <button onClick={onOpenAuditModal} className="btn btn-primary" style={{ alignSelf: 'flex-start', marginTop: 'auto', padding: '12px 28px', fontSize: '0.925rem', display: 'flex', alignItems: 'center', gap: '8px' }}>
              Start with Phase {active + 1} <ArrowRight size={16} />
            </button>
          </div>

          {/* Right: deliverables */}
          <div style={{ background: cur.accent, borderRadius: '24px', padding: '40px', display: 'flex', flexDirection: 'column', gap: '16px' }}>
            <div style={{ display: 'flex', alignItems: 'center', gap: '10px', marginBottom: '8px' }}>
              <Icon size={24} color="var(--dark)" />
              <h4 style={{ fontWeight: '800', fontSize: '1.1rem', color: 'var(--dark)' }}>Phase Deliverables</h4>
            </div>
            {cur.deliverables.map((d, di) => (
              <div key={di} style={{ display: 'flex', alignItems: 'center', gap: '12px', background: 'rgba(57,55,56,0.1)', borderRadius: '12px', padding: '14px 16px' }}>
                <ChevronRight size={16} color="var(--dark)" style={{ flexShrink: 0 }} />
                <span style={{ fontWeight: '700', fontSize: '0.925rem', color: 'var(--dark)' }}>{d}</span>
              </div>
            ))}

            {/* Step indicator */}
            <div style={{ marginTop: 'auto', paddingTop: '16px', borderTop: '1px solid rgba(57,55,56,0.15)', display: 'flex', gap: '6px' }}>
              {steps.map((_, si) => (
                <div key={si} onClick={() => setActive(si)} style={{ height: '4px', flex: 1, borderRadius: '999px', background: si === active ? 'var(--dark)' : 'rgba(57,55,56,0.25)', cursor: 'pointer', transition: 'background 0.2s' }} />
              ))}
            </div>
          </div>

        </div>
      </div>
    </section>
  );
}
