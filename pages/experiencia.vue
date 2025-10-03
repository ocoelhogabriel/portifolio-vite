
<script setup lang="ts">
const experiencias = [
  {
    id: 1,
    cargo: 'Desenvolvedor Backend Sênior',
    empresa: 'Tech Company',
    periodo: '2022 - presente',
    tipo: 'Full-time',
    localizacao: 'São Paulo, SP',
    descricao: 'Desenvolvimento de APIs REST com Spring Boot, integração com bancos de dados PostgreSQL e MongoDB, implementação de testes automatizados e deploy com Docker.',
    tecnologias: ['Java', 'Spring Boot', 'PostgreSQL', 'Docker', 'AWS', 'Redis'],
    conquistas: [
      'Reduzi em 40% o tempo de resposta das APIs principais',
      'Implementei arquitetura de microsserviços para 3 sistemas críticos',
      'Liderei equipe de 4 desenvolvedores júnior e pleno'
    ]
  },
  {
    id: 2,
    cargo: 'Desenvolvedor Full Stack',
    empresa: 'Startup XYZ',
    periodo: '2020 - 2022',
    tipo: 'Full-time',
    localizacao: 'Remote',
    descricao: 'Desenvolvimento de aplicações web com Vue.js no frontend e Spring Boot no backend. Participação ativa em definições de arquitetura e code reviews.',
    tecnologias: ['Java', 'Spring Boot', 'Vue.js', 'MySQL', 'Docker'],
    conquistas: [
      'Desenvolvi sistema de e-commerce do zero que processou R$ 1M+ em vendas',
      'Implementei sistema de pagamentos integrado com múltiplos gateways',
      'Criei dashboard administrativo com métricas em tempo real'
    ]
  },
  {
    id: 3,
    cargo: 'Desenvolvedor Java Júnior',
    empresa: 'Software House ABC',
    periodo: '2019 - 2020',
    tipo: 'Full-time',
    localizacao: 'São Paulo, SP',
    descricao: 'Primeiro emprego como desenvolvedor, focado em manutenção e desenvolvimento de novas funcionalidades em sistemas legados.',
    tecnologias: ['Java', 'JSF', 'JPA', 'Oracle DB', 'SVN'],
    conquistas: [
      'Migrei 5 módulos de sistema legado para nova arquitetura',
      'Participei de 15+ projetos de manutenção evolutiva',
      'Recebi prêmio de "Funcionário do Mês" por 2 vezes'
    ]
  }
]

useHead({
  title: 'Experiência | Gabriel Coelho',
  meta: [
    { name: 'description', content: 'Experiência profissional detalhada de Gabriel Coelho' },
    { property: 'og:title', content: 'Experiência | Gabriel Coelho' },
    { property: 'og:description', content: 'Experiência profissional detalhada de Gabriel Coelho' }
  ]
})
</script>

<template>
  <div class="container mx-auto px-4 py-8">
    <div class="text-center mb-12">
      <h1 class="text-3xl font-bold text-gray-900 dark:text-white mb-4">
        Experiência Profissional
      </h1>
      <p class="text-lg text-gray-600 dark:text-gray-300">
        Minha jornada como desenvolvedor ao longo dos anos
      </p>
    </div>

    <div class="max-w-4xl mx-auto">
      <!-- Timeline vertical -->
      <div class="relative">
        <!-- Linha vertical -->
        <div class="absolute left-8 top-0 bottom-0 w-0.5 bg-gray-200 dark:bg-gray-700"></div>
        
        <div class="space-y-12">
          <div v-for="(exp, index) in experiencias" :key="exp.id" class="relative">
            <!-- Bolinha na timeline -->
            <div class="absolute left-6 w-4 h-4 bg-primary-500 rounded-full border-4 border-white dark:border-gray-900"></div>
            
            <!-- Card de experiência -->
            <div class="ml-20">
              <UCard class="hover:shadow-lg transition-shadow">
                <template #header>
                  <div class="flex justify-between items-start">
                    <div>
                      <h3 class="text-xl font-bold text-gray-900 dark:text-white">
                        {{ exp.cargo }}
                      </h3>
                      <p class="text-primary-600 dark:text-primary-400 font-medium">
                        {{ exp.empresa }}
                      </p>
                    </div>
                    <UBadge :label="exp.tipo" variant="soft" />
                  </div>
                  
                  <div class="flex items-center space-x-4 mt-2 text-sm text-gray-500 dark:text-gray-400">
                    <span class="flex items-center">
                      <UIcon name="i-heroicons-calendar" class="mr-1" />
                      {{ exp.periodo }}
                    </span>
                    <span class="flex items-center">
                      <UIcon name="i-heroicons-map-pin" class="mr-1" />
                      {{ exp.localizacao }}
                    </span>
                  </div>
                </template>
                
                <div class="space-y-6">
                  <!-- Descrição -->
                  <p class="text-gray-700 dark:text-gray-300">
                    {{ exp.descricao }}
                  </p>
                  
                  <!-- Tecnologias -->
                  <div>
                    <h4 class="text-sm font-semibold text-gray-900 dark:text-white mb-2">
                      Tecnologias utilizadas:
                    </h4>
                    <div class="flex flex-wrap gap-2">
                      <UBadge 
                        v-for="tech in exp.tecnologias" 
                        :key="tech" 
                        :label="tech" 
                        size="sm"
                        variant="outline"
                      />
                    </div>
                  </div>
                  
                  <!-- Conquistas -->
                  <div>
                    <h4 class="text-sm font-semibold text-gray-900 dark:text-white mb-3">
                      Principais conquistas:
                    </h4>
                    <ul class="space-y-2">
                      <li 
                        v-for="conquista in exp.conquistas" 
                        :key="conquista"
                        class="flex items-start space-x-2"
                      >
                        <UIcon name="i-heroicons-check-circle" class="text-green-500 mt-0.5 flex-shrink-0" />
                        <span class="text-gray-700 dark:text-gray-300 text-sm">
                          {{ conquista }}
                        </span>
                      </li>
                    </ul>
                  </div>
                </div>
              </UCard>
            </div>
          </div>
        </div>
      </div>
    </div>

    <!-- CTA Section -->
    <div class="text-center mt-16">
      <h2 class="text-2xl font-bold text-gray-900 dark:text-white mb-4">
        Interessado em trabalhar comigo?
      </h2>
      <p class="text-gray-600 dark:text-gray-300 mb-6">
        Estou sempre aberto a novas oportunidades e projetos desafiadores
      </p>
      <div class="flex justify-center gap-4">
        <UButton to="/contato" size="lg">
          Entre em contato
        </UButton>
        <UButton to="/curriculo" variant="outline" size="lg">
          Ver currículo completo
        </UButton>
      </div>
    </div>
  </div>
</template>
