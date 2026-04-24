<template>
  <header class="relative w-full md:sticky shadow-md z-10 bg-white">

    <!-- TOP BAR -->
    <div class="flex items-center justify-between px-4 md:px-0 py-1 md:py-5 w-full max-w-screen-2xl mx-auto">

      <!-- MOBILE HEADER -->
      <div class="flex items-center justify-between w-full lg:hidden">

        <!-- BURGER -->
        <UiButton
          variant="tertiary"
          class="rounded-md"
          square
          @click="open()"
        >
          <SfIconMenu class="w-8 h-8" />
        </UiButton>

        <!-- LOGO CENTERED -->
        <div class="flex-1 flex justify-center">
          <NuxtLink
            :to="localePath(paths.home)"
            aria-label="Homepage"
            class="flex items-center"
          >
            <UiLogo class="ml-8" />
          </NuxtLink>
        </div>

        <!-- MOBILE RIGHT ICONS -->
        <div class="flex items-center gap-2">
          <slot name="mobile-actions" />
        </div>
      </div>

      <!-- DESKTOP HEADER -->
      <div class="hidden lg:flex items-center justify-between w-full">
        <NuxtLink
          :to="localePath(paths.home)"
          aria-label="Homepage"
          class="flex items-center"
        >
          <UiLogo class="-mt-2 pt-2" />
        </NuxtLink>

        <div class="flex-1 flex justify-center px-5">
          <slot name="search" />
        </div>

        <div class="flex items-center gap-0">
          <slot name="actions" />
        </div>
      </div>

    </div>

    <!-- DESKTOP MENU -->
    <nav v-if="viewport.isGreaterOrEquals('lg')" class="bg-white border-b border-t border-zinc-300">
      <ErMenu />
    </nav>

    <!-- MOBILE MENU -->
    <transition name="slide-fade">
      <SfDrawer
        v-model="isOpen"
        placement="left"
        class="bg-white overflow-y-auto z-[2000] w-[90vw] max-w-none shadow-2xl"
      >
        <nav>

          <!-- TOP BAR -->
          <div class="flex items-center justify-between p-4 border-b border-neutral-400">
            <img
              src="https://cdn02.plentymarkets.com/4in9ikd3ipve/frontend/ezyroller/img/ERLOGONEW.svg"
              alt="Logo"
              class="max-h-[50px] max-w-[200px]"
            />

            <UiButton
              variant="tertiary"
              square
              aria-label="Close"
              class="hover:bg-neutral-200 text-neutral-700"
              @click="close()"
            >
              <SfIconClose class="text-neutral-700" />
            </UiButton>
          </div>

          <!-- TITLE -->
          <div class="px-5 py-2 bg-neutral-100">
            <span class="text-base font-semibold mb-4 p-0">{{ t('menu1') }}</span>
          </div>

          <!-- CATEGORY GRID -->
          <div class="p-4 grid grid-cols-3 gap-4 border-b border-neutral-400">

            <!-- CARD TEMPLATE -->
            <NuxtLink
              :to="localePath(t('bizl0'))"
              class="group flex flex-col items-center gap-2 no-underline"
              @click="close()"
            >
              <div class="aspect-[4/3] overflow-hidden rounded-lg bg-neutral-50 transition-all duration-200 group-hover:scale-105">
                <img src="/images/mer1.webp" class="w-full h-full object-cover" />
              </div>
              <div class="inline-flex w-fit items-center gap-1 border-b border-slate-400 pb-[2px] font-medium text-base transition-all duration-300 group-hover:border-black group-hover:text-black">
                CLASSIC
              </div>
            </NuxtLink>

            <NuxtLink
              :to="localePath(t('bizl2'))"
              class="group flex flex-col items-center gap-2 no-underline"
              @click="close()"
            >
              <div class="aspect-[4/3] overflow-hidden rounded-lg bg-neutral-50 transition-all duration-200 group-hover:scale-105">
                <img src="/images/mer2.webp" class="w-full h-full object-cover" />
              </div>
              <div class="inline-flex w-fit items-center gap-1 border-b border-slate-400 pb-[2px] font-medium text-base transition-all duration-300 group-hover:border-black group-hover:text-black">
                CLASSIC X
              </div>
            </NuxtLink>

            <NuxtLink
              :to="localePath(t('bizl4'))"
              class="group flex flex-col items-center gap-2 no-underline"
              @click="close()"
            >
              <div class="aspect-[4/3] overflow-hidden rounded-lg bg-neutral-50 transition-all duration-200 group-hover:scale-105">
                <img src="/images/mer3.webp" class="w-full h-full object-cover" />
              </div>
              <div class="inline-flex w-fit items-center gap-1 border-b border-slate-400 pb-[2px] font-medium text-base transition-all duration-300 group-hover:border-black group-hover:text-black">
                DRIFTER X
              </div>
            </NuxtLink>

            <NuxtLink
              :to="localePath(t('bizl6'))"
              class="group flex flex-col items-center gap-2 no-underline"
              @click="close()"
            >
              <div class="aspect-[4/3] overflow-hidden rounded-lg bg-neutral-50 transition-all duration-200 group-hover:scale-105">
                <img src="/images/mer4.webp" class="w-full h-full object-cover" />
              </div>
              <div class="inline-flex w-fit items-center gap-1 border-b border-slate-400 pb-[2px] font-medium text-base transition-all duration-300 group-hover:border-black group-hover:text-black">
                DRIFTER X PRO
              </div>
            </NuxtLink>

            <NuxtLink
              :to="localePath(t('bizl1'))"
              class="group flex flex-col items-center gap-2 no-underline"
              @click="close()"
            >
              <div class="aspect-[4/3] overflow-hidden rounded-lg bg-neutral-50 transition-all duration-200 group-hover:scale-105">
                <img src="/images/mer5.webp" class="w-full h-full object-cover" />
              </div>
              <div class="inline-flex w-fit items-center gap-1 border-b border-slate-400 pb-[2px] font-medium text-base transition-all duration-300 group-hover:border-black group-hover:text-black">
                MINI
              </div>
            </NuxtLink>

            <NuxtLink
              :to="localePath(t('bizl5'))"
              class="group flex flex-col items-center gap-2 no-underline"
              @click="close()"
            >
              <div class="aspect-[4/3] overflow-hidden rounded-lg bg-neutral-50 transition-all duration-200 group-hover:scale-105">
                <img src="/images/mer6.webp" class="w-full h-full object-cover" />
              </div>
              <div class="inline-flex w-fit items-center gap-1 border-b border-slate-400 pb-[2px] font-medium text-base transition-all duration-300 group-hover:border-black group-hover:text-black">
                PRO X
              </div>
            </NuxtLink>

            <NuxtLink
              :to="localePath(t('bizl3'))"
              class="group flex flex-col items-center gap-2 no-underline"
              @click="close()"
            >
              <div class="aspect-[4/3] overflow-hidden rounded-lg bg-neutral-50 transition-all duration-200 group-hover:scale-105">
                <img src="/images/mer7.webp" class="w-full h-full object-cover" />
              </div>
              <div class="inline-flex w-fit items-center gap-1 border-b border-slate-400 pb-[2px] font-medium text-base transition-all duration-300 group-hover:border-black group-hover:text-black">
                SPINNER X
              </div>
            </NuxtLink>

          </div>

          <!-- TITLE -->
          <div class="px-5 py-2 bg-neutral-100">
            <span class="text-base font-semibold mb-4 p-0">{{ t('menu2') }}</span>
          </div>

          <!-- CATEGORY GRID -->
          <div class="p-4 grid grid-cols-3 gap-4 border-b border-neutral-400">

            <!-- CARD TEMPLATE -->
            <NuxtLink
              :to="localePath(t('bizl10'))"
              class="group flex flex-col items-center gap-2 no-underline"
              @click="close()"
            >
              <div class="aspect-[4/3] overflow-hidden rounded-lg bg-neutral-50 transition-all duration-200 group-hover:scale-105">
                <img src="/images/mer8.webp" class="w-full h-full object-cover" />
              </div>
              <div class="inline-flex w-fit items-center gap-1 border-b border-slate-400 pb-[2px] font-medium text-base transition-all duration-300 group-hover:border-black group-hover:text-black">
                {{ $t("menu21") }}
              </div>
            </NuxtLink>

            <NuxtLink
              :to="localePath(t('bizl11'))"
              class="group flex flex-col items-center gap-2 no-underline"
              @click="close()"
            >
              <div class="aspect-[4/3] overflow-hidden rounded-lg bg-neutral-50 transition-all duration-200 group-hover:scale-105">
                <img src="/images/mer9.webp" class="w-full h-full object-cover" />
              </div>
              <div class="inline-flex w-fit items-center gap-1 border-b border-slate-400 pb-[2px] font-medium text-base transition-all duration-300 group-hover:border-black group-hover:text-black">
                {{ $t("menu22") }}
              </div>
            </NuxtLink>

            <NuxtLink
              :to="localePath(t('bizl12'))"
              class="group flex flex-col items-center gap-2 no-underline"
              @click="close()"
            >
              <div class="aspect-[4/3] overflow-hidden rounded-lg bg-neutral-50 transition-all duration-200 group-hover:scale-105">
                <img src="/images/mer10.webp" class="w-full h-full object-cover" />
              </div>
              <div class="inline-flex w-fit items-center gap-1 border-b border-slate-400 pb-[2px] font-medium text-base transition-all duration-300 group-hover:border-black group-hover:text-black">
                {{ $t("menu23") }}
              </div>
            </NuxtLink>

            <NuxtLink
              :to="localePath(t('textWidgetLI6'))"
              class="group flex flex-col items-center gap-2 no-underline"
              @click="close()"
            >
              <div class="aspect-[4/3] overflow-hidden rounded-lg bg-neutral-50 transition-all duration-200 group-hover:scale-105">
                <img src="/images/mer11.webp" class="w-full h-full object-cover" />
              </div>
              <div class="inline-flex w-fit items-center gap-1 border-b border-slate-400 pb-[2px] font-medium text-base transition-all duration-300 group-hover:border-black group-hover:text-black">
                {{ $t("menu24") }}
              </div>
            </NuxtLink>

            <NuxtLink
              :to="localePath(t('bizl9'))"
              class="group flex flex-col items-center gap-2 no-underline"
              @click="close()"
            >
              <div class="aspect-[4/3] overflow-hidden rounded-lg bg-neutral-50 transition-all duration-200 group-hover:scale-105">
                <img src="/images/mer12.webp" class="w-full h-full object-cover" />
              </div>
              <div class="inline-flex w-fit items-center gap-1 border-b border-slate-400 pb-[2px] font-medium text-base transition-all duration-300 group-hover:border-black group-hover:text-black">
                {{ $t("menu25") }}
              </div>
            </NuxtLink>

            <NuxtLink
              :to="localePath(t('bizl8'))"
              class="group flex flex-col items-center gap-2 no-underline"
              @click="close()"
            >
              <div class="aspect-[4/3] overflow-hidden rounded-lg bg-neutral-50 transition-all duration-200 group-hover:scale-105">
                <img src="/images/mer13.webp" class="w-full h-full object-cover" />
              </div>
              <div class="inline-flex w-fit items-center gap-1 border-b border-slate-400 pb-[2px] font-medium text-base transition-all duration-300 group-hover:border-black group-hover:text-black">
                {{ $t("menu26") }}
              </div>
            </NuxtLink>

            <NuxtLink
              :to="localePath(t('textWidgetLI5'))"
              class="group flex flex-col items-center gap-2 no-underline"
              @click="close()"
            >
              <div class="aspect-[4/3] overflow-hidden rounded-lg bg-neutral-50 transition-all duration-200 group-hover:scale-105">
                <img src="/images/mer14.webp" class="w-full h-full object-cover" />
              </div>
              <div class="inline-flex w-fit items-center gap-1 border-b border-slate-400 pb-[2px] font-medium text-base transition-all duration-300 group-hover:border-black group-hover:text-black">
                {{ $t("menu27") }}
              </div>
            </NuxtLink>

          </div>

          <div class="px-5 py-2 border-b border-neutral-300 bg-neutral-100">
            <span class="text-base font-semibold p-0">{{ $t("textWidgetL16") }}</span>
          </div>

          <!-- CATEGORY GRID -->
          <div class="mb-10">

            <!-- CARD TEMPLATE -->

            <NuxtLink
  :to="localePath(t('textWidgetLI4'))"
  class="flex items-center justify-between w-full py-4 px-6 
         border-b border-neutral-300 text-black font-normal text-lg 
         hover:bg-neutral-100 transition-colors"
  @click="close()"
>
  <span>{{ t('menu3') }}</span>

  <!-- стрелка -->
  <span class="text-neutral-400 text-3xl leading-none">›</span>
</NuxtLink>

<NuxtLink
  :href="localePath('/find-ezyroller')"
  class="flex items-center justify-between w-full py-4 px-6 
         border-b border-neutral-300 text-black font-normal text-lg 
         hover:bg-neutral-100 transition-colors"
  @click="close()"
>
  <span>{{ $t("videoCta") }}</span>

  <!-- стрелка -->
  <span class="text-neutral-400 text-3xl leading-none">›</span>
</NuxtLink>

<NuxtLink
  :href="localePath('/business')"
  class="flex items-center justify-between w-full py-4 px-6 
         border-b border-neutral-300 text-black font-normal text-lg 
         hover:bg-neutral-100 transition-colors"
  @click="close()"
>
  <span>{{ t('menu5') }}</span>

  <!-- стрелка -->
  <span class="text-neutral-400 text-3xl leading-none">›</span>
</NuxtLink>

<NuxtLink
  :href="localePath('/our-story')"
  class="flex items-center justify-between w-full py-4 px-6 
         border-b border-neutral-300 text-black font-normal text-lg 
         hover:bg-neutral-100 transition-colors"
  @click="close()"
>
  <span>{{ t('menu4') }}</span>

  <!-- стрелка -->
  <span class="text-neutral-400 text-3xl leading-none">›</span>
</NuxtLink>

<NuxtLink
  :href="localePath('/ezyroller-care')"
  class="flex items-center justify-between w-full py-4 px-6 
         border-b border-neutral-300 text-black font-normal text-lg 
         hover:bg-neutral-100 transition-colors"
  @click="close()"
>
  <span>{{ $t("textWidgetL8") }} & {{ $t("textWidgetL9") }}</span>

  <!-- стрелка -->
  <span class="text-neutral-400 text-3xl leading-none">›</span>
</NuxtLink>

<NuxtLink
  :href="localePath('/faq')"
  class="flex items-center justify-between w-full py-4 px-6 
         border-b border-neutral-300 text-black font-normal text-lg 
         hover:bg-neutral-100 transition-colors"
  @click="close()"
>
  <span>{{ t('textWidgetL6') }}</span>

  <!-- стрелка -->
  <span class="text-neutral-400 text-3xl leading-none">›</span>
</NuxtLink>

<NuxtLink
  :href="localePath('/kontakt')"
  class="flex items-center justify-between w-full py-4 px-6 
         border-b border-neutral-300 text-black font-normal text-lg 
         hover:bg-neutral-100 transition-colors"
  @click="close()"
>
  <span>{{ t('textWidgetL7') }}</span>

  <!-- стрелка -->
  <span class="text-neutral-400 text-3xl leading-none">›</span>
</NuxtLink>


          </div>
<br/>
        </nav>
      </SfDrawer>
    </transition>

  </header>
</template>

<script setup lang="ts">
import { SfIconClose, SfDrawer, SfIconMenu } from '@storefront-ui/vue';
import ErMenu from '~/components/ui/ErMenu.vue';

const viewport = useViewport();
const localePath = useLocalePath();
const paths = { home: '/' };

const { isOpen, open, close } = useStaticMenu();
</script>

<style scoped>
.slide-fade-enter-active {
  transition: all 0.25s ease-out;
}
.slide-fade-leave-active {
  transition: all 0.2s ease-in;
}
.slide-fade-enter-from {
  opacity: 0;
  transform: translateX(-20px);
}
.slide-fade-leave-to {
  opacity: 0;
  transform: translateX(-20px);
}
</style>
