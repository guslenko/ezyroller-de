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

definePageMeta({
  pageType: "static",
})

const { t } = useI18n()

useHead({
  title: t("widertitle"),
  meta: [
    {
      name: "description",
      content: t("widerdesc"),
    },
    {
      property: "og:title",
      content: t("widertitle"),
    },
    {
      property: "og:description",
      content: t("widerdesc"),
    }
  ]
})

await getLegalTexts({
  type: 'CancellationRights',
});

const getHTMLTexts = () => {
  return data.value.htmlText ?? '';
};

const icon = 'page';
setPageMeta(t('legal.cancellationRights'), icon);

await getRobots();
setRobotForStaticPage('CancellationRights');
</script>
