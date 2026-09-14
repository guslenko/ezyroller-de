import { readdirSync } from 'node:fs';
import {
  addComponent,
  addImportsDir,
  addPlugin,
  addServerHandler,
  createResolver,
  defineNuxtModule,
  extendPages,
} from 'nuxt/kit';
import manifest from './migration-manifest.json';
import componentNames from './component-names.json';
import { applyBranding } from './branding';

/** EzyRoller-owned presentation and integrations, independent of upstream source files. */
export default defineNuxtModule({
  meta: { name: 'ezyroller-theme' },
  setup(_options, nuxt) {
    const { resolve } = createResolver(import.meta.url);
    nuxt.options.alias['#ezyroller'] = resolve('./runtime');
    nuxt.options.runtimeConfig.public.ezyrollerGtmId =
      process.env.NUXT_PUBLIC_EZYROLLER_GTM_ID || 'GTM-T24Q79K3';
    applyBranding(nuxt);

    for (const entry of manifest.files) {
      if (!entry.module.endsWith('.vue') || !entry.module.includes('/components/')) {
        continue;
      }
      const original = entry.original.replace('apps/web/app/', '');
      const name = componentNames[original as keyof typeof componentNames];
      if (name) {
        addComponent({ name, filePath: resolve(entry.module), priority: 100 });
      }
    }

    addComponent({
      name: 'EzyrollerCheckoutGuaranteeLink',
      filePath: resolve('./runtime/components/CheckoutGuaranteeLink.vue'),
      priority: 100,
    });
    addComponent({
      name: 'PaymentButtons',
      filePath: resolve('./runtime/components/CheckoutPaymentButtons.vue'),
      priority: 200,
    });

    addImportsDir(resolve('./runtime/composables'));
    addImportsDir(resolve('./runtime/composables/**'));
    for (const file of readdirSync(resolve('./runtime/plugins'))) {
      addPlugin(resolve('./runtime/plugins', file));
    }
    for (const file of readdirSync(resolve('./runtime/server/api'))) {
      addServerHandler({
        route: `/api/${file.replace('.post.ts', '')}`,
        method: 'post',
        handler: resolve('./runtime/server/api', file),
      });
    }

    extendPages((pages) => {
      for (const entry of manifest.files.filter((entry) => entry.module.startsWith('runtime/pages/'))) {
        const filename = entry.module.replace('runtime/pages/', '').replace('.vue', '');
        const name = filename === '[...slug]' ? 'slug' : filename;
        const existing = pages.find((page) => page.name === name);
        if (existing) {
          existing.file = resolve(entry.module);
        } else {
          pages.push({ name, path: filename === 'index' ? '/' : `/${filename}`, file: resolve(entry.module) });
        }
      }
    });
    nuxt.hook('app:resolve', (app) => {
      app.layouts.default = { name: 'default', file: resolve('./runtime/layouts/default.vue') };
      app.layouts['simplified-header-and-footer'] = {
        name: 'simplified-header-and-footer',
        file: resolve('./runtime/layouts/simplifiedHeaderAndFooter.vue'),
      };
    });

    nuxt.hook('nitro:config', (nitro) => {
      nitro.publicAssets ??= [];
      nitro.publicAssets.push({ dir: resolve('./runtime/public'), maxAge: 60 * 60 * 24 * 7 });
    });
    nuxt.hook('tailwindcss:config', (config) => {
      const content = config.content;
      const pattern = resolve('./runtime/**/*.{vue,ts}');
      if (Array.isArray(content)) {
        content.push(pattern);
      } else if (content && typeof content === 'object') {
        content.files.push(pattern);
      }
      config.safelist ??= [];
      config.safelist.push(
        'bg-black',
        'bg-white',
        'bg-lime-500',
        'bg-sky-500',
        'bg-red-600',
        'bg-purple-700',
        'bg-pink-600',
        'bg-green-500',
        'bg-blue-600',
        'bg-purple-600',
        'bg-red-700',
        'bg-orange-500',
        'bg-yellow-500',
        'bg-teal-400',
        'bg-amber-500',
      );
      config.theme ??= {};
      config.theme.extend ??= {};
      config.theme.extend.fontFamily = {
        ...config.theme.extend.fontFamily,
        body: [process.env.NUXT_PUBLIC_FONT || 'Noto Sans', 'sans-serif'],
      };
    });
    nuxt.options.css.push(resolve('./runtime/assets/ezyroller.scss'));
  },
});
