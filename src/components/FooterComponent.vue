<template>
  <footer class="bg-gray-100 dark:bg-gray-900 text-gray-800 dark:text-white py-12">
    <div class="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
      <div class="grid md:grid-cols-3 gap-8">
        <!-- Brand -->
        <div class="space-y-4">
          <div class="text-2xl font-bold text-blue-600 dark:text-blue-400">{{ $t('footer.brand') }}</div>
          <p class="text-gray-600 dark:text-gray-300 max-w-md">
            {{ $t('footer.description') }}
          </p>
        </div>

        <!-- Quick Links -->
        <div class="space-y-4">
          <h3 class="text-lg font-semibold text-gray-900 dark:text-white">{{ $t('footer.quickLinks') }}</h3>
          <ul class="space-y-2">
            <li>
              <router-link to="/" class="text-gray-600 dark:text-gray-300 hover:text-blue-600 dark:hover:text-blue-400 transition-colors">
                {{ $t('nav.home') }}
              </router-link>
            </li>
            <li>
              <router-link to="/about" class="text-gray-600 dark:text-gray-300 hover:text-blue-600 dark:hover:text-blue-400 transition-colors">
                {{ $t('nav.about') }}
              </router-link>
            </li>
            <li>
              <router-link to="/projects" class="text-gray-600 dark:text-gray-300 hover:text-blue-600 dark:hover:text-blue-400 transition-colors">
                {{ $t('nav.projects') }}
              </router-link>
            </li>
            <li>
              <router-link to="/skills" class="text-gray-600 dark:text-gray-300 hover:text-blue-600 dark:hover:text-blue-400 transition-colors">
                {{ $t('nav.skills') }}
              </router-link>
            </li>
            <li>
              <router-link to="/contact" class="text-gray-600 dark:text-gray-300 hover:text-blue-600 dark:hover:text-blue-400 transition-colors">
                {{ $t('nav.contact') }}
              </router-link>
            </li>
          </ul>
        </div>

        <!-- Contact Info -->
        <div class="space-y-4">
          <h3 class="text-lg font-semibold text-gray-900 dark:text-white">{{ $t('footer.contact') }}</h3>
          <div class="space-y-2 text-gray-600 dark:text-gray-300">
            <p>{{ $t('footer.location') }}</p>
            <p>{{ $t('footer.email') }}</p>
            <p>{{ $t('footer.phone') }}</p>
          </div>
        </div>
      </div>

      <!-- Bottom Bar -->
      <div class="border-t border-gray-200 dark:border-gray-800 mt-8 pt-8 flex flex-col md:flex-row justify-between items-center">
        <p class="text-gray-500 dark:text-gray-400 text-sm">
          {{ $t('footer.copyright', { year: new Date().getFullYear() }) }} {{ $t('footer.rights') }}
        </p>
        <p class="text-gray-500 dark:text-gray-400 text-sm mt-2 md:mt-0">
          {{ $t('footer.madeWith') }}
        </p>
      </div>
    </div>
  </footer>
</template>

<script setup lang="ts">
import { defineComponent } from 'vue'

defineComponent({
  name: 'FooterComponent'
})
</script>
