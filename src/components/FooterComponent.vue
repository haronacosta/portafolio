<template>
  <footer class="bg-gray-200 dark:bg-gray-800 text-gray-800 dark:text-white py-12">
    <div class="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
      <div class="flex flex-col md:flex-row md:justify-between md:items-start gap-8">
        <!-- Brand -->
        <div class="space-y-4 md:w-1/2">
          <div class="text-2xl font-bold text-blue-600 dark:text-blue-400">
            {{ $t('footer.brand') }}
          </div>
        </div>
        <!-- Location Info -->
        <div class="md:w-1/2 md:flex md:flex-col md:items-end">
          <div class="inline-block text-gray-600 dark:text-gray-300 text-base font-normal">
            <i class="fas fa-map-marker-alt mr-2 text-inherit"></i>Caracas, Venezuela
          </div>
        </div>
      </div>
      <!-- Bottom Bar -->
      <div
        class="border-t border-gray-500 dark:border-gray-400 mt-8 pt-8 flex flex-col md:flex-row justify-between items-center"
      >
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
  name: 'FooterComponent',
})
</script>
