import React, { useState } from 'react';
import { SERVICES_DATA } from '../data/servicesData';
import { ServiceItem } from '../types';
import { ShieldCheck, Check, ArrowRight, Sparkles, Droplets, Home, Layers, Paintbrush, Trees } from 'lucide-react';

interface ServicesSectionProps {
  onOpenQuote: (serviceName?: string) => void;
}

export const ServicesSection: React.FC<ServicesSectionProps> = ({ onOpenQuote }) => {
  const [activeCategory, setActiveCategory] = useState<string>('all');

  const categories = [
    { id: 'all', label: 'All Services', icon: Sparkles },
    { id: 'waterproofing', label: 'Waterproofing', icon: Droplets },
    { id: 'roofing', label: 'Roofing & Sheets', icon: Home },
    { id: 'gutters', label: 'Gutters', icon: Layers },
    { id: 'painting-plastering', label: 'Painting & Plastering', icon: Paintbrush },
    { id: 'site-services', label: 'Ceilings & Tree Felling', icon: Trees },
  ];

  const filteredServices =
    activeCategory === 'all'
      ? SERVICES_DATA
      : SERVICES_DATA.filter((s) => s.category === activeCategory);

  return (
    <section id="services" className="py-20 bg-slate-50 relative overflow-hidden">
      {/* Subtle Background Pattern */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-12">
          <div className="inline-flex items-center gap-2 bg-[#0B2F64]/10 text-[#0B2F64] px-3.5 py-1.5 rounded-full text-xs font-black uppercase tracking-wider mb-3">
            <ShieldCheck className="w-4 h-4 text-[#0084D6]" /> Complete Roofing &amp; Property Solutions
          </div>
          <h2 className="text-3xl sm:text-4xl font-black text-[#0B2F64] tracking-tight">
            Our Professional Services
          </h2>
          <p className="mt-3 text-base text-slate-600">
            From industrial &amp; residential waterproofing to custom seamless Chromadek gutters, plastering, painting, and rubble clearing — we deliver guaranteed craftsmanship.
          </p>

          {/* Clean Category Filter Tabs */}
          <div className="mt-8 flex flex-wrap justify-center gap-2">
            {categories.map((cat) => {
              const Icon = cat.icon;
              const isActive = activeCategory === cat.id;
              return (
                <button
                  key={cat.id}
                  id={`filter-tab-${cat.id}`}
                  onClick={() => setActiveCategory(cat.id)}
                  className={`inline-flex items-center gap-2 px-4 py-2 rounded-xl text-xs sm:text-sm font-bold transition-all cursor-pointer ${
                    isActive
                      ? 'bg-[#0B2F64] text-white shadow-md shadow-[#0B2F64]/20 scale-105'
                      : 'bg-white text-slate-700 hover:bg-slate-100 border border-slate-200'
                  }`}
                >
                  <Icon className={`w-4 h-4 ${isActive ? 'text-amber-400' : 'text-[#0084D6]'}`} />
                  <span>{cat.label}</span>
                </button>
              );
            })}
          </div>
        </div>

        {/* Services Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 lg:gap-8">
          {filteredServices.map((service: ServiceItem) => (
            <div
              key={service.id}
              id={`service-card-${service.id}`}
              className="bg-white rounded-2xl border border-slate-200 shadow-sm hover:shadow-xl transition-all duration-300 flex flex-col overflow-hidden group hover:-translate-y-1"
            >
              {/* Optional Service Image Thumbnail if available */}
              {service.image && (
                <div className="relative h-44 w-full overflow-hidden bg-slate-100">
                  <img
                    src={service.image}
                    alt={service.title}
                    className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                    referrerPolicy="no-referrer"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-slate-900/60 via-transparent to-transparent" />
                  <span className="absolute top-3 right-3 bg-[#0B2F64]/90 backdrop-blur-xs text-amber-300 text-[11px] font-extrabold px-2.5 py-1 rounded-md shadow-xs">
                    Guaranteed Work
                  </span>
                </div>
              )}

              {/* Service Card Content */}
              <div className="p-6 flex-1 flex flex-col justify-between">
                <div>
                  <div className="flex items-center justify-between gap-2 mb-2">
                    <h3 className="text-lg font-black text-[#0B2F64] group-hover:text-[#0084D6] transition-colors">
                      {service.title}
                    </h3>
                  </div>

                  <p className="text-xs sm:text-sm text-slate-600 leading-relaxed mb-4">
                    {service.fullDesc || service.shortDesc}
                  </p>

                  {/* Feature Checkpoints */}
                  <ul className="space-y-2 mb-6">
                    {service.features.slice(0, 4).map((feat, idx) => (
                      <li key={idx} className="flex items-start gap-2 text-xs text-slate-700 font-medium">
                        <Check className="w-4 h-4 text-emerald-500 shrink-0 mt-0.5" />
                        <span>{feat}</span>
                      </li>
                    ))}
                  </ul>
                </div>

                {/* Card Action Button */}
                <div className="pt-4 border-t border-slate-100 flex items-center justify-between gap-2">
                  <span className="text-[11px] font-bold text-slate-500">Free On-site Inspection</span>
                  <button
                    id={`quote-btn-${service.id}`}
                    onClick={() => onOpenQuote(service.title)}
                    className="inline-flex items-center gap-1.5 bg-[#0B2F64] hover:bg-[#0084D6] text-white text-xs font-extrabold px-3.5 py-2 rounded-lg transition-colors cursor-pointer group/btn"
                  >
                    <span>Request Quote</span>
                    <ArrowRight className="w-3.5 h-3.5 group-hover/btn:translate-x-0.5 transition-transform" />
                  </button>
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* Bottom Banner for Free Quote */}
        <div className="mt-12 bg-gradient-to-r from-[#0B2F64] via-[#004B93] to-[#0B2F64] rounded-2xl p-6 sm:p-8 text-white shadow-xl flex flex-col md:flex-row items-center justify-between gap-6">
          <div className="space-y-1.5 text-center md:text-left">
            <h4 className="text-xl sm:text-2xl font-black text-amber-400">
              Not sure what type of waterproofing your roof needs?
            </h4>
            <p className="text-xs sm:text-sm text-slate-200">
              Our specialists inspect for hidden hairline leaks, failing torch-on joints, and rust damage at zero cost.
            </p>
          </div>
          <button
            id="services-bottom-quote-btn"
            onClick={() => onOpenQuote()}
            className="shrink-0 bg-gradient-to-r from-amber-500 to-amber-600 hover:from-amber-600 hover:to-amber-700 text-white font-black px-6 py-3.5 rounded-xl text-sm shadow-lg hover:shadow-amber-500/30 transition-all cursor-pointer"
          >
            Schedule Free Inspection &rarr;
          </button>
        </div>
      </div>
    </section>
  );
};
