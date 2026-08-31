import React from 'react';
import { Logo } from './Logo';
import { Phone, MessageCircle, MapPin, ShieldCheck, Heart, ArrowUp } from 'lucide-react';
import { COMPANY_PHONE, COMPANY_PHONE_RAW, WHATSAPP_INTL, COMPANY_AREAS, SERVICES_DATA } from '../data/servicesData';

interface FooterProps {
  onOpenQuote: (serviceName?: string) => void;
}

export const Footer: React.FC<FooterProps> = ({ onOpenQuote }) => {
  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  return (
    <footer className="bg-slate-950 text-slate-400 text-xs font-sans border-t border-white/10 pb-20 sm:pb-8">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 pt-16 pb-12">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-12 gap-10">
          {/* Brand & Mission Column */}
          <div className="lg:col-span-4 space-y-4">
            <div className="bg-white/90 p-2.5 rounded-xl inline-block">
              <Logo size="md" />
            </div>
            <p className="text-slate-300 text-xs sm:text-sm leading-relaxed max-w-sm">
              Professional roofing and waterproofing specialists in Gauteng. Dedicated to protecting your property with durable torch-on systems, seamless gutters, roof coatings, plastering, and repairs.
            </p>
            <div className="flex items-center gap-2 text-amber-400 font-bold text-xs pt-1">
              <ShieldCheck className="w-4 h-4" />
              <span>Protect Your Roof. Protect Your Home.</span>
            </div>
          </div>

          {/* Quick Services Links */}
          <div className="lg:col-span-4 space-y-3">
            <h4 className="text-sm font-black uppercase tracking-wider text-white">
              Our Core Services
            </h4>
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-y-2 gap-x-4">
              {SERVICES_DATA.slice(0, 8).map((s) => (
                <button
                  key={s.id}
                  onClick={() => onOpenQuote(s.title)}
                  className="text-left text-xs text-slate-400 hover:text-sky-300 transition-colors cursor-pointer"
                >
                  &bull; {s.title}
                </button>
              ))}
            </div>
          </div>

          {/* Quick Contact & Areas */}
          <div className="lg:col-span-4 space-y-4">
            <h4 className="text-sm font-black uppercase tracking-wider text-white">
              Direct Contact
            </h4>
            <div className="space-y-2.5">
              <a
                href={`tel:${COMPANY_PHONE_RAW}`}
                className="flex items-center gap-2 text-white hover:text-amber-400 transition-colors font-bold text-sm"
              >
                <Phone className="w-4 h-4 text-amber-400" />
                <span>{COMPANY_PHONE}</span>
              </a>

              <a
                href={`https://wa.me/${WHATSAPP_INTL}?text=${encodeURIComponent(
                  'Hi Interseal, I would like to request a free quote.'
                )}`}
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center gap-2 text-emerald-400 hover:text-emerald-300 transition-colors font-bold text-sm"
              >
                <MessageCircle className="w-4 h-4 fill-emerald-400" />
                <span>WhatsApp Direct (064 038 9839)</span>
              </a>

              <div className="flex items-start gap-2 text-slate-300 text-xs pt-1">
                <MapPin className="w-4 h-4 text-[#0084D6] shrink-0 mt-0.5" />
                <span>{COMPANY_AREAS}</span>
              </div>
            </div>

            <button
              onClick={() => onOpenQuote()}
              className="mt-2 w-full bg-gradient-to-r from-amber-500 to-amber-600 hover:from-amber-600 hover:to-amber-700 text-slate-950 font-black py-2.5 px-4 rounded-xl text-xs shadow-md transition-all cursor-pointer"
            >
              Get Free Quote &amp; Inspection &rarr;
            </button>
          </div>
        </div>

        {/* Bottom Copyright & GitHub Deployment Info */}
        <div className="mt-12 pt-8 border-t border-white/10 flex flex-col sm:flex-row items-center justify-between gap-4 text-[11px] text-slate-300">
          <p>
            &copy; {new Date().getFullYear()} Interseal Waterproofing Services. All Rights Reserved.
          </p>

          <div className="flex items-center gap-4">
            <span className="text-slate-300">
              Live GitHub Pages:{' '}
              <a
                href="https://obsidianstudiodesigns.github.io/Interseal-waterproofing-services"
                target="_blank"
                rel="noopener noreferrer"
                className="text-sky-400 hover:underline"
              >
                obsidianstudiodesigns.github.io/Interseal-waterproofing-services
              </a>
            </span>

            <button
              onClick={scrollToTop}
              className="p-2 bg-white/10 hover:bg-white/20 text-white rounded-lg transition-colors flex items-center gap-1 cursor-pointer"
              aria-label="Back to top"
            >
              <ArrowUp className="w-3.5 h-3.5" />
              <span className="hidden sm:inline">Top</span>
            </button>
          </div>
        </div>
      </div>
    </footer>
  );
};
