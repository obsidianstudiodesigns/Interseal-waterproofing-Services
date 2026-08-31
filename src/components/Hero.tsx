import React from 'react';
import { ShieldCheck, Phone, MessageCircle, ArrowRight, CheckCircle2, Award, Clock, Sparkles } from 'lucide-react';
import { COMPANY_PHONE, COMPANY_PHONE_RAW, WHATSAPP_INTL } from '../data/servicesData';
import heroBackground from '../assets/images/roof_waterproofing_hero_1788168654335.jpg';

interface HeroProps {
  onOpenQuote: (serviceName?: string) => void;
}

export const Hero: React.FC<HeroProps> = ({ onOpenQuote }) => {
  const quickHighlights = [
    'Roofing Installation & Repairs',
    'Roof Tiles & Sheet Waterproofing',
    'Concrete Roof & Torch-On Experts',
    'Liquid Rubber & Roof Painting',
  ];

  return (
    <section className="relative min-h-[90vh] lg:min-h-[92vh] flex items-center pt-24 sm:pt-28 pb-16 overflow-hidden">
      {/* Photorealistic Background with Optimized Gradient Overlay matching Flyer Palette */}
      <div className="absolute inset-0 z-0">
        <img
          src={heroBackground}
          alt="Interseal Professional Roofing and Waterproofing Membrane Application"
          className="w-full h-full object-cover object-center transform scale-105 transition-transform duration-1000"
          referrerPolicy="no-referrer"
        />
        {/* Multi-layer Gradient Overlays for High Contrast & Readability */}
        <div className="absolute inset-0 bg-gradient-to-r from-[#071D3F]/95 via-[#0A2F68]/85 to-[#051C3B]/60" />
        <div className="absolute inset-0 bg-radial-at-t from-sky-500/15 via-transparent to-[#04132B]/80" />
      </div>

      <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 w-full">
        <div className="grid lg:grid-cols-12 gap-12 items-center">
          {/* Left Hero Content */}
          <div className="lg:col-span-8 text-white space-y-6">
            {/* Slogan Badge from Flyer */}
            <div className="inline-flex items-center gap-2.5 bg-gradient-to-r from-amber-500 via-amber-400 to-amber-500 text-slate-950 font-black px-4 py-2 rounded-xl shadow-lg border border-amber-300 transform hover:-translate-y-0.5 transition-transform">
              <div className="bg-slate-950 text-amber-400 p-1 rounded-md">
                <ShieldCheck className="w-5 h-5" />
              </div>
              <div className="text-left">
                <span className="block text-xs uppercase tracking-widest font-extrabold text-slate-900 leading-tight">
                  Protect Your Roof.
                </span>
                <span className="block text-sm md:text-base font-black tracking-wide text-slate-950 leading-tight">
                  Protect Your Home.
                </span>
              </div>
            </div>

            {/* Main Headline from Flyer */}
            <div className="space-y-2">
              <h1 className="text-3xl sm:text-5xl lg:text-6xl font-black tracking-tight leading-[1.1] text-white">
                Professional Roofing &amp; <br />
                <span className="text-transparent bg-clip-text bg-gradient-to-r from-sky-300 via-sky-400 to-sky-200">
                  Waterproofing Experts
                </span>
              </h1>
              <p className="text-base sm:text-lg lg:text-xl text-slate-200 max-w-2xl font-normal leading-relaxed">
                Specialized waterproofing for concrete roofs, roof sheets, Chromadek gutters, leak repairs, ceiling installations, wall plastering &amp; painting. 100% leak-proof guarantee.
              </p>
            </div>

            {/* Quick Service Highlights Pills */}
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-2.5 max-w-xl pt-1">
              {quickHighlights.map((item, idx) => (
                <div
                  key={idx}
                  className="flex items-center gap-2 bg-white/10 backdrop-blur-md px-3.5 py-2 rounded-lg border border-white/15 text-xs sm:text-sm font-semibold text-slate-100 shadow-xs"
                >
                  <CheckCircle2 className="w-4 h-4 text-amber-400 shrink-0" />
                  <span>{item}</span>
                </div>
              ))}
            </div>

            {/* Primary Action Buttons */}
            <div className="pt-4 flex flex-col sm:flex-row items-stretch sm:items-center gap-3.5">
              {/* Quote CTA Button */}
              <button
                id="hero-free-quote-btn"
                onClick={() => onOpenQuote()}
                className="group relative inline-flex items-center justify-center gap-2.5 bg-gradient-to-r from-amber-500 via-amber-400 to-amber-500 hover:from-amber-400 hover:to-amber-300 text-slate-950 font-black px-7 py-4 rounded-xl text-base sm:text-lg shadow-xl hover:shadow-amber-500/25 transition-all duration-200 transform hover:-translate-y-0.5 cursor-pointer active:scale-95"
              >
                <Sparkles className="w-5 h-5 text-slate-900" />
                <span>Get A Free Quote Today!!</span>
                <ArrowRight className="w-5 h-5 text-slate-950 group-hover:translate-x-1 transition-transform" />
              </button>

              {/* Instant WhatsApp from Flyer */}
              <a
                id="hero-whatsapp-btn"
                href={`https://wa.me/${WHATSAPP_INTL}?text=${encodeURIComponent(
                  'Hello Interseal, I would like to request a free quote for waterproofing/roofing services.'
                )}`}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center justify-center gap-3 bg-[#25D366] hover:bg-[#20ba5a] text-white font-black px-6 py-4 rounded-xl text-base sm:text-lg shadow-xl hover:shadow-green-500/20 transition-all duration-200 transform hover:-translate-y-0.5"
              >
                <MessageCircle className="w-6 h-6 fill-white" />
                <div className="text-left leading-tight">
                  <span className="block text-[11px] font-bold text-emerald-100 uppercase tracking-wider">
                    WhatsApp Us Now
                  </span>
                  <span className="block text-sm sm:text-base font-extrabold">{COMPANY_PHONE}</span>
                </div>
              </a>
            </div>

            {/* Trust Badges Bar */}
            <div className="pt-4 border-t border-white/15 flex flex-wrap items-center gap-y-3 gap-x-6 text-xs text-slate-300">
              <div className="flex items-center gap-1.5">
                <Award className="w-4 h-4 text-amber-400" />
                <span className="font-semibold text-white">SABS Approved</span> Materials
              </div>
              <div className="flex items-center gap-1.5">
                <ShieldCheck className="w-4 h-4 text-sky-400" />
                <span className="font-semibold text-white">Workmanship</span> Warranty
              </div>
              <div className="flex items-center gap-1.5">
                <Clock className="w-4 h-4 text-amber-400" />
                <span className="font-semibold text-white">Fast Free</span> On-Site Assessment
              </div>
            </div>
          </div>

          {/* Right Hero Callout Card (Floating Quick Inquiry & Direct Number) */}
          <div className="lg:col-span-4">
            <div className="bg-white/95 backdrop-blur-md rounded-2xl p-6 sm:p-7 shadow-2xl border-2 border-sky-200/50 text-slate-900 space-y-5">
              <div className="flex items-center justify-between border-b border-slate-100 pb-3">
                <div>
                  <span className="text-[11px] font-extrabold uppercase tracking-wider text-[#0084D6]">
                    Direct Hotline
                  </span>
                  <h3 className="text-xl font-black text-[#0B2F64]">Need Fast Assistance?</h3>
                </div>
                <div className="w-10 h-10 rounded-full bg-sky-100 flex items-center justify-center text-[#0084D6]">
                  <Phone className="w-5 h-5 animate-pulse" />
                </div>
              </div>

              <p className="text-xs text-slate-600 leading-relaxed">
                Whether you have an active roof leak, need gutter installation, or require full building waterproofing, speak directly with our team today.
              </p>

              {/* Large Direct Dial Callout Button */}
              <a
                id="hero-card-tel-btn"
                href={`tel:${COMPANY_PHONE_RAW}`}
                className="w-full flex items-center justify-between bg-gradient-to-r from-[#0B2F64] to-[#004B93] text-white p-4 rounded-xl hover:from-[#08234D] hover:to-[#0B2F64] transition-all shadow-md group"
              >
                <div className="flex items-center gap-3">
                  <div className="p-2.5 bg-amber-400 text-slate-950 rounded-lg group-hover:scale-110 transition-transform">
                    <Phone className="w-5 h-5" />
                  </div>
                  <div>
                    <span className="text-[10px] text-sky-200 uppercase font-bold tracking-wider block">
                      Tap To Call Us
                    </span>
                    <span className="text-lg sm:text-xl font-black tracking-wide text-white block">
                      {COMPANY_PHONE}
                    </span>
                  </div>
                </div>
                <ArrowRight className="w-5 h-5 text-amber-400 group-hover:translate-x-1 transition-transform" />
              </a>

              {/* Quick Quote Trigger in card */}
              <div className="pt-2 text-center">
                <button
                  id="hero-card-quote-trigger"
                  onClick={() => onOpenQuote()}
                  className="text-xs font-bold text-[#0084D6] hover:text-[#0B2F64] underline underline-offset-4 cursor-pointer"
                >
                  Or click here to request a written quote online &rarr;
                </button>
              </div>

              <div className="bg-slate-50 p-3 rounded-lg border border-slate-100 text-center">
                <p className="text-[11px] text-slate-500 font-medium">
                  Free assessment across Pretoria, Centurion, Johannesburg &amp; Gauteng.
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
