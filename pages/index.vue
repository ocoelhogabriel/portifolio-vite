<script setup lang="ts">
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
    <div class="text-center mb-12">
      <h1 class="text-4xl font-bold text-gray-900 dark:text-white mb-4">
        Gabriel Coelho
      </h1>
      <p class="text-xl text-gray-600 dark:text-gray-300 mb-6">
        Desenvolvedor Backend Java Spring Boot
      </p>
      
      <div class="flex justify-center gap-4">
        <UButton to="/projetos" size="lg" color="primary">
          Ver Projetos
        </UButton>
        <UButton to="/contato" variant="outline" size="lg">
          Contato
        </UButton>
      </div>
    </div>

    <div class="grid md:grid-cols-3 gap-6">
      <UCard>
        <template #header>
          <h3 class="text-lg font-semibold">Experiência</h3>
        </template>
        <p class="text-gray-600 dark:text-gray-300">
          Desenvolvedor com experiência em Java Spring Boot, APIs REST e arquitetura de sistemas.
        </p>
      </UCard>

      <UCard>
        <template #header>
          <h3 class="text-lg font-semibold">Projetos</h3>
        </template>
        <p class="text-gray-600 dark:text-gray-300">
          Projetos open source disponíveis no GitHub com tecnologias modernas.
        </p>
      </UCard>

      <UCard>
        <template #header>
          <h3 class="text-lg font-semibold">Skills</h3>
        </template>
        <p class="text-gray-600 dark:text-gray-300">
          Java, Spring Boot, Nuxt, Docker, PostgreSQL, MongoDB e muito mais.
        </p>
      </UCard>
    </div>
  </div>
</template>
