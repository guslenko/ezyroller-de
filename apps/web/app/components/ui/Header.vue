<template>
  <MegaMenu :categories="categoryTree">

    <!-- DESKTOP SEARCH -->
    <template #search>
      <UiSearch class="hidden md:block flex-1" />
    </template>

    <!-- DESKTOP ICONS -->
    <template #actions>
      <!-- LANGUAGES -->
      <UiButton
        class="group hover:bg-neutral-200 rounded-md p-0"
        variant="tertiary"
        square
        @click="toggleLanguageSelect()"
      >
        <SfIconLanguage class="w-5 h-5" />
      </UiButton>

      <!-- ACCOUNT (AUTH → /my-account, GUEST → /login) -->
      <UiButton
        class="group hover:bg-neutral-200 rounded-md p-0"
        variant="tertiary"
        square
        :tag="NuxtLink"
        :to="isAuthorized ? localePath('/my-account') : localePath('/login')"
      >
        <SfIconPerson class="w-5 h-5" />
      </UiButton>

      <!-- WISHLIST -->
      <UiButton
        class="group relative hover:bg-neutral-200 rounded-md p-0"
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
        class="group relative hover:bg-neutral-200 rounded-md p-0"
        :tag="NuxtLink"
        :to="localePath(paths.cart)"
        variant="tertiary"
        square
      >
        <SfIconShoppingCart
          class="w-5 h-5"
          :class="{ 'animate-pulse-cart': cartItemsCount > 0 }"
        />
        <span
          class="absolute top-0 right-0 bg-white text-primary-700 border border-primary-700 rounded-full text-xs px-1"
        >
          {{ cartItemsCount }}
        </span>
      </UiButton>
    </template>

    <!-- MOBILE ICONS -->
    <template #mobile-actions>
      <UiButton
        variant="tertiary"
        class="rounded-md"
        square
        @click="toggleLanguageSelect()"
      >
        <SfIconLanguage class="w-8 h-8" />
      </UiButton>

      <UiButton
        variant="tertiary"
        class="rounded-md"
        square
        @click="searchModalOpen"
      >
        <SfIconSearch class="w-8 h-8" />
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
          class="absolute right-4 top-2"
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

import LanguageSelector from '~/components/LanguageSelector/LanguageSelector.vue';
import { paths } from '~/utils/paths';

const NuxtLink = resolveComponent('NuxtLink');
const localePath = useLocalePath();
const viewport = useViewport();

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
@keyframes cartPulse {
  0% { transform: scale(1); }
  50% { transform: scale(1.18); }
  100% { transform: scale(1); }
}

.animate-pulse-cart {
  animation: cartPulse 0.8s ease-in-out infinite;
}
</style>
