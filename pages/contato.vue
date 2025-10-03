
<script setup lang="ts">
import { ref } from 'vue'
import { useToast } from '@/composables/useToast'
import { useHead } from 'nuxt/app'
// useHead is auto-imported by Nuxt; comment retained for clarity
const form = ref({
  name: '',
  email: '',
  message: ''
})

const isSubmitting = ref(false)

const { push: pushToast } = useToast()

const submitForm = async () => {
  isSubmitting.value = true
  
  // Simular envio do formulário
  await new Promise(resolve => setTimeout(resolve, 1000))
  
  // Reset form
  form.value = { name: '', email: '', message: '' }
  isSubmitting.value = false
  
  // Mostrar notificação de sucesso (usando Nuxt UI)
  pushToast({ title: 'Mensagem enviada!', description: 'Obrigado pelo contato. Retornarei em breve.' })
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
        <UiCard>
          <template #header><h2 class="text-xl font-semibold">Envie uma mensagem</h2></template>
          <form @submit.prevent="submitForm" class="space-y-4">
            <div class="space-y-2">
              <label class="text-sm font-medium">Nome</label>
              <UiInput v-model="form.name" placeholder="Seu nome completo" required />
            </div>
            <div class="space-y-2">
              <label class="text-sm font-medium">Email</label>
              <UiInput v-model="form.email" type="email" placeholder="seu@email.com" required />
            </div>
            <div class="space-y-2">
              <label class="text-sm font-medium">Mensagem</label>
              <UiTextarea v-model="form.message" placeholder="Sua mensagem..." :rows="5" required />
            </div>
            <UiButton type="submit" :loading="isSubmitting" class="w-full" size="lg">Enviar Mensagem</UiButton>
          </form>
        </UiCard>
        <div class="space-y-6">
          <UiCard>
            <template #header><h2 class="text-xl font-semibold">Informações de Contato</h2></template>
            <div class="space-y-4 text-sm">
              <div class="flex items-center gap-3">
                <span class="i-heroicons-envelope h-5 w-5 text-primary" />
                <a href="mailto:gabriel@example.com" class="hover:underline">gabriel@example.com</a>
              </div>
              <div class="flex items-center gap-3">
                <span class="i-simple-icons-github h-5 w-5 text-primary" />
                <a href="https://github.com/ocoelhogabriel" target="_blank" class="hover:underline">@ocoelhogabriel</a>
              </div>
              <div class="flex items-center gap-3">
                <span class="i-simple-icons-linkedin h-5 w-5 text-primary" />
                <a href="https://linkedin.com/in/gabriel-coelho" target="_blank" class="hover:underline">Gabriel Coelho</a>
              </div>
            </div>
          </UiCard>
          <UiCard>
            <template #header><h2 class="text-xl font-semibold">Vamos nos conectar!</h2></template>
            <p class="text-muted-foreground text-sm leading-relaxed">Estou sempre aberto a novas oportunidades e projetos interessantes. Se você tem uma ideia legal ou quer apenas conversar sobre tecnologia, não hesite em entrar em contato!</p>
          </UiCard>
        </div>
      </div>
    </div>
  </div>
</template>
