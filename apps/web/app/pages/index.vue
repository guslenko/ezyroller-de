<template>
  <div>
    <VideoBanner />
    <BannerWidget />
    
    <ProductWidget />

    <section class="w-full py-4 px-4">
  <div class="max-w-6xl mx-auto items-center">

    <h3
      class="text-3xl uppercase font-bold mb-4 px-0 py-2 text-center text-transparent bg-clip-text bg-gradient-to-r from-orange-500 via-teal-600 via-purple-500 to-pink-500 bg-[length:100%_100%] bg-[position:0%_0]"
    >
      {{ $t("biz13") }}
    </h3>

    <div
      class="max-w-screen-2xl mx-auto grid grid-cols-2 md:grid-cols-3 gap-6 sm:gap-8 px-4 pb-4 text-center"
    >

      <!-- CARD 1 -->
      <div class="flex flex-col items-center">
        <NuxtLink :to="$localePath($t('bizl1'))" class="block text-center group">
          <img
            src="/images/ERMINI.webp"
            alt="EzyRoller Mini"
            class="w-full h-auto mb-3 transition-all duration-300 group-hover:opacity-90"
          />

          <div
            class="text-2xl font-bold inline-flex items-center gap-1
                   border-b border-slate-400 pb-[2px] text-gray-500
                   transition-all duration-300
                   group-hover:border-slate-700 group-hover:text-black group-hover:ml-2"
          >
            MINI
            <span class="inline-block transition-transform duration-300 group-hover:translate-x-1.5">→</span>
          </div>
        </NuxtLink>

        <p class="text-base font-normal text-black pt-2 leading-relaxed">
          {{ $t("biz14") }} 2-5 {{ $t("biz15") }}<br />
          80-105 cm<br />
          {{ $t("biz16") }} 30 kg
        </p>
      </div>

      <!-- CARD 2 -->
      <div class="flex flex-col items-center">
        <NuxtLink :to="$localePath($t('bizl2'))" class="block text-center group">
          <img
            src="/images/ERCLASSICX.webp"
            alt="EzyRoller Classic X"
            class="w-full h-auto mb-3 transition-all duration-300 group-hover:opacity-90"
          />

          <div
            class="text-2xl font-bold inline-flex items-center gap-1
                   border-b border-slate-400 pb-[2px] text-gray-500
                   transition-all duration-300
                   group-hover:border-slate-700 group-hover:text-black group-hover:ml-2"
          >
            CLASSIC X
            <span class="inline-block transition-transform duration-300 group-hover:translate-x-1.5">→</span>
          </div>
        </NuxtLink>

        <p class="text-base font-normal text-black pt-2 leading-relaxed">
          {{ $t("biz14") }} 3-14 {{ $t("biz15") }}<br />
          95-160 cm<br />
          {{ $t("biz16") }} 70 kg
        </p>
      </div>

      <!-- CARD 3 -->
      <div class="flex flex-col items-center">
        <NuxtLink :to="$localePath($t('bizl3'))" class="block text-center group">
          <img
            src="/images/ERSPINNERX.webp"
            alt="EzyRoller Spinner X"
            class="w-full h-auto mb-3 transition-all duration-300 group-hover:opacity-90"
          />

          <div
            class="text-2xl font-bold inline-flex items-center gap-1
                   border-b border-slate-400 pb-[2px] text-gray-500
                   transition-all duration-300
                   group-hover:border-slate-700 group-hover:text-black group-hover:ml-2"
          >
            SPINNER X
            <span class="inline-block transition-transform duration-300 group-hover:translate-x-1.5">→</span>
          </div>
        </NuxtLink>

        <p class="text-base font-normal text-black pt-2 leading-relaxed">
          {{ $t("biz14") }} 4-14+ {{ $t("biz15") }}<br />
          100-160 cm<br />
          {{ $t("biz16") }} 70 kg
        </p>
      </div>

      <!-- CARD 4 -->
      <div class="flex flex-col items-center">
        <NuxtLink :to="$localePath($t('bizl4'))" class="block text-center group">
          <img
            src="/images/ERDRIFTERX.webp"
            alt="EzyRoller Drifter X"
            class="w-full h-auto mb-3 transition-all duration-300 group-hover:opacity-90"
          />

          <div
            class="text-2xl font-bold inline-flex items-center gap-1
                   border-b border-slate-400 pb-[2px] text-gray-500
                   transition-all duration-300
                   group-hover:border-slate-700 group-hover:text-black group-hover:ml-2"
          >
            DRIFTER X
            <span class="inline-block transition-transform duration-300 group-hover:translate-x-1.5">→</span>
          </div>
        </NuxtLink>

        <p class="text-base font-normal text-black pt-2 leading-relaxed">
          {{ $t("biz14") }} 4-14+ {{ $t("biz15") }}<br />
          100-160 cm<br />
          {{ $t("biz16") }} 70 kg
        </p>
      </div>

      <!-- CARD 5 -->
      <div class="flex flex-col items-center">
        <NuxtLink :to="$localePath($t('bizl5'))" class="block text-center group">
          <img
            src="/images/ERPROX.webp"
            alt="EzyRoller Pro X"
            class="w-full h-auto mb-3 transition-all duration-300 group-hover:opacity-90"
          />

          <div
            class="text-2xl font-bold inline-flex items-center gap-1
                   border-b border-slate-400 pb-[2px] text-gray-500
                   transition-all duration-300
                   group-hover:border-slate-700 group-hover:text-black group-hover:ml-2"
          >
            PRO X
            <span class="inline-block transition-transform duration-300 group-hover:translate-x-1.5">→</span>
          </div>
        </NuxtLink>

        <p class="text-base font-normal text-black pt-2 leading-relaxed">
          {{ $t("biz17") }} 10 {{ $t("biz15") }}<br />
          135-180 cm<br />
          {{ $t("biz16") }} 100 kg
        </p>
      </div>

      <!-- CARD 6 -->
      <div class="flex flex-col items-center">
        <NuxtLink :to="$localePath($t('bizl6'))" class="block text-center group">
          <img
            src="/images/ERDRIFTERPROX.webp"
            alt="EzyRoller Drifter Pro X"
            class="w-full h-auto mb-3 transition-all duration-300 group-hover:opacity-90"
          />

          <div
            class="text-2xl font-bold inline-flex items-center gap-1
                   border-b border-slate-400 pb-[2px] text-gray-500
                   transition-all duration-300
                   group-hover:border-slate-700 group-hover:text-black group-hover:ml-2"
          >
            DRIFTER PRO X
            <span class="inline-block transition-transform duration-300 group-hover:translate-x-1.5">→</span>
          </div>
        </NuxtLink>

        <p class="text-base font-normal text-black pt-2 leading-relaxed">
          {{ $t("biz17") }} 10 {{ $t("biz15") }}<br />
          135-180 cm<br />
          {{ $t("biz16") }} 100 kg
        </p>
      </div>

    </div>
  </div>
</section>

<TextWidget />
<SizeGuide2 />

    <section class="w-full py-4 px-4">
    <div
      class="max-w-6xl mx-auto items-center"
    >

    <h3 class="text-3xl uppercase font-bold mb-4 px-0 py-2 text-center">{{ $t("os12") }}</h3>

    <div
  class="max-w-screen-2xl mx-auto grid grid-cols-3 sm:grid-cols-6 gap-6 sm:gap-8 px-4 pb-4"
>
  <img src="/images/ert1.webp"  alt="EzyRoller Award" class="w-full object-contain" width="180" height="180">
  <img src="/images/ert2.webp"  alt="EzyRoller Award" class="w-full object-contain" width="180" height="180">
  <img src="/images/ert3.webp"  alt="EzyRoller Award" class="w-full object-contain" width="180" height="180">
  <img src="/images/ert4.webp"  alt="EzyRoller Award" class="w-full object-contain" width="180" height="180">
  <img src="/images/ert5.webp"  alt="EzyRoller Award" class="w-full object-contain" width="180" height="180">
  <img src="/images/ert6.webp"  alt="EzyRoller Award" class="w-full object-contain" width="180" height="180">
  <img src="/images/ert7.webp"  alt="EzyRoller Award" class="w-full object-contain" width="180" height="180">
  <img src="/images/ert8.webp"  alt="EzyRoller Award" class="w-full object-contain" width="180" height="180">
  <img src="/images/ert9.webp"  alt="EzyRoller Award" class="w-full object-contain" width="180" height="180">
  <img src="/images/ert10.webp" alt="EzyRoller Award" class="w-full object-contain" width="180" height="180">
  <img src="/images/ert11.webp" alt="EzyRoller Award" class="w-full object-contain" width="180" height="180">
  <img src="/images/ert12.webp" alt="EzyRoller Award" class="w-full object-contain" width="180" height="180">
  <img src="/images/ert13.webp" alt="EzyRoller Award" class="w-full object-contain" width="180" height="180">
  <img src="/images/ert14.webp" alt="EzyRoller Award" class="w-full object-contain" width="180" height="180">
  <img src="/images/ert15.webp" alt="EzyRoller Award" class="w-full object-contain" width="180" height="180">
  <img src="/images/ert16.webp" alt="EzyRoller Award" class="w-full object-contain" width="180" height="180">
  <img src="/images/ert17.webp" alt="EzyRoller Award" class="w-full object-contain" width="180" height="180">
  <img src="/images/ert18.webp" alt="EzyRoller Award" class="w-full object-contain" width="180" height="180">
  <img src="/images/ert19.webp" alt="EzyRoller Award" class="w-full object-contain" width="180" height="180">
  <img src="/images/ert20.webp" alt="EzyRoller Award" class="w-full object-contain" width="180" height="180">
  <img src="/images/ert21.webp" alt="EzyRoller Award" class="w-full object-contain" width="180" height="180">
  <img src="/images/ert22.webp" alt="EzyRoller Award" class="w-full object-contain" width="180" height="180">
  <img src="/images/ert23.webp" alt="EzyRoller Award" class="w-full object-contain" width="180" height="180">
  <img src="/images/ert24.webp" alt="EzyRoller Award" class="w-full object-contain" width="180" height="180">
</div>


    </div>
    </section>
  </div>
</template>

<script setup lang="ts">
import VideoBanner from "~/components/Home/VideoBanner.vue"
import TextWidget from "~/components/Home/TextWidget.vue"
import BannerWidget from "~/components/Home/BannerWidget.vue"
import ProductWidget from "~/components/Home/ProductWidget.vue"
import SizeGuide2 from "~/components/Home/SizeGuide2.vue"

import { useI18n } from "vue-i18n"
import { useHead } from "#imports"

const { t } = useI18n()

definePageMeta({
  pageType: "static",
})

useHead({
  title: t("homeTitle"),
  meta: [
    {
      name: "description",
      content: t("homeDescription"),
    },
  ],
})
</script>
