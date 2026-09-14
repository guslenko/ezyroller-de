<template>
  <div>
    <header class="relative z-sticky w-full border-b border-neutral-200 bg-white shadow-md">
      <div class="flex w-full items-center px-4 py-3 @md:px-10 @md:py-5">
        <NuxtLink
          :to="localePath(paths.home)"
          :aria-label="t('common.actions.goToHomepage')"
          class="flex w-full shrink-0 items-center text-black @lg:w-48 focus-visible:rounded-sm focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2"
        >
          <UiLogo />
        </NuxtLink>
      </div>
    </header>

    <main>
      <slot />
    </main>

    <NuxtLazyHydrate when-idle>
      <Cookiebar />
      <PreviewMode />
    </NuxtLazyHydrate>
    <BlocksFooter />
  </div>
</template>

<script setup lang="ts">
const localePath = useLocalizedPath();

usePageTitle();
useStructuredData().setLogoMeta();
</script>
