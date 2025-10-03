<script setup lang="ts">
const props = defineProps<{ name: string; class?: string }>()
</script>
<template>
  <span :class="[props.name, props.class]" aria-hidden="true" />
</template>