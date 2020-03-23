module.exports = {
  mode: 'universal',
  /*
  ** Headers of the page
  */
  head: {
    title: process.env.npm_package_name || '',
    meta: [
      { charset: 'utf-8' },
      {
        name: 'viewport',
        content: 'width=device-width, initial-scale=1'
      },
      {
        hid: 'description',
        name: 'description',
        content: process.env.npm_package_description || ''
      }
    ],
    link: [
      {
        rel: 'icon',
        type: 'image/x-icon',
        href: '/favicon.ico'
      }
    ],
    script: [
      {
        src: '/jquery-3.1.1.min.js',
        ssr: false
      },
      {
        src: '/jquery.SuperSlide.2.1.3.js',
        ssr: false
      },
      {
        src: '/wxLogin.js',
        ssr: false
      }
    ]
  },
  /*
  ** Customize the progress-bar color
  */
  loading: { color: '#fff' },
  /*
  ** Global CSS
  */
  css: [
    'element-ui/lib/theme-chalk/index.css'
  ],
  /*
  ** Plugins to load before mounting the App
  */
  plugins: [
    {
      src: '@/plugins/element-ui',
      ssr: true
    },
    {
      src: '~/plugins/filter',
      ssr: false
    }

  ],
  /*
  ** Nuxt.js dev-modules
  */
  buildModules: [
    // Doc: https://github.com/nuxt-community/eslint-module
    // '@nuxtjs/eslint-module'
  ],
  /*
  ** Nuxt.js modules
  */
  modules: [
    // Doc: https://axios.nuxtjs.org/usage
    '@nuxtjs/axios',
    '@nuxtjs/pwa',
    // Doc: https://github.com/nuxt-community/dotenv-module
    '@nuxtjs/dotenv',
  ],
  /*
  ** Axios module configuration
  ** See https://axios.nuxtjs.org/options
  */
  axios: {
    proxy:true
  },
  /*
  ** Build configuration
  */
  build: {
    transpile: [/^element-ui/],
    extractCSS: true,
    analyze:false,
    productionSourceMap: false,
    productionGzip: true,
    productionGzipExtensions: ['js', 'css', 'svg'],
    /*
    ** You can extend webpack config here
    */
    extend (config, ctx) {

    }
  }
}
