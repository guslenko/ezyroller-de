<template>
  <footer v-if="resolvedContent" class="w-full bg-zinc-100" data-testid="footer">


  <div class="w-full bg-white border-t border-zinc-300 py-0">
  <div class="max-w-screen-2xl mx-auto w-full px-4">
    <div class="grid grid-cols-1 md:grid-cols-3 w-full">

      <!-- BLOCK 1 -->
      <div
        class="flex items-center gap-3 py-4
               border-b border-zinc-300 md:border-none"
      >
        <img src="/images/icon9.webp" alt="" class="h-14 w-14 mr-4" />
        <div class="flex flex-col leading-tight text-left font-normal text-xl">
          <span class="font-bold">{{ $t("biz35") }}</span>
          <span class="font-light text-base">{{ $t("biz36") }}</span>
        </div>
      </div>

      <!-- BLOCK 2 -->
      <div
        class="flex items-center gap-3 py-2
               border-b border-zinc-300 md:border-none"
      >
        <img src="/images/icon7.webp" alt="" class="h-14 w-14 mr-4" />
        <div class="flex flex-col leading-tight text-left font-normal text-xl">
          <span class="font-bold">{{ $t("biz37") }}</span>
          <span class="font-light text-base">{{ $t("biz38") }}</span>
        </div>
      </div>

      <!-- BLOCK 3 -->
      <div
        class="flex items-center gap-3 py-2
               "
      >
        <img src="/images/icon8.webp" alt="" class="h-14 w-14 mr-4" />
        <div class="flex flex-col leading-tight text-left font-normal text-xl">
          <span class="font-bold">{{ $t("biz39") }}</span>
          <span class="font-light text-base">{{ $t("biz40") }}</span>
        </div>
      </div>

    </div>
  </div>
</div>



    <!-- TOP STRIP: PAYMENT + SHIPPING ICONS -->
 


    <!-- MAIN FOOTER -->
    <section class="w-full py-10 px-4 bg-white border-t border-zinc-300">
      <div class="max-w-screen-2xl mx-auto grid grid-cols-1 md:grid-cols-4 gap-10">

        <!-- COLUMN 1: BRAND (2 columns wide) -->
        <div class="md:col-span-2">
          <NuxtLink :to="localePath('/')" class="inline-block">
            <img
              src="https://cdn02.plentymarkets.com/4in9ikd3ipve/frontend/ezyroller/img/ERLOGONEW.svg"
              alt="EzyRoller"
              class="h-[100px] w-auto mb-4"
            />
          </NuxtLink>

          <div class="text-xl font-bold mb-2 text-black">
            {{ $t("textWidgetTitle") }}
          </div>

          <p class="text-black text-base leading-relaxed font-light mb-4">
            {{ $t("textWidgetDesc") }}
            <NuxtLink :to="localePath('/kontakt')" class="underline hover:text-black">{{ $t("textWidgetLink") }}</NuxtLink>.
          </p>

          <!-- SOCIAL ICONS -->
          <div class="flex items-center gap-4 mt-4">

            <!-- Facebook -->
            <NuxtLink :to="'https://www.facebook.com/ezyroller.eu'" target="_blank">
              <svg class="h-10 w-10 text-neutral-700 hover:text-black" fill="currentColor" viewBox="0 0 24 24">
                <path d="M22 12a10 10 0 10-11.5 9.9v-7h-2v-3h2v-2.3c0-2 1.2-3.1 3-3.1.9 0 1.8.1 1.8.1v2h-1c-1 0-1.3.6-1.3 1.2V12h2.3l-.4 3h-1.9v7A10 10 0 0022 12z"/>
              </svg>
            </NuxtLink>

            <!-- Instagram -->
            <NuxtLink :to="'https://www.instagram.com/ezyroller.de'" target="_blank">
              <svg class="h-10 w-10 text-neutral-700 hover:text-black" fill="currentColor" viewBox="0 0 24 24">
                <path d="M7 2C4.24 2 2 4.24 2 7v10c0 2.76 2.24 5 5 5h10c2.76 0 5-2.24 5-5V7c0-2.76-2.24-5-5-5H7zm10 2c1.66 0 3 1.34 3 3v10c0 1.66-1.34 3-3 3H7c-1.66 0-3-1.34-3-3V7c0-1.66 1.34-3 3-3h10zm-5 3a5 5 0 100 10 5 5 0 000-10zm0 2a3 3 0 110 6 3 3 0 010-6zm4.5-.75a1.25 1.25 0 11-2.5 0 1.25 1.25 0 012.5 0z"/>
              </svg>
            </NuxtLink>

            <!-- TikTok -->
            <NuxtLink :to="'https://www.tiktok.com/@ezyroller.de'" target="_blank">
              <svg
                class="h-10 w-10 text-neutral-700 hover:text-black"
                fill="currentColor"
                viewBox="0 0 24 24"
              >
                <path d="M12.75 2c.41 2.07 1.88 3.67 3.75 4.03v3.02a7.1 7.1 0 01-3.75-1.1v6.17a5.88 5.88 0 11-5.88-5.88c.41 0 .81.05 1.19.14v3.07a2.81 2.81 0 102.81 2.81V2h1.88z"/>
              </svg>
            </NuxtLink>

          </div>
        </div>
        <!-- COLUMN 2: CATEGORIES -->
        <div>
          <h3 class="text-lg font-semibold mb-4">EzyRoller</h3>
          <ul class="space-y-2">
            <li>
              <SfLink :tag="NuxtLink" :to="localePath('/find-ezyroller')" class="text-neutral-700 hover:text-black hover:underline">
                {{ $t("videoCta") }}
              </SfLink>
            </li>
            <li>
              <SfLink
              :tag="NuxtLink"
              :to="localePath($t('textWidgetLI1'))"
              class="text-neutral-700 hover:text-black hover:underline"
            >
              {{ $t("textWidgetL10") }}
              </SfLink>
            </li>
            <li>
              <SfLink
              :tag="NuxtLink"
              :to="localePath($t('textWidgetLI2'))"
              class="text-neutral-700 hover:text-black hover:underline"
            >
                EzyRoller Originals
              </SfLink>
            </li>
            <li>
              <SfLink
              :tag="NuxtLink"
              :to="localePath($t('textWidgetLI3'))"
              class="text-neutral-700 hover:text-black hover:underline"
            >
                EzyRoller X-Series
              </SfLink>
            </li>
            <li>
              <SfLink
              :tag="NuxtLink"
              :to="localePath($t('textWidgetLI6'))"
              class="text-neutral-700 hover:text-black hover:underline"
            >
                {{ $t("textWidgetL11") }}
              </SfLink>
            </li>
            <li>
              <SfLink
              :tag="NuxtLink"
              :to="localePath($t('textWidgetLI5'))"
              class="text-neutral-700 hover:text-black hover:underline"
            >
                {{ $t("textWidgetL12") }}
              </SfLink>
            </li>
            <li>
              <SfLink
              :tag="NuxtLink"
              :to="localePath($t('textWidgetLI4'))"
              class="text-neutral-700 hover:text-black hover:underline"
            >
                {{ $t("textWidgetL13") }}
              </SfLink>
            </li>
            <li>
              <SfLink :tag="NuxtLink" :to="localePath('/business')" class="text-neutral-700 hover:text-black hover:underline">
                {{ $t("textWidgetL14") }}
              </SfLink>
            </li>
            <li>
              <SfLink :tag="NuxtLink" :to="localePath('/our-story')" class="text-neutral-700 hover:text-black hover:underline">
                {{ $t("textWidgetL15") }}
              </SfLink>
            </li>
          </ul>
        </div>
        <!-- COLUMN 3: SHOP LINKS -->
        <div>
          <h3 class="text-lg font-semibold mb-4">{{ $t("textWidgetL16") }}</h3>

          <ul class="space-y-2">
            <li>
              <SfLink :tag="NuxtLink" :to="localePath('/ezyroller-care')" class="text-neutral-700 hover:text-black hover:underline">
                {{ $t("textWidgetL8") }} & {{ $t("textWidgetL9") }}
              </SfLink>
            </li>
            <li>
              <SfLink :tag="NuxtLink" :to="localePath('/cancellation-rights')" class="text-neutral-700 hover:text-black hover:underline">
                {{ $t("textWidgetL2") }}
              </SfLink>
            </li>
            <li>
              <SfLink :tag="NuxtLink" :to="localePath('/legal-disclosure')" class="text-neutral-700 hover:text-black hover:underline">
                {{ $t("textWidgetL3") }}
              </SfLink>
            </li>
            <li>
              <SfLink :tag="NuxtLink" :to="localePath('/privacy-policy')" class="text-neutral-700 hover:text-black hover:underline">
                {{ $t("textWidgetL4") }}
              </SfLink>
            </li>
            <li>
              <SfLink :tag="NuxtLink" :to="localePath('/terms-and-conditions')" class="text-neutral-700 hover:text-black hover:underline">
                {{ $t("textWidgetL5") }}
              </SfLink>
            </li>
            <li>
              <SfLink :tag="NuxtLink" :to="localePath('/faq')" class="text-neutral-700 hover:text-black hover:underline">
                {{ $t("textWidgetL6") }}
              </SfLink>
            </li>
            <li>
              <SfLink :tag="NuxtLink" :to="localePath('/kontakt')" class="text-neutral-700 hover:text-black hover:underline">
                {{ $t("textWidgetL7") }}
              </SfLink>
            </li>
          </ul>
        </div>

      </div>
    </section>

       <div class="w-full bg-white border-t border-zinc-300 py-4">
  <div
    class="max-w-screen-2xl mx-auto flex flex-wrap justify-center items-center 
           gap-6 sm:gap-8 px-4"
  >

    <img
      src="/images/dhl.webp"
      alt="DHL"
      class="h-5 sm:h-8 w-auto object-contain"
      width="183"
      height="40"
    />

    <img
      src="/images/paypal.webp"
      alt="PayPal"
      class="h-5 sm:h-8 w-auto object-contain"
      width="114"
      height="40"
    />

    <img
      src="/images/apay.webp"
      alt="Apple Pay"
      class="h-5 sm:h-8 w-auto object-contain"
      width="91"
      height="40"
    />

    <img
      src="/images/gpay.webp"
      alt="Google Pay"
      class="h-5 sm:h-8 w-auto object-contain"
      width="94"
      height="40"
    />

    <img
      src="/images/visa.webp"
      alt="Visa"
      class="h-5 sm:h-8 w-auto object-contain"
      width="105"
      height="40"
    />

    <img
      src="/images/mastercard.webp"
      alt="Mastercard"
      class="h-5 sm:h-8 w-auto object-contain"
      width="50"
      height="40"
    />

    <img
      src="/images/sepa.webp"
      alt="SEPA"
      class="h-5 sm:h-8 w-auto object-contain"
      width="94"
      height="40"
    />

    <img
      src="/images/klarna.webp"
      alt="Klarna"
      class="h-5 sm:h-8 w-auto object-contain"
      width="58"
      height="40"
    />

  </div>
</div>

    <!-- COPYRIGHT BAR -->
    <div class="text-black bg-white border-t border-zinc-300 text-center py-4 text-base font-light">
      © {{ new Date().getFullYear() }} EzyRoller — {{ $t("textWidgetCopy") }}
    </div>

  </footer>
</template>

<script setup lang="ts">
import { SfLink, SfListItem } from '@storefront-ui/vue';
import type { FooterProps, FooterContent, FooterColumn } from './types';

const props = defineProps<FooterProps>();
const route = useRoute();
const localePath = useLocalePath();
const NuxtLink = resolveComponent('NuxtLink');

const { getFooterBlock, mapFooterData, FOOTER_SWITCH_DEFINITIONS, createFooterBlock } =
  useBlockTemplates('index', 'immutable', useNuxtApp().$i18n.locale.value);

const shouldRender = computed(() => {
  if (route.meta.isBlockified) return !!props.content;
  return true;
});

const resolvedContent = computed(() => {
  if (!shouldRender.value) return null;
  const block = props.content ? createFooterBlock(props.content, props.meta) : getFooterBlock();
  return mapFooterData(block).content as FooterContent;
});

const getColumnSwitches = (column: FooterColumn) => {
  return FOOTER_SWITCH_DEFINITIONS.filter((switchConfig) => column[switchConfig.key] === true).map(
    (switchConfig) => ({
      id: `${switchConfig.key}-switch`,
      translationKey: t(switchConfig.shopTranslationKey),
      link: switchConfig.link,
      state: true,
    }),
  );
};
</script>
