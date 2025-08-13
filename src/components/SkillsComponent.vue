<template>
  <section id="skills" class="py-20 bg-gray-100 dark:bg-gray-800">
    <div class="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
      <div class="text-center mb-16">
        <h2 class="text-4xl font-bold text-gray-900 dark:text-white mb-4">
          {{ $t('skills.title') }}
        </h2>
        <p class="text-xl text-gray-600 dark:text-gray-300 max-w-3xl mx-auto">
          {{ $t('skills.subtitle') }}
        </p>
      </div>

      <div class="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
        <!-- Frontend -->
        <div
          class="bg-gradient-to-br from-blue-50 to-blue-100 dark:from-blue-900/20 dark:to-blue-800/20 rounded-xl p-6"
        >
          <div class="text-center mb-4">
            <div
              class="w-16 h-16 bg-blue-500 rounded-full flex items-center justify-center mx-auto mb-3"
            >
              <svg class="w-8 h-8 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path
                  stroke-linecap="round"
                  stroke-linejoin="round"
                  stroke-width="2"
                  d="M9.75 17L9 20l-1 1h8l-1-1-.75-3M3 13h18M5 17h14a2 2 0 002-2V5a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z"
                />
              </svg>
            </div>
            <h3 class="text-lg font-semibold text-gray-900 dark:text-white">
              {{ $t('skills.frontend') }}
            </h3>
          </div>
          <div class="space-y-2">
            <div
              v-for="skill in frontendSkills"
              :key="skill.name"
              class="flex justify-between items-center"
            >
              <span class="text-sm text-gray-700 dark:text-gray-300">{{ skill.name }}</span>
              <div class="w-20 bg-gray-200 dark:bg-gray-700 rounded-full h-2">
                <div
                  class="bg-blue-500 h-2 rounded-full"
                  :style="{ width: skill.level + '%' }"
                ></div>
              </div>
            </div>
          </div>
        </div>

        <!-- Backend -->
        <div
          class="bg-gradient-to-br from-green-50 to-green-100 dark:from-green-900/20 dark:to-green-800/20 rounded-xl p-6"
        >
          <div class="text-center mb-4">
            <div
              class="w-16 h-16 bg-green-500 rounded-full flex items-center justify-center mx-auto mb-3"
            >
              <svg class="w-8 h-8 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path
                  stroke-linecap="round"
                  stroke-linejoin="round"
                  stroke-width="2"
                  d="M5 12h14M5 12a2 2 0 01-2-2V6a2 2 0 012-2h14a2 2 0 012 2v4a2 2 0 01-2 2M5 12a2 2 0 00-2 2v4a2 2 0 002 2h14a2 2 0 002-2v-4a2 2 0 00-2-2M8 16h8"
                />
              </svg>
            </div>
            <h3 class="text-lg font-semibold text-gray-900 dark:text-white">
              {{ $t('skills.backend') }}
            </h3>
          </div>
          <div class="space-y-2">
            <div
              v-for="skill in backendSkills"
              :key="skill.name"
              class="flex justify-between items-center"
            >
              <span class="text-sm text-gray-700 dark:text-gray-300">{{ skill.name }}</span>
              <div class="w-20 bg-gray-200 dark:bg-gray-700 rounded-full h-2">
                <div
                  class="bg-green-500 h-2 rounded-full"
                  :style="{ width: skill.level + '%' }"
                ></div>
              </div>
            </div>
          </div>
        </div>

        <!-- Database -->
        <div
          class="bg-gradient-to-br from-purple-50 to-purple-100 dark:from-purple-900/20 dark:to-purple-800/20 rounded-xl p-6"
        >
          <div class="text-center mb-4">
            <div
              class="w-16 h-16 bg-purple-500 rounded-full flex items-center justify-center mx-auto mb-3"
            >
              <svg class="w-8 h-8 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path
                  stroke-linecap="round"
                  stroke-linejoin="round"
                  stroke-width="2"
                  d="M4 7v10c0 2.21 3.582 4 8 4s8-1.79 8-4V7M4 7c0 2.21 3.582 4 8 4s8-1.79 8-4M4 7c0-2.21 3.582-4 8-4s8 1.79 8 4m0 5c0 2.21-3.582 4-8 4s-8-1.79-8-4"
                />
              </svg>
            </div>
            <h3 class="text-lg font-semibold text-gray-900 dark:text-white">
              {{ $t('skills.database') }}
            </h3>
          </div>
          <div class="space-y-2">
            <div
              v-for="skill in databaseSkills"
              :key="skill.name"
              class="flex justify-between items-center"
            >
              <span class="text-sm text-gray-700 dark:text-gray-300">{{ skill.name }}</span>
              <div class="w-20 bg-gray-200 dark:bg-gray-700 rounded-full h-2">
                <div
                  class="bg-purple-500 h-2 rounded-full"
                  :style="{ width: skill.level + '%' }"
                ></div>
              </div>
            </div>
          </div>
        </div>

        <!-- Tools -->
        <div
          class="bg-gradient-to-br from-orange-50 to-orange-100 dark:from-orange-900/20 dark:to-orange-800/20 rounded-xl p-6"
        >
          <div class="text-center mb-4">
            <div
              class="w-16 h-16 bg-orange-500 rounded-full flex items-center justify-center mx-auto mb-3"
            >
              <svg class="w-8 h-8 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path
                  stroke-linecap="round"
                  stroke-linejoin="round"
                  stroke-width="2"
                  d="M10.325 4.317c.426-1.756 2.924-1.756 3.35 0a1.724 1.724 0 002.573 1.066c1.543-.94 3.31.826 2.37 2.37a1.724 1.724 0 001.065 2.572c1.756.426 1.756 2.924 0 3.35a1.724 1.724 0 00-1.066 2.573c.94 1.543-.826 3.31-2.37 2.37a1.724 1.724 0 00-2.572 1.065c-.426 1.756-2.924 1.756-3.35 0a1.724 1.724 0 00-2.573-1.066c-1.543.94-3.31-.826-2.37-2.37a1.724 1.724 0 00-1.065-2.572c-1.756-.426-1.756-2.924 0-3.35a1.724 1.724 0 001.066-2.573c-.94-1.543.826-3.31 2.37-2.37.996.608 2.296.07 2.572-1.065z"
                />
                <path
                  stroke-linecap="round"
                  stroke-linejoin="round"
                  stroke-width="2"
                  d="M15 12a3 3 0 11-6 0 3 3 0 016 0z"
                />
              </svg>
            </div>
            <h3 class="text-lg font-semibold text-gray-900 dark:text-white">
              {{ $t('skills.tools') }}
            </h3>
          </div>
          <div class="space-y-2">
            <div
              v-for="skill in toolSkills"
              :key="skill.name"
              class="flex justify-between items-center"
            >
              <span class="text-sm text-gray-700 dark:text-gray-300">{{ skill.name }}</span>
              <div class="w-20 bg-gray-200 dark:bg-gray-700 rounded-full h-2">
                <div
                  class="bg-orange-500 h-2 rounded-full"
                  :style="{ width: skill.level + '%' }"
                ></div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  </section>
</template>

<script setup lang="ts">
import { defineComponent } from 'vue'

defineComponent({
  name: 'SkillsComponent',
})

interface Skill {
  name: string
  level: number
}

const frontendSkills: Skill[] = [
  { name: 'Vue.js', level: 95 },
  { name: 'React', level: 90 },
  { name: 'TypeScript', level: 88 },
  { name: 'Tailwind CSS', level: 92 },
  { name: 'HTML/CSS', level: 95 },
]

const backendSkills: Skill[] = [
  { name: 'Node.js', level: 90 },
  { name: 'Python', level: 85 },
  { name: 'Express.js', level: 88 },
  { name: 'FastAPI', level: 82 },
  { name: 'REST APIs', level: 92 },
]

const databaseSkills: Skill[] = [
  { name: 'MongoDB', level: 88 },
  { name: 'PostgreSQL', level: 85 },
  { name: 'Redis', level: 80 },
  { name: 'MySQL', level: 82 },
  { name: 'GraphQL', level: 78 },
]

const toolSkills: Skill[] = [
  { name: 'Git', level: 92 },
  { name: 'Docker', level: 85 },
  { name: 'AWS', level: 80 },
  { name: 'CI/CD', level: 82 },
  { name: 'Linux', level: 88 },
]
</script>
