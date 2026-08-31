import React from 'react';
import { TESTIMONIALS } from '../data/servicesData';
import { Star, Quote, MapPin, CheckCircle2 } from 'lucide-react';

export const Testimonials: React.FC = () => {
  return (
    <section id="reviews" className="py-20 bg-slate-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center max-w-3xl mx-auto mb-14">
          <div className="inline-flex items-center gap-2 bg-emerald-500/10 text-emerald-700 px-3.5 py-1.5 rounded-full text-xs font-black uppercase tracking-wider mb-3">
            <CheckCircle2 className="w-4 h-4 text-emerald-600" /> 100% Verified Client Feedback
          </div>
          <h2 className="text-3xl sm:text-4xl font-black text-[#0B2F64] tracking-tight">
            What Our Clients Say About Interseal
          </h2>
          <p className="mt-3 text-base text-slate-600">
            Real feedback from homeowners, body corporates, and commercial facility managers across Gauteng.
          </p>
        </div>

        {/* Testimonials Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          {TESTIMONIALS.map((t) => (
            <div
              key={t.id}
              className="bg-white border border-slate-200 rounded-2xl p-6 shadow-xs hover:shadow-lg transition-all duration-300 flex flex-col justify-between"
            >
              <div>
                {/* 5-Star Rating */}
                <div className="flex items-center gap-1 mb-3">
                  {[...Array(t.rating)].map((_, i) => (
                    <Star key={i} className="w-4 h-4 fill-amber-400 text-amber-400" />
                  ))}
                </div>

                <p className="text-xs sm:text-sm text-slate-700 leading-relaxed italic mb-4">
                  "{t.comment}"
                </p>
              </div>

              <div className="pt-4 border-t border-slate-100">
                <div className="flex items-center justify-between mb-1">
                  <h4 className="text-sm font-black text-[#0B2F64]">{t.name}</h4>
                  <span className="text-[11px] text-slate-400 font-medium">{t.date}</span>
                </div>
                <div className="flex items-center gap-1 text-xs text-slate-500">
                  <MapPin className="w-3 h-3 text-[#0084D6]" />
                  <span>{t.location}</span>
                </div>
                <div className="mt-2 inline-block bg-sky-50 text-[#0084D6] text-[10px] font-extrabold px-2 py-0.5 rounded-sm">
                  {t.service}
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};
