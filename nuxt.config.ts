export default defineNuxtConfig({
  compatibilityDate: '2025-01-18',
  devtools: { enabled: true },

  app: {
    head: {
      title: 'Ekattor Pratidin', // Global title
      meta: [
        // Basic Meta Tags
        { charset: 'UTF-8' },
        { name: 'viewport', content: 'width=device-width, initial-scale=1.0' },
        { name: 'description', content: 'Get the latest and most reliable news updates from Ekattor Pratidin Newspaper. Stay informed with breaking news, in-depth stories, and regional insights.' },
        { name: 'keywords', content: 'Ekattor Pratidin, Newspaper, Breaking News, Sylhet News, Ekattor News, Local News' },
        { name: 'author', content: 'Kehem IT' },
        { name: 'robots', content: 'index, follow' }, // Ensures pages are indexed and followed by search engines
        { name: 'language', content: 'bn' },

        // Open Graph (for Social Media Sharing)
        { property: 'og:title', content: 'Ekattor Pratidin Newspaper - Latest News and Updates' },
        { property: 'og:description', content: 'Stay updated with the latest news, stories, and insights from Ekattor Pratidin Newspaper.' },
        { property: 'og:image', content: 'https://ekattorpratidin.com/images/social-share.jpg' },
        { property: 'og:url', content: 'https://ekattorpratidin.com/' },
        { property: 'og:type', content: 'website' },
        { property: 'og:site_name', content: 'Ekattor Pratidin Newspaper' },

        // Twitter Card (for Twitter Sharing)
        { name: 'twitter:card', content: 'summary_large_image' },
        { name: 'twitter:title', content: 'Ekattor Pratidin Newspaper - Latest News and Updates' },
        { name: 'twitter:description', content: 'Get breaking news and updates from Ekattor Pratidin Newspaper.' },
        { name: 'twitter:image', content: 'https://ekattorpratidin.com/images/social-share.jpg' },
        { name: 'twitter:site', content: '@ekattorpratidin' },

        // Verification Tags
        { name: 'google-site-verification', content: 'your-google-verification-code' }, // Google Search Console
        { name: 'yandex-verification', content: 'your-yandex-verification-code' }, // Yandex Webmaster Tools
        { name: 'msvalidate.01', content: 'your-bing-verification-code' }, // Bing Webmaster Tools

        // Additional Meta Tags
        { name: 'theme-color', content: '#ffffff' }, // Set browser color theme
        { name: 'mobile-web-app-capable', content: 'yes' },
        { name: 'apple-mobile-web-app-capable', content: 'yes' },
        { name: 'apple-mobile-web-app-status-bar-style', content: 'black-translucent' }
      ],
      link: [
        { rel: 'canonical', href: 'https://ekattorpratidin.com/' }, // Canonical URL
        { rel: 'manifest', href: '/manifest.json' },
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
  // plugins: ['~/plugins/service-worker.ts'],
  plugins: [
    '~/plugins/service-worker.ts',
    '~/plugins/page-observation.ts',
  ],

  // nitro: {
  //   prerender: {
  //     routes: ['/sw.js']
  //   }
  // }

});