<script setup lang="ts">
import { useRoute } from 'vue-router'
import type { Block } from '@plentymarkets/shop-api'
import type { MultiGridProps } from '~/components/blocks/structure/MultiGrid/types'

const { content } = defineProps<MultiGridProps>()

// Определяем PDP по URL: Plenty всегда использует _itemId_variationId
const route = useRoute()
const isProductPage = computed(() => route.path.includes('_'))

// Разделяем блоки по parent_slot
const columns = computed<Block[][]>(() => {
  const col0: Block[] = []
  const col1: Block[] = []

  content.forEach((block) => {
    if (block.parent_slot === 0) col0.push(block)
    else col1.push(block)
  })

  return [col0, col1]
})
</script>

<template>
  <section class="max-w-screen-2xl mx-auto w-full bg-white py-4">
    <div class="px-4 md:px-0">

      <div
        :class="[
          'grid grid-cols-1 gap-5 items-start',
          isProductPage
            ? 'md:grid-cols-[50%_50%]'   // PDP
            : 'md:grid-cols-[23%_77%]'   // Category
        ]"
        data-testid="multi-grid-structure"
      >

        <!-- SIDEBAR -->
        <div v-if="columns[0]" class="relative" data-testid="multi-grid-column">
          <div
            v-for="row in columns[0]"
            :key="row.meta.uuid"
            class="relative group"
            :data-uuid="row.meta.uuid"
          >
            <slot
              name="content"
              :content-block="row"
              :column-length="columns[0].length"
              :is-row-hovered="false"
            />
          </div>
        </div>

        <!-- CONTENT -->
        <div v-if="columns[1]" class="relative" data-testid="multi-grid-column">
          <div
            v-for="row in columns[1]"
            :key="row.meta.uuid"
            class="relative group"
            :data-uuid="row.meta.uuid"
          >
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
