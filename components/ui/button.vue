<script setup lang="ts">
import { computed } from 'vue'
const props = withDefaults(defineProps<{
  variant?: 'default' | 'outline' | 'ghost' | 'destructive' | 'secondary'
  size?: 'sm' | 'md' | 'lg' | 'icon'
  as?: string
  to?: string
  disabled?: boolean
  loading?: boolean
}>(), {
  variant: 'default',
  size: 'md',
  as: 'button'
})

const base = 'inline-flex items-center justify-center gap-2 whitespace-nowrap rounded-md text-sm font-medium transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring disabled:opacity-50 disabled:cursor-not-allowed'
const variants: Record<string,string> = {
  default: 'bg-primary text-primary-foreground hover:bg-primary/90',
  outline: 'border border-input bg-transparent hover:bg-accent hover:text-accent-foreground',
  ghost: 'hover:bg-accent hover:text-accent-foreground',
  destructive: 'bg-destructive text-destructive-foreground hover:bg-destructive/90',
  secondary: 'bg-secondary text-secondary-foreground hover:bg-secondary/80'
}
const sizes: Record<string,string> = {
  sm: 'h-8 px-3',
  md: 'h-10 px-4',
  lg: 'h-12 px-6 text-base',
  icon: 'h-10 w-10'
}
const classes = computed(() => [base, variants[props.variant], sizes[props.size]].join(' '))
</script>

<template>
  <component :is="props.to ? 'NuxtLink' : props.as" :to="props.to" :disabled="disabled || loading" :class="classes">
    <slot v-if="!loading" />
    <span v-else class="flex items-center gap-2"><span class="animate-spin h-4 w-4 border-2 border-current border-t-transparent rounded-full" />Carregando...</span>
  </component>
</template>