import Vue from 'vue'
import Router from 'vue-router'
// import HelloWorld from '@/components/HelloWorld'
import GoodsList from '../views-demo/GoodsList.vue'
import Title from '@/views-demo/Title.vue'
import Image from '@/views-demo/Image.vue'
import Cart from '@/views-demo/Cart.vue'
// import Title from './../views-demo/Title.vue'
// import Image from './../views-demo/Image.vue'
// import Cart from './../views-demo/Cart.vue'

Vue.use(Router)

export default new Router({
  mode: 'history',// history或者hash（#）
  routes: [
    {
      // path: '/goods/:goodsId',
      // path: '/goods/:goodsId/user/:name',
      path: '/',
      name: 'GoodsList',
      // component: GoodsList,
      components: {
        default: GoodsList,
        title: Title,
        img:Image
      }
      /*children: [
        {
          path: 'title',
          name: 'title',
          component: Title
        },
        {
          path: 'img',
          name: 'img',
          component: Image
        }
      ]*/
    },
    {
      // path: '/cart',
      path: '/cart/:cartId',
      name: 'cart',
      component: Cart
    }
  ]
})
