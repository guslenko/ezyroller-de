<template>
  <section class="w-full px-0 md:px-2 py-0 md:py-4">
    <div class="w-full mx-auto grid gap-0 md:gap-4 px-0 md:px-2">

      <!-- ROW 1: 2 banners -->
      <div class="grid grid-cols-1 md:grid-cols-2 gap-0 md:gap-4 border-t border-white">

        <!-- BANNER 1 -->
       <NuxtLink
  :to="$localePath($t('bizl5'))"
  class="relative block overflow-hidden group w-full"
>
  <!-- IMAGE WRAPPER -->
  <div class="relative w-full h-[290px] md:h-[380px] lg:h-[480px] overflow-hidden">
    
    <!-- IMAGE -->
    <div
      class="w-full h-full bg-cover bg-center transition-transform duration-700 group-hover:scale-110"
      style="background-image: url('/images/b1.webp')"
    ></div>

    <!-- DARK OVERLAY (ONLY ON IMAGE) -->
    <div
      class="absolute inset-0 bg-black/30 transition-all duration-300 group-hover:bg-black/10"
    ></div>
  </div>

  <!-- TEXT BLOCK (NO Z-INDEX NEEDED) -->
  <div class="absolute bottom-10 left-1/2 -translate-x-1/2 text-center space-y-1">
    <div class="text-white text-base md:text-lg uppercase font-medium drop-shadow-md">
      {{ $t("ban11") }}
    </div>
    <div class="text-white text-2xl md:text-3xl uppercase font-bold drop-shadow-md pb-4">
      {{ $t("ban12") }}
    </div>
    <div
      class="inline-block mt-2 px-6 py-2 border border-white text-white font-bold rounded-md
             shadow-md group-hover:scale-125 transition-all duration-300
             bg-white/10 group-hover:bg-white group-hover:text-black backdrop-blur-md"
    >
      {{ $t("ban13") }}
    </div>
  </div>
</NuxtLink>


        <!-- BANNER 2 -->
<NuxtLink
  :to="$localePath($t('bizl4'))"
  class="relative block overflow-hidden group w-full border-t border-white"
>
  <!-- IMAGE WRAPPER -->
  <div class="relative w-full h-[290px] md:h-[380px] lg:h-[480px] overflow-hidden">
    <!-- IMAGE -->
    <div
      class="w-full h-full bg-cover bg-center transition-transform duration-700 group-hover:scale-110"
      style="background-image: url('/images/b2.webp')"
    ></div>

    <!-- DARK OVERLAY -->
    <div class="absolute inset-0 bg-black/30 transition-all duration-300 group-hover:bg-black/10 pointer-events-none"></div>
  </div>

  <!-- TEXT BLOCK -->
  <div class="absolute bottom-10 left-1/2 -translate-x-1/2 text-center space-y-1">
    <div class="text-white text-base md:text-lg uppercase font-medium drop-shadow-md">
      {{ $t("ban21") }}
    </div>
    <div class="text-white text-2xl md:text-3xl uppercase font-bold drop-shadow-md pb-4">
      {{ $t("ban22") }}
    </div>
    <div
      class="inline-block mt-2 px-6 py-2 border border-white text-white font-bold rounded-md
             shadow-md group-hover:scale-125 transition-all duration-300
             bg-white/10 group-hover:bg-white group-hover:text-black backdrop-blur-md"
    >
      {{ $t("ban23") }}
    </div>
  </div>
</NuxtLink>


      </div>

      <!-- ROW 2: full width -->
      <!-- BANNER 3 -->
<NuxtLink
  :to="$localePath($t('bizl9'))"
  class="relative block overflow-hidden group w-full border-t border-white"
>
  <!-- IMAGE WRAPPER -->
  <div class="relative w-full h-[290px] md:h-[380px] lg:h-[480px] overflow-hidden">
    <div
      class="w-full h-full bg-cover bg-center transition-transform duration-700 group-hover:scale-110"
      style="background-image: url('/images/b3.webp')"
    ></div>

    <div class="absolute inset-0 bg-black/30 transition-all duration-300 group-hover:bg-black/10 pointer-events-none"></div>
  </div>

  <!-- TEXT BLOCK -->
  <div class="absolute bottom-10 left-1/2 -translate-x-1/2 text-center space-y-1">
    <div class="text-white text-base md:text-lg uppercase font-medium drop-shadow-md">
      {{ $t("ban31") }}
    </div>
    <div class="text-white text-2xl md:text-3xl uppercase font-bold drop-shadow-md pb-4">
      {{ $t("ban32") }}
    </div>
    <div
      class="inline-block mt-2 px-6 py-2 border border-white text-white font-bold rounded-md
             shadow-md group-hover:scale-125 transition-all duration-300
             bg-white/10 group-hover:bg-white group-hover:text-black backdrop-blur-md"
    >
      {{ $t("ban33") }}
    </div>
  </div>
</NuxtLink>


      <!-- ROW 3: 2 banners -->
      <div class="grid grid-cols-1 md:grid-cols-2 gap-0 md:gap-4">

  <!-- BANNER 4 -->
<NuxtLink
  :to="$localePath($t('bizl8'))"
  class="relative block overflow-hidden group w-full border-t border-white"
>
  <!-- IMAGE WRAPPER -->
  <div class="relative w-full h-[290px] md:h-[380px] lg:h-[480px] overflow-hidden">
    <div
      class="w-full h-full bg-cover bg-center transition-transform duration-700 group-hover:scale-110"
      style="background-image: url('/images/b4.webp')"
    ></div>

    <div class="absolute inset-0 bg-black/30 transition-all duration-300 group-hover:bg-black/10 pointer-events-none"></div>
  </div>

  <!-- TEXT BLOCK -->
  <div class="absolute bottom-10 left-1/2 -translate-x-1/2 text-center space-y-1">
    <div class="text-white text-base md:text-lg uppercase font-medium drop-shadow-md">
      {{ $t("ban41") }}
    </div>
    <div class="text-white text-2xl md:text-3xl uppercase font-bold drop-shadow-md pb-4">
      {{ $t("ban42") }}
    </div>

    <div
      class="inline-block mt-2 px-6 py-2 border border-white text-white font-bold rounded-md
             shadow-md group-hover:scale-125 transition-all duration-300
             bg-white/10 group-hover:bg-white group-hover:text-black backdrop-blur-md"
    >
      {{ $t("ban43") }}
    </div>
  </div>
</NuxtLink>



  <!-- BANNER 5 -->
<NuxtLink
  :to="$localePath($t('bizl1'))"
  class="relative block overflow-hidden group w-full border-t border-white"
>
  <!-- IMAGE WRAPPER -->
  <div class="relative w-full h-[290px] md:h-[380px] lg:h-[480px] overflow-hidden">
    <div
      class="w-full h-full bg-cover bg-center transition-transform duration-700 group-hover:scale-110"
      style="background-image: url('/images/b5.webp')"
    ></div>

    <div class="absolute inset-0 bg-black/30 transition-all duration-300 group-hover:bg-black/10 pointer-events-none"></div>
  </div>

  <!-- TEXT BLOCK -->
  <div class="absolute bottom-10 left-1/2 -translate-x-1/2 text-center space-y-1">
    <div class="text-white text-base md:text-lg uppercase font-medium drop-shadow-md">
      {{ $t("ban51") }}
    </div>
    <div class="text-white text-2xl md:text-3xl uppercase font-bold drop-shadow-md pb-4">
      {{ $t("ban52") }}
    </div>

    <div
      class="inline-block mt-2 px-6 py-2 border border-white text-white font-bold rounded-md
             shadow-md group-hover:scale-125 transition-all duration-300
             bg-white/10 group-hover:bg-white group-hover:text-black backdrop-blur-md"
    >
      {{ $t("ban53") }}
    </div>
  </div>
</NuxtLink>


</div>


      <!-- ROW 4: full width -->
      <!-- BANNER 6 -->
<NuxtLink
  :to="$localePath($t('bizl3'))"
  class="relative block overflow-hidden group w-full border-t border-white"
>
  <!-- IMAGE WRAPPER -->
  <div class="relative w-full h-[290px] md:h-[380px] lg:h-[480px] overflow-hidden">
    <!-- IMAGE -->
    <div
      class="w-full h-full bg-cover bg-center transition-transform duration-700 group-hover:scale-110"
      style="background-image: url('/images/b6.webp')"
    ></div>

    <!-- DARK OVERLAY (ONLY ON IMAGE) -->
    <div
      class="absolute inset-0 bg-black/30 transition-all duration-300 group-hover:bg-black/10 pointer-events-none"
    ></div>
  </div>

  <!-- TEXT BLOCK -->
  <div class="absolute bottom-10 left-1/2 -translate-x-1/2 text-center space-y-1">
    <div class="text-white text-base md:text-lg uppercase font-medium drop-shadow-md">
      {{ $t("ban61") }}
    </div>

    <div class="text-white text-2xl md:text-3xl uppercase font-bold drop-shadow-md pb-4">
      {{ $t("ban62") }}
    </div>

    <div
      class="inline-block mt-2 px-6 py-2 border border-white text-white font-bold rounded-md
             shadow-md group-hover:scale-125 transition-all duration-300
             bg-white/10 group-hover:bg-white group-hover:text-black backdrop-blur-md"
    >
      {{ $t("ban63") }}
    </div>
  </div>
</NuxtLink>


    </div>
  </section>
</template>

<script setup>
// пусто — компонент статический, как ты хотел
</script>
