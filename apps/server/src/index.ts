import { createServer } from '@vue-storefront/middleware';
import consola from 'consola';
import type { IncomingMessage } from 'node:http';
import config from '../middleware.config';

const useIPV6 = process.env.USE_IPV6 === 'true';

const checkEnvironments = (integrations: any) => {
  if (!integrations.plentysystems.configuration.api.securityToken) {
    consola.warn(
      'API_SECURITY_TOKEN is not set. Please set it in your .env file https://pwa-docs.plentyone.com/guide/how-to/middleware#api-security-token',
    );
  }
  if (!integrations.plentysystems.configuration.api.url) {
    consola.warn(
      'API_ENDPOINT is not set. Please set it in your .env file https://pwa-docs.plentyone.com/guide/how-to/middleware#api-endpoint',
    );
  }
};

const validateApiUrl = (url: string | undefined): string | undefined => {
  return url?.replace(/[/\\]+$/, '');
};

const plentyCookieNames = new Set([
  'consent-cookie',
  'i18n_redirected',
  'plenty-viewport',
  'pwa',
  'vsf-locale',
  'XSRF-TOKEN',
]);

const isPlentyCookie = (name: string) =>
  plentyCookieNames.has(name) || /^pwa-session-id\d*$/.test(name) || /^plentyID\d*$/.test(name);

const sanitizePlentyCookies = (request: IncomingMessage) => {
  if (!request.url?.startsWith('/plentysystems/') || typeof request.headers.cookie !== 'string') return;

  const allCookies = request.headers.cookie.split(';').map((cookie) => cookie.trim());
  const cookieNames = allCookies.map((cookie) => cookie.slice(0, cookie.indexOf('=')));
  const hasAdcellOptOut = cookieNames.includes('ADCELLnoTrack');
  const hasAdcellAttribution = cookieNames.some(
    (name) => name === 'ADCELLsession' || /^ADCELL(?:pid|spid|vpid|jh)\d+$/.test(name),
  );

  if (hasAdcellAttribution && !hasAdcellOptOut) request.headers.referrerid = '18';

  const cookies = allCookies.filter((cookie) => isPlentyCookie(cookie.slice(0, cookie.indexOf('='))));

  if (cookies.length > 0) request.headers.cookie = cookies.join('; ');
  else delete request.headers.cookie;
};

(async () => {
  const app = await createServer(
    { integrations: config.integrations },
    {
      cors: {
        credentials: true,
        origin: validateApiUrl(process.env.API_URL) ?? 'http://localhost:3000',
      },
      bodyParser: {
        limit: '50mb',
      },
      fileUpload: {
        enabled: true,
        maxFileSize: 14_155_776, // 13,3mb for 10mb upload file
        maxFiles: 5,
      },
    },
  );

  app.prependListener('request', sanitizePlentyCookies);

  const host = useIPV6 ? '::' : '0.0.0.0';
  const port = Number(process.argv[3]) || 8181;

  checkEnvironments(config.integrations);

  app.listen(port, host, () => {
    consola.success(`API server listening on http://${host}:${port}`);
  });
})();
