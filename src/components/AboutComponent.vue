<template>
  <section class="bg-gray-800 text-gray-900 dark:text-gray-100 py-16">
    <div class="max-w-4xl mx-auto flex flex-col md:flex-row items-center gap-10 px-4">
      <!-- Imagen de perfil -->
      <div class="flex-shrink-0 mb-8 md:mb-0">
        <div
          class="w-40 h-40 sm:w-56 sm:h-56 rounded-full bg-gradient-to-br from-green-400 to-blue-500 p-1 flex items-center justify-center mx-auto"
        >
          <div
            class="w-full h-full rounded-full bg-gray-800 overflow-hidden flex items-center justify-center"
          >
            <img
              src="@/assets/portafolio-haron.jpg"
              alt="Haron Acosta"
              class="w-full h-full object-cover rounded-full"
            />
          </div>
        </div>
      </div>
      <!-- Información sobre mí -->
      <div class="flex-1 text-center md:text-left">
        <h2 class="text-3xl font-bold mb-4 text-gray-900 dark:text-gray-100">Sobre mí</h2>
        <p class="text-gray-700 dark:text-gray-300 mb-4">
          <!-- Aquí va tu descripción personal -->
          {{ $t('about.description') }}
        </p>
        <!-- Puedes agregar más contenido aquí -->
      </div>
    </div>
  </section>
</template>

<script setup lang="ts">
import { defineComponent } from 'vue'

defineComponent({
  name: 'AboutComponent',
})
</script>
