// https://nuxt.com/docs/api/configuration/nuxt-config
export default defineNuxtConfig({
  compatibilityDate: '2025-10-03',
  devtools: { enabled: true },
  css: ['~/assets/css/main.css'],
  modules: [
    '@nuxt/content',
    '@nuxt/image',
    '@nuxt/ui'
  ],
  runtimeConfig: {
    githubToken: process.env.GITHUB_TOKEN,
    public: {
      githubUser: 'ocoelhogabriel'
    }
  }
})
function defineNuxtConfig(config: {
    compatibilityDate: string;
    devtools: { enabled: boolean };
    css: string[];
    modules: string[];
    runtimeConfig: {
        githubToken: string | undefined;
        public: { githubUser: string };
    };
}) {
    // In actual Nuxt projects, defineNuxtConfig is a helper that just returns the config object.
    // Here, we mimic that behavior.
    return config;
}
