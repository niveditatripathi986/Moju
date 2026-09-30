import React from 'react';
import { TrendingUp, DollarSign, Users, Award, ArrowUpRight } from 'lucide-react';

const stats = [
  { value: '3.5x', label: 'Average ROI Delivered', sub: 'Consistent ROAS across campaigns', icon: TrendingUp, accent: 'var(--yellow)' },
  { value: '₹50M+', label: 'Ad Spend Managed', sub: 'Across Meta, Google & LinkedIn', icon: DollarSign, accent: 'var(--teal)' },
  { value: '98%', label: 'Client Retention Rate', sub: 'Built on verified results', icon: Users, accent: 'var(--peach)' },
  { value: '150+', label: 'Campaigns Launched', sub: 'Omnichannel growth strategies', icon: Award, accent: 'var(--coral)' },
];

export default function Stats() {
  return (
    <section style={{ padding: '72px 0', background: 'var(--white)', borderTop: '1px solid rgba(202,195,188,0.4)', borderBottom: '1px solid rgba(202,195,188,0.4)' }}>
      <div className="container">
        <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(220px, 1fr))', gap: '1px', background: 'rgba(202,195,188,0.35)', border: '1px solid rgba(202,195,188,0.35)', borderRadius: '20px', overflow: 'hidden' }}>
          {stats.map((s, i) => {
            const Icon = s.icon;
            return (
              <div key={i} style={{ background: 'var(--white)', padding: '36px 28px', display: 'flex', flexDirection: 'column', gap: '12px', transition: 'background 0.2s' }}
                onMouseEnter={e => e.currentTarget.style.background = 'var(--cream)'}
                onMouseLeave={e => e.currentTarget.style.background = 'var(--white)'}
              >
                <div style={{ width: '44px', height: '44px', borderRadius: '12px', background: s.accent, display: 'flex', alignItems: 'center', justifyContent: 'center' }}>
                  <Icon size={22} color="var(--dark)" />
                </div>
                <div style={{ fontFamily: 'var(--font-sans)', fontWeight: '900', fontSize: 'clamp(2rem, 3.5vw, 2.8rem)', letterSpacing: '-0.03em', color: 'var(--dark)', lineHeight: 1 }}>{s.value}</div>
                <div>
                  <p style={{ fontWeight: '700', fontSize: '1rem', color: 'var(--dark)', margin: '0 0 4px' }}>{s.label}</p>
                  <p style={{ fontSize: '0.82rem', color: 'var(--text-muted)', margin: 0 }}>{s.sub}</p>
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
