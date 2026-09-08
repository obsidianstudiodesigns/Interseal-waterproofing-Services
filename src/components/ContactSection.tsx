import React from 'react';
import { Phone, MessageCircle, MapPin, Clock, ShieldCheck, CheckCircle2 } from 'lucide-react';
import { COMPANY_PHONE, COMPANY_PHONE_RAW, WHATSAPP_INTL, COMPANY_AREAS } from '../data/servicesData';

const NEXT_STEPS = [
  'Call or WhatsApp us with your address and a short description of the problem.',
  'We book a free on-site inspection, usually within 24 - 48 hours.',
  'You receive a transparent written quotation with no obligation to proceed.',
];

export const ContactSection: React.FC = () => {
  return (
    <section id="contact" className="py-20 bg-slate-900 text-white relative">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Heading */}
        <div className="max-w-3xl">
          <div className="inline-flex items-center gap-2 bg-amber-500/20 text-amber-300 px-3.5 py-1.5 rounded-full text-xs font-black uppercase tracking-wider mb-3">
            <ShieldCheck className="w-4 h-4 text-amber-400" /> Get In Touch With The Experts
          </div>
          <h2 className="text-3xl sm:text-4xl font-black text-white tracking-tight">
            Ready to Protect Your Roof &amp; Home?
          </h2>
          <p className="mt-3 text-slate-300 text-sm sm:text-base leading-relaxed">
            Contact Interseal Waterproofing Services today for a free on-site assessment, transparent
            quotation, or emergency leak assistance. We answer every call and WhatsApp personally.
          </p>
        </div>

        {/* Primary Call / WhatsApp Actions */}
        <div className="mt-10 grid sm:grid-cols-2 gap-4">
          {/* Phone Card */}
          <a
            id="contact-section-tel"
            href={`tel:${COMPANY_PHONE_RAW}`}
            className="flex items-center gap-4 bg-white/5 hover:bg-white/10 p-5 rounded-2xl border border-white/10 transition-all group"
          >
            <div className="w-14 h-14 rounded-xl bg-amber-400 text-slate-950 flex items-center justify-center font-bold shrink-0 group-hover:scale-110 transition-transform">
              <Phone className="w-7 h-7" />
            </div>
            <div>
              <span className="text-xs text-amber-300 font-bold uppercase tracking-wider block">
                Direct Call / Hotline
              </span>
              <span className="text-2xl font-black text-white">{COMPANY_PHONE}</span>
              <span className="block text-[11px] text-slate-400 mt-0.5">
                Tap to call us now
              </span>
            </div>
          </a>

          {/* WhatsApp Card */}
          <a
            id="contact-section-whatsapp"
            href={`https://wa.me/${WHATSAPP_INTL}?text=${encodeURIComponent(
              'Hi Interseal, I need a free quotation for waterproofing/roofing.'
            )}`}
            target="_blank"
            rel="noopener noreferrer"
            className="flex items-center gap-4 bg-[#25D366]/10 hover:bg-[#25D366]/20 p-5 rounded-2xl border border-[#25D366]/30 transition-all group"
          >
            <div className="w-14 h-14 rounded-xl bg-[#25D366] text-white flex items-center justify-center font-bold shrink-0 group-hover:scale-110 transition-transform">
              <MessageCircle className="w-7 h-7 fill-white" />
            </div>
            <div>
              <span className="text-xs text-emerald-400 font-bold uppercase tracking-wider block">
                Instant WhatsApp Chat
              </span>
              <span className="text-2xl font-black text-white">{COMPANY_PHONE}</span>
              <span className="block text-[11px] text-slate-400 mt-0.5">
                Send us photos of the problem area
              </span>
            </div>
          </a>
        </div>

        {/* Areas, Hours & What Happens Next */}
        <div className="mt-4 grid md:grid-cols-3 gap-4">
          {/* Service Areas */}
          <div className="flex items-start gap-4 bg-white/5 p-5 rounded-2xl border border-white/10">
            <div className="w-12 h-12 rounded-xl bg-sky-500/20 text-sky-400 flex items-center justify-center font-bold shrink-0">
              <MapPin className="w-6 h-6" />
            </div>
            <div>
              <span className="text-xs text-sky-300 font-bold uppercase tracking-wider block">
                Primary Service Areas
              </span>
              <p className="text-sm font-semibold text-slate-200 mt-1">{COMPANY_AREAS}</p>
            </div>
          </div>

          {/* Hours */}
          <div className="flex items-start gap-4 bg-white/5 p-5 rounded-2xl border border-white/10">
            <div className="w-12 h-12 rounded-xl bg-indigo-500/20 text-indigo-400 flex items-center justify-center font-bold shrink-0">
              <Clock className="w-6 h-6" />
            </div>
            <div>
              <span className="text-xs text-indigo-300 font-bold uppercase tracking-wider block">
                Operating Hours
              </span>
              <p className="text-sm font-semibold text-slate-200 mt-1">
                Monday &ndash; Saturday: 07:00 &ndash; 18:00
              </p>
              <span className="text-[11px] text-amber-400 font-bold block mt-1">
                * 24/7 Priority Emergency Storm Leak Call-outs
              </span>
            </div>
          </div>

          {/* What Happens Next */}
          <div className="bg-white/5 p-5 rounded-2xl border border-white/10">
            <span className="text-xs text-emerald-300 font-bold uppercase tracking-wider block mb-3">
              What Happens Next
            </span>
            <ol className="space-y-2">
              {NEXT_STEPS.map((step, idx) => (
                <li key={idx} className="flex items-start gap-2 text-xs text-slate-300 leading-relaxed">
                  <CheckCircle2 className="w-4 h-4 text-emerald-400 shrink-0 mt-px" />
                  <span>{step}</span>
                </li>
              ))}
            </ol>
          </div>
        </div>
      </div>
    </section>
  );
};
