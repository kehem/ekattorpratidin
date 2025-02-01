
export default defineNuxtConfig({
  compatibilityDate: '2025-01-18',
  devtools: { enabled: true },

  app: {
    head: {
      meta: [
        // Basic Meta Tags
        { charset: 'UTF-8' },
        { name: 'viewport', content: 'width=device-width, initial-scale=1.0' },
        { name: 'language', content: 'bn' },

        // Verification Tags
        { name: 'google-site-verification', content: 'your-google-verification-code' }, // Google Search Console
        { name: 'yandex-verification', content: 'your-yandex-verification-code' }, // Yandex Webmaster Tools
        { name: 'msvalidate.01', content: 'your-bing-verification-code' }, // Bing Webmaster Tools

        // Additional Meta Tags
        { name: 'theme-color', content: '#ffffff' },
        { name: 'mobile-web-app-capable', content: 'yes' },
        { name: 'apple-mobile-web-app-capable', content: 'yes' },
        { name: 'apple-mobile-web-app-status-bar-style', content: 'black-translucent' }
      ],

      link: [
        { rel: 'stylesheet', href: 'https://cdn.jsdelivr.net/gh/surajit-singha-sisir/mastorsCDN@v1.1.01/mastors.css' }, // Mastors CSS
        {
          rel: 'stylesheet',
          href: 'https://cdn.jsdelivr.net/gh/surajit-singha-sisir/mastorsCDN@v1.1/mastorsIcons/mastorsIcons.css',
        },
        {
          rel: 'stylesheet',
          href: '/assets/css/style.css',
        }
      ],
    },

  },
  devServer: {
    host: '0.0.0.0',
    port: 3000
  },
  modules: ['@nuxt/image'],
  plugins: [
    '~/plugins/service-worker.ts',
  ]
});