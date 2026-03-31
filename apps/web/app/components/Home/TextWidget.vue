<template>
  <section class="w-full py-4 px-4 bg-white">
    <div class="max-w-screen-3xl px-6 mx-auto text-center relative">
      <div class="max-w-3xl mx-auto">

      <!-- TITLE H1 -->
      <h1 class="block text-lg font-bold mt-2 mb-0 text-black">
        EzyRoller
      </h1>

      <!-- TITLE H2 -->
      <h2
        class="inline-block
               text-4xl font-bold uppercase mt-0 mb-4 p-0
               text-transparent bg-clip-text
               bg-gradient-to-r
               from-orange-500 via-teal-600 via-purple-500 to-pink-500
               bg-[length:100%_100%] bg-[position:0%_0]
               "
      >
        {{ $t("textWidgetTitle") }}
      </h2>

      <!-- PARAGRAPHS -->
      <div class="space-y-3  text-xl text-black font-medium leading-relaxed mx-auto pb-2">
        <p>{{ $t("textWidgetP1") }}</p>
        <p><img
          src="/images/ezrp.webp"
          alt=""
          class="px-2 mx-auto"
        /></p>
        <p>{{ $t("textWidgetP2") }}</p>
        <p>{{ $t("textWidgetP3") }}</p>
      </div>

      <!-- ROTATING WRAPPER -->
      <div
        ref="rotator"
        class="inline-block mt-6 relative transition-transform duration-200 z-20"
        @mousemove="onMove"
        @mouseenter="onHover"
        @mouseleave="onLeave"
      >
        <NuxtLink
          :to="localePath('/find-ezyroller')"
          class="inline-block whitespace-nowrap text-center
                 px-8 py-3 border border-black text-white text-lg font-semibold
                 transition-colors duration-300
                 hover:bg-black hover:text-white hover:shadow-xl
                 bg-black backdrop-blur-md rounded-md z-20"
          :style="{ transform: `scale(${buttonScale})` }"
        >
          {{ $t("videoCta") }}
        </NuxtLink>
      </div>

      <!-- IMAGE -->
      <div class="-rotate-6 relative ml-[30px] mt-[-70px] pointer-events-none z-0">
        <img
          src="/images/ezh.webp"
          alt=""
          class="mx-auto"
        />
      </div>

    </div>
    </div>
  </section>
</template>

<script setup lang="ts">
import { ref, onMounted } from "vue";
import { useLocalePath } from "#i18n";

const localePath = useLocalePath();

const rotator = ref<HTMLElement | null>(null);
const buttonScale = ref(1);

let idleAnimation = true;
let idleAngle = 0;
let idleSpeed = 0.03; // базовая скорость

// ---------------------------
// IDLE ANIMATION (smooth, infinite)
// ---------------------------
function idleLoop() {
  if (!idleAnimation) return;

  // ускорение после 2 градусов
  const absAngle = Math.abs(idleAngle);
  const dynamicSpeed = absAngle < 1 ? idleSpeed : idleSpeed * 5;

  idleAngle += dynamicSpeed;

  if (idleAngle > 10 || idleAngle < -10) {
    idleSpeed = -idleSpeed;
  }

  if (rotator.value) {
    rotator.value.style.transform = `rotate(${idleAngle}deg)`;
  }

  // лёгкое дыхание
  buttonScale.value = 1 + Math.sin(idleAngle * 0.15) * 0.05;

  requestAnimationFrame(idleLoop);
}

// ---------------------------
// HOVER MODE (fast, reactive)
// ---------------------------
function onHover() {
  idleAnimation = false;
}

function onMove(e: MouseEvent) {
  if (!rotator.value) return;

  const rect = rotator.value.getBoundingClientRect();
  const centerX = rect.left + rect.width / 2;

  const distance = e.clientX - centerX; // -left ... +right
  const normalized = distance / (rect.width / 2); // -1 ... +1

  // ROTATION (inverted direction)
  const maxRotate = 12;
  const newAngle = -normalized * maxRotate; // инверсия направления

  rotator.value.style.transform = `rotate(${newAngle}deg)`;

  // SCALE
  const minScale = 0.8;
  const maxScale = 1.25;

  const scale = minScale + Math.abs(normalized) * (maxScale - minScale);
  buttonScale.value = scale;
}

function onLeave() {
  idleAnimation = true;
  requestAnimationFrame(idleLoop);
}

// ---------------------------
// START
// ---------------------------
onMounted(() => {
  requestAnimationFrame(idleLoop);
});
</script>
