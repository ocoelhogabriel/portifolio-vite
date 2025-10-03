// Declaração simples para satisfazer o type checker sem depender dos tipos internos
// Pode ser refinada importando tipos exatos de @nuxt/content se necessário.
/* eslint-disable @typescript-eslint/no-explicit-any */
declare function queryContent(...segments: string[]): any
