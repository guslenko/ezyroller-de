<template>
  <section class="w-full py-4 px-4 bg-white">
    <div class="max-w-6xl mx-auto text-center relative mt-4">

      <h2 class="text-3xl font-bold text-center mb-6">
        Vergleich der EzyRoller Modelle
      </h2>

      <div class="w-full mx-auto space-y-3 text-base text-black font-medium leading-relaxed pb-2">

        <!-- SELECTORS -->
        <div class="grid grid-cols-2 gap-10 mb-4">

          <!-- LEFT SELECT -->
          <div>
            <select
              v-model="leftModel"
              class="w-full border-2 border-black hover:bg-black hover:text-white rounded-lg cursor-pointer px-4 py-3 bg-white shadow-sm"
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

          <!-- RIGHT SELECT -->
          <div>
            <select
              v-model="rightModel"
              class="w-full border-2 border-black hover:bg-black hover:text-white rounded-lg cursor-pointer px-4 py-3 bg-white shadow-sm"
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

        </div>

        <!-- TWO COLUMNS -->
        <div class="grid grid-cols-2 gap-2">

          <!-- LEFT PRODUCT -->
          <div v-if="productLeft" class="text-center space-y-4 px-2">
            <img :src="productLeft.img" class="mx-auto w-full object-contain mt-2 mb-4" />

            <div class="flex justify-center gap-2">
              <div
                v-for="c in productLeft.colors"
                :key="c"
                class="w-[48px] h-[48px] rounded-full border shadow-sm mb-6"
                :style="{ backgroundColor: c }"
              ></div>
            </div>

            <div class="font-bold text-black text-2xl pt-4 mt-4">
              EzyRoller<br />
              {{ productLeft.name }}
            </div>

            <NuxtLink
              :to="productLeft.link"
              class="inline-block px-8 py-3 text-lg border border-white text-white font-bold rounded-md shadow-md -rotate-3 hover:scale-125 transition-all duration-300 bg-black"
            >
              {{ $t("prodWidgetButton") }}
            </NuxtLink>
          </div>

          <!-- RIGHT PRODUCT -->
          <div v-if="productRight" class="text-center space-y-4 px-2">
            <img :src="productRight.img" class="mx-auto w-full object-contain mt-2 mb-4" />

            <div class="flex justify-center gap-2 mb-10">
              <div
                v-for="c in productRight.colors"
                :key="c"
                class="w-[48px] h-[48px] rounded-full border shadow-sm mb-6"
                :style="{ backgroundColor: c }"
              ></div>
            </div>

            <div class="font-bold text-black text-2xl pt-4 mt-4">
              EzyRoller<br />
              {{ productRight.name }}
            </div>

            <NuxtLink
              :to="productRight.link"
              class="inline-block px-8 py-3 text-lg border border-white text-white font-bold rounded-md shadow-md -rotate-3 hover:scale-125 transition-all duration-300 bg-black"
            >
              {{ $t("prodWidgetButton") }}
            </NuxtLink>
          </div>

        </div>

        <!-- CHARACTERISTICS TABLE -->
        <div class="mx-2 mb-4 pt-6">

          <div
            v-for="c in characteristics"
            :key="c.key"
            class="mb-4 mt-4"
          >
            <div class="text-left bg-white font-bold text-gray-500 text-2xl pb-2 pt-2">
              {{ c.label }}
            </div>

            <div class="grid grid-cols-2 text-center text-2xl font-normal border-b border-slate-300 rounded-lg border border-slate-300">
              <div class="bg-slate-100 text-black py-3 border-r border-slate-300">
                {{ translatedValue(productLeft, c.key) }}
              </div>
              <div class="bg-slate-100 text-black py-3">
                {{ translatedValue(productRight, c.key) }}
              </div>
            </div>
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

/* STATIC PRODUCT DATA */
const products = [
  {
    id: "classicx",
    name: "CLASSIC X",
    img: "/images/ERCLASSICX.webp",
    colors: ["#00c950", "#155dfc", "#a800b7", "#e60076", "#000000", "#e17100", "#c10007"],
    link: "/modelle/x-series/classic-x",
    specs: {
      age:"4-14+",
      height:"110-160 cm",
      weight:"70 kg",
      minmax:"66/116",
      seatsize:"29 cm",
      brakes: "brakesValue",
      stange:" - 2"
    }
  },
  {
    id: "spinnerx",
    name: "SPINNER X",
    img: "/images/ERSPINNERX.webp",
    colors: ["#00c950", "#155dfc", "#a800b7", "#e60076", "#c10007"],
    link: "/modelle/x-series/spinner-x",
    specs: {
      age:"4-14+",
      height:"100-150 cm",
      weight:"70 kg",
      minmax:"78/110",
      seatsize:"29 cm",
      brakes: "brakesValue",
      stange:" - 2"
    }
  },
  {
    id: "prox",
    name: "PRO X",
    img: "/images/ERPROX.webp",
    colors: ["#00cc55", "#000000", "#ffffff", "#ff8800"],
    link: "/modelle/x-series/pro-x",
    specs: {
      age:"10+",
      height:"140-180 cm",
      weight:"100 kg",
      minmax:"88/112",
      seatsize:"38 cm",
      brakes: "brakesValue",
      stange:" - 1"
    }
  },
  {
    id: "mini",
    name: "MINI",
    img: "/images/ERMINI.webp",
    colors: ["#ff66aa", "#00aaff", "#ffaa00"],
    link: "/modelle/originals/mini",
    specs: {
      age:"2-5",
      height:"80-110 cm",
      weight:"50 kg",
      minmax:"48/58",
      seatsize:"24 cm",
      brakes: "brakesValue",
      stange:" - 1"
    }
  },
  {
    id: "drifterx",
    name: "DRIFTER X",
    img: "/images/ERDRIFTERX.webp",
    colors: ["#ff0000", "#000000", "#00ffcc"],
    link: "/modelle/x-series/drifter-x",
    specs: {
      age:"6-14+",
      height:"110-160 cm",
      weight:"70 kg",
      minmax:"78/112",
      seatsize:"29 cm",
      brakes: "brakesValue",
      stange:" - 2"
    }
  },
  {
    id: "drifterprox",
    name: "DRIFTER PRO X",
    img: "/images/ERDRIFTERPROX.webp",
    colors: ["#ffaa00", "#000000", "#ff66cc", "#00cc55"],
    link: "/modelle/x-series/drifter-pro-x",
    specs: {
      age:"10+",
      height:"140-180 cm",
      weight:"100 kg",
      minmax:"93/118",
      seatsize:"38 cm",
      brakes: "brakesValue",
      stange:" - 1"
    }
  },
  {
    id: "classic",
    name: "CLASSIC",
    img: "/images/ERCLASSIC.webp",
    colors: ["#ff0000", "#000000", "#ffffff"],
    link: "/modelle/originals/classic",
    specs: {
      age:"4-14+",
      height:"110-160 cm",
      weight:"70 kg",
      minmax:"66/116",
      seatsize:"29 cm",
      brakes: "brakesValue",
      stange:" - 2"
    }
  }
];

/* SORT MODELS */
const modelsSorted = [...products].sort((a, b) =>
  a.name.localeCompare(b.name)
);

const leftModel = ref("classicx");
const rightModel = ref("spinnerx");

const productLeft = computed(() =>
  products.find((p) => p.id === leftModel.value)
);
const productRight = computed(() =>
  products.find((p) => p.id === rightModel.value)
);

/* CHARACTERISTICS */
const characteristics = [
  { key: "age", label: t("prodWidgetT1") },
  { key: "height", label: t("prodWidgetT2") },
  { key: "weight", label: t("prodWidgetT3") },
  { key: "minmax", label: t("prodWidgetT4") },
  { key: "seatsize", label: t("prodWidgetT5") },
  { key: "brakes", label: t("prodWidgetT6") },
  { key: "stange", label: t("prodWidgetT7") }
];

/* TRANSLATE ONLY BRAKES */
const translatedValue = (product, key) => {
  if (key === "brakes") {
    return t(product.specs[key]); // brakesValue → перевод
  }
  return product.specs[key];
};
</script>
