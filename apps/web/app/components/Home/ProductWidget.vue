<template>
  <section class="w-full py-4 px-4 bg-white">
    <div class="max-w-6xl mx-auto text-center relative mt-4">

      <h2 class="text-3xl uppercase font-bold text-center mb-2">
        Vergleich der EzyRoller Modelle
      </h2>

      <!-- MOBILE SCROLL WRAPPER -->
      <div class="overflow-x-auto pb-4">
        <div class="min-w-[400px] grid grid-cols-2 md:grid-cols-3">

          <!-- EMPTY CELL -->
          <div class="hidden md:block"></div>

          <!-- SELECT LEFT -->
          <div class="p-4">
            <select
              v-model="leftModel"
              class="w-full border border-neutral-400 rounded-lg px-4 py-3 bg-white font-medium hover:bg-black hover:text-white transition cursor-pointer"
            >
              <option
                v-for="m in modelsSorted"
                :key="m.id"
                :value="m.id"
                :disabled="m.id === rightModel"
              >
                {{ m.name }}
              </option>
            </select>
          </div>

          <!-- SELECT RIGHT -->
          <div class="p-4">
            <select
              v-model="rightModel"
              class="w-full border border-neutral-400 rounded-lg px-4 py-3 bg-white font-medium hover:bg-black hover:text-white transition cursor-pointer"
            >
              <option
                v-for="m in modelsSorted"
                :key="m.id"
                :value="m.id"
                :disabled="m.id === leftModel"
              >
                {{ m.name }}
              </option>
            </select>
          </div>

          <!-- IMAGES -->
          <div class="hidden md:block"></div>

          <div class="p-4">
            <NuxtLink :to="$localePath(productLeft.link)" class="block group">
              <img :src="productLeft.img" class="mx-auto w-full object-contain transition group-hover:opacity-80" />
            </NuxtLink>
          </div>

          <div class="p-4">
            <NuxtLink :to="$localePath(productRight.link)" class="block group">
              <img :src="productRight.img" class="mx-auto w-full object-contain transition group-hover:opacity-80" />
            </NuxtLink>
          </div>

          <!-- COLORS HEADER -->
          <div
            class="col-span-2 md:col-span-1 left-0 text-left font-medium text-black text-lg px-4 py-4 border-t border-neutral-200 bg-white"
          >
            {{ $t("sgTColors") }}
          </div>

          <!-- COLORS LEFT -->
          <div class="p-4 border-t border-neutral-200">
            <div class="flex flex-wrap justify-center gap-3">
              <div
                v-for="c in productLeft.colors"
                :key="c"
                class="w-8 h-8 rounded-full border shadow-sm flex-shrink-0"
                :class="`bg-${c}`"
              ></div>
            </div>
          </div>

          <!-- COLORS RIGHT -->
          <div class="p-4 border-t border-neutral-200">
            <div class="flex flex-wrap justify-center gap-3">
              <div
                v-for="c in productRight.colors"
                :key="c"
                class="w-8 h-8 rounded-full border shadow-sm flex-shrink-0"
                :class="`bg-${c}`"
              ></div>
            </div>
          </div>

          <!-- CHARACTERISTICS -->
          <div
            v-for="(c, idx) in characteristics"
            :key="c.key"
            class="contents"
          >
            <!-- LABEL -->
            <div
              class="col-span-2 md:col-span-1 left-0 text-left font-medium text-lg text-black px-4 py-4 border-t border-neutral-200"
              :class="idx % 2 === 0 ? 'bg-white md:bg-neutral-100 border-t border-neutral-200' : 'bg-white'"
            >
              {{ c.label }}
            </div>

            <!-- LEFT VALUE -->
            <div
              class="text-center text-lg font-medium px-4 py-4"
              :class="idx % 2 === 0 ? 'bg-neutral-100 border-t border-neutral-200' : 'bg-neutral-100 md:bg-white border-t border-neutral-200'"
            >
              {{ translatedValue(productLeft, c.key) }}
            </div>

            <!-- RIGHT VALUE -->
            <div
              class="text-center text-lg font-medium px-4 py-4"
              :class="idx % 2 === 0 ? 'bg-neutral-100 border-t border-neutral-200' : 'bg-neutral-100 md:bg-white border-t border-neutral-200'"
            >
              {{ translatedValue(productRight, c.key) }}
            </div>
          </div>

          <!-- BUTTONS HEADER SPACER -->
          <div class="hidden md:block left-0 bg-white z-10 px-4 py-4 border-t border-neutral-300"></div>

          <!-- BUTTON LEFT -->
          <div class="p-4 border-t border-neutral-300 bg-white">
            <NuxtLink
              :to="$localePath(productLeft.link)"
              class="inline-flex items-center gap-1 border-b border-slate-400 pb-[2px] text-gray-500 font-medium transition-all duration-300 hover:border-slate-700 hover:text-black hover:ml-2 group"
            >
              {{ productLeft.name }} entdecken
              <span class="inline-block transition-transform duration-300 group-hover:translate-x-1.5"> → </span>
            </NuxtLink>
          </div>

          <!-- BUTTON RIGHT -->
          <div class="p-4 border-t border-neutral-300 bg-white">
            <NuxtLink
              :to="$localePath(productRight.link)"
              class="inline-flex items-center gap-1 border-b border-slate-400 pb-[2px] text-gray-500 font-medium transition-all duration-300 hover:border-slate-700 hover:text-black hover:ml-2 group"
            >
              {{ productRight.name }} entdecken
              <span class="inline-block transition-transform duration-300 group-hover:translate-x-1.5"> → </span>
            </NuxtLink>
          </div>

        </div>
      </div>

    </div>
  </section>
</template>

<script setup>
import { ref, computed } from "vue";
import { useI18n } from "vue-i18n";

const { t } = useI18n();

/* PRODUCT DATA */
const products = [
  {
    id: "classic",
    name: "CLASSIC",
    img: "/images/ERCLASSIC.webp",
    colors: ["black", "lime-500", "sky-500", "red-600", "purple-700"],
    link: t("bizl7"),
    specs: { age:"3-14+", height:"95-160 cm", weight:"70 kg", minmax:"65/116", seatsize:"29 cm", brakes:"brakesValue", stange:"2" }
  },
  {
    id: "classicx",
    name: "CLASSIC X",
    img: "/images/ERCLASSICX.webp",
    colors: ["black", "lime-500", "sky-500", "red-600", "purple-700", "pink-600"],
    link: t("bizl2"),
    specs: { age:"3-14+", height:"95-160 cm", weight:"70 kg", minmax:"65/116", seatsize:"29 cm", brakes:"brakesValue", stange:"2" }
  },
  {
    id: "drifterx",
    name: "DRIFTER X",
    img: "/images/ERDRIFTERX.webp",
    colors: ["black", "lime-500", "sky-500", "red-600", "pink-600"],
    link: t("bizl4"),
    specs: { age:"4-14+", height:"100-160 cm", weight:"70 kg", minmax:"78/112", seatsize:"29 cm", brakes:"brakesValue", stange:"2" }
  },
  {
    id: "drifterprox",
    name: "DRIFTER PRO X",
    img: "/images/ERDRIFTERPROX.webp",
    colors: ["black", "lime-500", "sky-500", "red-600", "purple-700", "pink-600", "amber-500"],
    link: t("bizl6"),
    specs: { age:"10+", height:"135-180 cm", weight:"100 kg", minmax:"93/118", seatsize:"38 cm", brakes:"brakesValue", stange:"1" }
  },
  {
    id: "mini",
    name: "MINI",
    img: "/images/ERMINI.webp",
    colors: ["lime-500", "sky-500", "red-600", "purple-700", "pink-600"],
    link: t("bizl1"),
    specs: { age:"2-5", height:"80-105 cm", weight:"30 kg", minmax:"48/58", seatsize:"24 cm", brakes:"brakesValue", stange:"1" }
  },
  {
    id: "prox",
    name: "PRO X",
    img: "/images/ERPROX.webp",
    colors: ["black", "lime-500", "sky-500", "red-600", "pink-600", "amber-500"],
    link: t("bizl5"),
    specs: { age:"10+", height:"135-180 cm", weight:"100 kg", minmax:"88/112", seatsize:"38 cm", brakes:"brakesValue", stange:"1" }
  },
  {
    id: "spinnerx",
    name: "SPINNER X",
    img: "/images/ERSPINNERX.webp",
    colors: ["lime-500", "sky-500", "red-600", "pink-600"],
    link: t("bizl3"),
    specs: { age:"4-14+", height:"100-160 cm", weight:"70 kg", minmax:"75/108", seatsize:"29 cm", brakes:"brakesValue", stange:"2" }
  }
];

const modelsSorted = [...products].sort((a, b) => a.name.localeCompare(b.name));

const leftModel = ref("classicx");
const rightModel = ref("spinnerx");

const productLeft = computed(() => products.find(p => p.id === leftModel.value));
const productRight = computed(() => products.find(p => p.id === rightModel.value));

const characteristics = [
  { key: "age", label: t("prodWidgetT1") },
  { key: "height", label: t("prodWidgetT2") },
  { key: "weight", label: t("prodWidgetT3") },
  { key: "minmax", label: t("prodWidgetT4") },
  { key: "seatsize", label: t("prodWidgetT5") },
  { key: "brakes", label: t("prodWidgetT6") },
  { key: "stange", label: t("prodWidgetT7") }
];

const translatedValue = (product, key) => {
  if (key === "brakes") return t(product.specs[key]);
  return product.specs[key];
};
</script>
