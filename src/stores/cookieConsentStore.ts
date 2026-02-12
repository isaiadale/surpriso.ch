import { create } from 'zustand';
import { persist, createJSONStorage } from 'zustand/middleware';

const CONSENT_VERSION = 1;

interface CookieConsentState {
  necessary: boolean;
  analytics: boolean;
  advertising: boolean;
  consentedAt: string | null;
  version: number | null;

  isVisible: boolean;
  showSettings: boolean;

  acceptAll: () => void;
  rejectAll: () => void;
  savePreferences: (analytics: boolean, advertising: boolean) => void;
  openBanner: () => void;
  openSettings: () => void;
  closeBanner: () => void;
  hasValidConsent: () => boolean;
}

export const useCookieConsentStore = create<CookieConsentState>()(
  persist(
    (set, get) => ({
      necessary: true,
      analytics: false,
      advertising: false,
      consentedAt: null,
      version: null,

      isVisible: false,
      showSettings: false,

      acceptAll: () => {
        set({
          necessary: true,
          analytics: true,
          advertising: true,
          consentedAt: new Date().toISOString(),
          version: CONSENT_VERSION,
          isVisible: false,
          showSettings: false,
        });
      },

      rejectAll: () => {
        set({
          necessary: true,
          analytics: false,
          advertising: false,
          consentedAt: new Date().toISOString(),
          version: CONSENT_VERSION,
          isVisible: false,
          showSettings: false,
        });
      },

      savePreferences: (analytics: boolean, advertising: boolean) => {
        set({
          necessary: true,
          analytics,
          advertising,
          consentedAt: new Date().toISOString(),
          version: CONSENT_VERSION,
          isVisible: false,
          showSettings: false,
        });
      },

      openBanner: () => {
        set({ isVisible: true, showSettings: false });
      },

      openSettings: () => {
        set({ isVisible: true, showSettings: true });
      },

      closeBanner: () => {
        set({ isVisible: false, showSettings: false });
      },

      hasValidConsent: () => {
        const { consentedAt, version } = get();
        return consentedAt !== null && version === CONSENT_VERSION;
      },
    }),
    {
      name: 'surpriso-cookie-consent',
      storage: createJSONStorage(() => localStorage),
      partialize: (state) => ({
        necessary: state.necessary,
        analytics: state.analytics,
        advertising: state.advertising,
        consentedAt: state.consentedAt,
        version: state.version,
      }),
    }
  )
);
