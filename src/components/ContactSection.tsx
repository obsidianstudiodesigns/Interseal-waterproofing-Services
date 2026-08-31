import React, { useState } from 'react';
import { Phone, MessageCircle, Mail, MapPin, Clock, Send, ShieldCheck, CheckCircle2 } from 'lucide-react';
import { COMPANY_PHONE, COMPANY_PHONE_RAW, WHATSAPP_INTL, COMPANY_AREAS, COMPANY_EMAIL } from '../data/servicesData';

export const ContactSection: React.FC = () => {
  const [formData, setFormData] = useState({
    name: '',
    phone: '',
    area: '',
    message: '',
  });
  const [submitted, setSubmitted] = useState(false);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (!formData.name || !formData.phone) return;
    setSubmitted(true);
  };

  const handleWhatsAppChat = () => {
    const text = `Hi Interseal, my name is ${formData.name || 'Client'}. I am located in ${formData.area || 'Gauteng'}. ${formData.message || 'I would like to inquire about waterproofing and roofing services.'}`;
    window.open(`https://wa.me/${WHATSAPP_INTL}?text=${encodeURIComponent(text)}`, '_blank');
  };

  return (
    <section id="contact" className="py-20 bg-slate-900 text-white relative">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid lg:grid-cols-12 gap-12 items-start">
          {/* Left Column: Direct Contact Info & Coverage */}
          <div className="lg:col-span-6 space-y-8">
            <div>
              <div className="inline-flex items-center gap-2 bg-amber-500/20 text-amber-300 px-3.5 py-1.5 rounded-full text-xs font-black uppercase tracking-wider mb-3">
                <ShieldCheck className="w-4 h-4 text-amber-400" /> Get In Touch With The Experts
              </div>
              <h2 className="text-3xl sm:text-4xl font-black text-white tracking-tight">
                Ready to Protect Your Roof &amp; Home?
              </h2>
              <p className="mt-3 text-slate-300 text-sm sm:text-base leading-relaxed">
                Contact Interseal Waterproofing Services today for a free on-site assessment, transparent quotation, or emergency leak assistance.
              </p>
            </div>

            {/* Direct Contact Cards */}
            <div className="space-y-4">
              {/* Phone Card */}
              <a
                id="contact-section-tel"
                href={`tel:${COMPANY_PHONE_RAW}`}
                className="flex items-center gap-4 bg-white/5 hover:bg-white/10 p-4 rounded-2xl border border-white/10 transition-all group"
              >
                <div className="w-12 h-12 rounded-xl bg-amber-400 text-slate-950 flex items-center justify-center font-bold shrink-0 group-hover:scale-110 transition-transform">
                  <Phone className="w-6 h-6" />
                </div>
                <div>
                  <span className="text-xs text-amber-300 font-bold uppercase tracking-wider block">
                    Direct Call / Hotline
                  </span>
                  <span className="text-xl font-black text-white">{COMPANY_PHONE}</span>
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
                className="flex items-center gap-4 bg-[#25D366]/10 hover:bg-[#25D366]/20 p-4 rounded-2xl border border-[#25D366]/30 transition-all group"
              >
                <div className="w-12 h-12 rounded-xl bg-[#25D366] text-white flex items-center justify-center font-bold shrink-0 group-hover:scale-110 transition-transform">
                  <MessageCircle className="w-6 h-6 fill-white" />
                </div>
                <div>
                  <span className="text-xs text-emerald-400 font-bold uppercase tracking-wider block">
                    Instant WhatsApp Chat
                  </span>
                  <span className="text-xl font-black text-white">{COMPANY_PHONE}</span>
                </div>
              </a>

              {/* Service Areas */}
              <div className="flex items-start gap-4 bg-white/5 p-4 rounded-2xl border border-white/10">
                <div className="w-12 h-12 rounded-xl bg-sky-500/20 text-sky-400 flex items-center justify-center font-bold shrink-0">
                  <MapPin className="w-6 h-6" />
                </div>
                <div>
                  <span className="text-xs text-sky-300 font-bold uppercase tracking-wider block">
                    Primary Service Areas
                  </span>
                  <p className="text-sm font-semibold text-slate-200 mt-0.5">{COMPANY_AREAS}</p>
                </div>
              </div>

              {/* Hours */}
              <div className="flex items-start gap-4 bg-white/5 p-4 rounded-2xl border border-white/10">
                <div className="w-12 h-12 rounded-xl bg-indigo-500/20 text-indigo-400 flex items-center justify-center font-bold shrink-0">
                  <Clock className="w-6 h-6" />
                </div>
                <div>
                  <span className="text-xs text-indigo-300 font-bold uppercase tracking-wider block">
                    Operating Hours
                  </span>
                  <p className="text-sm font-semibold text-slate-200 mt-0.5">
                    Monday &ndash; Saturday: 07:00 &ndash; 18:00
                  </p>
                  <span className="text-[11px] text-amber-400 font-bold block mt-1">
                    * 24/7 Priority Emergency Storm Leak Call-outs
                  </span>
                </div>
              </div>
            </div>
          </div>

          {/* Right Column: Direct Message Form */}
          <div className="lg:col-span-6 bg-white text-slate-900 rounded-3xl p-6 sm:p-8 shadow-2xl border border-slate-200">
            <h3 className="text-2xl font-black text-[#0B2F64] mb-2">Send Us A Quick Message</h3>
            <p className="text-xs sm:text-sm text-slate-600 mb-6">
              Fill in your details below and our team will get in touch with you immediately.
            </p>

            {submitted ? (
              <div className="bg-emerald-50 border border-emerald-200 rounded-2xl p-6 text-center space-y-3">
                <CheckCircle2 className="w-12 h-12 text-emerald-600 mx-auto" />
                <h4 className="text-xl font-black text-emerald-900">Message Received!</h4>
                <p className="text-xs sm:text-sm text-slate-700">
                  Thank you, <strong>{formData.name}</strong>. We have logged your request and will call you at <strong>{formData.phone}</strong> shortly.
                </p>
                <button
                  onClick={() => setSubmitted(false)}
                  className="mt-2 text-xs font-bold text-[#0084D6] hover:underline"
                >
                  Send another message
                </button>
              </div>
            ) : (
              <form onSubmit={handleSubmit} className="space-y-4">
                <div>
                  <label className="block text-xs font-bold text-slate-700 mb-1">
                    Your Name *
                  </label>
                  <input
                    type="text"
                    required
                    placeholder="e.g. Michael Botha"
                    value={formData.name}
                    onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                    className="w-full px-3.5 py-2.5 rounded-xl border border-slate-300 text-sm focus:ring-2 focus:ring-[#0084D6] focus:outline-none"
                  />
                </div>

                <div>
                  <label className="block text-xs font-bold text-slate-700 mb-1">
                    Phone / WhatsApp Number *
                  </label>
                  <input
                    type="tel"
                    required
                    placeholder="e.g. 082 123 4567"
                    value={formData.phone}
                    onChange={(e) => setFormData({ ...formData, phone: e.target.value })}
                    className="w-full px-3.5 py-2.5 rounded-xl border border-slate-300 text-sm focus:ring-2 focus:ring-[#0084D6] focus:outline-none"
                  />
                </div>

                <div>
                  <label className="block text-xs font-bold text-slate-700 mb-1">
                    Area / Suburb in Gauteng
                  </label>
                  <input
                    type="text"
                    placeholder="e.g. Centurion, Pretoria, Sandton"
                    value={formData.area}
                    onChange={(e) => setFormData({ ...formData, area: e.target.value })}
                    className="w-full px-3.5 py-2.5 rounded-xl border border-slate-300 text-sm focus:ring-2 focus:ring-[#0084D6] focus:outline-none"
                  />
                </div>

                <div>
                  <label className="block text-xs font-bold text-slate-700 mb-1">
                    Message / Services Needed
                  </label>
                  <textarea
                    rows={3}
                    placeholder="Describe what you need (e.g. concrete roof waterproofing, gutter replacement, painting, etc.)"
                    value={formData.message}
                    onChange={(e) => setFormData({ ...formData, message: e.target.value })}
                    className="w-full px-3.5 py-2 rounded-xl border border-slate-300 text-sm focus:ring-2 focus:ring-[#0084D6] focus:outline-none"
                  />
                </div>

                <div className="pt-2 flex flex-col sm:flex-row gap-3">
                  <button
                    type="button"
                    onClick={handleWhatsAppChat}
                    className="flex-1 bg-[#25D366] hover:bg-[#20ba5a] text-white font-black py-3 px-4 rounded-xl text-sm shadow-md flex items-center justify-center gap-2 transition-all cursor-pointer"
                  >
                    <MessageCircle className="w-4 h-4 fill-white" />
                    <span>WhatsApp Chat</span>
                  </button>

                  <button
                    type="submit"
                    className="flex-1 bg-[#0B2F64] hover:bg-[#08234D] text-white font-black py-3 px-4 rounded-xl text-sm shadow-md flex items-center justify-center gap-2 transition-all cursor-pointer"
                  >
                    <Send className="w-4 h-4 text-amber-400" />
                    <span>Submit Inquiry</span>
                  </button>
                </div>
              </form>
            )}
          </div>
        </div>
      </div>
    </section>
  );
};
