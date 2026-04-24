<template>
  <UiModal
    v-model="isOpen"
    tag="section"
    class="w-[90%] max-w-[420px] mx-auto p-5 rounded-xl bg-white shadow-xl"
  >
    <h2 class="text-center text-xl font-semibold mb-6">
      {{ t('common.navigation.languageSelector') }}
    </h2>

    <div class="grid grid-cols-2 md:grid-cols-3 gap-4">
      <button
        v-for="locale in filteredLocaleCodes"
        :key="locale"
        class="flex flex-col items-center justify-center p-4 border rounded-lg hover:bg-neutral-100 transition"
        @click="select(locale)"
      >
        <div class="w-8 h-8 mb-2" v-html="flagList[locale as string]" />
        <span
          class="text-sm font-medium"
          :class="locale === currentLocale ? 'text-primary-600' : 'text-neutral-700'"
        >
          {{ t(`lang.${locale}`) }}
        </span>

        <SfIconCheck
          v-if="locale === currentLocale"
          class="text-green-500 mt-1"
        />
      </button>
    </div>
  </UiModal>
</template>

<script setup lang="ts">
import { SfIconCheck } from '@storefront-ui/vue';
import { flagImports } from './flags';

const { isOpen, switchLocale } = useLocalization();
const { getCategoryTree } = useCategoryTree();
const { getAvailableLocales } = useLocalization();
const { locale: currentLocale, t } = useI18n();

const flagList: Record<string, string> = {};
const filteredLocaleCodes = ref<string[]>(getAvailableLocales());

filteredLocaleCodes.value.forEach((localeCode: string) => {
  if (flagImports[localeCode]) flagList[localeCode] = flagImports[localeCode];
});

async function select(localeCode: string) {
  await switchLocale(localeCode);
  isOpen.value = false;
  await getCategoryTree();
}

watch(
  () => currentLocale.value,
  async () => {
    await getCategoryTree();
  },
);
</script>
