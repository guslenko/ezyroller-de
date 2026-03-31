<template>
  <div
    class="border-none flex flex-col px-1"
    data-testid="product-card"
    :class="{ 'border border-gray-300': configuration?.cardBorders }"
  >
    <div class="relative overflow-hidden">
      <UiBadges
        :use-tags="useTagsOnCategoryPage"
        :class="['absolute', isFromWishlist ? 'mx-2' : 'm-2']"
        :product="product"
        :use-availability="isFromWishlist"
      />

      <SfLink
        :tag="NuxtLink"
        rel="preload"
        :to="productPath"
        :class="[{ 'size-48': isFromSlider }, 'relative group/image flex items-center justify-center']"
        as="image"
      >
      
        <duv class="bg-[#f3f3f3] rounded-xl border border-gray-200 shadow-md">
        <NuxtImg
          :src="imageUrl"
          :alt="imageAlt"
          :title="imageTitle ? imageTitle : null"
          :loading="lazy && !priority ? 'lazy' : 'eager'"
          :fetchpriority="priority ? 'high' : 'auto'"
          :preload="priority || false"
          :width="getWidth()"
          :height="getHeight()"
          :class="[
            'object-contain rounded-md aspect-square w-full transition-opacity duration-300 rounded-xl mix-blend-multiply brightness-[1] contrast-[1] p-4',
            effectiveHoverImageUrl ? 'group-hover/image:opacity-0' : '',
          ]"
          data-testid="image-slot"
        />
        </duv>
        <NuxtImg
          v-if="effectiveHoverImageUrl"
          :src="effectiveHoverImageUrl"
          :alt="imageAlt"
          :title="imageTitle ? imageTitle : null"
          :loading="lazy && !priority ? 'lazy' : 'eager'"
          fetchpriority="auto"
          :preload="false"
          :width="getWidth()"
          :height="getHeight()"
          class="absolute inset-0 opacity-0 transition-opacity duration-300 group-hover/image:opacity-100 object-contain rounded-md w-full h-full"
          data-testid="hover-image-slot"
        />
      </SfLink>

    </div>

    <div
      class="p-2 text-sm flex flex-col flex-auto"
      :class="{
        'items-center': configuration?.contentAlignment === 'center',
        'items-end': configuration?.contentAlignment === 'right',
        'items-start': configuration?.contentAlignment === 'left',
      }"
    >
      <template v-for="key in configuration?.fieldsOrder" :key="key">
        <template v-if="key === 'title' && configuration?.fields?.title">
  <div class="flex flex-col gap-2">



    <!-- Название товара (вариант или обычное) -->
    <SfLink
      :tag="NuxtLink"
      :to="productPath"
      class="no-underline font-medium leading-medium text-sm text-gray-700 hover:text-black"
      variant="secondary"
      data-testid="productcard-name"
    >
      {{ product.variation?.name || name }}
    </SfLink>

    
  </div>
</template>



        <template v-if="key === 'manufacturer' && configuration?.fields?.manufacturer">
          <div
            v-if="manufacturer"
            class="mb-1 typography-text-xs text-neutral-500"
            data-testid="productcard-manufacturer"
          >
            {{ manufacturer.externalName }}
          </div>
        </template>
        <template v-if="key === 'rating' && configuration?.fields?.rating">
          <div class="flex items-center pt-1 gap-1" :class="{ 'mb-2': !shortDescription }">
            <SfRating size="xs" :half-increment="true" :value="rating ?? 0" :max="5" />
          </div>
        </template>
        <template v-if="key === 'price' && configuration?.fields?.price">
          <LowestPrice :product="product" />
          <div v-if="showBasePrice" class="mb-2">
            <BasePriceInLine :base-price="basePrice" :unit-content="unitContent" :unit-name="unitName" />
          </div>
          <div class="flex flex-col items-start mt-auto pt-2 pb-1">
            <span class="block font-semibold text-lg" data-testid="product-card-vertical-price">
              <span v-if="showFromText" class="mr-1">{{ t('account.ordersAndReturns.orderDetails.priceFrom') }}</span>
              <span>{{ format(price) }}</span>
              <span>{{ t('asterisk') }}</span>
            </span>
            <span
              v-if="crossedPrice && differentPrices(price, crossedPrice)"
              class="text-sm text-gray-400 flex font-normal line-through"
            >
              UVP {{ format(crossedPrice) }}
            </span>
          </div>
        </template>
        <template v-if="key === 'addToCart' && configuration?.fields?.addToCart">
          <UiButton
            v-if="canAddFromCategory"
            size="sm"
            class="min-w-[80px] w-fit text-lg py-2 px-5"
            data-testid="add-to-basket-short"
            :disabled="loading"
            :variant="configuration?.addToCartStyle || 'primary'"
            @click="addWithLoader(Number(productGetters.getId(product)))"
          >
            <template v-if="!loading" #prefix>
              <SfIconShoppingCart size="sm" />
            </template>
            <SfLoaderCircular v-if="loading" class="flex justify-center items-center" size="sm" />
            <span v-else>{{ t('addToCartShort') }}</span>
          </UiButton>
          <UiButton
            v-else
            :variant="configuration?.addToCartStyle || 'primary'"
            type="button"
            :tag="NuxtLink"
            :to="productPath"
            size="sm"
            class="w-fit"
          >
            <span>{{ t('showOptions') }}</span>
          </UiButton>
        </template>
      </template>
    </div>
  </div>
</template>

<script setup lang="ts">
import { productGetters, productImageGetters } from '@plentymarkets/shop-api';
import { SfLink, SfIconShoppingCart, SfLoaderCircular, SfRating, SfCounter } from '@storefront-ui/vue';
import type { ProductCardProps } from '~/components/ui/ProductCard/types';
import { defaults } from '~/composables';
import type { ItemGridContent } from '~/components/blocks/ItemGrid/types';

const props = withDefaults(defineProps<ProductCardProps>(), {
  configuration: () => ({
    cardBorders: true,
    contentAlignment: 'left',
    fields: {
      title: true,
      rating: true,
      previewText: false,
      price: true,
      addToCart: true,
      manufacturer: false,
    },
    fieldsOrder: ['title', 'manufacturer', 'rating', 'previewText', 'price', 'addToCart'],
    showWishlistButton: false,
    showSecondImageOnHover: false,
    addToCartStyle: 'primary',
    itemsPerRowDesktop: 4,
    itemsPerRowTablet: 3,
    itemsPerRowMobile: 1,
    showItemCount: true,
    itemCountPosition: 'center',
    fieldsDisabled: [],
    paginationPosition: 'bottom',
  }),
});

const product = computed(() => props.product);

const configuration = computed(() => props.configuration || ({} as ItemGridContent));

const { addModernImageExtension } = useModernImage();
const localePath = useLocalePath();
const { format } = usePriceFormatter();
const { t } = useI18n();
const { openQuickCheckout } = useQuickCheckout();
const { addToCart } = useCart();
const { price, crossedPrice } = useProductPrice(product.value);
const { send } = useNotification();
const loading = ref(false);
const config = useRuntimeConfig();
const useTagsOnCategoryPage = config.public.useTagsOnCategoryPage;

const name = computed(() => productGetters.getName(product.value) ?? '');
const manufacturer = computed(() => productGetters.getManufacturer(product.value));
const ratingCount = computed(() => productGetters.getTotalReviews(product.value));
const rating = computed(() => productGetters.getAverageRating(product.value, 'half'));
const shortDescription = computed(() => productGetters.getShortDescription(product.value) || '');
const canAddFromCategory = computed(() => productGetters.canBeAddedToCartFromCategoryPage(product.value));
const showFromText = computed(() => productGetters.showFromText(product.value));

const cover = computed(() => productGetters.getCoverImage(product.value));
const secondCover = computed(() => productGetters.getSecondCoverImage(product.value));
const firstImage = computed(() => productImageGetters.getFirstImage(product.value));

const imageUrl = computed(() => addModernImageExtension(cover.value));
const effectiveHoverImageUrl = computed(() => {
  if (!configuration.value?.showSecondImageOnHover) return '';
  const src = addModernImageExtension(secondCover.value);
  return src || '';
});

const imageAlt = computed(() => productImageGetters.getImageAlternate(firstImage.value) || name.value || '');
const imageTitle = computed(() => productImageGetters.getImageName(firstImage.value) || '');

const imageWidth = computed(() => productGetters.getImageWidth(product.value) || 600);
const imageHeight = computed(() => productGetters.getImageHeight(product.value) || 600);

const basePrice = computed(() => productGetters.getDefaultBasePrice(product.value));
const unitContent = computed(() => productGetters.getUnitContent(product.value));
const unitName = computed(() => productGetters.getUnitName(product.value));
const showBasePrice = computed(() => productGetters.showPricePerUnit(product.value));

const variationId = computed(() => productGetters.getVariationId(product.value));

const productPath = computed(() => {
  const basePath = `/${productGetters.getUrlPath(product.value)}_${productGetters.getItemId(product.value)}`;
  const shouldAppendVariation = variationId.value && productGetters.getSalableVariationCount(product.value) === 1;
  return localePath(shouldAppendVariation ? `${basePath}_${variationId.value}` : basePath);
});

const priority = ref((props.index || 0) < 5);
const lazy = ref(props.lazy || false);
const isFromWishlist = ref(props.isFromWishlist || false);
const isFromSlider = ref(props.isFromSlider || false);

const getWidth = () => {
  if (imageWidth.value && imageWidth.value > 0 && imageUrl.value.includes(defaults.IMAGE_LINK_SUFIX)) {
    return imageWidth.value;
  }
  return '';
};

const getHeight = () => {
  if (imageHeight.value && imageHeight.value > 0 && imageUrl.value.includes(defaults.IMAGE_LINK_SUFIX)) {
    return imageHeight.value;
  }
  return '';
};

const addWithLoader = async (productId: number, quickCheckout = true) => {
  loading.value = true;
  try {
    await addToCart({ productId, quantity: 1 });
    if (quickCheckout) {
      openQuickCheckout(product.value, 1);
    } else {
      send({ message: t('addedToCart'), type: 'positive' });
    }
  } finally {
    loading.value = false;
  }
};
const differentPrices = (price: number, crossedPrice: number) => {
  return crossedPrice ? Math.round(price * 100) / 100 !== Math.round(crossedPrice * 100) / 100 : false;
};

const NuxtLink = resolveComponent('NuxtLink');
</script>
