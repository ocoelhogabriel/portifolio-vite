<script setup lang="ts">
import { onMounted, ref } from 'vue'
const isDark = ref(false)
onMounted(() => {
  isDark.value = document.documentElement.classList.contains('dark')
})
function toggle() {
  isDark.value = !isDark.value
  document.documentElement.classList.toggle('dark', isDark.value)
  localStorage.setItem('theme', isDark.value ? 'dark' : 'light')
}
onMounted(() => {
  const stored = localStorage.getItem('theme')
  if (stored) {
    isDark.value = stored === 'dark'
    document.documentElement.classList.toggle('dark', isDark.value)
  }
})
</script>
<template>
  <button @click="toggle" class="inline-flex h-9 w-9 items-center justify-center rounded-md border bg-background hover:bg-accent transition-colors" :aria-label="isDark ? 'Ativar tema claro' : 'Ativar tema escuro'">
    <span v-if="!isDark">🌙</span>
    <span v-else>☀️</span>
  </button>
</template>