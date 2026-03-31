<template>
  <div class="w-full h-full">
    <div class="relative">
      <nav>
        <ul class="hidden md:flex px-6 py-2 bg-white border-b border-b-neutral-200 max-w-screen-3xl mx-auto">

          <!-- МЕНЮ №1: Ersatzteile & Zubehör -->
          <li class="group">
            <button
              type="button"
              class="inline-flex items-center gap-2 px-4 py-2 text-black font-medium rounded-md hover:bg-slate-200"
            >
              <span>EzyRoller Modelle</span>
              <svg xmlns="http://www.w3.org/2000/svg"
                   class="inline-block fill-current w-6 h-6 rotate-90 text-neutral-500 group-hover:text-neutral-700"
                   viewBox="0 0 24 24">
                <path d="M8.705 17.297a1 1 0 0 1-.001-1.41l3.876-3.885-3.876-3.885a.998.998 0 0 1 1.412-1.41l4.587 4.588a1 1 0 0 1 0 1.414l-4.587 4.588a.997.997 0 0 1-1.411 0"></path>
              </svg>
            </button>

            <div
              class="absolute left-0 right-0 top-full z-20 bg-white shadow-lg
                     opacity-0 invisible group-hover:opacity-100 group-hover:visible
                     transition-all duration-200"
            >
              <div class="max-w-screen-3xl mx-auto p-8 grid grid-cols-9 gap-6">
                <div class="col-span-2 flex flex-col justify-center">
                  <h2 class="text-2xl font-semibold mb-4">
                    {{ $t("videoCta") }}
                  </h2>
                  <p class="text-black font-light mb-6">
                    {{ $t("textWidgetSizeD") }}
                  </p>
                  <a
  :href="localePath('/find-ezyroller')"
  class="inline-block border-b border-slate-400 pb-[2px] text-gray-500 font-medium 
         transition-all duration-300 hover:border-slate-700 hover:text-black group w-fit"
>
  <span class="inline-flex items-center gap-1">
    {{ $t("textWidgetSizeT") }}
    <span class="inline-block transition-transform duration-300 group-hover:translate-x-1.5">
      →
    </span>
  </span>
</a>

                </div>

                <div class="col-span-7">
                  <div class="flex items-center gap-4">
                    
                    <button
                      type="button"
                      class="shrink-0 w-8 h-8 flex items-center justify-center rounded-full border border-neutral-300 text-neutral-700 hover:bg-neutral-100 disabled:opacity-40 disabled:cursor-not-allowed"
                      @click="prevErsatzteile"
                      :disabled="currentIndexErsatzteile === 0"
                    >
                      ‹
                    </button>

                    <div class="overflow-hidden flex-1">
                      <div class="grid grid-cols-7 gap-4">

                      

                        <a
                          v-for="product in visibleProductsErsatzteile"
                          :key="product.id"
                          :href="localePath(product.href)"
                          class="flex flex-col gap-2 group/item"
                        >
                          <div class="aspect-[4/3] overflow-hidden ">
                            <img
                              :src="product.image"
                              :alt="product.title"
                              class="w-full h-full object-contain group-hover/item:scale-110 transition-transform duration-200"
                            />
                          </div>
                          <div class="text-base text-gray-500 font-medium line-clamp-2 group-hover/item:text-black">
                            {{ product.title }}
                          </div>
                          <div class="text-xs text-neutral-500">
                            {{ product.subtitle }}
                          </div>
                        </a>
                      </div>
                    </div>

                    <button
                      type="button"
                      class="shrink-0 w-8 h-8 flex items-center justify-center rounded-full border border-neutral-300 text-neutral-700 hover:bg-neutral-100 disabled:opacity-40 disabled:cursor-not-allowed"
                      @click="nextErsatzteile"
                      :disabled="currentIndexErsatzteile === maxIndexErsatzteile"
                    >
                      ›
                    </button>
                  </div>
                </div>

              </div>
            </div>
          </li>

          <!-- МЕНЮ №2: Fahrzeuge -->
          <li class="group">
            <button
              type="button"
              class="inline-flex items-center gap-2 px-4 py-2 text-black font-medium rounded-md hover:bg-slate-200"
            >
              <span>Ersatzteile & Zubehör</span>
              <svg xmlns="http://www.w3.org/2000/svg"
                   class="inline-block fill-current w-6 h-6 rotate-90 text-neutral-500 group-hover:text-neutral-700"
                   viewBox="0 0 24 24">
                <path d="M8.705 17.297a1 1 0 0 1-.001-1.41l3.876-3.885-3.876-3.885a.998.998 0 0 1 1.412-1.41l4.587 4.588a1 1 0 0 1 0 1.414l-4.587 4.588a.997.997 0 0 1-1.411 0"></path>
              </svg>
            </button>

            <div
              class="absolute left-0 right-0 top-full z-20 bg-white shadow-lg
                     opacity-0 invisible group-hover:opacity-100 group-hover:visible
                     transition-all duration-200"
            >
              <div class="max-w-screen-3xl mx-auto p-8 grid grid-cols-7 gap-6">
                <div class="col-span-7">
                  <div class="flex items-center gap-4">
                    <button
                      type="button"
                      class="shrink-0 w-8 h-8 flex items-center justify-center rounded-full border border-neutral-300 text-neutral-700 hover:bg-neutral-100 disabled:opacity-40 disabled:cursor-not-allowed"
                      @click="prevFahrzeuge"
                      :disabled="currentIndexFahrzeuge === 0"
                    >
                      ‹
                    </button>

                    <div class="overflow-hidden flex-1">
                      <div class="grid grid-cols-5 gap-4">
                        <a
                          v-for="product in visibleProductsFahrzeuge"
                          :key="product.id"
                          :href="product.href"
                          class="flex flex-col gap-2 group/item"
                        >
                          <div class="aspect-[4/3] overflow-hidden rounded border border-neutral-200 bg-neutral-50">
                            <img
                              :src="product.image"
                              :alt="product.title"
                              class="w-full h-full object-contain group-hover/item:scale-105 transition-transform duration-200"
                            />
                          </div>
                          <div class="text-base text-gray-500 font-medium line-clamp-2 group-hover/item:text-black">
                            {{ product.title }}
                          </div>
                          <div class="text-xs text-neutral-500">
                            {{ product.subtitle }}
                          </div>
                        </a>
                      </div>
                    </div>
                    <button
                      type="button"
                      class="shrink-0 w-8 h-8 flex items-center justify-center rounded-full border border-neutral-300 text-neutral-700 hover:bg-neutral-100 disabled:opacity-40 disabled:cursor-not-allowed"
                      @click="nextFahrzeuge"
                      :disabled="currentIndexFahrzeuge === maxIndexFahrzeuge"
                    >
                      ›
                    </button>
                  </div>
                </div>

              </div>
            </div>
          </li>
          <li class="group">
            <a
              type="button"
              :href="localePath('/komplettset')"
              class="inline-flex items-center gap-2 px-4 py-2 text-black font-medium rounded-md hover:bg-slate-200">
              Sale & Bundle-Angebote
            </a>
          </li>
           <li class="group">
            <a
              type="button"
              :href="localePath('/about')"
              class="inline-flex items-center gap-2 px-4 py-2 text-black font-medium rounded-md hover:bg-slate-200">
              Über uns
            </a>
          </li>
           <li class="group">
            <a
              type="button"
              :href="localePath('/b2b')"
              class="inline-flex items-center gap-2 px-4 py-2 text-black font-medium rounded-md hover:bg-slate-200">
              Händler werden
            </a>
          </li>
        </ul>
      </nav>
    </div>
  </div>
</template>


<script setup lang="ts">
import { computed, ref } from "vue";

type Product = {
  id: number;
  title: string;
  subtitle: string;
  image: string;
  href: string;
};

const { t } = useI18n()
const localePath = useLocalePath()

const visibleCount = 7;

/* ---------- МЕНЮ 1: Ersatzteile & Zubehör ---------- */

const productsErsatzteile: Product[] = [
  { id: 1, title: "EzyRoller Mini", subtitle: "2-5 Jahre", image: "https://cdn02.plentymarkets.com/4in9ikd3ipve/item/images/806035/middle/806035-EzyRoller-Mini-Dreirad-Kinderfahrzeug-fuer-Kleinkinder-2-4-Jahre-Maedchen-oder-Jungen-Trike-Dreiradscooter-Bewegungsspielzeug-Mini-Galeriebildvorlage-2000-x-2000-0023-mini-side-sh.jpg", href: "/modelle/originals/mini" },
  { id: 2, title: "EzyRoller Classic",       subtitle: "4-14+ Jahre",             image: "https://cdn02.plentymarkets.com/4in9ikd3ipve/item/images/805347/preview/805347-EzyRoller-Classic-Kinderfahrzeug-fuer-Kinder-ab-4-bis-14-Jahre-Dreirad-Trike-Dreiradscooter-dreiraedriges-Funfahrzeug-Classic-EZR1-Classic-Red-top-side-view.jpg.avif", href: "/modelle/originals/classic" },
  { id: 3, title: "EzyRoller Classic X",    subtitle: "4-14+ Jahre",        image: "https://cdn02.plentymarkets.com/4in9ikd3ipve/item/images/811819/preview/811819-EzyRoller-Classic-X-Kinderfahrzeug-fuer-Kinder-ab-4-bis-14-Jahre-Dreirad-Trike-Dreiradscooter-dreiraedriges-Funfahrzeug-Classic-X-Classic-X-purple-EZR1PURX.jpg.avif", href: "/modelle/x-series/classic-x" },
  { id: 4, title: "EzyRoller Spinner X",       subtitle: "4-14 Jahre",    image: "https://cdn02.plentymarkets.com/4in9ikd3ipve/item/images/814670/preview/814670-EzyRoller-Spinner-X-Spinner-X--0003-spinner-low-side-shot-green.jpg.avif", href: "/modelle/x-series/spinner-x" },
  { id: 5, title: "EzyRoller Drifter X",         subtitle: "6-14+ Jahre",        image: "https://cdn02.plentymarkets.com/4in9ikd3ipve/item/images/811449/preview/811449-EzyRoller-Drifter-X-Trike-Dreirad-Drift-Kinderfahrzeug-Spielgeraete-fuer-draussen-Dreirad-Kinder-Dreiradscooter-4-14-Jahre-Drifter-X-DRIFTER-X-BLUE.jpg.avif", href: "/modelle/x-series/drifter-x" },
  { id: 6, title: "EzyRoller Pro X",     subtitle: "10+ Jahre",         image: "https://cdn02.plentymarkets.com/4in9ikd3ipve/item/images/811450/preview/811450-EzyRoller-Pro-X-Fun-Fahrzeug-Dreirad-fuer-Jugendliche-und-Erwachsene-Trike-ab-10-Jahre-Pro-X-CLASSIC-PRO-X-ORANGE.jpg.avif", href: "/modelle/x-series/pro-x" },
  { id: 7, title: "EzyRoller Drifter Pro X",    subtitle: "10+ Jahre",            image: "https://cdn02.plentymarkets.com/4in9ikd3ipve/item/images/811451/preview/811451-EzyRoller-Drifter-Pro-X-Trike-fuer-Jugendliche-und-Kinder-ab-10-Jahre-und-Erwachsene-Dreirad-Drifttrike-Dreiradscooter-Drifter-Pro-X-DRIFTER-PRO-X-GREEN.jpg.avif", href: "/modelle/x-series/drifter-pro-x" },
];

const currentIndexErsatzteile = ref(0);

const maxIndexErsatzteile = computed(() =>
  Math.max(0, productsErsatzteile.length - visibleCount),
);

const visibleProductsErsatzteile = computed(() =>
  productsErsatzteile.slice(
    currentIndexErsatzteile.value,
    currentIndexErsatzteile.value + visibleCount,
  ),
);

const nextErsatzteile = () => {
  if (currentIndexErsatzteile.value < maxIndexErsatzteile.value) {
    currentIndexErsatzteile.value += 1;
  }
};

const prevErsatzteile = () => {
  if (currentIndexErsatzteile.value > 0) {
    currentIndexErsatzteile.value -= 1;
  }
};

/* ---------- МЕНЮ 2: Fahrzeuge ---------- */

const productsFahrzeuge: Product[] = [
  { id: 1, title: "Kompaktwagen A",   subtitle: "Benzin • Schaltgetriebe",  image: "https://via.placeholder.com/300x200?text=F1", href: "#" },
  { id: 2, title: "SUV X-Line",       subtitle: "Diesel • Allrad",          image: "https://via.placeholder.com/300x200?text=F2", href: "#" },
  { id: 3, title: "Elektro Modell E", subtitle: "Elektro • Reichweite 450km", image: "https://via.placeholder.com/300x200?text=F3", href: "#" },
  { id: 4, title: "Familienvan",      subtitle: "7 Sitze • Komfort",        image: "https://via.placeholder.com/300x200?text=F4", href: "#" },
  { id: 5, title: "Sportcoupe S",     subtitle: "Performance • 300 PS",     image: "https://via.placeholder.com/300x200?text=F5", href: "#" },
  { id: 6, title: "Pickup Pro",       subtitle: "Nutzfahrzeug • 4x4",       image: "https://via.placeholder.com/300x200?text=F6", href: "#" },
  { id: 7, title: "City Car",         subtitle: "Klein • Sparsam",          image: "https://via.placeholder.com/300x200?text=F7", href: "#" },
];

const currentIndexFahrzeuge = ref(0);

const maxIndexFahrzeuge = computed(() =>
  Math.max(0, productsFahrzeuge.length - visibleCount),
);

const visibleProductsFahrzeuge = computed(() =>
  productsFahrzeuge.slice(
    currentIndexFahrzeuge.value,
    currentIndexFahrzeuge.value + visibleCount,
  ),
);

const nextFahrzeuge = () => {
  if (currentIndexFahrzeuge.value < maxIndexFahrzeuge.value) {
    currentIndexFahrzeuge.value += 1;
  }
};

const prevFahrzeuge = () => {
  if (currentIndexFahrzeuge.value > 0) {
    currentIndexFahrzeuge.value -= 1;
  }
};
</script>
