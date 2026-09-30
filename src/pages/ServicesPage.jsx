import React, { useState, useEffect } from 'react';
import { useParams, useNavigate, Link } from 'react-router-dom';
import { Box, ChevronDown, CheckCircle2, Plus, Minus, ArrowRight } from 'lucide-react';
import servicesData from '../data/services_data.json';
import styles from './ServicesPage.module.css';
import MoltenMetal from '../components/MoltenMetal';

// ---------------------------------------------------------
// REUSABLE COMPONENTS
// ---------------------------------------------------------

const BadgeChip = ({ text }) => (
  <span className={styles.badge}>{text}</span>
);

const CtaBanner = ({ cta, onCtaClick }) => (
  <div className={styles.ctaBanner}>
    <div className={styles.container} style={{ position: 'relative', zIndex: 1 }}>
      <h2 className={styles.ctaTitle}>{cta.title}</h2>
      <p className={styles.ctaSubtitle}>{cta.subtitle}</p>
      <button onClick={onCtaClick} className={styles.ctaBtn}>
        {cta.button}
      </button>
    </div>
  </div>
);

const FaqAccordion = ({ faqs, categoryTitle }) => {
  const [openIdx, setOpenIdx] = useState(null);

  if (!faqs || faqs.length === 0) return null;

  return (
    <div className={styles.faqSection}>
      <div className={styles.container}>
        <h2 className={styles.faqTitle}>{categoryTitle} — Frequently Asked Questions</h2>
        <div className={styles.faqList}>
          {faqs.map((faq, idx) => (
            <div key={idx} className={styles.faqItem}>
              <button
                className={styles.faqBtn}
                aria-expanded={openIdx === idx}
                onClick={() => setOpenIdx(openIdx === idx ? null : idx)}
              >
                {faq.q}
                {openIdx === idx ? <Minus size={20} /> : <Plus size={20} />}
              </button>
              <div className={`${styles.faqAnswer} ${openIdx === idx ? styles.faqAnswerOpen : ''}`}>
                {faq.a}
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

const ServiceCard = ({ service, onCtaClick }) => {
  return (
    <div className={styles.card}>
      {/* Left Column */}
      <div className={styles.cardLeft}>
        <div className={styles.iconBox}>
          <Box size={22} />
        </div>
        <h3 className={styles.cardTitle}>{service.title}</h3>
        <p className={styles.cardTagline}>{service.tagline}</p>
      </div>

      {/* Right Column */}
      <div className={styles.cardRight}>
        <p className={styles.intro}>{service.intro}</p>
        
        <div className={styles.deliverablesBox}>
          <div className={styles.deliverablesTitle}>What We Deliver</div>
          <ul className={styles.deliverablesList}>
            {service.deliverables.map((item, idx) => (
              <li key={idx}>
                <CheckCircle2 size={16} className={styles.checkIcon} />
                <span>{item}</span>
              </li>
            ))}
          </ul>
        </div>

        <div className={styles.closingWrapper}>
          <p className={styles.closing}>{service.closing}</p>
        </div>
        
        <button onClick={onCtaClick} className={styles.cardBtn}>
          {service.cta || 'Get Started'} <ArrowRight size={16} />
        </button>
      </div>
    </div>
  );
};

const ServiceGroup = ({ groupName, services, onCtaClick }) => {
  return (
    <div style={{ marginBottom: '24px' }}>
      {groupName && <h3 className={styles.groupHeader}>{groupName}</h3>}
      <div className={styles.servicesGrid}>
        {services.map((svc, idx) => (
          <ServiceCard key={idx} service={svc} onCtaClick={onCtaClick} />
        ))}
      </div>
    </div>
  );
};



// ---------------------------------------------------------
// MAIN PAGE
// ---------------------------------------------------------

export default function ServicesPage() {
  const { id } = useParams();
  const navigate = useNavigate();
  const [openCardIndex, setOpenCardIndex] = useState(0); // Open first card by default

  // Sync with URL
  const categories = servicesData.categories;
  const activeCategory = categories.find(c => c.id === id) || categories[0];

  useEffect(() => {
    // If no ID or invalid ID, redirect to first
    if (!categories.find(c => c.id === id)) {
      navigate(`/services/${categories[0].id}`, { replace: true });
    } else {
      setOpenCardIndex(0); // Reset accordion on tab switch
    }
  }, [id, categories, navigate]);

  const handleCtaClick = () => {
    navigate('/contact');
    window.scrollTo(0, 0);
  };

  // Group services if they have groups
  const renderServices = () => {
    if (activeCategory.groups && activeCategory.groups.length > 0) {
      return activeCategory.groups.map(groupName => {
        const groupServices = activeCategory.services.filter(s => s.group === groupName);
        if (groupServices.length === 0) return null;
        return (
          <ServiceGroup 
            key={groupName}
            groupName={groupName}
            services={groupServices}
            onCtaClick={handleCtaClick}
          />
        );
      });
    } else {
      return (
        <ServiceGroup
          services={activeCategory.services}
          onCtaClick={handleCtaClick}
        />
      );
    }
  };

  return (
    <div className={styles.page}>

      {/* Full-Width Hero Banner */}
      <section className={styles.pageHero}>
        <MoltenMetal
          color1="#d4a246"
          color2="#ca8a04"
          color3="#a16207"
          backgroundColor="#1a1a1a"
          speed={0.25}
          scale={4}
          glow={1.4}
          opacity={0.5}
          mouseInteraction={true}
          lightMode={false}
        />
        <div className={styles.pageHeroOverlay} />
        <div className={styles.pageHeroContent}>
          <p className={styles.pageHeroLabel}>OUR SERVICES</p>
          <h1 className={styles.pageHeroTitle}>
            {activeCategory.heroTitle.split(/(&|and)/i).map((part, i) =>
              part.toLowerCase() === '&' || part.toLowerCase() === 'and' ?
                part : <span key={i} className={i === 2 ? styles.pageHeroHighlight : ''}>{part}</span>
            )}
          </h1>
        </div>
      </section>




      <div className={styles.container}>

        {/* Services List */}
        <div>
          {renderServices()}
        </div>

      </div>

      {/* FAQs */}
      <FaqAccordion faqs={activeCategory.faqs} categoryTitle={activeCategory.title} />

      {/* CTA */}
      <CtaBanner cta={activeCategory.finalCta} onCtaClick={handleCtaClick} />

    </div>
  );
}
