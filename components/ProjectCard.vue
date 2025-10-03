<script setup lang="ts">
defineProps<{ title: string, desc: string, repo: string }>()
</script>

<template>
  <div class="border rounded-lg p-4 hover:shadow-md transition">
    <h3 class="font-bold">{{ title }}</h3>
    <p class="text-sm">{{ desc }}</p>
    <a :href="repo" target="_blank" class="text-blue-500 underline">Repositório</a>
  </div>
</template>
