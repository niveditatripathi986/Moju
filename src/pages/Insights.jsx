import React from 'react';
import { Link } from 'react-router-dom';

export const insightsData = [
  {
    id: 'android-first-app-development',
    title: 'Android-First App Development: Why It\'s the Smarter Call for B2B Apps in India and UAE',
    desc: 'Android-first app development offers B2B and enterprise companies in India and UAE better device access and faster ROI compared to iOS-first strategies.',
    category: 'Technology',
    author: 'Vikramaditya Sharma',
    date: '12 Sept 2024',
    image: 'https://images.unsplash.com/photo-1512941937669-90a1b58e7e9c?auto=format&fit=crop&w=800&q=80'
  },
  {
    id: 'local-seo-small-businesses',
    title: 'Local SEO for Small Businesses: The Google Business Profile Fixes Most Companies Miss',
    desc: 'Most local service companies have a Google Business Profile but lose out on revenue because of basic gaps in reviews, categories, and NAP consistency.',
    category: 'Digital Marketing',
    date: '10 Sept 2024',
    author: 'Vikramaditya Sharma',
    image: 'https://images.unsplash.com/photo-1556761175-5973dc0f32e7?auto=format&fit=crop&w=800&q=80'
  },
  {
    id: 'generative-ai-vs-automation',
    title: 'Generative AI vs. Automation: Which One Does Your Business Actually Need?',
    desc: 'Generative AI and rule-based automation solve different business problems. Here is how to tell which one your business actually needs right now.',
    category: 'AI & Automation',
    date: '08 Sept 2024',
    author: 'Vikramaditya Sharma',
    image: 'https://images.unsplash.com/photo-1620712943543-bcc4688e7485?auto=format&fit=crop&w=800&q=80'
  },
  {
    id: 'choosing-software-partner',
    title: 'Choosing a Software Development Partner: In-House, Freelancer, or Agency in 2024',
    desc: 'Software development is a significant investment. We break down the true costs and risks of hiring in-house vs freelancers vs a dedicated agency.',
    category: 'Technology',
    date: '05 Sept 2024',
    author: 'Vikramaditya Sharma',
    image: 'https://images.unsplash.com/photo-1522071820081-009f0129c71c?auto=format&fit=crop&w=800&q=80'
  },
  {
    id: 'digital-marketing-strategy',
    title: 'Digital Marketing Strategy for 2024: Why a Content Calendar Isn\'t a Strategy',
    desc: 'Most B2B marketing strategies are just task lists in disguise. Here is how to build a true growth framework that directly impacts revenue.',
    category: 'Digital Marketing',
    date: '02 Sept 2024',
    author: 'Vikramaditya Sharma',
    image: 'https://images.unsplash.com/photo-1460925895917-afdab827c52f?auto=format&fit=crop&w=800&q=80'
  },
  {
    id: 'business-process-automation',
    title: 'Business Process Automation: What it Actually Takes to Implement it Right',
    desc: 'Why do most automation projects fail? It usually comes down to mapping broken processes instead of fixing them before automating.',
    category: 'AI & Automation',
    date: '28 Aug 2024',
    author: 'Vikramaditya Sharma',
    image: 'https://images.unsplash.com/photo-1518770660439-4636190af475?auto=format&fit=crop&w=800&q=80'
  },
  {
    id: 'why-business-automation-fails',
    title: 'Why Business Automation Projects Fail Before They Start',
    desc: 'Lack of stakeholder buy-in, scope creep, and poor vendor selection are the silent killers of enterprise automation initiatives.',
    category: 'AI & Automation',
    date: '19 Aug 2024',
    author: 'Vikramaditya Sharma',
    image: 'https://images.unsplash.com/photo-1504384308090-c894fdcc538d?auto=format&fit=crop&w=800&q=80'
  },
  {
    id: 'what-business-automation-delivers',
    title: 'What Business Process Automation Actually Delivers',
    desc: 'Beyond just cutting costs—how automation fundamentally shifts human capital towards creative problem solving and strategic growth.',
    category: 'AI & Automation',
    date: '15 Aug 2024',
    author: 'Vikramaditya Sharma',
    image: 'https://images.unsplash.com/photo-1664575198308-3959904fa430?auto=format&fit=crop&w=800&q=80'
  },
  {
    id: 'custom-code-app-development',
    title: 'Custom Code in App Development: What it Costs and What You\'re Buying',
    desc: 'Is custom code always better than no-code? We analyze the total cost of ownership across the lifecycle of mobile applications.',
    category: 'Technology',
    date: '10 Aug 2024',
    author: 'Vikramaditya Sharma',
    image: 'https://images.unsplash.com/photo-1498050108023-c5249f4df085?auto=format&fit=crop&w=800&q=80'
  },
  {
    id: 'why-ai-automation-projects-fail',
    title: 'Why AI Automation Projects Fail (And How to Prevent It)',
    desc: 'Deploying AI isn\'t magic. It requires clean data, clear objectives, and change management. Here is a playbook for successful implementation.',
    category: 'AI & Automation',
    date: '04 Aug 2024',
    author: 'Vikramaditya Sharma',
    image: 'https://images.unsplash.com/photo-1555949963-aa79dcee981c?auto=format&fit=crop&w=800&q=80'
  },
  {
    id: 'app-development-outsourcing-costs',
    title: 'App Development Outsourcing: What it Costs and Where to Go',
    desc: 'A comprehensive guide on evaluating onshore vs offshore agencies, expected hourly rates, and how to protect your intellectual property.',
    category: 'Technology',
    date: '28 Jul 2024',
    author: 'Vikramaditya Sharma',
    image: 'https://images.unsplash.com/photo-1551288049-bebda4e38f71?auto=format&fit=crop&w=800&q=80'
  }
];

export default function Insights() {
  return (
    <main style={{ backgroundColor: 'var(--cream)', minHeight: '100vh', paddingTop: '120px', paddingBottom: '120px', fontFamily: 'var(--font-sans)' }}>
      <div className="container" style={{ maxWidth: '1200px', margin: '0 auto', padding: '0 24px' }}>
        
        {/* Header */}
        <div style={{ marginBottom: '64px' }}>
          <h1 style={{ 
            fontFamily: 'var(--font-serif)', fontStyle: 'italic', fontWeight: 700, 
            fontSize: 'clamp(3rem, 6vw, 4.5rem)', color: 'var(--dark)', margin: '0 0 16px 0', letterSpacing: '-0.02em'
          }}>
            Insights
          </h1>
          <p style={{ fontSize: '1.1rem', color: 'rgba(57,55,56,0.7)', maxWidth: '600px', margin: 0, lineHeight: 1.6 }}>
            Practical, honest perspectives on AI, marketing, technology, and design written for business owners who want clarity, not jargon.
          </p>
        </div>

        {/* Grid */}
        <div style={{ 
          display: 'grid', gridTemplateColumns: 'repeat(auto-fill, minmax(340px, 1fr))', gap: '24px' 
        }}>
          {insightsData.map((post) => (
            <Link to={`/insights/${post.id}`} key={post.id} style={{ textDecoration: 'none' }}>
              <div style={{ 
                backgroundColor: 'var(--white)', border: '1px solid rgba(57,55,56,0.1)',
                borderRadius: '16px', overflow: 'hidden', height: '100%', display: 'flex', flexDirection: 'column',
                transition: 'transform 0.3s ease, box-shadow 0.3s ease'
              }}
              onMouseEnter={(e) => { e.currentTarget.style.transform = 'translateY(-4px)'; e.currentTarget.style.boxShadow = '0 20px 40px rgba(57,55,56,0.06)'; }}
              onMouseLeave={(e) => { e.currentTarget.style.transform = 'none'; e.currentTarget.style.boxShadow = 'none'; }}
              >
                {/* Image */}
                <div style={{ height: '200px', width: '100%', overflow: 'hidden' }}>
                  <img src={post.image} alt={post.title} style={{ width: '100%', height: '100%', objectFit: 'cover' }} />
                </div>
                
                {/* Content */}
                <div style={{ padding: '24px', display: 'flex', flexDirection: 'column', flex: 1 }}>
                  <span style={{ color: 'var(--orange)', fontSize: '0.75rem', fontWeight: 700, letterSpacing: '0.1em', textTransform: 'uppercase', marginBottom: '12px' }}>
                    {post.category}
                  </span>
                  <h3 style={{ color: 'var(--dark)', fontSize: '1.25rem', fontWeight: 800, lineHeight: 1.4, margin: '0 0 12px 0' }}>
                    {post.title}
                  </h3>
                  <p style={{ color: 'rgba(57,55,56,0.7)', fontSize: '0.9rem', lineHeight: 1.6, margin: '0 0 24px 0', flex: 1 }}>
                    {post.desc}
                  </p>
                  
                  {/* Footer */}
                  <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', borderTop: '1px solid rgba(57,55,56,0.1)', paddingTop: '16px' }}>
                    <div style={{ display: 'flex', alignItems: 'center', gap: '8px' }}>
                      <div style={{ width: '24px', height: '24px', borderRadius: '50%', backgroundColor: 'rgba(57,55,56,0.05)', overflow: 'hidden' }}>
                        <img src="https://images.unsplash.com/photo-1560250097-0b93528c311a?auto=format&fit=crop&w=100&q=80" alt={post.author} style={{ width: '100%', height: '100%', objectFit: 'cover' }} />
                      </div>
                      <span style={{ color: 'rgba(57,55,56,0.6)', fontSize: '0.75rem', fontWeight: 600 }}>{post.author}</span>
                    </div>
                    <span style={{ color: 'rgba(57,55,56,0.5)', fontSize: '0.75rem' }}>{post.date}</span>
                  </div>
                </div>
              </div>
            </Link>
          ))}
        </div>

      </div>
    </main>
  );
}
