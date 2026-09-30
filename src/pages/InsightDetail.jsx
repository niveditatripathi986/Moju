import React, { useEffect } from 'react';
import { useParams, Link } from 'react-router-dom';
import { insightsData } from './Insights';

export default function InsightDetail() {
  const { id } = useParams();
  const post = insightsData.find(p => p.id === id) || insightsData[0];

  useEffect(() => {
    window.scrollTo(0, 0);
  }, [id]);

  return (
    <main style={{ backgroundColor: 'var(--white)', minHeight: '100vh', paddingTop: '120px', paddingBottom: '120px', fontFamily: 'var(--font-sans)', color: 'var(--dark)' }}>
      <div className="container" style={{ maxWidth: '800px', margin: '0 auto', padding: '0 24px' }}>
        
        {/* Breadcrumb & Category */}
        <div style={{ display: 'flex', alignItems: 'center', gap: '8px', fontSize: '0.8rem', color: 'rgba(57,55,56,0.6)', marginBottom: '24px', fontWeight: 600, textTransform: 'uppercase', letterSpacing: '0.05em' }}>
          <Link to="/insights" style={{ color: 'rgba(57,55,56,0.6)', textDecoration: 'none' }}>Insights</Link>
          <span>/</span>
          <span style={{ color: 'var(--orange)' }}>{post.category}</span>
        </div>

        {/* Title */}
        <h1 style={{ fontSize: 'clamp(2.2rem, 5vw, 3.5rem)', fontWeight: 900, lineHeight: 1.1, marginBottom: '48px', letterSpacing: '-0.02em', color: 'var(--dark)' }}>
          {post.title}
        </h1>

        {/* Featured Image */}
        <div style={{ width: '100%', borderRadius: '16px', overflow: 'hidden', marginBottom: '48px', border: '1px solid rgba(57,55,56,0.1)' }}>
          <img src={post.image} alt={post.title} style={{ width: '100%', height: 'auto', display: 'block' }} />
        </div>

        {/* Article Content (Mocked) */}
        <article style={{ fontSize: '1.1rem', lineHeight: 1.8, color: 'rgba(57,55,56,0.85)' }}>
          <p style={{ marginBottom: '24px' }}>
            {post.desc} This is a simulated article body meant to reflect the layout of the detailed insights page. In the real world, this content would be fetched from a headless CMS or markdown files.
          </p>
          <p style={{ marginBottom: '24px' }}>
            Many businesses assume they should just do what their competitors are doing, but this leads to a homogenization of strategy that drives up customer acquisition costs and suppresses margins. The real growth happens when you identify the structural inefficiencies in your market and exploit them.
          </p>
          
          <h2 style={{ fontSize: '1.8rem', fontWeight: 800, color: 'var(--dark)', margin: '48px 0 24px 0' }}>The Core Problem with Standard Strategies</h2>
          <p style={{ marginBottom: '24px' }}>
            When you rely on out-of-the-box templates and generic best practices, you are fighting a battle of attrition. Your only lever is to outspend the competition, which is rarely a sustainable strategy.
          </p>

          <blockquote style={{ 
            borderLeft: '4px solid var(--orange)', paddingLeft: '24px', margin: '40px 0', 
            fontFamily: 'var(--font-serif)', fontStyle: 'italic', fontSize: '1.5rem', color: 'var(--dark)'
          }}>
            "If your strategy can be copied by a competitor in a weekend, it's not a strategy. It's a tactic with an expiration date."
          </blockquote>

          <h3 style={{ fontSize: '1.4rem', fontWeight: 700, margin: '40px 0 16px 0', color: 'var(--dark)' }}>Key Takeaways</h3>
          <ul style={{ paddingLeft: '24px', marginBottom: '48px', display: 'flex', flexDirection: 'column', gap: '12px' }}>
            <li>Focus on unit economics over vanity metrics.</li>
            <li>Build proprietary assets (data, brand, custom software) that cannot be easily replicated.</li>
            <li>Align your marketing and sales teams under a unified revenue goal.</li>
          </ul>

          <h2 style={{ fontSize: '1.8rem', fontWeight: 800, color: 'var(--dark)', margin: '48px 0 24px 0' }}>Frequently Asked Questions</h2>
          <div style={{ display: 'flex', flexDirection: 'column', gap: '16px', marginBottom: '48px' }}>
            {[
              "How long does it take to see results?",
              "What is the average ROI for this approach?",
              "Do we need an in-house team to manage this?"
            ].map((faq, i) => (
              <div key={i} style={{ padding: '20px', border: '1px solid rgba(57,55,56,0.1)', borderRadius: '12px', display: 'flex', justifyContent: 'space-between', cursor: 'pointer' }}>
                <strong style={{ fontSize: '1rem', color: 'var(--dark)' }}>{faq}</strong>
                <span style={{ color: 'var(--orange)' }}>+</span>
              </div>
            ))}
          </div>
          
          <div style={{ backgroundColor: 'var(--cream)', border: '1px solid rgba(57,55,56,0.1)', borderRadius: '16px', padding: '32px', marginBottom: '64px' }}>
             <h3 style={{ fontSize: '1.5rem', fontWeight: 800, margin: '0 0 16px 0', color: 'var(--dark)' }}>The Bottom Line</h3>
             <p style={{ margin: 0, fontSize: '1.05rem', color: 'rgba(57,55,56,0.7)' }}>
               Strategic differentiation isn't a luxury; it's a survival requirement. By rethinking your approach to acquisition, retention, and operations, you can build a moat that protects your margins for years to come.
             </p>
          </div>

          {/* Author Bio */}
          <div style={{ display: 'flex', gap: '24px', alignItems: 'center', borderTop: '1px solid rgba(57,55,56,0.1)', paddingTop: '40px' }}>
            <img src="https://images.unsplash.com/photo-1560250097-0b93528c311a?auto=format&fit=crop&w=150&q=80" alt={post.author} style={{ width: '80px', height: '80px', borderRadius: '50%', objectFit: 'cover' }} />
            <div>
              <div style={{ fontSize: '0.8rem', color: 'var(--orange)', textTransform: 'uppercase', letterSpacing: '0.1em', fontWeight: 700, marginBottom: '4px' }}>Written By</div>
              <h4 style={{ fontSize: '1.2rem', fontWeight: 800, margin: '0 0 4px 0', color: 'var(--dark)' }}>{post.author}</h4>
              <p style={{ margin: 0, fontSize: '0.9rem', color: 'rgba(57,55,56,0.6)' }}>Founder & CEO at Hindustan Marketing Media</p>
            </div>
          </div>

        </article>

      </div>
    </main>
  );
}
