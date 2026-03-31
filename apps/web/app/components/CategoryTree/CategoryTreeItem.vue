<template>
  <SfListItem
    v-if="name.length > 0"
    size="lg"
    class="hover:!bg-gray-200 active:bg-gray-200 font-medium"
    :class="['md:py-1.5', { 'bg-gray-200 hover:bg-gray-200 active:bg-gray-200 font-medium': selected }]"
    data-testid="category-tree-item"
  >
    <NuxtLink :to="localePath(href)">
      <span class="flex gap-2 items-center">
        <span class="text-base px-2 capitalize flex items-center" data-testid="list-item-menu-label">
          <slot />
          {{ name }}
        </span>
        <SfCounter v-if="Number(count) > -1" class="md:text-sm font-normal">{{ count }}</SfCounter>
      </span>
      <SfIconCheck v-if="selected" size="sm" class="text-primary-500" />
    </NuxtLink>
  </SfListItem>
</template>

<script setup lang="ts">
import { SfCounter, SfIconCheck, SfListItem } from '@storefront-ui/vue';
import type { CategoryTreeItemType } from '~/components/CategoryTree/types';

const localePath = useLocalePath();

defineProps<CategoryTreeItemType>();
</script>
