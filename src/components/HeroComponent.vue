<template>
  <section
    ref="heroSection"
    class="relative min-h-[calc(100vh-64px)] bg-gray-50 dark:bg-gray-900 text-gray-900 dark:text-white pt-32 pb-20 overflow-hidden flex items-center"
  >
    <!-- Estrellas animadas -->
    <svg
      :height="heroHeight"
      :class="[
        'absolute inset-0 w-full h-full pointer-events-none z-0',
        colorMode === 'dark' ? 'animate-stars-dark' : 'animate-stars',
      ]"
      :viewBox="`0 0 1440 ${heroHeight}`"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
    >
      <g>
        <circle
          v-for="star in stars"
          :key="star.id"
          :cx="star.cx"
          :cy="star.cy"
          :r="star.r"
          :fill="colorMode === 'dark' ? '#cbd5e1' : '#64748b'"
          :fill-opacity="colorMode === 'dark' ? 0.85 : 0.7"
        />
      </g>
    </svg>
    <div class="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center w-full">
      <div class="max-w-4xl mx-auto">
        <!-- Se eliminó el div de la imagen de perfil -->

        <h1 class="text-5xl md:text-7xl font-bold mb-6">
          {{ $t('hero.title') }}
        </h1>

        <h2 class="text-2xl md:text-3xl font-semibold text-blue-600 dark:text-blue-400 mb-6">
          {{ $t('hero.subtitle') }}
        </h2>

        <p
          class="text-lg md:text-xl text-gray-600 dark:text-gray-300 mb-8 leading-relaxed max-w-3xl mx-auto"
        >
          {{ $t('hero.description') }}
        </p>
      </div>
    </div>
  </section>
</template>

<script setup lang="ts">
import { defineComponent, ref, onMounted, onBeforeUnmount, inject } from 'vue'

defineComponent({
  name: 'HeroComponent',
})

const heroSection = ref<HTMLElement | null>(null)
const heroHeight = ref(900)

function updateHeroHeight() {
  if (heroSection.value) {
    heroHeight.value = heroSection.value.offsetHeight
  }
}

onMounted(() => {
  updateHeroHeight()
  window.addEventListener('resize', updateHeroHeight)
})
onBeforeUnmount(() => {
  window.removeEventListener('resize', updateHeroHeight)
})

// Detectar modo oscuro
const colorMode = inject('colorMode', ref('light'))

// Generar estrellas distribuidas uniformemente
const STAR_COLS = 18
const STAR_ROWS = 18
const STAR_COUNT = STAR_COLS * STAR_ROWS
const stars = ref(
  Array.from({ length: STAR_COUNT }, (_, i) => {
    const row = Math.floor(i / STAR_COLS)
    const col = i % STAR_COLS
    const cx = (col + Math.random()) * (1440 / STAR_COLS)
    const cy = (row + Math.random()) * (900 / STAR_ROWS)
    const r = Math.random() * 1.5 + 0.5
    return { id: i, cx, cy, r }
  }),
)
</script>

<style scoped>
@keyframes moveStars {
  0% {
    transform: translateY(0) translateX(0);
  }
  100% {
    transform: translateY(-40px) translateX(40px);
  }
}
@keyframes moveStarsDark {
  0% {
    transform: translateY(0) translateX(0);
  }
  100% {
    transform: translateY(-90px) translateX(90px);
  }
}
.animate-stars {
  animation: moveStars 30s linear infinite alternate;
}
.animate-stars-dark {
  animation: moveStarsDark 18s linear infinite alternate;
}
</style>
