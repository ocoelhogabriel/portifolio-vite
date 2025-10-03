
<script setup lang="ts">
// Dados mockados para evitar problemas com API do GitHub por enquanto
const repos = ref([
  {
    id: 1,
    name: 'portfolio',
    description: 'Meu portfólio pessoal desenvolvido com Nuxt 3',
    html_url: 'https://github.com/ocoelhogabriel/portfolio',
    language: 'Vue',
    stargazers_count: 0,
    updated_at: '2025-10-03'
  },
  {
    id: 2,
    name: 'api-rest-java',
    description: 'API REST desenvolvida com Spring Boot e PostgreSQL',
    html_url: 'https://github.com/ocoelhogabriel/api-rest-java',
    language: 'Java',
    stargazers_count: 5,
    updated_at: '2025-09-20'
  },
  {
    id: 3,
    name: 'docker-compose-services',
    description: 'Configurações Docker Compose para diversos serviços',
    html_url: 'https://github.com/ocoelhogabriel/docker-compose-services',
    language: 'Docker',
    stargazers_count: 2,
    updated_at: '2025-09-15'
  }
])

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
      <UCard v-for="repo in repos" :key="repo.id" class="hover:shadow-lg transition-shadow">
        <template #header>
          <div class="flex justify-between items-start">
            <h3 class="text-lg font-semibold text-gray-900 dark:text-white">
              {{ repo.name }}
            </h3>
            <UBadge v-if="repo.language" :label="repo.language" variant="soft" />
          </div>
        </template>
        
        <p class="text-gray-600 dark:text-gray-300 mb-4">
          {{ repo.description || 'Sem descrição disponível' }}
        </p>
        
        <div class="flex justify-between items-center">
          <div class="flex items-center space-x-4 text-sm text-gray-500 dark:text-gray-400">
            <span class="flex items-center">
              <UIcon name="i-heroicons-star" class="mr-1" />
              {{ repo.stargazers_count }}
            </span>
            <span>
              {{ new Date(repo.updated_at).toLocaleDateString('pt-BR') }}
            </span>
          </div>
          
          <UButton 
            :to="repo.html_url" 
            external 
            target="_blank"
            variant="outline" 
            size="sm"
          >
            Ver no GitHub
          </UButton>
        </div>
      </UCard>
    </div>
  </div>
</template>
