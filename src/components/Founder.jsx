import React from 'react';

export default function Founder() {
  return (
    <section className="section" id="founder" aria-labelledby="founderTitle">
      <div className="wrap founder">
        <div className="mono" role="img" aria-label="Moh Zunaid, Founder of Prime Scale Media">
          <span className="initials" aria-hidden="true">MZ</span>
          <span className="who" aria-hidden="true">
            Moh Zunaid
            <span>Founder, Prime Scale Media</span>
          </span>
        </div>
        <div>
          <h2 className="h2" id="founderTitle">Work directly with the founder</h2>
          <caption></caption>
          <blockquote>
            “Every business deserves marketing it can understand. We keep it simple: find what brings you customers, do more of it, and show you the numbers every month.”
          </blockquote>
          <ul className="promises">
            <li>
              <strong>You talk to the founder</strong>
              <span>Not a sales executive who hands you off after signing.</span>
            </li>
            <li>
              <strong>Reports in plain language</strong>
              <span>Calls, enquiries and sales, not just likes.</span>
            </li>
            <li>
              <strong>Everything stays in your name</strong>
              <span>Your ad accounts, pages and content belong to you.</span>
            </li>
            <li>
              <strong>Meet us in Dwarka</strong>
              <span>Prefer face to face? Drop by Gali no 5, Dwarka sector 7.</span>
            </li>
          </ul>
        </div>
      </div>
    </section>
  );
}
