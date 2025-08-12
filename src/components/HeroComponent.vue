<template>
  <section
    class="relative bg-white dark:bg-gray-900 text-gray-900 dark:text-white pt-32 pb-20 overflow-hidden"
  >
    <!-- Estrellas blancas -->
    <svg
      class="absolute inset-0 w-full h-full pointer-events-none z-0 block"
      viewBox="0 0 1440 600"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
    >
      <g>
        <circle
          v-for="i in 80"
          :key="i"
          :cx="Math.random() * 1440"
          :cy="Math.random() * 600"
          :r="Math.random() * 1.5 + 0.5"
          fill="#fff"
          fill-opacity="0.7"
        />
      </g>
    </svg>
    <div class="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
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
import { defineComponent } from 'vue'

defineComponent({
  name: 'HeroComponent',
})
</script>

<style scoped></style>
