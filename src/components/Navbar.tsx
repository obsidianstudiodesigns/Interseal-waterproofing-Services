import React, { useState, useEffect } from 'react';
import { Logo } from './Logo';
import { Phone, MessageCircle, Menu, X, Shield, Clock, MapPin, ChevronRight, FileText } from 'lucide-react';
import { COMPANY_PHONE, COMPANY_PHONE_RAW, WHATSAPP_INTL, COMPANY_AREAS } from '../data/servicesData';

interface NavbarProps {
  onOpenQuote: (serviceName?: string) => void;
}

export const Navbar: React.FC<NavbarProps> = ({ onOpenQuote }) => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 20) {
        setIsScrolled(true);
      } else {
        setIsScrolled(false);
      }
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const navLinks = [
    { name: 'Services', href: '#services' },
    { name: 'Why Us', href: '#why-us' },
    { name: 'Work Showcase', href: '#showcase' },
    { name: 'Reviews', href: '#reviews' },
    { name: 'FAQ', href: '#faq' },
    { name: 'Contact', href: '#contact' },
  ];

  return (
    <header className="fixed top-0 left-0 right-0 z-50 transition-all duration-300 font-sans">
      {/* Top Notification / Fast Contact Bar */}
      <div className="bg-[#08234D] text-slate-100 text-xs py-1.5 px-4 border-b border-white/10 hidden sm:block">
        <div className="max-w-7xl mx-auto flex justify-between items-center">
          <div className="flex items-center space-x-6">
            <span className="flex items-center gap-1.5 text-amber-300 font-medium">
              <Shield className="w-3.5 h-3.5" /> Guaranteed Workmanship & SABS Materials
            </span>
            <span className="hidden md:flex items-center gap-1.5 text-slate-300">
              <MapPin className="w-3.5 h-3.5 text-sky-400" /> {COMPANY_AREAS}
            </span>
          </div>
          <div className="flex items-center space-x-5">
            <span className="flex items-center gap-1.5 text-slate-300">
              <Clock className="w-3.5 h-3.5 text-sky-400" /> Mon - Sat: 07:00 - 18:00 (24/7 Emergencies)
            </span>
            <a
              id="top-nav-tel-link"
              href={`tel:${COMPANY_PHONE_RAW}`}
              className="flex items-center gap-1 font-bold text-white hover:text-amber-400 transition-colors"
            >
              <Phone className="w-3.5 h-3.5 text-amber-400" /> {COMPANY_PHONE}
            </a>
          </div>
        </div>
      </div>

      {/* Main Navigation Bar */}
      <nav
        className={`transition-all duration-300 ${
          isScrolled
            ? 'bg-white/95 backdrop-blur-md shadow-md py-2.5 border-b border-slate-200'
            : 'bg-white/90 backdrop-blur-sm py-3.5 border-b border-slate-100'
        }`}
      >
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 flex items-center justify-between">
          {/* Logo */}
          <a href="#" className="flex items-center group" aria-label="Interseal Waterproofing Home">
            <Logo size="md" />
          </a>

          {/* Desktop Navigation Links */}
          <div className="hidden lg:flex items-center space-x-8 text-sm font-semibold text-slate-700">
            {navLinks.map((link) => (
              <a
                key={link.name}
                href={link.href}
                className="hover:text-[#0084D6] transition-colors relative py-1 after:content-[''] after:absolute after:bottom-0 after:left-0 after:w-0 after:h-0.5 after:bg-[#0084D6] hover:after:w-full after:transition-all"
              >
                {link.name}
              </a>
            ))}
          </div>

          {/* Action CTAs */}
          <div className="hidden sm:flex items-center gap-3">
            {/* WhatsApp Fast Button */}
            <a
              id="nav-whatsapp-btn"
              href={`https://wa.me/${WHATSAPP_INTL}?text=${encodeURIComponent(
                'Hi Interseal, I would like to request a free quote for waterproofing/roofing.'
              )}`}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-2 bg-[#25D366] hover:bg-[#20ba5a] text-white px-3.5 py-2 rounded-lg text-xs md:text-sm font-bold shadow-xs transition-all hover:scale-105 active:scale-95"
            >
              <MessageCircle className="w-4 h-4 fill-white" />
              <span>WhatsApp</span>
            </a>

            {/* Direct Call Button */}
            <a
              id="nav-call-btn"
              href={`tel:${COMPANY_PHONE_RAW}`}
              className="inline-flex items-center gap-1.5 bg-[#0B2F64] hover:bg-[#08234D] text-white px-3.5 py-2 rounded-lg text-xs md:text-sm font-bold shadow-xs transition-all hover:scale-105"
            >
              <Phone className="w-4 h-4 text-amber-400" />
              <span>{COMPANY_PHONE}</span>
            </a>

            {/* Free Quote Modal Trigger */}
            <button
              id="nav-quote-cta"
              onClick={() => onOpenQuote()}
              className="inline-flex items-center gap-1.5 bg-gradient-to-r from-amber-500 to-amber-600 hover:from-amber-600 hover:to-amber-700 text-white font-extrabold px-4 py-2 rounded-lg text-xs md:text-sm shadow-md transition-all hover:shadow-lg active:scale-95 cursor-pointer"
            >
              <FileText className="w-4 h-4" />
              <span>Free Quote</span>
            </button>
          </div>

          {/* Mobile Menu Toggle Button */}
          <div className="flex lg:hidden items-center gap-2">
            <button
              id="nav-mobile-quote-btn"
              onClick={() => onOpenQuote()}
              className="sm:hidden bg-amber-500 text-white text-xs font-bold px-3 py-1.5 rounded-md"
            >
              Quote
            </button>
            <button
              id="mobile-menu-toggle"
              onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
              className="p-2 rounded-lg text-slate-700 hover:bg-slate-100 focus:outline-none"
              aria-label="Toggle menu"
            >
              {isMobileMenuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
            </button>
          </div>
        </div>
      </nav>

      {/* Mobile Drawer Menu */}
      {isMobileMenuOpen && (
        <div className="lg:hidden bg-white border-b border-slate-200 shadow-xl px-4 pt-3 pb-6 animate-in slide-in-from-top duration-200">
          <div className="flex flex-col space-y-3 pb-4 border-b border-slate-100">
            {navLinks.map((link) => (
              <a
                key={link.name}
                href={link.href}
                onClick={() => setIsMobileMenuOpen(false)}
                className="flex items-center justify-between text-base font-semibold text-slate-800 hover:text-[#0084D6] py-2 px-2 rounded-lg hover:bg-slate-50"
              >
                <span>{link.name}</span>
                <ChevronRight className="w-4 h-4 text-slate-400" />
              </a>
            ))}
          </div>

          <div className="pt-4 space-y-2.5">
            <button
              id="mobile-drawer-quote-btn"
              onClick={() => {
                setIsMobileMenuOpen(false);
                onOpenQuote();
              }}
              className="w-full py-3 bg-gradient-to-r from-amber-500 to-amber-600 text-white font-bold rounded-lg shadow-sm flex items-center justify-center gap-2"
            >
              <FileText className="w-5 h-5" />
              Get A Free Quote Today
            </button>

            <div className="grid grid-cols-2 gap-2">
              <a
                id="mobile-drawer-call-btn"
                href={`tel:${COMPANY_PHONE_RAW}`}
                className="py-2.5 bg-[#0B2F64] text-white font-bold text-sm rounded-lg flex items-center justify-center gap-1.5"
              >
                <Phone className="w-4 h-4 text-amber-400" />
                Call Now
              </a>
              <a
                id="mobile-drawer-whatsapp-btn"
                href={`https://wa.me/${WHATSAPP_INTL}?text=${encodeURIComponent(
                  'Hi Interseal, I would like to request a quote.'
                )}`}
                target="_blank"
                rel="noopener noreferrer"
                className="py-2.5 bg-[#25D366] text-white font-bold text-sm rounded-lg flex items-center justify-center gap-1.5"
              >
                <MessageCircle className="w-4 h-4 fill-white" />
                WhatsApp
              </a>
            </div>
          </div>
        </div>
      )}
    </header>
  );
};
