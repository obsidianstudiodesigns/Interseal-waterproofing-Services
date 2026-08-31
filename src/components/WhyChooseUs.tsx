import React from 'react';
import { ShieldCheck, Award, Clock, DollarSign, CheckCircle2, PhoneCall, Sparkles } from 'lucide-react';
import { COMPANY_PHONE, COMPANY_PHONE_RAW } from '../data/servicesData';

interface WhyChooseUsProps {
  onOpenQuote: () => void;
}

export const WhyChooseUs: React.FC<WhyChooseUsProps> = ({ onOpenQuote }) => {
  const pillars = [
    {
      icon: Award,
      title: 'SABS Approved Premium Materials',
      desc: 'We never cut corners with cheap sealants. We exclusively use 4mm high-tensile torch-on bitumen membranes, genuine Chromadek steel, and high-performance elastomeric sealants.',
      color: 'bg-sky-50 text-[#0084D6] border-sky-200',
    },
    {
      icon: ShieldCheck,
      title: 'Guaranteed Workmanship Warranty',
      desc: 'Rest easy knowing your roof is protected against harsh rain and sun. All our full installations carry an iron-clad leak-free workmanship guarantee.',
      color: 'bg-amber-50 text-amber-600 border-amber-200',
    },
    {
      icon: Clock,
      title: 'Fast Free Assessment & Prompt Quotes',
      desc: 'No waiting weeks for an estimate. We provide same-day response times, thorough on-site roof inspections, and detailed transparent quotations.',
      color: 'bg-indigo-50 text-indigo-600 border-indigo-200',
    },
    {
      icon: DollarSign,
      title: 'Competitive & Transparent Rates',
      desc: 'Honest pricing with no surprise charges or hidden fees. We provide top-tier professional roofing quality tailored to fit your budget.',
      color: 'bg-emerald-50 text-emerald-600 border-emerald-200',
    },
  ];

  return (
    <section id="why-us" className="py-20 bg-slate-900 text-white relative overflow-hidden">
      {/* Background Graphic Accents */}
      <div className="absolute top-0 right-0 w-96 h-96 bg-[#0084D6]/10 rounded-full blur-3xl pointer-events-none" />
      <div className="absolute bottom-0 left-0 w-96 h-96 bg-amber-500/10 rounded-full blur-3xl pointer-events-none" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="text-center max-w-3xl mx-auto mb-16">
          <div className="inline-flex items-center gap-2 bg-white/10 text-sky-300 px-3.5 py-1.5 rounded-full text-xs font-black uppercase tracking-wider mb-3">
            <Sparkles className="w-4 h-4 text-amber-400" /> The Interseal Advantage
          </div>
          <h2 className="text-3xl sm:text-4xl font-black tracking-tight text-white">
            Why Property Owners Choose Interseal
          </h2>
          <p className="mt-3 text-base text-slate-300">
            Waterproofing and roofing done right the first time. We combine experienced craftsmen, industry-standard materials, and guaranteed peace of mind.
          </p>
        </div>

        {/* 4 Pillars Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          {pillars.map((item, idx) => {
            const Icon = item.icon;
            return (
              <div
                key={idx}
                className="bg-white/5 border border-white/10 rounded-2xl p-6 hover:bg-white/10 transition-all duration-300 flex flex-col justify-between group hover:-translate-y-1"
              >
                <div>
                  <div className={`w-12 h-12 rounded-xl flex items-center justify-center mb-5 border ${item.color} group-hover:scale-110 transition-transform`}>
                    <Icon className="w-6 h-6" />
                  </div>
                  <h3 className="text-lg font-black text-white mb-2">{item.title}</h3>
                  <p className="text-xs sm:text-sm text-slate-300 leading-relaxed">{item.desc}</p>
                </div>

                <div className="pt-5 mt-4 border-t border-white/10 flex items-center gap-1.5 text-xs text-amber-400 font-bold">
                  <CheckCircle2 className="w-4 h-4" />
                  <span>Quality Assured</span>
                </div>
              </div>
            );
          })}
        </div>

        {/* Fast Action Banner inside Why Us */}
        <div className="mt-14 bg-gradient-to-r from-[#0B2F64] to-[#0084D6] rounded-2xl p-6 sm:p-8 flex flex-col md:flex-row items-center justify-between gap-6 shadow-2xl border border-white/10">
          <div className="space-y-1 text-center md:text-left">
            <h4 className="text-xl sm:text-2xl font-black text-white">
              Have an urgent leak or need an on-site inspection?
            </h4>
            <p className="text-xs sm:text-sm text-sky-100">
              Speak directly with an Interseal specialist right now at {COMPANY_PHONE}.
            </p>
          </div>
          <div className="flex flex-wrap items-center justify-center gap-3">
            <a
              id="why-us-call-btn"
              href={`tel:${COMPANY_PHONE_RAW}`}
              className="inline-flex items-center gap-2 bg-white text-[#0B2F64] font-black px-5 py-3 rounded-xl text-sm hover:bg-slate-100 transition-all shadow-md"
            >
              <PhoneCall className="w-4 h-4 text-amber-500" />
              <span>Call {COMPANY_PHONE}</span>
            </a>
            <button
              id="why-us-quote-btn"
              onClick={onOpenQuote}
              className="inline-flex items-center gap-2 bg-gradient-to-r from-amber-500 to-amber-600 hover:from-amber-600 hover:to-amber-700 text-slate-950 font-black px-5 py-3 rounded-xl text-sm transition-all shadow-md cursor-pointer"
            >
              <span>Get Free Quote Online</span>
            </button>
          </div>
        </div>
      </div>
    </section>
  );
};
