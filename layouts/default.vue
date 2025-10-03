<template>
  <div class="min-h-screen flex flex-col bg-background text-foreground transition-colors">
  <header class="sticky top-0 z-50 bg-background/80 backdrop-blur border-b border-border">
      <div class="container mx-auto px-4">
        <div class="flex justify-between items-center h-16">
          <NuxtLink 
            to="/" 
            class="text-xl font-bold text-gray-900 dark:text-white hover:text-primary-500 transition-colors"
          >
            Gabriel Coelho
          </NuxtLink>
          
          <nav class="hidden md:flex items-center space-x-2">
            <UiButton to="/projetos" variant="ghost" size="sm">Projetos</UiButton>
            <UiButton to="/experiencia" variant="ghost" size="sm">Experiência</UiButton>
            <UiButton to="/habilidades" variant="ghost" size="sm">Habilidades</UiButton>
            <UiButton to="/contato" variant="ghost" size="sm">Contato</UiButton>
            <UiButton to="/curriculo" variant="ghost" size="sm">Currículo</UiButton>
            <UiThemeToggle />
          </nav>

          <!-- Mobile menu button -->
          <div class="md:hidden">
            <button @click="isMenuOpen = !isMenuOpen" class="inline-flex h-10 w-10 items-center justify-center rounded-md border bg-background hover:bg-accent">
              <span class="sr-only">Menu</span>
              <span class="i-heroicons-bars-3 h-5 w-5"></span>
            </button>
          </div>
        </div>

        <!-- Mobile menu -->
        <div v-if="isMenuOpen" class="md:hidden border-t border-border py-4 animate-in fade-in slide-in-from-top-2">
          <nav class="flex flex-col space-y-2">
            <UiButton to="/projetos" variant="ghost" size="sm" @click="isMenuOpen = false">Projetos</UiButton>
            <UiButton to="/experiencia" variant="ghost" size="sm" @click="isMenuOpen = false">Experiência</UiButton>
            <UiButton to="/habilidades" variant="ghost" size="sm" @click="isMenuOpen = false">Habilidades</UiButton>
            <UiButton to="/contato" variant="ghost" size="sm" @click="isMenuOpen = false">Contato</UiButton>
            <UiButton to="/curriculo" variant="ghost" size="sm" @click="isMenuOpen = false">Currículo</UiButton>
          </nav>
        </div>
      </div>
    </header>

    <main class="flex-1">
      <NuxtPage/>
    </main>

    <footer class="bg-background border-t border-border py-6 mt-12">
      <div class="container mx-auto px-4 text-center text-sm text-muted-foreground">
        © {{ new Date().getFullYear() }} Gabriel Coelho. Construído com Nuxt 3 + Tailwind + ShadCN style.
      </div>
    </footer>
  </div>
</template>

<script setup>
const isMenuOpen = ref(false)
</script>
