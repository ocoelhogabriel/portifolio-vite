
<script setup lang="ts">
// Buscar dados do currículo do arquivo YAML
interface Experiencia { cargo: string; empresa: string; periodo: string; localizacao: string; tipo: string; descricao: string; conquistas?: string[]; tecnologias?: string[] }
interface Educacao { curso: string; instituicao: string; periodo: string; descricao?: string }
interface Certificacao { nome: string; emissor: string; data: string; validade: string }
interface Projeto { nome: string; descricao: string; resultado?: string; tecnologias: string[] }
interface Habilidade { nome: string; nivel: number }
interface Curriculo {
  nome: string; titulo?: string; resumo?: string;
  contato?: { email?: string; telefone?: string; linkedin?: string; github?: string; localizacao?: string };
  experiencia?: Experiencia[];
  educacao?: Educacao[];
  certificacoes?: Certificacao[];
  projetos_destaque?: Projeto[];
  habilidades?: { backend?: Habilidade[]; frontend?: Habilidade[] };
  soft_skills?: string[];
  idiomas?: { idioma: string; nivel: string }[];
}
// @ts-ignore queryContent is auto-imported by Nuxt Content runtime
const { data: cv } = await useAsyncData<Curriculo>('curriculo', () => queryContent('curriculo').findOne())

useHead({
  title: 'Currículo | Gabriel Coelho',
  meta: [
    { name: 'description', content: 'Currículo completo de Gabriel Coelho - Desenvolvedor Backend Java Spring Boot' },
    { property: 'og:title', content: 'Currículo | Gabriel Coelho' },
    { property: 'og:description', content: 'Currículo completo de Gabriel Coelho - Desenvolvedor Backend Java Spring Boot' }
  ]
})

import { useToast } from '@/composables/useToast'
import { useHead } from 'nuxt/app';
const { push: pushToast } = useToast()
const downloadPDF = () => {
  pushToast({ title: 'Em breve!', description: 'Funcionalidade de download do PDF será implementada.' })
}
</script>

<template>
  <div class="container mx-auto px-4 py-8">
    <div class="max-w-4xl mx-auto">
      <!-- Header -->
      <div class="text-center mb-12">
        <h1 class="text-4xl font-bold text-gray-900 dark:text-white mb-2">
          {{ cv?.nome }}
        </h1>
        <p v-if="cv?.titulo" class="text-lg text-primary-600 dark:text-primary-400 font-medium mb-4">
          {{ cv.titulo }}
        </p>
        <p class="text-lg text-gray-600 dark:text-gray-300 mb-6 max-w-4xl mx-auto">
          {{ cv?.resumo }}
        </p>
        
        <div class="flex justify-center">
          <UiButton size="lg" @click="downloadPDF">Baixar PDF</UiButton>
        </div>
      </div>

      <div class="grid md:grid-cols-3 gap-8">
        <!-- Coluna Principal -->
        <div class="md:col-span-2 space-y-8">
          <!-- Experiência -->
          <UiCard>
            <template #header>
              <h2 class="text-2xl font-semibold flex items-center">
                Experiência Profissional
              </h2>
            </template>
            
            <div class="space-y-8">
              <div v-for="exp in cv?.experiencia" :key="exp.cargo" class="border-l-4 border-primary-500 pl-6">
                <div class="flex justify-between items-start mb-2">
                  <div>
                    <h3 class="text-lg font-semibold text-gray-900 dark:text-white">
                      {{ exp.cargo }}
                    </h3>
                    <p class="text-primary-600 dark:text-primary-400 font-medium">
                      {{ exp.empresa }} • {{ exp.periodo }}
                    </p>
                    <p class="text-sm text-gray-500 dark:text-gray-400">
                      {{ exp.localizacao }} • {{ exp.tipo }}
                    </p>
                  </div>
                </div>
                
                <p class="text-gray-600 dark:text-gray-300 mb-4">
                  {{ exp.descricao }}
                </p>
                
                <!-- Conquistas -->
                <div v-if="exp.conquistas" class="mb-4">
                  <h4 class="text-sm font-semibold text-gray-900 dark:text-white mb-2">Principais conquistas:</h4>
                  <ul class="space-y-1">
                    <li v-for="conquista in exp.conquistas" :key="conquista" class="flex items-start space-x-2 text-sm">
                      <UiIcon name="i-heroicons-check-circle" class="text-green-500 mt-0.5 h-4 w-4 flex-shrink-0" />
                      <span class="text-gray-600 dark:text-gray-300">{{ conquista }}</span>
                    </li>
                  </ul>
                </div>
                
                <!-- Tecnologias -->
                <div v-if="exp.tecnologias" class="flex flex-wrap gap-2">
                  <UiBadge v-for="tech in exp.tecnologias" :key="tech" variant="outline">{{ tech }}</UiBadge>
                </div>
              </div>
            </div>
          </UiCard>

          <!-- Educação -->
          <UiCard>
            <template #header>
              <h2 class="text-2xl font-semibold flex items-center">
                Educação
              </h2>
            </template>
            
            <div class="space-y-6">
              <div v-for="edu in cv?.educacao" :key="edu.curso" class="border-l-4 border-primary-500 pl-4">
                <h3 class="text-lg font-semibold text-gray-900 dark:text-white">
                  {{ edu.curso }}
                </h3>
                <p class="text-primary-600 dark:text-primary-400 font-medium">
                  {{ edu.instituicao }} • {{ edu.periodo }}
                </p>
                <p v-if="edu.descricao" class="text-gray-600 dark:text-gray-300 mt-2 text-sm">
                  {{ edu.descricao }}
                </p>
              </div>
            </div>
          </UiCard>

          <!-- Certificações -->
          <UiCard v-if="cv?.certificacoes">
            <template #header>
              <h2 class="text-2xl font-semibold flex items-center">
                Certificações
              </h2>
            </template>
            
            <div class="space-y-4">
              <div v-for="cert in cv.certificacoes" :key="cert.nome" class="border-l-4 border-primary-500 pl-4">
                <h3 class="text-lg font-semibold text-gray-900 dark:text-white">
                  {{ cert.nome }}
                </h3>
                <p class="text-primary-600 dark:text-primary-400 font-medium">
                  {{ cert.emissor }} • {{ cert.data }}
                </p>
                <p class="text-sm text-gray-500 dark:text-gray-400">
                  Válido até: {{ cert.validade }}
                </p>
              </div>
            </div>
          </UiCard>

          <!-- Projetos de Destaque -->
          <UiCard v-if="cv?.projetos_destaque">
            <template #header>
              <h2 class="text-2xl font-semibold flex items-center">
                Projetos de Destaque
              </h2>
            </template>
            
            <div class="space-y-6">
              <div v-for="projeto in cv.projetos_destaque" :key="projeto.nome" class="border-l-4 border-primary-500 pl-4">
                <h3 class="text-lg font-semibold text-gray-900 dark:text-white">
                  {{ projeto.nome }}
                </h3>
                <p class="text-gray-600 dark:text-gray-300 mb-3">
                  {{ projeto.descricao }}
                </p>
                <p class="text-sm text-green-600 dark:text-green-400 font-medium mb-3">
                  {{ projeto.resultado }}
                </p>
                <div class="flex flex-wrap gap-2">
                  <UiBadge v-for="tech in projeto.tecnologias" :key="tech" variant="secondary">{{ tech }}</UiBadge>
                </div>
              </div>
            </div>
          </UiCard>
        </div>

        <!-- Sidebar -->
        <div class="space-y-6">
          <!-- Contato -->
          <UiCard>
            <template #header>
              <h2 class="text-xl font-semibold flex items-center">
                Contato
              </h2>
            </template>
            
            <div class="space-y-3">
              <div class="flex items-center space-x-2">
                <UiIcon name="i-heroicons-envelope" class="text-gray-500 h-4 w-4" />
                <a 
                  :href="`mailto:${cv?.contato?.email}`" 
                  class="text-sm text-gray-700 dark:text-gray-300 hover:text-primary-500 transition-colors"
                >
                  {{ cv?.contato?.email }}
                </a>
              </div>
              
              <div v-if="cv?.contato?.telefone" class="flex items-center space-x-2">
                <UiIcon name="i-heroicons-phone" class="text-gray-500 h-4 w-4" />
                <span class="text-sm text-gray-700 dark:text-gray-300">
                  {{ cv.contato.telefone }}
                </span>
              </div>
              
              <div v-if="cv?.contato?.localizacao" class="flex items-center space-x-2">
                <UiIcon name="i-heroicons-map-pin" class="text-gray-500 h-4 w-4" />
                <span class="text-sm text-gray-700 dark:text-gray-300">
                  {{ cv.contato.localizacao }}
                </span>
              </div>
              
              <div class="flex items-center space-x-2">
                <UiIcon name="i-simple-icons-linkedin" class="text-gray-500 h-4 w-4" />
                <a 
                  :href="cv?.contato?.linkedin" 
                  target="_blank"
                  class="text-sm text-gray-700 dark:text-gray-300 hover:text-primary-500 transition-colors"
                >
                  LinkedIn
                </a>
              </div>
              
              <div class="flex items-center space-x-2">
                <UiIcon name="i-simple-icons-github" class="text-gray-500 h-4 w-4" />
                <a 
                  :href="cv?.contato?.github" 
                  target="_blank"
                  class="text-sm text-gray-700 dark:text-gray-300 hover:text-primary-500 transition-colors"
                >
                  GitHub
                </a>
              </div>
            </div>
          </UiCard>

          <!-- Habilidades Backend -->
          <UiCard v-if="cv?.habilidades?.backend">
            <template #header>
              <h2 class="text-xl font-semibold flex items-center">
                Backend
              </h2>
            </template>
            
            <div class="space-y-3">
              <div v-for="skill in cv.habilidades.backend" :key="skill.nome" class="flex justify-between items-center">
                <span class="text-sm font-medium">{{ skill.nome }}</span>
                <UiBadge variant="outline">{{ skill.nivel }}%</UiBadge>
              </div>
            </div>
          </UiCard>

          <!-- Habilidades Frontend -->
          <UiCard v-if="cv?.habilidades?.frontend">
            <template #header>
              <h2 class="text-xl font-semibold flex items-center">
                Frontend
              </h2>
            </template>
            
            <div class="space-y-3">
              <div v-for="skill in cv.habilidades.frontend" :key="skill.nome" class="flex justify-between items-center">
                <span class="text-sm font-medium">{{ skill.nome }}</span>
                <UiBadge variant="outline">{{ skill.nivel }}%</UiBadge>
              </div>
            </div>
          </UiCard>

          <!-- Soft Skills -->
          <UiCard v-if="cv?.soft_skills">
            <template #header>
              <h2 class="text-xl font-semibold flex items-center">
                Soft Skills
              </h2>
            </template>
            
            <div class="flex flex-wrap gap-2">
              <UiBadge v-for="skill in cv.soft_skills" :key="skill" variant="outline">{{ skill }}</UiBadge>
            </div>
          </UiCard>

          <!-- Idiomas -->
          <UiCard v-if="cv?.idiomas">
            <template #header>
              <h2 class="text-xl font-semibold flex items-center">
                Idiomas
              </h2>
            </template>
            
            <div class="space-y-3">
              <div v-for="idioma in cv.idiomas" :key="idioma.idioma" class="flex justify-between items-center">
                <span class="text-sm font-medium">{{ idioma.idioma }}</span>
                <UiBadge variant="secondary">{{ idioma.nivel }}</UiBadge>
              </div>
            </div>
          </UiCard>
        </div>
      </div>
    </div>
  </div>
</template>


