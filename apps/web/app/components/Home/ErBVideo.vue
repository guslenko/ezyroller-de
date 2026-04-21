<template>
  <NuxtLink
    :to="localePath('/business#business')"
    class="relative block overflow-hidden group w-full"
  >
    <!-- VIDEO WRAPPER -->
    <div class="relative w-full h-[380px] md:h-[380px] lg:h-[480px] overflow-hidden">
      
      <!-- VIDEO -->
      <video
        class="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110"
        autoplay
        muted
        loop
        playsinline
      >
        <source src="/videos/banner.mp4" type="video/mp4" />
      </video>

      <!-- DARK OVERLAY (ONLY ON VIDEO) -->
      <div
        class="absolute inset-0 bg-black/30 transition-all duration-300 group-hover:bg-black/10 pointer-events-none"
      ></div>
    </div>

    <!-- TEXT BLOCK -->
    <div class="absolute bottom-10 left-1/2 -translate-x-1/2 text-center space-y-3">
      <div class="text-white text-base uppercase font-normal drop-shadow-md tracking-[0.5em]">
        {{ $t("businesstitle") }}
      </div>

      <div class="text-white text-4xl uppercase font-bold drop-shadow-md">
        {{ $t("businesstop1") }}
      </div>

      <div class="text-white text-base md:text-lg uppercase font-medium drop-shadow-md">
        {{ $t("businesstop2") }}
      </div>

      <!-- CTA BUTTON -->
      <div
        class="inline-block whitespace-nowrap text-center
               px-8 py-3 border border-white text-white text-lg font-semibold
               transition-all duration-300
               group-hover:scale-125 group-hover:bg-white group-hover:text-black group-hover:shadow-xl
               bg-white/10 backdrop-blur-md rounded-md"
      >
        {{ $t("businesstop3") }}
      </div>
    </div>
  </NuxtLink>
</template>

<script setup lang="ts">
import { useI18n } from "vue-i18n";
import { useLocalePath } from "#i18n";

const { t } = useI18n();
const localePath = useLocalePath();

// Tailwind классы для высоты видео
const videoHeightClass = `
  h-[400px]        /* mobile */
  md:h-[600px]     /* tablet */
  lg:h-[700px]     /* desktop */
`;
</script>
