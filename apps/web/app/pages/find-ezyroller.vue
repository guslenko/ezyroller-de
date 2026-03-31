<template>
  <div>
    <SizeGuideContent />
    <ProductWidget />
  </div>
</template>

<script setup lang="ts">
import SizeGuideContent from "~/components/Home/SizeGuideContent.vue"
import ProductWidget from "~/components/Home/ProductWidget.vue"

import { useI18n } from "vue-i18n"
import { useHead } from "#imports"

definePageMeta({
  pageType: "static",
})

const { t } = useI18n()

useHead({
  title: t("findEzyrollerTitle"),
  meta: [
    {
      name: "description",
      content: t("findEzyrollerDescription"),
    },
    {
      property: "og:title",
      content: t("findEzyrollerTitle"),
    },
    {
      property: "og:description",
      content: t("findEzyrollerDescription"),
    }
  ]
})
</script>
