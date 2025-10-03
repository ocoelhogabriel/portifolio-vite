<script setup lang="ts">
import { useToast } from '@/composables/useToast'
const { toasts, dismiss } = useToast()
</script>
<template>
  <div class="fixed z-50 top-4 right-4 flex flex-col gap-2 w-80">
    <TransitionGroup name="toast" tag="div">
      <div v-for="t in toasts" :key="t.id" class="rounded-md border bg-background p-4 shadow-md text-sm">
        <div class="flex justify-between items-start gap-4">
          <div>
            <p class="font-semibold" v-if="t.title">{{ t.title }}</p>
            <p class="text-muted-foreground" v-if="t.description">{{ t.description }}</p>
          </div>
          <button class="text-xs opacity-60 hover:opacity-100" @click="dismiss(t.id)">✕</button>
        </div>
      </div>
    </TransitionGroup>
  </div>
</template>
<style scoped>
.toast-enter-from, .toast-leave-to { opacity: 0; transform: translateY(-4px); }
.toast-enter-active, .toast-leave-active { transition: all .15s ease; }
</style>