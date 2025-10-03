
<script setup lang="ts">
import { useHead } from 'nuxt/app';

interface HabilidadesDoc { grupos: { nome: string; itens: { nome: string; nivel: number }[] }[]; soft_skills?: string[] }
// @ts-ignore queryContent runtime import
// eslint-disable-next-line @typescript-eslint/ban-ts-comment
// @ts-ignore
const { data: habilidades } = await useAsyncData<HabilidadesDoc>(
  'habilidades',
  () => queryContent('habilidades').findOne()
)

useHead({
  title: 'Habilidades | Gabriel Coelho',
  meta: [
    { name: 'description', content: 'Habilidades técnicas e skills de Gabriel Coelho' },
    { property: 'og:title', content: 'Habilidades | Gabriel Coelho' },
    { property: 'og:description', content: 'Habilidades técnicas e skills de Gabriel Coelho' }
  ]
})
</script>

<template>
  <div class="container mx-auto px-4 py-8">
    <div class="text-center mb-12">
      <h1 class="text-3xl font-bold text-gray-900 dark:text-white mb-4">
        Minhas Habilidades
      </h1>
      <p class="text-lg text-gray-600 dark:text-gray-300">
        Tecnologias e ferramentas que domino
      </p>
    </div>

    <div class="space-y-8" v-if="habilidades?.grupos">
      <div v-for="group in habilidades.grupos" :key="group.nome">
        <h2 class="text-2xl font-semibold text-gray-900 dark:text-white mb-6">
          {{ group.nome }}
        </h2>
        <div class="grid md:grid-cols-2 lg:grid-cols-3 gap-4">
          <UiCard v-for="skill in group.itens" :key="skill.nome">
            <div class="flex items-center justify-between mb-3">
              <div class="flex items-center gap-3">
                <span class="h-2 w-2 rounded-full bg-primary" />
                <span class="font-medium">{{ skill.nome }}</span>
              </div>
              <span class="text-xs text-muted-foreground">{{ skill.nivel }}%</span>
            </div>
            <div class="w-full h-2 bg-muted rounded-full overflow-hidden">
              <div class="bg-primary h-2" :style="{ width: skill.nivel + '%' }" />
            </div>
          </UiCard>
        </div>
      </div>
    </div>

    <!-- Certificações e outros -->
    <div class="mt-16">
      <h2 class="text-2xl font-semibold text-gray-900 dark:text-white mb-6 text-center">
        Outras Competências
      </h2>
      
      <div class="grid md:grid-cols-2 gap-6">
        <UiCard v-if="habilidades?.soft_skills?.length">
          <template #header><h3 class="text-lg font-semibold flex items-center">Soft Skills</h3></template>
          <div class="flex flex-wrap gap-2 text-xs">
            <UiBadge v-for="s in habilidades.soft_skills" :key="s" variant="secondary">{{ s }}</UiBadge>
          </div>
        </UiCard>
        <UiCard>
          <template #header><h3 class="text-lg font-semibold flex items-center">Idiomas</h3></template>
          <!-- Idiomas consumidos do currículo para evitar duplicação -->
          <ContentQuery path="/curriculo" :only="['idiomas']" v-slot="{ data }">
            <div class="space-y-3 text-sm" v-if="data?.idiomas">
              <div class="flex justify-between" v-for="idioma in data.idiomas" :key="idioma.idioma">
                <span>{{ idioma.idioma }}</span>
                <UiBadge variant="outline">{{ idioma.nivel }}</UiBadge>
              </div>
            </div>
          </ContentQuery>
        </UiCard>
      </div>
    </div>
  </div>
</template>
