<template>

<section class="relative w-full h-[380px] md:h-[480px]">
  <!-- ФОН -->
  <div
    class="absolute inset-0 bg-cover bg-center"
    style="background-image: url('/images/erc.webp')"
  ></div>

  <!-- ЗАТЕМНЕНИЕ -->
  <div class="absolute inset-0 bg-black/20"></div>

  <!-- ТЕКСТ -->
  <div class="absolute bottom-10 left-1/2 -translate-x-1/2 text-center space-y-1 z-20">
    <div class="-rotate-3 text-white text-base uppercase font-normal drop-shadow-md pb-0 tracking-[0.5em]">
      {{ $t("ercare1") }}
    </div>
    <div class="-rotate-3 text-white text-4xl uppercase font-bold drop-shadow-md pb-0">
      {{ $t("ercaretitle") }}
    </div>
    <div class="-rotate-3 text-white text-base md:text-lg uppercase font-medium drop-shadow-md">
      {{ $t("ercare2") }}
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
          src="/images/erc2.webp"
          alt="Banner"
          class="w-full h-auto object-cover rounded-lg"
        />
      </div>

      <!-- TEXT SECOND ON MOBILE -->
      <div class="order-2 md:order-1 text-gray-800">
        <span class="text-base text-gray-700 uppercase font-normal tracking-[0.5em] block">{{ $t("ercare2") }}</span><h3 class="text-3xl uppercase font-bold mb-4 p-0">{{ $t("ercare3") }}</h3>
  <p class="text-base font-medium leading-relaxed">
    {{ $t("ercare4") }}
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
          src="/images/erc1.webp"
          alt="Banner"
          class="w-full h-auto object-cover rounded-lg shadow-md"
        />
      </div>

      <!-- TEXT SECOND ON MOBILE -->
      <div class="order-2 md:order-1 text-gray-800">
  <span class="text-base text-gray-700 uppercase font-normal tracking-[0.5em] block">{{ $t("ercare1") }}</span><h3 class="text-3xl uppercase font-bold mb-4 p-0">{{ $t("ercare5") }}</h3>
  <p class="text-base font-medium leading-relaxed">
    {{ $t("ercare6") }}
  </p>
  <p class="text-base font-medium leading-relaxed pt-3">
    {{ $t("ercare7") }}
  </p>
  <p class="text-base font-medium leading-relaxed pt-3">
    {{ $t("ercare8") }}
  </p>
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