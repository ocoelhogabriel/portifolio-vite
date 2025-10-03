<script setup lang="ts">
import { createError, useHead, useRoute } from 'nuxt/app';
interface ProjetoDoc { title: string; slug: string; descricao: string; resultado?: string; tecnologias: string[]; status?: string; tags?: string[]; links?: Record<string, string | null> }
const route = useRoute()
// @ts-ignore queryContent runtime import
// eslint-disable-next-line @typescript-eslint/ban-ts-comment
// @ts-ignore
const { data: projeto } = await useAsyncData<ProjetoDoc | null>(
  `projeto-${route.params.slug}`,
  () => queryContent('projetos').where({ slug: route.params.slug }).findOne()
)

if (!projeto.value) {
  throw createError({ statusCode: 404, statusMessage: 'Projeto não encontrado' })
}

useHead({
  title: `${projeto.value?.title} | Projeto`,
  meta: [
    { name: 'description', content: projeto.value?.descricao || '' }
  ]
})
</script>

<template>
  <div class="container mx-auto px-4 py-8" v-if="projeto">
    <div class="max-w-3xl mx-auto space-y-8">
      <div>
        <h1 class="text-3xl font-bold mb-2">{{ projeto.title }}</h1>
        <p class="text-gray-700 dark:text-gray-300 mb-4">{{ projeto.descricao }}</p>
        <p v-if="projeto.resultado" class="text-sm text-green-600 dark:text-green-400 font-medium mb-4">{{ projeto.resultado }}</p>
        <div class="flex flex-wrap gap-2 mb-4">
          <UiBadge v-for="t in projeto.tecnologias" :key="t" variant="outline">{{ t }}</UiBadge>
        </div>
        <div v-if="projeto.tags?.length" class="flex flex-wrap gap-2 mb-6">
          <UiBadge v-for="tag in projeto.tags" :key="tag" variant="secondary">{{ tag }}</UiBadge>
        </div>
        <div class="flex gap-3" v-if="projeto.links">
          <UiButton v-if="projeto.links.repo" :to="projeto.links.repo" target="_blank" size="sm">Repositório</UiButton>
          <UiButton v-if="projeto.links.docs" :to="projeto.links.docs" target="_blank" size="sm" variant="outline">Documentação</UiButton>
        </div>
      </div>
      <div>
        <UiButton to="/projetos" variant="outline">Voltar</UiButton>
      </div>
    </div>
  </div>
</template>
