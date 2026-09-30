import React, { useState } from 'react';
import { Search, Target, Share2, FileText, Zap, BarChart2, CheckCircle, ArrowRight } from 'lucide-react';

const services = [
  {
    id: 'seo', cat: 'SEO & Organic',
    title: 'Search Engine Optimization',
    tag: 'Rank #1 on Google',
    desc: 'Technical SEO audits, high-authority link building, and keyword content strategies that compound organic revenue month over month.',
    icon: Search, accent: 'var(--yellow)',
    features: ['Technical & On-Page Audits', 'High-Intent Keyword Strategy', 'White-Hat Link Building', 'Local SEO & GMB Optimisation'],
  },
  {
    id: 'ppc', cat: 'Paid Media',
    title: 'Google Ads & PPC',
    tag: 'Instant Qualified Traffic',
    desc: 'Search, Shopping and Performance Max campaigns engineered to maximise ROAS and reduce cost-per-acquisition from day one.',
    icon: Target, accent: 'var(--teal)',
    features: ['Google Search & Shopping Ads', 'Negative Keyword Optimisation', 'High-Converting Landing Pages', 'Real-Time ROAS Dashboard'],
  },
  {
    id: 'smm', cat: 'Paid Media',
    title: 'Meta & Social Media Ads',
    tag: 'Scale Cold to Converted',
    desc: 'UGC video creatives, precise audience targeting, and full-funnel retargeting built to convert cold visitors into repeat buyers.',
    icon: Share2, accent: 'var(--peach)',
    features: ['UGC Video & Graphic Production', 'Custom Lookalike Audiences', 'TikTok & Instagram Reels Ads', 'LinkedIn B2B Lead Gen'],
  },
  {
    id: 'content', cat: 'Conversion & Creative',
    title: 'Content & Copywriting',
    tag: 'Copy That Sells',
    desc: 'Direct-response ad copy, email drip sequences, and SEO content that builds authority and converts readers into paying clients.',
    icon: FileText, accent: 'var(--light-yellow)',
    features: ['Direct-Response Ad Copywriting', 'Email Drip Automation', 'Lead Magnet Creation', 'Blog & Thought Leadership'],
  },
  {
    id: 'cro', cat: 'Conversion & Creative',
    title: 'Conversion Rate Optimisation',
    tag: '2× Your Existing Traffic',
    desc: 'Heatmaps, session recordings, and A/B tests on every touchpoint — eliminating friction to unlock hidden revenue already in your funnel.',
    icon: Zap, accent: 'var(--coral)',
    features: ['A/B & Multivariate Testing', 'Checkout & Cart Recovery', 'UI/UX Micro-Interaction Fixes', 'Customer Friction Audits'],
  },
  {
    id: 'analytics', cat: 'SEO & Organic',
    title: 'Growth Analytics & Attribution',
    tag: 'Full Transparency',
    desc: 'Custom GA4 setups, server-side tracking, and live Looker Studio dashboards so you always know exactly where every rupee is going.',
    icon: BarChart2, accent: 'var(--orange)',
    features: ['GA4 & Server-Side Pixel', 'Custom Looker Studio Reports', 'Multi-Touch Attribution', 'Monthly ROI Breakdown Calls'],
  },
];

const cats = ['All', 'Paid Media', 'SEO & Organic', 'Conversion & Creative'];

export default function Services({ onOpenAuditModal }) {
  const [active, setActive] = useState('All');
  const filtered = active === 'All' ? services : services.filter(s => s.cat === active);

  return (
    <section id="services" style={{ padding: '100px 0', background: 'var(--cream)' }}>
      <div className="container">

        {/* ── Section header ── */}
        <div style={{ display: 'grid', gridTemplateColumns: '1fr auto', alignItems: 'end', gap: '32px', marginBottom: '56px' }}>
          <div>
            <p style={{ fontWeight: '700', fontSize: '0.78rem', letterSpacing: '0.16em', textTransform: 'uppercase', color: 'var(--orange)', marginBottom: '14px' }}>
              Services & Capabilities
            </p>
            <h2 style={{ fontFamily: 'var(--font-sans)', fontWeight: '800', fontSize: 'clamp(2rem, 3.5vw, 3rem)', letterSpacing: '-0.025em', color: 'var(--dark)', lineHeight: 1.15 }}>
              Full-Funnel Digital Solutions<br />
              <span style={{ fontFamily: 'var(--font-serif)', fontStyle: 'italic', fontWeight: 500, color: 'var(--dark)' }}>Designed to Outperform</span>
            </h2>
          </div>
          <button onClick={onOpenAuditModal} className="btn btn-outline" style={{ flexShrink: 0, display: 'flex', alignItems: 'center', gap: '8px', padding: '12px 24px', fontSize: '0.9rem' }}>
            View All Services <ArrowRight size={16} />
          </button>
        </div>

        {/* ── Category tabs ── */}
        <div style={{ display: 'flex', gap: '10px', flexWrap: 'wrap', marginBottom: '48px' }}>
          {cats.map(c => (
            <button key={c} onClick={() => setActive(c)} style={{
              padding: '9px 22px', borderRadius: '9999px', fontWeight: '700', fontSize: '0.875rem',
              border: '1.5px solid', cursor: 'pointer', transition: 'all 0.2s',
              fontFamily: 'var(--font-sans)',
              borderColor: active === c ? 'var(--dark)' : 'var(--gray)',
              background: active === c ? 'var(--dark)' : 'var(--white)',
              color: active === c ? 'var(--cream)' : 'var(--dark)',
            }}>
              {c}
            </button>
          ))}
        </div>

        {/* ── Services grid ── */}
        <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fill, minmax(340px, 1fr))', gap: '24px' }}>
          {filtered.map(svc => {
            const Icon = svc.icon;
            return (
              <div key={svc.id} className="card" style={{ display: 'flex', flexDirection: 'column', gap: '0', padding: '32px' }}>
                {/* Top row */}
                <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'space-between', marginBottom: '24px' }}>
                  <div style={{ width: '52px', height: '52px', borderRadius: '14px', background: svc.accent, display: 'flex', alignItems: 'center', justifyContent: 'center' }}>
                    <Icon size={24} color="var(--dark)" />
                  </div>
                  <span style={{ fontSize: '0.72rem', fontWeight: '700', background: 'var(--cream)', border: '1px solid var(--gray)', color: 'var(--dark)', padding: '4px 12px', borderRadius: '999px', letterSpacing: '0.04em' }}>
                    {svc.cat}
                  </span>
                </div>

                <h3 style={{ fontWeight: '800', fontSize: '1.35rem', color: 'var(--dark)', marginBottom: '6px' }}>{svc.title}</h3>
                <p style={{ fontWeight: '700', fontSize: '0.875rem', color: 'var(--orange)', marginBottom: '14px' }}>{svc.tag}</p>
                <p style={{ fontSize: '0.925rem', color: 'var(--text-muted)', lineHeight: 1.6, marginBottom: '24px', flex: 1 }}>{svc.desc}</p>

                {/* Checklist */}
                <div style={{ display: 'flex', flexDirection: 'column', gap: '9px', marginBottom: '28px' }}>
                  {svc.features.map((f, fi) => (
                    <div key={fi} style={{ display: 'flex', alignItems: 'center', gap: '9px', fontSize: '0.85rem', fontWeight: '600' }}>
                      <CheckCircle size={15} color="var(--orange)" style={{ flexShrink: 0 }} />
                      {f}
                    </div>
                  ))}
                </div>

                <button onClick={onOpenAuditModal} className="btn btn-outline" style={{ width: '100%', padding: '12px', fontSize: '0.875rem' }}>
                  Get a Proposal <ArrowRight size={15} />
                </button>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
