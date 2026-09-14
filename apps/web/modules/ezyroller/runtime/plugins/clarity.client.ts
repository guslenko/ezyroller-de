import { CLARITY_CONSENT } from '../constants';
import type { ClarityQueue } from '../types';

export default defineNuxtPlugin(() => {
  const load = () => {
    if (document.querySelector('script[data-ezyroller-clarity]')) return;

    const target = window as unknown as { clarity?: ClarityQueue };
    target.clarity ??= Object.assign(
      (...args: unknown[]) => {
        target.clarity?.q.push(args);
      },
      { q: [] as unknown[][] },
    );
    const script = document.createElement('script');
    script.async = true;
    script.dataset.ezyrollerClarity = 'wd1rqk9hv4';
    script.src = 'https://www.clarity.ms/tag/wd1rqk9hv4';
    document.head.appendChild(script);
  };

  const { consent } = useCookieConsent(CLARITY_CONSENT);
  if (consent.value) load();
  watch(consent, (accepted) => accepted && load());
});
