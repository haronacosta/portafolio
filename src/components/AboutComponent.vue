<template>
      <section id="about" class="py-20 bg-gray-100 dark:bg-gray-900">
    <div class="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
      <div class="text-center mb-16">
        <h2 class="text-4xl font-bold text-gray-900 dark:text-white mb-4">
          {{ $t('about.title') }}
        </h2>
        <p class="text-xl text-gray-600 dark:text-gray-300 max-w-3xl mx-auto">
          {{ $t('about.description') }}
        </p>
      </div>

      <div class="grid md:grid-cols-2 gap-12 items-center">
        <!-- Text content -->
        <div class="space-y-6">
          <p class="text-lg text-gray-600 dark:text-gray-300 leading-relaxed">
            {{ $t('about.description') }}
          </p>

          <div class="grid grid-cols-3 gap-6 pt-6">
            <div class="text-center">
              <div class="text-3xl font-bold text-blue-600 dark:text-blue-400">3+</div>
              <div class="text-sm text-gray-600 dark:text-gray-400">{{ $t('about.experience') }}</div>
            </div>
            <div class="text-center">
              <div class="text-3xl font-bold text-blue-600 dark:text-blue-400">20+</div>
              <div class="text-sm text-gray-600 dark:text-gray-400">{{ $t('about.projects') }}</div>
            </div>
            <div class="text-center">
              <div class="text-3xl font-bold text-blue-600 dark:text-blue-400">15+</div>
              <div class="text-sm text-gray-600 dark:text-gray-400">{{ $t('about.technologies') }}</div>
            </div>
          </div>
        </div>

        <!-- Image/Visual content -->
        <div class="relative">
          <div class="relative z-10 bg-gradient-to-br from-blue-500 to-purple-600 rounded-2xl p-8 text-white">
            <div class="text-center">
              <div class="w-24 h-24 bg-white/20 rounded-full flex items-center justify-center mx-auto mb-4">
                <svg class="w-12 h-12" fill="currentColor" viewBox="0 0 24 24">
                  <path
                    d="M12 2C6.48 2 2 6.48 2 12s4.48 10 10 10 10-4.48 10-10S17.52 2 12 2zm-2 15l-5-5 1.41-1.41L10 14.17l7.59-7.59L19 8l-9 9z" />
                </svg>
              </div>
              <h3 class="text-xl font-semibold mb-2">Fullstack Development</h3>
              <p class="text-blue-100">Frontend, Backend, Database & DevOps</p>
            </div>
          </div>

          <!-- Decorative elements -->
          <div class="absolute -top-4 -right-4 w-20 h-20 bg-yellow-400 rounded-full opacity-80"></div>
          <div class="absolute -bottom-4 -left-4 w-16 h-16 bg-pink-400 rounded-full opacity-80"></div>
        </div>
      </div>
    </div>
  </section>
</template>

<script setup lang="ts">
import { defineComponent } from 'vue'

defineComponent({
  name: 'AboutComponent'
})
</script>
