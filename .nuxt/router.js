import Vue from 'vue'
import Router from 'vue-router'
import { interopDefault } from './utils'
import scrollBehavior from './router.scrollBehavior.js'

const _c4d1efea = () => interopDefault(import('../pages/about.vue' /* webpackChunkName: "pages/about" */))
const _5e130d08 = () => interopDefault(import('../pages/agreement.vue' /* webpackChunkName: "pages/agreement" */))
const _cdbb8544 = () => interopDefault(import('../pages/companyProfile.vue' /* webpackChunkName: "pages/companyProfile" */))
const _12407f29 = () => interopDefault(import('../pages/complaint.vue' /* webpackChunkName: "pages/complaint" */))
const _93b4588a = () => interopDefault(import('../pages/personalInformationService.vue' /* webpackChunkName: "pages/personalInformationService" */))
const _25758718 = () => interopDefault(import('../pages/wechat.vue' /* webpackChunkName: "pages/wechat" */))
const _091b645c = () => interopDefault(import('../pages/bbs/detail/_articleId.vue' /* webpackChunkName: "pages/bbs/detail/_articleId" */))
const _361b5602 = () => interopDefault(import('../pages/bbs/list/_sportType.vue' /* webpackChunkName: "pages/bbs/list/_sportType" */))
const _5fc2d34e = () => interopDefault(import('../pages/news/detail/_shorturl.vue' /* webpackChunkName: "pages/news/detail/_shorturl" */))
const _84542bd2 = () => interopDefault(import('../pages/news/list/_league.vue' /* webpackChunkName: "pages/news/list/_league" */))
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
    path: "/companyProfile",
    component: _cdbb8544,
    name: "companyProfile"
  }, {
    path: "/complaint",
    component: _12407f29,
    name: "complaint"
  }, {
    path: "/personalInformationService",
    component: _93b4588a,
    name: "personalInformationService"
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
    path: "/news/detail/:shorturl?",
    component: _5fc2d34e,
    name: "news-detail-shorturl"
  }, {
    path: "/news/list/:league?",
    component: _84542bd2,
    name: "news-list-league"
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
