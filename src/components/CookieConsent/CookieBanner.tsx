import { Button } from '@/components/ui/button';
import { useCookieConsentStore } from '@/stores/cookieConsentStore';

export const CookieBanner = () => {
  const { acceptAll, rejectAll, openSettings } = useCookieConsentStore();

  return (
    <div className="fixed bottom-4 right-4 left-4 md:left-auto md:max-w-md z-50 animate-fade-in-up">
      <div className="relative bg-background rounded-2xl shadow-elevated border border-border p-6">
        <span className="absolute top-4 right-4 text-2xl" aria-hidden="true">🍪</span>

        <h2 className="font-display font-semibold text-[24px] md:text-[36px] text-[#000000] leading-tight pr-10">
          Cookies für das perfekte Geschenk?
        </h2>

        <p className="font-body text-base text-[#846273] mt-3">
          Wir nutzen Cookies, um Ihnen das beste Einkaufserlebnis zu bieten und unsere Website zu verbessern.
        </p>

        <div className="flex flex-col sm:flex-row gap-2 mt-5">
          <Button variant="outline" onClick={openSettings} className="flex-1">
            Anpassen
          </Button>
          <Button variant="outline" onClick={rejectAll} className="flex-1">
            Ablehnen
          </Button>
          <Button onClick={acceptAll} className="flex-1">
            Akzeptieren
          </Button>
        </div>
      </div>
    </div>
  );
};
