<template>

<section class="relative w-full h-[380px] md:h-[480px]">
  <!-- ФОН -->
  <div
    class="absolute inset-0 bg-cover bg-center"
    style="background-image: url('/images/ourstorybg.webp')"
  ></div>

  <!-- ЗАТЕМНЕНИЕ -->
  <div class="absolute inset-0 bg-black/20"></div>

  <!-- ТЕКСТ -->
  <div class="absolute bottom-10 left-1/2 -translate-x-1/2 text-center space-y-1 z-20">
    <div class="text-white text-base uppercase font-normal drop-shadow-md pb-0 tracking-[0.5em]">
      {{ $t("os1") }}
    </div>
    <div class="text-white text-4xl uppercase font-bold drop-shadow-md pb-0">
      {{ $t("os2") }}
    </div>
    <div class="text-white text-base md:text-lg uppercase font-medium drop-shadow-md">
      {{ $t("os3") }}
    </div>
  </div>
</section>
  
  <!-- TWO-COLUMN SECTION -->
  <section class="w-full py-4 px-4">
    <div
      class="max-w-6xl mx-auto grid grid-cols-1 md:grid-cols-2 gap-10 items-center"
    >

      <!-- IMAGE FIRST ON MOBILE -->
      <div class="order-1 md:order-2">
        <img
          src="/images/ourstory.webp"
          alt="Banner"
          class="w-full h-auto object-cover rounded-lg shadow-md"
        />
      </div>

      <!-- TEXT SECOND ON MOBILE -->
      <div class="order-2 md:order-1 text-gray-800">
  <p class="text-base font-medium leading-relaxed">
    {{ $t("os4") }}
  </p>
  <p class="text-base font-medium leading-relaxed pt-3">
    {{ $t("os5") }}
  </p>

</div>


    </div>
  </section>

  <section class="w-full py-4 px-4">
    <div
      class="max-w-6xl mx-auto grid grid-cols-1 md:grid-cols-2 gap-10 items-center"
    >

      <!-- IMAGE FIRST ON MOBILE -->
      <div class="order-1 md:order-2">
        <img
          src="/images/ourstory2.webp"
          alt="Banner"
          class="w-full h-auto object-cover rounded-lg shadow-md"
        />
      </div>

      <!-- TEXT SECOND ON MOBILE -->
      <div class="order-2 md:order-1 text-gray-800">
  <p class="text-base font-medium leading-relaxed">
    {{ $t("os6") }}
  </p>
  <p class="text-base font-medium leading-relaxed pt-3">
    {{ $t("os7") }}
  </p>
  <p class="text-base font-medium leading-relaxed pt-3">
    {{ $t("os8") }}
  </p>
</div>


    </div>
  </section>

  <section class="w-full py-4 px-4">
    <div
      class="max-w-6xl mx-auto grid grid-cols-1 md:grid-cols-2 gap-10 items-center"
    >

      <!-- IMAGE FIRST ON MOBILE -->
      <div class="order-1 md:order-2">
        <img
          src="/images/ourstory3.webp"
          alt="Banner"
          class="w-full h-auto object-cover rounded-lg shadow-md"
        />
      </div>

      <!-- TEXT SECOND ON MOBILE -->
      <div class="order-2 md:order-1 text-gray-800">
  <p class="text-base font-medium leading-relaxed">
    {{ $t("os9") }}
  </p>
  <p class="text-base font-medium leading-relaxed pt-3">
    {{ $t("os10") }}
  </p>
  <p class="text-base font-medium leading-relaxed pt-3">
    {{ $t("os11") }}
  </p>
</div>


    </div>
  </section>


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
  

</template>

<style>
.banner {
  height: 300px;
  background-size: cover;
  background-position: center;
}

@media (min-width: 768px) {
  .banner {
    height: 500px;
  }
}

@media (min-width: 1024px) {
  .banner {
    height: 550px;
  }
}
</style>


<script setup>
const { t } = useI18n()
const localePath = useLocalePath()
</script>