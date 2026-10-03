import React, { useEffect, useState } from 'react';
import { BookOpen, Grid, Megaphone, Palette, Cpu, Smartphone, Search, ArrowRight } from 'lucide-react';
import blogHeroImage from '../assets/af59ac17-3d6d-47a4-aff2-a7c3132624bc.png';

const blogPosts = [
  {
    id: 1,
    title: 'Mobile App Development: What Real Customers Have to Say',
    excerpt: 'Discover key insights, real experiences, and expert opinions on mobile app development in today\'s digital world.',
    category: 'MOBILE APP',
    tags: ['DEV, MOBILE'],
    image: 'https://images.unsplash.com/photo-1512941937669-90a1b58e7e9c?auto=format&fit=crop&q=80&w=800',
  },
  {
    id: 2,
    title: "Rookie Mistakes You're Making With Your App Development",
    excerpt: 'Avoid common pitfalls and build better, more scalable apps with these expert-backed tips.',
    category: 'MOBILE APP',
    tags: ['DEV, MISTAKES'],
    image: 'https://images.unsplash.com/photo-1522071820081-009f0129c71c?auto=format&fit=crop&q=80&w=800',
  },
  {
    id: 3,
    title: 'Things to Look for When Comparing Digital Marketing Alternatives',
    excerpt: 'A comprehensive guide to selecting the right marketing strategies to fuel your business growth.',
    category: 'DIGITAL MARKETING',
    tags: ['MARKETING'],
    image: 'https://images.unsplash.com/photo-1460925895917-afdab827c52f?auto=format&fit=crop&q=80&w=800',
  },
  {
    id: 4,
    title: '5 Stand-out Features of AI Automation You Should Know',
    excerpt: 'Explore the cutting-edge features of AI automation that can revolutionize your operational efficiency.',
    category: 'AI & AUTOMATION',
    tags: ['AI, TECH'],
    image: 'https://images.unsplash.com/photo-1555255707-c07966088b7b?auto=format&fit=crop&q=80&w=800',
  },
  {
    id: 5,
    title: "Design: Pros and Cons They Don't Tell You",
    excerpt: 'An honest look at the benefits and challenges of modern UI/UX design practices.',
    category: 'DESIGN',
    tags: ['UI/UX, CREATIVE'],
    image: 'https://images.unsplash.com/photo-1561070791-2526d30994b5?auto=format&fit=crop&q=80&w=800',
  },
  {
    id: 6,
    title: 'How Much Should I Spend on Marketing?',
    excerpt: 'Learn how to budget effectively and maximize your return on investment in digital marketing.',
    category: 'DIGITAL MARKETING',
    tags: ['BUDGET, ROI'],
    image: 'https://images.unsplash.com/photo-1556761175-4b46a572b786?auto=format&fit=crop&q=80&w=800',
  },
  {
    id: 7,
    title: 'Real Customer Reviews You Need to See',
    excerpt: 'See what clients are saying about our tailored digital marketing and design solutions.',
    category: 'DIGITAL MARKETING',
    tags: ['REVIEWS'],
    image: 'https://images.unsplash.com/photo-1573164713988-8665fc963095?auto=format&fit=crop&q=80&w=800',
  },
  {
    id: 8,
    title: 'How AI is Changing the Landscape of Business',
    excerpt: 'Discover the future of enterprise and how AI is driving unprecedented innovation.',
    category: 'AI & AUTOMATION',
    tags: ['AI, FUTURE'],
    image: 'https://images.unsplash.com/photo-1485827404703-89b55fcc595e?auto=format&fit=crop&q=80&w=800',
  },
  {
    id: 9,
    title: 'Designing for User Experience in 2026',
    excerpt: 'Stay ahead of the curve with these emerging design trends and user experience principles.',
    category: 'DESIGN',
    tags: ['UX, TRENDS'],
    image: 'https://images.unsplash.com/photo-1561070791-36c11767b26a?auto=format&fit=crop&q=80&w=800',
  },
];

const categoriesData = [
  { id: 'ALL', label: 'All Posts', icon: Grid },
  { id: 'DIGITAL MARKETING', label: 'Digital Marketing', icon: Megaphone },
  { id: 'DESIGN', label: 'Design', icon: Palette },
  { id: 'AI & AUTOMATION', label: 'AI & Automation', icon: Cpu },
  { id: 'MOBILE APP', label: 'Mobile App', icon: Smartphone },
];

export default function BlogPage() {
  const [filter, setFilter] = useState('ALL');
  const [search, setSearch] = useState('');

  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  const filteredPosts = blogPosts.filter(post => {
    const matchesFilter = filter === 'ALL' || post.category === filter;
    const matchesSearch = post.title.toLowerCase().includes(search.toLowerCase()) || post.excerpt.toLowerCase().includes(search.toLowerCase());
    return matchesFilter && matchesSearch;
  });

  return (
    <main style={{ backgroundColor: 'var(--cream)', minHeight: '100vh', paddingTop: '120px', paddingBottom: '80px', fontFamily: 'var(--font-sans)', color: 'var(--dark)' }}>
      <div className="container" style={{ maxWidth: '1200px', margin: '0 auto', padding: '0 24px' }}>
        
        {/* Hero Section */}
        <div style={{ display: 'flex', flexWrap: 'wrap', alignItems: 'center', justifyContent: 'space-between', marginBottom: '60px', gap: '40px' }}>
          <div style={{ flex: '1 1 600px', maxWidth: '800px' }}>
            <h1 className="blog-hero-heading" style={{ fontFamily: 'var(--font-sans)', fontSize: 'clamp(2.2rem, 4.5vw, 4.2rem)', fontWeight: 900, letterSpacing: '-0.03em', lineHeight: 1.1, marginBottom: '16px', color: 'var(--dark)' }}>
              Ideas, Insights & <br />
              Stories That Shape <br />
              <span style={{ fontFamily: 'var(--font-serif)', fontStyle: 'italic', fontWeight: 500, fontSize: 'clamp(2.5rem, 5vw, 4.6rem)', letterSpacing: '-0.02em', display: 'inline-block', marginTop: '4px' }}>
                Digital <span className="serif-italic" style={{ color: 'var(--orange)' }}>Growth.</span>
              </span>
            </h1>
            <p style={{ fontFamily: 'var(--font-sans)', fontSize: '1.1rem', color: 'rgba(57,55,56,0.6)', lineHeight: 1.6, maxWidth: '400px', fontWeight: 500 }}>
              Insights, strategies, and updates from the Hindustan Marketing Media team.
            </p>
          </div>
          
          <div style={{ flex: '1 1 500px', position: 'relative' }}>
            <img src={blogHeroImage} alt="Blog Hero Illustration" style={{ width: '100%', height: 'auto', objectFit: 'contain' }} />
          </div>
        </div>

        {/* Filters Bar */}
        <div className="filters-container" style={{ display: 'flex', flexWrap: 'wrap', alignItems: 'center', gap: '12px', marginBottom: '48px' }}>
          {categoriesData.map(cat => {
            const Icon = cat.icon;
            const isActive = filter === cat.id;
            return (
              <button 
                key={cat.id}
                onClick={() => setFilter(cat.id)}
                style={{
                  display: 'flex',
                  alignItems: 'center',
                  gap: '8px',
                  padding: '12px 20px',
                  borderRadius: '9999px',
                  border: isActive ? 'none' : '1px solid rgba(57,55,56,0.1)',
                  backgroundColor: isActive ? 'var(--dark)' : 'var(--white)',
                  color: isActive ? 'var(--white)' : 'var(--dark)',
                  fontSize: '0.85rem',
                  fontWeight: 600,
                  cursor: 'pointer',
                  transition: 'all 0.2s ease',
                  boxShadow: isActive ? '0 4px 12px rgba(0,0,0,0.1)' : 'none',
                  whiteSpace: 'nowrap',
                  flexShrink: 0,
                  height: '48px'
                }}
              >
                <Icon size={16} />
                {cat.label}
                {isActive && cat.id === 'ALL' && <ArrowRight size={16} style={{ marginLeft: '4px' }} />}
              </button>
            )
          })}
          
          <div className="search-container" style={{ display: 'flex', alignItems: 'center', gap: '8px', padding: '12px 20px', borderRadius: '9999px', border: '1px solid rgba(57,55,56,0.1)', backgroundColor: 'transparent', marginLeft: 'auto', flex: '1 1 250px', maxWidth: '350px', height: '48px' }}>
            <Search size={18} color="rgba(57,55,56,0.5)" />
            <input 
              type="text" 
              placeholder="Search articles..." 
              value={search}
              onChange={(e) => setSearch(e.target.value)}
              style={{ border: 'none', background: 'transparent', outline: 'none', width: '100%', fontSize: '0.85rem', color: 'var(--dark)', fontFamily: 'inherit' }}
            />
          </div>
        </div>

        {/* Posts Grid */}
        <div className="blog-grid" style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fill, minmax(320px, 1fr))', gap: '32px' }}>
          {filteredPosts.map(post => (
            <div key={post.id} style={{ display: 'flex', flexDirection: 'column', backgroundColor: 'var(--white)', borderRadius: '24px', overflow: 'hidden', cursor: 'pointer', boxShadow: '0 4px 20px rgba(57,55,56,0.05)', transition: 'transform 0.3s ease, box-shadow 0.3s ease' }} className="blog-card">
              <div style={{ position: 'relative', aspectRatio: '16/9', overflow: 'hidden' }}>
                <img src={post.image} alt={post.title} style={{ width: '100%', height: '100%', objectFit: 'cover', transition: 'transform 0.5s ease' }} />
                
                {/* Tag Overlay */}
                <div style={{ position: 'absolute', top: '20px', left: '20px', backgroundColor: 'var(--yellow)', padding: '6px 14px', borderRadius: '9999px', fontSize: '0.75rem', fontWeight: 800, letterSpacing: '0.1em', color: 'var(--dark)', textTransform: 'uppercase' }}>
                  {post.tags[0]}
                </div>
              </div>
              
              <div style={{ padding: '32px' }}>
                <h3 style={{ fontSize: '1.4rem', fontWeight: 800, lineHeight: 1.3, color: 'var(--dark)', marginBottom: '12px' }}>
                  {post.title}
                </h3>
                <p style={{ fontSize: '1rem', color: 'rgba(57,55,56,0.6)', lineHeight: 1.6 }}>
                  {post.excerpt}
                </p>
              </div>
            </div>
          ))}
        </div>

      </div>

      <style>{`
        .blog-hero-heading {
          white-space: nowrap;
        }
        .blog-card:hover {
          transform: translateY(-5px);
          box-shadow: 0 12px 30px rgba(57,55,56,0.08) !important;
        }
        .blog-card:hover img {
          transform: scale(1.05);
        }
        @media (max-width: 768px) {
          .blog-hero-heading {
            white-space: normal !important;
            font-size: clamp(2rem, 8vw, 2.8rem) !important;
          }
          .blog-hero-heading span {
            font-size: clamp(2.4rem, 10vw, 3.2rem) !important;
          }
          .filters-container {
            flex-wrap: nowrap !important;
            overflow-x: auto;
            padding-bottom: 8px;
            -webkit-overflow-scrolling: touch;
          }
          .filters-container::-webkit-scrollbar {
            display: none;
          }
          .search-container {
            margin-left: 0 !important;
            max-width: 100% !important;
            flex: 0 0 100% !important;
          }
          .blog-grid {
            grid-template-columns: 1fr !important;
          }
        }
      `}</style>
    </main>
  );
}
