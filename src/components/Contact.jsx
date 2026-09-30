import React, { useState } from 'react';
import { Send, CheckCircle2, Phone, Mail } from 'lucide-react';

const budgets = ['< ₹50K / mo', '₹50K – ₹1.5L / mo', '₹1.5L – ₹5L / mo', '₹5L+ / mo'];
const svcs = ['Digital Marketing & PPC', 'Google Search & Shopping', 'Meta / Instagram Ads', 'SEO & Content', 'Web Development', 'CRO & Analytics'];

export default function Contact() {
  const [form, setForm] = useState({ name: '', email: '', phone: '', website: '', budget: budgets[1], services: ['Digital Marketing & PPC'], msg: '' });
  const [done, setDone] = useState(false);

  const toggle = s => setForm(p => ({ ...p, services: p.services.includes(s) ? p.services.filter(x => x !== s) : [...p.services, s] }));

  return (
    <section id="contact" style={{ padding: '100px 0', background: 'var(--peach)' }}>
      <div className="container">
        <div style={{ display: 'grid', gridTemplateColumns: '1fr 1.15fr', gap: '56px', alignItems: 'start' }}>

          {/* ── Left: value prop ── */}
          <div>
            <p style={{ fontWeight: '700', fontSize: '0.78rem', letterSpacing: '0.16em', textTransform: 'uppercase', color: 'var(--orange)', marginBottom: '14px' }}>Free Growth Audit</p>
            <h2 style={{ fontFamily: 'var(--font-sans)', fontWeight: '800', fontSize: 'clamp(2rem, 3.5vw, 3.2rem)', letterSpacing: '-0.025em', color: 'var(--dark)', lineHeight: 1.15, marginBottom: '20px' }}>
              Ready to Scale Revenue{' '}
              <span style={{ fontFamily: 'var(--font-serif)', fontStyle: 'italic', fontWeight: 500 }}>Faster</span>?
            </h2>
            <p style={{ fontSize: '1.05rem', color: 'rgba(57,55,56,0.7)', lineHeight: 1.65, marginBottom: '36px' }}>
              Book a 30-minute 1-on-1 strategy call. We'll conduct a live audit of your ad accounts, SEO performance, and conversion funnel.
            </p>

            {/* Bullets */}
            {['100% Free Audit (Valued ₹1,20,000)', 'Custom Competitor Ad & Keyword Analysis', 'Clear Roadmap for 3x ROAS Scaling'].map((b, bi) => (
              <div key={bi} style={{ display: 'flex', alignItems: 'center', gap: '11px', marginBottom: '14px', fontWeight: '700', fontSize: '0.975rem', color: 'var(--dark)' }}>
                <CheckCircle2 size={19} color="var(--orange)" style={{ flexShrink: 0 }} />
                {b}
              </div>
            ))}

            {/* Contact chips */}
            <div style={{ marginTop: '36px', display: 'flex', flexDirection: 'column', gap: '12px' }}>
              {[
                { icon: Phone, label: 'Call / WhatsApp', val: '+91 74598 93697', accent: 'var(--yellow)' },
                { icon: Mail, label: 'Email Us', val: 'market09000@gmail.com', accent: 'var(--teal)' },
              ].map(({ icon: Icon, label, val, accent }, ci) => (
                <div key={ci} style={{ display: 'flex', alignItems: 'center', gap: '14px', background: 'var(--white)', borderRadius: '14px', padding: '14px 18px', border: '1px solid rgba(202,195,188,0.45)' }}>
                  <div style={{ padding: '9px', borderRadius: '10px', background: accent, flexShrink: 0 }}><Icon size={18} color="var(--dark)" /></div>
                  <div>
                    <p style={{ fontSize: '0.72rem', fontWeight: '600', color: 'var(--text-muted)', margin: '0 0 2px', textTransform: 'uppercase', letterSpacing: '0.08em' }}>{label}</p>
                    <p style={{ fontWeight: '800', fontSize: '0.975rem', color: 'var(--dark)', margin: 0 }}>{val}</p>
                  </div>
                </div>
              ))}
            </div>
          </div>

          {/* ── Right: form card ── */}
          <div className="card" style={{ background: 'var(--white)', padding: '40px' }}>
            {done ? (
              <div style={{ textAlign: 'center', padding: '40px 0' }}>
                <div style={{ width: '60px', height: '60px', borderRadius: '50%', background: 'var(--yellow)', display: 'flex', alignItems: 'center', justifyContent: 'center', margin: '0 auto 18px', color: 'var(--dark)' }}>
                  <CheckCircle2 size={34} />
                </div>
                <h3 style={{ fontWeight: '800', fontSize: '1.7rem', color: 'var(--dark)', marginBottom: '10px' }}>Audit Request Received!</h3>
                <p style={{ fontSize: '1rem', color: 'var(--text-muted)', marginBottom: '24px' }}>
                  Thank you, {form.name || 'Friend'}! Our strategist will reach out within 4 hours to confirm your free audit.
                </p>
                <button className="btn btn-primary" onClick={() => setDone(false)} style={{ width: '100%' }}>Submit Another</button>
              </div>
            ) : (
              <form onSubmit={e => { e.preventDefault(); setDone(true); }} style={{ display: 'flex', flexDirection: 'column', gap: '18px' }}>
                <h3 style={{ fontWeight: '800', fontSize: '1.4rem', color: 'var(--dark)', marginBottom: '4px' }}>Claim Your Free Strategy Audit</h3>

                <div><label className="form-label">Full Name *</label><input type="text" required className="form-input" placeholder="e.g. Rahul Sharma" value={form.name} onChange={e => setForm(p => ({ ...p, name: e.target.value }))} /></div>

                <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: '14px' }}>
                  <div><label className="form-label">Work Email *</label><input type="email" required className="form-input" placeholder="rahul@company.com" value={form.email} onChange={e => setForm(p => ({ ...p, email: e.target.value }))} /></div>
                  <div><label className="form-label">Phone / WhatsApp *</label><input type="tel" required className="form-input" placeholder="+91 98765 43210" value={form.phone} onChange={e => setForm(p => ({ ...p, phone: e.target.value }))} /></div>
                </div>

                <div><label className="form-label">Company Website</label><input type="url" className="form-input" placeholder="https://yourcompany.com" value={form.website} onChange={e => setForm(p => ({ ...p, website: e.target.value }))} /></div>

                <div>
                  <label className="form-label">Monthly Ad Spend Budget</label>
                  <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: '8px' }}>
                    {budgets.map(b => (
                      <button type="button" key={b} onClick={() => setForm(p => ({ ...p, budget: b }))} style={{ padding: '11px', borderRadius: '10px', border: '2px solid', borderColor: form.budget === b ? 'var(--dark)' : 'var(--gray)', background: form.budget === b ? 'var(--peach)' : 'var(--cream)', color: 'var(--dark)', fontWeight: '700', fontSize: '0.82rem', cursor: 'pointer', transition: 'all 0.15s', fontFamily: 'var(--font-sans)' }}>{b}</button>
                    ))}
                  </div>
                </div>

                <div>
                  <label className="form-label">Services Required</label>
                  <div style={{ display: 'flex', flexWrap: 'wrap', gap: '7px' }}>
                    {svcs.map(s => {
                      const sel = form.services.includes(s);
                      return (
                        <button type="button" key={s} onClick={() => toggle(s)} style={{ padding: '7px 13px', borderRadius: '999px', border: '1.5px solid', borderColor: sel ? 'var(--dark)' : 'var(--gray)', background: sel ? 'var(--yellow)' : 'var(--white)', color: 'var(--dark)', fontWeight: '700', fontSize: '0.78rem', cursor: 'pointer', transition: 'all 0.15s', fontFamily: 'var(--font-sans)' }}>
                          {sel ? '✓ ' : ''}{s}
                        </button>
                      );
                    })}
                  </div>
                </div>

                <div><label className="form-label">Growth Goals & Brief</label><textarea rows={3} className="form-input" placeholder="Target metrics, challenges, or campaign objectives…" value={form.msg} onChange={e => setForm(p => ({ ...p, msg: e.target.value }))} style={{ resize: 'vertical' }} /></div>

                <button type="submit" className="btn btn-primary" style={{ width: '100%', padding: '16px', fontSize: '1rem', marginTop: '4px', display: 'flex', alignItems: 'center', justifyContent: 'center', gap: '8px' }}>
                  <Send size={17} /> Claim Your Free Audit
                </button>
              </form>
            )}
          </div>

        </div>
      </div>
    </section>
  );
}
