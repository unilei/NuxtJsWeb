'use strict'
const axios = require('axios')

module.exports = {
  mode: 'universal',
  /*
  ** Headers of the page
  */
  server: {
    host: '0.0.0.0',
    port: '3000'
  },
  router: {
    middleware: 'autoPcMobile'
  },
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
      // {
      //   src: '/jquery-3.1.1.min.js',
      //   ssr: false
      // },
      {
        src: 'https://aloss.hotforest.cn/web/jquery-3.1.1.min.js',
        ssr: false
      },
      // {
      //   src: '/jquery.SuperSlide.2.1.3.js',
      //   ssr: false
      // },
      {
        src: 'https://aloss.hotforest.cn/web/jquery.SuperSlide.2.1.3.js',
        ssr: false
      },
      {
        src: '/wxLogin.js',
        ssr: false
      },
      {
        src: 'https://js.users.51.la/20532775.js',
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
    'element-ui/lib/theme-chalk/index.css',
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
      mode: 'client'
    },
    {
      src: '@/plugins/loading',
      mode: 'client'
    },

  ],
  render: {
    resourceHints: false,
  },
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
    '@nuxtjs/sitemap',
    // With options
    ['@nuxtjs/component-cache', { maxAge: 1000 * 60 * 60 }],
  ],
  sitemap: {
    path: '/sitemap.xml',
    cacheTime: 1000 * 60 * 60 * 24,
    // generate:true,
    // xslUrl:true,
    defaults: {
      changefreq: 'daily',
      priority: 1,
      lastmod: new Date(),
      lastmodrealtime: true
    },
    exclude: [],
    filter ({ routes }) {
      return routes.map(route => {
        route.url = `${route.url}/`
        return route
      })
    },
    trailingSlash: true,
    xmlNs: 'xmlns="http://www.sitemaps.org/schemas/sitemap/0.9"',
    routes: [
      '/about',
      '/agreement',
      '/companyProfile',
      '/complaint',
      '/index',
      '/personalInformationService',
      '/wechat',
    ],
    sitemaps: [
      {
        path: '/sitemap-bbs-list.xml',
        routes: [
          '/bbs/list/all',
          '/bbs/list/football',
          '/bbs/list/basketball',
        ],
        gzip: false,
      },
      {
        path: '/sitemap-sportNews-list.xml',
        routes: [
          '/sportNews/list/all',
          '/sportNews/list/nba',
          '/sportNews/list/premier',
          '/sportNews/list/serie_a',
          '/sportNews/list/la_liga',
        ],
        gzip: false,
      },
      {
        path: '/sitemap-bbs-detail.xml',
        routes: async () => {
          let sportType = 'all'
          let type = 'newest'
          let params = {
            offset: 0
          }
          const res = await axios.get(`https://api.npse.com:8081/v1/forum/` + sportType + `/0/` + type + `/articles`, { params: params })
          // console.log(res)
          return res.data.Data.list.map(bbs => `/bbs/detail/${bbs.article_id}`)
        },
        gzip: false,
      },
      {
        path: '/sitemap-sportNews-detail.xml',
        routes: async () => {

          //localhost:8000/web/api.news/getAllArticles
          let req_url = 'https://admin.hotforest.cn/web/api.news/getAllArticles'
          // let req_url = 'https://localhost:8000/web/api.news/getAllArticles'
          let res = await axios.get(req_url)
          // console.log(res)
          return res.data.data.map(news => `/sportNews/detail/${news.shortUrlSuffix}`)
        },
        gzip: false,
      },
      {
        path: '/sitemap-sportNews-detail-2.xml',
        routes: async () => {
          let news_params = {
            articleType: 2,
            offset: 0,
            author_filter: ['6', '7', '8', '9']
          }
          const res = await axios.get(`https://api.npse.com:8081/v2/GetArticles`, { params: news_params })
          // console.log(res)
          return res.data.Data.articles.map(news => `/sportNews/detail/${news.shorturl}`)
        },
        gzip: false,
      },
    ]
  },

  /*
  ** Axios module configuration
  ** See https://axios.nuxtjs.org/options
  */
  axios: {
    proxy: true
  },
  /*
  ** Build configuration
  */
  build: {
    transpile: [/^element-ui/],
    extractCSS: true,
    // // 按需引入element-ui
    // babel: {
    //   plugins: [
    //     [ "component",
    //       {
    //         "libraryName": "element-ui",
    //         "styleLibraryName": "theme-chalk"
    //       }
    //     ]
    //   ]
    // },
    /*
    ** You can extend webpack config here
    */
    extend (config, ctx) {
      if (ctx.isClient && !ctx.isDev) {

        config.performance.hints = false
        config.performance.maxEntrypointSize = 512000
        config.performance.maxAssetSize = 512000
        config.optimization.splitChunks.maxSize = 250000
      }

    }
  }

}
