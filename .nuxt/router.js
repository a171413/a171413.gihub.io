import Vue from 'vue'
import Router from 'vue-router'
import { normalizeURL, decode } from 'ufo'
import { interopDefault } from './utils'
import scrollBehavior from './router.scrollBehavior.js'

const _0b5e9948 = () => interopDefault(import('../pages/index.vue' /* webpackChunkName: "pages/index" */))
const _4f6a50a4 = () => interopDefault(import('../pages/calendar.vue' /* webpackChunkName: "pages/calendar" */))
const _dd4f9c8a = () => interopDefault(import('../pages/charts.vue' /* webpackChunkName: "pages/charts" */))
const _6b464cc2 = () => interopDefault(import('../pages/google.vue' /* webpackChunkName: "pages/google" */))
const _4ec50cb8 = () => interopDefault(import('../pages/icons.vue' /* webpackChunkName: "pages/icons" */))
const _47665c29 = () => interopDefault(import('../pages/introduce.vue' /* webpackChunkName: "pages/introduce" */))
const _a62b19de = () => interopDefault(import('../pages/lock.vue' /* webpackChunkName: "pages/lock" */))
const _780f531a = () => interopDefault(import('../pages/login.vue' /* webpackChunkName: "pages/login" */))
const _41ed1272 = () => interopDefault(import('../pages/notifications.vue' /* webpackChunkName: "pages/notifications" */))
const _169dc860 = () => interopDefault(import('../pages/pricing.vue' /* webpackChunkName: "pages/pricing" */))
const _02b56cee = () => interopDefault(import('../pages/register.vue' /* webpackChunkName: "pages/register" */))
const _652ac0a6 = () => interopDefault(import('../pages/regular.vue' /* webpackChunkName: "pages/regular" */))
const _d38f6518 = () => interopDefault(import('../pages/rtl.vue' /* webpackChunkName: "pages/rtl" */))
const _f3aaf81a = () => interopDefault(import('../pages/starter-page.vue' /* webpackChunkName: "pages/starter-page" */))
const _4e13537b = () => interopDefault(import('../pages/test/index.vue' /* webpackChunkName: "pages/test/index" */))
const _5e77a2d6 = () => interopDefault(import('../pages/typography.vue' /* webpackChunkName: "pages/typography" */))
const _2b3a49b1 = () => interopDefault(import('../pages/user.vue' /* webpackChunkName: "pages/user" */))
const _61d8ce39 = () => interopDefault(import('../pages/widgets.vue' /* webpackChunkName: "pages/widgets" */))
const _c7da7f24 = () => interopDefault(import('../pages/components/buttons.vue' /* webpackChunkName: "pages/components/buttons" */))
const _da319afa = () => interopDefault(import('../pages/components/grid-system.vue' /* webpackChunkName: "pages/components/grid-system" */))
const _0f9a90c7 = () => interopDefault(import('../pages/components/icons.vue' /* webpackChunkName: "pages/components/icons" */))
const _d18352d6 = () => interopDefault(import('../pages/components/notifications.vue' /* webpackChunkName: "pages/components/notifications" */))
const _1cf13492 = () => interopDefault(import('../pages/components/panels.vue' /* webpackChunkName: "pages/components/panels" */))
const _3f04d7ac = () => interopDefault(import('../pages/components/sweet-alert.vue' /* webpackChunkName: "pages/components/sweet-alert" */))
const _29d1d55c = () => interopDefault(import('../pages/components/typography.vue' /* webpackChunkName: "pages/components/typography" */))
const _7af6647f = () => interopDefault(import('../pages/forms/extended.vue' /* webpackChunkName: "pages/forms/extended" */))
const _1b773d46 = () => interopDefault(import('../pages/forms/regular.vue' /* webpackChunkName: "pages/forms/regular" */))
const _f76de782 = () => interopDefault(import('../pages/forms/validation.vue' /* webpackChunkName: "pages/forms/validation" */))
const _429d719e = () => interopDefault(import('../pages/forms/wizard.vue' /* webpackChunkName: "pages/forms/wizard" */))
const _6a1d83b1 = () => interopDefault(import('../pages/GeneralViews/NotFoundPage.vue' /* webpackChunkName: "pages/GeneralViews/NotFoundPage" */))
const _d5958150 = () => interopDefault(import('../pages/maps/full-screen.vue' /* webpackChunkName: "pages/maps/full-screen" */))
const _1f3c763b = () => interopDefault(import('../pages/maps/google.vue' /* webpackChunkName: "pages/maps/google" */))
const _7f2f7f58 = () => interopDefault(import('../pages/maps/vector-map.vue' /* webpackChunkName: "pages/maps/vector-map" */))
const _8077ceae = () => interopDefault(import('../pages/pages/rtl.vue' /* webpackChunkName: "pages/pages/rtl" */))
const _d93443dc = () => interopDefault(import('../pages/pages/timeline.vue' /* webpackChunkName: "pages/pages/timeline" */))
const _3327e51c = () => interopDefault(import('../pages/pages/user.vue' /* webpackChunkName: "pages/pages/user" */))
const _4a17b255 = () => interopDefault(import('../pages/table-list/extended.vue' /* webpackChunkName: "pages/table-list/extended" */))
const _a10c7f3e = () => interopDefault(import('../pages/table-list/paginated.vue' /* webpackChunkName: "pages/table-list/paginated" */))
const _32a9dcb0 = () => interopDefault(import('../pages/table-list/regular.vue' /* webpackChunkName: "pages/table-list/regular" */))

const emptyFn = () => {}

Vue.use(Router)

export const routerOptions = {
  mode: 'history',
  base: '/',
  linkActiveClass: 'nuxt-link-active',
  linkExactActiveClass: 'active',
  scrollBehavior,

  routes: [{
    path: "/ar",
    component: _0b5e9948,
    name: "index___ar"
  }, {
    path: "/calendar",
    component: _4f6a50a4,
    name: "calendar___en"
  }, {
    path: "/charts",
    component: _dd4f9c8a,
    name: "charts___en"
  }, {
    path: "/google",
    component: _6b464cc2,
    name: "google___en"
  }, {
    path: "/icons",
    component: _4ec50cb8,
    name: "icons___en"
  }, {
    path: "/introduce",
    component: _47665c29,
    name: "introduce___en"
  }, {
    path: "/lock",
    component: _a62b19de,
    name: "lock___en"
  }, {
    path: "/login",
    component: _780f531a,
    name: "login___en"
  }, {
    path: "/notifications",
    component: _41ed1272,
    name: "notifications___en"
  }, {
    path: "/pricing",
    component: _169dc860,
    name: "pricing___en"
  }, {
    path: "/register",
    component: _02b56cee,
    name: "register___en"
  }, {
    path: "/regular",
    component: _652ac0a6,
    name: "regular___en"
  }, {
    path: "/rtl",
    component: _d38f6518,
    name: "rtl___en"
  }, {
    path: "/starter-page",
    component: _f3aaf81a,
    name: "starter-page___en"
  }, {
    path: "/test",
    component: _4e13537b,
    name: "test___en"
  }, {
    path: "/typography",
    component: _5e77a2d6,
    name: "typography___en"
  }, {
    path: "/user",
    component: _2b3a49b1,
    name: "user___en"
  }, {
    path: "/widgets",
    component: _61d8ce39,
    name: "widgets___en"
  }, {
    path: "/ar/calendar",
    component: _4f6a50a4,
    name: "calendar___ar"
  }, {
    path: "/ar/charts",
    component: _dd4f9c8a,
    name: "charts___ar"
  }, {
    path: "/ar/google",
    component: _6b464cc2,
    name: "google___ar"
  }, {
    path: "/ar/icons",
    component: _4ec50cb8,
    name: "icons___ar"
  }, {
    path: "/ar/introduce",
    component: _47665c29,
    name: "introduce___ar"
  }, {
    path: "/ar/lock",
    component: _a62b19de,
    name: "lock___ar"
  }, {
    path: "/ar/login",
    component: _780f531a,
    name: "login___ar"
  }, {
    path: "/ar/notifications",
    component: _41ed1272,
    name: "notifications___ar"
  }, {
    path: "/ar/pricing",
    component: _169dc860,
    name: "pricing___ar"
  }, {
    path: "/ar/register",
    component: _02b56cee,
    name: "register___ar"
  }, {
    path: "/ar/regular",
    component: _652ac0a6,
    name: "regular___ar"
  }, {
    path: "/ar/rtl",
    component: _d38f6518,
    name: "rtl___ar"
  }, {
    path: "/ar/starter-page",
    component: _f3aaf81a,
    name: "starter-page___ar"
  }, {
    path: "/ar/test",
    component: _4e13537b,
    name: "test___ar"
  }, {
    path: "/ar/typography",
    component: _5e77a2d6,
    name: "typography___ar"
  }, {
    path: "/ar/user",
    component: _2b3a49b1,
    name: "user___ar"
  }, {
    path: "/ar/widgets",
    component: _61d8ce39,
    name: "widgets___ar"
  }, {
    path: "/components/buttons",
    component: _c7da7f24,
    name: "components-buttons___en"
  }, {
    path: "/components/grid-system",
    component: _da319afa,
    name: "components-grid-system___en"
  }, {
    path: "/components/icons",
    component: _0f9a90c7,
    name: "components-icons___en"
  }, {
    path: "/components/notifications",
    component: _d18352d6,
    name: "components-notifications___en"
  }, {
    path: "/components/panels",
    component: _1cf13492,
    name: "components-panels___en"
  }, {
    path: "/components/sweet-alert",
    component: _3f04d7ac,
    name: "components-sweet-alert___en"
  }, {
    path: "/components/typography",
    component: _29d1d55c,
    name: "components-typography___en"
  }, {
    path: "/forms/extended",
    component: _7af6647f,
    name: "forms-extended___en"
  }, {
    path: "/forms/regular",
    component: _1b773d46,
    name: "forms-regular___en"
  }, {
    path: "/forms/validation",
    component: _f76de782,
    name: "forms-validation___en"
  }, {
    path: "/forms/wizard",
    component: _429d719e,
    name: "forms-wizard___en"
  }, {
    path: "/GeneralViews/NotFoundPage",
    component: _6a1d83b1,
    name: "GeneralViews-NotFoundPage___en"
  }, {
    path: "/maps/full-screen",
    component: _d5958150,
    name: "maps-full-screen___en"
  }, {
    path: "/maps/google",
    component: _1f3c763b,
    name: "maps-google___en"
  }, {
    path: "/maps/vector-map",
    component: _7f2f7f58,
    name: "maps-vector-map___en"
  }, {
    path: "/pages/rtl",
    component: _8077ceae,
    name: "pages-rtl___en"
  }, {
    path: "/pages/timeline",
    component: _d93443dc,
    name: "pages-timeline___en"
  }, {
    path: "/pages/user",
    component: _3327e51c,
    name: "pages-user___en"
  }, {
    path: "/table-list/extended",
    component: _4a17b255,
    name: "table-list-extended___en"
  }, {
    path: "/table-list/paginated",
    component: _a10c7f3e,
    name: "table-list-paginated___en"
  }, {
    path: "/table-list/regular",
    component: _32a9dcb0,
    name: "table-list-regular___en"
  }, {
    path: "/ar/components/buttons",
    component: _c7da7f24,
    name: "components-buttons___ar"
  }, {
    path: "/ar/components/grid-system",
    component: _da319afa,
    name: "components-grid-system___ar"
  }, {
    path: "/ar/components/icons",
    component: _0f9a90c7,
    name: "components-icons___ar"
  }, {
    path: "/ar/components/notifications",
    component: _d18352d6,
    name: "components-notifications___ar"
  }, {
    path: "/ar/components/panels",
    component: _1cf13492,
    name: "components-panels___ar"
  }, {
    path: "/ar/components/sweet-alert",
    component: _3f04d7ac,
    name: "components-sweet-alert___ar"
  }, {
    path: "/ar/components/typography",
    component: _29d1d55c,
    name: "components-typography___ar"
  }, {
    path: "/ar/forms/extended",
    component: _7af6647f,
    name: "forms-extended___ar"
  }, {
    path: "/ar/forms/regular",
    component: _1b773d46,
    name: "forms-regular___ar"
  }, {
    path: "/ar/forms/validation",
    component: _f76de782,
    name: "forms-validation___ar"
  }, {
    path: "/ar/forms/wizard",
    component: _429d719e,
    name: "forms-wizard___ar"
  }, {
    path: "/ar/GeneralViews/NotFoundPage",
    component: _6a1d83b1,
    name: "GeneralViews-NotFoundPage___ar"
  }, {
    path: "/ar/maps/full-screen",
    component: _d5958150,
    name: "maps-full-screen___ar"
  }, {
    path: "/ar/maps/google",
    component: _1f3c763b,
    name: "maps-google___ar"
  }, {
    path: "/ar/maps/vector-map",
    component: _7f2f7f58,
    name: "maps-vector-map___ar"
  }, {
    path: "/ar/pages/rtl",
    component: _8077ceae,
    name: "pages-rtl___ar"
  }, {
    path: "/ar/pages/timeline",
    component: _d93443dc,
    name: "pages-timeline___ar"
  }, {
    path: "/ar/pages/user",
    component: _3327e51c,
    name: "pages-user___ar"
  }, {
    path: "/ar/table-list/extended",
    component: _4a17b255,
    name: "table-list-extended___ar"
  }, {
    path: "/ar/table-list/paginated",
    component: _a10c7f3e,
    name: "table-list-paginated___ar"
  }, {
    path: "/ar/table-list/regular",
    component: _32a9dcb0,
    name: "table-list-regular___ar"
  }, {
    path: "/",
    component: _0b5e9948,
    name: "index___en"
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
