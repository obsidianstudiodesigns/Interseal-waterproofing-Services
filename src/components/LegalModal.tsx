import React, { useState, useEffect } from 'react';
import { X, ShieldCheck, FileText, Lock, Cookie, Scale, Search, Printer, ExternalLink, Phone, Mail, Building, CheckCircle2 } from 'lucide-react';
import { LEGAL_POLICIES, LegalDocument } from '../data/legalPolicies';
import { COMPANY_PHONE, WHATSAPP_INTL } from '../data/servicesData';

export type LegalTabKey = 'privacy' | 'popi' | 'paia' | 'cookies';

interface LegalModalProps {
  isOpen: boolean;
  onClose: () => void;
  initialTab?: LegalTabKey;
}

export const LegalModal: React.FC<LegalModalProps> = ({
  isOpen,
  onClose,
  initialTab = 'privacy',
}) => {
  const [activeTab, setActiveTab] = useState<LegalTabKey>(initialTab);
  const [searchQuery, setSearchQuery] = useState('');
  const [copiedNotification, setCopiedNotification] = useState(false);

  useEffect(() => {
    if (initialTab) {
      setActiveTab(initialTab);
    }
  }, [initialTab, isOpen]);

  useEffect(() => {
    const handleKeyDown = (e: KeyboardEvent) => {
      if (e.key === 'Escape' && isOpen) {
        onClose();
      }
    };
    window.addEventListener('keydown', handleKeyDown);
    return () => window.removeEventListener('keydown', handleKeyDown);
  }, [isOpen, onClose]);

  if (!isOpen) return null;

  const currentDoc: LegalDocument = LEGAL_POLICIES[activeTab];

  const filteredSections = searchQuery.trim() === ''
    ? currentDoc.sections
    : currentDoc.sections.filter(
        (sec) =>
          sec.title.toLowerCase().includes(searchQuery.toLowerCase()) ||
          sec.content.some((c) => c.toLowerCase().includes(searchQuery.toLowerCase()))
      );

  const tabs: { key: LegalTabKey; label: string; shortLabel: string; icon: React.ReactNode }[] = [
    {
      key: 'privacy',
      label: 'Privacy Statement',
      shortLabel: 'Privacy',
      icon: <Lock className="w-4 h-4" />,
    },
    {
      key: 'popi',
      label: 'POPI Act Policy',
      shortLabel: 'POPIA (SA)',
      icon: <ShieldCheck className="w-4 h-4" />,
    },
    {
      key: 'paia',
      label: 'PAIA Manual (Sec 51)',
      shortLabel: 'PAIA Manual',
      icon: <Scale className="w-4 h-4" />,
    },
    {
      key: 'cookies',
      label: 'Cookie Policy',
      shortLabel: 'Cookies',
      icon: <Cookie className="w-4 h-4" />,
    },
  ];

  const handlePrint = () => {
    window.print();
  };

  const handleShareLink = () => {
    if (navigator.clipboard) {
      navigator.clipboard.writeText(window.location.href);
      setCopiedNotification(true);
      setTimeout(() => setCopiedNotification(false), 2500);
    }
  };

  return (
    <div
      id="legal-modal-backdrop"
      className="fixed inset-0 z-50 overflow-y-auto bg-slate-950/80 backdrop-blur-xs flex items-center justify-center p-2 sm:p-4 animate-in fade-in duration-200"
      onClick={(e) => {
        if (e.target === e.currentTarget) onClose();
      }}
    >
      <div
        id="legal-modal-container"
        className="relative bg-white rounded-2xl sm:rounded-3xl max-w-4xl w-full shadow-2xl border border-slate-200 overflow-hidden flex flex-col max-h-[92vh]"
      >
        {/* Modal Top Banner */}
        <div className="bg-[#0B2F64] text-white px-5 py-4 sm:px-8 sm:py-5 flex items-center justify-between border-b border-white/10 shrink-0">
          <div className="flex items-center gap-3">
            <div className="p-2.5 bg-[#0084D6] rounded-xl text-white shadow-sm">
              <ShieldCheck className="w-5 h-5 text-amber-300" />
            </div>
            <div>
              <div className="flex items-center gap-2">
                <h3 className="text-base sm:text-lg font-black tracking-tight text-white">
                  Compliance &amp; Legal Policies
                </h3>
                <span className="hidden sm:inline-block bg-amber-400/20 text-amber-300 text-[10px] font-extrabold uppercase px-2 py-0.5 rounded-full border border-amber-400/30">
                  South Africa
                </span>
              </div>
              <p className="text-xs text-sky-200">
                Interseal Waterproofing Services &bull; POPIA &amp; PAIA Registered
              </p>
            </div>
          </div>

          <div className="flex items-center gap-2">
            <button
              onClick={handlePrint}
              title="Print policy document"
              className="p-2 text-sky-200 hover:text-white hover:bg-white/10 rounded-lg transition-colors hidden sm:inline-flex items-center gap-1.5 text-xs font-semibold"
            >
              <Printer className="w-4 h-4" />
              <span>Print</span>
            </button>
            <button
              id="legal-modal-close-button"
              onClick={onClose}
              className="p-2 rounded-full text-white/80 hover:text-white hover:bg-white/10 transition-colors"
              aria-label="Close modal"
            >
              <X className="w-6 h-6" />
            </button>
          </div>
        </div>

        {/* Navigation Tabs Bar */}
        <div className="bg-slate-100 border-b border-slate-200 px-3 sm:px-6 py-2 shrink-0 flex items-center justify-between overflow-x-auto gap-2">
          <div className="flex space-x-1 sm:space-x-2">
            {tabs.map((tab) => {
              const isActive = activeTab === tab.key;
              return (
                <button
                  key={tab.key}
                  id={`legal-tab-${tab.key}`}
                  onClick={() => {
                    setActiveTab(tab.key);
                    setSearchQuery('');
                  }}
                  className={`flex items-center gap-1.5 px-3 py-2 rounded-xl text-xs font-bold transition-all cursor-pointer whitespace-nowrap ${
                    isActive
                      ? 'bg-[#0084D6] text-white shadow-sm'
                      : 'text-slate-600 hover:text-slate-900 hover:bg-white/80'
                  }`}
                >
                  {tab.icon}
                  <span className="hidden md:inline">{tab.label}</span>
                  <span className="md:hidden">{tab.shortLabel}</span>
                </button>
              );
            })}
          </div>

          {/* Quick in-document Search */}
          <div className="relative hidden sm:block w-48 lg:w-56 shrink-0">
            <Search className="w-3.5 h-3.5 absolute left-3 top-1/2 -translate-y-1/2 text-slate-400" />
            <input
              type="text"
              placeholder="Search in policy..."
              value={searchQuery}
              onChange={(e) => setSearchQuery(e.target.value)}
              className="w-full pl-8 pr-3 py-1.5 text-xs rounded-lg border border-slate-300 bg-white focus:outline-none focus:ring-1 focus:ring-[#0084D6]"
            />
            {searchQuery && (
              <button
                onClick={() => setSearchQuery('')}
                className="absolute right-2 top-1/2 -translate-y-1/2 text-slate-400 hover:text-slate-600 text-xs"
              >
                &times;
              </button>
            )}
          </div>
        </div>

        {/* Policy Document Content */}
        <div className="p-4 sm:p-8 overflow-y-auto flex-1 space-y-6 text-slate-700 text-xs sm:text-sm leading-relaxed">
          {/* Header Info Box */}
          <div className="bg-slate-50 border border-slate-200 p-4 sm:p-5 rounded-2xl flex flex-col sm:flex-row sm:items-center justify-between gap-3">
            <div>
              <div className="flex items-center gap-2">
                <span className="bg-[#0B2F64] text-white font-extrabold text-[10px] uppercase px-2.5 py-0.5 rounded-full">
                  {currentDoc.badge}
                </span>
                <span className="text-[11px] text-slate-400">
                  Last Updated: {currentDoc.lastUpdated}
                </span>
              </div>
              <h2 className="text-xl sm:text-2xl font-black text-slate-900 mt-1">
                {currentDoc.title}
              </h2>
              <p className="text-xs text-slate-600 mt-0.5">
                {currentDoc.subtitle}
              </p>
            </div>

            <div className="flex items-center gap-2 shrink-0">
              <button
                onClick={handleShareLink}
                className="text-xs font-semibold px-3 py-1.5 rounded-lg border border-slate-300 bg-white hover:bg-slate-100 text-slate-700 flex items-center gap-1.5"
              >
                {copiedNotification ? (
                  <>
                    <CheckCircle2 className="w-3.5 h-3.5 text-emerald-600" />
                    <span className="text-emerald-700">Link Copied!</span>
                  </>
                ) : (
                  <>
                    <ExternalLink className="w-3.5 h-3.5 text-slate-500" />
                    <span>Copy Link</span>
                  </>
                )}
              </button>
            </div>
          </div>

          {/* Search Result Counter */}
          {searchQuery && (
            <div className="text-xs text-sky-700 bg-sky-50 px-3 py-1.5 rounded-lg border border-sky-200">
              Showing sections matching &ldquo;{searchQuery}&rdquo; ({filteredSections.length} found).
            </div>
          )}

          {/* Rendered Sections */}
          <div className="space-y-6 divide-y divide-slate-100">
            {filteredSections.map((sec, idx) => (
              <div key={idx} className={idx > 0 ? 'pt-5' : ''}>
                <h3 className="text-sm sm:text-base font-black text-[#0B2F64] mb-2 flex items-center gap-2">
                  <span className="w-1.5 h-4 bg-amber-400 rounded-full inline-block"></span>
                  {sec.title}
                </h3>
                <div className="space-y-2 text-slate-600 text-xs sm:text-sm pl-3.5">
                  {sec.content.map((paragraph, pIdx) => (
                    <p key={pIdx} className="leading-relaxed">
                      {paragraph}
                    </p>
                  ))}
                </div>
              </div>
            ))}

            {filteredSections.length === 0 && (
              <div className="text-center py-8 text-slate-400">
                <Search className="w-8 h-8 mx-auto mb-2 opacity-50" />
                <p className="font-semibold text-sm">No sections match your search.</p>
                <button
                  onClick={() => setSearchQuery('')}
                  className="mt-2 text-[#0084D6] hover:underline font-bold text-xs"
                >
                  Clear search query
                </button>
              </div>
            )}
          </div>

          {/* Statutory Information Officer / Contacts Card */}
          <div className="mt-8 bg-gradient-to-br from-slate-900 to-[#0B2F64] text-white p-5 sm:p-6 rounded-2xl shadow-sm border border-slate-800">
            <h4 className="text-sm font-black text-amber-300 uppercase tracking-wider mb-2 flex items-center gap-2">
              <Building className="w-4 h-4" />
              Information Officer &amp; Regulatory Enquiries
            </h4>
            <p className="text-xs text-slate-300 mb-4">
              For any formal requests regarding access to records under PAIA, queries on your personal data processing under POPIA, or cookie preference updates:
            </p>

            <div className="grid grid-cols-1 sm:grid-cols-2 gap-3 text-xs">
              <div className="bg-white/10 p-3 rounded-xl">
                <span className="text-sky-300 block font-bold text-[11px]">Responsible Party:</span>
                <span className="font-semibold text-white">Interseal Waterproofing Services</span>
                <span className="block text-slate-300 mt-1">Gauteng, South Africa</span>
              </div>

              <div className="bg-white/10 p-3 rounded-xl space-y-1">
                <span className="text-sky-300 block font-bold text-[11px]">Direct Channels:</span>
                <a
                  href={`tel:${COMPANY_PHONE}`}
                  className="flex items-center gap-1.5 text-white hover:text-amber-300 font-semibold"
                >
                  <Phone className="w-3.5 h-3.5 text-amber-400" />
                  <span>{COMPANY_PHONE}</span>
                </a>
                <a
                  href="mailto:obsidianstudiodesigns@gmail.com"
                  className="flex items-center gap-1.5 text-sky-200 hover:text-white"
                >
                  <Mail className="w-3.5 h-3.5 text-sky-300" />
                  <span>obsidianstudiodesigns@gmail.com</span>
                </a>
              </div>
            </div>

            <div className="mt-4 pt-3 border-t border-white/10 flex flex-col sm:flex-row items-start sm:items-center justify-between text-[11px] text-slate-400 gap-2">
              <span>Information Regulator SA: inforegulator.org.za</span>
              <a
                href="https://inforegulator.org.za"
                target="_blank"
                rel="noopener noreferrer"
                className="text-amber-400 hover:underline flex items-center gap-1 font-semibold"
              >
                <span>Visit Regulator Portal</span>
                <ExternalLink className="w-3 h-3" />
              </a>
            </div>
          </div>
        </div>

        {/* Modal Footer Controls */}
        <div className="bg-slate-100 border-t border-slate-200 px-5 py-3.5 sm:px-8 flex flex-col sm:flex-row items-center justify-between gap-3 shrink-0">
          <div className="flex items-center gap-2 text-slate-500 text-xs">
            <CheckCircle2 className="w-4 h-4 text-emerald-600" />
            <span>South Africa POPIA &amp; PAIA Compliant Framework</span>
          </div>

          <div className="flex items-center gap-2 w-full sm:w-auto justify-end">
            <button
              onClick={onClose}
              className="w-full sm:w-auto bg-[#0B2F64] hover:bg-[#072044] text-white text-xs font-black px-6 py-2.5 rounded-xl transition-colors cursor-pointer shadow-sm"
            >
              I Understand &amp; Close
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};
