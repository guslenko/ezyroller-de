<template>
  <div>
    <OurStory />
  </div>
</template>

<script setup lang="ts">
import OurStory from "~/components/Home/OurStory.vue"

import { useI18n } from "vue-i18n"
import { useHead } from "#imports"

definePageMeta({
  pageType: "static",
})

const { t } = useI18n()

useHead({
  title: t("ostitle"),
  meta: [
    {
      name: "description",
      content: t("osdesc"),
    },
    {
      property: "og:title",
      content: t("ostitle"),
    },
    {
      property: "og:description",
      content: t("osdesc"),
    }
  ]
})
</script>
