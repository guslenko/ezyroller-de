<template>
  <div class="text-sm py-1">
    <span class="mr-2 text-black font-medium text-2xl" data-testid="price">
      <span>{{ format(price) }}</span>
      <span>{{ t('common.labels.asterisk') }} </span>
    </span>
    <span v-if="crossedPrice && differentPrices" class="text-base font-normal bg-amber-300 px-2 py-0 rounded-md text-neutral-500 line-through">
      {{ format(crossedPrice) }}
    </span>
  </div>
</template>

<script setup lang="ts">
import type { PriceProps } from '~/components/Price/types';

const props = defineProps<PriceProps>();

const { format } = usePriceFormatter();

const differentPrices = computed(() => {
  return props.crossedPrice
    ? Math.round(props.price * 100) / 100 !== Math.round(props.crossedPrice * 100) / 100
    : false;
});
</script>
