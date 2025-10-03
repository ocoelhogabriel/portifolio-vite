<script setup lang="ts">
import { createError, useHead, useRoute } from 'nuxt/app';

interface ExperienciaDoc {
  title: string; slug: string; cargo: string; periodo: string; localizacao?: string; tipo?: string;
  resumo?: string; responsabilidades?: string[]; conquistas?: string[]; stack_principal?: string[];
  tecnologias?: Record<string, any>;
}
const route = useRoute()
// @ts-ignore queryContent runtime import
// eslint-disable-next-line @typescript-eslint/ban-ts-comment
// @ts-ignore
const { data: experiencia } = await useAsyncData<ExperienciaDoc | null>(
  `experiencia-${route.params.slug}`,
  () => queryContent('experiencia').where({ slug: route.params.slug }).findOne()
)

if (!experiencia.value) {
  throw createError({ statusCode: 404, statusMessage: 'Experiência não encontrada' })
}

useHead({
  title: `${experiencia.value?.cargo} | Experiência`,
  meta: [
    { name: 'description', content: experiencia.value?.resumo || '' }
  ]
})
</script>

<template>
  <div class="container mx-auto px-4 py-8" v-if="experiencia">
    <div class="max-w-3xl mx-auto space-y-8">
      <div>
        <h1 class="text-3xl font-bold mb-2">{{ experiencia.cargo }}</h1>
        <p class="text-primary-600 dark:text-primary-400 font-medium">{{ experiencia.title }}</p>
        <p class="text-sm text-gray-500 dark:text-gray-400 mt-1">
          {{ experiencia.periodo }} • {{ experiencia.localizacao }} • {{ experiencia.tipo }}
        </p>
      </div>
      <UiCard>
        <p class="text-gray-700 dark:text-gray-300 whitespace-pre-line mb-6">{{ experiencia.resumo }}</p>
        <div v-if="experiencia.stack_principal?.length" class="mb-6">
          <h2 class="text-sm font-semibold mb-2">Stack principal</h2>
          <div class="flex flex-wrap gap-2">
            <UiBadge v-for="s in experiencia.stack_principal" :key="s" variant="outline">{{ s }}</UiBadge>
          </div>
        </div>
        <div v-if="experiencia.responsabilidades?.length" class="mb-6">
          <h2 class="text-sm font-semibold mb-2">Responsabilidades</h2>
          <ul class="space-y-1 text-sm list-disc pl-5">
            <li v-for="r in experiencia.responsabilidades" :key="r">{{ r }}</li>
          </ul>
        </div>
        <div v-if="experiencia.conquistas?.length" class="mb-6">
          <h2 class="text-sm font-semibold mb-2">Conquistas</h2>
          <ul class="space-y-1 text-sm">
            <li v-for="c in experiencia.conquistas" :key="c" class="flex items-start gap-2">
              <UiIcon name="i-heroicons-check-circle" class="text-green-500 h-4 w-4 mt-0.5" />
              <span>{{ c }}</span>
            </li>
          </ul>
        </div>
      </UiCard>
      <div>
        <UiButton to="/experiencia" variant="outline">Voltar</UiButton>
      </div>
    </div>
  </div>
</template>
