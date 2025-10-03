<script setup lang="ts">
const model = defineModel<string>({ default: '' })
defineProps<{ rows?: number; placeholder?: string }>()
</script>
<template>
  <textarea v-model="model" :rows="rows || 5" :placeholder="placeholder" class="w-full rounded-md border border-input bg-background px-3 py-2 text-sm ring-offset-background focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 disabled:cursor-not-allowed disabled:opacity-50"></textarea>
</template>