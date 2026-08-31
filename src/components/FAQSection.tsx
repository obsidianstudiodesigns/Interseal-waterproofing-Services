import React, { useState } from 'react';
import { FAQS } from '../data/servicesData';
import { ChevronDown, HelpCircle } from 'lucide-react';

export const FAQSection: React.FC = () => {
  const [openIndex, setOpenIndex] = useState<number | null>(0);

  const toggle = (idx: number) => {
    setOpenIndex(openIndex === idx ? null : idx);
  };

  return (
    <section id="faq" className="py-20 bg-white">
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-12">
          <div className="inline-flex items-center gap-2 bg-sky-500/10 text-[#0084D6] px-3.5 py-1.5 rounded-full text-xs font-black uppercase tracking-wider mb-3">
            <HelpCircle className="w-4 h-4" /> Frequently Asked Questions
          </div>
          <h2 className="text-3xl sm:text-4xl font-black text-[#0B2F64] tracking-tight">
            Roofing &amp; Waterproofing FAQ
          </h2>
          <p className="mt-2 text-sm sm:text-base text-slate-600">
            Have questions about our waterproofing systems, guarantees, or quotation process? Find answers below.
          </p>
        </div>

        {/* FAQ Accordion */}
        <div className="space-y-3.5">
          {FAQS.map((faq, idx) => {
            const isOpen = openIndex === idx;
            return (
              <div
                key={idx}
                className="border border-slate-200 rounded-2xl overflow-hidden transition-all duration-200"
              >
                <button
                  id={`faq-toggle-${idx}`}
                  onClick={() => toggle(idx)}
                  className="w-full flex items-center justify-between p-5 text-left bg-slate-50 hover:bg-slate-100 transition-colors cursor-pointer"
                >
                  <span className="text-sm sm:text-base font-black text-[#0B2F64] pr-4">
                    {faq.question}
                  </span>
                  <ChevronDown
                    className={`w-5 h-5 text-[#0084D6] shrink-0 transition-transform duration-200 ${
                      isOpen ? 'transform rotate-180 text-amber-500' : ''
                    }`}
                  />
                </button>

                {isOpen && (
                  <div className="p-5 bg-white border-t border-slate-100 text-xs sm:text-sm text-slate-600 leading-relaxed animate-in fade-in duration-200">
                    {faq.answer}
                  </div>
                )}
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
};
