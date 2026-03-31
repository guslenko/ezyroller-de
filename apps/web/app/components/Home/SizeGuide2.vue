<template>
  <section class="w-full overflow-hidden">
    <div class="relative w-full h-[150px]">
      <!-- Бесконечная лента -->
      <div class="train-strip h-[150px] flex">
        <!-- Один цикл (2 картинки) -->
        <img src="/images/train.webp" class="h-[150px] w-auto" />
        <img src="/images/train.webp" class="h-[150px] w-auto" />
        <!-- Дублируем цикл -->
        <img src="/images/train.webp" class="h-[150px] w-auto" />
        <img src="/images/train.webp" class="h-[150px] w-auto" />
      </div>
    </div>
  </section>
</template>

<script setup>
// пусто — всё статично
</script>

<style scoped>
/*
  Ширина одного цикла = 1900px * 2 = 3800px
  Мы двигаем ленту на +3800px, чтобы она ехала вправо.
*/

@keyframes trainMoveRight {
  0% {
    transform: translateX(-3800px); /* начинаем далеко слева */
  }
  100% {
    transform: translateX(0); /* приезжаем вправо */
  }
}

.train-strip {
  animation: trainMoveRight 60s linear infinite;
}
</style>
