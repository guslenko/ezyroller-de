<template>
  <template v-for="key in renderOrder" :key="key">
    <template v-if="fields?.[key]">
      <h1
      v-if="key === 'name' && texts.name"
  id="category-headline"
  :class="
    'font-bold text-3xl font-black text-left'
  "
>
  {{
    slug === 'modelle/x-series' ? 'X-Series — Custom Title' :
    slug === 'modelle' ? 'EzyRoller Modelle' :
    slug === 'ersatzteile' ? 'Ersatzteile — Custom Title' :
    texts.name
  }}
</h1>

    <CategoryModelle v-if="slug === 'modelle'" />
    <CategoryModelle v-if="slug === 'ezyroller-modelos'" />

    <CategoryXSeries v-if="slug === 'modelle/x-series'" />

      <div
        v-else-if="key === 'description1' && texts.description1"
        data-testid="category-description-1"
        v-html="texts.description1"
      />

      <div
        v-else-if="key === 'description2' && texts.description2"
        data-testid="category-description-2"
        v-html="texts.description2"
      />

      <div
        v-else-if="key === 'shortDescription' && texts.shortDescription"
        data-testid="category-short-description"
        v-html="texts.shortDescription"
      />
    </template>
  </template>
</template>

<script setup lang="ts">
import { computed } from 'vue';
import type {
  CategoryDataFieldKey,
  CategoryDataFieldsVisibility,
  CategoryData,
} from '~/components/blocks/CategoryData/types';

const props = defineProps<{
  fields: CategoryDataFieldsVisibility;
  fieldsOrder: CategoryDataFieldKey[];
  texts: CategoryData;
}>();

const route = useRoute()

const slug = computed(() =>
  Array.isArray(route.params.slug)
    ? route.params.slug.join('/')
    : route.params.slug || ''
)


const renderOrder = computed<CategoryDataFieldKey[]>(() =>
  props.fieldsOrder?.length
    ? props.fieldsOrder
    : (['name', 'description1', 'description2', 'shortDescription'] as CategoryDataFieldKey[]),
);
</script>
