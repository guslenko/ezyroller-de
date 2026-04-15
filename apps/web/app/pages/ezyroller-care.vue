<template>
  <div>
    <ErCare />
  </div>
</template>

<script setup lang="ts">
import ErCare from "~/components/Home/ErCare.vue"

import { useI18n } from "vue-i18n"
import { useHead } from "#imports"

definePageMeta({
  pageType: "static",
})

const { t } = useI18n()

useHead({
  title: t("ercaretitle"),
  meta: [
    {
      name: "description",
      content: t("ercaredesc"),
    },
    {
      property: "og:title",
      content: t("ercaretitle"),
    },
    {
      property: "og:description",
      content: t("ercaredesc"),
    }
  ]
})
</script>
