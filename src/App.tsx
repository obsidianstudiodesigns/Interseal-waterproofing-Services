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

export default function App() {
  const [isQuoteModalOpen, setIsQuoteModalOpen] = useState(false);
  const [selectedService, setSelectedService] = useState<string | undefined>(undefined);

  const handleOpenQuote = (serviceName?: string) => {
    setSelectedService(serviceName);
    setIsQuoteModalOpen(true);
  };

  const handleCloseQuote = () => {
    setIsQuoteModalOpen(false);
    setSelectedService(undefined);
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

      {/* Footer */}
      <Footer onOpenQuote={handleOpenQuote} />

      {/* Mobile Sticky Bar & Desktop WhatsApp Action */}
      <FloatingCTA onOpenQuote={() => handleOpenQuote()} />

      {/* Interactive Free Quote Request Modal */}
      <QuoteCalculatorModal
        isOpen={isQuoteModalOpen}
        onClose={handleCloseQuote}
        preSelectedService={selectedService}
      />
    </div>
  );
}
