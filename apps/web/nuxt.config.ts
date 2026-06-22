// https://nuxt.com/docs/api/configuration/nuxt-config
import { validateApiUrl } from './app/utils/pathHelper';
import { nuxtI18nOptions } from './app/configuration/i18n.config';
import { appConfiguration } from './app/configuration/app.config';
import cookieConfig from './app/configuration/cookie.config';
import { paths } from './app/utils/paths';
import settingsConfig from './app/configuration/settings.config';
import featureFlagsConfig from './app/configuration/feature-flags.config';
import { FailOnLargeChunksPlugin } from './app/configuration/vite.config';

export default defineNuxtConfig({
  app: appConfiguration,

  experimental: {
    asyncContext: true,
  },

  appConfig: {
    titleSuffix: process.env.NAME || 'EzyRoller',
    fallbackCurrency: 'GBP',
  },

  imports: {
    dirs: ['~/composables', '~/composables/**', '~/utils/**'],
  },

  vite: {
    server: {
      fs: {
        allow: ['../../..'],
      },
      watch: {
        usePolling: process.env.NODE_ENV === 'development',
      },
    },
    plugins: [FailOnLargeChunksPlugin],
    optimizeDeps: {
      include: [
        '@codemirror/lang-css',
        '@codemirror/lang-javascript',
        '@codemirror/state',
        '@floating-ui/vue',
        '@intlify/core-base',
        '@intlify/shared',
        '@paypal/paypal-js',
        '@plentymarkets/shop-api',
        '@plentymarkets/tailwind-colors',
        '@storefront-ui/shared',
        '@storefront-ui/vue',
        '@tanstack/vue-virtual',
        '@tiptap/extension-color',
        '@tiptap/extension-highlight',
        '@tiptap/extension-link',
        '@tiptap/extension-text-align',
        '@tiptap/extension-text-style',
        '@tiptap/extension-underline',
        '@tiptap/starter-kit',
        '@tiptap/vue-3',
        '@vee-validate/yup',
        '@vue/devtools-core',
        '@vue/devtools-kit',
        '@vueuse/core',
        '@vueuse/shared',
        'codemirror',
        'cookie',
        'country-flag-icons/string/3x2',
        'dotenv',
        'drift-zoom',
        'js-beautify',
        'js-sha256',
        'swiper/modules',
        'swiper/vue',
        'uuid',
        'vue-multiselect',
        'vue3-lazy-hydration',
        'vue-tel-input',
        'vuedraggable/src/vuedraggable',
        'yup',
      ],
    },
    build: {
      rollupOptions: {
        output: {
          manualChunks: {
            tiptap: [
              '@tiptap/vue-3',
              '@tiptap/core',
              '@tiptap/starter-kit',
              '@tiptap/extension-link',
              '@tiptap/extension-underline',
              '@tiptap/extension-text-style',
              '@tiptap/extension-color',
              '@tiptap/extension-highlight',
              '@tiptap/extension-text-align',
            ],
            vuetify: ['vuetify', '@mdi/js'],
          },
        },
      },
    },
  },

  // 🔥 FIX: Nitro ломал mp4/webp → отключено
  nitro: {
    prerender: {
      crawlLinks: false,

      // 🔥 FIX: Гарантируем попадание файлов в билд
      routes: [
        '/videos/banner.mp4',
        '/images/mer3.webp',
      ],
    },

    // 🔥 FIX: Отключено — ломало статику
    compressPublicAssets: false,
  },

  routeRules: {
    '/_ipx/**': { headers: { 'cache-control': `public, max-age=31536000, immutable` } },
    '/_nuxt-plenty/icons/**': { headers: { 'cache-control': `public, max-age=31536000, immutable` } },
    '/_nuxt-plenty/favicon.ico': { headers: { 'cache-control': `public, max-age=31536000, immutable` } },
    '/_nuxt-plenty/images/**': { headers: { 'cache-control': `max-age=604800` } },

    // 🔥 FIX: Добавляем кеширование статики
    '/videos/**': { headers: { 'cache-control': `public, max-age=31536000, immutable` } },
    '/images/**': { headers: { 'cache-control': `public, max-age=31536000, immutable` } },
  },

  image: {
    provider: 'none',
  },

  pages: true,

  runtimeConfig: {
    smtpHost: "smtp.ionos.de",
    smtpPort: "587",
    smtpUser: "mail@ezyroller.de",
    smtpPass: "Wq123321123Aa!1",

    emailToContact: "info@ezyroller.de",
    emailFromContact: "mail@ezyroller.de",

    emailToBusiness: "b2b@ezyroller.de",
    emailFromBusiness: "mail@ezyroller.de",

    emailToWider: "sales@pentagonsports.de",
    emailFromWider: "mail@ezyroller.de",

    emailDebugCopy: "guslenko@gmail.com",

    public: {
      domain: validateApiUrl(process.env.API_URL) ?? process.env.API_ENDPOINT,
      apiEndpoint: process.env.API_ENDPOINT,
      activeLanguages: process.env.LANGUAGELIST || 'en,de,es,it,ft,pl',
      disabledEditorSettings: process.env?.ENABLE_ALL_EDITOR_SETTINGS === '1' ? [] : ['shop-search'],
      cookieGroups: cookieConfig,
      turnstileSiteKey: process.env?.CLOUDFLARETURNSTILEAPISITEKEY ?? '',
      noCache: process.env.NO_CACHE || '',
      configId: process.env.CONFIG_ID || '',
      ...settingsConfig,
      ...featureFlagsConfig,
    },
  },

  modules: [
    '@plentymarkets/shop-core',
    '@plentymarkets/shop-module-mollie',
    '@plentymarkets/shop-module-gtag',
    '@nuxt/eslint',
    '@nuxt/fonts',
    '@nuxt/image',
    '@nuxt/test-utils/module',
    '@nuxtjs/i18n',
    '@nuxtjs/tailwindcss',
    '@nuxtjs/turnstile',
    'nuxt-lazy-hydrate',
    'nuxt-viewport',
    '@vee-validate/nuxt',
    '@vite-pwa/nuxt',
    'vuetify-nuxt-module',
    'nuxt-color-picker',
  ],

  vuetify: {
    moduleOptions: {
      disableVuetifyStyles: true,
    },
    vuetifyOptions: {
      icons: {
        defaultSet: 'mdi-svg',
      },
      theme: {
        defaultTheme: 'light',
      },
    },
  },

  plentySitemap: {
    locales: (process.env.LANGUAGELIST || 'en,de').split(','),
    defaultLocale: nuxtI18nOptions.defaultLocale,
    exclude: [
      '/search',
      '/offline',
      '/my-account**',
      '/readonly-checkout',
      '/set-new-password',
      '/reset-password-success',
      '/cart',
      '/checkout',
      '/confirmation',
      '/wishlist',
      '/login',
      '/signup',
      '/reset-password',
    ],
  },

  shopCore: {
    apiUrl: validateApiUrl(process.env.API_URL) ?? 'http://localhost:8181',
    apiEndpoint: process.env.API_ENDPOINT,
    configId: Number(process.env.CONFIG_ID) || 1,
    middlewareSSRUrl: 'http://localhost:8181',
  },

  shopModuleMollie: {
    checkoutUrl: paths.checkout,
    liveMode: !process.env.MOLLIE_TEST_MODE,
    confirmationUrl: paths.confirmation,
  },

  fonts: {
    defaults: {
      weights: [300, 400, 500, 700],
      preload: true,
    },
    assets: {
      prefix: '/_nuxt-plenty/fonts/',
    },
  },

  i18n: nuxtI18nOptions,

  tailwindcss: {
    configPath: '~/configuration/tailwind.config.ts',
    exposeConfig: true,
  },

  viewport: {
    breakpoints: {
      xs: 380,
      sm: 640,
      md: 768,
      lg: 1024,
      '4xl': 1920,
    },
    defaultBreakpoints: {
      mobile: 'sm',
      tablet: 'md',
      desktop: 'lg',
      wideScreen: '4xl',
    },
    fallbackBreakpoint: 'lg',
    cookie: {
      expires: 365,
      name: 'plenty-viewport',
      path: '/',
      sameSite: 'Strict',
      secure: true,
    },
  },

  veeValidate: {
    autoImports: false,
    componentNames: {
      Form: 'VeeForm',
      Field: 'VeeField',
      FieldArray: 'VeeFieldArray',
      ErrorMessage: 'VeeErrorMessage',
    },
  },

  // 🔥 FIX: Workbox теперь кеширует mp4/webp
  pwa: {
    registerType: 'prompt',
    workbox: {
      navigateFallback: null,
      globPatterns: [
        '**/*.{js,json,css,html,ico,svg,png,webp,mp4,woff,woff2,ttf,otf}',
        '_nuxt-plenty/icons/*'
      ],
      globIgnores: ['manifest**.webmanifest'],
      additionalManifestEntries: [
        {
          url: '/offline',
          revision: Math.random().toString(32),
        },
      ],
      navigationPreload: true,
      runtimeCaching: [
        {
          urlPattern: ({ request }) => request.mode === 'navigate',
          handler: 'NetworkFirst',
          options: {
            precacheFallback: {
              fallbackURL: '/offline',
            },
          },
        },
        {
          urlPattern: ({ request }) => request.destination === 'image' || request.destination === 'video',
          handler: 'NetworkFirst',
          options: {
            cacheName: 'plenty-media-cache',
            expiration: {
              maxEntries: 500,
              maxAgeSeconds: 60 * 60 * 24 * 30,
            },
            cacheableResponse: {
              statuses: [0, 200],
            },
          },
        },
      ],
      cleanupOutdatedCaches: true,
    },

    manifest: {
      name: process.env.NUXT_PUBLIC_OG_TITLE || process.env.OG_TITLE || 'EzyRoller Shop',
      short_name: process.env.NUXT_PUBLIC_OG_TITLE || process.env.OG_TITLE || 'EzyRoller Shop',
      description: process.env.NUXT_PUBLIC_META_DESCRIPTION || process.env.METADESC || 'EzyRoller Shop',
      theme_color: process.env.NUXT_PUBLIC_PRIMARY_COLOR || '#062633',
      background_color: '#ffffff',
      display: 'standalone',
      start_url: '/',
      scope: '/',
      icons: [
        {
          src: '/_nuxt-plenty/icons/icon-192x192.png',
          sizes: '192x192',
          type: 'image/png',
        },
        {
          src: '/_nuxt-plenty/icons/icon-512x512.png',
          sizes: '512x512',
          type: 'image/png',
        },
        {
          src: '/_nuxt-plenty/icons/icon-512x512.maskable.png',
          sizes: '512x512',
          type: 'image/png',
          purpose: 'maskable',
        },
      ],
    },

    registerWebManifestInRouteRules: true,
  },
});
