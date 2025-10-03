
<script setup lang="ts">
// Buscar dados do currículo do arquivo YAML
const { data: cv } = await useAsyncData('curriculo', () => queryContent('curriculo').findOne())

useHead({
  title: 'Currículo | Gabriel Coelho',
  meta: [
    { name: 'description', content: 'Currículo completo de Gabriel Coelho - Desenvolvedor Backend Java Spring Boot' },
    { property: 'og:title', content: 'Currículo | Gabriel Coelho' },
    { property: 'og:description', content: 'Currículo completo de Gabriel Coelho - Desenvolvedor Backend Java Spring Boot' }
  ]
})

const downloadPDF = () => {
  // Implementar download do PDF aqui
  useToast().add({
    title: 'Em breve!',
    description: 'Funcionalidade de download do PDF será implementada.',
    color: 'blue'
  })
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
          <UButton 
            icon="i-heroicons-arrow-down-tray" 
            size="lg"
            @click="downloadPDF"
          >
            Baixar PDF
          </UButton>
        </div>
      </div>

      <div class="grid md:grid-cols-3 gap-8">
        <!-- Coluna Principal -->
        <div class="md:col-span-2 space-y-8">
          <!-- Experiência -->
          <UCard>
            <template #header>
              <h2 class="text-2xl font-semibold flex items-center">
                <UIcon name="i-heroicons-briefcase" class="mr-2 text-primary-500" />
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
                      <UIcon name="i-heroicons-check-circle" class="text-green-500 mt-0.5 flex-shrink-0" />
                      <span class="text-gray-600 dark:text-gray-300">{{ conquista }}</span>
                    </li>
                  </ul>
                </div>
                
                <!-- Tecnologias -->
                <div v-if="exp.tecnologias" class="flex flex-wrap gap-2">
                  <UBadge v-for="tech in exp.tecnologias" :key="tech" :label="tech" size="sm" variant="outline" />
                </div>
              </div>
            </div>
          </UCard>

          <!-- Educação -->
          <UCard>
            <template #header>
              <h2 class="text-2xl font-semibold flex items-center">
                <UIcon name="i-heroicons-academic-cap" class="mr-2 text-primary-500" />
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
          </UCard>

          <!-- Certificações -->
          <UCard v-if="cv?.certificacoes">
            <template #header>
              <h2 class="text-2xl font-semibold flex items-center">
                <UIcon name="i-heroicons-shield-check" class="mr-2 text-primary-500" />
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
          </UCard>

          <!-- Projetos de Destaque -->
          <UCard v-if="cv?.projetos_destaque">
            <template #header>
              <h2 class="text-2xl font-semibold flex items-center">
                <UIcon name="i-heroicons-star" class="mr-2 text-primary-500" />
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
                  <UBadge v-for="tech in projeto.tecnologias" :key="tech" :label="tech" size="sm" variant="soft" />
                </div>
              </div>
            </div>
          </UCard>
        </div>

        <!-- Sidebar -->
        <div class="space-y-6">
          <!-- Contato -->
          <UCard>
            <template #header>
              <h2 class="text-xl font-semibold flex items-center">
                <UIcon name="i-heroicons-phone" class="mr-2 text-primary-500" />
                Contato
              </h2>
            </template>
            
            <div class="space-y-3">
              <div class="flex items-center space-x-2">
                <UIcon name="i-heroicons-envelope" class="text-gray-500" />
                <a 
                  :href="`mailto:${cv?.contato?.email}`" 
                  class="text-sm text-gray-700 dark:text-gray-300 hover:text-primary-500 transition-colors"
                >
                  {{ cv?.contato?.email }}
                </a>
              </div>
              
              <div v-if="cv?.contato?.telefone" class="flex items-center space-x-2">
                <UIcon name="i-heroicons-phone" class="text-gray-500" />
                <span class="text-sm text-gray-700 dark:text-gray-300">
                  {{ cv.contato.telefone }}
                </span>
              </div>
              
              <div v-if="cv?.contato?.localizacao" class="flex items-center space-x-2">
                <UIcon name="i-heroicons-map-pin" class="text-gray-500" />
                <span class="text-sm text-gray-700 dark:text-gray-300">
                  {{ cv.contato.localizacao }}
                </span>
              </div>
              
              <div class="flex items-center space-x-2">
                <UIcon name="i-simple-icons-linkedin" class="text-gray-500" />
                <a 
                  :href="cv?.contato?.linkedin" 
                  target="_blank"
                  class="text-sm text-gray-700 dark:text-gray-300 hover:text-primary-500 transition-colors"
                >
                  LinkedIn
                </a>
              </div>
              
              <div class="flex items-center space-x-2">
                <UIcon name="i-simple-icons-github" class="text-gray-500" />
                <a 
                  :href="cv?.contato?.github" 
                  target="_blank"
                  class="text-sm text-gray-700 dark:text-gray-300 hover:text-primary-500 transition-colors"
                >
                  GitHub
                </a>
              </div>
            </div>
          </UCard>

          <!-- Habilidades Backend -->
          <UCard v-if="cv?.habilidades?.backend">
            <template #header>
              <h2 class="text-xl font-semibold flex items-center">
                <UIcon name="i-heroicons-server" class="mr-2 text-primary-500" />
                Backend
              </h2>
            </template>
            
            <div class="space-y-3">
              <div v-for="skill in cv.habilidades.backend" :key="skill.nome" class="flex justify-between items-center">
                <span class="text-sm font-medium">{{ skill.nome }}</span>
                <UBadge :label="`${skill.nivel}%`" variant="soft" size="sm" />
              </div>
            </div>
          </UCard>

          <!-- Habilidades Frontend -->
          <UCard v-if="cv?.habilidades?.frontend">
            <template #header>
              <h2 class="text-xl font-semibold flex items-center">
                <UIcon name="i-heroicons-computer-desktop" class="mr-2 text-primary-500" />
                Frontend
              </h2>
            </template>
            
            <div class="space-y-3">
              <div v-for="skill in cv.habilidades.frontend" :key="skill.nome" class="flex justify-between items-center">
                <span class="text-sm font-medium">{{ skill.nome }}</span>
                <UBadge :label="`${skill.nivel}%`" variant="soft" size="sm" />
              </div>
            </div>
          </UCard>

          <!-- Soft Skills -->
          <UCard v-if="cv?.soft_skills">
            <template #header>
              <h2 class="text-xl font-semibold flex items-center">
                <UIcon name="i-heroicons-user-group" class="mr-2 text-primary-500" />
                Soft Skills
              </h2>
            </template>
            
            <div class="flex flex-wrap gap-2">
              <UBadge 
                v-for="skill in cv.soft_skills" 
                :key="skill" 
                :label="skill" 
                variant="outline"
                size="sm"
              />
            </div>
          </UCard>

          <!-- Idiomas -->
          <UCard v-if="cv?.idiomas">
            <template #header>
              <h2 class="text-xl font-semibold flex items-center">
                <UIcon name="i-heroicons-language" class="mr-2 text-primary-500" />
                Idiomas
              </h2>
            </template>
            
            <div class="space-y-3">
              <div v-for="idioma in cv.idiomas" :key="idioma.idioma" class="flex justify-between items-center">
                <span class="text-sm font-medium">{{ idioma.idioma }}</span>
                <UBadge :label="idioma.nivel" variant="soft" size="sm" />
              </div>
            </div>
          </UCard>
        </div>
      </div>
    </div>
  </div>
</template>


