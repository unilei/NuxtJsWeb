import Vue from 'vue'
import Router from 'vue-router'
import { normalizeURL, decode } from 'ufo'
import { interopDefault } from './utils'
import scrollBehavior from './router.scrollBehavior.js'

const _7604e64c = () => interopDefault(import('..\\pages\\about.vue' /* webpackChunkName: "pages/about" */))
const _9c06db52 = () => interopDefault(import('..\\pages\\agreement.vue' /* webpackChunkName: "pages/agreement" */))
const _5d8d348a = () => interopDefault(import('..\\pages\\company.vue' /* webpackChunkName: "pages/company" */))
const _6b9a9d22 = () => interopDefault(import('..\\pages\\companyProfile.vue' /* webpackChunkName: "pages/companyProfile" */))
const _662a0478 = () => interopDefault(import('..\\pages\\complaint.vue' /* webpackChunkName: "pages/complaint" */))
const _4397a9cb = () => interopDefault(import('..\\pages\\download.vue' /* webpackChunkName: "pages/download" */))
const _78df5c95 = () => interopDefault(import('..\\pages\\kol.vue' /* webpackChunkName: "pages/kol" */))
const _e036e4e2 = () => interopDefault(import('..\\pages\\myqq.vue' /* webpackChunkName: "pages/myqq" */))
const _04dbb64c = () => interopDefault(import('..\\pages\\personalInformationService.vue' /* webpackChunkName: "pages/personalInformationService" */))
const _3ea3d00c = () => interopDefault(import('..\\pages\\profile\\index.vue' /* webpackChunkName: "pages/profile/index" */))
const _2a40c7ae = () => interopDefault(import('..\\pages\\wechat.vue' /* webpackChunkName: "pages/wechat" */))
const _ab4c117a = () => interopDefault(import('..\\pages\\bbs\\detail\\_articleId.vue' /* webpackChunkName: "pages/bbs/detail/_articleId" */))
const _0679e92d = () => interopDefault(import('..\\pages\\bbs\\list\\_sportType.vue' /* webpackChunkName: "pages/bbs/list/_sportType" */))
const _cb32e446 = () => interopDefault(import('..\\pages\\sportNews\\detail\\_shorturl.vue' /* webpackChunkName: "pages/sportNews/detail/_shorturl" */))
const _f5c7f628 = () => interopDefault(import('..\\pages\\sportNews\\list\\_league.vue' /* webpackChunkName: "pages/sportNews/list/_league" */))
const _6565e600 = () => interopDefault(import('..\\pages\\nscolumn\\_columnId\\index.vue' /* webpackChunkName: "pages/nscolumn/_columnId/index" */))
const _4051b504 = () => interopDefault(import('..\\pages\\nsforum\\_groupId\\index.vue' /* webpackChunkName: "pages/nsforum/_groupId/index" */))
const _719d28aa = () => interopDefault(import('..\\pages\\nsforum\\_sportType\\index.vue' /* webpackChunkName: "pages/nsforum/_sportType/index" */))
const _7be643df = () => interopDefault(import('..\\pages\\nsnews\\_league\\index.vue' /* webpackChunkName: "pages/nsnews/_league/index" */))
const _6e4f71ec = () => interopDefault(import('..\\pages\\profile\\_activeName.vue' /* webpackChunkName: "pages/profile/_activeName" */))
const _7924fe36 = () => interopDefault(import('..\\pages\\nsforum\\_groupId\\_articleId.vue' /* webpackChunkName: "pages/nsforum/_groupId/_articleId" */))
const _7cbe168a = () => interopDefault(import('..\\pages\\nsforum\\_sportType\\_articleId.vue' /* webpackChunkName: "pages/nsforum/_sportType/_articleId" */))
const _3d8aa95f = () => interopDefault(import('..\\pages\\nsnews\\_league\\_shorturl.vue' /* webpackChunkName: "pages/nsnews/_league/_shorturl" */))
const _369530c2 = () => interopDefault(import('..\\pages\\index.vue' /* webpackChunkName: "pages/index" */))

const emptyFn = () => {}

Vue.use(Router)

export const routerOptions = {
  mode: 'history',
  base: '/',
  linkActiveClass: 'nuxt-link-active',
  linkExactActiveClass: 'nuxt-link-exact-active',
  scrollBehavior,

  routes: [{
    path: "/about",
    component: _7604e64c,
    name: "about"
  }, {
    path: "/agreement",
    component: _9c06db52,
    name: "agreement"
  }, {
    path: "/company",
    component: _5d8d348a,
    name: "company"
  }, {
    path: "/companyProfile",
    component: _6b9a9d22,
    name: "companyProfile"
  }, {
    path: "/complaint",
    component: _662a0478,
    name: "complaint"
  }, {
    path: "/download",
    component: _4397a9cb,
    name: "download"
  }, {
    path: "/kol",
    component: _78df5c95,
    name: "kol"
  }, {
    path: "/myqq",
    component: _e036e4e2,
    name: "myqq"
  }, {
    path: "/personalInformationService",
    component: _04dbb64c,
    name: "personalInformationService"
  }, {
    path: "/profile",
    component: _3ea3d00c,
    name: "profile"
  }, {
    path: "/wechat",
    component: _2a40c7ae,
    name: "wechat"
  }, {
    path: "/bbs/detail/:articleId?",
    component: _ab4c117a,
    name: "bbs-detail-articleId"
  }, {
    path: "/bbs/list/:sportType?",
    component: _0679e92d,
    name: "bbs-list-sportType"
  }, {
    path: "/sportNews/detail/:shorturl?",
    component: _cb32e446,
    name: "sportNews-detail-shorturl"
  }, {
    path: "/sportNews/list/:league?",
    component: _f5c7f628,
    name: "sportNews-list-league"
  }, {
    path: "/nscolumn/:columnId",
    component: _6565e600,
    name: "nscolumn-columnId"
  }, {
    path: "/nsforum/:groupId",
    component: _4051b504,
    name: "nsforum-groupId"
  }, {
    path: "/nsforum/:sportType",
    component: _719d28aa,
    name: "nsforum-sportType"
  }, {
    path: "/nsnews/:league",
    component: _7be643df,
    name: "nsnews-league"
  }, {
    path: "/profile/:activeName",
    component: _6e4f71ec,
    name: "profile-activeName"
  }, {
    path: "/nsforum/:groupId?/:articleId",
    component: _7924fe36,
    name: "nsforum-groupId-articleId"
  }, {
    path: "/nsforum/:sportType?/:articleId",
    component: _7cbe168a,
    name: "nsforum-sportType-articleId"
  }, {
    path: "/nsnews/:league?/:shorturl",
    component: _3d8aa95f,
    name: "nsnews-league-shorturl"
  }, {
    path: "/",
    component: _369530c2,
    name: "index"
  }],

  fallback: false
}

export function createRouter (ssrContext, config) {
  const base = (config._app && config._app.basePath) || routerOptions.base
  const router = new Router({ ...routerOptions, base  })

  // TODO: remove in Nuxt 3
  const originalPush = router.push
  router.push = function push (location, onComplete = emptyFn, onAbort) {
    return originalPush.call(this, location, onComplete, onAbort)
  }

  const resolve = router.resolve.bind(router)
  router.resolve = (to, current, append) => {
    if (typeof to === 'string') {
      to = normalizeURL(to)
    }
    return resolve(to, current, append)
  }

  return router
}
