<template>
  <section class="w-full py-2 px-4 bg-white">
    <div class="max-w-screen-2xl mx-auto relative">
        <div
          class="w-full overflow-x-auto no-preflight !text-lg"
          v-html="getHTMLTexts()"
        />
    </div>
  </section>
</template>

<script setup lang="ts">
import type { Locale } from '#i18n';

defineI18nRoute({
  locales: process.env.LANGUAGELIST?.split(',') as Locale[],
});

const { data, getLegalTexts } = useLegalInformation();
const { getRobots, setRobotForStaticPage } = useRobots();

definePageMeta({
  pageType: 'static',
});

const { setPageMeta } = usePageMeta();

const icon = 'page';
setPageMeta(t('CookieBar.keys.PrivacyPolicy'), icon);

await getLegalTexts({
  type: 'PrivacyPolicy',
});

const getHTMLTexts = () => {
  return data.value.htmlText ?? '';
};

await getRobots();
setRobotForStaticPage('PrivacyPolicy');
</script>
