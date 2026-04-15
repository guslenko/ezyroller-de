<template>
  <div>
    <ErFAQ />
  </div>
</template>

<script setup lang="ts">
import ErFAQ from "~/components/Home/ErFAQ.vue"

import { useI18n } from "vue-i18n"
import { useHead } from "#imports"

definePageMeta({
  pageType: "static",
})

const { t } = useI18n()

useHead({
  title: t("faqtitle"),
  meta: [
    {
      name: "description",
      content: t("faqdesc"),
    },
    {
      property: "og:title",
      content: t("faqtitle"),
    },
    {
      property: "og:description",
      content: t("faqdesc"),
    }
  ]
})
</script>
