import React from 'react';

export default function Process() {
  return (
    <section className="section section-alt" id="process" aria-labelledby="processTitle">
      <div className="wrap">
        <div className="section-head">
          <h2 id="processTitle">How we work</h2>
          <p>We call it the Scale Loop: four simple steps, repeated every month, so you always know what we’re doing and why.</p>
        </div>
        <ol className="process">
          <li className="step">
            <span className="num" aria-hidden="true">1</span>
            <h3>Audit</h3>
            <p>We review your Google listing, social pages, website and top competitors, then tell you what’s holding you back.</p>
            <span className="free">Free</span>
          </li>
          <li className="step">
            <span className="num" aria-hidden="true">2</span>
            <h3>Plan</h3>
            <p>A one-page plan: which channels, what content, what budget, and what results to expect.</p>
          </li>
          <li className="step">
            <span className="num" aria-hidden="true">3</span>
            <h3>Launch</h3>
            <p>We set up accounts, create the content and ads, and go live, usually within the first two weeks.</p>
          </li>
          <li className="step">
            <span className="num" aria-hidden="true">4</span>
            <h3>Scale</h3>
            <p>Every month you get a clear report. We keep what works, drop what doesn’t, and put more behind the winners.</p>
          </li>
        </ol>
      </div>
    </section>
  );
}
