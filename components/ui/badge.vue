<script setup lang="ts">
const props = withDefaults(defineProps<{ variant?: 'default' | 'secondary' | 'outline' | 'success' | 'destructive'; size?: 'sm' | 'md' }>(), { variant: 'default', size: 'md' })
const variantMap: Record<string,string> = {
  default: 'bg-primary text-primary-foreground',
  secondary: 'bg-secondary text-secondary-foreground',
  outline: 'border border-border',
  success: 'bg-emerald-600 text-white',
  destructive: 'bg-destructive text-destructive-foreground'
}
const sizeMap: Record<string,string> = { sm: 'text-xs px-2 py-0.5', md: 'text-xs px-2.5 py-0.5' }
</script>
<template>
  <span :class="['inline-flex items-center rounded-full font-medium', variantMap[props.variant], sizeMap[props.size]]">
    <slot />
  </span>
</template>