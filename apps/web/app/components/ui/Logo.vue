<template>
  <picture>
    <template v-if="imageExtension === 'svg'">
      <NuxtImg
        ref="logo"
        src="https://cdn02.plentymarkets.com/4in9ikd3ipve/frontend/ezyroller/img/ERLOGONEW.svg"
        :alt="`${storeName} logo`"
        class="w-100 py-1 px-1 mx-auto hover:scale-110 transition delay-150 duration-25 ease-in-out origin-bottom hover:-rotate-6"
        width="160"
        height="40"
        preload
      />
    </template>
    <template v-else>
      <img
        id="logo"
        ref="logo"
        src="https://cdn02.plentymarkets.com/4in9ikd3ipve/frontend/ezyroller/img/ERLOGONEW.svg"
        :alt="`${storeName} logo`"
        :width="imgWidth"
        :height="imgHeight"
        class="max-h-[100px] max-w-[200px]"
        preload
      />
    </template>
  </picture>
</template>

<script setup lang="ts">
const runtimeConfig = useRuntimeConfig();
const { getSetting: getHeaderLogo } = useSiteSettings('headerLogo');

const headerLogo = computed(() => getHeaderLogo());

const storeName = runtimeConfig.public.storename;

const imageExtension = computed(() => headerLogo.value.split('.').pop());
const logo = ref<HTMLImageElement | null>(null);
const imgWidth = ref<string>('');
const imgHeight = ref<string>('');
onMounted(() => {
  if (logo.value) {
    imgWidth.value = logo.value.clientWidth + '';
    imgHeight.value = logo.value.clientHeight + '';
  }
});
</script>
