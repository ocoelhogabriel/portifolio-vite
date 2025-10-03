<script setup lang="ts">
import { useHead } from 'nuxt/app';

// Nuxt auto-imports useHead
useHead({
  title: "Gabriel Coelho | Portfólio",
  meta: [
    { name: "description", content: "Portfólio e currículo de Gabriel Coelho" },
    { property: "og:title", content: "Gabriel Coelho | Portfólio" },
    { property: "og:description", content: "Portfólio e currículo de Gabriel Coelho" }
  ]
})
</script>

<template>
  <div class="container mx-auto px-4 py-8">
    <div class="text-center mb-12 space-y-4">
      <h1 class="text-4xl font-bold tracking-tight">
        Gabriel Coelho
      </h1>
      <p class="text-xl text-muted-foreground max-w-xl mx-auto">
        Desenvolvedor Backend Java Spring Boot
      </p>
      
      <div class="flex justify-center gap-4 pt-2">
        <UiButton to="/projetos" size="lg">Ver Projetos</UiButton>
        <UiButton to="/contato" variant="outline" size="lg">Contato</UiButton>
      </div>
    </div>

    <div class="grid md:grid-cols-3 gap-6">
      <UiCard>
        <template #header><h3 class="text-lg font-semibold">Experiência</h3></template>
        <p class="text-muted-foreground">Desenvolvedor com experiência em Java Spring Boot, APIs REST e arquitetura de sistemas.</p>
      </UiCard>
      <UiCard>
        <template #header><h3 class="text-lg font-semibold">Projetos</h3></template>
        <p class="text-muted-foreground">Projetos open source disponíveis no GitHub com tecnologias modernas.</p>
      </UiCard>
      <UiCard>
        <template #header><h3 class="text-lg font-semibold">Skills</h3></template>
        <p class="text-muted-foreground">Java, Spring Boot, Nuxt, Docker, PostgreSQL, MongoDB e muito mais.</p>
      </UiCard>
    </div>
  </div>
</template>
