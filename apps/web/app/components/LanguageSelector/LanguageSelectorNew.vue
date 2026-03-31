<template>
  <div class="relative group">
    <!-- Триггер -->
    <button
      type="button"
      class="inline-flex items-center justify-center px-2 py-2 gap-2 bg-white rounded-md
             text-primary-700 hover:bg-slate-200 active:bg-slate-300"
    >
      <div class="w-8" v-html="flagList[currentLocale]" />
    </button>

    <!-- Выпадающее меню -->
    <div
  class="absolute right-0 top-full mt-2 bg-white border border-slate-200 shadow-lg rounded-md
         opacity-0 invisible group-hover:opacity-100 group-hover:visible transition-all duration-150
         z-50 min-w-[160px]"
>

      <ul class="py-2">
        <li
          v-for="localeCode in filteredLocaleCodes"
          :key="localeCode"
          @click="selectLocale(localeCode)"
          class="flex items-center gap-2 px-3 py-2 cursor-pointer hover:bg-slate-100"
        >
          <div class="w-6" v-html="flagList[localeCode]" />
          <span>{{ t(`lang.${localeCode}`) }}</span>

          <SfIconCheck
            v-if="localeCode === currentLocale"
            class="text-green-500 ml-auto"
          />
        </li>
      </ul>
    </div>
  </div>
</template>

<script setup lang="ts">
import { SfIconCheck } from '@storefront-ui/vue'
import { flagImports } from './flags'

const router = useRouter()
const { locale, localeCodes, t, loadLocaleMessages } = useI18n()
const currentLocale = locale

const { createLocalePath } = useLocalization()
const { getCategoryTree } = useCategoryTree()

const config = useRuntimeConfig()

type LocaleCode = typeof localeCodes.value[number]

const activeLanguages = (config.public.activeLanguages as string)
  .split(',')
  .map((lang: string) => lang.trim())

const filteredLocaleCodes = computed<LocaleCode[]>(() =>
  localeCodes.value.filter((code) => activeLanguages.includes(code)) as LocaleCode[]
)

const flagList: Record<string, string> = {}
filteredLocaleCodes.value.forEach((code) => {
  if (flagImports[code]) flagList[code] = flagImports[code]
})

async function selectLocale(newLocale: LocaleCode) {
  const newPath = createLocalePath(router.currentRoute.value.fullPath, newLocale)

  if (newPath) {
    router.push(newPath)
  }

  // 🔥 ВАЖНО: вручную загружаем lazy‑локаль
  await loadLocaleMessages(newLocale)

  // 🔥 Теперь меняем язык
  locale.value = newLocale

  // Обновляем категории
  getCategoryTree()
}
</script>
