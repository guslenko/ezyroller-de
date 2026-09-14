import type { Nuxt } from '@nuxt/schema';

/** Shop defaults belong to this module; configured Plenty values remain authoritative. */
export function applyBranding(nuxt: Nuxt) {
  const runtime = nuxt.options.runtimeConfig;
  Object.assign(runtime, {
    smtpHost: process.env.NUXT_SMTP_HOST || 'smtp.ionos.de',
    smtpPort: process.env.NUXT_SMTP_PORT || '587',
    smtpUser: process.env.NUXT_SMTP_USER || 'mail@ezyroller.de',
    smtpPass: process.env.NUXT_SMTP_PASS || '',
    emailToContact: process.env.NUXT_EMAIL_TO_CONTACT || 'info@ezyroller.de',
    emailFromContact: process.env.NUXT_EMAIL_FROM_CONTACT || 'mail@ezyroller.de',
    emailToBusiness: process.env.NUXT_EMAIL_TO_BUSINESS || 'b2b@ezyroller.de',
    emailFromBusiness: process.env.NUXT_EMAIL_FROM_BUSINESS || 'mail@ezyroller.de',
    emailToWider: process.env.NUXT_EMAIL_TO_WIDER || 'sales@pentagonsports.de',
    emailFromWider: process.env.NUXT_EMAIL_FROM_WIDER || 'mail@ezyroller.de',
    emailDebugCopy: process.env.NUXT_EMAIL_DEBUG_COPY || '',
  });
  Object.assign(runtime.public, {
    metaTitle: process.env.NUXT_PUBLIC_META_TITLE || process.env.METATITLE || 'EzyRoller',
    metaDescription: process.env.NUXT_PUBLIC_META_DESCRIPTION || process.env.METADESC || 'EzyRoller',
    metaKeywords: process.env.NUXT_PUBLIC_META_KEYWORDS || process.env.METAKEYWORDS || 'ezyroller',
    ogTitle: process.env.NUXT_PUBLIC_OG_TITLE || process.env.OG_TITLE || 'EzyRoller',
    favicon:
      process.env.NUXT_PUBLIC_FAVICON ||
      'https://cdn02.plentymarkets.com/4in9ikd3ipve/frontend/www-ezyroller-de/erf.webp',
    contactShopEmail: process.env.NUXT_PUBLIC_CONTACT_SHOP_EMAIL || 'info@ezyroller.de',
    iconColor: process.env.NUXT_PUBLIC_ICON_COLOR || '#062633',
  });
  nuxt.options.appConfig.titleSuffix = process.env.NAME || 'EzyRoller';
  nuxt.options.app.head.title = String(runtime.public.metaTitle);
  for (const meta of nuxt.options.app.head.meta ?? []) {
    if (meta.name === 'description') {
      meta.content = String(runtime.public.metaDescription);
    }
    if (meta.name === 'keywords') {
      meta.content = String(runtime.public.metaKeywords);
    }
    if (meta.property === 'og:title') {
      meta.content = String(runtime.public.ogTitle);
    }
  }
  for (const link of nuxt.options.app.head.link ?? []) {
    if (link.rel === 'apple-touch-icon') {
      link.href = process.env.NUXT_PUBLIC_FAVICON || process.env.FAVICON || '/images/erf.webp';
    }
  }
  if (nuxt.options.pwa && typeof nuxt.options.pwa.manifest === 'object') {
    Object.assign(nuxt.options.pwa.manifest, {
      name: process.env.NUXT_PUBLIC_OG_TITLE || process.env.OG_TITLE || 'EzyRoller Shop',
      short_name: process.env.NUXT_PUBLIC_OG_TITLE || process.env.OG_TITLE || 'EzyRoller Shop',
      description: process.env.NUXT_PUBLIC_META_DESCRIPTION || process.env.METADESC || 'EzyRoller Shop',
    });
  }
}
