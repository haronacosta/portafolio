<template>
  <section id="projects" class="py-20 bg-gray-800">
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
                <div class="relative h-48 overflow-hidden">
                  <template v-if="project.image">
                    <img
                      :src="project.image"
                      :alt="project.title"
                      class="absolute inset-0 w-full h-full object-cover"
                      @error="project.image = ''"
                    />
                    <div
                      class="absolute inset-0 bg-black/20 group-hover:bg-black/40 transition-colors"
                    ></div>
                    <div class="absolute inset-0 flex items-center justify-center">
                      <div class="text-white text-center">
                        <div
                          class="w-16 h-16 bg-white/20 rounded-full flex items-center justify-center mx-auto mb-2"
                        >
                          <component :is="project.icon" class="w-8 h-8" />
                        </div>
                        <h3 class="text-lg font-semibold">{{ project.title }}</h3>
                      </div>
                    </div>
                  </template>
                  <template v-else>
                    <div
                      class="absolute inset-0 h-48 bg-gradient-to-br from-blue-500 to-green-400"
                    ></div>
                    <div
                      class="absolute inset-0 bg-black/20 group-hover:bg-black/40 transition-colors"
                    ></div>
                    <div class="absolute inset-0 flex items-center justify-center">
                      <div class="text-white text-center">
                        <div
                          class="w-16 h-16 bg-white/20 rounded-full flex items-center justify-center mx-auto mb-2"
                        >
                          <component :is="project.icon" class="w-8 h-8" />
                        </div>
                        <h3 class="text-lg font-semibold">{{ project.title }}</h3>
                      </div>
                    </div>
                  </template>
                </div>
                <!-- Project Content -->
                <div class="p-6 flex-1 flex flex-col">
                  <p class="text-gray-600 dark:text-gray-300 mb-4 line-clamp-3">
                    {{ project.description }}
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
                      class="flex-1 bg-blue-600 hover:bg-blue-700 text-white text-center py-2 px-4 rounded-lg transition-colors text-sm font-medium"
                    >
                      {{ $t('projects.viewProject') }}
                    </button>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>

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
      </div>
    </div>

    <!-- Project Modal -->
    <div
      v-if="selectedProject"
      class="fixed inset-0 bg-black/80 flex items-center justify-center z-50 p-4"
      @click="closeModal"
    >
      <div
        class="bg-gray-50 dark:bg-gray-900 rounded-xl max-w-2xl w-full max-h-[90vh] overflow-y-auto"
        @click.stop
      >
        <!-- Modal Header -->
        <div class="p-6 border-b border-gray-200 dark:border-gray-700">
          <div class="flex justify-between items-start">
            <h3 class="text-2xl font-bold text-gray-900 dark:text-white">
              {{ selectedProject.title }}
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
                  :alt="selectedProject.title"
                  class="absolute inset-0 w-full h-full object-cover"
                  @error="selectedProject.image = ''"
                />
                <div class="absolute inset-0 bg-black/20"></div>
                <div class="absolute inset-0 flex items-center justify-center">
                  <div class="text-white text-center">
                    <div
                      class="w-20 h-20 bg-white/20 rounded-full flex items-center justify-center mx-auto mb-3"
                    >
                      <component :is="selectedProject.icon" class="w-10 h-10" />
                    </div>
                    <h4 class="text-xl font-semibold">{{ selectedProject.title }}</h4>
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
                    <div
                      class="w-20 h-20 bg-white/20 rounded-full flex items-center justify-center mx-auto mb-3"
                    >
                      <component :is="selectedProject.icon" class="w-10 h-10" />
                    </div>
                    <h4 class="text-xl font-semibold">{{ selectedProject.title }}</h4>
                  </div>
                </div>
              </template>
            </div>
          </div>

          <!-- Project Description -->
          <div class="mb-6">
            <h4 class="text-lg font-semibold text-gray-900 dark:text-white mb-3">Descripción</h4>
            <p class="text-gray-600 dark:text-gray-300 leading-relaxed">
              {{ selectedProject.description }}
            </p>
          </div>

          <!-- Technologies -->
          <div class="mb-6">
            <h4 class="text-lg font-semibold text-gray-900 dark:text-white mb-3">Tecnologías</h4>
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
              v-if="selectedProject.liveUrl && selectedProject.liveUrl !== '#'"
              :href="selectedProject.liveUrl"
              target="_blank"
              rel="noopener noreferrer"
              class="flex-1 bg-blue-600 hover:bg-blue-700 text-white text-center py-3 px-6 rounded-lg transition-colors font-medium"
            >
              Ver Demo
            </a>
            <a
              v-if="selectedProject.githubUrl && selectedProject.githubUrl !== '#'"
              :href="selectedProject.githubUrl"
              target="_blank"
              rel="noopener noreferrer"
              class="flex-1 border border-gray-300 dark:border-gray-600 text-gray-700 dark:text-gray-300 hover:bg-gray-50 dark:hover:bg-gray-800 text-center py-3 px-6 rounded-lg transition-colors font-medium"
            >
              Ver Código
            </a>
          </div>
        </div>
      </div>
    </div>
  </section>
</template>

<script setup lang="ts">
import type { Component } from 'vue'
import { ref, computed } from 'vue'
import {
  CodeBracketIcon,
  GlobeAltIcon,
  DevicePhoneMobileIcon,
  CpuChipIcon,
  ServerIcon,
  CommandLineIcon,
} from '@heroicons/vue/24/outline'

interface Project {
  id: number
  title: string
  description: string
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
    title: 'Plataforma de E-commerce',
    description:
      'Plataforma de comercio electrónico completa con sistema de pagos, gestión de inventario y panel de administración. Incluye funcionalidades como carrito de compras, historial de pedidos, sistema de reseñas y análisis de ventas en tiempo real.',
    technologies: ['Vue.js', 'Node.js', 'MongoDB', 'Stripe'],
    liveUrl: '#',
    githubUrl: '#',
    icon: GlobeAltIcon,
    image: '/src/assets/ecommerce-project.jpg',
  },
  {
    id: 2,
    title: 'Aplicación de Gestión de Tareas',
    description:
      'Aplicación de gestión de tareas con funcionalidades de colaboración en tiempo real y notificaciones. Permite crear equipos, asignar tareas, establecer prioridades, y realizar seguimiento del progreso con métricas detalladas.',
    technologies: ['React', 'Firebase', 'TypeScript', 'Tailwind'],
    liveUrl: '#',
    githubUrl: '#',
    icon: CommandLineIcon,
    image: '/src/assets/task-app.jpg',
  },
  {
    id: 3,
    title: 'Aplicación de Banca Móvil',
    description:
      'Aplicación móvil de banca con autenticación biométrica, transferencias y gestión de cuentas.',
    technologies: ['React Native', 'Node.js', 'PostgreSQL', 'Redis'],
    liveUrl: '#',
    githubUrl: '#',
    icon: DevicePhoneMobileIcon,
    image: '/src/assets/banking-app.jpg',
  },
  {
    id: 4,
    title: 'Asistente de Chat con IA',
    description:
      'Asistente de chat inteligente con procesamiento de lenguaje natural y integración con APIs externas.',
    technologies: ['Python', 'FastAPI', 'OpenAI', 'Docker'],
    liveUrl: '#',
    githubUrl: '#',
    icon: CpuChipIcon,
    image: '/src/assets/ai-chat.jpg',
  },
  {
    id: 5,
    title: 'Infraestructura en la Nube',
    description:
      'Infraestructura en la nube con autenticación, balanceo de carga y monitoreo automático.',
    technologies: ['AWS', 'Terraform', 'Docker', 'Kubernetes'],
    liveUrl: '#',
    githubUrl: '#',
    icon: ServerIcon,
    image: '/src/assets/cloud-infra.jpg',
  },
  {
    id: 6,
    title: 'Editor de Código',
    description:
      'Editor de código web con resaltado de sintaxis, autocompletado y múltiples temas.',
    technologies: ['Monaco Editor', 'Vue.js', 'WebAssembly', 'IndexedDB'],
    liveUrl: '#',
    githubUrl: '#',
    icon: CodeBracketIcon,
    image: '/src/assets/code-editor.jpg',
  },
]

const visibleCards = 3
const carouselIndex = ref(0)

// Para el carrusel infinito, duplicamos los extremos
const extendedProjects = computed(() => {
  if (projects.length <= visibleCards) return projects
  // Clonamos los últimos y primeros elementos para el efecto infinito
  return [...projects.slice(-visibleCards), ...projects, ...projects.slice(0, visibleCards)]
})

// El índice real para el translateX
const realIndex = computed(() => carouselIndex.value + visibleCards)

// Cuando cambie el índice, si estamos en los clones, saltamos al real
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
</style>
