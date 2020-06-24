process.on('unhandledRejection', error => {
  console.error('unhandledRejection', error);
  process.exit(1) // To exit with a 'failure' code
});

const axiosInit = require('axios')
const axios = axiosInit.create({
  // ...
})

module.exports = {
  mode: 'universal',
  /*
  ** Headers of the page
  */
  server: {
    host: '0.0.0.0',
    port: '3000'
  },
  telemetry: false,
  router: {
    middleware: 'autoPcMobile'
  },
  serverMiddleware: [
    '~/server/middleware/redirectTo'
  ],
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
      { src: '/jquery-3.1.1.min.js', ssr: false },
      { src: '/jquery.SuperSlide.2.1.3.js', ssr: false },
      { src: '/wxLogin.js', ssr: false },
      { src: '/qc.js',ssr:true},
      { src: 'https://js.users.51.la/20532775.js', ssr: false },
      { src: '/openinstall.js',ssr:false },
      { src: '/social-share.min.js',ssr:true }
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
      src: '@/plugins/filter',ssr:false
    },
    {
      src: '@/plugins/loading',ssr: true,mode: 'client'
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
  ],
  sitemap: {
    // hostname:'https://www.171tiyu.com',
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
      '/company',
      '/profile',
      '/kol'
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
        path: '/sitemap-nsnews.xml',
        routes: async () => {

          //localhost:8000/web/api.news/getAllArticles
          let req_url = 'https://admin.hotforest.cn/web/api.news/getAllArticles'
          // let req_url = 'https://localhost:8000/web/api.news/getAllArticles'
          let res = await axios.get(req_url)
          let articles = res.data.data;
          articles.forEach(
            item=>{
              let s = item.shortUrlSuffix;
              let sArr = s.split('-');

              item.league_value = sArr[0]
            }
          )
          // console.log(res)
          return res.data.data.map(news => `/nsnews/${news.league_value}/${news.shortUrlSuffix}`)
        },
        gzip: false,
      },
      {
        path: '/sitemap-nsforum.xml',
        routes: async () => {
          let sportType = 'all'
          let type = 'newest'
          let params = {
            offset: 0
          }
          const res = await axios.get(`https://api.npse.com:8081/v1/forum/` + sportType + `/0/` + type + `/articles`, { params: params })
          // console.log(res.data.Data)
          return res.data.Data.list.map(bbs => `/nsforum/${bbs.category}/${bbs.article_id}`)
        },
        gzip: false,
      },
      {
        path: '/sitemap-forum-basketball.xml',
        routes: async () => {
          const res = await axios.get(`https://api.npse.com:8081/v3/forum/basketball/groups`)
          // console.log(res.data.Data)
          // this.footballGroupList = res.Data.list;
          return res.data.Data.list.map(bbs => `/nsforum/${bbs.id}`)
        },
        gzip: false,
      },
      {
        path: '/sitemap-forum-basketball-list.xml',
        routes: async () => {
          const res = await axios.get(`https://api.npse.com:8081/v3/forum/basketball/groups`)
          // console.log(res.data.Data)
          let footballGroupList = res.data.Data.list;

          let forumList = [];
          footballGroupList.forEach(
            item=>{
              let id = item.id;
              let forum_params = {
                sort_type:'newest',
                group_id:id
              }
              let limit = 100;
              let offset = 0;
              let list = [];
              axios.get(`https://api.npse.com:8081/v3/forum/articles/${limit}/${offset}`, { params: forum_params,headers:{ ns_device_id:'website' }})
                .then(
                  res=>{
                    // console.log(res.data.Data.list)
                    list =  list.concat(res.data.Data.list)
                    // console.log(forumList)
                    console.log(list)
                    // return res.data.Data.list.map(bbs => `/nsforum/${id}/${bbs.article_id}`)
                  }
                )
              // console.log(list)

            }
          )


        },
        gzip: false,
      },
      {
        path: '/sitemap-forum-football.xml',
        routes: async () => {
          const res = await axios.get(`https://api.npse.com:8081/v3/forum/football/groups`)
          // console.log(res.data.Data)
          // this.footballGroupList = res.Data.list;
          return res.data.Data.list.map(bbs => `/nsforum/${bbs.id}`)
        },
        gzip: false,
      },
      {
        path: '/sitemap-forum.xml',
        routes: async () => {
          let sportType = 'all'
          let type = 'newest'
          let params = {
            offset: 0
          }
          const res = await axios.get(`https://api.npse.com:8081/v1/forum/` + sportType + `/0/` + type + `/articles`, { params: params })
          // console.log(res.data.Data)
          return res.data.Data.list.map(bbs => `/nsforum/${bbs.category}/${bbs.article_id}`)
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
    // proxy: true
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
      if (ctx.isClient && !ctx.isDev) {
        config.performance.hints = false
        config.performance.maxEntrypointSize = 512000
        config.performance.maxAssetSize = 512000
        config.optimization.splitChunks.maxSize = 250000
      }
    }
  }

}
