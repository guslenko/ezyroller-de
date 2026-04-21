<template>
  <div>
    <section class="relative w-full h-[380px] md:h-[480px]">
  <!-- ФОН -->
  <div
    class="absolute inset-0 bg-cover bg-center"
    style="background-image: url('/images/sgbg.webp')"
  ></div>

  <!-- ЗАТЕМНЕНИЕ -->
  <div class="absolute inset-0 bg-black/20"></div>

  <!-- ТЕКСТ -->
  <div class="absolute bottom-10 left-1/2 -translate-x-1/2 text-center space-y-1 z-20">
    <div class="text-white text-4xl uppercase font-bold drop-shadow-md pb-2">
      {{ $t("sgC1") }}
    </div>
    <div class="text-white text-base md:text-lg uppercase font-medium drop-shadow-md">
      {{ $t("sgC2") }}
    </div>
  </div>
</section>
    <ProductWidget />
    <SizeGuideContent />
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
