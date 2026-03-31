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
              <span>{{ $t("menu1") }}</span>
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
              <div class="max-w-screen-3xl mx-auto p-4 grid grid-cols-11 gap-6">
                <div class="col-span-2 flex flex-col justify-center">
                  <h2 class="text-xl font-normal mb-4">
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

                <div class="col-span-9">
                  <div class="flex items-center gap-4">
                    
                    

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
                              class="w-full h-full object-contain group-hover/item:scale-110 transition-transform duration-200 py-2"
                            />
                          </div>
                          <div class="text-base text-gray-500 font-medium line-clamp-2 group-hover/item:text-black text-center">
                            {{ product.title }}
                          </div>
                        </a>
                      </div>
                    </div>
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
              <span>{{ $t("menu2") }}</span>
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
              <div class="max-w-screen-3xl mx-auto p-4 grid grid-cols-11 gap-6">
                <div class="col-span-2 flex flex-col justify-center">
                  <h2 class="text-xl font-normal mb-4">
                    {{ $t("menu2") }}
                  </h2>
                  <p class="text-black font-light mb-6">
                    {{ $t("menu2d") }}
                  </p>
                </div>

                <div class="col-span-9">
                  <div class="flex items-center gap-4">
                    
                    

                    <div class="overflow-hidden flex-1">
                      <div class="grid grid-cols-7 gap-4">

                      

                        <a
                          v-for="product in visibleProductsFahrzeuge"
                          :key="product.id"
                          :href="localePath(product.href)"
                          class="flex flex-col gap-2 group/item"
                        >
                          <div class="aspect-[4/3] overflow-hidden ">
                            <img
                              :src="product.image"
                              :alt="product.title"
                              class="w-full h-full object-contain group-hover/item:scale-110 transition-transform duration-200 py-2"
                            />
                          </div>
                          <div class="text-base text-gray-500 font-medium line-clamp-2 group-hover/item:text-black text-center">
                            {{ product.title }}
                          </div>
                        </a>
                      </div>
                    </div>
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
              {{ $t("menu3") }}
            </a>
          </li>
           <li class="group">
            <a
              type="button"
              :href="localePath('/about')"
              class="inline-flex items-center gap-2 px-4 py-2 text-black font-medium rounded-md hover:bg-slate-200">
              {{ $t("menu4") }}
            </a>
          </li>
           <li class="group">
            <a
              type="button"
              :href="localePath('/b2b')"
              class="inline-flex items-center gap-2 px-4 py-2 text-black font-medium rounded-md hover:bg-slate-200">
              {{ $t("menu5") }}
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
  { id: 1, title: "Mini", subtitle: "2-5 Jahre", image: "https://cdn02.plentymarkets.com/4in9ikd3ipve/item/images/806035/middle/806035-EzyRoller-Mini-Dreirad-Kinderfahrzeug-fuer-Kleinkinder-2-4-Jahre-Maedchen-oder-Jungen-Trike-Dreiradscooter-Bewegungsspielzeug-Mini-Galeriebildvorlage-2000-x-2000-0023-mini-side-sh.jpg", href: "/modelle/originals/mini" },
  { id: 2, title: "Classic",       subtitle: "4-14+ Jahre",             image: "https://cdn02.plentymarkets.com/4in9ikd3ipve/item/images/805347/preview/805347-EzyRoller-Classic-Kinderfahrzeug-fuer-Kinder-ab-4-bis-14-Jahre-Dreirad-Trike-Dreiradscooter-dreiraedriges-Funfahrzeug-Classic-EZR1-Classic-Red-top-side-view.jpg.avif", href: "/modelle/originals/classic" },
  { id: 3, title: "Classic X",    subtitle: "4-14+ Jahre",        image: "https://cdn02.plentymarkets.com/4in9ikd3ipve/item/images/811819/preview/811819-EzyRoller-Classic-X-Kinderfahrzeug-fuer-Kinder-ab-4-bis-14-Jahre-Dreirad-Trike-Dreiradscooter-dreiraedriges-Funfahrzeug-Classic-X-Classic-X-purple-EZR1PURX.jpg.avif", href: "/modelle/x-series/classic-x" },
  { id: 4, title: "Spinner X",       subtitle: "4-14 Jahre",    image: "https://cdn02.plentymarkets.com/4in9ikd3ipve/item/images/814670/preview/814670-EzyRoller-Spinner-X-Spinner-X--0003-spinner-low-side-shot-green.jpg.avif", href: "/modelle/x-series/spinner-x" },
  { id: 5, title: "Drifter X",         subtitle: "6-14+ Jahre",        image: "https://cdn02.plentymarkets.com/4in9ikd3ipve/item/images/811449/preview/811449-EzyRoller-Drifter-X-Trike-Dreirad-Drift-Kinderfahrzeug-Spielgeraete-fuer-draussen-Dreirad-Kinder-Dreiradscooter-4-14-Jahre-Drifter-X-DRIFTER-X-BLUE.jpg.avif", href: "/modelle/x-series/drifter-x" },
  { id: 6, title: "Pro X",     subtitle: "10+ Jahre",         image: "https://cdn02.plentymarkets.com/4in9ikd3ipve/item/images/811450/preview/811450-EzyRoller-Pro-X-Fun-Fahrzeug-Dreirad-fuer-Jugendliche-und-Erwachsene-Trike-ab-10-Jahre-Pro-X-CLASSIC-PRO-X-ORANGE.jpg.avif", href: "/modelle/x-series/pro-x" },
  { id: 7, title: "Drifter Pro X",    subtitle: "10+ Jahre",            image: "https://cdn02.plentymarkets.com/4in9ikd3ipve/item/images/811451/preview/811451-EzyRoller-Drifter-Pro-X-Trike-fuer-Jugendliche-und-Kinder-ab-10-Jahre-und-Erwachsene-Dreirad-Drifttrike-Dreiradscooter-Drifter-Pro-X-DRIFTER-PRO-X-GREEN.jpg.avif", href: "/modelle/x-series/drifter-pro-x" },
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
  { id: 1, title: t("menu27"), subtitle: "Nutzfahrzeug • 4x4",       image: "https://cdn02.plentymarkets.com/4in9ikd3ipve/item/images/809134/preview/809134-Ersatzschrauben-fuer-alle-Ezyroller-Model_2.jpg.avif", href: "/ersatzteile" },
  { id: 2, title: t("menu21"), subtitle: "Benzin • Schaltgetriebe",  image: "https://cdn02.plentymarkets.com/4in9ikd3ipve/item/images/814778/preview/814778-EzyRoller-Classic-X-Drifter-X-3-in-1-Rollen-Set-PU-Classic-Drifter-Rollenset-EZRWD3.jpg.avif", href: "/ersatzteile/rollen" },
  { id: 3, title: t("menu22"), subtitle: "Diesel • Allrad",          image: "https://cdn02.plentymarkets.com/4in9ikd3ipve/item/images/811458/preview/811458-EzyRoller-Pro-X-Sitz-Ersatzteil-Ersatzsitz-Sitzplane-Plane-Matte-EZ01008-01.jpg.avif", href: "/ersatzteile/sitze" },
  { id: 4, title: t("menu23"), subtitle: "Elektro • Reichweite 450km", image: "https://cdn02.plentymarkets.com/4in9ikd3ipve/item/images/814248/preview/814248-EzyRoller-Drifter-X-Hinterradschwinge-Drifter-X-Hinterradschwinge-4P2A8139.jpg.avif", href: "/ersatzteile/sonstiges" },
  { id: 5, title: t("menu24"), subtitle: "7 Sitze • Komfort",        image: "https://cdn02.plentymarkets.com/4in9ikd3ipve/item/images/813564/preview/813564-EzyRoller-Flaggenhalter-Flagge-Fahne-Wimpel-Flaschenhalter-Getraenkehalter-Trinkflaschenhalter-Sicherheitswimpel-Sicherheitsflagge-Zubehoer-Set-Flaggenhalter-EZ01182.jpg.avif", href: "/ersatzteile/zubehoer" },
  { id: 6, title: t("menu25"), subtitle: "Performance • 300 PS",     image: "https://cdn02.plentymarkets.com/4in9ikd3ipve/item/images/811452/preview/811452-EzyRoller-Basketballkorb-Outdoor-Kinder-Basketball-Korb-Aufsteller-Dreibein-_1.jpg.avif", href: "/ersatzteile/zubehoer/basketballkorb" },
  { id: 7, title: t("menu26"), subtitle: "Nutzfahrzeug • 4x4",       image: "https://cdn02.plentymarkets.com/4in9ikd3ipve/item/images/813965/preview/813965-EzyRoller-Hockey-Set-Galeriebildvorlage-2000-x-2000-0002-hockey-set.jpg.avif", href: "/ersatzteile/zubehoer/hockey-set" },
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
