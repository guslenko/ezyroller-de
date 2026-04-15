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
const { setPageMeta } = usePageMeta();

const icon = 'page';
setPageMeta(t('legal.legalDisclosure'), icon);

definePageMeta({
  pageType: 'static',
});

await getLegalTexts({
  type: 'LegalDisclosure',
});

const pageTitle = t('legal.legalDisclosure');

const getHTMLTexts = () => {
  return data.value.htmlText ?? '';
};

await getRobots();
setRobotForStaticPage('LegalDisclosure');
</script>
