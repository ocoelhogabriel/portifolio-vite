
<script setup lang="ts">
import { useHead } from 'nuxt/app';

interface ProjetoDoc { title: string; slug: string; descricao: string; resultado?: string; tecnologias: string[]; status?: string; tags?: string[]; links?: Record<string, string | null> }
// @ts-ignore queryContent runtime import
// eslint-disable-next-line @typescript-eslint/ban-ts-comment
// @ts-ignore
const { data: projetos } = await useAsyncData<ProjetoDoc[]>(
  'projetos',
  () => queryContent('projetos').find()
)

useHead({
  title: 'Projetos | Gabriel Coelho',
  meta: [
    { name: 'description', content: 'Projetos de Gabriel Coelho no GitHub' },
    { property: 'og:title', content: 'Projetos | Gabriel Coelho' },
    { property: 'og:description', content: 'Projetos de Gabriel Coelho no GitHub' }
  ]
})
</script>

<template>
  <div class="container mx-auto px-4 py-8">
    <div class="text-center mb-12">
      <h1 class="text-3xl font-bold text-gray-900 dark:text-white mb-4">
        Meus Projetos
      </h1>
      <p class="text-lg text-gray-600 dark:text-gray-300">
        Alguns dos projetos que desenvolvi ou contribuí
      </p>
    </div>

    <div class="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
      <UiCard v-for="proj in projetos" :key="proj.slug" class="hover:shadow-lg transition-shadow">
        <template #header>
          <div class="flex justify-between items-start">
            <h3 class="text-lg font-semibold">{{ proj.title }}</h3>
            <UiBadge v-if="proj.status" variant="secondary">{{ proj.status }}</UiBadge>
          </div>
        </template>
        <p class="text-sm text-muted-foreground mb-4 min-h-[60px]">{{ proj.descricao }}</p>
        <div class="flex flex-wrap gap-2 mb-4">
          <UiBadge variant="outline" v-for="tech in proj.tecnologias" :key="tech">{{ tech }}</UiBadge>
        </div>
        <div class="flex justify-between items-center text-xs text-muted-foreground">
          <span v-if="proj.resultado" class="line-clamp-1">{{ proj.resultado }}</span>
          <UiButton :to="`/projetos/${proj.slug}`" variant="outline" size="sm">Detalhes</UiButton>
        </div>
      </UiCard>
    </div>
  </div>
</template>
