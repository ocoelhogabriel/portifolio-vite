import { defineContentConfig, defineCollection, z } from '@nuxt/content'

// Schemas básicos para garantir consistência das coleções
export default defineContentConfig({
  collections: {
    experiencia: defineCollection({
      type: 'data',
      source: 'experiencia',
      schema: z.object({
        title: z.string(),
        slug: z.string(),
        cargo: z.string(),
        periodo: z.string(),
        localizacao: z.string().optional(),
        tipo: z.string().optional(),
        resumo: z.string().optional(),
        stack_principal: z.array(z.string()).optional(),
        responsabilidades: z.array(z.string()).optional(),
        conquistas: z.array(z.string()).optional(),
        tecnologias: z.record(z.any()).optional()
      })
    }),
    projetos: defineCollection({
      type: 'data',
      source: 'projetos',
      schema: z.object({
        title: z.string(),
        slug: z.string(),
        descricao: z.string(),
        resultado: z.string().optional(),
        tecnologias: z.array(z.string()),
        links: z.record(z.string().nullable()).optional(),
        status: z.string().optional(),
        tags: z.array(z.string()).optional()
      })
    }),
    habilidades: defineCollection({
      type: 'data',
      source: 'habilidades',
      schema: z.object({
        grupos: z.array(z.object({
          nome: z.string(),
            itens: z.array(z.object({
              nome: z.string(),
              nivel: z.number().min(0).max(100)
            }))
        })),
        soft_skills: z.array(z.string()).optional()
      })
    }),
    idiomas: defineCollection({
      type: 'data',
      source: 'idiomas',
      schema: z.object({
        idiomas: z.array(z.object({
          idioma: z.string(),
          nivel: z.string(),
          descricao: z.string().optional()
        }))
      })
    })
  }
})
