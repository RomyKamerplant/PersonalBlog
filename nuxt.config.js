export default {
  router: {
    base: '/myapp/'
  },
  target: 'static',
  head: {
    title: 'Blogwebsite',
    meta: [
      { charset: 'utf-8' },
      { name: 'viewport', content: 'width=device-width, initial-scale=1' },
      { hid: 'description', name: 'description', content: '' },
      { name: 'format-detection', content: 'telephone=no' }
    ],
    link: [
      { rel: 'icon', type: 'image/x-icon', href: '/favicon.png' }
    ],
  },
  css: [
  ],
  plugins: [

  ],
  components: true,
  buildModules: [
    '@nuxtjs/tailwindcss',
    '@nuxtjs/moment',
    '@nuxt/postcss8',
    '@nuxtjs/google-fonts'
 
  ],
  googleFonts: {
    families: {
      Lora: [700],
      Staatliches: [400],
      Galada: [400],
    }
  },
  modules: [
    '@nuxtjs/axios',
    '@nuxtjs/pwa',
    '@nuxt/content',
  ],
  axios: {
    baseURL: '/',
  },
  pwa: {
    manifest: {
      lang: 'en'
    }
  },
  content: {},
  build: {
    postcss: {      
      plugins: {        
        tailwindcss: {},        
        autoprefixer: {},      
      },    
    },
  }
}
