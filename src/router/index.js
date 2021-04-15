import Vue from 'vue'
import Router from 'vue-router'

Vue.use(Router)

export default new Router({
  mode:'history',
  linkActiveClass: 'open active',
  scrollBehavior: (to, from, savedPosition) => {
    if (to.meta.keepAlive && savedPosition) return savedPosition
    else return { x: 0, y: 0 }
  },
  routes: [
    {
      path: '/',
      redirect:'/home',
    },
    {
      path:'/home',
      name:'home页',
      component: resolve => require(['@/views/home'], resolve)
    },
    {
      path:'/cvtable',
      name:'表格简历',
      component: resolve => require(['@/views/cvtable'],resolve)
    },
    {
      path:'/cvpage',
      name:'简历页',
      component: resolve => require(['@/views/cvpage'],resolve)
    },
    {
      path: '/WaterFall',
      name: 'WaterFall',
      component: resolve => require(['@/components/wfLayout/WaterFall'], resolve)
    },
    {
      path:'/WaterFallWidth',
      name:'WaterFallWidth',
      component: resolve => require(['@/components/wfLayout/WaterFallWidth'], resolve)
    },
    {
      path:'/WaterFallHeight',
      name:'WaterFallHeight',
      component: resolve => require(['@/components/wfLayout/WaterFallHeight'], resolve)
    },
    {
      path:'/WaterFallHeightJS',
      name:'WaterFallHeightJS',
      component:resolve => require(['@/components/wfLayout/WaterFallHeightJS'], resolve)
    },
    {
      path:'/companysite',
      name:'companySiteLayout',
      component: resolve => require(['@/views/companyWebsite'],resolve)
    },
    {
      path:'/artisticsite',
      name:'artisticSiteLayout',
      component: resolve => require(['@/views/artisticWebsite'],resolve)
    }
  ]
})
