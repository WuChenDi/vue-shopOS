import Vue from 'vue'
import Router from 'vue-router'
// import HelloWorld from '@/components/HelloWorld'
import GoodsList from '@/views/GoodsList'

Vue.use(Router)

export default new Router({
  // 去除项目url中的#
  mode: 'history',
  routes: [
    {
      path: '/goods/:goodsId/name/:name',
      name: 'GoodsList',
      component: GoodsList
    }
  ]
})
