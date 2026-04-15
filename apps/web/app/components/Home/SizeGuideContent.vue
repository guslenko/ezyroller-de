<template>

  <!-- TEXT SECTION -->

  <section class="w-full py-4 px-4">
    <div
      class="max-w-6xl mx-auto items-center"
    >
      <p>
        {{ $t("sgC3") }}
      </p>
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
          src="/images/sg1.webp"
          alt="Banner"
          class="w-full h-auto object-cover rounded-lg shadow-md"
        />
      </div>

      <!-- TEXT SECOND ON MOBILE -->
      <div class="order-2 md:order-1 text-gray-800">
  <span class="text-base text-gray-700 uppercase font-normal tracking-[0.5em] block">
    {{ $t("sgT11") }}
  </span>

  <h3 class="text-3xl uppercase font-bold mb-4 p-0">Mini</h3>

  <p class="text-base font-medium leading-relaxed">
    {{ $t("sgT12") }}
  </p>

  <p class="text-base leading-relaxed pt-4">
   <NuxtLink
          :to="$localePath($t('bizl1'))"
          class="inline-flex items-center gap-1 border-b border-slate-400 pb-[2px] text-gray-500 font-medium 
         transition-all duration-300 hover:border-slate-700 hover:text-black hover:ml-2 group"
        >
          {{ $t("sgT13") }}<span class="inline-block transition-transform duration-300 group-hover:translate-x-1.5">
    →
  </span>
    </NuxtLink>
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
          src="/images/sg2.webp"
          alt="Banner"
          class="w-full h-auto object-cover rounded-lg shadow-md"
        />
      </div>

      <!-- TEXT SECOND ON MOBILE -->
      <div class="order-2 md:order-1 text-gray-800">
  <span class="text-base text-gray-700 uppercase font-normal tracking-[0.5em] block">
    {{ $t("sgT21") }}
  </span>

  <h3 class="text-3xl uppercase font-bold mb-4 p-0">Classic & Classic X</h3>

  <p class="text-base font-medium leading-relaxed">
    {{ $t("sgT22") }}
    </p>
  <p class="text-base font-medium leading-relaxed pt-4">
{{ $t("sgT23") }}
  </p>

  <p class="text-base leading-relaxed pt-4">
    <NuxtLink
          :to="$localePath($t('bizl7'))"
          class="inline-flex items-center gap-1 border-b border-slate-400 pb-[2px] text-gray-500 font-medium 
         transition-all duration-300 hover:border-slate-700 hover:text-black hover:ml-2 group"
        >
          {{ $t("sgT24") }}<span class="inline-block transition-transform duration-300 group-hover:translate-x-1.5">
    →
  </span>
    </NuxtLink>
  </p>
  <p class="text-base leading-relaxed pt-2">
<NuxtLink
          :to="$localePath($t('bizl2'))"
          class="inline-flex items-center gap-1 border-b border-slate-400 pb-[2px] text-gray-500 font-medium 
         transition-all duration-300 hover:border-slate-700 hover:text-black hover:ml-2 group"
        >
          {{ $t("sgT25") }}<span class="inline-block transition-transform duration-300 group-hover:translate-x-1.5">
    →
  </span>
    </NuxtLink>
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
          src="/images/sg3.webp"
          alt="Banner"
          class="w-full h-auto object-cover rounded-lg shadow-md"
        />
      </div>

      <!-- TEXT SECOND ON MOBILE -->
      <div class="order-2 md:order-1 text-gray-800">
  <span class="text-base text-gray-700 uppercase font-normal tracking-[0.5em] block">
    {{ $t("sgT31") }}
  </span>

  <h3 class="text-3xl uppercase font-bold mb-4 p-0">Spinner X</h3>

  <p class="text-base font-medium leading-relaxed">
    {{ $t("sgT32") }}
    </p>
  <p class="text-base font-medium leading-relaxed pt-4">
{{ $t("sgT33") }}
  </p>

  <p class="text-base leading-relaxed pt-4">
    <NuxtLink
          :to="$localePath($t('bizl3'))"
          class="inline-flex items-center gap-1 border-b border-slate-400 pb-[2px] text-gray-500 font-medium 
         transition-all duration-300 hover:border-slate-700 hover:text-black hover:ml-2 group"
        >
          {{ $t("sgT34") }}<span class="inline-block transition-transform duration-300 group-hover:translate-x-1.5">
    →
  </span>
    </NuxtLink>
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
          src="/images/sg4.webp"
          alt="Banner"
          class="w-full h-auto object-cover rounded-lg shadow-md"
        />
      </div>

      <!-- TEXT SECOND ON MOBILE -->
      <div class="order-2 md:order-1 text-gray-800">
  <span class="text-base text-gray-700 uppercase font-normal tracking-[0.5em] block">
    {{ $t("sgT41") }}
  </span>

  <h3 class="text-3xl uppercase font-bold mb-4 p-0">Drifter X</h3>

  <p class="text-base font-medium leading-relaxed">
    {{ $t("sgT42") }}
    </p>
  <p class="text-base font-medium leading-relaxed pt-4">
{{ $t("sgT43") }}
  </p>

  <p class="text-base leading-relaxed pt-4">
    <NuxtLink
          :to="$localePath($t('bizl4'))"
          class="inline-flex items-center gap-1 border-b border-slate-400 pb-[2px] text-gray-500 font-medium 
         transition-all duration-300 hover:border-slate-700 hover:text-black hover:ml-2 group"
        >
          {{ $t("sgT44") }}<span class="inline-block transition-transform duration-300 group-hover:translate-x-1.5">
    →
  </span>
    </NuxtLink>
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
          src="/images/sg5.webp"
          alt="Banner"
          class="w-full h-auto object-cover rounded-lg shadow-md"
        />
      </div>

      <!-- TEXT SECOND ON MOBILE -->
      <div class="order-2 md:order-1 text-gray-800">
  <span class="text-base text-gray-700 uppercase font-normal tracking-[0.5em] block">
    {{ $t("sgT51") }}
  </span>

  <h3 class="text-3xl uppercase font-bold mb-4 p-0">Pro X</h3>

  <p class="text-base font-medium leading-relaxed">
    {{ $t("sgT52") }}
    </p>

  <p class="text-base leading-relaxed pt-4">
    <NuxtLink
          :to="$localePath($t('bizl5'))"
          class="inline-flex items-center gap-1 border-b border-slate-400 pb-[2px] text-gray-500 font-medium 
         transition-all duration-300 hover:border-slate-700 hover:text-black hover:ml-2 group"
        >
          {{ $t("sgT53") }}<span class="inline-block transition-transform duration-300 group-hover:translate-x-1.5">
    →
  </span>
    </NuxtLink>
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
          src="/images/sg6.webp"
          alt="Banner"
          class="w-full h-auto object-cover rounded-lg shadow-md"
        />
      </div>

      <!-- TEXT SECOND ON MOBILE -->
      <div class="order-2 md:order-1 text-gray-800">
  <span class="text-base text-gray-700 uppercase font-normal tracking-[0.5em] block">
    {{ $t("sgT61") }}
  </span>

  <h3 class="text-3xl uppercase font-bold mb-4 p-0">Drifter Pro X</h3>

  <p class="text-base font-medium leading-relaxed">
    {{ $t("sgT62") }}
    </p>
  <p class="text-base font-medium leading-relaxed pt-4">
{{ $t("sgT63") }}
  </p>

  <p class="text-base leading-relaxed pt-4">
    <NuxtLink
          :to="$localePath($t('bizl6'))"
          class="inline-flex items-center gap-1 border-b border-slate-400 pb-[2px] text-gray-500 font-medium 
         transition-all duration-300 hover:border-slate-700 hover:text-black hover:ml-2 group"
        >
          {{ $t("sgT64") }}<span class="inline-block transition-transform duration-300 group-hover:translate-x-1.5">
    →
  </span>
    </NuxtLink>
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


