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

    <!-- CTA BUTTON -->
    <NuxtLink
      :to="localePath('/find-ezyroller')"
      class="absolute bottom-8 left-1/2 -translate-x-1/2
             inline-block whitespace-nowrap text-center
             px-8 py-3 border border-white text-white text-lg font-semibold
             transition-all duration-300
             hover:scale-125 -rotate-3 hover:bg-white hover:text-black hover:shadow-xl
             bg-white/10 backdrop-blur-md rounded-md"
    >
      {{ $t("videoCta") }}
    </NuxtLink>

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
