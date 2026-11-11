<template>
  <NuxtLink
    :to="getSearchPath(item.label)"
    class="group flex items-center gap-3 h-8 px-2.5 -mx-2.5 rounded text-sm !text-gray-800 !no-underline hover:!bg-gray-300 hover:!text-gray-900 transition-colors duration-150"
    data-testid="search-suggestion-item"
  >
    <SfIconSearch class="shrink-0 text-neutral-500" size="sm" aria-hidden="true" />
    <span class="truncate border-b border-gray-300 group-hover:border-gray-900">
      <template v-if="match">
        {{ parsedText.before }}
        <strong class="font-semibold text-inherit">
          {{ parsedText.match }}
        </strong>
        {{ parsedText.after }}
      </template>
      <template v-else>{{ item.label }}</template>
    </span>
    <span class="ml-auto shrink-0 text-xs !text-gray-500">({{ item.count }})</span>
  </NuxtLink>
</template>

<script setup lang="ts">
import { SfIconSearch } from '@storefront-ui/vue';
import type { SearchSuggestionItemProps } from '~/components/ui/Search/types';

const props = defineProps<SearchSuggestionItemProps>();

const { searchTerm } = useSearchSuggestions();
const parsedText = ref({ before: props.item.label, match: '', after: '' });
const match = ref(false);

const escaped = searchTerm.value.replaceAll(/[.*+?^${}()|[\]\\]/g, String.raw`\$&`);
const regex = new RegExp(`(${escaped})`, 'i');
const parts = props.item.label.split(regex);
if (parts.length > 2) {
  match.value = true;
  parsedText.value.before = parts[0] ?? '';
  parsedText.value.match = parts[1] ?? '';
  parsedText.value.after = parts[2] ?? '';
}
</script>
