<template>
  <NarrowContainer class="mb-20 px-4" data-testid="wishlist-layout">
    <div v-if="withHeader && title" class="flex items-center justify-between mb-2">
      <h1 class="font-bold text-3xl">{{ title }}</h1>
      <UiButton variant="tertiary" class="hover:!bg-gray-300 active:!bg-gray-300" @click="$router.go(-1)">
        <template #prefix><SfIconArrowBack /></template>
        {{ t('common.actions.back') }}
      </UiButton>
    </div>

    <div
      v-if="products.length > 0"
      :class="{ 'pointer-events-none opacity-50': loading }"
      data-testid="wishlist-page-content"
    >
      <SfLoaderCircular v-if="loading" class="absolute left-0 right-0 top-1/3 mx-auto z-max" size="2xl" />
      <section
        class="grid grid-cols-1 @2xs:grid-cols-2 gap-4 @md:gap-6 @md:grid-cols-2 @lg:grid-cols-3 @3xl:grid-cols-4 mb-10 @md:mb-5"
        data-testid="wishlist-grid"
      >
        <NuxtLazyHydrate v-for="(product, index) in products" :key="productGetters.getId(product)" when-visible>
          <UiProductCard :product="product" is-from-wishlist :index="index">
            <template #wishlistButton>
              <WishlistButton discard square class="absolute top-0 right-0 mr-2 mb-2 bg-white" :product="product" />
            </template>
          </UiProductCard>
        </NuxtLazyHydrate>
      </section>
    </div>

    <div
      v-else
      class="flex items-center justify-center flex-col py-24"
      :class="{ 'pointer-events-none opacity-50': loading }"
      data-testid="wishlist-page-content"
    >
      <SfLoaderCircular v-if="loading" class="absolute z-max" size="2xl" />
      <h2 data-testid="empty-wishlist-text" class="typography-headline-3 font-bold">
        {{ t('cart.emptyWishlist') }}
      </h2>
    </div>
    <div v-if="products.length > 0" class="mt-4 mb-4 typography-text-xs flex gap-1">
      <span>{{ t('common.labels.asterisk') }}</span>
      <span v-if="showNetPrices">{{ t('product.priceExclVAT') }}</span>
      <span v-else>{{ t('product.priceInclVAT') }}</span>
      <i18n-t keypath="shipping.excludedLabel" scope="global">
        <template #shipping>
          <UiLink
            :href="localePath(paths.shipping)"
            target="_blank"
            class="focus:outline focus:outline-offset-2 focus:outline-2 outline-secondary-600 rounded"
          >
            {{ t('common.labels.delivery') }}
          </UiLink>
        </template>
      </i18n-t>
    </div>
  </NarrowContainer>
</template>

<script setup lang="ts">
import { productGetters } from '@plentymarkets/shop-api';
import { SfIconArrowBack, SfLoaderCircular } from '@storefront-ui/vue';
import type { WishlistPageContentProps } from '~/components/WishlistPageContent/types';
const { showNetPrices } = useCart();
const localePath = useLocalizedPath();

const { withHeader = true } = defineProps<WishlistPageContentProps>();
const { fetchWishlist, data: products, loading } = useWishlist();

fetchWishlist();
</script>
