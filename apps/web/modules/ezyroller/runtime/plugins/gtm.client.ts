import { GOOGLE_TAG_MANAGER_CONSENT } from '../constants';

export default defineNuxtPlugin(() => {
  const id = (useRuntimeConfig().public as { ezyrollerGtmId?: string }).ezyrollerGtmId;
  if (!id) return;

  const trackingWindow = window as unknown as { dataLayer?: Record<string, unknown>[] };
  const dataLayer = (trackingWindow.dataLayer ||= []);

  const load = () => {
    if (document.querySelector(`script[data-ezyroller-gtm="${id}"]`)) return;

    dataLayer.push({ 'gtm.start': Date.now(), event: 'gtm.js' });

    const script = document.createElement('script');
    script.async = true;
    script.dataset.ezyrollerGtm = id;
    script.src = `https://www.googletagmanager.com/gtm.js?id=${encodeURIComponent(id)}`;
    document.head.appendChild(script);
  };

  const { consent } = useCookieConsent(GOOGLE_TAG_MANAGER_CONSENT);
  if (consent.value) load();
  watch(consent, (accepted) => accepted && load());
});
