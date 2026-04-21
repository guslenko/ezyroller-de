<template>

<section class="relative w-full h-[380px] md:h-[480px]">
  <!-- ФОН -->
  <div
    class="absolute inset-0 bg-cover bg-center"
    style="background-image: url('/images/faq.webp')"
  ></div>

  <!-- ЗАТЕМНЕНИЕ -->
  <div class="absolute inset-0 bg-black/20"></div>

  <!-- ТЕКСТ -->
  <div class="absolute bottom-10 left-1/2 -translate-x-1/2 text-center space-y-1 z-20">
    <div class="text-white text-base uppercase font-normal drop-shadow-md pb-0 tracking-[0.5em]">
      FAQ
    </div>
    <div class="text-white text-4xl uppercase font-bold drop-shadow-md pb-0">
      {{ $t("faq1") }}
    </div>
    <div class="text-white text-base md:text-lg uppercase font-medium drop-shadow-md">
      {{ $t("faq2") }}
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
          src="/images/erfaq1.webp"
          alt="Banner"
          class="w-full h-auto object-cover rounded-lg shadow-md"
        />
      </div>

      <!-- TEXT SECOND ON MOBILE -->
      <div class="order-2 md:order-1 text-gray-800">
  <p class="text-base font-medium leading-relaxed">
    {{ $t("faq3") }}
  </p>
  <p class="text-base font-medium leading-relaxed pt-3">
    {{ $t("faq4") }}
  </p>
  <p class="text-base font-medium leading-relaxed pt-3">
    {{ $t("faq5") }}
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
          src="/images/erfaq2.webp"
          alt="Banner"
          class="w-full h-auto object-cover rounded-lg shadow-md"
        />
      </div>

      <!-- TEXT SECOND ON MOBILE -->
      <div class="order-2 md:order-1 text-gray-800">
  <p class="text-base font-medium leading-relaxed">
    {{ $t("faq6") }}
  </p>
  <p class="text-base font-medium leading-relaxed pt-3">
    {{ $t("faq7") }}
  </p>
  <p class="text-base font-medium leading-relaxed pt-3">
    {{ $t("faq8") }}
  </p> 

</div>


    </div>
  </section>

  


  <section class="w-full py-4 px-4">
    <div
      class="max-w-6xl mx-auto items-center"
    >

    <h3 class="text-3xl uppercase font-bold mb-2 px-0 pt-5 text-center">{{ $t("faq9") }}</h3>

    <p class="text-lg font-semibold leading-relaxed pt-3">
    {{ $t("faq10") }}
    </p> 
    <p class="text-base font-medium leading-relaxed pt-1">
    {{ $t("faq11") }}
    </p> 

    <p class="text-lg font-semibold leading-relaxed pt-5">
    {{ $t("faq12") }}
    </p> 
    <p class="text-base font-medium leading-relaxed pt-1">
    {{ $t("faq13") }}
    </p> 

    <p class="text-lg font-semibold leading-relaxed pt-5">
    {{ $t("faq14") }}
    </p> 
    <p class="text-base font-medium leading-relaxed pt-1">
    {{ $t("faq15") }}
    </p> 

    <p class="text-lg font-semibold leading-relaxed pt-5">
    {{ $t("faq16") }}
    </p> 
    <p class="text-base font-medium leading-relaxed pt-1">
    {{ $t("faq17") }}
    </p> 

    <p class="text-lg font-semibold leading-relaxed pt-5">
    {{ $t("faq18") }}
    </p> 
    <p class="text-base font-medium leading-relaxed pt-1">
    {{ $t("faq19") }}
    </p> 

    <p class="text-lg font-semibold leading-relaxed pt-5">
    {{ $t("faq20") }}
    </p> 
    <p class="text-base font-medium leading-relaxed pt-1">
    {{ $t("faq21") }}
    </p> 

    <p class="text-lg font-semibold leading-relaxed pt-5">
    {{ $t("faq22") }}
    </p> 
    <p class="text-base font-medium leading-relaxed pt-1">
    {{ $t("faq23") }}
    </p> 

    <p class="text-lg font-semibold leading-relaxed pt-5">
    {{ $t("faq24") }}
    </p> 
    <p class="text-base font-medium leading-relaxed pt-1">
    {{ $t("faq25") }}
    </p> 

    <p class="text-lg font-semibold leading-relaxed pt-5">
    {{ $t("faq26") }}
    </p> 
    <p class="text-base font-medium leading-relaxed pt-1">
    {{ $t("faq27") }}
    </p>

    <h3 class="text-3xl uppercase font-bold mb-2 px-0 pt-5 text-center">{{ $t("faq28") }}</h3>

    <p class="text-xl font-semibold leading-relaxed pt-3 text-center">
    {{ $t("faq29") }}
    </p> 
    <p class="text-base font-medium leading-relaxed pt-1">
    {{ $t("faq30") }}
    </p> 

    <p class="text-lg font-semibold leading-relaxed pt-1">
    {{ $t("faq31") }}
    </p> 

    <ol class="list-decimal pl-5">
    <li class="text-base font-medium leading-relaxed pt-1">{{ $t("faq32") }}</li>
    <li class="text-base font-medium leading-relaxed pt-1">{{ $t("faq33") }}</li>
    <li class="text-base font-medium leading-relaxed pt-1">{{ $t("faq34") }}</li>
    <li class="text-base font-medium leading-relaxed pt-1">{{ $t("faq35") }}</li>
    </ol>

    <p class="text-xl font-semibold leading-relaxed pt-5 text-center">
    {{ $t("faq36") }}
    </p> 
    <p class="text-base font-medium leading-relaxed pt-1">
    {{ $t("faq37") }}
    </p> 

    <p class="text-lg font-semibold leading-relaxed pt-1">
    {{ $t("faq31") }}
    </p> 
    <p class="text-base font-medium leading-relaxed pt-1">
    {{ $t("faq38") }}
    </p> 

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