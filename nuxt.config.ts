// https://nuxt.com/docs/api/configuration/nuxt-config
export default defineNuxtConfig({
  compatibilityDate: '2025-10-03',
  devtools: { enabled: true },
  css: ['~/assets/css/main.css'],
  modules: [
    '@nuxt/content',
    '@nuxt/image'
  ],
  nitro: {
    sourceMap: false,
    experimental: {
      openAPI: false
    }
  },
  experimental: {
    payloadExtraction: false
  },
  future: {
    typescriptBundlerResolution: true
  },
  typescript: {
    strict: true,
    typeCheck: true
  },
  runtimeConfig: {
    githubToken: process.env.GITHUB_TOKEN,
    public: {
      githubUser: 'ocoelhogabriel'
    }
  },
  app: {
    head: {
      meta: [
        { name: 'viewport', content: 'width=device-width, initial-scale=1' },
        { name: 'theme-color', content: '#0f172a' }
      ]
    }
  }
})
