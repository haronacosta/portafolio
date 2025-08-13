<template>
  <section
    ref="heroSection"
    class="relative min-h-[calc(100vh-64px)] bg-gray-50 dark:bg-gray-900 text-gray-900 dark:text-white pt-32 pb-20 overflow-hidden flex items-center"
  >
    <!-- Estrellas animadas -->
    <svg
      :height="heroHeight"
      :width="heroWidth"
      :class="[
        'absolute inset-0 w-full h-full pointer-events-none z-0',
        colorMode === 'dark' ? 'animate-stars-dark' : 'animate-stars',
      ]"
      :viewBox="`0 0 ${heroWidth} ${heroHeight}`"
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
    <div class="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-left w-full">
      <div class="max-w-4xl mx-auto text-left">
        <h1 class="text-2xl md:text-3xl font-bold text-blue-600 dark:text-blue-400 mb-6 font-mono">
          <span ref="typewriter"></span>
          <span
            class="blinking-cursor text-gray-400 dark:text-gray-300"
            :style="{ visibility: cursorVisible ? 'visible' : 'hidden' }"
            >_</span
          >
        </h1>

        <h2 class="text-2xl md:text-3xl font-semibold text-gray-900 dark:text-white mb-6">
          {{ $t('hero.subtitle') }}
        </h2>

        <p
          class="text-lg md:text-xl text-gray-600 dark:text-gray-300 mb-8 leading-relaxed max-w-3xl text-left"
        >
          {{ $t('hero.description') }}
        </p>
      </div>
    </div>
  </section>
</template>

<script setup lang="ts">
import { defineComponent, ref, onMounted, onBeforeUnmount, inject, watch } from 'vue'
import { useI18n } from 'vue-i18n'

defineComponent({
  name: 'HeroComponent',
})

const heroSection = ref<HTMLElement | null>(null)
const heroHeight = ref(900)
const heroWidth = ref(window.innerWidth)

function updateHeroSize() {
  if (heroSection.value) {
    heroHeight.value = heroSection.value.offsetHeight
    heroWidth.value = heroSection.value.offsetWidth || window.innerWidth
  } else {
    heroWidth.value = window.innerWidth
  }
}

onMounted(() => {
  updateHeroSize()
  window.addEventListener('resize', updateHeroSize)
})
onBeforeUnmount(() => {
  window.removeEventListener('resize', updateHeroSize)
})

// Detectar modo oscuro
const colorMode = inject('colorMode', ref('light'))

// Generar estrellas distribuidas uniformemente y cubrir todo el ancho
const STAR_COLS = 36
const STAR_ROWS = 28
const STAR_COUNT = STAR_COLS * STAR_ROWS
interface Star {
  id: number
  cx: number
  cy: number
  r: number
}
const stars = ref<Star[]>([])

function generateStars() {
  const width = heroWidth.value
  const height = heroHeight.value
  stars.value = Array.from({ length: STAR_COUNT }, (_, i) => {
    const row = Math.floor(i / STAR_COLS)
    const col = i % STAR_COLS
    let cx
    if (col === 0) {
      cx = 0
    } else if (col === STAR_COLS - 1) {
      cx = width
    } else {
      cx = col * (width / (STAR_COLS - 1)) + (Math.random() - 0.5) * (width / STAR_COLS) * 0.6
    }
    let cy
    if (row === 0) {
      cy = 0
    } else if (row === STAR_ROWS - 1) {
      cy = height
    } else if (row === STAR_ROWS - 2) {
      // Asegura una fila justo antes del borde inferior
      cy = height - height / (STAR_ROWS - 1)
    } else {
      cy = row * (height / (STAR_ROWS - 1)) + (Math.random() - 0.5) * (height / STAR_ROWS) * 0.6
    }
    const r = Math.random() * 1.5 + 0.5
    return { id: i, cx, cy, r }
  })
}

watch([heroWidth, heroHeight], generateStars, { immediate: true })

const typewriter = ref<HTMLElement | null>(null)
const { t } = useI18n()
const fullTitle = t('hero.title')
let typeIndex = 0
let typing = true
const cursorVisible = ref(true)

function typeWriterLoop() {
  if (!typewriter.value) return
  if (typing) {
    if (typeIndex <= fullTitle.length) {
      typewriter.value.textContent = fullTitle.slice(0, typeIndex)
      // El cursor siempre visible, incluso en espacios
      cursorVisible.value = true
      typeIndex++
      setTimeout(typeWriterLoop, 250)
    } else {
      typing = false
      setTimeout(typeWriterLoop, 1200)
    }
  } else {
    if (typeIndex >= 0) {
      typewriter.value.textContent = fullTitle.slice(0, typeIndex)
      cursorVisible.value = true
      typeIndex--
      setTimeout(typeWriterLoop, 40)
    } else {
      if (typewriter.value) typewriter.value.textContent = ''
      cursorVisible.value = true
      setTimeout(() => {
        typing = true
        typeIndex = 0
        typeWriterLoop()
      }, 500)
    }
  }
}

onMounted(() => {
  typeWriterLoop()
})
</script>

<style scoped>
@keyframes moveStars {
  0% {
    transform: translateY(0) translateX(0);
  }
  100% {
    transform: translateY(-120px) translateX(180px);
  }
}
@keyframes moveStarsDark {
  0% {
    transform: translateY(0) translateX(0);
  }
  100% {
    transform: translateY(-200px) translateX(320px);
  }
}
.animate-stars {
  animation: moveStars 36s linear infinite alternate;
}
.animate-stars-dark {
  animation: moveStarsDark 22s linear infinite alternate;
}
@keyframes blink {
  0%,
  100% {
    opacity: 1;
  }
  50% {
    opacity: 0;
  }
}
.blinking-cursor {
  display: inline-block;
  width: 1ch;
  animation: blink 0.7s steps(1) infinite;
  font-weight: bold;
}
</style>
