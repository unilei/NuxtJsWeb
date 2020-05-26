import Vue from 'vue'
import Router from 'vue-router'
import { interopDefault } from './utils'
import scrollBehavior from './router.scrollBehavior.js'

const _c4d1efea = () => interopDefault(import('../pages/about.vue' /* webpackChunkName: "pages/about" */))
const _5e130d08 = () => interopDefault(import('../pages/agreement.vue' /* webpackChunkName: "pages/agreement" */))
const _75b4a77b = () => interopDefault(import('../pages/company.vue' /* webpackChunkName: "pages/company" */))
const _cdbb8544 = () => interopDefault(import('../pages/companyProfile.vue' /* webpackChunkName: "pages/companyProfile" */))
const _12407f29 = () => interopDefault(import('../pages/complaint.vue' /* webpackChunkName: "pages/complaint" */))
const _305e94fa = () => interopDefault(import('../pages/download.vue' /* webpackChunkName: "pages/download" */))
const _93b4588a = () => interopDefault(import('../pages/personalInformationService.vue' /* webpackChunkName: "pages/personalInformationService" */))
const _6f002bea = () => interopDefault(import('../pages/profile/index.vue' /* webpackChunkName: "pages/profile/index" */))
const _25758718 = () => interopDefault(import('../pages/wechat.vue' /* webpackChunkName: "pages/wechat" */))
const _091b645c = () => interopDefault(import('../pages/bbs/detail/_articleId.vue' /* webpackChunkName: "pages/bbs/detail/_articleId" */))
const _361b5602 = () => interopDefault(import('../pages/bbs/list/_sportType.vue' /* webpackChunkName: "pages/bbs/list/_sportType" */))
const _63bc05a4 = () => interopDefault(import('../pages/sportNews/detail/_shorturl.vue' /* webpackChunkName: "pages/sportNews/detail/_shorturl" */))
const _771503f7 = () => interopDefault(import('../pages/sportNews/list/_league.vue' /* webpackChunkName: "pages/sportNews/list/_league" */))
const _84a8a992 = () => interopDefault(import('../pages/nsforum/_sportType/index.vue' /* webpackChunkName: "pages/nsforum/_sportType/index" */))
const _13ccef8c = () => interopDefault(import('../pages/nsnews/_league/index.vue' /* webpackChunkName: "pages/nsnews/_league/index" */))
const _0a287730 = () => interopDefault(import('../pages/profile/_activeName.vue' /* webpackChunkName: "pages/profile/_activeName" */))
const _500c241d = () => interopDefault(import('../pages/nsforum/_sportType/_articleId.vue' /* webpackChunkName: "pages/nsforum/_sportType/_articleId" */))
const _34ac92e8 = () => interopDefault(import('../pages/nsnews/_league/_shorturl.vue' /* webpackChunkName: "pages/nsnews/_league/_shorturl" */))
const _85623a60 = () => interopDefault(import('../pages/index.vue' /* webpackChunkName: "pages/index" */))

// TODO: remove in Nuxt 3
const emptyFn = () => {}
const originalPush = Router.prototype.push
Router.prototype.push = function push (location, onComplete = emptyFn, onAbort) {
  return originalPush.call(this, location, onComplete, onAbort)
}

Vue.use(Router)

export const routerOptions = {
  mode: 'history',
  base: decodeURI('/'),
  linkActiveClass: 'nuxt-link-active',
  linkExactActiveClass: 'nuxt-link-exact-active',
  scrollBehavior,

  routes: [{
    path: "/about",
    component: _c4d1efea,
    name: "about"
  }, {
    path: "/agreement",
    component: _5e130d08,
    name: "agreement"
  }, {
    path: "/company",
    component: _75b4a77b,
    name: "company"
  }, {
    path: "/companyProfile",
    component: _cdbb8544,
    name: "companyProfile"
  }, {
    path: "/complaint",
    component: _12407f29,
    name: "complaint"
  }, {
    path: "/download",
    component: _305e94fa,
    name: "download"
  }, {
    path: "/personalInformationService",
    component: _93b4588a,
    name: "personalInformationService"
  }, {
    path: "/profile",
    component: _6f002bea,
    name: "profile"
  }, {
    path: "/wechat",
    component: _25758718,
    name: "wechat"
  }, {
    path: "/bbs/detail/:articleId?",
    component: _091b645c,
    name: "bbs-detail-articleId"
  }, {
    path: "/bbs/list/:sportType?",
    component: _361b5602,
    name: "bbs-list-sportType"
  }, {
    path: "/sportNews/detail/:shorturl?",
    component: _63bc05a4,
    name: "sportNews-detail-shorturl"
  }, {
    path: "/sportNews/list/:league?",
    component: _771503f7,
    name: "sportNews-list-league"
  }, {
    path: "/nsforum/:sportType?",
    component: _84a8a992,
    name: "nsforum-sportType"
  }, {
    path: "/nsnews/:league?",
    component: _13ccef8c,
    name: "nsnews-league"
  }, {
    path: "/profile/:activeName",
    component: _0a287730,
    name: "profile-activeName"
  }, {
    path: "/nsforum/:sportType?/:articleId",
    component: _500c241d,
    name: "nsforum-sportType-articleId"
  }, {
    path: "/nsnews/:league?/:shorturl",
    component: _34ac92e8,
    name: "nsnews-league-shorturl"
  }, {
    path: "/",
    component: _85623a60,
    name: "index"
  }],

  fallback: false
}

export function createRouter () {
  return new Router(routerOptions)
}
