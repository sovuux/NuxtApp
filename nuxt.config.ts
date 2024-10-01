import Aura from "@primevue/themes/aura";
// https://nuxt.com/docs/api/configuration/nuxt-config
export default defineNuxtConfig({
  compatibilityDate: "2024-04-03",
  devtools: { enabled: true },
  modules: [
    "@vueuse/nuxt",
    "@nuxt/fonts",
    "@nuxt/image",
    "@pinia/nuxt",
    "dayjs-nuxt",
    "@primevue/nuxt-module",
    "nuxt-file-storage",
    "nuxt-typed-router",
    "@nuxt/eslint",
  ],
  fonts: {
    families: [{ name: "montserrat", provider: "google" }],
  },
  css: ["~/assets/scss/main.scss"],
  vite: {
    css: {
      preprocessorOptions: {
        scss: {
          additionalData: `
          @use "~/assets/scss/_vars.scss" as *;
          @use "~/assets/scss/_mixins.scss" as *;
        `,
        },
      },
    },
  },
  primevue: {
    usePrimeVue: true,
    components: {
      include: "*",
    },
    options: {
      theme: {
        preset: Aura,
      },
    },
  },
  app: {
    head: {
      link: [{ rel: "icon", href: "/logo.png" }],
    },
  },
});
