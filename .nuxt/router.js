import Vue from 'vue'
import Router from 'vue-router'
import { interopDefault } from './utils'
import scrollBehavior from './router.scrollBehavior.js'

const _5c1fd3d0 = () => interopDefault(import('..\\pages\\about.vue' /* webpackChunkName: "pages_about" */))
const _f82766d6 = () => interopDefault(import('..\\pages\\agreement.vue' /* webpackChunkName: "pages_agreement" */))
const _b658a41e = () => interopDefault(import('..\\pages\\companyProfile.vue' /* webpackChunkName: "pages_companyProfile" */))
const _3819beb6 = () => interopDefault(import('..\\pages\\complaint.vue' /* webpackChunkName: "pages_complaint" */))
const _086bffce = () => interopDefault(import('..\\pages\\personalInformationService.vue' /* webpackChunkName: "pages_personalInformationService" */))
const _7c3e3aab = () => interopDefault(import('..\\pages\\wechat.vue' /* webpackChunkName: "pages_wechat" */))
const _be5d5824 = () => interopDefault(import('..\\pages\\m\\bbs\\detail\\_articleId.vue' /* webpackChunkName: "pages_m_bbs_detail__articleId" */))
const _3b9c0941 = () => interopDefault(import('..\\pages\\m\\nsport\\detail\\_articleId.vue' /* webpackChunkName: "pages_m_nsport_detail__articleId" */))
const _c9ace9da = () => interopDefault(import('..\\pages\\m\\nsport\\detail\\_shorturl.vue' /* webpackChunkName: "pages_m_nsport_detail__shorturl" */))
const _1c5fed01 = () => interopDefault(import('..\\pages\\bbs\\detail\\_articleId.vue' /* webpackChunkName: "pages_bbs_detail__articleId" */))
const _605e366b = () => interopDefault(import('..\\pages\\bbs\\list\\_sportType.vue' /* webpackChunkName: "pages_bbs_list__sportType" */))
const _74399eba = () => interopDefault(import('..\\pages\\m\\bbs\\_sportType.vue' /* webpackChunkName: "pages_m_bbs__sportType" */))
const _28839140 = () => interopDefault(import('..\\pages\\m\\nsport\\_cate.vue' /* webpackChunkName: "pages_m_nsport__cate" */))
const _09eb0242 = () => interopDefault(import('..\\pages\\sportNews\\detail\\_shorturl.vue' /* webpackChunkName: "pages_sportNews_detail__shorturl" */))
const _53d4c6ee = () => interopDefault(import('..\\pages\\sportNews\\list\\_league.vue' /* webpackChunkName: "pages_sportNews_list__league" */))
const _1cb01e46 = () => interopDefault(import('..\\pages\\index.vue' /* webpackChunkName: "pages_index" */))

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
    component: _5c1fd3d0,
    name: "about"
  }, {
    path: "/agreement",
    component: _f82766d6,
    name: "agreement"
  }, {
    path: "/companyProfile",
    component: _b658a41e,
    name: "companyProfile"
  }, {
    path: "/complaint",
    component: _3819beb6,
    name: "complaint"
  }, {
    path: "/personalInformationService",
    component: _086bffce,
    name: "personalInformationService"
  }, {
    path: "/wechat",
    component: _7c3e3aab,
    name: "wechat"
  }, {
    path: "/m/bbs/detail/:articleId?",
    component: _be5d5824,
    name: "m-bbs-detail-articleId"
  }, {
    path: "/m/nsport/detail/:articleId?",
    component: _3b9c0941,
    name: "m-nsport-detail-articleId"
  }, {
    path: "/m/nsport/detail/:shorturl?",
    component: _c9ace9da,
    name: "m-nsport-detail-shorturl"
  }, {
    path: "/bbs/detail/:articleId?",
    component: _1c5fed01,
    name: "bbs-detail-articleId"
  }, {
    path: "/bbs/list/:sportType?",
    component: _605e366b,
    name: "bbs-list-sportType"
  }, {
    path: "/m/bbs/:sportType?",
    component: _74399eba,
    name: "m-bbs-sportType"
  }, {
    path: "/m/nsport/:cate?",
    component: _28839140,
    name: "m-nsport-cate"
  }, {
    path: "/sportNews/detail/:shorturl?",
    component: _09eb0242,
    name: "sportNews-detail-shorturl"
  }, {
    path: "/sportNews/list/:league?",
    component: _53d4c6ee,
    name: "sportNews-list-league"
  }, {
    path: "/",
    component: _1cb01e46,
    name: "index"
  }],

  fallback: false
}

export function createRouter () {
  return new Router(routerOptions)
}
