import React, { useState } from 'react';

const PLAT = {
  meta:   { label: 'Instagram & Facebook', cpm: 100, ctr: 0.012, conv: 0.06 },
  google: { label: 'Google Search', cpc: 30, ctr: 0.05, conv: 0.08 }
};

const IND = {
  restaurant: { m: 0.8, label: 'restaurant or café' },
  retail:     { m: 1.0, label: 'retail or D2C' },
  coaching:   { m: 1.3, label: 'coaching or education' },
  clinic:     { m: 1.6, label: 'clinic or healthcare' },
  realestate: { m: 2.5, label: 'real estate' },
  services:   { m: 1.1, label: 'local services' }
};

function nice(n) {
  if (n >= 100000) return Math.round(n / 1000) * 1000;
  if (n >= 10000) return Math.round(n / 500) * 500;
  if (n >= 1000) return Math.round(n / 100) * 100;
  if (n >= 100) return Math.round(n / 10) * 10;
  return Math.max(1, Math.round(n));
}

function trim1(x) {
  return String(Math.round(x * 10) / 10);
}

function compact(n) {
  n = nice(n);
  if (n >= 10000000) return trim1(n / 10000000) + ' Cr';
  if (n >= 100000) return trim1(n / 100000) + 'L';
  if (n >= 1000) return trim1(n / 1000) + 'K';
  return String(n);
}

function inr(n) {
  return nice(n).toLocaleString('en-IN');
}

export default function Estimator() {
  const [budget, setBudget] = useState(20000);
  const [platform, setPlatform] = useState('meta');
  const [industry, setIndustry] = useState('services');

  const p = PLAT[platform];
  const ind = IND[industry];
  const s = Math.sqrt(ind.m);

  let views, clicks;
  if (platform === 'meta') {
    views = (budget / (p.cpm * s)) * 1000;
    clicks = views * p.ctr;
  } else {
    clicks = budget / (p.cpc * s);
    views = clicks / p.ctr;
  }

  const leads = (clicks * p.conv) / s;
  const lo = leads * 0.7;
  const hi = leads * 1.3;

  const viewsStr = compact(views * 0.8) + '–' + compact(views * 1.2);
  const clicksStr = compact(clicks * 0.8) + '–' + compact(clicks * 1.2);
  const leadsStr = inr(lo) + '–' + inr(hi);
  const cplStr = '₹' + inr(budget / hi) + '–' + inr(budget / lo);

  const waText = `Hi Prime Scale Media, I tried your ad estimator: ₹${budget.toLocaleString('en-IN')} per month on ${p.label} for a ${ind.label} business. Can we discuss a plan?`;
  const waUrl = 'https://wa.me/917459893697?text=' + encodeURIComponent(waText);

  return (
    <section className="section" id="estimator" aria-labelledby="estTitle">
      <div className="wrap">
        <div className="section-head">
          <h2 id="estTitle">What could your ad budget bring in?</h2>
          <p>Move the slider for a rough idea of what a monthly ad budget can do on Instagram &amp; Facebook or Google.</p>
        </div>
        <div className="est">
          <div className="est-controls">
            <div className="field">
              <label className="field-label" htmlFor="estBudget">Monthly ad budget</label>
              <output className="budget-out" id="estBudgetOut" htmlFor="estBudget">
                ₹{budget.toLocaleString('en-IN')} <small>per month</small>
              </output>
              <input
                className="plain"
                type="range"
                id="estBudget"
                min="5000"
                max="200000"
                step="5000"
                value={budget}
                onChange={(e) => setBudget(Number(e.target.value))}
              />
              <div className="range-ends" aria-hidden="true">
                <span>₹5,000</span>
                <span>₹2,00,000</span>
              </div>
            </div>

            <div className="field">
              <span className="field-label" id="platLabel">Where to advertise</span>
              <div className="seg" role="radiogroup" aria-labelledby="platLabel">
                <label>
                  <input
                    type="radio"
                    name="estPlat"
                    value="meta"
                    checked={platform === 'meta'}
                    onChange={() => setPlatform('meta')}
                  />
                  <span>Instagram &amp; Facebook</span>
                </label>
                <label>
                  <input
                    type="radio"
                    name="estPlat"
                    value="google"
                    checked={platform === 'google'}
                    onChange={() => setPlatform('google')}
                  />
                  <span>Google Search</span>
                </label>
              </div>
            </div>

            <div className="field">
              <label className="field-label" htmlFor="estIndustry">Your industry</label>
              <select
                id="estIndustry"
                value={industry}
                onChange={(e) => setIndustry(e.target.value)}
              >
                <option value="restaurant">Restaurants &amp; cafés</option>
                <option value="retail">Retail &amp; D2C brands</option>
                <option value="coaching">Coaching &amp; education</option>
                <option value="clinic">Clinics &amp; healthcare</option>
                <option value="realestate">Real estate</option>
                <option value="services">Salons, gyms &amp; local services</option>
              </select>
            </div>
          </div>

          <div className="est-results" aria-live="polite">
            <div className="metric">
              <span className="v" id="mViews">{viewsStr}</span>
              <span className="k">Times your ad is seen</span>
            </div>
            <div className="metric">
              <span className="v" id="mClicks">{clicksStr}</span>
              <span className="k">Clicks or profile visits</span>
            </div>
            <div className="metric key">
              <span className="v" id="mLeads">{leadsStr}</span>
              <span className="k">Enquiries (calls, forms, WhatsApp)</span>
            </div>
            <div className="metric">
              <span className="v" id="mCpl">{cplStr}</span>
              <span className="k">Cost per enquiry</span>
            </div>
            <p className="est-note">
              A rough estimate based on typical ad costs in India. Real results depend on your offer, creatives, targeting and season. Ad budget goes to Meta or Google; our management fee is separate.
            </p>
            <a
              className="btn btn-brand est-cta"
              id="estWa"
              href={waUrl}
              target="_blank"
              rel="noopener noreferrer"
            >
              Discuss this budget on WhatsApp
            </a>
          </div>
        </div>
      </div>
    </section>
  );
}
