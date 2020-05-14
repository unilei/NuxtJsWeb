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
const _1c5fed01 = () => interopDefault(import('..\\pages\\bbs\\detail\\_articleId.vue' /* webpackChunkName: "pages_bbs_detail__articleId" */))
const _605e366b = () => interopDefault(import('..\\pages\\bbs\\list\\_sportType.vue' /* webpackChunkName: "pages_bbs_list__sportType" */))
const _09eb0242 = () => interopDefault(import('..\\pages\\sportNews\\detail\\_shorturl.vue' /* webpackChunkName: "pages_sportNews_detail__shorturl" */))
const _53d4c6ee = () => interopDefault(import('..\\pages\\sportNews\\list\\_league.vue' /* webpackChunkName: "pages_sportNews_list__league" */))
const _752d722c = () => interopDefault(import('..\\pages\\nsforum\\_sportType\\index.vue' /* webpackChunkName: "pages_nsforum__sportType_index" */))
const _5e8b9e61 = () => interopDefault(import('..\\pages\\nsnews\\_league\\index.vue' /* webpackChunkName: "pages_nsnews__league_index" */))
const _5ea71036 = () => interopDefault(import('..\\pages\\sportNews\\_league\\index.vue' /* webpackChunkName: "pages_sportNews__league_index" */))
const _ba6d2370 = () => interopDefault(import('..\\pages\\nsforum\\_sportType\\_articleId.vue' /* webpackChunkName: "pages_nsforum__sportType__articleId" */))
const _411af2e1 = () => interopDefault(import('..\\pages\\nsnews\\_league\\_shorturl.vue' /* webpackChunkName: "pages_nsnews__league__shorturl" */))
const _00611b94 = () => interopDefault(import('..\\pages\\sportNews\\_league\\_shorturl.vue' /* webpackChunkName: "pages_sportNews__league__shorturl" */))
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
    path: "/bbs/detail/:articleId?",
    component: _1c5fed01,
    name: "bbs-detail-articleId"
  }, {
    path: "/bbs/list/:sportType?",
    component: _605e366b,
    name: "bbs-list-sportType"
  }, {
    path: "/sportNews/detail/:shorturl?",
    component: _09eb0242,
    name: "sportNews-detail-shorturl"
  }, {
    path: "/sportNews/list/:league?",
    component: _53d4c6ee,
    name: "sportNews-list-league"
  }, {
    path: "/nsforum/:sportType?",
    component: _752d722c,
    name: "nsforum-sportType"
  }, {
    path: "/nsnews/:league?",
    component: _5e8b9e61,
    name: "nsnews-league"
  }, {
    path: "/sportNews/:league?",
    component: _5ea71036,
    name: "sportNews-league"
  }, {
    path: "/nsforum/:sportType?/:articleId",
    component: _ba6d2370,
    name: "nsforum-sportType-articleId"
  }, {
    path: "/nsnews/:league?/:shorturl",
    component: _411af2e1,
    name: "nsnews-league-shorturl"
  }, {
    path: "/sportNews/:league?/:shorturl",
    component: _00611b94,
    name: "sportNews-league-shorturl"
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
