<template>
  <div class="language-switcher relative">
    <button
      @click.stop="toggleLanguage"
      class="flex items-center space-x-2 px-2 py-1 rounded-md border border-gray-300 dark:border-gray-600 bg-white/80 dark:bg-gray-900/80 hover:bg-blue-100 dark:hover:bg-blue-900/40 shadow-sm transition-colors focus:outline-none focus:ring-2 focus:ring-blue-400 text-gray-800 dark:text-gray-100"
    >
      <span class="text-base font-bold">{{ currentLanguage === 'es' ? '🇪🇸' : '🇺🇸' }}</span>
      <span class="text-xs font-semibold">{{ currentLanguage === 'es' ? 'ES' : 'EN' }}</span>
      <svg
        class="w-4 h-4 transition-transform"
        :class="{ 'rotate-180': showDropdown }"
        fill="none"
        stroke="currentColor"
        viewBox="0 0 24 24"
      >
        <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M19 9l-7 7-7-7" />
      </svg>
    </button>

    <div
      v-if="showDropdown"
      class="absolute top-full right-0 mt-2 min-w-[120px] bg-white dark:bg-gray-900 rounded-lg shadow-lg border border-gray-200 dark:border-gray-700 py-1 z-50"
    >
      <button
        @click="changeLanguage('es')"
        class="w-full px-4 py-2 text-left hover:bg-blue-50 dark:hover:bg-blue-900/40 flex items-center space-x-2 text-gray-800 dark:text-gray-100"
        :class="{ 'bg-blue-100 dark:bg-blue-900/30 font-bold': currentLanguage === 'es' }"
      >
        <span>🇪🇸</span>
        <span>Español</span>
      </button>
      <button
        @click="changeLanguage('en')"
        class="w-full px-4 py-2 text-left hover:bg-blue-50 dark:hover:bg-blue-900/40 flex items-center space-x-2 text-gray-800 dark:text-gray-100"
        :class="{ 'bg-blue-100 dark:bg-blue-900/30 font-bold': currentLanguage === 'en' }"
      >
        <span>🇺🇸</span>
        <span>English</span>
      </button>
    </div>
  </div>
</template>

<script setup lang="ts">
import { ref, computed, onMounted, onUnmounted, defineComponent } from 'vue'
import { useI18n } from 'vue-i18n'

defineComponent({
  name: 'LanguageSwitcher',
})

const { locale } = useI18n()
const showDropdown = ref(false)
const currentLanguage = computed(() => locale.value)

function toggleLanguage() {
  showDropdown.value = !showDropdown.value
}
function changeLanguage(lang: string) {
  locale.value = lang
  showDropdown.value = false
}
function closeDropdown(e: MouseEvent) {
  if (!(e.target as HTMLElement).closest('.language-switcher')) {
    showDropdown.value = false
  }
}
onMounted(() => {
  document.addEventListener('click', closeDropdown)
})
onUnmounted(() => {
  document.removeEventListener('click', closeDropdown)
})
</script>

<style scoped>
.language-switcher {
  position: relative;
  z-index: 10;
}
</style>
