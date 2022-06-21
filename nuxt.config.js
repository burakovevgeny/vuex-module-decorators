export default {
  ssr: true,
  target: 'server',
  head: {
    title: 'nuxt-module-decorators',
    htmlAttrs: {
      lang: 'en'
    },
    meta: [
      { charset: 'utf-8' },
      { name: 'viewport', content: 'width=device-width, initial-scale=1' },
      { hid: 'description', name: 'description', content: '' },
      { name: 'format-detection', content: 'telephone=no' }
    ]
  },
  css: [
  ],
  plugins: [
    '~/plugins/api.service.ts',
    '~/plugins/nuxt-context-accessor.ts'
  ],
  components: true,
  buildModules: ['@nuxt/typescript-build'],
  modules: ['@nuxtjs/axios'],
  extends: ['@nuxtjs/eslint-config-typescript']
}
