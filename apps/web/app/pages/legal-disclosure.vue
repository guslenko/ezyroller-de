<template>
  <section class="w-full py-2 px-4 bg-white">
    <div class="max-w-screen-2xl mx-auto relative">
      <div
        class="w-full overflow-x-auto no-preflight text-lg"
        v-html="data?.htmlText"
      ></div>
    </div>
  </section>
</template>

<script setup lang="ts">
import type { Locale } from '#i18n';

defineI18nRoute({
  locales: process.env.LANGUAGELIST?.split(',') as Locale[],
});

const { t } = useI18n();
const { data, getLegalTexts } = useLegalInformation();
const { getRobots, setRobotForStaticPage } = useRobots();

useHead({
  title: t("impressumtitle"),
  meta: [
    { name: "description", content: t("impressumdesc") },
    { property: "og:title", content: t("impressumtitle") },
    { property: "og:description", content: t("impressumdesc") }
  ]
});

await getLegalTexts({ type: "LegalDisclosure" });

await getRobots();
setRobotForStaticPage("LegalDisclosure");
</script>
