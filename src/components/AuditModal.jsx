import React, { useState } from 'react';
import { X, Send, CheckCircle2, Sparkles } from 'lucide-react';

export default function AuditModal({ isOpen, onClose }) {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    phone: '',
    website: '',
    service: 'Digital Marketing & PPC'
  });

  const [submitted, setSubmitted] = useState(false);

  if (!isOpen) return null;

  const handleSubmit = (e) => {
    e.preventDefault();
    setSubmitted(true);
  };

  return (
    <div style={{
      position: 'fixed',
      inset: 0,
      zIndex: 200,
      backgroundColor: 'rgba(57, 55, 56, 0.65)',
      backdropFilter: 'blur(8px)',
      display: 'flex',
      alignItems: 'center',
      justifyContent: 'center',
      padding: '20px'
    }}>
      <div style={{
        backgroundColor: 'var(--white)',
        borderRadius: '24px',
        maxWidth: '520px',
        width: '100%',
        padding: '36px',
        position: 'relative',
        boxShadow: '0 25px 50px rgba(0, 0, 0, 0.25)',
        border: '1px solid var(--gray)',
        maxHeight: '90vh',
        overflowY: 'auto'
      }}>
        {/* Close Button */}
        <button
          onClick={onClose}
          style={{
            position: 'absolute',
            top: '20px',
            right: '20px',
            background: 'var(--cream)',
            border: 'none',
            borderRadius: '50%',
            width: '36px',
            height: '36px',
            display: 'flex',
            alignItems: 'center',
            justifyContent: 'center',
            cursor: 'pointer',
            color: 'var(--dark)'
          }}
        >
          <X size={20} />
        </button>

        {submitted ? (
          <div style={{ textAlign: 'center', padding: '20px 0' }}>
            <div style={{
              width: '60px',
              height: '60px',
              borderRadius: '50%',
              backgroundColor: 'var(--yellow)',
              display: 'flex',
              alignItems: 'center',
              justifyContent: 'center',
              margin: '0 auto 16px',
              color: 'var(--dark)'
            }}>
              <CheckCircle2 size={36} />
            </div>
            <h3 style={{ fontSize: '1.6rem', fontWeight: '800', marginBottom: '8px', color: 'var(--dark)' }}>
              Call Scheduled!
            </h3>
            <p style={{ color: 'var(--text-muted)', fontSize: '0.95rem', marginBottom: '24px' }}>
              We have received your details, {formData.name}. Our strategist will send a calendar invite to {formData.email} shortly.
            </p>
            <button className="btn btn-primary" onClick={onClose} style={{ width: '100%' }}>
              Close Modal
            </button>
          </div>
        ) : (
          <form onSubmit={handleSubmit} style={{ display: 'flex', flexDirection: 'column', gap: '16px' }}>
            
            <div className="badge badge-yellow" style={{ width: 'fit-content' }}>
              <Sparkles size={14} />
              <span>30-Min Strategy Consultation</span>
            </div>

            <h3 style={{ fontSize: '1.6rem', fontWeight: '800', color: 'var(--dark)', lineHeight: '1.2' }}>
              Book Your Strategy Audit
            </h3>

            <p style={{ fontSize: '0.9rem', color: 'var(--text-muted)', margin: 0 }}>
              Get direct actionable feedback on your PPC ads, SEO traffic, and campaign ROI.
            </p>

            <div>
              <label className="form-label">Full Name *</label>
              <input 
                type="text" 
                required 
                className="form-input" 
                placeholder="e.g. Vikram Sharma"
                value={formData.name}
                onChange={(e) => setFormData({ ...formData, name: e.target.value })}
              />
            </div>

            <div>
              <label className="form-label">Work Email *</label>
              <input 
                type="email" 
                required 
                className="form-input" 
                placeholder="vikram@company.com"
                value={formData.email}
                onChange={(e) => setFormData({ ...formData, email: e.target.value })}
              />
            </div>

            <div>
              <label className="form-label">Phone / WhatsApp Number *</label>
              <input 
                type="tel" 
                required 
                className="form-input" 
                placeholder="+91 98765 43210"
                value={formData.phone}
                onChange={(e) => setFormData({ ...formData, phone: e.target.value })}
              />
            </div>

            <div>
              <label className="form-label">Company Website</label>
              <input 
                type="url" 
                className="form-input" 
                placeholder="https://company.com"
                value={formData.website}
                onChange={(e) => setFormData({ ...formData, website: e.target.value })}
              />
            </div>

            <div>
              <label className="form-label">Focus Service Area</label>
              <select 
                className="form-input"
                value={formData.service}
                onChange={(e) => setFormData({ ...formData, service: e.target.value })}
              >
                <option value="Digital Marketing & PPC">Digital Marketing & PPC</option>
                <option value="SEO & Organic Growth">SEO & Organic Growth</option>
                <option value="Social Media & Meta Ads">Social Media & Meta Ads</option>
                <option value="Web & Landing Page Dev">Web & Landing Page Dev</option>
                <option value="CRO & A/B Testing">CRO & A/B Testing</option>
              </select>
            </div>

            <button type="submit" className="btn btn-primary" style={{ width: '100%', padding: '14px', marginTop: '8px' }}>
              Confirm Audit Schedule <Send size={16} />
            </button>

          </form>
        )}

      </div>
    </div>
  );
}
