<template>
  <nav class="relative bg-white py-2" ref="menuRef">

    <!-- TOP LEVEL MENU -->
    <ul class="flex gap-2 max-w-screen-2xl mx-auto text-lg">

      <!-- MENU 1 -->
      <li>
        <button
          @click.stop="toggleMenu('menu1')"
          class="inline-flex items-center rounded-lg gap-2 px-5 py-3 font-medium transition-colors duration-200
                 hover:bg-slate-700 hover:text-white"
          :class="activeMenu === 'menu1' ? 'bg-slate-700 text-white' : ''"
        >
          <span>{{ t('menu1') }}</span>

          <svg
            xmlns="http://www.w3.org/2000/svg"
            class="w-4 h-4 transition-transform duration-200"
            :class="activeMenu === 'menu1' ? 'rotate-180' : 'rotate-0'"
            viewBox="0 0 24 24"
          >
            <path
              fill="currentColor"
              d="M12 15.5a1 1 0 0 1-.7-.29l-5-5a1 1 0 0 1 1.4-1.42L12 13.09l4.3-4.3a1 1 0 0 1 1.4 1.42l-5 5a1 1 0 0 1-.7.29Z"
            />
          </svg>
        </button>
      </li>

      <!-- MENU 2 -->
      <li>
        <button
          @click.stop="toggleMenu('menu2')"
          class="inline-flex items-center rounded-lg gap-2 px-5 py-3 font-medium transition-colors duration-200
                 hover:bg-slate-700 hover:text-white"
          :class="activeMenu === 'menu2' ? 'bg-slate-700 text-white' : ''"
        >
          <span>{{ t('menu2') }}</span>

          <svg
            xmlns="http://www.w3.org/2000/svg"
            class="w-4 h-4 transition-transform duration-200"
            :class="activeMenu === 'menu2' ? 'rotate-180' : 'rotate-0'"
            viewBox="0 0 24 24"
          >
            <path
              fill="currentColor"
              d="M12 15.5a1 1 0 0 1-.7-.29l-5-5a1 1 0 0 1 1.4-1.42L12 13.09l4.3-4.3a1 1 0 0 1 1.4 1.42l-5 5a1 1 0 0 1-.7.29Z"
            />
          </svg>
        </button>
      </li>

      <!-- SIMPLE LINKS -->
      <li>
  <SfLink
    :tag="NuxtLink"
    :href="localePath(t('textWidgetLI4'))"
          class="inline-flex items-center rounded-lg gap-2 px-5 py-3 font-medium transition-colors duration-200
                 hover:bg-slate-700 hover:text-white !no-underline"
  >
    {{ t('menu3') }}
  </SfLink>
</li>

<li>
  <SfLink
    :tag="NuxtLink"
    :href="localePath('/our-story')"
          class="inline-flex items-center rounded-lg gap-2 px-5 py-3 font-medium transition-colors duration-200
                 hover:bg-slate-700 hover:text-white !no-underline"
  >
    {{ t('menu4') }}
  </SfLink>
</li>


<li>
  <SfLink
    :tag="NuxtLink"
    :href="localePath('/business')"
          class="inline-flex items-center rounded-lg gap-2 px-5 py-3 font-medium transition-colors duration-200
                 hover:bg-slate-700 hover:text-white !no-underline"
  >
    {{ t('menu5') }}
  </SfLink>
</li>




    </ul>

    <!-- DROPDOWN 1 -->
    <transition
      enter-active-class="transition-all duration-300 ease-out"
      leave-active-class="transition-all duration-200 ease-in"
      enter-from-class="opacity-0 -translate-y-3"
      enter-to-class="opacity-100 translate-y-0"
      leave-from-class="opacity-100 translate-y-0"
      leave-to-class="opacity-0 -translate-y-3"
    >
      <div
        v-if="activeMenu === 'menu1'"
        class="absolute left-0 right-0 top-full bg-white shadow-xl z-50 w-screen border-t border-neutral-200"
        @click.stop
      >
        <div class="max-w-screen-2xl mx-auto px-0 py-6 space-y-6">

          <!-- GRID 7 ITEMS -->
          <div class="grid grid-cols-7 gap-4">

            <!-- CARD 1 (SfLink) -->
            <SfLink
  :tag="NuxtLink"
  :href="localePath(t('bizl0'))"
  class="group flex flex-col items-center gap-2 !no-underline"
>
  <div
    class="aspect-[4/3] overflow-hidden rounded-lg bg-neutral-50 
           transition-all duration-200 
           group-hover:scale-105"
  >
    <img
      src="/images/mer1.webp"
      class="w-full h-full object-cover"
    />
  </div>

  <div
    class="inline-flex w-fit items-center gap-1 border-b border-slate-400 pb-[2px]
           font-medium text-base transition-all duration-300
           group-hover:border-black group-hover:text-black"
  >
    CLASSIC
  </div>
</SfLink>


<SfLink
  :tag="NuxtLink"
  :href="localePath(t('bizl2'))"
  class="group flex flex-col items-center gap-2 !no-underline"
>
  <div
    class="aspect-[4/3] overflow-hidden rounded-lg bg-neutral-50 
           transition-all duration-200 
           group-hover:scale-105"
  >
    <img
      src="/images/mer2.webp"
      class="w-full h-full object-cover"
    />
  </div>

  <div
    class="inline-flex w-fit items-center gap-1 border-b border-slate-400 pb-[2px]
           font-medium text-base transition-all duration-300
           group-hover:border-black group-hover:text-black"
  >
    CLASSIC X
  </div>
</SfLink>

<SfLink
  :tag="NuxtLink"
  :href="localePath(t('bizl4'))"
  class="group flex flex-col items-center gap-2 !no-underline"
>
  <div
    class="aspect-[4/3] overflow-hidden rounded-lg bg-neutral-50 
           transition-all duration-200 
           group-hover:scale-105"
  >
    <img
      src="/images/mer3.webp"
      class="w-full h-full object-cover"
    />
  </div>

  <div
    class="inline-flex w-fit items-center gap-1 border-b border-slate-400 pb-[2px]
           font-medium text-base transition-all duration-300
           group-hover:border-black group-hover:text-black"
  >
    DRIFTER X
  </div>
</SfLink>

<SfLink
  :tag="NuxtLink"
  :href="localePath(t('bizl6'))"
  class="group flex flex-col items-center gap-2 !no-underline"
>
  <div
    class="aspect-[4/3] overflow-hidden rounded-lg bg-neutral-50 
           transition-all duration-200 
           group-hover:scale-105"
  >
    <img
      src="/images/mer4.webp"
      class="w-full h-full object-cover"
    />
  </div>

  <div
    class="inline-flex w-fit items-center gap-1 border-b border-slate-400 pb-[2px]
           font-medium text-base transition-all duration-300
           group-hover:border-black group-hover:text-black"
  >
    DRIFTER X PRO
  </div>
</SfLink>

<SfLink
  :tag="NuxtLink"
  :href="localePath(t('bizl1'))"
  class="group flex flex-col items-center gap-2 !no-underline"
>
  <div
    class="aspect-[4/3] overflow-hidden rounded-lg bg-neutral-50 
           transition-all duration-200 
           group-hover:scale-105"
  >
    <img
      src="/images/mer5.webp"
      class="w-full h-full object-cover"
    />
  </div>

  <div
    class="inline-flex w-fit items-center gap-1 border-b border-slate-400 pb-[2px]
           font-medium text-base transition-all duration-300
           group-hover:border-black group-hover:text-black"
  >
    MINI
  </div>
</SfLink>

<SfLink
  :tag="NuxtLink"
  :href="localePath(t('bizl5'))"
  class="group flex flex-col items-center gap-2 !no-underline"
>
  <div
    class="aspect-[4/3] overflow-hidden rounded-lg bg-neutral-50 
           transition-all duration-200 
           group-hover:scale-105"
  >
    <img
      src="/images/mer6.webp"
      class="w-full h-full object-cover"
    />
  </div>

  <div
    class="inline-flex w-fit items-center gap-1 border-b border-slate-400 pb-[2px]
           font-medium text-base transition-all duration-300
           group-hover:border-black group-hover:text-black"
  >
    PRO X
  </div>
</SfLink>

<SfLink
  :tag="NuxtLink"
  :href="localePath(t('bizl3'))"
  class="group flex flex-col items-center gap-2 !no-underline"
>
  <div
    class="aspect-[4/3] overflow-hidden rounded-lg bg-neutral-50 
           transition-all duration-200 
           group-hover:scale-105"
  >
    <img
      src="/images/mer7.webp"
      class="w-full h-full object-cover"
    />
  </div>

  <div
    class="inline-flex w-fit items-center gap-1 border-b border-slate-400 pb-[2px]
           font-medium text-base transition-all duration-300
           group-hover:border-black group-hover:text-black"
  >
    SPINNER X
  </div>
</SfLink>






          </div>

          

        </div>
      </div>
    </transition>

    <!-- DROPDOWN 2 -->
    <transition
      enter-active-class="transition-all duration-300 ease-out"
      leave-active-class="transition-all duration-200 ease-in"
      enter-from-class="opacity-0 -translate-y-3"
      enter-to-class="opacity-100 translate-y-0"
      leave-from-class="opacity-100 translate-y-0"
      leave-to-class="opacity-0 -translate-y-3"
    >
      <div
        v-if="activeMenu === 'menu2'"
        class="absolute left-0 right-0 top-full bg-white shadow-xl z-50 w-screen border-t border-neutral-200"
        @click.stop
      >
        <div class="max-w-screen-2xl mx-auto px-0 py-6 space-y-6">

          <!-- GRID 7 ITEMS -->
          <div class="grid grid-cols-7 gap-4">

            <!-- CARD 1 (SfLink) -->
            <SfLink
  :tag="NuxtLink"
  :href="localePath(t('bizl10'))"
  class="group flex flex-col items-center gap-2 !no-underline"
>
  <div
    class="aspect-[4/3] overflow-hidden rounded-lg bg-neutral-50 
           transition-all duration-200 
           group-hover:scale-105"
  >
    <img
      src="/images/mer8.webp"
      class="w-full h-full object-cover"
    />
  </div>

  <div
    class="inline-flex w-fit items-center gap-1 border-b border-slate-400 pb-[2px]
           font-medium text-base transition-all duration-300
           group-hover:border-black group-hover:text-black"
  >
    {{ $t("menu21") }}
  </div>
</SfLink>


<SfLink
  :tag="NuxtLink"
  :href="localePath(t('bizl11'))"
  class="group flex flex-col items-center gap-2 !no-underline"
>
  <div
    class="aspect-[4/3] overflow-hidden rounded-lg bg-neutral-50 
           transition-all duration-200 
           group-hover:scale-105"
  >
    <img
      src="/images/mer9.webp"
      class="w-full h-full object-cover"
    />
  </div>

  <div
    class="inline-flex w-fit items-center gap-1 border-b border-slate-400 pb-[2px]
           font-medium text-base transition-all duration-300
           group-hover:border-black group-hover:text-black"
  >
    {{ $t("menu22") }}
  </div>
</SfLink>

<SfLink
  :tag="NuxtLink"
  :href="localePath(t('bizl12'))"
  class="group flex flex-col items-center gap-2 !no-underline"
>
  <div
    class="aspect-[4/3] overflow-hidden rounded-lg bg-neutral-50 
           transition-all duration-200 
           group-hover:scale-105"
  >
    <img
      src="/images/mer10.webp"
      class="w-full h-full object-cover"
    />
  </div>

  <div
    class="inline-flex w-fit items-center gap-1 border-b border-slate-400 pb-[2px]
           font-medium text-base transition-all duration-300
           group-hover:border-black group-hover:text-black"
  >
    {{ $t("menu23") }}
  </div>
</SfLink>

<SfLink
  :tag="NuxtLink"
  :href="localePath(t('textWidgetLI6'))"
  class="group flex flex-col items-center gap-2 !no-underline"
>
  <div
    class="aspect-[4/3] overflow-hidden rounded-lg bg-neutral-50 
           transition-all duration-200 
           group-hover:scale-105"
  >
    <img
      src="/images/mer11.webp"
      class="w-full h-full object-cover"
    />
  </div>

  <div
    class="inline-flex w-fit items-center gap-1 border-b border-slate-400 pb-[2px]
           font-medium text-base transition-all duration-300
           group-hover:border-black group-hover:text-black"
  >
    {{ $t("menu24") }}
  </div>
</SfLink>

<SfLink
  :tag="NuxtLink"
  :href="localePath(t('bizl9'))"
  class="group flex flex-col items-center gap-2 !no-underline"
>
  <div
    class="aspect-[4/3] overflow-hidden rounded-lg bg-neutral-50 
           transition-all duration-200 
           group-hover:scale-105"
  >
    <img
      src="/images/mer12.webp"
      class="w-full h-full object-cover"
    />
  </div>

  <div
    class="inline-flex w-fit items-center gap-1 border-b border-slate-400 pb-[2px]
           font-medium text-base transition-all duration-300
           group-hover:border-black group-hover:text-black"
  >
    {{ $t("menu25") }}
  </div>
</SfLink>

<SfLink
  :tag="NuxtLink"
  :href="localePath(t('bizl8'))"
  class="group flex flex-col items-center gap-2 !no-underline"
>
  <div
    class="aspect-[4/3] overflow-hidden rounded-lg bg-neutral-50 
           transition-all duration-200 
           group-hover:scale-105"
  >
    <img
      src="/images/mer13.webp"
      class="w-full h-full object-cover"
    />
  </div>

  <div
    class="inline-flex w-fit items-center gap-1 border-b border-slate-400 pb-[2px]
           font-medium text-base transition-all duration-300
           group-hover:border-black group-hover:text-black"
  >
    {{ $t("menu26") }}
  </div>
</SfLink>

<SfLink
  :tag="NuxtLink"
  :href="localePath(t('textWidgetLI5'))"
  class="group flex flex-col items-center gap-2 !no-underline"
>
  <div
    class="aspect-[4/3] overflow-hidden rounded-lg bg-neutral-50 
           transition-all duration-200 
           group-hover:scale-105"
  >
    <img
      src="/images/mer14.webp"
      class="w-full h-full object-cover"
    />
  </div>

  <div
    class="inline-flex w-fit items-center gap-1 border-b border-slate-400 pb-[2px]
           font-medium text-base transition-all duration-300
           group-hover:border-black group-hover:text-black"
  >
    {{ $t("menu27") }}
  </div>
</SfLink>






          </div>

          

        </div>
      </div>
    </transition>

  </nav>
</template>

<script setup lang="ts">
import { ref, onMounted, onBeforeUnmount } from "vue";
import { SfLink } from "@storefront-ui/vue";
import { useI18n } from "vue-i18n";
import { useLocalePath } from "#i18n";

const { t } = useI18n();
const localePath = useLocalePath();

const activeMenu = ref<string | null>(null);

const toggleMenu = (menu: string) => {
  activeMenu.value = activeMenu.value === menu ? null : menu;
};

const menuRef = ref<HTMLElement | null>(null);

const handleOutsideClick = (e: MouseEvent) => {
  if (!menuRef.value) return;
  if (!menuRef.value.contains(e.target as Node)) {
    activeMenu.value = null;
  }
};

onMounted(() => {
  document.addEventListener("click", handleOutsideClick);
});

onBeforeUnmount(() => {
  document.removeEventListener("click", handleOutsideClick);
});
</script>
