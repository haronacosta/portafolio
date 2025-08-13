<template>
  <section id="contact" class="py-20 bg-gray-50 dark:bg-gray-900">
    <div class="max-w-2xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
      <p class="text-base text-gray-600 dark:text-gray-300 mb-8">
        {{ $t('contact.invite') }}
      </p>
      <div class="flex flex-col items-center space-y-4 mb-8">
        <a
          href="mailto:hello@haronacosta.me"
          class="inline-flex items-center text-sky-400 dark:text-sky-400 text-lg font-semibold mail-link transition-all duration-300 focus:outline-none"
        >
          hello@haronacosta.me
        </a>
      </div>
      <div class="flex justify-center space-x-6 text-gray-600 dark:text-gray-300">
        <a
          href="https://github.com/haronacosta"
          target="_blank"
          rel="noopener"
          aria-label="GitHub"
          class="hover:text-sky-400 transition-colors"
        >
          <i
            class="fab fa-github text-2xl transition-transform duration-300 ease-in-out hover:scale-110"
          ></i>
        </a>
        <a
          href="https://linkedin.com/in/haronacosta"
          target="_blank"
          rel="noopener"
          aria-label="LinkedIn"
          class="hover:text-sky-400 transition-colors"
        >
          <i
            class="fab fa-linkedin-in text-2xl transition-transform duration-300 ease-in-out hover:scale-110"
          ></i>
        </a>
      </div>
    </div>
  </section>
</template>

<script setup lang="ts">
// Solo sección visual, sin lógica
</script>

<style scoped>
.mail-link {
  position: relative;
  width: fit-content;
}
.mail-link::after {
  content: '';
  display: block;
  position: absolute;
  left: 0;
  bottom: -2px;
  width: 25%;
  height: 2px;
  background: currentColor;
  transition: width 0.3s;
}
.mail-link:hover::after,
.mail-link:focus::after {
  width: 100%;
}
</style>
