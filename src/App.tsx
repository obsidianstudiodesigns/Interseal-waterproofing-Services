import React, { useState } from 'react';
import { Navbar } from './components/Navbar';
import { Hero } from './components/Hero';
import { ServicesSection } from './components/ServicesSection';
import { BeforeAfterShowcase } from './components/BeforeAfterShowcase';
import { WhyChooseUs } from './components/WhyChooseUs';
import { Testimonials } from './components/Testimonials';
import { FAQSection } from './components/FAQSection';
import { ContactSection } from './components/ContactSection';
import { Footer } from './components/Footer';
import { FloatingCTA } from './components/FloatingCTA';
import { QuoteCalculatorModal } from './components/QuoteCalculatorModal';
import { LegalModal } from './components/LegalModal';
import { CookieBanner } from './components/CookieBanner';
import { LegalTabKey } from './types';

export default function App() {
  const [isQuoteModalOpen, setIsQuoteModalOpen] = useState(false);
  const [selectedService, setSelectedService] = useState<string | undefined>(undefined);

  // Legal Policies Modal state
  const [isLegalModalOpen, setIsLegalModalOpen] = useState(false);
  const [legalModalTab, setLegalModalTab] = useState<LegalTabKey>('privacy');

  // Cookie banner preference state
  const [forceShowCookieBanner, setForceShowCookieBanner] = useState(false);

  const handleOpenQuote = (serviceName?: string) => {
    setSelectedService(serviceName);
    setIsQuoteModalOpen(true);
  };

  const handleCloseQuote = () => {
    setIsQuoteModalOpen(false);
    setSelectedService(undefined);
  };

  const handleOpenLegal = (tab: LegalTabKey = 'privacy') => {
    setLegalModalTab(tab);
    setIsLegalModalOpen(true);
  };

  const handleCloseLegal = () => {
    setIsLegalModalOpen(false);
  };

  const handleOpenCookiePreferences = () => {
    setForceShowCookieBanner(true);
  };

  const handleCloseForceCookieBanner = () => {
    setForceShowCookieBanner(false);
  };

  return (
    <div className="min-h-screen bg-slate-50 text-slate-900 font-sans flex flex-col selection:bg-sky-500 selection:text-white">
      {/* Navigation Header */}
      <Navbar onOpenQuote={handleOpenQuote} />

      {/* Main Content Sections */}
      <main className="flex-1">
        {/* Photorealistic Hero Section */}
        <Hero onOpenQuote={handleOpenQuote} />

        {/* Simplified & Clean Core Services Grid */}
        <ServicesSection onOpenQuote={handleOpenQuote} />

        {/* Real Workmanship & Transformation Showcase */}
        <BeforeAfterShowcase onOpenQuote={handleOpenQuote} />

        {/* 4 Pillars of Quality & Peace of Mind */}
        <WhyChooseUs onOpenQuote={handleOpenQuote} />

        {/* Customer Reviews & Ratings */}
        <Testimonials />

        {/* Frequently Asked Questions */}
        <FAQSection />

        {/* Direct Contact & Service Areas */}
        <ContactSection />
      </main>

      {/* Footer with Legal Links & POPIA Compliance */}
      <Footer
        onOpenQuote={handleOpenQuote}
        onOpenLegal={handleOpenLegal}
        onOpenCookiePreferences={handleOpenCookiePreferences}
      />

      {/* Mobile Sticky Bar & Desktop WhatsApp Action */}
      <FloatingCTA onOpenQuote={() => handleOpenQuote()} />

      {/* Interactive Free Quote Request Modal */}
      <QuoteCalculatorModal
        isOpen={isQuoteModalOpen}
        onClose={handleCloseQuote}
        preSelectedService={selectedService}
        onOpenLegal={handleOpenLegal}
      />

      {/* Comprehensive South Africa Legal & Compliance Modal (Privacy, POPIA, PAIA, Cookies) */}
      <LegalModal
        isOpen={isLegalModalOpen}
        onClose={handleCloseLegal}
        initialTab={legalModalTab}
      />

      {/* Cookie Consent Banner & Preference Manager */}
      <CookieBanner
        onOpenLegal={handleOpenLegal}
        forceShow={forceShowCookieBanner}
        onCloseForceShow={handleCloseForceCookieBanner}
      />
    </div>
  );
}
