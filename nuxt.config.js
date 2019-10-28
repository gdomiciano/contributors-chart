import en from './static/lang/en';
import pt from './static/lang/pt';
import sv from './static/lang/sv';

const routerBase = process.env.DEPLOY_ENV === 'GH_PAGES' ? {
  router: {
    base: '/contributors-chart/'
  }
} : {}

export default {
  env: {
    baseUrl: process.env.BASE_URL || 'http://localhost:3000'
  },
  ...routerBase,
  build: {
    extend(config, ctx) {
      if (ctx.isClient) {
        config.module.rules.push({
          enforce: 'pre',
          test: /\.(js|vue)$/,
          loader: 'eslint-loader',
          exclude: /(node_modules)/,
          options: {
            fix: true,
          },
        });
      }
    },
    analyze: false,
    extractCSS: true,
  },

  head: {
    title: 'Contriburtor\'s Chart',
  },

  loading: {color: '#F3AF92'},

  manifest: {
    name: 'Contributor\'s Chart',
    description: 'Check the contributions for each GitHub repo',
    theme_color: '#272727',
  },

  modules: [
    '@nuxtjs/pwa',
    '@nuxtjs/axios',
    '@nuxtjs/proxy',
    'nuxt-i18n'
  ],

  i18n: {
    locales: [
      {
        code: 'en',
        iso: 'en-US',
        name: '🇺🇸English'
      },
      {
        code: 'pt',
        iso: 'pt-BR',
        name: '🇧🇷Português'
      },
      {
        code: 'sv',
        iso: 'sv-SE',
        name: '🇸🇪Svenska'
      }
    ],
    baseUrl: process.env.BASE_URL || 'http://localhost:3000',
    seo: true,
    defaultLocale: 'en',
    vueI18n: {
      messages: {
        en,
        pt,
        sv
      },
      silentTranslationWarn: false,
    },
    detectBrowserLanguage: {
      useCookie: true,
      cookieKey: 'i18n_redirected',
      alwaysRedirect: false,
      fallbackLocale: 'en'
    },
    langDir: './static/lang/'
  },
}
