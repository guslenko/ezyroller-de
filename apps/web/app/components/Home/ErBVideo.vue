<template>
  <section class="relative w-full overflow-hidden">

    <!-- VIDEO -->
    <video
      class="w-full object-cover"
      :class="videoHeightClass"
      autoplay
      muted
      loop
      playsinline
    >
      <source src="/videos/banner.mp4" type="video/mp4" />
    </video>

    <div class="absolute bottom-10 left-1/2 -translate-x-1/2 text-center space-y-3 z-20">

  <div class="-rotate-3 text-white text-base uppercase font-normal drop-shadow-md tracking-[0.5em]">
    {{ $t("businesstitle") }}
  </div>

  <div class="-rotate-3 text-white text-4xl uppercase font-bold drop-shadow-md">
    {{ $t("businesstop1") }}
  </div>

  <div class="-rotate-3 text-white text-base md:text-lg uppercase font-medium drop-shadow-md">
    {{ $t("businesstop2") }}
  </div>

  <!-- CTA BUTTON (NO ABSOLUTE) -->
  <NuxtLink
    :to="localePath('/business#business')"
    class="inline-block whitespace-nowrap text-center
           px-8 py-3 border border-white text-white text-lg font-semibold
           transition-all duration-300
           hover:scale-125 -rotate-3 hover:bg-white hover:text-black hover:shadow-xl
           bg-white/10 backdrop-blur-md rounded-md"
  >
    {{ $t("businesstop3") }}
  </NuxtLink>

</div>


   

  </section>
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
