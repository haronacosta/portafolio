import { createI18n } from 'vue-i18n'

// Importar los archivos de idiomas
import en from './locales/en.json'
import es from './locales/es.json'

export default createI18n({
  legacy: false,
  locale: 'es', // Idioma por defecto
  fallbackLocale: 'en',
  messages: {
    en,
    es
  }
})
