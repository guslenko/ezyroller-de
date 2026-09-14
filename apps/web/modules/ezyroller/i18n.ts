import type { NuxtI18nOptions } from '@nuxtjs/i18n';

const customLocales = new Set(['de', 'en', 'fr', 'it', 'es', 'pl']);

/** Append shop messages in the app layer, where Nuxt i18n gives them final precedence. */
export function withEzyrollerTranslations(config: NuxtI18nOptions): NuxtI18nOptions {
  return {
    ...config,
    locales: config.locales?.map((locale) => {
      if (typeof locale === 'string' || !customLocales.has(locale.code)) {
        return locale;
      }
      const { file, files, ...settings } = locale;
      return {
        ...settings,
        files: [...(files ?? (file ? [file] : [])), `../../modules/ezyroller/runtime/lang/${locale.code}.json`],
      };
    }) as NuxtI18nOptions['locales'],
  };
}
