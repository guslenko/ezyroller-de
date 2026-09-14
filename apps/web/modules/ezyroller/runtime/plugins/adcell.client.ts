import { orderGetters } from '@plentymarkets/shop-api';
import { ADCELL_CONSENT, ADCELL_EVENT_ID, ADCELL_TRACKING_ID } from '../constants';
import type { AdcellTrackingApi } from '../types';

const ATTRIBUTION_SCRIPT_ID = 'ezyroller-adcell-attribution';

const loadAttribution = () => {
  if (document.getElementById(ATTRIBUTION_SCRIPT_ID)) return;

  const script = document.createElement('script');
  script.id = ATTRIBUTION_SCRIPT_ID;
  script.async = true;
  script.src = 'https://t.adcell.com/js/trad.js?s=plenty-pwa';
  script.addEventListener('load', () => {
    const target = window as unknown as { Adcell?: AdcellTrackingApi };
    target.Adcell?.Tracking?.track();
  });
  document.head.appendChild(script);
};

const purchaseWasSent = (transactionId: string) => {
  const key = `ezyroller:adcell:purchase:${transactionId}`;
  if (sessionStorage.getItem(key)) return true;
  sessionStorage.setItem(key, '1');
  return false;
};

export default defineNuxtPlugin(() => {
  const { consent } = useCookieConsent(ADCELL_CONSENT);
  if (consent.value) loadAttribution();
  watch(consent, (accepted) => accepted && loadAttribution());

  usePlentyEvent().on('frontend:orderCreated', (order) => {
    if (!consent.value || !order.order || !order.totals) return;

    const transactionId = orderGetters.getId(order);
    if (!transactionId || purchaseWasSent(transactionId)) return;

    const totals = orderGetters.getTotals(order);
    const netMerchandiseValue = Math.max(0, totals.totalNet - totals.shippingNet).toFixed(2);
    if (netMerchandiseValue === '0.00') return;

    const params = new URLSearchParams({
      s: 'plenty-pwa',
      pid: ADCELL_TRACKING_ID,
      eventid: ADCELL_EVENT_ID,
      referenz: transactionId,
      betrag: netMerchandiseValue,
      cv: String(Date.now()),
    });
    params.append('vouchers[]', totals.couponCode || '');

    const script = document.createElement('script');
    script.async = false;
    script.dataset.ezyrollerAdcellConversion = transactionId;
    script.src = `https://t.adcell.com/t/track.js?${params.toString()}`;
    document.head.appendChild(script);
  });
});
