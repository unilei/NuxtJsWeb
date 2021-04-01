import Vue from 'vue'
import Router from 'vue-router'
import { normalizeURL, decode } from 'ufo'
import { interopDefault } from './utils'
import scrollBehavior from './router.scrollBehavior.js'

const _919cf64e = () => interopDefault(import('..\\pages\\about.vue' /* webpackChunkName: "pages/about" */))
const _0d331a54 = () => interopDefault(import('..\\pages\\agreement.vue' /* webpackChunkName: "pages/agreement" */))
const _dab9ae6e = () => interopDefault(import('..\\pages\\company.vue' /* webpackChunkName: "pages/company" */))
const _5aa76f60 = () => interopDefault(import('..\\pages\\companyProfile.vue' /* webpackChunkName: "pages/companyProfile" */))
const _a4d83612 = () => interopDefault(import('..\\pages\\complaint.vue' /* webpackChunkName: "pages/complaint" */))
const _9d7f8528 = () => interopDefault(import('..\\pages\\download.vue' /* webpackChunkName: "pages/download" */))
const _0b5f4854 = () => interopDefault(import('..\\pages\\kol.vue' /* webpackChunkName: "pages/kol" */))
const _4d6219b0 = () => interopDefault(import('..\\pages\\myqq.vue' /* webpackChunkName: "pages/myqq" */))
const _f265f8a6 = () => interopDefault(import('..\\pages\\personalInformationService.vue' /* webpackChunkName: "pages/personalInformationService" */))
const _471d66ed = () => interopDefault(import('..\\pages\\profile\\index.vue' /* webpackChunkName: "pages/profile/index" */))
const _3f2aa40a = () => interopDefault(import('..\\pages\\wechat.vue' /* webpackChunkName: "pages/wechat" */))
const _5254e4fc = () => interopDefault(import('..\\pages\\bbs\\detail\\_articleId.vue' /* webpackChunkName: "pages/bbs/detail/_articleId" */))
const _7114032c = () => interopDefault(import('..\\pages\\bbs\\list\\_sportType.vue' /* webpackChunkName: "pages/bbs/list/_sportType" */))
const _653a06fe = () => interopDefault(import('..\\pages\\sportNews\\detail\\_shorturl.vue' /* webpackChunkName: "pages/sportNews/detail/_shorturl" */))
const _2fd992e6 = () => interopDefault(import('..\\pages\\sportNews\\list\\_league.vue' /* webpackChunkName: "pages/sportNews/list/_league" */))
const _4f3e5a61 = () => interopDefault(import('..\\pages\\nscolumn\\_columnId\\index.vue' /* webpackChunkName: "pages/nscolumn/_columnId/index" */))
const _42ce571f = () => interopDefault(import('..\\pages\\nsforum\\_groupId\\index.vue' /* webpackChunkName: "pages/nsforum/_groupId/index" */))
const _18e313ea = () => interopDefault(import('..\\pages\\nsforum\\_sportType\\index.vue' /* webpackChunkName: "pages/nsforum/_sportType/index" */))
const _648f69c0 = () => interopDefault(import('..\\pages\\nsnews\\_league\\index.vue' /* webpackChunkName: "pages/nsnews/_league/index" */))
const _37a3712b = () => interopDefault(import('..\\pages\\profile\\_activeName.vue' /* webpackChunkName: "pages/profile/_activeName" */))
const _08c0a935 = () => interopDefault(import('..\\pages\\nsforum\\_groupId\\_articleId.vue' /* webpackChunkName: "pages/nsforum/_groupId/_articleId" */))
const _d7ca046e = () => interopDefault(import('..\\pages\\nsforum\\_sportType\\_articleId.vue' /* webpackChunkName: "pages/nsforum/_sportType/_articleId" */))
const _81081280 = () => interopDefault(import('..\\pages\\nsnews\\_league\\_shorturl.vue' /* webpackChunkName: "pages/nsnews/_league/_shorturl" */))
const _522d40c4 = () => interopDefault(import('..\\pages\\index.vue' /* webpackChunkName: "pages/index" */))

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
    component: _919cf64e,
    name: "about"
  }, {
    path: "/agreement",
    component: _0d331a54,
    name: "agreement"
  }, {
    path: "/company",
    component: _dab9ae6e,
    name: "company"
  }, {
    path: "/companyProfile",
    component: _5aa76f60,
    name: "companyProfile"
  }, {
    path: "/complaint",
    component: _a4d83612,
    name: "complaint"
  }, {
    path: "/download",
    component: _9d7f8528,
    name: "download"
  }, {
    path: "/kol",
    component: _0b5f4854,
    name: "kol"
  }, {
    path: "/myqq",
    component: _4d6219b0,
    name: "myqq"
  }, {
    path: "/personalInformationService",
    component: _f265f8a6,
    name: "personalInformationService"
  }, {
    path: "/profile",
    component: _471d66ed,
    name: "profile"
  }, {
    path: "/wechat",
    component: _3f2aa40a,
    name: "wechat"
  }, {
    path: "/bbs/detail/:articleId?",
    component: _5254e4fc,
    name: "bbs-detail-articleId"
  }, {
    path: "/bbs/list/:sportType?",
    component: _7114032c,
    name: "bbs-list-sportType"
  }, {
    path: "/sportNews/detail/:shorturl?",
    component: _653a06fe,
    name: "sportNews-detail-shorturl"
  }, {
    path: "/sportNews/list/:league?",
    component: _2fd992e6,
    name: "sportNews-list-league"
  }, {
    path: "/nscolumn/:columnId",
    component: _4f3e5a61,
    name: "nscolumn-columnId"
  }, {
    path: "/nsforum/:groupId",
    component: _42ce571f,
    name: "nsforum-groupId"
  }, {
    path: "/nsforum/:sportType",
    component: _18e313ea,
    name: "nsforum-sportType"
  }, {
    path: "/nsnews/:league",
    component: _648f69c0,
    name: "nsnews-league"
  }, {
    path: "/profile/:activeName",
    component: _37a3712b,
    name: "profile-activeName"
  }, {
    path: "/nsforum/:groupId?/:articleId",
    component: _08c0a935,
    name: "nsforum-groupId-articleId"
  }, {
    path: "/nsforum/:sportType?/:articleId",
    component: _d7ca046e,
    name: "nsforum-sportType-articleId"
  }, {
    path: "/nsnews/:league?/:shorturl",
    component: _81081280,
    name: "nsnews-league-shorturl"
  }, {
    path: "/",
    component: _522d40c4,
    name: "index"
  }],

  fallback: false
}

export function createRouter (ssrContext, config) {
  const base = (config.app && config.app.basePath) || routerOptions.base
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
