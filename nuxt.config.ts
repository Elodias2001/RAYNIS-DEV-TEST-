import { fileURLToPath } from "node:url"
import vuetify from "vite-plugin-vuetify"
import svgLoader from "vite-svg-loader"

// https://nuxt.com/docs/api/configuration/nuxt-config
export default defineNuxtConfig({
  modules: [
    "@vueuse/nuxt",
    "@nuxtjs/device",
    "@pinia/nuxt",
    '@pinia-plugin-persistedstate/nuxt',
    "@nuxtjs/tailwindcss",
    "@nuxtjs/color-mode",
    "nuxt-icon",
    "@samk-dev/nuxt-vcalendar",
    "@vee-validate/nuxt",
    "@morev/vue-transitions/nuxt",
    "notivue/nuxt",
    "@vite-pwa/nuxt",
  ],

  pinia: {
    storesDirs: ['./stores/**'],
    autoImports: ['defineStore', "acceptHMRUpdate", 'storeToRefs'],
  },
  
  app: {
    head: {
      titleTemplate: "%s - RAYNIS TEST",
      title: "RAYNIS TEST",
      meta: [
        { charset: "utf-8" },
        { name: "viewport", content: "width=device-width, initial-scale=1" },
        {
          hid: "description",
          name: "description",
          content:
            "Une plateforme centralisée pour la gestion d'événements, où toutes les fonctionnalités et services liés aux événements sont accessibles.",
        },
      ],
      link: [
        {
          rel: "icon",
          type: "image/x-icon",
          href: "/favicon.ico",
        },
      ],
    },
  },
  runtimeConfig: {
    public: {
      apiUrl: "http://localhost:8000/api",
      frontURL: "http://localhost:3000",

      // apiBaseUrl: process.env.NUXT_API_URL,
      // baseURL: process.env.NUXT_APP_URL,
    },
  },

  devtools: {
    enabled: true,
  },

  css: ["@core/scss/template/index.scss",
    "@styles/styles.scss",
    "@/plugins/iconify/icons.css",
    "notivue/notification.css", // Only needed if using built-in notifications
    "notivue/animations.css", // Only needed if using built-in animations
    "notivue/notification-progress.css"],
  
  pwa: {
    /* PWA options */
  },
  
  notivue: {
    position: "top-right",
    limit: 3, // Combien pourrait s'afficher en meme temps
    enqueue: false, // Pas de notifs en attente
    avoidDuplicates: true, // Si c'est la meme chose ne remplace pas
    // pauseOnHover: true,
    // pauseOnTouch: true,
    notifications: {
      global: {
        duration: 5000,
      },
    },

    // animations: {
    //   enter: 'pop-in',
    //   leave: 'pop-out',
    //   clearAll: 'fade',
    // },
    transition: 'transform 200ms ease-in-out',
  },

  components: {
    dirs: [
      {
        path: "@/@core/components",
        pathPrefix: false,
      },
      {
        path: "~/components/global",
        global: true,
      },
      {
        path: "~/components",
        pathPrefix: false,
      },
    ],
  },

  plugins: ["@/plugins/vuetify/index.js", "@/plugins/iconify/index.js"], //, "@/plugins/pinia.js"

  imports: {
    dirs: ["./@core/utils", "./@core/composable/", "./plugins/*/composables/*", "./stores"],
    presets: [],
    imports: [{
      from: "tailwind-variants",
      name: "tv",
    }, {
      from: "tailwind-variants",
      name: "VariantProps",
      type: true,
    }, {
      from: "vue-sonner",
      name: "toast",
      as: "useSonner",
    }],
    
  },

  hooks: {},

  experimental: {
    typedPages: true,
  },

  typescript: {
    tsConfig: {
      compilerOptions: {
        paths: {
          "@/*": ["../*"],
          "@themeConfig": ["../themeConfig.js"],
          "@layouts/*": ["../@layouts/*"],
          "@layouts": ["../@layouts"],
          "@core/*": ["../@core/*"],
          "@core": ["../@core"],
          "@images/*": ["../assets/images/*"],
          "@styles/*": ["../assets/styles/*"],
          "@validators": ["../@core/utils/validators"],
          "@db/*": ["../server/fake-db/*"],
          "@api-utils/*": ["../server/utils/*"],
        },
      },
    },
  },

  // ℹ️ Disable source maps until this is resolved: https://github.com/vuetifyjs/vuetify-loader/issues/290
  sourcemap: {
    server: false,
    client: false,
  },

  vue: {
    compilerOptions: {
      isCustomElement: tag => tag === "swiper-container" || tag === "swiper-slide",
    },
  },

  vite: {
    server: {
      hmr: {
        protocol: 'ws',
        host: 'localhost',
      },
    },
    
    define: { "process.env": {} },

    resolve: {
      alias: {
        "@": fileURLToPath(new URL(".", import.meta.url)),
        "@themeConfig": fileURLToPath(new URL("./themeConfig.js", import.meta.url)),
        "@core": fileURLToPath(new URL("./@core", import.meta.url)),
        "@layouts": fileURLToPath(new URL("./@layouts", import.meta.url)),
        "@images": fileURLToPath(new URL("./assets/images/", import.meta.url)),
        "@styles": fileURLToPath(new URL("./assets/styles/", import.meta.url)),
        "@configured-variables": fileURLToPath(
          new URL("./assets/styles/variables/_template.scss", import.meta.url),
        ),
        "@db": fileURLToPath(new URL("./server/fake-db/", import.meta.url)),
        "@api-utils": fileURLToPath(new URL("./server/utils/", import.meta.url)),
      },
    },

    build: {
      chunkSizeWarningLimit: 5000,
    },

    optimizeDeps: {
      exclude: ["vuetify"],
      entries: ["./**/*.vue"],
    },

    plugins: [
      svgLoader(),
      vuetify({
        styles: {
          configFile: "assets/styles/variables/_vuetify.scss",
        },
      }),
      null,
    ],
  },

  build: {
    transpile: ["vuetify", "vue-sonner" ],
  },
  
  tailwindcss: {
    exposeConfig: true,
  },

  colorMode: {
    classSuffix: "",
  },
})
