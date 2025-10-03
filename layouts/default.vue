<template>
  <div class="min-h-screen flex flex-col bg-gray-50 dark:bg-gray-900">
    <header class="sticky top-0 z-50 bg-white dark:bg-gray-800 border-b border-gray-200 dark:border-gray-700">
      <div class="container mx-auto px-4">
        <div class="flex justify-between items-center h-16">
          <NuxtLink 
            to="/" 
            class="text-xl font-bold text-gray-900 dark:text-white hover:text-primary-500 transition-colors"
          >
            Gabriel Coelho
          </NuxtLink>
          
          <nav class="hidden md:flex items-center space-x-6">
            <UButton to="/projetos" variant="ghost" size="sm">
              Projetos
            </UButton>
            <UButton to="/experiencia" variant="ghost" size="sm">
              Experiência
            </UButton>
            <UButton to="/habilidades" variant="ghost" size="sm">
              Habilidades
            </UButton>
            <UButton to="/contato" variant="ghost" size="sm">
              Contato
            </UButton>
            <UButton to="/curriculo" variant="ghost" size="sm">
              Currículo
            </UButton>
            <UColorModeButton />
          </nav>

          <!-- Mobile menu button -->
          <div class="md:hidden">
            <UButton 
              icon="i-heroicons-bars-3" 
              variant="ghost" 
              size="sm"
              @click="isMenuOpen = !isMenuOpen"
            />
          </div>
        </div>

        <!-- Mobile menu -->
        <div v-if="isMenuOpen" class="md:hidden border-t border-gray-200 dark:border-gray-700 py-4">
          <nav class="flex flex-col space-y-2">
            <UButton to="/projetos" variant="ghost" size="sm" @click="isMenuOpen = false">
              Projetos
            </UButton>
            <UButton to="/experiencia" variant="ghost" size="sm" @click="isMenuOpen = false">
              Experiência
            </UButton>
            <UButton to="/habilidades" variant="ghost" size="sm" @click="isMenuOpen = false">
              Habilidades
            </UButton>
            <UButton to="/contato" variant="ghost" size="sm" @click="isMenuOpen = false">
              Contato
            </UButton>
            <UButton to="/curriculo" variant="ghost" size="sm" @click="isMenuOpen = false">
              Currículo
            </UButton>
          </nav>
        </div>
      </div>
    </header>

    <main class="flex-1">
      <NuxtPage/>
    </main>

    <footer class="bg-white dark:bg-gray-800 border-t border-gray-200 dark:border-gray-700 py-6">
      <div class="container mx-auto px-4 text-center text-sm text-gray-600 dark:text-gray-300">
        © {{ new Date().getFullYear() }} Gabriel Coelho. Desenvolvido com Nuxt 3 e Nuxt UI.
      </div>
    </footer>
  </div>
</template>

<script setup>
const isMenuOpen = ref(false)
</script>
