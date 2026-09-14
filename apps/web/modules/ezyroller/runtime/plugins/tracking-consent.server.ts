import { ADCELL_CONSENT, CLARITY_CONSENT, GOOGLE_TAG_MANAGER_CONSENT } from '../constants';

export default defineNuxtPlugin(() => {
  const { add } = useRegisterCookie();
  const marketingGroup = 'CookieBar.marketing.label';

  add(
    {
      name: GOOGLE_TAG_MANAGER_CONSENT,
      Provider: 'Google Ireland Limited',
      Status: 'CookieBar.tracking.googleTagManager.status',
      PrivacyPolicy: 'https://policies.google.com/privacy',
      Lifespan: '2 years',
      cookieNames: ['/^_ga/', '_ga', '_gid', '_gat', '_gcl_au'],
    },
    marketingGroup,
  );

  add(
    {
      name: ADCELL_CONSENT,
      Provider: 'Firstlead GmbH / ADCELL',
      Status: 'CookieBar.tracking.adcell.status',
      PrivacyPolicy: 'https://www.adcell.de/agb#sector_6',
      Lifespan: 'Session / program-specific',
      cookieNames: [
        'ADCELLsession',
        '/^ADCELLpid/',
        '/^ADCELLspid/',
        '/^ADCELLvpid/',
        '/^ADCELLjh/',
        'ADCELLnoTrack',
      ],
    },
    marketingGroup,
  );

  add(
    {
      name: CLARITY_CONSENT,
      Provider: 'Microsoft Ireland Operations Limited',
      Status: 'CookieBar.tracking.clarity.status',
      PrivacyPolicy: 'https://privacy.microsoft.com/privacystatement',
      Lifespan: '1 year',
      cookieNames: ['/^_cl/', 'CLID', 'ANONCHK', 'MR', 'MUID', 'SM'],
    },
    marketingGroup,
  );
});
