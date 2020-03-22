import Vue from 'vue'
import Router from 'vue-router'
import { interopDefault } from './utils'
import scrollBehavior from './router.scrollBehavior.js'

const _2c91b46b = () => interopDefault(import('../pages/about.vue' /* webpackChunkName: "pages/about" */))
const _5d208968 = () => interopDefault(import('../pages/agreement.vue' /* webpackChunkName: "pages/agreement" */))
const _36f37cfe = () => interopDefault(import('../pages/companyProfile.vue' /* webpackChunkName: "pages/companyProfile" */))
const _114dfb89 = () => interopDefault(import('../pages/complaint.vue' /* webpackChunkName: "pages/complaint" */))
const _72f4a35b = () => interopDefault(import('../pages/personalInformationService.vue' /* webpackChunkName: "pages/personalInformationService" */))
const _75d066b8 = () => interopDefault(import('../pages/wechat.vue' /* webpackChunkName: "pages/wechat" */))
const _3f6abe82 = () => interopDefault(import('../pages/bbs/detail.vue' /* webpackChunkName: "pages/bbs/detail" */))
const _6a942fe8 = () => interopDefault(import('../pages/bbs/list.vue' /* webpackChunkName: "pages/bbs/list" */))
const _5f31cf6b = () => interopDefault(import('../pages/news/detail.vue' /* webpackChunkName: "pages/news/detail" */))
const _469e5c90 = () => interopDefault(import('../pages/news/list.vue' /* webpackChunkName: "pages/news/list" */))
const _4c498f30 = () => interopDefault(import('../pages/index.vue' /* webpackChunkName: "pages/index" */))

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
    component: _2c91b46b,
    name: "about"
  }, {
    path: "/agreement",
    component: _5d208968,
    name: "agreement"
  }, {
    path: "/companyProfile",
    component: _36f37cfe,
    name: "companyProfile"
  }, {
    path: "/complaint",
    component: _114dfb89,
    name: "complaint"
  }, {
    path: "/personalInformationService",
    component: _72f4a35b,
    name: "personalInformationService"
  }, {
    path: "/wechat",
    component: _75d066b8,
    name: "wechat"
  }, {
    path: "/bbs/detail",
    component: _3f6abe82,
    name: "bbs-detail"
  }, {
    path: "/bbs/list",
    component: _6a942fe8,
    name: "bbs-list"
  }, {
    path: "/news/detail",
    component: _5f31cf6b,
    name: "news-detail"
  }, {
    path: "/news/list",
    component: _469e5c90,
    name: "news-list"
  }, {
    path: "/",
    component: _4c498f30,
    name: "index"
  }],

  fallback: false
}

export function createRouter () {
  return new Router(routerOptions)
}
