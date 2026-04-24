<template>
  <div>
    <UiHeaderBlocks v-if="enableEditableHeader" />
    <UiHeader v-else />

    <NarrowContainer v-if="breadcrumbs?.length" class="p-4 md:px-0 md:py-2">
      <LazyUiBreadcrumbs :breadcrumbs="breadcrumbs" />
    </NarrowContainer>
    <main>
      <slot />
    </main>
    <UiNavbarBottom v-if="viewport.isLessThan('lg')" />
    <Cookiebar />
    <PreviewMode />
    <UiFooterBlocks />
    <QuickCheckout v-if="isOpen" :product="product" />
    <noscript>
  <iframe src="https://www.googletagmanager.com/ns.html?id=GTM-5SZG99B"
          height="0" width="0" style="display:none;visibility:hidden"></iframe>
  </noscript>
  </div>
</template>

<script setup lang="ts">
import type { DefaultLayoutProps } from '~/layouts/types';

defineProps<DefaultLayoutProps>();

const { enableEditableHeader } = useRuntimeConfig().public;
const { setLogoMeta } = useStructuredData();
const { isOpen, product } = useQuickCheckout();
const viewport = useViewport();
setLogoMeta();
</script>
