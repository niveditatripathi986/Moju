import React, { useState, useEffect } from 'react';
import { Routes, Route, useLocation } from 'react-router-dom';
import Header from './components/Header';
import Footer from './components/Footer';
import FloatWa from './components/FloatWa';
import AuditModal from './components/AuditModal';

// Pages
import Home from './pages/Home';
import ServicesPage from './pages/ServicesPage';
import About from './pages/About';
import Insights from './pages/Insights';
import InsightDetail from './pages/InsightDetail';
import BlogPage from './pages/BlogPage';
import ContactPage from './pages/ContactPage';

import PrivacyPolicy from './pages/PrivacyPolicy';
import TermsOfService from './pages/TermsOfService';

export default function App() {
  const [isAuditModalOpen, setIsAuditModalOpen] = useState(false);
  const location = useLocation();

  // Scroll to top on route change
  useEffect(() => {
    window.scrollTo(0, 0);
  }, [location.pathname]);

  const handleOpenAuditModal = () => {
    setIsAuditModalOpen(true);
  };

  return (
    <>
      <a className="skip" href="#main" style={{ position: 'absolute', left: '-999px', top: '10px' }}>
        Skip to content
      </a>

      <Header onOpenAuditModal={handleOpenAuditModal} />

      <Routes>
        <Route path="/" element={<Home onOpenAuditModal={handleOpenAuditModal} />} />
        <Route path="/services" element={<ServicesPage />} />
        <Route path="/services/:id" element={<ServicesPage />} />
        <Route path="/about" element={<About />} />
        <Route path="/insights" element={<Insights />} />
        <Route path="/insights/:id" element={<InsightDetail />} />
        <Route path="/blog" element={<BlogPage />} />
        <Route path="/contact" element={<ContactPage />} />
        <Route path="/privacy-policy" element={<PrivacyPolicy />} />
        <Route path="/terms-of-service" element={<TermsOfService />} />
      </Routes>

      <Footer onOpenAuditModal={handleOpenAuditModal} />
      <FloatWa onOpenAuditModal={handleOpenAuditModal} />
      
      <AuditModal 
        isOpen={isAuditModalOpen} 
        onClose={() => setIsAuditModalOpen(false)} 
      />
    </>
  );
}
