<template>
  <NuxtLink
    :to="localePath(item.url)"
    class="group/card flex flex-col rounded-lg overflow-hidden ring-1 ring-neutral-200 transition-shadow duration-200 ease-out group-hover/card:shadow-card-hover hover:shadow-card-hover !no-underline"
    data-testid="search-suggestion-product"
  >
    <div class="aspect-[4/3] overflow-hidden">
      <NuxtImg
        :src="item.image"
        :alt="item.imageAlt"
        class="object-contain w-full h-full transition-transform duration-300 ease-out group-hover/card:scale-105"
      />
    </div>
    <div class="p-3 flex flex-col gap-1.5">
      <div
        class="text-sm font-medium leading-snug text-neutral-900 line-clamp-2 group-hover/card:underline underline-offset-2 decoration-1"
      >
        {{ item.label }}
      </div>
      <div class="flex items-baseline gap-2 tabular-nums">
        <span v-if="crossedPrice && hasDifferentPrices && crossedPrice > itemSearchAutocompleteGetters.getPrice(item)" class="rounded-md bg-red-600 px-1.5 py-0.5 text-xs font-semibold text-white">
          -{{ Math.round((1 - itemSearchAutocompleteGetters.getPrice(item) / crossedPrice) * 100) }}%
        </span>
        <span class="text-sm font-extrabold text-neutral-900">
          {{ format(itemSearchAutocompleteGetters.getPrice(item)) }}
        </span>
        <span
          v-if="crossedPrice && hasDifferentPrices && crossedPrice > itemSearchAutocompleteGetters.getPrice(item)"
          class="text-xs text-gray-500 line-through"
        >
          {{ format(crossedPrice) }}
        </span>
      </div>
    </div>
  </NuxtLink>
</template>

<script setup lang="ts">
import { itemSearchAutocompleteGetters } from '@plentymarkets/shop-api';
import type { SearchSuggestionProductProps } from '~/components/ui/Search/types';

const props = defineProps<SearchSuggestionProductProps>();
const { format } = usePriceFormatter();
const localePath = useLocalizedPath();

const crossedPrice = computed(() => itemSearchAutocompleteGetters.getCrossedPrice(props.item));
const hasDifferentPrices = computed(() => itemSearchAutocompleteGetters.hasDifferentPrices(props.item));
</script>
