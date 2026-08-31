import React, { useState } from 'react';
import { BEFORE_AFTER_CASES } from '../data/servicesData';
import { ShieldCheck, CheckCircle2, ArrowRight } from 'lucide-react';
import torchImg from '../assets/images/torch_on_waterproofing_1788168677618.jpg';
import gutterImg from '../assets/images/modern_roof_gutters_1788168695699.jpg';

interface BeforeAfterShowcaseProps {
  onOpenQuote: (serviceName?: string) => void;
}

export const BeforeAfterShowcase: React.FC<BeforeAfterShowcaseProps> = ({ onOpenQuote }) => {
  const [activeTab, setActiveTab] = useState(0);

  const projects = [
    {
      title: 'Flat Concrete Roof Torch-On Waterproofing',
      category: 'Waterproofing',
      problem: 'Severe ponding water, hairline expansion cracks, and leaking ceiling underneath during heavy downpours.',
      solution: 'Stripped failing old seal, leveled ponding zones with screed, applied bitumen primer and dual-layer 4mm thermofused torch-on membrane with UV reflective silver coating.',
      result: '100% leak-free, protected against severe summer hailstorms with a 10-year warranty.',
      image: torchImg,
      badge: '10-Year Warranty',
    },
    {
      title: 'Seamless Chromadek Gutters & Exterior Restoration',
      category: 'Gutters & Painting',
      problem: 'Rusted steel gutters overflowing onto foundations, peeling parapet paint, and broken fascia boards.',
      solution: 'Fitted custom charcoal seamless Chromadek roll-formed gutters, installed large capacity downpipes, patched parapet cracks, and applied 2 coats of weather-guard exterior paint.',
      result: 'Optimal rainwater flow away from building, stunning modern exterior transformation.',
      image: gutterImg,
      badge: 'Modern Charcoal Finish',
    },
  ];

  const current = projects[activeTab];

  return (
    <section id="showcase" className="py-20 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center max-w-3xl mx-auto mb-12">
          <div className="inline-flex items-center gap-2 bg-amber-500/10 text-amber-700 px-3.5 py-1.5 rounded-full text-xs font-black uppercase tracking-wider mb-3">
            <ShieldCheck className="w-4 h-4 text-amber-600" /> Proven Craftsmanship &amp; Results
          </div>
          <h2 className="text-3xl sm:text-4xl font-black text-[#0B2F64] tracking-tight">
            Workmanship You Can Trust
          </h2>
          <p className="mt-3 text-base text-slate-600">
            See how Interseal solves persistent water leaks, replaces rusted rainwater systems, and restores property value.
          </p>
        </div>

        {/* Project Switcher Tabs */}
        <div className="flex justify-center gap-3 mb-8">
          {projects.map((proj, idx) => (
            <button
              key={idx}
              id={`showcase-tab-${idx}`}
              onClick={() => setActiveTab(idx)}
              className={`px-5 py-2.5 rounded-xl text-xs sm:text-sm font-bold transition-all cursor-pointer ${
                activeTab === idx
                  ? 'bg-[#0B2F64] text-white shadow-md'
                  : 'bg-slate-100 text-slate-700 hover:bg-slate-200'
              }`}
            >
              {proj.category}
            </button>
          ))}
        </div>

        {/* Project Card Display */}
        <div className="bg-slate-50 border border-slate-200 rounded-3xl p-6 sm:p-10 shadow-lg grid lg:grid-cols-12 gap-8 items-center">
          <div className="lg:col-span-6 relative overflow-hidden rounded-2xl shadow-md group">
            <img
              src={current.image}
              alt={current.title}
              className="w-full h-80 sm:h-96 object-cover group-hover:scale-105 transition-transform duration-700"
              referrerPolicy="no-referrer"
            />
            <div className="absolute top-4 left-4 bg-[#0B2F64]/95 text-amber-400 text-xs font-extrabold px-3 py-1.5 rounded-lg shadow-md">
              {current.badge}
            </div>
          </div>

          <div className="lg:col-span-6 space-y-6">
            <div>
              <span className="text-xs font-extrabold uppercase tracking-widest text-[#0084D6]">
                Featured Case Study
              </span>
              <h3 className="text-2xl sm:text-3xl font-black text-[#0B2F64] mt-1">
                {current.title}
              </h3>
            </div>

            <div className="space-y-4 text-sm">
              <div className="bg-red-50 border border-red-100 p-3.5 rounded-xl">
                <span className="text-xs font-bold text-red-700 uppercase tracking-wider block mb-1">
                  The Problem:
                </span>
                <p className="text-slate-700">{current.problem}</p>
              </div>

              <div className="bg-sky-50 border border-sky-100 p-3.5 rounded-xl">
                <span className="text-xs font-bold text-[#0084D6] uppercase tracking-wider block mb-1">
                  Interseal Solution:
                </span>
                <p className="text-slate-700">{current.solution}</p>
              </div>

              <div className="bg-emerald-50 border border-emerald-100 p-3.5 rounded-xl flex items-start gap-2.5">
                <CheckCircle2 className="w-5 h-5 text-emerald-600 shrink-0 mt-0.5" />
                <div>
                  <span className="text-xs font-bold text-emerald-800 uppercase tracking-wider block mb-0.5">
                    Final Result:
                  </span>
                  <p className="text-emerald-950 font-medium">{current.result}</p>
                </div>
              </div>
            </div>

            <div className="pt-2">
              <button
                id="showcase-get-quote-btn"
                onClick={() => onOpenQuote(current.title)}
                className="inline-flex items-center gap-2 bg-gradient-to-r from-amber-500 to-amber-600 hover:from-amber-600 hover:to-amber-700 text-white font-extrabold px-6 py-3 rounded-xl shadow-md hover:shadow-lg transition-all cursor-pointer"
              >
                <span>Get Free Quote for Similar Job</span>
                <ArrowRight className="w-4 h-4" />
              </button>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
