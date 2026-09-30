import React, { useState } from 'react';

const SERVICE_OPTIONS = [
  { value: 'Social media management', label: 'Social media' },
  { value: 'Meta & Google ads', label: 'Meta & Google ads' },
  { value: 'SEO & Google Maps', label: 'SEO & Google Maps' },
  { value: 'Video editing & Reels', label: 'Video & Reels' },
  { value: 'Branding & creatives', label: 'Branding' },
  { value: 'Websites & landing pages', label: 'Website' },
  { value: 'AI marketing & automation', label: 'AI & automation' },
  { value: 'Not sure yet, please suggest', label: 'Not sure, suggest for me' }
];

const BUDGET_OPTIONS = [
  'Under ₹15,000',
  '₹15,000 to ₹40,000',
  '₹40,000 to ₹1,00,000',
  'Above ₹1,00,000',
  'Not decided yet'
];

const GOAL_OPTIONS = [
  { value: 'More calls and enquiries', label: 'More calls and enquiries' },
  { value: 'More online sales', label: 'More online sales' },
  { value: 'Grow followers and brand awareness', label: 'Grow my brand' },
  { value: 'Launching a new business', label: 'Launching something new' }
];

export default function Planner({ selectedServices, toggleService, setSelectedServices }) {
  const [budget, setBudget] = useState('');
  const [goal, setGoal] = useState('');
  const [name, setName] = useState('');
  const [biz, setBiz] = useState('');
  const [phone, setPhone] = useState('');
  const [errorMsg, setErrorMsg] = useState('');
  const [statusMsg, setStatusMsg] = useState('');

  const handleServiceChange = (val) => {
    if (val === 'Not sure yet, please suggest') {
      if (!selectedServices.includes(val)) {
        setSelectedServices(['Not sure yet, please suggest']);
      } else {
        setSelectedServices([]);
      }
    } else {
      let newSvc = selectedServices.filter(s => s !== 'Not sure yet, please suggest');
      if (newSvc.includes(val)) {
        newSvc = newSvc.filter(s => s !== val);
      } else {
        newSvc.push(val);
      }
      setSelectedServices(newSvc);
    }
    setErrorMsg('');
  };

  const getPlanText = (forPreview = false) => {
    const lines = ['Hi Prime Scale Media, I’d like a free marketing audit.', ''];
    lines.push('Name: ' + (name.trim() || (forPreview ? '(add your name)' : '')));
    if (biz.trim()) lines.push('Business: ' + biz.trim());
    lines.push('Services: ' + (selectedServices.length ? selectedServices.join(', ') : (forPreview ? '(pick at least one)' : '')));
    if (budget) lines.push('Monthly budget: ' + budget);
    if (goal) lines.push('Main goal: ' + goal);
    if (phone.trim()) lines.push('Phone: ' + phone.trim());
    return lines.join('\n');
  };

  const validate = () => {
    if (!name.trim()) {
      return { msg: 'Add your name so we know who to reply to.', field: 'pName' };
    }
    if (selectedServices.length === 0) {
      return { msg: 'Pick at least one service, or choose “Not sure, suggest for me”.', field: 'svc' };
    }
    if (phone.trim()) {
      const digits = phone.trim().replace(/\D/g, '');
      if (digits.length < 10 || digits.length > 12) {
        return { msg: 'Enter a 10-digit mobile number, or leave the phone field blank.', field: 'pPhone' };
      }
    }
    return null;
  };

  const handleSendWa = (e) => {
    setStatusMsg('');
    const err = validate();
    if (err) {
      e.preventDefault();
      setErrorMsg(err.msg);
      const el = document.getElementById(err.field);
      if (el) el.focus();
      return;
    }
    setErrorMsg('');
    const text = getPlanText(false);
    const url = 'https://wa.me/917459893697?text=' + encodeURIComponent(text);
    window.open(url, '_blank', 'noopener,noreferrer');
    setStatusMsg('WhatsApp opens with your plan filled in. Tap send to reach us.');
  };

  const handleSendMail = (e) => {
    setStatusMsg('');
    const err = validate();
    if (err) {
      e.preventDefault();
      setErrorMsg(err.msg);
      const el = document.getElementById(err.field);
      if (el) el.focus();
      return;
    }
    setErrorMsg('');
    const text = getPlanText(false);
    const subject = 'Free marketing audit request: ' + (biz.trim() || name.trim());
    const mailto = `mailto:market09000@gmail.com?subject=${encodeURIComponent(subject)}&body=${encodeURIComponent(text)}`;
    window.location.href = mailto;
    setStatusMsg('Your email app opens with the plan filled in. Hit send to reach us at market09000@gmail.com.');
  };

  return (
    <section className="section section-alt" id="plan" aria-labelledby="planTitle">
      <div className="wrap">
        <div className="section-head">
          <h2 id="planTitle">Build your growth plan</h2>
          <p>Choose what you need and send it to us on WhatsApp in one tap. We’ll reply with a free audit and a clear quote.</p>
        </div>
        <div className="planner">
          <div className="planner-form" id="plannerForm">
            <fieldset>
              <legend>What do you need help with?</legend>
              <div className="chips">
                {SERVICE_OPTIONS.map((opt, idx) => {
                  const isChecked = selectedServices.includes(opt.value);
                  return (
                    <label key={idx} className="chip">
                      <input
                        type="checkbox"
                        name="svc"
                        id={idx === 0 ? "svc" : undefined}
                        value={opt.value}
                        checked={isChecked}
                        onChange={() => handleServiceChange(opt.value)}
                      />
                      <span>{opt.label}</span>
                    </label>
                  );
                })}
              </div>
            </fieldset>

            <fieldset>
              <legend>Monthly marketing budget</legend>
              <div className="chips">
                {BUDGET_OPTIONS.map((bOpt, idx) => (
                  <label key={idx} className="chip">
                    <input
                      type="radio"
                      name="budget"
                      value={bOpt}
                      checked={budget === bOpt}
                      onChange={() => { setBudget(bOpt); setErrorMsg(''); }}
                    />
                    <span>{bOpt === 'Not decided yet' ? 'Not decided' : bOpt}</span>
                  </label>
                ))}
              </div>
            </fieldset>

            <fieldset>
              <legend>Your main goal</legend>
              <div className="chips">
                {GOAL_OPTIONS.map((gOpt, idx) => (
                  <label key={idx} className="chip">
                    <input
                      type="radio"
                      name="goal"
                      value={gOpt.value}
                      checked={goal === gOpt.value}
                      onChange={() => { setGoal(gOpt.value); setErrorMsg(''); }}
                    />
                    <span>{gOpt.label}</span>
                  </label>
                ))}
              </div>
            </fieldset>

            <fieldset>
              <legend>About you</legend>
              <div className="inputs">
                <div>
                  <label htmlFor="pName">Your name</label>
                  <input
                    className="input"
                    id="pName"
                    type="text"
                    autoComplete="name"
                    placeholder="e.g. Priya Sharma"
                    value={name}
                    onChange={(e) => { setName(e.target.value); setErrorMsg(''); }}
                  />
                </div>
                <div>
                  <label htmlFor="pBiz">Business name</label>
                  <input
                    className="input"
                    id="pBiz"
                    type="text"
                    autoComplete="organization"
                    placeholder="e.g. Sharma Dental Care"
                    value={biz}
                    onChange={(e) => setBiz(e.target.value)}
                  />
                </div>
                <div className="full">
                  <label htmlFor="pPhone">Phone number (optional)</label>
                  <input
                    className="input"
                    id="pPhone"
                    type="tel"
                    inputMode="tel"
                    autoComplete="tel"
                    placeholder="10-digit mobile number"
                    value={phone}
                    onChange={(e) => { setPhone(e.target.value); setErrorMsg(''); }}
                  />
                </div>
              </div>
            </fieldset>
          </div>

          <aside className="preview" aria-labelledby="previewTitle">
            <h3 id="previewTitle">Your message</h3>
            <p className="hint">This updates as you choose. Send it on WhatsApp or by email.</p>
            <pre className="preview-text" id="planPreview">
              {getPlanText(true)}
            </pre>
            <div className="preview-actions">
              <button
                className="btn btn-accent"
                id="sendWa"
                type="button"
                onClick={handleSendWa}
              >
                <svg viewBox="0 0 24 24" fill="currentColor" aria-hidden="true">
                  <path d="M12 3C6.5 3 2 6.9 2 11.7c0 2.4 1.1 4.6 3 6.2L4 22l4.6-2.2c1.1.3 2.2.5 3.4.5 5.5 0 10-3.9 10-8.6S17.5 3 12 3z"/>
                </svg>
                Send plan on WhatsApp
              </button>
              <button
                className="btn btn-ghost"
                id="sendMail"
                type="button"
                onClick={handleSendMail}
              >
                Send plan by email
              </button>
            </div>
            <p className="plan-error" id="planError" role="alert" hidden={!errorMsg}>
              {errorMsg}
            </p>
            <p className="plan-status" id="planStatus" aria-live="polite">
              {statusMsg}
            </p>
          </aside>
        </div>
      </div>
    </section>
  );
}
