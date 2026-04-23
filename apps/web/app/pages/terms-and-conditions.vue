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
definePageMeta({
  pageType: "static",
})

const { t } = useI18n()

useHead({
  title: t("agbtitle"),
  meta: [
    {
      name: "description",
      content: t("agbdesc"),
    },
    {
      property: "og:title",
      content: t("agbtitle"),
    },
    {
      property: "og:description",
      content: t("agbdesc"),
    }
  ]
})
import type { Locale } from '#i18n';

defineI18nRoute({
  locales: process.env.LANGUAGELIST?.split(',') as Locale[],
});

const { data, getLegalTexts } = useLegalInformation();
const { getRobots, setRobotForStaticPage } = useRobots();
const { setPageMeta } = usePageMeta();

const icon = 'page';
setPageMeta(t('legal.termsAndConditions'), icon);

await getLegalTexts({
  type: 'TermsConditions',
});

const getHTMLTexts = () => {
  return data.value.htmlText ?? '';
};

await getRobots();
setRobotForStaticPage('TermsAndConditions');
</script>
