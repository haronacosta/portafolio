<template>
  <div class="skills-view min-h-screen flex flex-col items-center justify-center">
    <h1 class="text-4xl font-bold mb-6">{{ $t('skills.title') }}</h1>
    <SkillsComponent />
  </div>
</template>

<script setup lang="ts">
import SkillsComponent from '../components/SkillsComponent.vue'
</script>
