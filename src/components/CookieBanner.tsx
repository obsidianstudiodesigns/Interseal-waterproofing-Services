import React, { useState, useEffect } from 'react';
import { Cookie, ShieldCheck, Settings, Check, X, ChevronDown, ChevronUp } from 'lucide-react';
import { LegalTabKey } from './LegalModal';

interface CookiePreferences {
  essential: boolean;
  functional: boolean;
  analytics: boolean;
  date: string;
}

interface CookieBannerProps {
  onOpenLegal: (tab: LegalTabKey) => void;
  forceShow?: boolean;
  onCloseForceShow?: () => void;
}

export const CookieBanner: React.FC<CookieBannerProps> = ({
  onOpenLegal,
  forceShow = false,
  onCloseForceShow,
}) => {
  const [isVisible, setIsVisible] = useState(false);
  const [showCustomize, setShowCustomize] = useState(false);
  const [preferences, setPreferences] = useState<CookiePreferences>({
    essential: true,
    functional: true,
    analytics: true,
    date: '',
  });

  useEffect(() => {
    const saved = localStorage.getItem('interseal_cookie_consent');
    if (!saved || forceShow) {
      setIsVisible(true);
      if (saved) {
        try {
          const parsed = JSON.parse(saved);
          setPreferences(parsed);
        } catch {
          // ignore error
        }
      }
    } else {
      setIsVisible(false);
    }
  }, [forceShow]);

  const saveConsent = (prefs: CookiePreferences) => {
    const updated = { ...prefs, date: new Date().toISOString() };
    localStorage.setItem('interseal_cookie_consent', JSON.stringify(updated));
    setPreferences(updated);
    setIsVisible(false);
    if (onCloseForceShow) onCloseForceShow();
  };

  const handleAcceptAll = () => {
    saveConsent({
      essential: true,
      functional: true,
      analytics: true,
      date: '',
    });
  };

  const handleEssentialOnly = () => {
    saveConsent({
      essential: true,
      functional: false,
      analytics: false,
      date: '',
    });
  };

  const handleSaveCustom = () => {
    saveConsent(preferences);
  };

  if (!isVisible && !forceShow) return null;

  return (
    <div
      id="cookie-consent-banner"
      className="fixed bottom-0 left-0 right-0 z-45 p-3 sm:p-5 bg-slate-950/95 backdrop-blur-md text-white border-t border-white/15 shadow-2xl transition-all duration-300 animate-in slide-in-from-bottom-6 font-sans"
      role="region"
      aria-label="Cookie consent notice"
    >
      <div className="max-w-7xl mx-auto flex flex-col gap-4">
        {/* Main Banner Message */}
        <div className="flex flex-col lg:flex-row items-start lg:items-center justify-between gap-4">
          <div className="flex items-start gap-3.5 max-w-4xl">
            <div className="p-2.5 bg-amber-500/20 text-amber-400 rounded-xl shrink-0 mt-0.5 border border-amber-500/30">
              <Cookie className="w-5 h-5" />
            </div>
            <div className="space-y-1">
              <div className="flex items-center gap-2">
                <h4 className="text-sm font-bold text-white">
                  Cookie &amp; Privacy Notice (POPIA Compliant)
                </h4>
                <span className="text-[10px] font-extrabold bg-sky-500/20 text-sky-300 px-2 py-0.5 rounded-md uppercase border border-sky-500/30">
                  South Africa
                </span>
              </div>
              <p className="text-xs text-slate-300 leading-relaxed">
                We use strictly necessary cookies and local storage to power our instant quotation tools, remember your inspection location, and maintain website security. In line with the South African <strong>Protection of Personal Information Act (POPIA)</strong>, you can choose which non-essential cookies to allow.
              </p>
              <div className="flex flex-wrap items-center gap-3 pt-0.5 text-xs">
                <button
                  type="button"
                  onClick={() => onOpenLegal('cookies')}
                  className="text-amber-400 hover:text-amber-300 underline font-semibold cursor-pointer"
                >
                  Read Cookie Policy
                </button>
                <span className="text-slate-600">&bull;</span>
                <button
                  type="button"
                  onClick={() => onOpenLegal('popi')}
                  className="text-sky-300 hover:text-sky-200 underline font-semibold cursor-pointer"
                >
                  POPI Act Policy
                </button>
                <span className="text-slate-600">&bull;</span>
                <button
                  type="button"
                  onClick={() => onOpenLegal('privacy')}
                  className="text-slate-300 hover:text-white underline font-semibold cursor-pointer"
                >
                  Privacy Statement
                </button>
              </div>
            </div>
          </div>

          {/* Action Buttons */}
          <div className="flex flex-wrap items-center gap-2.5 w-full lg:w-auto shrink-0 justify-end">
            <button
              id="cookie-toggle-customize"
              type="button"
              onClick={() => setShowCustomize(!showCustomize)}
              className="text-xs font-bold text-slate-300 hover:text-white bg-white/10 hover:bg-white/15 px-3.5 py-2.5 rounded-xl transition-colors flex items-center gap-1.5 cursor-pointer"
            >
              <Settings className="w-3.5 h-3.5" />
              <span>Customize</span>
              {showCustomize ? <ChevronUp className="w-3 h-3" /> : <ChevronDown className="w-3 h-3" />}
            </button>

            <button
              id="cookie-essential-only"
              type="button"
              onClick={handleEssentialOnly}
              className="text-xs font-bold text-slate-300 hover:text-white bg-white/10 hover:bg-white/15 px-3.5 py-2.5 rounded-xl transition-colors cursor-pointer"
            >
              Essential Only
            </button>

            <button
              id="cookie-accept-all"
              type="button"
              onClick={handleAcceptAll}
              className="text-xs font-black text-slate-950 bg-gradient-to-r from-amber-400 to-amber-500 hover:from-amber-500 hover:to-amber-600 px-4 py-2.5 rounded-xl shadow-md transition-all hover:scale-105 active:scale-95 cursor-pointer flex items-center gap-1.5"
            >
              <Check className="w-3.5 h-3.5 stroke-[3]" />
              <span>Accept All Cookies</span>
            </button>

            {forceShow && (
              <button
                type="button"
                onClick={() => {
                  setIsVisible(false);
                  if (onCloseForceShow) onCloseForceShow();
                }}
                className="p-2 text-slate-400 hover:text-white rounded-lg transition-colors"
                aria-label="Close"
              >
                <X className="w-4 h-4" />
              </button>
            )}
          </div>
        </div>

        {/* Detailed Customization Panel */}
        {showCustomize && (
          <div className="pt-3 mt-2 border-t border-white/10 grid grid-cols-1 md:grid-cols-3 gap-3 animate-in fade-in duration-200">
            {/* Essential Category */}
            <div className="bg-white/5 p-3 rounded-xl border border-white/10 flex flex-col justify-between">
              <div>
                <div className="flex items-center justify-between mb-1">
                  <span className="text-xs font-bold text-white flex items-center gap-1.5">
                    <ShieldCheck className="w-3.5 h-3.5 text-emerald-400" />
                    Strictly Necessary
                  </span>
                  <span className="text-[10px] font-extrabold bg-emerald-500/20 text-emerald-300 px-1.5 py-0.5 rounded">
                    Always Active
                  </span>
                </div>
                <p className="text-[11px] text-slate-400 leading-normal">
                  Required for site security, WhatsApp routing, and preserving core navigation.
                </p>
              </div>
            </div>

            {/* Functional Category */}
            <div className="bg-white/5 p-3 rounded-xl border border-white/10 flex flex-col justify-between">
              <div>
                <div className="flex items-center justify-between mb-1">
                  <span className="text-xs font-bold text-white">Functional &amp; Quote Drafts</span>
                  <input
                    type="checkbox"
                    id="cookie-functional-toggle"
                    checked={preferences.functional}
                    onChange={(e) =>
                      setPreferences({ ...preferences, functional: e.target.checked })
                    }
                    className="w-4 h-4 rounded text-amber-500 focus:ring-amber-400 cursor-pointer"
                  />
                </div>
                <p className="text-[11px] text-slate-400 leading-normal">
                  Remembers your selected roof services and location details so you do not lose your draft.
                </p>
              </div>
            </div>

            {/* Analytics Category */}
            <div className="bg-white/5 p-3 rounded-xl border border-white/10 flex flex-col justify-between">
              <div>
                <div className="flex items-center justify-between mb-1">
                  <span className="text-xs font-bold text-white">Performance &amp; Quality</span>
                  <input
                    type="checkbox"
                    id="cookie-analytics-toggle"
                    checked={preferences.analytics}
                    onChange={(e) =>
                      setPreferences({ ...preferences, analytics: e.target.checked })
                    }
                    className="w-4 h-4 rounded text-amber-500 focus:ring-amber-400 cursor-pointer"
                  />
                </div>
                <p className="text-[11px] text-slate-400 leading-normal">
                  Aggregated, anonymous stats to verify page speed and optimize roofing services display.
                </p>
              </div>
              <div className="mt-3 pt-2 flex justify-end">
                <button
                  type="button"
                  onClick={handleSaveCustom}
                  className="w-full bg-[#0084D6] hover:bg-[#0070B8] text-white text-xs font-bold py-1.5 px-3 rounded-lg transition-colors cursor-pointer"
                >
                  Save My Preferences
                </button>
              </div>
            </div>
          </div>
        )}
      </div>
    </div>
  );
};
