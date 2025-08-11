<template>
  <div class="language-switcher">
    <button @click="toggleLanguage"
      class="flex items-center space-x-2 px-3 py-2 rounded-lg bg-gray-100 dark:bg-gray-800 hover:bg-gray-200 dark:hover:bg-gray-700 transition-colors">
      <span class="text-sm font-medium">{{ currentLanguage === 'es' ? '🇪🇸' : '🇺🇸' }}</span>
      <span class="text-sm font-medium">{{ currentLanguage === 'es' ? 'ES' : 'EN' }}</span>
      <svg class="w-4 h-4 transition-transform" :class="{ 'rotate-180': showDropdown }" fill="none"
        stroke="currentColor" viewBox="0 0 24 24">
        <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M19 9l-7 7-7-7" />
      </svg>
    </button>

    <div v-if="showDropdown"
      class="absolute top-full right-0 mt-2 bg-gray-100 dark:bg-gray-800 rounded-lg shadow-lg border border-gray-200 dark:border-gray-700 py-1 z-50">
      <button @click="changeLanguage('es')"
        class="w-full px-4 py-2 text-left hover:bg-gray-100 dark:hover:bg-gray-700 flex items-center space-x-2"
        :class="{ 'bg-blue-50 dark:bg-blue-900/20': currentLanguage === 'es' }">
        <span>🇪🇸</span>
        <span>Español</span>
      </button>
      <button @click="changeLanguage('en')"
        class="w-full px-4 py-2 text-left hover:bg-gray-100 dark:hover:bg-gray-700 flex items-center space-x-2"
        :class="{ 'bg-blue-50 dark:bg-blue-900/20': currentLanguage === 'en' }">
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
  name: 'LanguageSwitcher'
})

const { locale } = useI18n()
const showDropdown = ref(false)

const currentLanguage = computed(() => locale.value)

const toggleLanguage = () => {
  showDropdown.value = !showDropdown.value
}

const changeLanguage = (lang: string) => {
  locale.value = lang
  showDropdown.value = false
}

// Cerrar dropdown cuando se hace clic fuera
const closeDropdown = (event: Event) => {
  if (!(event.target as Element).closest('.language-switcher')) {
    showDropdown.value = false
  }
}

// Agregar event listener para cerrar dropdown
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
}
</style>
