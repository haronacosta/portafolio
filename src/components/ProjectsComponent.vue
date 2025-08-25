<template>
  <section id="projects" class="py-20 bg-gray-50 dark:bg-gray-900 text-gray-900 dark:text-gray-100">
    <div class="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
      <div class="text-center mb-16">
        <h2 class="text-4xl font-bold text-gray-900 dark:text-white mb-4">
          {{ $t('projects.title') }}
        </h2>
        <p class="text-xl text-gray-600 dark:text-gray-300 max-w-3xl mx-auto">
          {{ $t('projects.subtitle') }}
        </p>
      </div>

      <!-- Carousel de proyectos infinito -->
      <div class="relative">
        <!-- Flecha Izquierda -->
        <button
          @click="prev"
          class="absolute left-0 top-1/2 -translate-y-1/2 z-10 bg-white dark:bg-gray-900 border border-gray-300 dark:border-gray-700 rounded-full p-2 shadow hover:bg-gray-100 dark:hover:bg-gray-800 transition"
        >
          <svg
            class="w-6 h-6 text-gray-700 dark:text-gray-200"
            fill="none"
            stroke="currentColor"
            viewBox="0 0 24 24"
          >
            <path
              stroke-linecap="round"
              stroke-linejoin="round"
              stroke-width="2"
              d="M15 19l-7-7 7-7"
            />
          </svg>
        </button>
        <!-- Flecha Derecha -->
        <button
          @click="next"
          class="absolute right-0 top-1/2 -translate-y-1/2 z-10 bg-white dark:bg-gray-900 border border-gray-300 dark:border-gray-700 rounded-full p-2 shadow hover:bg-gray-100 dark:hover:bg-gray-800 transition"
        >
          <svg
            class="w-6 h-6 text-gray-700 dark:text-gray-200"
            fill="none"
            stroke="currentColor"
            viewBox="0 0 24 24"
          >
            <path
              stroke-linecap="round"
              stroke-linejoin="round"
              stroke-width="2"
              d="M9 5l7 7-7 7"
            />
          </svg>
        </button>

        <!-- Carrusel -->
        <div class="overflow-hidden">
          <div
            class="flex transition-transform duration-500"
            :style="{ transform: `translateX(-${realIndex * (100 / visibleCards)}%)` }"
            style="will-change: transform"
            @transitionend="handleTransitionEnd"
          >
            <div
              v-for="(project, idx) in extendedProjects"
              :key="idx + '-' + project.id"
              class="min-w-full sm:min-w-[33.3333%] max-w-full sm:max-w-[33.3333%] px-2 flex-shrink-0"
            >
              <div
                class="bg-gray-50 dark:bg-gray-900 rounded-xl shadow-lg hover:shadow-xl transition-all duration-300 overflow-hidden group h-full flex flex-col"
              >
                <!-- Project Image -->
                <div
                  class="relative h-48 overflow-hidden cursor-pointer"
                  @click="openModal(project)"
                >
                  <template v-if="project.image">
                    <img
                      :src="project.image"
                      :alt="$t(project.titleKey)"
                      class="absolute inset-0 w-full h-full object-cover"
                      @error="project.image = ''"
                    />
                    <div
                      class="absolute inset-0 bg-black/20 group-hover:bg-black/50 transition-all duration-700 group-hover:scale-105"
                    ></div>
                    <div class="absolute inset-0 flex items-center justify-center">
                      <div class="text-white text-center">
                        <h3 class="text-lg font-semibold">{{ $t(project.titleKey) }}</h3>
                      </div>
                    </div>
                  </template>
                  <template v-else>
                    <div
                      class="absolute inset-0 h-48 bg-gradient-to-br from-blue-500 to-green-400"
                    ></div>
                    <div
                      class="absolute inset-0 bg-black/20 group-hover:bg-black/50 transition-all duration-700 group-hover:scale-105"
                    ></div>
                    <div class="absolute inset-0 flex items-center justify-center">
                      <div class="text-white text-center">
                        <h3 class="text-lg font-semibold">{{ $t(project.titleKey) }}</h3>
                      </div>
                    </div>
                  </template>
                </div>
                <!-- Project Content -->
                <div class="p-6 flex-1 flex flex-col">
                  <p class="text-gray-600 dark:text-gray-300 mb-4 line-clamp-3">
                    {{ $t(project.descriptionKey) }}
                  </p>
                  <!-- Technologies -->
                  <div class="flex flex-wrap gap-2 mb-4">
                    <span
                      v-for="tech in project.technologies"
                      :key="tech"
                      class="px-2 py-1 bg-blue-100 dark:bg-blue-900/30 text-blue-800 dark:text-blue-300 text-xs rounded-full"
                    >
                      {{ tech }}
                    </span>
                  </div>
                  <!-- Action Button -->
                  <div class="flex gap-3 mt-auto">
                    <button
                      @click="openModal(project)"
                      class="flex-1 bg-blue-600 hover:bg-blue-700 text-white text-center py-2 px-4 rounded-lg transition-all duration-200 text-sm font-medium transform hover:scale-105 hover:shadow-lg"
                    >
                      {{ $t('projects.viewProject') }}
                    </button>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>

    <!-- Project Modal fuera del card -->
    <transition name="modal-fade">
      <div
        v-if="selectedProject"
        class="fixed inset-0 bg-black/80 flex items-center justify-center z-50 p-4"
        @click="closeModal"
      >
        <div
          class="bg-gray-50 dark:bg-gray-900 rounded-xl max-w-2xl w-full max-h-[90vh] overflow-y-auto animate-modal-in"
          @click.stop
        >
          <template v-if="selectedProject">
            <div>
              <!-- Modal Header -->
              <div class="p-6 border-b border-gray-200 dark:border-gray-700">
                <div class="flex justify-between items-start">
                  <h3 class="text-2xl font-bold text-gray-900 dark:text-white">
                    {{ $t(selectedProject.titleKey) }}
                  </h3>
                  <button
                    @click="closeModal"
                    class="text-gray-400 hover:text-gray-600 dark:hover:text-gray-300 transition-colors"
                  >
                    <svg class="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path
                        stroke-linecap="round"
                        stroke-linejoin="round"
                        stroke-width="2"
                        d="M6 18L18 6M6 6l12 12"
                      />
                    </svg>
                  </button>
                </div>
              </div>

              <!-- Modal Content -->
              <div class="p-6">
                <!-- Project Image -->
                <div class="mb-6">
                  <div class="w-full h-64 relative rounded-lg overflow-hidden">
                    <template v-if="selectedProject.image">
                      <img
                        :src="selectedProject.image"
                        :alt="$t(selectedProject.titleKey)"
                        class="absolute inset-0 w-full h-full object-cover"
                        @error="selectedProject.image = ''"
                      />
                      <div class="absolute inset-0 bg-black/20"></div>
                      <div class="absolute inset-0 flex items-center justify-center">
                        <div class="text-white text-center">
                          <h4 class="text-xl font-semibold">{{ $t(selectedProject.titleKey) }}</h4>
                        </div>
                      </div>
                    </template>
                    <template v-else>
                      <div
                        class="absolute inset-0 h-64 bg-gradient-to-br from-blue-500 to-green-400"
                      ></div>
                      <div class="absolute inset-0 bg-black/20"></div>
                      <div class="absolute inset-0 flex items-center justify-center">
                        <div class="text-white text-center">
                          <h4 class="text-xl font-semibold">{{ $t(selectedProject.titleKey) }}</h4>
                        </div>
                      </div>
                    </template>
                  </div>
                </div>

                <!-- Project Description -->
                <div class="mb-6">
                  <h4 class="text-lg font-semibold text-gray-900 dark:text-white mb-3">
                    Descripción
                  </h4>
                  <p class="text-gray-600 dark:text-gray-300 leading-relaxed">
                    {{ $t(selectedProject.descriptionKey) }}
                  </p>
                </div>

                <!-- Technologies -->
                <div
                  v-if="selectedProject.technologies && selectedProject.technologies.length"
                  class="mb-6"
                >
                  <h4 class="text-lg font-semibold text-gray-900 dark:text-white mb-3">
                    Tecnologías
                  </h4>
                  <div class="flex flex-wrap gap-2">
                    <span
                      v-for="tech in selectedProject.technologies"
                      :key="tech"
                      class="px-3 py-1 bg-blue-100 dark:bg-blue-900/30 text-blue-800 dark:text-blue-300 text-sm rounded-full"
                    >
                      {{ tech }}
                    </span>
                  </div>
                </div>

                <!-- Action Buttons -->
                <div class="flex gap-3">
                  <a
                    v-if="
                      selectedProject && selectedProject.liveUrl && selectedProject.liveUrl !== '#'
                    "
                    :href="selectedProject.liveUrl"
                    target="_blank"
                    rel="noopener noreferrer"
                    class="flex-1 bg-blue-600 hover:bg-blue-700 text-white text-center py-3 px-6 rounded-lg transition-colors font-medium"
                  >
                    {{ $t('projects.viewSite') }}
                  </a>
                  <a
                    v-if="
                      selectedProject &&
                      selectedProject.githubUrl &&
                      selectedProject.githubUrl !== '#'
                    "
                    :href="selectedProject.githubUrl"
                    target="_blank"
                    rel="noopener noreferrer"
                    class="flex-1 border border-gray-300 dark:border-gray-600 text-gray-700 dark:text-gray-300 hover:bg-gray-50 dark:hover:bg-gray-800 text-center py-3 px-6 rounded-lg transition-colors font-medium"
                  >
                    {{ $t('projects.viewCode') }}
                  </a>
                </div>
              </div>
            </div>
          </template>
        </div>
      </div>
    </transition>
  </section>
</template>

<script setup lang="ts">
import type { Component } from 'vue'
import { ref, computed } from 'vue'
import {
  GlobeAltIcon,
  DevicePhoneMobileIcon,
  CpuChipIcon,
  CommandLineIcon,
} from '@heroicons/vue/24/outline'
import HeroicImg from '@/assets/Heroic.png'
import PodspunImg from '@/assets/Podspun.png'
import AeroavilaImg from '@/assets/Aeroavila.png'
import VesercaImg from '@/assets/Veserca.png'

interface Project {
  id: number
  titleKey: string
  descriptionKey: string
  technologies: string[]
  liveUrl?: string
  githubUrl?: string
  icon: Component
  image: string
}

const selectedProject = ref<Project | null>(null)

const openModal = (project: Project) => {
  selectedProject.value = project
}

const closeModal = () => {
  selectedProject.value = null
}

const projects: Project[] = [
  {
    id: 1,
    titleKey: 'projects.heroicart.title',
    descriptionKey: 'projects.heroicart.description',
    technologies: [],
    liveUrl: 'https://heroic.art/',
    githubUrl: '#',
    icon: GlobeAltIcon,
    image: HeroicImg,
  },
  {
    id: 2,
    titleKey: 'projects.podspun.title',
    descriptionKey: 'projects.podspun.description',
    technologies: [],
    liveUrl: 'https://podspun.com/',
    githubUrl: '#',
    icon: CommandLineIcon,
    image: PodspunImg,
  },
  {
    id: 3,
    titleKey: 'projects.aeroavila.title',
    descriptionKey: 'projects.aeroavila.description',
    technologies: [],
    liveUrl: 'https://aeroavila.com/',
    githubUrl: '#',
    icon: DevicePhoneMobileIcon,
    image: AeroavilaImg,
  },
  {
    id: 4,
    titleKey: 'projects.vecerca.title',
    descriptionKey: 'projects.vecerca.description',
    technologies: [],
    liveUrl: '#',
    githubUrl: '#',
    icon: CpuChipIcon,
    image: VesercaImg,
  },
]

const visibleCards = 3
const carouselIndex = ref(0)

const extendedProjects = computed(() => {
  if (projects.length <= visibleCards) return projects
  return [...projects.slice(-visibleCards), ...projects, ...projects.slice(0, visibleCards)]
})

const realIndex = computed(() => carouselIndex.value + visibleCards)

function handleTransitionEnd() {
  if (carouselIndex.value < 0) {
    carouselIndex.value = projects.length - 1
  } else if (carouselIndex.value >= projects.length) {
    carouselIndex.value = 0
  }
}

function prev() {
  carouselIndex.value--
}

function next() {
  carouselIndex.value++
}
</script>

<style scoped>
.line-clamp-3 {
  display: -webkit-box;
  -webkit-line-clamp: 3;
  -webkit-box-orient: vertical;
  overflow: hidden;
}
@keyframes modal-in {
  0% {
    opacity: 0;
    transform: scale(0.95) translateY(40px);
  }
  100% {
    opacity: 1;
    transform: scale(1) translateY(0);
  }
}
.animate-modal-in {
  animation: modal-in 0.35s cubic-bezier(0.4, 0, 0.2, 1);
}
.modal-fade-enter-active,
.modal-fade-leave-active {
  transition: opacity 0.3s;
}
.modal-fade-enter-from,
.modal-fade-leave-to {
  opacity: 0;
}
</style>
