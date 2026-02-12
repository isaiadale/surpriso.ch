import { useEffect } from 'react';
import { useCookieConsentStore } from '@/stores/cookieConsentStore';
import { CookieBanner } from './CookieBanner';
import { CookieSettings } from './CookieSettings';

export const CookieConsentManager = () => {
  const { isVisible, showSettings, hasValidConsent, openBanner } = useCookieConsentStore();

  useEffect(() => {
    if (!hasValidConsent()) {
      const timer = setTimeout(() => {
        openBanner();
      }, 1000);
      return () => clearTimeout(timer);
    }
  }, []);

  if (!isVisible) return null;

  return showSettings ? <CookieSettings /> : <CookieBanner />;
};
