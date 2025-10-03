
<script setup lang="ts">
const form = ref({
  name: '',
  email: '',
  message: ''
})

const isSubmitting = ref(false)

const submitForm = async () => {
  isSubmitting.value = true
  
  // Simular envio do formulário
  await new Promise(resolve => setTimeout(resolve, 1000))
  
  // Reset form
  form.value = { name: '', email: '', message: '' }
  isSubmitting.value = false
  
  // Mostrar notificação de sucesso (usando Nuxt UI)
  useToast().add({
    title: 'Mensagem enviada!',
    description: 'Obrigado pelo contato. Retornarei em breve.',
    color: 'green'
  })
}

useHead({
  title: 'Contato | Gabriel Coelho',
  meta: [
    { name: 'description', content: 'Entre em contato com Gabriel Coelho' },
    { property: 'og:title', content: 'Contato | Gabriel Coelho' },
    { property: 'og:description', content: 'Entre em contato com Gabriel Coelho' }
  ]
})
</script>

<template>
  <div class="container mx-auto px-4 py-8">
    <div class="max-w-2xl mx-auto">
      <div class="text-center mb-12">
        <h1 class="text-3xl font-bold text-gray-900 dark:text-white mb-4">
          Entre em Contato
        </h1>
        <p class="text-lg text-gray-600 dark:text-gray-300">
          Vamos conversar sobre projetos, oportunidades ou apenas bater um papo
        </p>
      </div>

      <div class="grid md:grid-cols-2 gap-8">
        <!-- Formulário -->
        <UCard>
          <template #header>
            <h2 class="text-xl font-semibold">Envie uma mensagem</h2>
          </template>
          
          <UForm :state="form" @submit="submitForm" class="space-y-4">
            <UFormGroup label="Nome" required>
              <UInput 
                v-model="form.name" 
                placeholder="Seu nome completo"
                required
              />
            </UFormGroup>
            
            <UFormGroup label="Email" required>
              <UInput 
                v-model="form.email" 
                type="email"
                placeholder="seu@email.com"
                required
              />
            </UFormGroup>
            
            <UFormGroup label="Mensagem" required>
              <UTextarea 
                v-model="form.message" 
                placeholder="Sua mensagem..."
                rows="5"
                required
              />
            </UFormGroup>
            
            <UButton 
              type="submit" 
              :loading="isSubmitting"
              size="lg" 
              class="w-full"
            >
              Enviar Mensagem
            </UButton>
          </UForm>
        </UCard>

        <!-- Informações de contato -->
        <div class="space-y-6">
          <UCard>
            <template #header>
              <h2 class="text-xl font-semibold">Informações de Contato</h2>
            </template>
            
            <div class="space-y-4">
              <div class="flex items-center space-x-3">
                <UIcon name="i-heroicons-envelope" class="text-primary-500" />
                <a 
                  href="mailto:gabriel@example.com" 
                  class="text-gray-700 dark:text-gray-300 hover:text-primary-500 transition-colors"
                >
                  gabriel@example.com
                </a>
              </div>
              
              <div class="flex items-center space-x-3">
                <UIcon name="i-simple-icons-github" class="text-primary-500" />
                <a 
                  href="https://github.com/ocoelhogabriel" 
                  target="_blank"
                  class="text-gray-700 dark:text-gray-300 hover:text-primary-500 transition-colors"
                >
                  @ocoelhogabriel
                </a>
              </div>
              
              <div class="flex items-center space-x-3">
                <UIcon name="i-simple-icons-linkedin" class="text-primary-500" />
                <a 
                  href="https://linkedin.com/in/gabriel-coelho" 
                  target="_blank"
                  class="text-gray-700 dark:text-gray-300 hover:text-primary-500 transition-colors"
                >
                  Gabriel Coelho
                </a>
              </div>
            </div>
          </UCard>

          <UCard>
            <template #header>
              <h2 class="text-xl font-semibold">Vamos nos conectar!</h2>
            </template>
            
            <p class="text-gray-600 dark:text-gray-300">
              Estou sempre aberto a novas oportunidades e projetos interessantes. 
              Se você tem uma ideia legal ou quer apenas conversar sobre tecnologia, 
              não hesite em entrar em contato!
            </p>
          </UCard>
        </div>
      </div>
    </div>
  </div>
</template>
