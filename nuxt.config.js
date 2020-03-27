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
      },
      {
        src:'https://js.users.51.la/20532775.js',ssr:false
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
    'element-ui/lib/theme-chalk/index.css',
    'assets/css/normailze.css'
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
      src: '@/plugins/filter',
      ssr: false,
      mode:'client'
    },
    {
      src: '@/plugins/tj.js', mode: 'client',ssr:false
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
    '@nuxtjs/sitemap'
  ],
  sitemap: {
    hostname: 'https://www.171tiyu.com',
    gzip: true,
    exclude: [
    ],
    routes: [
      '/about',
      '/agreement',
      '/companyProfile',
      '/complaint',
      '/index',
      '/personalInformationService',
      '/wechat',
      {
        url: '/page/3',
        changefreq: 'daily',
        priority: 1,
        lastmod: '2017-06-30T13:30:00.000Z'
      }
    ]
  },
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
    /*
    ** You can extend webpack config here
    */
    extend (config, ctx) {

    }
  }
}
