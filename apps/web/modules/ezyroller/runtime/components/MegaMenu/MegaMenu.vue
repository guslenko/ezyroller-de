<template>
  <header class="relative w-full md:sticky shadow-md z-10 bg-white">
    <!-- TOP BAR -->
    <div class="flex items-center justify-between px-4 md:px-0 py-0.5 md:py-2 w-full max-w-screen-2xl mx-auto">
      <!-- MOBILE HEADER -->
      <div class="flex items-center justify-between w-full lg:hidden">
        <!-- BURGER -->
        <UiButton variant="tertiary" class="rounded-md !text-gray-800 hover:!bg-gray-300 active:!bg-gray-300" square @click="open()">
          <SfIconMenu class="w-6 h-6" />
        </UiButton>

        <!-- LOGO CENTERED -->
        <div class="flex-1 flex justify-center">
          <NuxtLink :to="localePath(paths.home)" aria-label="Homepage" class="flex items-center">
            <UiLogo class="[&_img]:w-28 [&_img]:h-auto" />
          </NuxtLink>
        </div>

        <!-- MOBILE RIGHT ICONS -->
        <div class="flex items-center gap-2">
          <slot name="mobile-actions" />
        </div>
      </div>

      <!-- DESKTOP HEADER -->
      <div class="hidden lg:flex items-center justify-between w-full">
        <NuxtLink :to="localePath(paths.home)" aria-label="Homepage" class="flex items-center">
          <UiLogo class="-mt-2 pt-2" />
        </NuxtLink>

        <div class="flex-1 min-w-0 flex justify-center px-5">
          <slot name="search" />
        </div>

        <div class="flex items-center gap-0">
          <slot name="actions" />
        </div>
      </div>
    </div>

    <!-- DESKTOP MENU -->
    <nav v-if="viewport.isGreaterOrEquals('lg')" class="bg-white border-b border-t border-gray-200 border-t-gray-300">
      <ErMenu />
    </nav>

    <!-- MOBILE MENU -->
    <transition name="slide-fade">
      <SfDrawer
        v-model="isOpen"
        placement="left"
        class="bg-white overflow-y-auto z-[2000] w-[90vw] max-w-none shadow-2xl"
      >
        <nav class="pb-24">
          <!-- TOP BAR -->
          <div class="flex items-center justify-between p-4">
            <img
              src="https://cdn02.plentymarkets.com/4in9ikd3ipve/frontend/ezyroller/img/ERLOGONEW.svg"
              alt="Logo"
              class="max-h-[50px] max-w-[200px]"
            />

            <UiButton
              variant="tertiary"
              square
              aria-label="Close"
              class="hover:!bg-gray-300 active:!bg-gray-300 text-gray-800"
              @click="close()"
            >
              <SfIconClose class="text-gray-800" />
            </UiButton>
          </div>

          <!-- TITLE -->
          <div class="px-5 py-2 bg-gray-300 border-t border-gray-800">
            <span class="text-base font-semibold mb-4 p-0">{{ t('menu1') }}</span>
          </div>

          <!-- CATEGORY GRID -->
          <div class="p-4 grid grid-cols-2 gap-4">
            <!-- CARD TEMPLATE -->
            <NuxtLink
              :to="localePath(t('bizl0'))"
              class="group flex flex-col items-center justify-center gap-2 rounded-lg border border-gray-300 bg-white p-4 pb-2 no-underline hover:bg-gray-300 active:bg-gray-300"
              @click="close()"
            >
              <div
                class="aspect-[4/3] overflow-hidden rounded-lg bg-neutral-50 transition-all duration-200 group-hover:scale-105"
              >
                <img
                  src="https://cdn02.plentymarkets.com/4in9ikd3ipve/frontend/www-ezyroller-de/mer1.webp"
                  class="w-full h-full object-cover"
                />
              </div>
              <div
                class="text-center text-sm font-medium text-gray-800"
              >
                CLASSIC
              </div>
            </NuxtLink>

            <NuxtLink
              :to="localePath(t('bizl2'))"
              class="group flex flex-col items-center justify-center gap-2 rounded-lg border border-gray-300 bg-white p-4 pb-2 no-underline hover:bg-gray-300 active:bg-gray-300"
              @click="close()"
            >
              <div
                class="aspect-[4/3] overflow-hidden rounded-lg bg-neutral-50 transition-all duration-200 group-hover:scale-105"
              >
                <img
                  src="https://cdn02.plentymarkets.com/4in9ikd3ipve/frontend/www-ezyroller-de/mer2.webp"
                  class="w-full h-full object-cover"
                />
              </div>
              <div
                class="text-center text-sm font-medium text-gray-800"
              >
                CLASSIC X
              </div>
            </NuxtLink>

            <NuxtLink
              :to="localePath(t('bizl4'))"
              class="group flex flex-col items-center justify-center gap-2 rounded-lg border border-gray-300 bg-white p-4 pb-2 no-underline hover:bg-gray-300 active:bg-gray-300"
              @click="close()"
            >
              <div
                class="aspect-[4/3] overflow-hidden rounded-lg bg-neutral-50 transition-all duration-200 group-hover:scale-105"
              >
                <img
                  src="https://cdn02.plentymarkets.com/4in9ikd3ipve/frontend/www-ezyroller-de/mer3.webp"
                  class="w-full h-full object-cover"
                />
              </div>
              <div
                class="text-center text-sm font-medium text-gray-800"
              >
                DRIFTER X
              </div>
            </NuxtLink>

            <NuxtLink
              :to="localePath(t('bizl6'))"
              class="group flex flex-col items-center justify-center gap-2 rounded-lg border border-gray-300 bg-white p-4 pb-2 no-underline hover:bg-gray-300 active:bg-gray-300"
              @click="close()"
            >
              <div
                class="aspect-[4/3] overflow-hidden rounded-lg bg-neutral-50 transition-all duration-200 group-hover:scale-105"
              >
                <img
                  src="https://cdn02.plentymarkets.com/4in9ikd3ipve/frontend/www-ezyroller-de/mer4.webp"
                  class="w-full h-full object-cover"
                />
              </div>
              <div
                class="text-center text-sm font-medium text-gray-800"
              >
                DRIFTER X PRO
              </div>
            </NuxtLink>

            <NuxtLink
              :to="localePath(t('bizl1'))"
              class="group flex flex-col items-center justify-center gap-2 rounded-lg border border-gray-300 bg-white p-4 pb-2 no-underline hover:bg-gray-300 active:bg-gray-300"
              @click="close()"
            >
              <div
                class="aspect-[4/3] overflow-hidden rounded-lg bg-neutral-50 transition-all duration-200 group-hover:scale-105"
              >
                <img
                  src="https://cdn02.plentymarkets.com/4in9ikd3ipve/frontend/www-ezyroller-de/mer5.webp"
                  class="w-full h-full object-cover"
                />
              </div>
              <div
                class="text-center text-sm font-medium text-gray-800"
              >
                MINI
              </div>
            </NuxtLink>

            <NuxtLink
              :to="localePath(t('bizl5'))"
              class="group flex flex-col items-center justify-center gap-2 rounded-lg border border-gray-300 bg-white p-4 pb-2 no-underline hover:bg-gray-300 active:bg-gray-300"
              @click="close()"
            >
              <div
                class="aspect-[4/3] overflow-hidden rounded-lg bg-neutral-50 transition-all duration-200 group-hover:scale-105"
              >
                <img
                  src="https://cdn02.plentymarkets.com/4in9ikd3ipve/frontend/www-ezyroller-de/mer6.webp"
                  class="w-full h-full object-cover"
                />
              </div>
              <div
                class="text-center text-sm font-medium text-gray-800"
              >
                PRO X
              </div>
            </NuxtLink>

            <NuxtLink
              :to="localePath(t('bizl3'))"
              class="group flex flex-col items-center justify-center gap-2 rounded-lg border border-gray-300 bg-white p-4 pb-2 no-underline hover:bg-gray-300 active:bg-gray-300"
              @click="close()"
            >
              <div
                class="aspect-[4/3] overflow-hidden rounded-lg bg-neutral-50 transition-all duration-200 group-hover:scale-105"
              >
                <img
                  src="https://cdn02.plentymarkets.com/4in9ikd3ipve/frontend/www-ezyroller-de/mer7.webp"
                  class="w-full h-full object-cover"
                />
              </div>
              <div
                class="text-center text-sm font-medium text-gray-800"
              >
                SPINNER X
              </div>
            </NuxtLink>
          </div>

          <!-- TITLE -->
          <div class="px-5 py-2 bg-gray-300 border-t border-gray-800">
            <span class="text-base font-semibold mb-4 p-0">{{ t('menu2') }}</span>
          </div>

          <!-- CATEGORY GRID -->
          <div class="p-4 grid grid-cols-2 gap-4">
            <!-- CARD TEMPLATE -->
            <NuxtLink
              :to="localePath(t('bizl10'))"
              class="group flex flex-col items-center justify-center gap-2 rounded-lg border border-gray-300 bg-white p-4 pb-2 no-underline hover:bg-gray-300 active:bg-gray-300"
              @click="close()"
            >
              <div
                class="aspect-[4/3] overflow-hidden rounded-lg bg-neutral-50 transition-all duration-200 group-hover:scale-105"
              >
                <img
                  src="https://cdn02.plentymarkets.com/4in9ikd3ipve/frontend/www-ezyroller-de/mer8.webp"
                  class="w-full h-full object-cover"
                />
              </div>
              <div
                class="text-center text-sm font-medium text-gray-800"
              >
                {{ $t('menu21') }}
              </div>
            </NuxtLink>

            <NuxtLink
              :to="localePath(t('bizl11'))"
              class="group flex flex-col items-center justify-center gap-2 rounded-lg border border-gray-300 bg-white p-4 pb-2 no-underline hover:bg-gray-300 active:bg-gray-300"
              @click="close()"
            >
              <div
                class="aspect-[4/3] overflow-hidden rounded-lg bg-neutral-50 transition-all duration-200 group-hover:scale-105"
              >
                <img
                  src="https://cdn02.plentymarkets.com/4in9ikd3ipve/frontend/www-ezyroller-de/mer9.webp"
                  class="w-full h-full object-cover"
                />
              </div>
              <div
                class="text-center text-sm font-medium text-gray-800"
              >
                {{ $t('menu22') }}
              </div>
            </NuxtLink>

            <NuxtLink
              :to="localePath(t('textWidgetLI6'))"
              class="group flex flex-col items-center justify-center gap-2 rounded-lg border border-gray-300 bg-white p-4 pb-2 no-underline hover:bg-gray-300 active:bg-gray-300"
              @click="close()"
            >
              <div
                class="aspect-[4/3] overflow-hidden rounded-lg bg-neutral-50 transition-all duration-200 group-hover:scale-105"
              >
                <img
                  src="https://cdn02.plentymarkets.com/4in9ikd3ipve/frontend/www-ezyroller-de/mer11.webp"
                  class="w-full h-full object-cover"
                />
              </div>
              <div
                class="text-center text-sm font-medium text-gray-800"
              >
                {{ $t('menu24') }}
              </div>
            </NuxtLink>

            <NuxtLink
              :to="t('snowKitUrl')"
              class="group flex flex-col items-center justify-center gap-2 rounded-lg border border-gray-300 bg-white p-4 pb-2 no-underline hover:bg-gray-300 active:bg-gray-300"
              @click="close()"
            >
              <div
                class="aspect-[4/3] overflow-hidden rounded-lg bg-neutral-50 transition-all duration-200 group-hover:scale-105"
              >
                <img
                  src="https://cdn02.plentyone.com/4in9ikd3ipve/frontend/www-ezyroller-de/snowkit_menu.webp"
                  class="w-full h-full object-cover"
                />
              </div>
              <div
                class="text-center text-sm font-medium text-gray-800"
              >
                {{ $t('snowKitName') }}
              </div>
            </NuxtLink>

            <NuxtLink
              :to="localePath(t('bizl9'))"
              class="group flex flex-col items-center justify-center gap-2 rounded-lg border border-gray-300 bg-white p-4 pb-2 no-underline hover:bg-gray-300 active:bg-gray-300"
              @click="close()"
            >
              <div
                class="aspect-[4/3] overflow-hidden rounded-lg bg-neutral-50 transition-all duration-200 group-hover:scale-105"
              >
                <img
                  src="https://cdn02.plentymarkets.com/4in9ikd3ipve/frontend/www-ezyroller-de/mer12.webp"
                  class="w-full h-full object-cover"
                />
              </div>
              <div
                class="text-center text-sm font-medium text-gray-800"
              >
                {{ $t('menu25') }}
              </div>
            </NuxtLink>

            <NuxtLink
              :to="localePath(t('bizl8'))"
              class="group flex flex-col items-center justify-center gap-2 rounded-lg border border-gray-300 bg-white p-4 pb-2 no-underline hover:bg-gray-300 active:bg-gray-300"
              @click="close()"
            >
              <div
                class="aspect-[4/3] overflow-hidden rounded-lg bg-neutral-50 transition-all duration-200 group-hover:scale-105"
              >
                <img
                  src="https://cdn02.plentymarkets.com/4in9ikd3ipve/frontend/www-ezyroller-de/mer13.webp"
                  class="w-full h-full object-cover"
                />
              </div>
              <div
                class="text-center text-sm font-medium text-gray-800"
              >
                {{ $t('menu26') }}
              </div>
            </NuxtLink>

            <NuxtLink
              :to="localePath(t('textWidgetLI5'))"
              class="group flex flex-col items-center justify-center gap-2 rounded-lg border border-gray-300 bg-white p-4 pb-2 no-underline hover:bg-gray-300 active:bg-gray-300"
              @click="close()"
            >
              <div
                class="aspect-[4/3] overflow-hidden rounded-lg bg-neutral-50 transition-all duration-200 group-hover:scale-105"
              >
                <img
                  src="https://cdn02.plentymarkets.com/4in9ikd3ipve/frontend/www-ezyroller-de/mer14.webp"
                  class="w-full h-full object-cover"
                />
              </div>
              <div
                class="text-center text-sm font-medium text-gray-800"
              >
                {{ $t('menu27') }}
              </div>
            </NuxtLink>
          </div>

          <div class="px-5 py-2 bg-gray-300 border-t border-gray-800">
            <span class="text-base font-semibold p-0">{{ $t('textWidgetL16') }}</span>
          </div>

          <!-- CATEGORY GRID -->
          <div class="mb-10">
            <!-- CARD TEMPLATE -->

            <NuxtLink
              :to="localePath(t('textWidgetLI4'))"
              class="flex items-center justify-between w-full h-12 px-5 border-b border-gray-300 text-gray-800 font-normal text-sm hover:bg-neutral-100 transition-colors"
              @click="close()"
            >
              <span>{{ t('menu3') }}</span>

              <!-- стрелка -->
              <span class="text-neutral-400 text-3xl leading-none">›</span>
            </NuxtLink>

            <NuxtLink
              :href="localePath('/find-ezyroller')"
              class="flex items-center justify-between w-full h-12 px-5 border-b border-gray-300 text-gray-800 font-normal text-sm hover:bg-neutral-100 transition-colors"
              @click="close()"
            >
              <span>{{ $t('videoCta') }}</span>

              <!-- стрелка -->
              <span class="text-neutral-400 text-3xl leading-none">›</span>
            </NuxtLink>

            <NuxtLink
              :href="localePath('/business')"
              class="flex items-center justify-between w-full h-12 px-5 border-b border-gray-300 text-gray-800 font-normal text-sm hover:bg-neutral-100 transition-colors"
              @click="close()"
            >
              <span>{{ t('menu5') }}</span>

              <!-- стрелка -->
              <span class="text-neutral-400 text-3xl leading-none">›</span>
            </NuxtLink>

            <NuxtLink
              :href="localePath('/our-story')"
              class="flex items-center justify-between w-full h-12 px-5 border-b border-gray-300 text-gray-800 font-normal text-sm hover:bg-neutral-100 transition-colors"
              @click="close()"
            >
              <span>{{ t('menu4') }}</span>

              <!-- стрелка -->
              <span class="text-neutral-400 text-3xl leading-none">›</span>
            </NuxtLink>

            <NuxtLink
              :href="localePath('/ezyroller-care')"
              class="flex items-center justify-between w-full h-12 px-5 border-b border-gray-300 text-gray-800 font-normal text-sm hover:bg-neutral-100 transition-colors"
              @click="close()"
            >
              <span>{{ $t('textWidgetL8') }} & {{ $t('textWidgetL9') }}</span>

              <!-- стрелка -->
              <span class="text-neutral-400 text-3xl leading-none">›</span>
            </NuxtLink>

            <NuxtLink
              :href="localePath('/faq')"
              class="flex items-center justify-between w-full h-12 px-5 border-b border-gray-300 text-gray-800 font-normal text-sm hover:bg-neutral-100 transition-colors"
              @click="close()"
            >
              <span>{{ t('textWidgetL6') }}</span>

              <!-- стрелка -->
              <span class="text-neutral-400 text-3xl leading-none">›</span>
            </NuxtLink>

            <NuxtLink
              :href="localePath('/kontakt')"
              class="flex items-center justify-between w-full h-12 px-5 border-b border-gray-300 text-gray-800 font-normal text-sm hover:bg-neutral-100 transition-colors"
              @click="close()"
            >
              <span>{{ t('textWidgetL7') }}</span>

              <!-- стрелка -->
              <span class="text-neutral-400 text-3xl leading-none">›</span>
            </NuxtLink>
          </div>
          <div class="px-5 py-2 bg-gray-300 border-t border-gray-800">
            <span class="text-base font-semibold">{{ t('common.navigation.languageSelector') }}</span>
          </div>
          <div class="grid grid-cols-2 gap-3 p-4">
            <button
              v-for="language in availableLanguages"
              :key="language"
              type="button"
              class="flex items-center gap-3 rounded-lg border border-gray-300 p-3 text-sm font-medium text-gray-800"
              :class="language === currentLanguage ? 'bg-gray-300' : 'bg-white hover:bg-gray-300 active:bg-gray-300'"
              :aria-current="language === currentLanguage ? 'true' : undefined"
              @click="selectLanguage(language)"
            >
              <span class="w-7 shrink-0" v-html="flagImports[language]" />
              <span>{{ t(`lang.${language}`) }}</span>
            </button>
          </div>
        </nav>
      </SfDrawer>
    </transition>
  </header>
</template>

<script setup lang="ts">
import { SfIconClose, SfDrawer, SfIconMenu } from '@storefront-ui/vue';
import ErMenu from '#ezyroller/components/ui/ErMenu.vue';
import { flagImports } from '#ezyroller/components/LanguageSelector/flags';
import type { Locale } from '#i18n';

const viewport = useViewport();
const localePath = useLocalePath();
const paths = { home: '/' };

const { isOpen, open, close } = useStaticMenu();
const { getAvailableLocales, switchLocale } = useLocalization();
const { locale: currentLanguage } = useI18n();
const { getCategoryTree } = useCategoryTree();
const availableLanguages = getAvailableLocales();
const selectLanguage = async (language: Locale) => {
  close();
  await switchLocale(language);
  await getCategoryTree();
};
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
