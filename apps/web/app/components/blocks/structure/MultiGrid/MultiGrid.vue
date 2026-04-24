<template>
  <!-- Внешний контейнер -->
  <section class="w-full bg-white py-4">
    <div class="max-w-screen-2xl mx-auto px-4 md:px-0">

      <!-- Фиксированная сетка 20% / 80% -->
      <div
        class="grid grid-cols-1 md:grid-cols-[23%_77%] gap-5 items-start"
        data-testid="multi-grid-structure"
      >

        <!-- SIDEBAR (первая колонка) -->
        <div
          v-if="columns[0]"
          class="relative"
          data-testid="multi-grid-column"
        >
          <div
            v-for="row in columns[0]"
            :key="row.meta.uuid"
            class="relative group"
            :data-uuid="row.meta.uuid"
          >
            <!-- Контент блока -->
            <slot
              name="content"
              :content-block="row"
              :column-length="columns[0].length"
              :is-row-hovered="false"
            />
          </div>
        </div>

        <!-- CONTENT (вторая колонка) -->
        <div
          v-if="columns[1]"
          class="relative"
          data-testid="multi-grid-column"
        >
          <div
            v-for="row in columns[1]"
            :key="row.meta.uuid"
            class="relative group"
            :data-uuid="row.meta.uuid"
          >
            <!-- Контент блока -->
            <slot
              name="content"
              :content-block="row"
              :column-length="columns[1].length"
              :is-row-hovered="false"
            />
          </div>
        </div>

      </div>
    </div>
  </section>
</template>

<script setup lang="ts">
import type { Block } from '@plentymarkets/shop-api';
import type { MultiGridProps } from '~/components/blocks/structure/MultiGrid/types';

const { content } = defineProps<MultiGridProps>();

/**
 * Мы полностью отключаем динамическую логику ShopBuilder.
 * Просто раскладываем блоки по parent_slot:
 * 0 → sidebar
 * 1 → content
 */
const columns = computed<Block[][]>(() => {
  const col0: Block[] = [];
  const col1: Block[] = [];

  content.forEach((block) => {
    if (block.parent_slot === 0) col0.push(block);
    else col1.push(block);
  });

  return [col0, col1];
});
</script>
