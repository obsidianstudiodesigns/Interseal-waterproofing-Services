import React, { useState, useEffect } from 'react';
import { X, MessageCircle, Send, CheckCircle2, ShieldAlert, Sparkles, Phone, Calculator } from 'lucide-react';
import { SERVICES_DATA, COMPANY_PHONE, WHATSAPP_INTL } from '../data/servicesData';
import { QuoteRequest } from '../types';

interface QuoteCalculatorModalProps {
  isOpen: boolean;
  onClose: () => void;
  preSelectedService?: string;
}

export const QuoteCalculatorModal: React.FC<QuoteCalculatorModalProps> = ({
  isOpen,
  onClose,
  preSelectedService,
}) => {
  const [formData, setFormData] = useState<QuoteRequest>({
    fullName: '',
    phone: '',
    email: '',
    location: '',
    services: preSelectedService ? [preSelectedService] : ['Concrete Roofs Waterproofing'],
    propertyType: 'Residential',
    urgentNeed: false,
    notes: '',
  });

  const [submitted, setSubmitted] = useState(false);
  const [referenceId, setReferenceId] = useState('');

  useEffect(() => {
    if (preSelectedService) {
      setFormData((prev) => ({
        ...prev,
        services: prev.services.includes(preSelectedService)
          ? prev.services
          : [...prev.services, preSelectedService],
      }));
    }
  }, [preSelectedService]);

  if (!isOpen) return null;

  const toggleService = (serviceTitle: string) => {
    setFormData((prev) => {
      const exists = prev.services.includes(serviceTitle);
      if (exists) {
        if (prev.services.length === 1) return prev; // Keep at least one
        return { ...prev, services: prev.services.filter((s) => s !== serviceTitle) };
      } else {
        return { ...prev, services: [...prev.services, serviceTitle] };
      }
    });
  };

  const generateWhatsAppMessage = () => {
    const text = `*New Free Quote Request - Interseal Waterproofing*\n\n` +
      `👤 *Name:* ${formData.fullName || 'Client'}\n` +
      `📞 *Phone:* ${formData.phone || 'Provided upon contact'}\n` +
      `📍 *Location / Suburb:* ${formData.location || 'Gauteng'}\n` +
      `🏠 *Property Type:* ${formData.propertyType}\n` +
      `🛠️ *Services Needed:*\n${formData.services.map((s) => ` • ${s}`).join('\n')}\n` +
      `⚡ *Urgent / Active Leak:* ${formData.urgentNeed ? 'YES - Priority' : 'Standard'}\n` +
      (formData.notes ? `📝 *Details:* ${formData.notes}\n` : '') +
      `\nPlease contact me with quotation & inspection details.`;

    return encodeURIComponent(text);
  };

  const handleWhatsAppSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    const url = `https://wa.me/${WHATSAPP_INTL}?text=${generateWhatsAppMessage()}`;
    window.open(url, '_blank');
    setReferenceId(`INT-${Math.floor(100000 + Math.random() * 900000)}`);
    setSubmitted(true);
  };

  const handleDirectWebSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (!formData.fullName || !formData.phone) {
      alert('Please enter your Name and Phone / WhatsApp number so we can reach you with your quote.');
      return;
    }
    setReferenceId(`INT-${Math.floor(100000 + Math.random() * 900000)}`);
    setSubmitted(true);
  };

  return (
    <div className="fixed inset-0 z-50 overflow-y-auto bg-slate-950/70 backdrop-blur-xs flex items-center justify-center p-3 sm:p-4">
      <div className="relative bg-white rounded-3xl max-w-2xl w-full shadow-2xl border border-slate-200 overflow-hidden animate-in fade-in zoom-in-95 duration-200">
        {/* Modal Header */}
        <div className="bg-gradient-to-r from-[#0B2F64] via-[#004B93] to-[#0B2F64] text-white p-5 sm:p-6 flex items-center justify-between">
          <div className="flex items-center gap-3">
            <div className="p-2 bg-amber-400 text-slate-950 rounded-xl">
              <Calculator className="w-5 h-5" />
            </div>
            <div>
              <h3 className="text-lg sm:text-xl font-black">Request A Free Quotation</h3>
              <p className="text-xs text-sky-200">
                100% Free On-Site Inspection &bull; Zero Obligation &bull; Fast Turnaround
              </p>
            </div>
          </div>
          <button
            id="quote-modal-close-btn"
            onClick={onClose}
            className="p-1.5 rounded-full text-white/80 hover:text-white hover:bg-white/10 transition-colors"
          >
            <X className="w-6 h-6" />
          </button>
        </div>

        {/* Modal Body */}
        <div className="p-5 sm:p-7 max-h-[80vh] overflow-y-auto">
          {submitted ? (
            <div className="text-center py-8 space-y-4">
              <div className="w-16 h-16 bg-emerald-100 text-emerald-600 rounded-full flex items-center justify-center mx-auto">
                <CheckCircle2 className="w-10 h-10" />
              </div>
              <h4 className="text-2xl font-black text-[#0B2F64]">Quote Request Received!</h4>
              <p className="text-sm text-slate-600 max-w-md mx-auto">
                Thank you, <strong className="text-slate-900">{formData.fullName}</strong>. Your reference number is <strong className="text-[#0084D6]">{referenceId}</strong>. Our roofing specialist will contact you shortly at <strong className="text-slate-900">{formData.phone}</strong>.
              </p>
              <div className="pt-4 flex flex-col sm:flex-row gap-3 justify-center">
                <a
                  href={`https://wa.me/${WHATSAPP_INTL}?text=${generateWhatsAppMessage()}`}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center justify-center gap-2 bg-[#25D366] text-white font-bold px-5 py-3 rounded-xl shadow-md text-sm"
                >
                  <MessageCircle className="w-4 h-4 fill-white" />
                  Chat Directly On WhatsApp
                </a>
                <button
                  onClick={() => {
                    setSubmitted(false);
                    onClose();
                  }}
                  className="bg-slate-100 hover:bg-slate-200 text-slate-700 font-bold px-5 py-3 rounded-xl text-sm transition-colors"
                >
                  Close Window
                </button>
              </div>
            </div>
          ) : (
            <form onSubmit={handleDirectWebSubmit} className="space-y-6">
              {/* Service Selection */}
              <div>
                <label className="block text-xs font-black uppercase tracking-wider text-slate-700 mb-2">
                  Select Required Services (Choose 1 or more):
                </label>
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-2">
                  {SERVICES_DATA.map((srv) => {
                    const isSelected = formData.services.includes(srv.title);
                    return (
                      <button
                        type="button"
                        key={srv.id}
                        onClick={() => toggleService(srv.title)}
                        className={`text-left px-3 py-2.5 rounded-xl border text-xs font-semibold flex items-center justify-between transition-all cursor-pointer ${
                          isSelected
                            ? 'border-[#0084D6] bg-sky-50 text-[#0B2F64] font-bold shadow-xs'
                            : 'border-slate-200 bg-white text-slate-700 hover:border-slate-300'
                        }`}
                      >
                        <span className="line-clamp-1">{srv.title}</span>
                        {isSelected && <CheckCircle2 className="w-4 h-4 text-[#0084D6] shrink-0 ml-1" />}
                      </button>
                    );
                  })}
                </div>
              </div>

              {/* Property Type & Urgency */}
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                <div>
                  <label className="block text-xs font-bold text-slate-700 mb-1.5">
                    Property Type
                  </label>
                  <select
                    value={formData.propertyType}
                    onChange={(e) =>
                      setFormData({
                        ...formData,
                        propertyType: e.target.value as QuoteRequest['propertyType'],
                      })
                    }
                    className="w-full px-3.5 py-2.5 rounded-xl border border-slate-300 text-sm bg-white focus:ring-2 focus:ring-[#0084D6] focus:outline-none"
                  >
                    <option value="Residential">Residential (House / Townhouse)</option>
                    <option value="Commercial">Commercial Building / Retail</option>
                    <option value="Industrial">Industrial Warehouse / Factory</option>
                    <option value="Complex / Body Corporate">Complex / Body Corporate</option>
                  </select>
                </div>

                <div>
                  <label className="block text-xs font-bold text-slate-700 mb-1.5">
                    Suburb / Location in Gauteng
                  </label>
                  <input
                    type="text"
                    required
                    placeholder="e.g. Pretoria East, Centurion, Sandton"
                    value={formData.location}
                    onChange={(e) => setFormData({ ...formData, location: e.target.value })}
                    className="w-full px-3.5 py-2.5 rounded-xl border border-slate-300 text-sm focus:ring-2 focus:ring-[#0084D6] focus:outline-none"
                  />
                </div>
              </div>

              {/* Contact Details */}
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                <div>
                  <label className="block text-xs font-bold text-slate-700 mb-1.5">
                    Your Full Name *
                  </label>
                  <input
                    type="text"
                    required
                    placeholder="e.g. John Smith"
                    value={formData.fullName}
                    onChange={(e) => setFormData({ ...formData, fullName: e.target.value })}
                    className="w-full px-3.5 py-2.5 rounded-xl border border-slate-300 text-sm focus:ring-2 focus:ring-[#0084D6] focus:outline-none"
                  />
                </div>

                <div>
                  <label className="block text-xs font-bold text-slate-700 mb-1.5">
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
              </div>

              {/* Urgent Leak Checkbox */}
              <div className="flex items-center gap-3 bg-amber-50 border border-amber-200 p-3 rounded-xl">
                <input
                  type="checkbox"
                  id="urgent-need-checkbox"
                  checked={formData.urgentNeed}
                  onChange={(e) => setFormData({ ...formData, urgentNeed: e.target.checked })}
                  className="w-4 h-4 text-amber-500 rounded-sm focus:ring-amber-400"
                />
                <label htmlFor="urgent-need-checkbox" className="text-xs text-amber-900 font-bold flex items-center gap-1.5 cursor-pointer">
                  <ShieldAlert className="w-4 h-4 text-amber-600" />
                  This is an urgent active leak / emergency repair request
                </label>
              </div>

              {/* Additional Notes */}
              <div>
                <label className="block text-xs font-bold text-slate-700 mb-1.5">
                  Job Description / Roof Condition (Optional)
                </label>
                <textarea
                  rows={2}
                  placeholder="Tell us about the issue (e.g. flat roof leaking around chimney, need 30m of charcoal gutters, peeling paint, tree branches touching roof...)"
                  value={formData.notes}
                  onChange={(e) => setFormData({ ...formData, notes: e.target.value })}
                  className="w-full px-3.5 py-2 rounded-xl border border-slate-300 text-xs focus:ring-2 focus:ring-[#0084D6] focus:outline-none"
                />
              </div>

              {/* Dual Action Buttons */}
              <div className="pt-2 flex flex-col sm:flex-row gap-3">
                <button
                  type="button"
                  id="modal-whatsapp-send"
                  onClick={handleWhatsAppSubmit}
                  className="flex-1 bg-[#25D366] hover:bg-[#20ba5a] text-white font-black py-3.5 px-4 rounded-xl text-sm shadow-md flex items-center justify-center gap-2 transition-all cursor-pointer"
                >
                  <MessageCircle className="w-5 h-5 fill-white" />
                  <span>Send via WhatsApp Instant</span>
                </button>

                <button
                  type="submit"
                  id="modal-direct-send"
                  className="flex-1 bg-[#0B2F64] hover:bg-[#08234D] text-white font-black py-3.5 px-4 rounded-xl text-sm shadow-md flex items-center justify-center gap-2 transition-all cursor-pointer"
                >
                  <Send className="w-4 h-4 text-amber-400" />
                  <span>Submit Free Quote Request</span>
                </button>
              </div>

              <p className="text-[11px] text-center text-slate-500 font-medium">
                Or call us immediately at <strong className="text-slate-900">{COMPANY_PHONE}</strong> for instant advice.
              </p>
            </form>
          )}
        </div>
      </div>
    </div>
  );
};
