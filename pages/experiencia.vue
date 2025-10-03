
<script setup lang="ts">
import { useHead } from 'nuxt/app';

interface ExperienciaDoc {
  title: string; slug: string; cargo: string; periodo: string; localizacao?: string; tipo?: string;
  resumo?: string; responsabilidades?: string[]; conquistas?: string[]; stack_principal?: string[];
  tecnologias?: Record<string, any>;
}
// @ts-ignore queryContent é injetado pelo módulo @nuxt/content em runtime
// eslint-disable-next-line @typescript-eslint/ban-ts-comment
// @ts-ignore
const { data: experiencias } = await useAsyncData<ExperienciaDoc[]>(
  'experiencias',
  () => queryContent('experiencia').where({ _partial: false }).find()
)

useHead({
  title: 'Experiência | Gabriel Coelho',
  meta: [
    { name: 'description', content: 'Experiência profissional detalhada de Gabriel Coelho' },
    { property: 'og:title', content: 'Experiência | Gabriel Coelho' },
    { property: 'og:description', content: 'Experiência profissional detalhada de Gabriel Coelho' }
  ]
})
</script>

<template>
  <div class="container mx-auto px-4 py-8">
    <div class="text-center mb-12">
      <h1 class="text-3xl font-bold text-gray-900 dark:text-white mb-4">
        Experiência Profissional
      </h1>
      <p class="text-lg text-gray-600 dark:text-gray-300">
        Minha jornada como desenvolvedor ao longo dos anos
      </p>
    </div>

    <div class="max-w-4xl mx-auto">
      <!-- Timeline vertical -->
      <div class="relative">
        <!-- Linha vertical -->
        <div class="absolute left-8 top-0 bottom-0 w-0.5 bg-gray-200 dark:bg-gray-700"></div>
        
        <div class="space-y-12">
          <div v-for="exp in experiencias" :key="exp.slug" class="relative">
            <!-- Bolinha na timeline -->
            <div class="absolute left-6 w-4 h-4 bg-primary-500 rounded-full border-4 border-white dark:border-gray-900"></div>
            
            <!-- Card de experiência -->
            <div class="ml-20">
              <UiCard class="hover:shadow-lg transition-shadow">
                <template #header>
                  <div class="flex justify-between items-start">
                    <div>
                      <h3 class="text-xl font-bold text-gray-900 dark:text-white">
                        {{ exp.cargo }}
                      </h3>
                      <p class="text-primary-600 dark:text-primary-400 font-medium">
                        {{ exp.title }}
                      </p>
                    </div>
                    <UiBadge variant="secondary">{{ exp.tipo }}</UiBadge>
                  </div>
                  
                  <div class="flex items-center space-x-4 mt-2 text-sm text-gray-500 dark:text-gray-400">
                    <span class="flex items-center">
                      <UiIcon name="i-heroicons-calendar" class="mr-1 h-4 w-4" />
                      {{ exp.periodo }}
                    </span>
                    <span class="flex items-center">
                      <UiIcon name="i-heroicons-map-pin" class="mr-1 h-4 w-4" />
                      {{ exp.localizacao }}
                    </span>
                  </div>
                </template>
                
                <div class="space-y-6">
                  <!-- Descrição -->
                  <p class="text-gray-700 dark:text-gray-300">
                      {{ exp.resumo }}
                  </p>
                  
                  <!-- Tecnologias -->
                  <div>
                    <h4 class="text-sm font-semibold text-gray-900 dark:text-white mb-2">
                      Tecnologias utilizadas:
                    </h4>
                    <div class="flex flex-wrap gap-2">
                      <UiBadge
                        v-for="tech in (exp.stack_principal || [])"
                        :key="tech"
                        variant="outline"
                      >{{ tech }}</UiBadge>
                    </div>
                  </div>
                  
                  <!-- Conquistas -->
                  <div>
                    <h4 class="text-sm font-semibold text-gray-900 dark:text-white mb-3">
                      Principais conquistas:
                    </h4>
                    <ul class="space-y-2">
                      <li 
                        v-for="conquista in (exp.conquistas || [])" 
                        :key="conquista"
                        class="flex items-start space-x-2"
                      >
                        <UiIcon name="i-heroicons-check-circle" class="text-green-500 mt-0.5 h-4 w-4 flex-shrink-0" />
                        <span class="text-gray-700 dark:text-gray-300 text-sm">
                          {{ conquista }}
                        </span>
                      </li>
                    </ul>
                  </div>
                </div>
              </UiCard>
            </div>
          </div>
        </div>
      </div>
    </div>

    <!-- CTA Section -->
    <div class="text-center mt-16">
      <h2 class="text-2xl font-bold text-gray-900 dark:text-white mb-4">
        Interessado em trabalhar comigo?
      </h2>
      <p class="text-gray-600 dark:text-gray-300 mb-6">
        Estou sempre aberto a novas oportunidades e projetos desafiadores
      </p>
      <div class="flex justify-center gap-4">
        <UiButton to="/contato" size="lg">
          Entre em contato
        </UiButton>
        <UiButton to="/curriculo" variant="outline" size="lg">
          Ver currículo completo
        </UiButton>
      </div>
    </div>
  </div>
</template>
