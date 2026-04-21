<template>
  <section class="w-full py-4 px-4 bg-white">
    <div class="max-w-screen-3xl px-6 mx-auto text-center relative">

      <!-- TITLE H2 -->
      <h2
        class="inline-block
               text-4xl font-bold uppercase mt-4 mb-2 p-0
               text-transparent bg-clip-text
               bg-gradient-to-r
               from-blue-300 via-pink-600 via-amber-300 to-green-400
               bg-[length:100%_100%] bg-[position:0%_0]
               -rotate-3"
      >
        {{ $t("textWidgetSizeT") }}
      </h2>
      <!-- TEXT -->
      <div class="block text-2xl font-bold mt-0 mb-4 text-black">
        {{ $t("textWidgetSizeD") }}
      </div>

      <!-- PARAGRAPHS -->
      <div class="space-y-3 text-black font-medium leading-relaxed max-w-6xl mx-auto pb-2">
        <a 
        :href="localePath('/find-ezyroller')"
        class="inline-block mt-2 px-8 py-3 text-lg border border-white text-white font-bold rounded-md shadow-md hover:scale-125 mt-2 transition-all duration-300 bg-black">{{ $t("textWidgetSizeB") }}</a>
      </div>
    </div>
  </section>
</template>
<script setup lang="ts">
const { t } = useI18n()
const localePath = useLocalePath()
</script>