import { useState } from 'react';
import { Button } from '@/components/ui/button';
import { Switch } from '@/components/ui/switch';
import { useCookieConsentStore } from '@/stores/cookieConsentStore';

export const CookieSettings = () => {
  const { analytics, advertising, acceptAll, rejectAll, savePreferences } = useCookieConsentStore();

  const [analyticsEnabled, setAnalyticsEnabled] = useState(analytics);
  const [advertisingEnabled, setAdvertisingEnabled] = useState(advertising);

  return (
    <div className="fixed bottom-4 right-4 left-4 md:left-auto md:max-w-lg z-50 animate-fade-in-up">
      <div className="relative bg-background rounded-2xl shadow-elevated border border-border p-6 max-h-[80vh] overflow-y-auto">
        <span className="absolute top-1 right-1 text-5xl" aria-hidden="true">🍪</span>

        <h2 className="font-display font-semibold text-[20px] text-[#000000] leading-tight pr-10">
          Cookie-Einstellungen anpassen
        </h2>

        <p className="font-body text-base text-[#846273] mt-3">
          Wählen Sie aus, welche Cookies Sie zulassen möchten. Notwendige Cookies sind für die Grundfunktionen der Website erforderlich und können nicht deaktiviert werden.
        </p>

        <div className="mt-5 space-y-4">
          <div className="flex items-center justify-between gap-4 py-3 border-b border-border">
            <div className="flex-1">
              <p className="font-body font-semibold text-[#000000]">Notwendig</p>
              <p className="font-body text-sm text-[#846273] mt-0.5">
                Erforderlich für grundlegende Funktionen wie Warenkorb und Checkout.
              </p>
            </div>
            <div className="flex items-center gap-2">
              <span className="text-xs text-[#846273]">Immer aktiv</span>
              <Switch checked disabled />
            </div>
          </div>

          <div className="flex items-center justify-between gap-4 py-3 border-b border-border">
            <div className="flex-1">
              <p className="font-body font-semibold text-[#000000]">Analyse-Cookies</p>
              <p className="font-body text-sm text-[#846273] mt-0.5">
                Helfen uns zu verstehen, wie Besucher unsere Website nutzen.
              </p>
            </div>
            <Switch
              checked={analyticsEnabled}
              onCheckedChange={setAnalyticsEnabled}
            />
          </div>

          <div className="flex items-center justify-between gap-4 py-3 border-b border-border">
            <div className="flex-1">
              <p className="font-body font-semibold text-[#000000]">Werbe-Cookies</p>
              <p className="font-body text-sm text-[#846273] mt-0.5">
                Ermöglichen personalisierte Werbung und Erfolgsmessung von Kampagnen.
              </p>
            </div>
            <Switch
              checked={advertisingEnabled}
              onCheckedChange={setAdvertisingEnabled}
            />
          </div>
        </div>

        <p className="font-body text-xs text-[#846273] mt-4">
          Das Deaktivieren bestimmter Cookies kann die Funktionalität der Website einschränken.
        </p>

        <div className="flex flex-col sm:flex-row gap-2 mt-5">
          <Button
            variant="outline"
            onClick={() => savePreferences(analyticsEnabled, advertisingEnabled)}
            className="flex-1"
          >
            Speichern
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
