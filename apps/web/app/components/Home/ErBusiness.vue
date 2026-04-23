<template>

<section class="w-full py-4 px-4">
    <div
      class="max-w-6xl mx-auto items-center"
    >

    <h3 class="text-3xl uppercase font-bold mb-4 px-0 py-2 text-center">{{ $t("biz1") }}</h3>

    <div
  class="max-w-screen-2xl mx-auto grid grid-cols-3 gap-6 sm:gap-8 px-4 pb-4"
>

  <!-- BLOCK 1 -->
  <div class="flex items-center gap-3">
    <img src="/images/icon1.webp" alt="" class="h-14 w-14 mr-4" />
    <div class="flex flex-col leading-tight text-left font-normal text-xl">
      <span>{{ $t("biz2") }}</span>
      <span>{{ $t("biz3") }}</span>
    </div>
  </div>

  <!-- BLOCK 2 -->
  <div class="flex items-center gap-3">
    <img src="/images/icon2.webp" alt="" class="h-14 w-14 mr-4" />
    <div class="flex flex-col leading-tight text-left font-normal text-xl">
      <span>{{ $t("biz4") }}</span>
      <span>{{ $t("biz5") }}</span>
    </div>
  </div>

  <!-- BLOCK 3 -->
  <div class="flex items-center gap-3">
    <img src="/images/icon3.webp" alt="" class="h-14 w-14 mr-4" />
    <div class="flex flex-col leading-tight text-left font-normal text-xl">
      <span>{{ $t("biz6") }}</span>
      <span>{{ $t("biz7") }}</span>
    </div>
  </div>

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
          src="/images/biz1.webp"
          alt="Banner"
          class="w-full h-auto object-cover rounded-lg shadow-md"
        />
      </div>

      <!-- TEXT SECOND ON MOBILE -->
      <div class="order-2 md:order-1 text-gray-800">
            <span class="text-base text-gray-700 uppercase font-normal tracking-[0.5em] block">EzyRoller</span>
            <h3 class="text-3xl uppercase font-bold mb-4 p-0">{{ $t("biz8") }}</h3>
  
  <ul class="list-disc pl-5">
  <li class="text-base font-medium leading-relaxed pt-1">
    {{ $t("biz9") }}
  </li>
  <li class="text-base font-medium leading-relaxed pt-1">
    {{ $t("biz10") }}
  </li>
  <li class="text-base font-medium leading-relaxed pt-1">
    {{ $t("biz11") }}
  </li>
  <li class="text-base font-medium leading-relaxed pt-1">
    {{ $t("biz12") }}
  </li>
</ul>
<p class="text-base leading-relaxed pt-4">
<NuxtLink
:to="localePath('/business#business')"
class="inline-flex items-center gap-1 border-b border-slate-400 pb-[2px] text-gray-500 font-medium transition-all duration-300 hover:border-slate-700 hover:text-black hover:ml-2 group"
>
{{ $t("businesstop3") }}<span class="inline-block transition-transform duration-300 group-hover:translate-x-1.5"> → </span>
</NuxtLink>
</p>


</div>


    </div>
  </section>



  <section class="w-full py-4 px-4">
    <div
      class="max-w-6xl mx-auto items-center"
    >

    <h3 class="text-3xl uppercase font-bold mb-4 px-0 py-2 text-center text-transparent bg-clip-text bg-gradient-to-r from-orange-500 via-teal-600 via-purple-500 to-pink-500 bg-[length:100%_100%] bg-[position:0%_0]">{{ $t("biz13") }}</h3>

    <div
  class="max-w-screen-2xl mx-auto grid grid-cols-2 md:grid-cols-3 gap-6 sm:gap-8 px-4 pb-4 text-center"
>

  <!-- CARD 1 -->
  <div class="flex flex-col items-center">
  <NuxtLink
  :to="localePath($t('bizl1'))"
  class="block text-center group"
>
  <!-- IMAGE -->
  <img
    src="/images/ERMINI.webp"
    alt="EzyRoller Mini"
    class="w-full h-auto mb-3 transition-all duration-300 group-hover:opacity-90"
  />

  <!-- TEXT + ARROW -->
  <div
    class="text-xl md:text-2xl font-medium inline-flex items-center gap-1
           border-b border-slate-400 pb-[2px] text-gray-500
           transition-all duration-300
           group-hover:border-slate-700 group-hover:text-black group-hover:ml-2"
  >
    MINI
    <span class="inline-block transition-transform duration-300 group-hover:translate-x-1.5">
      →
    </span>
  </div>
</NuxtLink>

<p class="text-xs sm:text-base font-normal text-black pt-2 leading-relaxed">
      {{ $t("biz14") }} 2-5 {{ $t("biz15") }}<br />
      80-105 cm<br />
      {{ $t("biz16") }} 30 kg
    </p>
  </div>

  <!-- CARD 2 -->
  <div class="flex flex-col items-center">
  <NuxtLink
  :to="localePath($t('bizl2'))"
  class="block text-center group"
>
  <!-- IMAGE -->
  <img
    src="/images/ERCLASSICX.webp"
    alt="EzyRoller Classic X"
    class="w-full h-auto mb-3 transition-all duration-300 group-hover:opacity-90"
  />

  <!-- TEXT + ARROW -->
  <div
    class="text-xl md:text-2xl font-medium inline-flex items-center gap-1
           border-b border-slate-400 pb-[2px] text-gray-500
           transition-all duration-300
           group-hover:border-slate-700 group-hover:text-black group-hover:ml-2"
  >
    CLASSIC X
    <span class="inline-block transition-transform duration-300 group-hover:translate-x-1.5">
      →
    </span>
  </div>
</NuxtLink>

<p class="text-xs sm:text-base font-normal text-black pt-2 leading-relaxed">
      {{ $t("biz14") }} 3-14 {{ $t("biz15") }}<br />
      95-160 cm<br />
      {{ $t("biz16") }} 70 kg
    </p>
  </div>

  <!-- CARD 3 -->
  <div class="flex flex-col items-center">
  <NuxtLink
  :to="localePath($t('bizl3'))"
  class="block text-center group"
>
  <!-- IMAGE -->
  <img
    src="/images/ERSPINNERX.webp"
    alt="EzyRoller Spinner X"
    class="w-full h-auto mb-3 transition-all duration-300 group-hover:opacity-90"
  />

  <!-- TEXT + ARROW -->
  <div
    class="text-xl md:text-2xl font-medium inline-flex items-center gap-1
           border-b border-slate-400 pb-[2px] text-gray-500
           transition-all duration-300
           group-hover:border-slate-700 group-hover:text-black group-hover:ml-2"
  >
    SPINNER X
    <span class="inline-block transition-transform duration-300 group-hover:translate-x-1.5">
      →
    </span>
  </div>
</NuxtLink>

<p class="text-xs sm:text-base font-normal text-black pt-2 leading-relaxed">
      {{ $t("biz14") }} 4-14+ {{ $t("biz15") }}<br />
      100-160 cm<br />
      {{ $t("biz16") }} 70 kg
    </p>
  </div>

  <!-- CARD 4 -->
  <div class="flex flex-col items-center">
  <NuxtLink
  :to="localePath($t('bizl4'))"
  class="block text-center group"
>
  <!-- IMAGE -->
  <img
    src="/images/ERDRIFTERX.webp"
    alt="EzyRoller Drifter X"
    class="w-full h-auto mb-3 transition-all duration-300 group-hover:opacity-90"
  />

  <!-- TEXT + ARROW -->
  <div
    class="text-xl md:text-2xl font-medium inline-flex items-center gap-1
           border-b border-slate-400 pb-[2px] text-gray-500
           transition-all duration-300
           group-hover:border-slate-700 group-hover:text-black group-hover:ml-2"
  >
    DRIFTER X
    <span class="inline-block transition-transform duration-300 group-hover:translate-x-1.5">
      →
    </span>
  </div>
</NuxtLink>

<p class="text-xs sm:text-base font-normal text-black pt-2 leading-relaxed">
      {{ $t("biz14") }} 4-14+ {{ $t("biz15") }}<br />
      100-160 cm<br />
      {{ $t("biz16") }} 70 kg
    </p>
  </div>

  <!-- CARD 5 -->
  <div class="flex flex-col items-center">
  <NuxtLink
  :to="localePath($t('bizl5'))"
  class="block text-center group"
>
  <!-- IMAGE -->
  <img
    src="/images/ERPROX.webp"
    alt="EzyRoller Pro X"
    class="w-full h-auto mb-3 transition-all duration-300 group-hover:opacity-90"
  />

  <!-- TEXT + ARROW -->
  <div
    class="text-xl md:text-2xl font-medium inline-flex items-center gap-1
           border-b border-slate-400 pb-[2px] text-gray-500
           transition-all duration-300
           group-hover:border-slate-700 group-hover:text-black group-hover:ml-2"
  >
    PRO X
    <span class="inline-block transition-transform duration-300 group-hover:translate-x-1.5">
      →
    </span>
  </div>
</NuxtLink>

<p class="text-xs sm:text-base font-normal text-black pt-2 leading-relaxed">
      {{ $t("biz17") }} 10 {{ $t("biz15") }}<br />
      135-180 cm<br />
      {{ $t("biz16") }} 100 kg
    </p>
  </div>

  <!-- CARD 6 -->
  <div class="flex flex-col items-center">
  <NuxtLink
  :to="localePath($t('bizl6'))"
  class="block text-center group"
>
  <!-- IMAGE -->
  <img
    src="/images/ERDRIFTERPROX.webp"
    alt="EzyRoller Drifter Pro X"
    class="w-full h-auto mb-3 transition-all duration-300 group-hover:opacity-90"
  />

  <!-- TEXT + ARROW -->
  <div
    class="text-xl md:text-2xl font-medium inline-flex items-center gap-1
           border-b border-slate-400 pb-[2px] text-gray-500
           transition-all duration-300
           group-hover:border-slate-700 group-hover:text-black group-hover:ml-2"
  >
    DRIFTER PRO X
    <span class="inline-block transition-transform duration-300 group-hover:translate-x-1.5">
      →
    </span>
  </div>
</NuxtLink>

<p class="text-xs sm:text-base font-normal text-black pt-2 leading-relaxed">
      {{ $t("biz17") }} 10 {{ $t("biz15") }}<br />
      135-180 cm<br />
      {{ $t("biz16") }} 100 kg
    </p>
  </div>

</div>


    </div>
    </section>







    <section class="w-full py-4 px-4">
    <div
      class="max-w-6xl mx-auto items-center"
    >

    <h3 class="text-3xl uppercase font-bold mb-0 px-0 py-2 text-center">{{ $t("biz18") }}</h3>

    
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
          src="/images/biz3.webp"
          alt="Banner"
          class="w-full h-auto object-cover rounded-lg shadow-md"
        />
      </div>

      <!-- TEXT SECOND ON MOBILE -->
      <div class="order-2 md:order-1 text-gray-800">
            <div class="flex items-center gap-4">
  <img
    src="/images/icon4.webp"
    alt="Icon"
    class="h-14 w-14 flex-shrink-0"
  />

  <div class="flex flex-col">
    <span class="text-base text-gray-700 uppercase font-normal tracking-[0.5em] block">
      EzyRoller
    </span>

    <h3 class="text-3xl uppercase font-bold mb-0 p-0">
      {{ $t("biz19") }}
    </h3>
  </div>
</div>

  
  <ul class="list-disc pl-5 mt-4">
  <li class="text-base font-medium leading-relaxed pt-1">
    {{ $t("biz20") }}
  </li>
  <li class="text-base font-medium leading-relaxed pt-1">
    {{ $t("biz21") }}
  </li>
  <li class="text-base font-medium leading-relaxed pt-1">
    {{ $t("biz22") }}
  </li>
  <li class="text-base font-medium leading-relaxed pt-1">
    {{ $t("biz23") }}
  </li>
</ul>
<p class="text-base leading-relaxed pt-4">
<NuxtLink
:to="localePath('/business#business')"
class="inline-flex items-center gap-1 border-b border-slate-400 pb-[2px] text-gray-500 font-medium transition-all duration-300 hover:border-slate-700 hover:text-black hover:ml-2 group"
>
{{ $t("businesstop3") }}<span class="inline-block transition-transform duration-300 group-hover:translate-x-1.5"> → </span>
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
      <div class="order-2 md:order-1">
        <img
          src="/images/biz4.webp"
          alt="Banner"
          class="w-full h-auto object-cover rounded-lg shadow-md"
        />
      </div>

      <!-- TEXT SECOND ON MOBILE -->
      <div class="order-1 md:order-2 text-gray-800">
            <div class="flex items-center gap-4">
  <img
    src="/images/icon5.webp"
    alt="Icon"
    class="h-14 w-14 flex-shrink-0"
  />

  <div class="flex flex-col">
    <span class="text-base text-gray-700 uppercase font-normal tracking-[0.5em] block">
      EzyRoller
    </span>

    <h3 class="text-3xl uppercase font-bold mb-0 p-0">
      {{ $t("biz24") }}
    </h3>
  </div>
</div>

  
  <ul class="list-disc pl-5 mt-4">
  <li class="text-base font-medium leading-relaxed pt-1">
    {{ $t("biz25") }}
  </li>
  <li class="text-base font-medium leading-relaxed pt-1">
    {{ $t("biz26") }}
  </li>
  <li class="text-base font-medium leading-relaxed pt-1">
    {{ $t("biz27") }}
  </li>
  <li class="text-base font-medium leading-relaxed pt-1">
    {{ $t("biz28") }}
  </li>
</ul>
<p class="text-base leading-relaxed pt-4">
<NuxtLink
:to="localePath('/business#business')"
class="inline-flex items-center gap-1 border-b border-slate-400 pb-[2px] text-gray-500 font-medium transition-all duration-300 hover:border-slate-700 hover:text-black hover:ml-2 group"
>
{{ $t("businesstop3") }}<span class="inline-block transition-transform duration-300 group-hover:translate-x-1.5"> → </span>
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
          src="/images/biz5.webp"
          alt="Banner"
          class="w-full h-auto object-cover rounded-lg shadow-md"
        />
      </div>

      <!-- TEXT SECOND ON MOBILE -->
      <div class="order-2 md:order-1 text-gray-800">
            <div class="flex items-center gap-4">
  <img
    src="/images/icon6.webp"
    alt="Icon"
    class="h-14 w-14 flex-shrink-0"
  />

  <div class="flex flex-col">
    <span class="text-base text-gray-700 uppercase font-normal tracking-[0.5em] block">
      EzyRoller
    </span>

    <h3 class="text-3xl uppercase font-bold mb-0 p-0">
      {{ $t("biz29") }}
    </h3>
  </div>
</div>

  
  <ul class="list-disc pl-5 mt-4">
  <li class="text-base font-medium leading-relaxed pt-1">
    {{ $t("biz30") }}
  </li>
  <li class="text-base font-medium leading-relaxed pt-1">
    {{ $t("biz31") }}
  </li>
  <li class="text-base font-medium leading-relaxed pt-1">
    {{ $t("biz32") }}
  </li>
  <li class="text-base font-medium leading-relaxed pt-1">
    {{ $t("biz33") }}
  </li>
</ul>
<p class="text-base leading-relaxed pt-4">
<NuxtLink
:to="localePath('/business#business')"
class="inline-flex items-center gap-1 border-b border-slate-400 pb-[2px] text-gray-500 font-medium transition-all duration-300 hover:border-slate-700 hover:text-black hover:ml-2 group"
>
{{ $t("businesstop3") }}<span class="inline-block transition-transform duration-300 group-hover:translate-x-1.5"> → </span>
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