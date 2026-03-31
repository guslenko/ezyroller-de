<template>
  <div>
    <VideoBanner />
    <BannerWidget />
    <TextWidget />
    <SizeGuide />
    <ProductWidget />
    <SizeGuide2 />
  </div>
</template>

<script setup lang="ts">
import VideoBanner from "~/components/Home/VideoBanner.vue"
import TextWidget from "~/components/Home/TextWidget.vue";
import BannerWidget from "~/components/Home/BannerWidget.vue"
import SizeGuide from "~/components/Home/SizeGuide.vue";
import ProductWidget from "~/components/Home/ProductWidget.vue"
import SizeGuide2 from "~/components/Home/SizeGuide2.vue";

definePageMeta({
  pageType: 'static',
})
</script>
