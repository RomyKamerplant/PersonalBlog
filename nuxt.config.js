export default {
  target: 'server',
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
    ['nuxt-supabase', {
      supabaseUrl: 'https://tjncvmzueqzbbhfepjqy.supabase.co',
      supabaseKey: 'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6InRqbmN2bXp1ZXF6YmJoZmVwanF5Iiwicm9sZSI6ImFub24iLCJpYXQiOjE2NDU2NjA5OTksImV4cCI6MTk2MTIzNjk5OX0.6299NCKUZoy1LCnU6pXXvLkVagsUCuLJX9G_pGzwc7M'
    }]
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
