import { ref } from 'vue'

export interface ToastOptions {
  title: string
  description?: string
  variant?: 'default' | 'success' | 'error'
  duration?: number
}

interface Toast extends ToastOptions { id: number }

const _toasts = ref<Toast[]>([])

export function useToast() {
  function push(opts: ToastOptions) {
    const id = Date.now() + Math.random()
    _toasts.value.push({ id, duration: 4000, ...opts })
    const ttl = opts.duration ?? 4000
    if (ttl > 0) setTimeout(() => dismiss(id), ttl)
  }
  function dismiss(id: number) {
    const i = _toasts.value.findIndex(t => t.id === id)
    if (i !== -1) _toasts.value.splice(i, 1)
  }
  return { toasts: _toasts, push, dismiss }
}