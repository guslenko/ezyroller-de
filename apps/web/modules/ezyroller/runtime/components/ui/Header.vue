<template>
  <MegaMenu :categories="categoryTree">
    <template #search>
      <div ref="desktopSearchRef" class="w-full">
        <Transition
          enter-active-class="transition duration-200 ease-out"
          enter-from-class="opacity-0 translate-x-4"
          leave-active-class="transition duration-150 ease-in"
          leave-to-class="opacity-0 translate-x-4"
        >
          <div v-if="isDesktopSearchOpen" id="desktop-search-panel" class="w-full">
            <UiSearch :close="closeDesktopSearch" />
          </div>
        </Transition>
      </div>
    </template>
    <!-- DESKTOP ICONS -->
    <template #actions>
      <div ref="desktopSearchButtonRef">
        <UiButton
          class="group header-icon !text-gray-800 hover:!bg-gray-300 active:!bg-gray-300 rounded-md p-0"
          variant="tertiary"
          square
          :aria-label="t('common.actions.search')"
          :aria-expanded="isDesktopSearchOpen"
          aria-controls="desktop-search-panel"
          @click="toggleDesktopSearch"
        >
          <SfIconSearch class="w-5 h-5" />
        </UiButton>
      </div>
      <!-- LANGUAGES -->
      <UiButton
        class="group header-icon !text-gray-800 hover:!bg-gray-300 active:!bg-gray-300 rounded-md p-0"
        variant="tertiary"
        square
        @click="toggleLanguageSelect()"
      >
        <SfIconLanguage class="w-5 h-5" />
      </UiButton>

      <!-- ACCOUNT (AUTH → /my-account, GUEST → /login) -->
      <UiButton
        class="group header-icon !text-gray-800 hover:!bg-gray-300 active:!bg-gray-300 rounded-md p-0"
        variant="tertiary"
        square
        :tag="NuxtLink"
        :to="isAuthorized ? localePath('/my-account') : localePath('/login')"
      >
        <SfIconPerson class="w-5 h-5" />
      </UiButton>

      <!-- WISHLIST -->
      <UiButton
        class="group relative header-icon !text-gray-800 hover:!bg-gray-300 active:!bg-gray-300 rounded-md p-0"
        :tag="NuxtLink"
        :to="localePath(paths.wishlist)"
        variant="tertiary"
        square
      >
        <SfIconFavorite class="w-5 h-5" />
        <span
          class="absolute top-0 right-0 bg-white text-primary-700 border border-primary-700 rounded-full text-xs px-1"
        >
          {{ wishlistItemIds.length }}
        </span>
      </UiButton>

      <!-- CART -->
      <UiButton
        class="group relative header-icon !text-gray-800 hover:!bg-gray-300 active:!bg-gray-300 rounded-md p-0"
        :tag="NuxtLink"
        :to="localePath(paths.cart)"
        variant="tertiary"
        square
      >
        <SfIconShoppingCart class="w-5 h-5" :class="{ 'animate-pulse-cart': cartItemsCount > 0 }" />
        <span
          class="absolute top-0 right-0 bg-white text-primary-700 border border-primary-700 rounded-full text-xs px-1"
        >
          {{ cartItemsCount }}
        </span>
      </UiButton>
    </template>

    <!-- MOBILE ICONS -->
    <template #mobile-actions>
      <UiButton variant="tertiary" class="rounded-md !text-gray-800 hover:!bg-gray-300 active:!bg-gray-300" square @click="searchModalOpen">
        <SfIconSearch class="w-6 h-6" />
      </UiButton>
    </template>
  </MegaMenu>

  <!-- LANGUAGE SELECTOR -->
  <LanguageSelector />

  <!-- MOBILE SEARCH MODAL -->
  <NuxtLazyHydrate v-if="viewport.isLessThan('lg')" when-idle>
    <SfModal
      v-model="isSearchModalOpen"
      class="w-full h-full z-50"
      tag="section"
      role="dialog"
      aria-labelledby="search-modal-title"
    >
      <header class="mb-4">
        <UiButton
          :aria-label="t('common.navigation.closeDialog')"
          square
          variant="tertiary"
          class="absolute right-4 top-2 hover:!bg-gray-300 active:!bg-gray-300"
          @click="searchModalClose"
        >
          <SfIconClose class="text-neutral-500" />
        </UiButton>

        <h3 id="search-modal-title" class="absolute left-6 top-4 font-bold typography-headline-4 mb-4">
          {{ t('common.actions.search') }}
        </h3>
      </header>

      <UiSearch :close="searchModalClose" />
    </SfModal>
  </NuxtLazyHydrate>
</template>

<script setup lang="ts">
import {
  SfIconClose,
  SfIconLanguage,
  SfIconPerson,
  SfIconSearch,
  SfIconShoppingCart,
  SfIconFavorite,
  SfModal,
  useDisclosure,
} from '@storefront-ui/vue';

import LanguageSelector from '#ezyroller/components/LanguageSelector/LanguageSelector.vue';
import { onClickOutside, onKeyStroke } from '@vueuse/core';
import { paths } from '~/utils/paths';

const NuxtLink = resolveComponent('NuxtLink');
const localePath = useLocalePath();
const viewport = useViewport();
const route = useRoute();
const desktopSearchRef = ref<HTMLElement | null>(null);
const desktopSearchButtonRef = ref<HTMLElement | null>(null);
const isDesktopSearchOpen = ref(false);
const closeDesktopSearch = () => {
  isDesktopSearchOpen.value = false;
  return true;
};
const toggleDesktopSearch = async () => {
  isDesktopSearchOpen.value = !isDesktopSearchOpen.value;
  if (isDesktopSearchOpen.value) {
    await nextTick();
    desktopSearchRef.value?.querySelector<HTMLInputElement>('#search-bar')?.focus();
  }
};
onClickOutside(desktopSearchRef, closeDesktopSearch, { ignore: [desktopSearchButtonRef] });
onKeyStroke('Escape', closeDesktopSearch);
watch(() => route.fullPath, closeDesktopSearch);

const { data: cart } = useCart();
const { wishlistItemIds } = useWishlist();
const { data: categoryTree, getCategoryTree } = useCategoryTree();
const { isAuthorized } = useCustomer();

const cartItemsCount = ref(0);

const { toggle: toggleLanguageSelect } = useLocalization();
const { open: searchModalOpen, isOpen: isSearchModalOpen, close: searchModalClose } = useDisclosure();

onNuxtReady(async () => {
  if (categoryTree.value.length === 0) await getCategoryTree();
  cartItemsCount.value = cart.value?.items?.reduce((p, { quantity }) => p + quantity, 0) ?? 0;
});

watch(
  () => cart.value?.items,
  (items) => {
    cartItemsCount.value = items?.reduce((p, { quantity }) => p + quantity, 0) ?? 0;
  },
);
</script>

<style scoped>
.header-icon:hover,
.header-icon:active,
.header-icon[aria-expanded="true"] {
  background-color: #d1d5db !important;
  color: #1f2937 !important;
}

@keyframes cartPulse {
  0% {
    transform: scale(1);
  }
  50% {
    transform: scale(1.18);
  }
  100% {
    transform: scale(1);
  }
}

.animate-pulse-cart {
  animation: cartPulse 0.8s ease-in-out infinite;
}
</style>
