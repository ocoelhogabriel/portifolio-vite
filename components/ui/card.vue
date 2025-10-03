<template>
  <div class="rounded-lg border bg-card text-card-foreground shadow-sm">
    <div v-if="$slots.header" class="p-4 border-b"><slot name="header" /></div>
    <div class="p-4"><slot /></div>
    <div v-if="$slots.footer" class="p-4 border-t"><slot name="footer" /></div>
  </div>
</template>