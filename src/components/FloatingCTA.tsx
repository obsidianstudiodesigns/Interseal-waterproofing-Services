import React from 'react';
import { Phone, MessageCircle, FileText } from 'lucide-react';
import { COMPANY_PHONE_RAW, WHATSAPP_INTL } from '../data/servicesData';

interface FloatingCTAProps {
  onOpenQuote: () => void;
}

export const FloatingCTA: React.FC<FloatingCTAProps> = ({ onOpenQuote }) => {
  return (
    <>
      {/* Floating WhatsApp Bubble for Desktop & Tablet */}
      <aside aria-label="Quick contact actions" className="hidden sm:flex fixed bottom-6 right-6 z-40 flex-col items-end gap-3 pointer-events-auto">
        <button
          id="floating-desktop-quote-bubble"
          onClick={onOpenQuote}
          className="flex items-center gap-2 bg-gradient-to-r from-amber-500 to-amber-600 hover:from-amber-600 hover:to-amber-700 text-white font-black px-4 py-2.5 rounded-full shadow-2xl transition-transform hover:scale-105 active:scale-95 cursor-pointer text-xs"
        >
          <FileText className="w-4 h-4" />
          <span>Get Free Quote</span>
        </button>

        <a
          id="floating-desktop-whatsapp-bubble"
          href={`https://wa.me/${WHATSAPP_INTL}?text=${encodeURIComponent(
            'Hi Interseal, I would like to get a free quote for waterproofing/roofing.'
          )}`}
          target="_blank"
          rel="noopener noreferrer"
          className="flex items-center gap-2 bg-[#25D366] hover:bg-[#20ba5a] text-white font-bold p-3.5 rounded-full shadow-2xl transition-transform hover:scale-110 active:scale-95 group"
          aria-label="Chat on WhatsApp"
        >
          <MessageCircle className="w-6 h-6 fill-white" />
          <span className="max-w-0 overflow-hidden whitespace-nowrap group-hover:max-w-xs transition-all duration-300 text-xs font-black pr-1">
            WhatsApp 064 038 9839
          </span>
        </a>
      </aside>

      {/* Sticky Bottom Action Bar for Mobile Screens */}
      <nav aria-label="Mobile quick actions" className="sm:hidden fixed bottom-0 left-0 right-0 z-40 bg-white/95 backdrop-blur-md border-t border-slate-200 px-3 py-2 shadow-2xl">
        <div className="grid grid-cols-3 gap-2">
          <a
            id="mobile-sticky-call"
            href={`tel:${COMPANY_PHONE_RAW}`}
            className="flex flex-col items-center justify-center py-1.5 px-2 bg-[#0B2F64] text-white rounded-xl font-extrabold text-[11px] active:scale-95"
          >
            <Phone className="w-4 h-4 text-amber-400 mb-0.5" />
            <span>Call Now</span>
          </a>

          <a
            id="mobile-sticky-whatsapp"
            href={`https://wa.me/${WHATSAPP_INTL}?text=${encodeURIComponent(
              'Hi Interseal, I would like to get a free quote.'
            )}`}
            target="_blank"
            rel="noopener noreferrer"
            className="flex flex-col items-center justify-center py-1.5 px-2 bg-[#25D366] text-white rounded-xl font-extrabold text-[11px] active:scale-95"
          >
            <MessageCircle className="w-4 h-4 fill-white mb-0.5" />
            <span>WhatsApp</span>
          </a>

          <button
            id="mobile-sticky-quote"
            onClick={onOpenQuote}
            className="flex flex-col items-center justify-center py-1.5 px-2 bg-gradient-to-r from-amber-500 to-amber-600 text-slate-950 font-black rounded-xl text-[11px] active:scale-95 cursor-pointer"
          >
            <FileText className="w-4 h-4 text-slate-950 mb-0.5" />
            <span>Free Quote</span>
          </button>
        </div>
      </nav>
    </>
  );
};
