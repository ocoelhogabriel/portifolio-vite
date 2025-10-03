
<script setup lang="ts">
const skills = [
  {
    category: 'Backend',
    items: [
      { name: 'Java', level: 90, icon: 'i-simple-icons-java' },
      { name: 'Spring Boot', level: 85, icon: 'i-simple-icons-spring' },
      { name: 'PostgreSQL', level: 80, icon: 'i-simple-icons-postgresql' },
      { name: 'MongoDB', level: 75, icon: 'i-simple-icons-mongodb' },
      { name: 'Redis', level: 70, icon: 'i-simple-icons-redis' }
    ]
  },
  {
    category: 'Frontend',
    items: [
      { name: 'Vue.js', level: 80, icon: 'i-simple-icons-vuedotjs' },
      { name: 'Nuxt', level: 75, icon: 'i-simple-icons-nuxtdotjs' },
      { name: 'JavaScript', level: 85, icon: 'i-simple-icons-javascript' },
      { name: 'TypeScript', level: 80, icon: 'i-simple-icons-typescript' },
      { name: 'TailwindCSS', level: 85, icon: 'i-simple-icons-tailwindcss' }
    ]
  },
  {
    category: 'DevOps & Tools',
    items: [
      { name: 'Docker', level: 80, icon: 'i-simple-icons-docker' },
      { name: 'Git', level: 90, icon: 'i-simple-icons-git' },
      { name: 'Linux', level: 75, icon: 'i-simple-icons-linux' },
      { name: 'AWS', level: 65, icon: 'i-simple-icons-amazonaws' },
      { name: 'Jenkins', level: 60, icon: 'i-simple-icons-jenkins' }
    ]
  }
]

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

    <div class="space-y-8">
      <div v-for="skillGroup in skills" :key="skillGroup.category">
        <h2 class="text-2xl font-semibold text-gray-900 dark:text-white mb-6">
          {{ skillGroup.category }}
        </h2>
        
        <div class="grid md:grid-cols-2 lg:grid-cols-3 gap-4">
          <UCard v-for="skill in skillGroup.items" :key="skill.name">
            <div class="flex items-center justify-between mb-3">
              <div class="flex items-center space-x-3">
                <UIcon :name="skill.icon" class="text-2xl text-primary-500" />
                <span class="font-medium text-gray-900 dark:text-white">
                  {{ skill.name }}
                </span>
              </div>
              <span class="text-sm text-gray-500 dark:text-gray-400">
                {{ skill.level }}%
              </span>
            </div>
            
            <div class="w-full bg-gray-200 dark:bg-gray-700 rounded-full h-2">
              <div 
                class="bg-primary-500 h-2 rounded-full transition-all duration-500"
                :style="{ width: `${skill.level}%` }"
              ></div>
            </div>
          </UCard>
        </div>
      </div>
    </div>

    <!-- Certificações e outros -->
    <div class="mt-16">
      <h2 class="text-2xl font-semibold text-gray-900 dark:text-white mb-6 text-center">
        Outras Competências
      </h2>
      
      <div class="grid md:grid-cols-2 gap-6">
        <UCard>
          <template #header>
            <h3 class="text-lg font-semibold flex items-center">
              <UIcon name="i-heroicons-academic-cap" class="mr-2 text-primary-500" />
              Soft Skills
            </h3>
          </template>
          
          <div class="flex flex-wrap gap-2">
            <UBadge label="Trabalho em equipe" variant="soft" />
            <UBadge label="Comunicação" variant="soft" />
            <UBadge label="Resolução de problemas" variant="soft" />
            <UBadge label="Aprendizado contínuo" variant="soft" />
            <UBadge label="Liderança técnica" variant="soft" />
          </div>
        </UCard>

        <UCard>
          <template #header>
            <h3 class="text-lg font-semibold flex items-center">
              <UIcon name="i-heroicons-language" class="mr-2 text-primary-500" />
              Idiomas
            </h3>
          </template>
          
          <div class="space-y-3">
            <div class="flex justify-between items-center">
              <span>Português</span>
              <UBadge label="Nativo" color="green" />
            </div>
            <div class="flex justify-between items-center">
              <span>Inglês</span>
              <UBadge label="Intermediário" color="blue" />
            </div>
          </div>
        </UCard>
      </div>
    </div>
  </div>
</template>
