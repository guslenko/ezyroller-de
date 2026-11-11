<template>
  <main data-testid="checkout-layout">
    <NarrowContainer :class="isCartOrCheckout ? 'px-4 mb-20' : 'px-4 @md:px-0 mb-20'">
      <div :class="isCartOrCheckout ? 'flex items-center justify-between pt-6 mb-2' : 'flex items-center justify-between mt-8 mb-10 @md:px-0'">
        <h1 :class="isCartOrCheckout ? 'font-bold text-3xl' : 'font-bold typography-headline-3 @md:typography-headline-2 @md:pl-4'">{{ heading }}</h1>
        <UiButton
          class="hover:!bg-gray-300 active:!bg-gray-300"
          :class="[viewport.isLessThan('lg') ? 'flex @lg:hidden whitespace-nowrap' : 'hidden @lg:flex']"
          :size="viewport.isLessThan('md') ? 'sm' : 'base'"
          :aria-label="t('common.navigation.previousAriaLabel')"
          data-testid="checkout-back-button"
          variant="tertiary"
          @click="goToPreviousRoute()"
        >
          <template #prefix>
            <SfIconArrowBack />
          </template>
          {{ viewport.isLessThan('md') ? backLabelMobile : backLabelDesktop }}
        </UiButton>
      </div>
      <span v-if="isLoading && !cart" class="!flex justify-center my-40 h-24">
        <SfLoaderCircular size="2xl" />
      </span>
      <slot v-else />
    </NarrowContainer>
  </main>
</template>

<script setup lang="ts">
import { SfIconArrowBack, SfLoaderCircular } from '@storefront-ui/vue';
import type { CheckoutLayoutProps } from '~/layouts/types';

const { data: cart, loading: isLoading } = useCart();
const { setInitialData } = useInitialSetup();
const { goToPreviousRoute } = useBrowserNavigation();
const viewport = useViewport();
const route = useRoute();
const localePath = useLocalizedPath();
const isCartOrCheckout = computed(() =>
  [paths.cart, paths.checkout].some((path) => route.path.replace(/\/$/, '') === localePath(path).replace(/\/$/, '')),
);
const { heading, backLabelMobile, backLabelDesktop } = defineProps<CheckoutLayoutProps>();

onNuxtReady(async () => await setInitialData());
</script>
